import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/specials-linear-carousel";
import { amenities } from "@/lib/content";

export default function Amenities() {
  return (
    <section id="amenities" className="py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div>
          <Carousel
            label="Amenities"
            header={<SectionHeading compact eyebrow={amenities.eyebrow} title={amenities.title} intro={amenities.intro} />}
            autoplay
            itemClassName="w-[85cqw] sm:w-[calc((100cqw-1rem)/2)] lg:w-[calc((100cqw-2rem)/3)]"
            items={amenities.items.map((a) => (
            <article key={a.title} className="relative w-full overflow-hidden rounded-xl">
              <Image
                src={a.image}
                alt={`${a.title} (artist's impression)`}
                width={900}
                height={620}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw"
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 via-navy/70 to-transparent p-4 pt-12 text-white">
                <h3 className="text-xl sm:text-2xl">{a.title}</h3>
                <p className="text-sm text-white/85">{a.body}</p>
              </div>
            </article>
            ))}
          />
        </div>
      </div>
    </section>
  );
}
