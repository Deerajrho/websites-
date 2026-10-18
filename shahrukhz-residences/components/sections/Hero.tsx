import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import LeadForm from "@/components/ui/LeadForm";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { hero } from "@/lib/content";

// Three tiles: the headline card, the render masked into an arch, and a full-width enquiry strip.
export default function Hero() {
  return (
    <section id="top" className="grid grid-cols-1 gap-4 sm:gap-6 xl:col-span-12 xl:grid-cols-12">
      <div className="card flex flex-col justify-between rounded-3xl p-6 sm:p-10 xl:col-span-7 xl:p-12">
        <div>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="mt-6 text-5xl sm:text-6xl 2xl:text-7xl">{hero.title}</h1>
          <p className="mt-6 font-display text-xl font-bold text-clay">{hero.price}</p>
          <p className="mt-3 max-w-xl text-lg">{hero.body}</p>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button href="#residences">
            {hero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href="#contact" variant="outline">
            {hero.secondaryCta}
          </Button>
          <p className="rounded-full border border-clay/20 bg-clay-soft px-4 py-2 text-xs font-semibold uppercase tracking-wider text-clay">
            {hero.chip}
          </p>
        </div>
      </div>

      <div className="relative min-h-[22rem] overflow-hidden rounded-3xl rounded-t-[10rem] border border-slate-100 shadow-float sm:min-h-[30rem] sm:rounded-t-[16rem] xl:col-span-5">
        <Image src={hero.image.src} alt={hero.image.alt} fill priority sizes="(min-width: 1280px) 40vw, 100vw" className="object-cover" />
      </div>

      <div className="card grid gap-8 rounded-3xl p-6 sm:p-10 xl:col-span-12 xl:grid-cols-12 xl:items-center">
        <h2 className="text-3xl xl:col-span-4">{hero.formTitle}</h2>
        <div className="xl:col-span-8">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
