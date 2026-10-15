import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { enquiry, intro, newTab, whatsappLink } from "@/lib/content";

export default function Intro() {
  return (
    <section className="bg-sky py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow={intro.eyebrow} title={intro.title} />
          <div className="mt-6 space-y-4 text-ink/80">
            {intro.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Button href={whatsappLink(enquiry("the price list"))} {...newTab} className="mt-8">
            {intro.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
        <Image
          src={intro.image.src}
          alt={intro.image.alt}
          width={1100}
          height={1008}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="aspect-[4/3] w-full rounded-xl object-cover shadow-xl"
        />
      </div>
    </section>
  );
}
