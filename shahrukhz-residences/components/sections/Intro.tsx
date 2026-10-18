import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { enquiry, intro, newTab, whatsappLink } from "@/lib/content";

// Editorial spread: heading and a tall figure on the left; on the right the story, opening with a
// large serif lead and a drop cap.
export default function Intro() {
  const [lead, ...rest] = intro.body;
  return (
    <section className="grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <SectionHeading eyebrow={intro.eyebrow} title={intro.title} />
        <figure className="mt-12">
          <Image
            src={intro.image.src}
            alt={intro.image.alt}
            width={1100}
            height={1008}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-[4/5] w-full object-cover"
          />
          <figcaption className="chart-label mt-3 text-muted">Fig. 02 — The infinity pool, facing the Gulf</figcaption>
        </figure>
      </div>
      <div className="lg:col-span-6 lg:col-start-7 lg:pt-44">
        <p className="font-display text-2xl leading-snug text-ink first-letter:float-left first-letter:mr-3 first-letter:text-[4.5rem] first-letter:leading-[0.8] first-letter:text-accent sm:text-3xl">
          {lead}
        </p>
        {rest.map((p) => (
          <p key={p} className="mt-6 text-lg">{p}</p>
        ))}
        <Button href={whatsappLink(enquiry("the price list"))} {...newTab} className="mt-10">
          {intro.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}
