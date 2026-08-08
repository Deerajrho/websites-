"use client";

import { useEffect, useState } from "react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

export default function Hero() {
  const [showHeadline, setShowHeadline] = useState(false);
  const [showCue, setShowCue] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const revealTimeout = setTimeout(
      () => setShowHeadline(true),
      reducedMotion ? 0 : 500
    );

    function onScroll() {
      setShowCue(window.scrollY < 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(revealTimeout);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-between px-6 py-16 text-center">
      <EyebrowBadge>Buildwise.Hustlers // Digital Command Center</EyebrowBadge>

      <div className="relative flex items-center justify-center">
        <div
          aria-hidden="true"
          className="absolute -inset-x-12 -inset-y-16 rounded-[999px] transition-opacity duration-700"
          style={{
            opacity: showHeadline ? 1 : 0,
            background:
              "radial-gradient(ellipse at center, rgba(5,6,9,0.78) 0%, rgba(5,6,9,0.5) 45%, rgba(5,6,9,0) 72%)",
            filter: "blur(24px)",
          }}
        />
        <h1
          className="relative max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-fg transition-opacity duration-700 md:text-6xl"
          style={{
            opacity: showHeadline ? 1 : 0,
            textShadow:
              "0 4px 28px rgba(0,0,0,0.85), 0 2px 10px rgba(0,0,0,0.7), 0 0 32px var(--color-accent-soft)",
          }}
        >
          Building Digital Experiences That Grow Businesses
        </h1>
      </div>

      <div
        className="flex flex-col items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted transition-opacity duration-500 motion-reduce:hidden"
        style={{ opacity: showCue ? 1 : 0 }}
      >
        <span>Scroll</span>
        <span className="h-8 w-px animate-pulse bg-current" />
      </div>
    </section>
  );
}
