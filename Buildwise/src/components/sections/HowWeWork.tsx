"use client";

import { motion } from "framer-motion";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We map your business, your customers, and where the biggest wins are hiding.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "A visual identity and experience built around your brand — not a template.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Your website, dashboard, or automation gets built for speed and reliability.",
  },
  {
    number: "04",
    title: "Automate",
    description:
      "We connect the tools so leads, bookings, and busywork run themselves.",
  },
  {
    number: "05",
    title: "Optimize",
    description:
      "SEO, performance, and conversion tuning — based on real user behavior.",
  },
  {
    number: "06",
    title: "Scale",
    description:
      "Ongoing support so your digital ecosystem keeps growing with you.",
  },
];

export default function HowWeWork() {
  return (
    <section id="process" className="bg-base px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection className="mb-16 flex flex-col gap-4">
          <AnimatedItem>
            <EyebrowBadge>How We Work</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-2xl font-display text-3xl font-semibold text-fg md:text-4xl">
              A clear, ordered path from idea to running system.
            </h2>
          </AnimatedItem>
        </AnimatedSection>

        <div className="relative pl-12">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-hairline" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[15px] top-2 bottom-2 w-px bg-accent"
          />

          <div className="flex flex-col gap-12">
            {STEPS.map((step) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="relative"
              >
                <span className="absolute -left-12 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-base font-mono text-xs text-accent">
                  {step.number}
                </span>
                <h3 className="font-display text-xl font-semibold text-fg">
                  {step.title}
                </h3>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
