// The small tinted pill above a heading.
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full bg-clay-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-clay">
      <span className="h-1.5 w-1.5 rounded-full bg-clay" aria-hidden="true" />
      {children}
    </p>
  );
}

// compact: smaller title for narrow bento tiles.
type Props = { eyebrow: string; title: string; intro?: string; compact?: boolean };

export default function SectionHeading({ eyebrow, title, intro, compact = false }: Props) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className={compact ? "mt-4 text-3xl sm:text-4xl" : "mt-5 text-4xl sm:text-5xl"}>{title}</h2>
      {intro && <p className="mt-4 max-w-xl text-slate-600">{intro}</p>}
    </div>
  );
}
