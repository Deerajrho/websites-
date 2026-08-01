"use client";

import React, { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote, Star, X } from "lucide-react";

import { cn } from "@/lib/utils";

// ===== Types and Interfaces =====
export interface iTestimonial {
  name: string;
  designation: string;
  description: string;
  profileImage?: string;
  rating?: number;
}

interface iCarouselProps {
  items: React.ReactElement<{
    testimonial: iTestimonial;
    index: number;
    layout?: boolean;
    onCardClose: () => void;
  }>[];
  initialScroll?: number;
}

// ===== Custom Hooks =====
const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  onOutsideClick: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      onOutsideClick();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, onOutsideClick]);
};

// ===== Components =====
const Carousel = ({ items, initialScroll = 0 }: iCarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const isMobile = () => {
    return typeof window !== "undefined" && window.innerWidth < 768;
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  return (
    <div className="relative w-full mt-10">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] py-5"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div
          className={cn(
            "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l from-bg-light",
          )}
        />
        <div className={cn("flex flex-row justify-start gap-4 pl-3", "max-w-5xl mx-auto")}>
          {items.map((item, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.15 * index,
                    ease: "easeOut",
                  },
                }}
                viewport={{ once: true }}
                key={`card-${index}`}
                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
              >
                {React.cloneElement(item, {
                  onCardClose: () => {
                    return handleCardClose(index);
                  },
                })}
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-ink flex items-center justify-center disabled:opacity-40 hover:bg-ink-soft transition-colors duration-200"
          onClick={handleScrollLeft}
          disabled={!canScrollLeft}
          aria-label="Scroll reviews left"
        >
          <ArrowLeft className="h-5 w-5 text-cream" />
        </button>
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-ink flex items-center justify-center disabled:opacity-40 hover:bg-ink-soft transition-colors duration-200"
          onClick={handleScrollRight}
          disabled={!canScrollRight}
          aria-label="Scroll reviews right"
        >
          <ArrowRight className="h-5 w-5 text-cream" />
        </button>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  testimonial,
  index,
  layout = false,
  onCardClose = () => {},
  backgroundImage,
}: {
  testimonial: iTestimonial;
  index: number;
  layout?: boolean;
  onCardClose?: () => void;
  backgroundImage?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleExpand = () => {
    return setIsExpanded(true);
  };
  const handleCollapse = () => {
    setIsExpanded(false);
    onCardClose();
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCollapse();
      }
    };

    if (isExpanded) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.dataset.scrollY = scrollY.toString();
    } else {
      const scrollY = parseInt(document.body.dataset.scrollY || "0", 10);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo({ top: scrollY, behavior: "instant" });
    }

    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      return window.removeEventListener("keydown", handleEscapeKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  useOutsideClick(containerRef, handleCollapse);

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 h-screen overflow-hidden z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-ink/40 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${testimonial.name}` : undefined}
              className="max-w-5xl mx-auto bg-gradient-to-b from-bg-light to-cream h-full z-[60] p-4 md:p-10 rounded-3xl relative md:mt-10"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto rounded-full flex items-center justify-center bg-ink"
                onClick={handleCollapse}
                aria-label="Close"
              >
                <X className="h-5 w-5 text-cream absolute" />
              </button>
              <motion.p
                layoutId={layout ? `category-${testimonial.name}` : undefined}
                className="px-0 md:px-20 text-ink-soft text-lg font-display font-light underline underline-offset-8 mt-2"
              >
                {testimonial.designation}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${testimonial.name}` : undefined}
                className="px-0 md:px-20 text-2xl md:text-4xl italic text-ink mt-4 font-display lowercase"
              >
                {testimonial.name}
              </motion.p>
              {testimonial.rating != null && (
                <StarRating rating={testimonial.rating} className="justify-start px-0 md:px-20 mt-2" />
              )}
              <div className="py-8 text-ink-soft px-0 md:px-20 text-3xl lowercase font-light font-display leading-snug tracking-wide">
                <Quote className="h-6 w-6 text-foil" />
                {testimonial.description}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${testimonial.name}` : undefined}
        onClick={handleExpand}
        className=""
        whileHover={{
          rotateX: 2,
          rotateY: 2,
          rotate: 3,
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        <div
          className={`${index % 2 === 0 ? "rotate-0" : "-rotate-0"} rounded-3xl bg-gradient-to-b from-bg-light to-cream h-[500px] md:h-[550px] w-80 md:w-96 overflow-hidden flex flex-col items-center justify-center relative z-10 shadow-md`}
        >
          {backgroundImage && (
            <div className="absolute opacity-20 inset-0">
              <img
                className="block w-full h-full object-center object-cover"
                src={backgroundImage}
                alt=""
                aria-hidden="true"
              />
            </div>
          )}
          <ProfileImage src={testimonial.profileImage} alt={testimonial.name} name={testimonial.name} />
          {testimonial.rating != null && <StarRating rating={testimonial.rating} className="mt-3" />}
          <motion.p
            layoutId={layout ? `title-${testimonial.name}` : undefined}
            className="text-ink text-2xl font-normal text-center [text-wrap:balance] font-display mt-4 lowercase px-3"
          >
            {testimonial.description.length > 100
              ? `${testimonial.description.slice(0, 100)}...`
              : testimonial.description}
          </motion.p>
          <motion.p
            layoutId={layout ? `category-${testimonial.name}` : undefined}
            className="text-ink text-xl md:text-2xl font-light font-display italic text-center mt-5 lowercase"
          >
            {testimonial.name}.
          </motion.p>
          <motion.p
            layoutId={layout ? `category-${testimonial.name}` : undefined}
            className="text-ink-soft text-base font-light font-display italic text-center mt-1 lowercase underline underline-offset-8 decoration-1"
          >
            {testimonial.designation.length > 25
              ? `${testimonial.designation.slice(0, 25)}...`
              : testimonial.designation}
          </motion.p>
        </div>
      </motion.button>
    </>
  );
};

const ProfileImage = ({
  src,
  alt,
  name,
}: {
  src?: string;
  alt?: string;
  name?: string;
}) => {
  const [isLoading, setLoading] = useState(true);

  if (!src) {
    const initials =
      name
        ?.split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0]?.toUpperCase())
        .join("") || "?";

    return (
      <div className="w-[90px] h-[90px] md:w-[150px] md:h-[150px] opacity-90 rounded-full border-[3px] border-solid border-foil/60 aspect-square flex-none flex items-center justify-center bg-ink">
        <span className="font-display text-2xl text-cream md:text-3xl">{initials}</span>
      </div>
    );
  }

  return (
    <div className="w-[90px] h-[90px] md:w-[150px] md:h-[150px] opacity-90 overflow-hidden rounded-full border-[3px] border-solid border-foil/60 aspect-square flex-none relative">
      <img
        className={cn(
          "transition duration-300 absolute top-0 inset-0 h-full w-full object-cover",
          isLoading ? "blur-sm" : "blur-0",
        )}
        onLoad={() => {
          return setLoading(false);
        }}
        src={src}
        loading="lazy"
        decoding="async"
        alt={alt || "Profile image"}
      />
    </div>
  );
};

const StarRating = ({ rating, className }: { rating: number; className?: string }) => {
  return (
    <div
      className={cn("flex items-center justify-center gap-0.5", className)}
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const fillPercent = Math.max(0, Math.min(1, rating - i)) * 100;
        return (
          <span key={i} className="relative inline-block h-4 w-4 md:h-[18px] md:w-[18px]">
            <Star className="absolute inset-0 h-full w-full text-foil/30" aria-hidden="true" />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fillPercent}%` }}
            >
              <Star className="h-full w-full fill-foil text-foil" aria-hidden="true" />
            </span>
          </span>
        );
      })}
    </div>
  );
};

// Export the components
export { Carousel, TestimonialCard, ProfileImage, StarRating };
