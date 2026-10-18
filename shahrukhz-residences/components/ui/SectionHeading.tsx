// The chart label above a heading.
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="chart-label text-accent">{children}</p>;
}

// compact: smaller title for sections that share a stretch of water.
type Props = { eyebrow: string; title: string; intro?: string; compact?: boolean };

export default function SectionHeading({ eyebrow, title, intro, compact = false }: Props) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className={compact ? "mt-4 text-4xl sm:text-5xl" : "mt-4 text-5xl sm:text-6xl"}>{title}</h2>
      {intro && <p className="mt-5 max-w-xl">{intro}</p>}
    </div>
  );
}
