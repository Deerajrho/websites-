import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Counter } from "@/components/ui/Counter";

const STATS = [
  { label: "Websites Delivered", value: 120, suffix: "+" },
  { label: "Businesses Helped", value: 85, suffix: "+" },
  { label: "Leads Generated", value: 50000, suffix: "+" },
  { label: "Workflows Automated", value: 300, suffix: "+" },
  { label: "AI Agents Deployed", value: 40, suffix: "+" },
];

export default function TrustedResults() {
  return (
    <section className="border-y border-hairline bg-base px-6 py-20">
      <AnimatedSection
        as="section"
        className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
      >
        {STATS.map((stat) => (
          <AnimatedItem key={stat.label}>
            <GlassPanel className="flex h-full flex-col items-center gap-2 px-4 py-8 text-center">
              <span className="font-display text-3xl font-semibold text-fg-glass md:text-4xl">
                <Counter to={stat.value} suffix={stat.suffix} />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                {stat.label}
              </span>
            </GlassPanel>
          </AnimatedItem>
        ))}
      </AnimatedSection>
      <p className="mx-auto mt-6 max-w-6xl text-center font-mono text-[11px] uppercase tracking-[0.15em] text-muted/70">
        Illustrative figures — updated with real results as projects ship.
      </p>
    </section>
  );
}
