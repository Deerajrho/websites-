import { facts } from "@/lib/content";

export default function KeyFacts() {
  return (
    <section aria-label="Key facts" className="border-b border-line bg-white">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:grid-cols-6">
        {facts.map((f) => (
          <div key={f.label}>
            <dt className="text-[0.7rem] font-semibold uppercase tracking-wider text-ink/65">{f.label}</dt>
            <dd className="mt-1 text-sm font-semibold">{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
