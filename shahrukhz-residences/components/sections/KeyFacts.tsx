import { facts } from "@/lib/content";

// A stat board beside the intro: two columns of figures, the price highlighted.
export default function KeyFacts() {
  return (
    <section aria-label="Key facts" className="card rounded-3xl p-3 xl:col-span-4">
      <dl className="grid h-full grid-cols-2 gap-3">
        {facts.map((f, i) => (
          <div
            key={f.label}
            className={`lift flex flex-col justify-between gap-6 rounded-2xl p-5 ${i === 1 ? "bg-clay text-white" : "bg-slate-50"}`}
          >
            <dt className={`text-xs font-semibold uppercase tracking-wider ${i === 1 ? "text-white/80" : "text-slate-500"}`}>{f.label}</dt>
            <dd className={`font-display text-xl font-extrabold leading-tight tracking-tight ${i === 1 ? "text-white" : "text-slate-900"}`}>
              {f.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
