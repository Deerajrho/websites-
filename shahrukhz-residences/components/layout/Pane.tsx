// One section's pane, floating over the fly-through (components/layout/FrameBackdrop.tsx). Generous space
// above and below each pane leaves stretches where the film plays unobstructed. Opened by a chart marker.

// "02 · Residences ————————————". Exported for sections that build their own pane.
export function Marker({ label }: { label: string }) {
  return (
    <div aria-hidden="true" className="chart-label mb-8 flex sm:mb-12 items-center gap-4 text-muted">
      <span>{label}</span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

type Props = {
  tone: "shore" | "deep";
  label: string;
  className?: string;
  children: React.ReactNode;
};

export default function Pane({ tone, label, className = "", children }: Props) {
  return (
    <div className="mx-auto max-w-7xl px-3 py-[7svh] sm:px-6 sm:py-[12svh] lg:px-8">
      <div className={`${tone} pane px-5 py-8 sm:p-10 lg:p-14`}>
        <Marker label={label} />
        <div className={className}>{children}</div>
      </div>
    </div>
  );
}
