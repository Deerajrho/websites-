import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { gallery } from "@/lib/content";

// Masonry: CSS columns with alternating crops, so the pictures stagger like a mood board.
const crops = ["aspect-[4/5]", "aspect-[4/3]", "aspect-square"];

export default function Gallery() {
  return (
    <section id="gallery" className="card rounded-3xl p-6 sm:p-10 xl:col-span-12">
      <div className="grid gap-10 xl:grid-cols-12">
        <div className="xl:sticky xl:top-6 xl:col-span-3 xl:self-start">
          <SectionHeading compact eyebrow={gallery.eyebrow} title={gallery.title} />
        </div>
        <div className="gap-4 sm:columns-2 lg:columns-3 xl:col-span-9">
          {gallery.items.map((g, i) => (
            <figure key={g.caption} className="lift group mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
              <div className="overflow-hidden">
                <Image
                  src={g.image}
                  alt={`${g.caption} (artist's impression)`}
                  width={900}
                  height={600}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className={`${crops[i % crops.length]} w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105`}
                />
              </div>
              <figcaption className="px-4 py-3 text-sm font-medium text-slate-700">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
