import SectionHeading from "@/components/ui/SectionHeading";
import { location } from "@/lib/content";

// A distance chart: the tower at the centre, rings every 5 minutes' drive, each place plotted at its
// drive time (spread round the circle by the golden angle so neighbours don't collide). The numbered
// list beside it carries the same data in text; the chart is decorative.
const ring = 4; // chart units per minute
const max = 25; // outer ring, minutes

export default function Location() {
  const pts = location.places.map((p, i) => {
    const a = ((i * 137.5 - 90) * Math.PI) / 180;
    const r = p.minutes * ring;
    return { x: r * Math.cos(a), y: r * Math.sin(a) };
  });
  return (
    <section id="location" className="grid items-center gap-14 lg:grid-cols-12">
      <svg aria-hidden="true" viewBox="-112 -112 224 224" className="mx-auto w-full max-w-lg lg:col-span-6">
        {[5, 10, 15, 20, 25].map((m) => (
          <g key={m}>
            <circle r={m * ring} className="fill-none stroke-line" strokeWidth="0.5" strokeDasharray={m === max ? undefined : "1.5 2"} />
            <text x="1.5" y={-m * ring - 1.5} className="fill-muted font-mono" fontSize="4.5">{m} min</text>
          </g>
        ))}
        <line x1={-max * ring} x2={max * ring} y1="0" y2="0" className="stroke-line" strokeWidth="0.4" />
        <line y1={-max * ring} y2={max * ring} x1="0" x2="0" className="stroke-line" strokeWidth="0.4" />
        <rect x="-3" y="-3" width="6" height="6" transform="rotate(45)" className="fill-aqua" />
        {pts.map((p, i) => (
          <g key={location.places[i].name}>
            <circle cx={p.x} cy={p.y} r="2.2" className="fill-accent" />
            <text x={p.x + 3.5} y={p.y + 1.6} className="fill-ink font-mono" fontSize="5">
              {String(i + 1).padStart(2, "0")}
            </text>
          </g>
        ))}
      </svg>

      <div className="lg:col-span-6">
        <SectionHeading compact eyebrow={location.eyebrow} title={location.title} intro={location.intro} />
        <ol className="mt-8 divide-y divide-line border-y border-line">
          {location.places.map((p, i) => (
            <li key={p.name} className="group flex items-baseline gap-4 py-3">
              <span className="chart-label text-accent">{String(i + 1).padStart(2, "0")}</span>
              <span className="flex-1 text-sm font-medium text-ink">{p.name}</span>
              <span className="font-display text-xl text-ink">
                {p.minutes}
                <span className="chart-label ml-1 text-muted">min</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
