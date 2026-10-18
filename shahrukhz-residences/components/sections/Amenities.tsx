import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { amenities } from "@/lib/content";

// Bento board: the first amenity is the 2×2 feature tile, the other eight fill the grid around it.
export default function Amenities() {
  return (
    <section id="amenities" className="card rounded-3xl p-6 sm:p-10 xl:col-span-12">
      <SectionHeading eyebrow={amenities.eyebrow} title={amenities.title} intro={amenities.intro} />
      <ul className="mt-10 grid auto-rows-[17rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {amenities.items.map((a, i) => (
          <li
            key={a.title}
            className={`lift group relative overflow-hidden rounded-2xl border border-slate-100 ${i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
          >
            <Image
              src={a.image}
              alt={`${a.title} (artist's impression)`}
              width={900}
              height={620}
              sizes={i === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
              className="h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
            />
            <div className="absolute inset-x-3 bottom-3 rounded-xl bg-white/90 p-4 shadow-float backdrop-blur">
              <h3 className={i === 0 ? "text-2xl sm:text-3xl" : "text-lg"}>{a.title}</h3>
              <p className="mt-1 text-sm leading-snug text-slate-600">{a.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
