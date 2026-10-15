import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { amenities } from "@/lib/content";

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={amenities.eyebrow} title={amenities.title} intro={amenities.intro} />
        <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {amenities.items.map((a) => (
            <li key={a.title} className="relative overflow-hidden rounded-xl">
              <Image
                src={a.image}
                alt={`${a.title} (artist's impression)`}
                width={900}
                height={620}
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="aspect-[16/11] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 via-navy/70 to-transparent p-4 pt-12 text-white">
                <h3 className="text-xl sm:text-2xl">{a.title}</h3>
                <p className="hidden text-sm text-white/85 sm:block">{a.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
