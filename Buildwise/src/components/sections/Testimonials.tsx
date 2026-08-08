"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { GlassPanel } from "@/components/ui/GlassPanel";

const TESTIMONIALS = [
  {
    quote:
      "Our new site paid for itself in the first month — bookings are up and we're not chasing leads by hand anymore.",
    name: "Placeholder Client",
    role: "Owner, Local Restaurant Group",
  },
  {
    quote:
      "The chatbot handles half our support questions before a human ever needs to step in. It just works.",
    name: "Placeholder Client",
    role: "Operations Lead, Home Services Co.",
  },
  {
    quote:
      "SEO and the automation setup together meant we stopped losing leads between spreadsheets and inboxes.",
    name: "Placeholder Client",
    role: "Founder, Real Estate Team",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const current = TESTIMONIALS[index];

  return (
    <section className="bg-base/85 px-6 py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 text-center">
        <EyebrowBadge>Client Stories</EyebrowBadge>

        <div className="relative min-h-[220px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <GlassPanel glow="var(--color-accent)" className="px-8 py-10">
                <p className="font-display text-xl leading-snug text-fg-glass md:text-2xl">
                  “{current.quote}”
                </p>
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                  {current.name} — {current.role}
                </p>
              </GlassPanel>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className="flex h-11 w-11 items-center justify-center"
            >
              <span
                className="h-1.5 w-1.5 rounded-full transition-colors"
                style={{
                  background:
                    i === index ? "var(--color-accent)" : "var(--color-hairline)",
                }}
              />
            </button>
          ))}
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted/70">
          Template quotes — real client stories added as projects ship.
        </p>
      </div>
    </section>
  );
}
