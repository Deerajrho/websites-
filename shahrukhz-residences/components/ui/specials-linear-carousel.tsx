"use client";

import React, { useEffect, useRef, useState } from "react";
import { MotionConfig, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Adapted from the "specials linear carousel" component:
// - colours mapped to this site's palette (it expected shadcn tokens we don't define)
// - autoplay keeps a fractional position, so slow speeds still move (browsers round scrollLeft)
// - the loop resets by exactly one set of items, not to 0, so the seam is invisible
// - arrows move one view at a time and loop, instead of jumping to the start/end
// - the duplicate set is hidden from screen readers and keyboard; autoplay respects reduced motion

interface CarouselProps {
  items: React.JSX.Element[];
  /** Accessible name for the carousel. */
  label: string;
  initialScroll?: number;
  autoplay?: boolean;
  /** Pixels per frame (about 60 frames a second). */
  autoplaySpeed?: number;
  /** Width of each item, e.g. "w-[calc((100cqw-2rem)/3)]" for three per view. 100cqw = the carousel's width. */
  itemClassName?: string;
  /** Shown left of the arrows (usually the section heading), so the controls are visible without scrolling. */
  header?: React.ReactNode;
}

export const Carousel = ({
  items,
  label,
  initialScroll = 0,
  autoplay = false,
  autoplaySpeed = 0.5,
  itemClassName = "w-80",
  header,
}: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  // Duplicate items to create the infinite effect.
  const loopedItems = [...items, ...items];

  // Distance from the first item to its duplicate: one full set.
  const setWidth = () => {
    const row = rowRef.current;
    if (!row) return 0;
    const first = row.children[0] as HTMLElement;
    const copy = row.children[items.length] as HTMLElement;
    return copy.offsetLeft - first.offsetLeft;
  };

  useEffect(() => {
    if (carouselRef.current) carouselRef.current.scrollLeft = initialScroll;
  }, [initialScroll]);

  // Auto-scroll logic.
  useEffect(() => {
    const el = carouselRef.current;
    if (!el || !autoplay || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let pos = el.scrollLeft;
    let lastSet = el.scrollLeft;
    let frame = 0;

    const scroll = () => {
      // Someone dragged, swiped or used the arrows: carry on from where they left it.
      if (Math.abs(el.scrollLeft - lastSet) > 1) pos = el.scrollLeft;
      if (!paused.current && !document.hidden) {
        pos += autoplaySpeed;
        const set = setWidth();
        if (set > 0 && pos >= set) pos -= set; // the duplicate is at the edge: step back one set, same picture
        el.scrollLeft = pos;
      }
      lastSet = el.scrollLeft;
      frame = requestAnimationFrame(scroll);
    };

    frame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- setWidth only reads refs
  }, [autoplay, autoplaySpeed, items.length]);

  // Arrows: one view at a time, looping in both directions.
  const step = (dir: 1 | -1) => {
    const el = carouselRef.current;
    if (!el) return;
    const set = setWidth();
    if (dir === -1 && el.scrollLeft < el.clientWidth) el.scrollLeft += set; // hop into the duplicate so "back" keeps going
    if (dir === 1 && el.scrollLeft + el.clientWidth >= set * 2 - 1) el.scrollLeft -= set;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  // Drag to scroll logic.
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeftState(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll-fast
    if (carouselRef.current) carouselRef.current.scrollLeft = scrollLeftState - walk;
  };

  const pause = () => (paused.current = true);
  const resume = () => (paused.current = false);

  return (
    <MotionConfig reducedMotion="user">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        className="relative w-full"
        onMouseEnter={pause}
        onMouseLeave={() => {
          resume();
          setIsDragging(false);
        }}
        onFocus={pause}
        onBlur={resume}
        onTouchStart={pause}
        onTouchEnd={() => setTimeout(resume, 4000)}
      >
        <div className="mb-8 flex items-end justify-between gap-6">
          <div className="min-w-0 flex-1">{header}</div>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              aria-label={`Previous: ${label}`}
              className="relative z-40 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-navy hover:bg-sky"
              onClick={() => step(-1)}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={`Next: ${label}`}
              className="relative z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ocean text-white hover:bg-navy"
              onClick={() => step(1)}
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div
          className={cn(
            "@container flex w-full cursor-grab overflow-x-scroll overscroll-x-contain py-2 [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden",
            isDragging && "cursor-grabbing",
          )}
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseUp={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
        >
          <div ref={rowRef} className="flex flex-row justify-start gap-4">
            {loopedItems.map((item, index) => {
              const copy = index >= items.length;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % items.length), ease: "easeOut" }}
                  key={"card" + index}
                  className={cn("flex shrink-0", itemClassName)}
                  // The duplicate set only makes the loop seamless.
                  aria-hidden={copy || undefined}
                  inert={copy || undefined}
                >
                  {item}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </MotionConfig>
  );
};

export default Carousel;
