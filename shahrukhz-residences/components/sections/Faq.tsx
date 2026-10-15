import { Plus } from "lucide-react";
import { faq } from "@/lib/content";

// Native <details> accordion: works without JavaScript.
export default function Faq() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-4xl sm:text-5xl">{faq.title}</h2>
        <div className="mt-10 border-t border-line">
          {faq.items.map((item) => (
            <details key={item.q} className="group border-b border-line py-5">
              <summary className="flex items-start justify-between gap-6 font-semibold">
                {item.q}
                <Plus className="mt-1 h-4 w-4 shrink-0 text-ocean group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="mt-3 text-ink/75">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
