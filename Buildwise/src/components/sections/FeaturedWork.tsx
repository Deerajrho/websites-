import Image from "next/image";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { GlassPanel } from "@/components/ui/GlassPanel";

export type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
};

// Captured via scripts/capture-screenshots.mjs from live template builds.
const PROJECTS: Project[] = [
  {
    title: "Kerala Trails",
    description:
      "A luxury travel and tour-booking site for backwater houseboats, hill-station escapes, and personalised itineraries across Kerala.",
    image: "/portfolio/kerala-trails.jpg",
    url: "https://kerala-trails-1c8abuxee-webwweavers.vercel.app/",
  },
  {
    title: "Hairmasters",
    description:
      "A premium unisex salon site for styling, colour, spa treatments, and bridal bookings — built to convert browsers into appointments.",
    image: "/portfolio/salon.jpg",
    url: "https://salon-ncx3oeq0x-webwweavers.vercel.app/",
  },
  {
    title: "Buildwise Portfolio",
    description:
      "The freelance studio site behind these builds — AI-engineered websites and digital experiences, designed to match.",
    image: "/portfolio/portfolio-deerajbabu.jpg",
    url: "https://portfoliodeerajgamer.vercel.app/",
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="bg-base px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-12 flex flex-col gap-4">
          <AnimatedItem>
            <EyebrowBadge color="var(--color-accent)">Featured Work</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-2xl font-display text-3xl font-semibold text-fg md:text-4xl">
              What building your digital ecosystem looks like.
            </h2>
          </AnimatedItem>
        </AnimatedSection>

        {PROJECTS.length === 0 ? (
          <AnimatedSection>
            <AnimatedItem>
              <GlassPanel className="flex flex-col items-center gap-3 px-8 py-16 text-center">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  Portfolio in progress
                </span>
                <p className="max-w-md text-sm text-muted">
                  Case studies and template previews are being added here as
                  projects ship — starting with our first client build.
                </p>
              </GlassPanel>
            </AnimatedItem>
          </AnimatedSection>
        ) : (
          <AnimatedSection className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <AnimatedItem key={project.title}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <GlassPanel
                    glow="var(--color-accent)"
                    className="group flex flex-col overflow-hidden"
                  >
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 p-6">
                      <h3 className="font-display text-lg font-semibold text-fg-glass">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted">{project.description}</p>
                      <span className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                        View Live →
                      </span>
                    </div>
                  </GlassPanel>
                </a>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
