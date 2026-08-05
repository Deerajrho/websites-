"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export type ScrollColumn = {
  id: string;
  label: string;
  items: string[];
  bgImage?: string;
  bgPosition?: string;
};

type TweakConfig = {
  dimOpacity: number;
  highlightColor: string;
};

const defaultConfig: TweakConfig = {
  dimOpacity: 0.28,
  highlightColor: "#e4c24c",
};

function ScrollColumnList({ column, config }: { column: ScrollColumn; config: TweakConfig }) {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const items = Array.from(list.querySelectorAll<HTMLLIElement>("li"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      gsap.set(items, { opacity: 1 });
      return;
    }

    // Opacity + color only — no scale/transform. A left-anchored scale here
    // previously made each line's right edge grow/shrink as it dimmed or
    // highlighted, which reads as sideways drift. Items should only ever
    // appear to move with the list's own vertical scroll.
    gsap.set(items, { opacity: config.dimOpacity });

    const applyProximity = () => {
      const box = list.getBoundingClientRect();
      const centerY = box.top + box.height / 2;
      const half = box.height / 2;

      items.forEach((item) => {
        const r = item.getBoundingClientRect();
        const itemCenter = r.top + r.height / 2;
        const dist = Math.abs(itemCenter - centerY);
        const proximity = gsap.utils.clamp(0, 1, 1 - dist / half);
        const eased = proximity * proximity;

        gsap.set(item, {
          opacity: gsap.utils.mapRange(0, 1, config.dimOpacity, 1, eased),
          color: eased > 0.55 ? config.highlightColor : "",
        });
      });
    };

    // Native scroll listener, rAF-throttled: ScrollTrigger's custom-scroller
    // tracking doesn't fire reliably when trigger === scroller (a container
    // scrolling itself, as opposed to the page), so we drive the proximity
    // math directly off the container's own scroll events.
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        applyProximity();
        ticking = false;
      });
    };

    applyProximity();
    list.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      list.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [column.items, config]);

  return (
    <div
      className="services-scroll__col"
      style={
        column.bgImage
          ? { backgroundImage: `url(${column.bgImage})`, backgroundPosition: column.bgPosition ?? "center" }
          : undefined
      }
    >
      <div className="services-scroll__viewport">
        <ul ref={listRef} className="services-scroll__list" aria-label={`${column.label} services`}>
          {column.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="services-scroll__fade services-scroll__fade--top" aria-hidden="true" />
        <div className="services-scroll__fade services-scroll__fade--bottom" aria-hidden="true" />
      </div>
    </div>
  );
}

export default function ScrollAnimation({ columns }: { columns: ScrollColumn[] }) {
  const configRef = useRef<TweakConfig>({ ...defaultConfig });

  return (
    <div className="services-scroll__grid">
      {columns.map((col) => (
        <ScrollColumnList key={col.id} column={col} config={configRef.current} />
      ))}
    </div>
  );
}
