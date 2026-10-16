// The small ruled label above a heading ("— AMENITIES").
export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-champagne" : "text-ocean"}`}>
      <span className={`h-px w-8 ${dark ? "bg-champagne" : "bg-ocean"}`} aria-hidden="true" />
      {children}
    </p>
  );
}

// compact: smaller title for sections where the heading shares a screen with a carousel.
type Props = { eyebrow: string; title: string; intro?: string; dark?: boolean; compact?: boolean };

export default function SectionHeading({ eyebrow, title, intro, dark = false, compact = false }: Props) {
  return (
    <div className="max-w-2xl">
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2 className={compact ? "mt-3 text-4xl lg:text-5xl" : "mt-4 text-4xl sm:text-5xl lg:text-6xl"}>{title}</h2>
      {intro && <p className={`${compact ? "mt-3" : "mt-5"} ${dark ? "text-white/80" : "text-ink/75"}`}>{intro}</p>}
    </div>
  );
}
