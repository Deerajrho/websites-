import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { enquiry, newTab, paymentPlan, whatsappLink } from "@/lib/content";

// Narrow tile: proportion bar, then the instalments as a vertical timeline, then the EOI panel.
export default function PaymentPlan() {
  const last = paymentPlan.steps.length - 1;
  return (
    <section id="payment-plan" className="card rounded-3xl p-6 sm:p-10 xl:col-span-5">
      <SectionHeading compact eyebrow={paymentPlan.eyebrow} title={paymentPlan.title} intro={paymentPlan.intro} />

      {/* Bar widths are the real percentages, so the 70% visibly dominates. */}
      <div aria-hidden="true" className="mt-8 flex h-3 gap-1">
        {paymentPlan.steps.map((s, i) => (
          <div key={s.label} style={{ width: `${s.percent}%` }} className={`rounded-full ${i === last ? "bg-clay" : "bg-slate-200"}`} />
        ))}
      </div>

      <ol className="mt-8">
        {paymentPlan.steps.map((s, i) => (
          <li key={s.label} className="relative flex gap-5 pb-6 last:pb-0">
            {/* Rail: a dot per step, joined by a line. */}
            {i !== last && <span aria-hidden="true" className="absolute left-[1.1875rem] top-10 bottom-0 w-px bg-slate-200" />}
            <span
              className={`relative grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-xs font-bold ${
                i === last ? "bg-clay text-white" : "border border-slate-200 bg-white text-slate-600"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-1 items-baseline justify-between gap-4 pt-1.5">
              <div>
                <h3 className="font-sans text-base font-semibold tracking-normal">{s.label}</h3>
                <p className="text-sm text-slate-500">{s.when}</p>
              </div>
              <p className={`font-display text-3xl font-extrabold tracking-tight ${i === last ? "text-clay" : "text-slate-900"}`}>{s.percent}%</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 rounded-2xl border border-clay/15 bg-clay-soft p-6">
        <h3 className="text-2xl">{paymentPlan.eoi.title}</h3>
        <dl className="mt-5 grid gap-3 sm:grid-cols-2">
          {paymentPlan.eoi.items.map((e) => (
            <div key={e.label} className="rounded-xl bg-white p-4 shadow-float">
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">{e.label}</dt>
              <dd className="mt-1 font-semibold text-clay">{e.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-sm">{paymentPlan.eoi.note}</p>
        <Button href={whatsappLink(enquiry("the full payment schedule"))} {...newTab} className="mt-6 w-full">
          {paymentPlan.cta}
        </Button>
      </div>
    </section>
  );
}
