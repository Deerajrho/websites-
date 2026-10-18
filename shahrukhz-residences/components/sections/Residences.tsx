import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { enquiry, newTab, residences, whatsappLink } from "@/lib/content";

// The price list as a tide table: one ruled row per unit type, all nine visible at once, each with a
// WhatsApp enquiry prefilled for that type. Phones keep thumbnail, name, price and the enquiry button.
export default function Residences() {
  const label = "chart-label block text-muted";
  return (
    <section id="residences">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow={residences.eyebrow} title={residences.title} intro={residences.intro} />
        <p className="chart-label text-muted">AED · fully furnished</p>
      </div>
      <ul className="mt-12 border-t border-ink/30">
        {residences.items.map((r, i) => (
          <li
            key={r.type}
            className="group grid grid-cols-[4.5rem_1fr_auto] items-center gap-4 border-b border-line py-4 transition-colors duration-300 hover:bg-white/45 sm:grid-cols-[2.5rem_8rem_1fr_8rem_9rem_auto] sm:gap-6"
          >
            <span aria-hidden="true" className="chart-label hidden pl-2 text-muted sm:block">{String(i + 1).padStart(2, "0")}</span>
            <div className="overflow-hidden">
              <Image
                src={r.image}
                alt={`${r.type} interior (artist's impression)`}
                width={400}
                height={300}
                sizes="8rem"
                className="aspect-square w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-110 sm:aspect-[4/3]"
              />
            </div>
            <div>
              <h3 className="text-xl sm:text-3xl">{r.type}</h3>
              <p className="mt-1 text-sm text-muted">{r.views}</p>
              <p className="mt-1 font-display text-lg text-accent sm:hidden">AED {r.from}</p>
            </div>
            <p className="hidden sm:block">
              <span className={label}>From</span>
              <span className="font-display text-2xl text-accent">{r.from}</span>
            </p>
            <p className="hidden sm:block">
              <span className={label}>Average</span>
              <span className="text-ink">{r.average}</span>
            </p>
            <a
              href={whatsappLink(enquiry(`a ${r.type}`))}
              {...newTab}
              aria-label={`${residences.cta}: ${r.type}`}
              className="chart-label inline-flex h-11 min-w-11 items-center justify-center gap-2 border border-ink/40 text-ink transition-colors duration-300 hover:border-transparent hover:bg-ocean hover:text-white sm:px-4"
            >
              <span className="hidden sm:inline">{residences.cta}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
