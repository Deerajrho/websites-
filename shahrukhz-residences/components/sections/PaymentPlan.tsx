import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { enquiry, newTab, paymentPlan, whatsappLink } from "@/lib/content";

// A tide gauge: one bar split at the real percentages, each instalment a shade deeper, the 70% on
// handover the deepest. Below it the instalments as columns; beside the heading the EOI as a deep-water slip.
const shades = ["bg-[#a5f3fc]", "bg-[#67e8f9]", "bg-[#22d3ee]", "bg-[#0891b2]", "sea"];

export default function PaymentPlan() {
  return (
    <section id="payment-plan">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeading compact eyebrow={paymentPlan.eyebrow} title={paymentPlan.title} intro={paymentPlan.intro} />
        </div>
        <div className="deep bg-linear-to-br from-[#0b3b5c] to-abyss p-8 lg:col-span-5 lg:col-start-8">
          <h3 className="text-2xl">{paymentPlan.eoi.title}</h3>
          <dl className="mt-6 grid grid-cols-2 gap-6 border-y border-line py-5">
            {paymentPlan.eoi.items.map((e) => (
              <div key={e.label}>
                <dt className="chart-label text-muted">{e.label}</dt>
                <dd className="mt-1 font-display text-xl text-accent">{e.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-sm">{paymentPlan.eoi.note}</p>
          <Button href={whatsappLink(enquiry("the full payment schedule"))} {...newTab} className="mt-6 w-full">
            {paymentPlan.cta}
          </Button>
        </div>
      </div>

      {/* Bar widths are the real percentages, so the 70% visibly dominates. */}
      <div aria-hidden="true" className="mt-16 flex h-14 gap-px">
        {paymentPlan.steps.map((s, i) => (
          <div key={s.label} style={{ width: `${s.percent}%` }} className={shades[i]} />
        ))}
      </div>
      <ol className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
        {paymentPlan.steps.map((s, i) => (
          <li key={s.label} className="border-l border-ink/30 pl-4">
            <span className="chart-label text-muted">Step {String(i + 1).padStart(2, "0")}</span>
            <p className="mt-2 font-display text-5xl text-ink">{s.percent}%</p>
            <h3 className="mt-2 font-sans text-base font-semibold tracking-normal">{s.label}</h3>
            <p className="text-sm text-muted">{s.when}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
