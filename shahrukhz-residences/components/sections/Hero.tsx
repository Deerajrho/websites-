import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import LeadForm from "@/components/ui/LeadForm";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { hero } from "@/lib/content";

// Full-bleed render, headline on the left, enquiry card on the right.
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy text-white">
      <Image src={hero.image.src} alt={hero.image.alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-navy/75 lg:bg-transparent lg:bg-gradient-to-r lg:from-navy/95 lg:via-navy/70 lg:to-navy/20" />
      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_400px] lg:py-20">
        <div className="max-w-2xl">
          <Eyebrow dark>{hero.eyebrow}</Eyebrow>
          <h1 className="mt-5 text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">{hero.title}</h1>
          <p className="mt-5 text-lg font-semibold text-champagne">{hero.price}</p>
          <p className="mt-4 max-w-xl text-white/85">{hero.body}</p>
          <p className="mt-6 inline-block rounded-full border border-champagne/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-champagne">
            {hero.chip}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#residences">
              {hero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#contact" variant="outline">
              {hero.secondaryCta}
            </Button>
          </div>
        </div>
        <div className="rounded-xl bg-white p-6 text-ink shadow-2xl">
          <h2 className="text-center font-sans text-base font-semibold">{hero.formTitle}</h2>
          <div className="mt-5">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
