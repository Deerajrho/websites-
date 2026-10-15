import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { enquiry, newTab, residences, whatsappLink } from "@/lib/content";

// One card per unit type, each with a WhatsApp enquiry prefilled for that type.
export default function Residences() {
  return (
    <section id="residences" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={residences.eyebrow} title={residences.title} intro={residences.intro} />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {residences.items.map((r) => (
            <li key={r.type} className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
              <Image
                src={r.image}
                alt={`${r.type} interior (artist's impression)`}
                width={900}
                height={560}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="aspect-[16/9] w-full object-cover sm:aspect-[16/10]"
              />
              <div className="flex flex-1 flex-col p-6">
                <p className="w-fit rounded-full bg-sky px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-ocean">
                  Fully furnished
                </p>
                <h3 className="mt-3 text-3xl">{r.type}</h3>
                <dl className="mt-4 flex-1 divide-y divide-line text-sm">
                  <div className="flex justify-between gap-4 py-2">
                    <dt className="text-ink/65">Views</dt>
                    <dd className="text-right">{r.views}</dd>
                  </div>
                  <div className="flex justify-between gap-4 py-2">
                    <dt className="text-ink/65">Average price</dt>
                    <dd>AED {r.average}</dd>
                  </div>
                  <div className="flex justify-between gap-4 py-2">
                    <dt className="text-ink/65">Handover</dt>
                    <dd>Q4 2029</dd>
                  </div>
                </dl>
                <div className="mt-4 flex items-end justify-between gap-4">
                  <p>
                    <span className="block text-xs text-ink/65">From</span>
                    <span className="font-display text-3xl font-semibold text-navy">AED {r.from}</span>
                  </p>
                  <a
                    href={whatsappLink(enquiry(`a ${r.type}`))}
                    {...newTab}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-ocean hover:text-navy"
                  >
                    {residences.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
