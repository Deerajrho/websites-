"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

export function Counter({
  to,
  suffix = "",
  duration = 1.4,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(to);
      return;
    }

    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (value) => setDisplay(Math.round(value)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
