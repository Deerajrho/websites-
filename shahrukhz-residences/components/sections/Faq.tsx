import { Plus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { faq } from "@/lib/content";

// Native <details> accordion: works without JavaScript. Each question is its own soft tile.
export default function Faq() {
  return (
    <section id="faq" className="card rounded-3xl p-6 sm:p-10 xl:col-span-7">
      <SectionHeading compact eyebrow={faq.eyebrow} title={faq.title} />
      <div className="mt-8 space-y-2">
        {faq.items.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-transparent bg-slate-50 px-5 py-4 transition-colors duration-300 hover:border-slate-200 open:border-clay/20 open:bg-clay-soft"
          >
            <summary className="flex items-center justify-between gap-6 font-semibold text-slate-900">
              {item.q}
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-clay shadow-float transition-transform duration-300 group-open:rotate-45">
                <Plus className="h-4 w-4" aria-hidden="true" />
              </span>
            </summary>
            <p className="mt-3 pr-10">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
