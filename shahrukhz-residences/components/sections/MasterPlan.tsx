import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { enquiry, masterPlan, newTab, whatsappLink } from "@/lib/content";

// Wide tile: the two deck plans stacked as horizontal cards, plan image beside its description.
export default function MasterPlan() {
  return (
    <section id="master-plan" className="card flex flex-col rounded-3xl p-6 sm:p-10 xl:col-span-7">
      <SectionHeading compact eyebrow={masterPlan.eyebrow} title={masterPlan.title} intro={masterPlan.intro} />
      <div className="mt-8 grid flex-1 gap-4">
        {masterPlan.decks.map((d, i) => (
          <figure key={d.name} className="lift group grid overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 sm:grid-cols-5">
            <div className="overflow-hidden sm:col-span-3">
              <Image
                src={d.image}
                alt={`${d.name} plan`}
                width={1100}
                height={760}
                sizes="(min-width: 1280px) 30vw, (min-width: 640px) 60vw, 100vw"
                className="aspect-[3/2] h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
              />
            </div>
            <figcaption className="flex flex-col justify-center p-6 sm:col-span-2">
              <span aria-hidden="true" className="font-display text-5xl font-extrabold tracking-tight text-slate-200">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-clay">{d.level}</p>
              <h3 className="mt-1 text-2xl">{d.name}</h3>
              <p className="mt-2 text-sm">{d.body}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <Button href={whatsappLink(enquiry("the master plan"))} {...newTab} variant="outline" className="mt-8 self-start">
        {masterPlan.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Button>
    </section>
  );
}
