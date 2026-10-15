import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { location } from "@/lib/content";

export default function Location() {
  return (
    <section id="location" className="bg-sky py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading eyebrow={location.eyebrow} title={location.title} intro={location.intro} />
          <Image
            src={location.image.src}
            alt={location.image.alt}
            width={1000}
            height={1150}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="mt-8 hidden aspect-[4/3] w-full rounded-xl object-cover lg:block"
          />
        </div>
        <ul className="grid content-start gap-3 sm:grid-cols-2">
          {location.places.map((p) => (
            <li key={p.name} className="flex items-center justify-between gap-4 rounded-xl border border-line bg-white px-5 py-4">
              <span className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-ocean" aria-hidden="true" />
                {p.name}
              </span>
              <span className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-navy">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {p.minutes} min
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
