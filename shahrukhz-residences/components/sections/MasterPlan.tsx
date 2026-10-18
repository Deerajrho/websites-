import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { enquiry, masterPlan, newTab, whatsappLink } from "@/lib/content";

// The two deck plans as chart plates side by side, each with its plate number and legend.
const plates = ["I", "II"];

export default function MasterPlan() {
  return (
    <section id="master-plan">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading compact eyebrow={masterPlan.eyebrow} title={masterPlan.title} intro={masterPlan.intro} />
        <Button href={whatsappLink(enquiry("the master plan"))} {...newTab} variant="outline">
          {masterPlan.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {masterPlan.decks.map((d, i) => (
          <figure key={d.name} className="group border border-line bg-white/40 p-3">
            <div className="overflow-hidden">
              <Image
                src={d.image}
                alt={`${d.name} plan`}
                width={1100}
                height={760}
                sizes="(min-width: 768px) 45vw, 100vw"
                className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
              />
            </div>
            <figcaption className="px-3 pb-3 pt-5">
              <p className="chart-label text-accent">Plate {plates[i]} · {d.level}</p>
              <h3 className="mt-2 text-3xl">{d.name}</h3>
              <p className="mt-2 text-sm">{d.body}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
