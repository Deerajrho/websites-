import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import KeyFacts from "@/components/sections/KeyFacts";
import { hero } from "@/lib/content";

// The opening view: the film's first frames (out on the open sea, looking to shore) fill the screen behind
// the chart coordinates and the name set huge; a sea-dark veil keeps the white type readable, and the key
// facts sit along the bottom on a deep pane.
export default function Hero() {
  return (
    <section id="top" className="deep relative flex min-h-svh flex-col justify-end pt-14">
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-abyss/50 via-abyss/15 to-abyss/75" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="chart-label flex flex-wrap justify-between gap-2 border-b border-white/30 py-4 text-white/85">
          <span>N 25°16′ · E 55°16′</span>
          <span>{hero.eyebrow}</span>
        </div>
        <h1 className="mt-10 text-[clamp(3.25rem,11vw,10rem)] leading-[0.9] drop-shadow-[0_4px_30px_rgb(4_23_43/0.45)]">
          {hero.title} <em className="whitespace-nowrap text-[0.38em] text-aqua">{hero.titleTail}</em>
        </h1>
        <div className="mt-10 grid gap-8 pb-12 lg:grid-cols-12">
          <p className="font-display text-2xl italic leading-snug text-ink sm:text-3xl lg:col-span-5">{hero.price}</p>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg text-white/90">{hero.body}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#residences">
                {hero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="#contact" variant="outline">{hero.secondaryCta}</Button>
              <span className="chart-label text-aqua">{hero.chip}</span>
            </div>
          </div>
        </div>
        <div className="pane px-5">
          <KeyFacts />
        </div>
      </div>
    </section>
  );
}
