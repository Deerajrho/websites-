import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { gallery } from "@/lib/content";

// An editorial grid of figures: a 7+5 pair, then 4+4+4, the last picture full width as a closing
// panorama. Spans and crops are per position, so the content order sets the look.
const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-4", "md:col-span-4", "md:col-span-4", "md:col-span-12"];
const crops = ["aspect-[4/3]", "aspect-[4/5] md:aspect-auto md:flex-1", "aspect-square", "aspect-square", "aspect-square", "aspect-[4/3] md:aspect-[21/9]"];

export default function Gallery() {
  return (
    <section id="gallery">
      <SectionHeading compact eyebrow={gallery.eyebrow} title={gallery.title} />
      <div className="mt-12 grid gap-x-5 gap-y-8 md:grid-cols-12">
        {gallery.items.map((g, i) => (
          <figure key={g.caption} className={`group flex flex-col ${spans[i % spans.length]}`}>
            <div className={`relative overflow-hidden ${crops[i % crops.length]}`}>
              <Image
                src={g.image}
                alt={`${g.caption} (artist's impression)`}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
              />
            </div>
            <figcaption className="chart-label mt-3 text-muted">
              Fig. {String(i + 3).padStart(2, "0")} — {g.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
