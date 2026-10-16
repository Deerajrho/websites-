"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Eases mouse-wheel scrolling (otherwise Windows moves the page in ~100px steps) and glides menu links to
// their section. Touch screens keep their own native scrolling; reduced-motion users get instant scrolling
// (Lenis honours prefers-reduced-motion by default).
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      anchors: true, // the html scroll-padding-top in globals.css already lands sections below the header
    });
    return () => lenis.destroy();
  }, []);

  return null;
}
