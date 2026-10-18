import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { amenities } from "@/lib/content";

// The amenities as a horizontal strip of tall plates, running edge to edge of the pane
// (negative margins cancel the pane padding; the matching scroll padding keeps snapped plates aligned).
export default function Amenities() {
  return (
    <section id="amenities">
      <SectionHeading eyebrow={amenities.eyebrow} title={amenities.title} intro={amenities.intro} />
      <ul className="strip -mx-6 mt-12 flex snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto px-6 pb-6 sm:-mx-10 sm:scroll-px-10 sm:px-10 lg:-mx-14 lg:scroll-px-14 lg:px-14">
        {amenities.items.map((a, i) => (
          <li key={a.title} className="group w-[72vw] shrink-0 snap-start sm:w-[20rem]">
            <div className="overflow-hidden">
              <Image
                src={a.image}
                alt={`${a.title} (artist's impression)`}
                width={700}
                height={930}
                sizes="(min-width: 640px) 20rem, 72vw"
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
              />
            </div>
            <p className="chart-label mt-4 text-accent">{String(i + 1).padStart(2, "0")} / {String(amenities.items.length).padStart(2, "0")}</p>
            <h3 className="mt-2 text-2xl">{a.title}</h3>
            <p className="mt-1 text-sm">{a.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
