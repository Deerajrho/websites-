import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/specials-linear-carousel";
import { gallery } from "@/lib/content";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Two per view: bigger pictures than the card sections. */}
        <div>
          <Carousel
            label="Gallery"
            header={<SectionHeading compact eyebrow={gallery.eyebrow} title={gallery.title} />}
            autoplay
            itemClassName="w-[85cqw] sm:w-[calc((100cqw-1rem)/2)]"
            items={gallery.items.map((g) => (
              <figure key={g.caption} className="w-full">
                <Image
                  src={g.image}
                  alt={`${g.caption} (artist's impression)`}
                  width={900}
                  height={600}
                  sizes="(min-width: 640px) 50vw, 85vw"
                  className="aspect-[16/9] w-full rounded-xl object-cover"
                />
                <figcaption className="mt-2 text-sm text-ink/70">{g.caption}</figcaption>
              </figure>
            ))}
          />
        </div>
      </div>
    </section>
  );
}
