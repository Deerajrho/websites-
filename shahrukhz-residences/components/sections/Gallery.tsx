import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { gallery } from "@/lib/content";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={gallery.eyebrow} title={gallery.title} />
        <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {gallery.items.map((g) => (
            <li key={g.caption}>
              <figure>
                <Image
                  src={g.image}
                  alt={`${g.caption} (artist's impression)`}
                  width={900}
                  height={600}
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="aspect-[3/2] w-full rounded-xl object-cover"
                />
                <figcaption className="mt-2 text-sm text-ink/70">{g.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
