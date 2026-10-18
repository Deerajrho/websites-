import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Carousel } from "@/components/ui/specials-linear-carousel";
import SectionHeading from "@/components/ui/SectionHeading";
import { enquiry, newTab, residences, whatsappLink } from "@/lib/content";

// One card per unit type, each with a WhatsApp enquiry prefilled for that type, in an endless slider.
// Cards are image-inset tiles: the photo sits inside the card's padding, price badge floating on it.
export default function Residences() {
  return (
    <section id="residences" className="card rounded-3xl p-6 sm:p-10 xl:col-span-12">
      <Carousel
        label="Residence types"
        header={<SectionHeading eyebrow={residences.eyebrow} title={residences.title} intro={residences.intro} />}
        autoplay
        itemClassName="w-[85cqw] sm:w-[calc((100cqw-1rem)/2)] 2xl:w-[calc((100cqw-2rem)/3)]"
        items={residences.items.map((r) => (
          <article key={r.type} className="lift group flex w-full flex-col rounded-3xl border border-slate-100 bg-slate-50 p-2">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={r.image}
                alt={`${r.type} interior (artist's impression)`}
                width={900}
                height={560}
                sizes="(min-width: 1536px) 30vw, (min-width: 640px) 45vw, 85vw"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
              />
              <p className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur">
                Fully furnished
              </p>
              <p className="absolute bottom-3 right-3 rounded-xl bg-white px-3 py-2 text-right shadow-float">
                <span className="block text-[0.7rem] font-semibold uppercase tracking-wider text-slate-500">From</span>
                <span className="font-display text-xl font-extrabold tracking-tight text-clay">AED {r.from}</span>
              </p>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-2xl">{r.type}</h3>
              <dl className="mt-3 flex-1 space-y-1 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Views</dt>
                  <dd className="text-right text-slate-800">{r.views}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Average price</dt>
                  <dd className="text-slate-800">AED {r.average}</dd>
                </div>
              </dl>
              <a
                href={whatsappLink(enquiry(`a ${r.type}`))}
                {...newTab}
                className="mt-4 inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-900 transition-colors duration-300 hover:border-clay hover:bg-clay hover:text-white"
              >
                {residences.cta} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      />
    </section>
  );
}
