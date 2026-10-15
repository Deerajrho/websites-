import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { enquiry, masterPlan, newTab, whatsappLink } from "@/lib/content";

export default function MasterPlan() {
  return (
    <section id="master-plan" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={masterPlan.eyebrow} title={masterPlan.title} intro={masterPlan.intro} />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {masterPlan.decks.map((d) => (
            <figure key={d.name} className="overflow-hidden rounded-xl border border-line bg-white">
              <Image
                src={d.image}
                alt={`${d.name} plan`}
                width={1100}
                height={760}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[3/2] w-full object-cover"
              />
              <figcaption className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-ocean">{d.level}</p>
                <h3 className="mt-1 text-3xl">{d.name}</h3>
                <p className="mt-2 text-sm text-ink/75">{d.body}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <Button href={whatsappLink(enquiry("the master plan"))} {...newTab} className="mt-10">
          {masterPlan.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}
