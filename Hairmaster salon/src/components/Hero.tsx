import {
  ContainerAnimated,
  ContainerInset,
  ContainerScroll,
  ContainerSticky,
  HeroButton,
  HeroImage,
} from "@/components/ui/animated-video-on-scroll";
import salonInterior from "@/assets/hero/salon-interior.png";

export default function Hero() {
  const scrollToVisit = () => {
    document.getElementById("visit")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top">
      <ContainerScroll className="h-[300vh]">
        <ContainerSticky
          style={{
            background:
              "radial-gradient(60% 55% at 50% 24%, #2c2e21 0%, #23241a 46%, #1a1812 100%)",
          }}
          className="flex flex-col items-center justify-center px-6 py-10 text-cream"
        >
          <ContainerAnimated className="mt-16 space-y-4 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-foil">
              Pigment — Color &amp; Cut Atelier
            </p>
            <h1 className="font-display text-5xl font-medium tracking-tight text-cream md:text-7xl">
              Every shade, formulated.
            </h1>
            <p className="mx-auto max-w-[46ch] text-lg text-cream-soft">
              An upscale unisex studio for precision cuts, color formulas, and grooming — warm
              light, sage and gold, done right.
            </p>
          </ContainerAnimated>

          <ContainerInset className="mx-auto aspect-[3/2] w-[min(92vw,920px)] py-6">
            <HeroImage
              src={salonInterior}
              alt="Pigment salon interior with sage-green styling chairs and gold accents"
              className="object-[50%_58%]"
            />
          </ContainerInset>

          <ContainerAnimated
            transition={{ delay: 0.4 }}
            outputRange={[-120, 0]}
            inputRange={[0, 0.7]}
            className="mx-auto mt-8 w-fit md:mt-2"
          >
            <HeroButton
              onClick={scrollToVisit}
              className="border-foil bg-black/20 px-6 py-3 shadow-[0px_4px_24px_rgba(201,162,39,0.4)] hover:bg-black/40"
            >
              <span className="font-body text-sm font-semibold text-cream">Book a visit</span>
            </HeroButton>
          </ContainerAnimated>
        </ContainerSticky>
      </ContainerScroll>
    </section>
  );
}
