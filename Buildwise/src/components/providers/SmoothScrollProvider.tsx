"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Lenis from "lenis";

function isSafari() {
  if (typeof navigator === "undefined") return false;
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const safari = isSafari();
    const lenis = new Lenis({
      duration: 1.1,
      lerp: safari ? 0.12 : 0.1,
      smoothWheel: true,
      syncTouch: !safari,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
