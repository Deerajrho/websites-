import { Plus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { faq } from "@/lib/content";

// Native <details> accordion: works without JavaScript. Ruled rows, numbered like chart entries.
export default function Faq() {
  return (
    <section id="faq" className="xl:col-span-7">
      <SectionHeading compact eyebrow={faq.eyebrow} title={faq.title} />
      <div className="mt-10 border-t border-line">
        {faq.items.map((item, i) => (
          <details key={item.q} className="group border-b border-line py-5">
            <summary className="flex items-baseline gap-5 text-lg font-semibold text-ink transition-colors hover:text-accent">
              <span className="chart-label text-accent">{String(i + 1).padStart(2, "0")}</span>
              <span className="flex-1">{item.q}</span>
              <Plus className="h-5 w-5 shrink-0 self-center text-accent transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
            </summary>
            <p className="mt-3 pl-10 pr-10">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
