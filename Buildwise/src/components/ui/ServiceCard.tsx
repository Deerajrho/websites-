"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { BrowserStack } from "@/components/ui/service-visuals/BrowserStack";
import { GrowthGraph } from "@/components/ui/service-visuals/GrowthGraph";
import { NodeFlow } from "@/components/ui/service-visuals/NodeFlow";
import { ChatBubbles } from "@/components/ui/service-visuals/ChatBubbles";
import { Waveform } from "@/components/ui/service-visuals/Waveform";
import { DashboardGlow } from "@/components/ui/service-visuals/DashboardGlow";

export type VisualKey =
  | "web"
  | "seo"
  | "automation"
  | "chatbot"
  | "voice"
  | "digital";

const VISUALS: Record<VisualKey, () => React.ReactElement> = {
  web: BrowserStack,
  seo: GrowthGraph,
  automation: NodeFlow,
  chatbot: ChatBubbles,
  voice: Waveform,
  digital: DashboardGlow,
};

export function ServiceCard({
  visualKey,
  accentVar,
  title,
  description,
  bullets,
}: {
  visualKey: VisualKey;
  accentVar: string;
  title: string;
  description: string;
  bullets: string[];
}) {
  const [open, setOpen] = useState(false);
  const Visual = VISUALS[visualKey];

  return (
    <GlassPanel glow={accentVar} className="flex flex-col overflow-hidden">
      <div className="p-5 pb-0">
        <Visual />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6 pt-4">
        <h3
          className="font-display text-lg font-semibold text-fg-glass"
          style={{ color: accentVar }}
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-1 flex min-h-11 items-center gap-2 self-start font-mono text-xs uppercase tracking-[0.15em] text-fg transition-colors hover:text-accent"
        >
          {open ? "Hide details" : "See what's included"}
          <span
            className="inline-block transition-transform duration-200"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            +
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap gap-2 pt-2">
                {bullets.map((bullet) => (
                  <span
                    key={bullet}
                    className="rounded-full border px-3 py-1 text-xs text-fg"
                    style={{ borderColor: `${accentVar}` }}
                  >
                    {bullet}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </GlassPanel>
  );
}
