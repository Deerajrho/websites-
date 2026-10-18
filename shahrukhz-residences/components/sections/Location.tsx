import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { location } from "@/lib/content";

// Drive times as a timetable (name, dotted leader, minutes) beside the render masked into a tall pill.
export default function Location() {
  return (
    <section id="location" className="card rounded-3xl p-6 sm:p-10 xl:col-span-7">
      <SectionHeading compact eyebrow={location.eyebrow} title={location.title} intro={location.intro} />
      <div className="mt-8 grid gap-8 sm:grid-cols-5">
        <Image
          src={location.image.src}
          alt={location.image.alt}
          width={1000}
          height={1150}
          sizes="(min-width: 1280px) 20vw, 40vw"
          className="hidden h-full max-h-[30rem] w-full rounded-full border border-slate-100 object-cover shadow-float sm:col-span-2 sm:block"
        />
        <ol className="divide-y divide-slate-100 sm:col-span-3">
          {location.places.map((p) => (
            <li key={p.name} className="group flex items-baseline gap-3 py-3">
              <span className="text-sm font-medium text-slate-800 transition-colors group-hover:text-clay">{p.name}</span>
              <span aria-hidden="true" className="flex-1 border-b border-dotted border-slate-300" />
              <span className="shrink-0 font-display text-lg font-extrabold tracking-tight text-slate-900">
                {p.minutes}
                <span className="ml-1 font-sans text-xs font-semibold text-slate-500">min</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
