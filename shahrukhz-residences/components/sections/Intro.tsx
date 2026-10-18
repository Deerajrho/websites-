import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { enquiry, intro, newTab, whatsappLink } from "@/lib/content";

// Split card: story on the left, the picture on the right with one sweeping corner.
export default function Intro() {
  return (
    <section className="card grid gap-8 rounded-3xl p-3 md:grid-cols-2 xl:col-span-8">
      <div className="flex flex-col justify-center p-3 sm:p-7">
        <SectionHeading compact eyebrow={intro.eyebrow} title={intro.title} />
        <div className="mt-6 space-y-4">
          {intro.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <Button href={whatsappLink(enquiry("the price list"))} {...newTab} className="mt-8 self-start">
          {intro.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
      <Image
        src={intro.image.src}
        alt={intro.image.alt}
        width={1100}
        height={1008}
        sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw"
        className="h-full min-h-72 w-full rounded-2xl rounded-br-[6rem] object-cover"
      />
    </section>
  );
}
