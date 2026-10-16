import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Carousel } from "@/components/ui/specials-linear-carousel";
import SectionHeading from "@/components/ui/SectionHeading";
import { enquiry, newTab, residences, whatsappLink } from "@/lib/content";

// One card per unit type, each with a WhatsApp enquiry prefilled for that type, in an endless slider.
export default function Residences() {
  return (
    <section id="residences" className="py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div>
          <Carousel
            label="Residence types"
            header={<SectionHeading compact eyebrow={residences.eyebrow} title={residences.title} intro={residences.intro} />}
            autoplay
            itemClassName="w-[85cqw] sm:w-[calc((100cqw-1rem)/2)] lg:w-[calc((100cqw-2rem)/3)]"
            items={residences.items.map((r) => (
            <article key={r.type} className="flex w-full flex-col overflow-hidden rounded-xl border border-line bg-white">
              <Image
                src={r.image}
                alt={`${r.type} interior (artist's impression)`}
                width={900}
                height={560}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="aspect-[21/9] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <p className="w-fit rounded-full bg-sky px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-ocean">
                  Fully furnished
                </p>
                <h3 className="mt-2 text-2xl lg:text-3xl">{r.type}</h3>
                <dl className="mt-3 flex-1 divide-y divide-line text-sm">
                  <div className="flex justify-between gap-4 py-2">
                    <dt className="text-ink/65">Views</dt>
                    <dd className="text-right">{r.views}</dd>
                  </div>
                  <div className="flex justify-between gap-4 py-2">
                    <dt className="text-ink/65">Average price</dt>
                    <dd>AED {r.average}</dd>
                  </div>
                </dl>
                <div className="mt-3 flex items-end justify-between gap-4">
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
            </article>
            ))}
          />
        </div>
      </div>
    </section>
  );
}
