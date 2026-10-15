import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { enquiry, newTab, paymentPlan, whatsappLink } from "@/lib/content";

export default function PaymentPlan() {
  const last = paymentPlan.steps.length - 1;
  return (
    <section id="payment-plan" className="bg-sky py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={paymentPlan.eyebrow} title={paymentPlan.title} intro={paymentPlan.intro} />

        {/* Bar widths are the real percentages, so the 70% visibly dominates. */}
        <div aria-hidden="true" className="mt-12 flex h-12 gap-1 overflow-hidden rounded-lg text-xs font-semibold text-white">
          {paymentPlan.steps.map((s, i) => (
            <div
              key={s.label}
              style={{ width: `${s.percent}%` }}
              className={`grid min-w-10 place-items-center ${i === last ? "bg-navy" : "bg-ocean"}`}
            >
              {s.percent}%
            </div>
          ))}
        </div>

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {paymentPlan.steps.map((s, i) => (
            <li key={s.label} className="rounded-xl border border-line bg-white p-5">
              <span className="text-xs font-semibold text-ink/65">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-2 font-display text-4xl font-semibold text-navy">{s.percent}%</p>
              <h3 className="mt-2 font-sans text-sm font-semibold">{s.label}</h3>
              <p className="text-sm text-ink/70">{s.when}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 grid gap-6 rounded-xl bg-navy p-6 text-white sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h3 className="text-3xl">{paymentPlan.eoi.title}</h3>
            <dl className="mt-4 flex flex-wrap gap-x-10 gap-y-3">
              {paymentPlan.eoi.items.map((e) => (
                <div key={e.label}>
                  <dt className="text-xs uppercase tracking-wider text-white/70">{e.label}</dt>
                  <dd className="font-semibold text-champagne">{e.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-white/75">{paymentPlan.eoi.note}</p>
          </div>
          <Button href={whatsappLink(enquiry("the full payment schedule"))} {...newTab} variant="light">
            {paymentPlan.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
