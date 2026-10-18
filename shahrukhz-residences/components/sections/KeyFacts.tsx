import { facts } from "@/lib/content";

// The chart legend along the bottom of the hero: six figures between hairlines, the price picked out.
export default function KeyFacts() {
  return (
    <dl aria-label="Key facts" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
      {facts.map((f, i) => (
        <div key={f.label} className="border-line py-6 pr-4 [&:not(:first-child)]:lg:border-l [&:not(:first-child)]:lg:pl-5">
          <dt className="chart-label text-muted">{f.label}</dt>
          <dd className={`mt-2 font-display text-xl leading-tight ${i === 1 ? "text-accent" : "text-ink"}`}>{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}
