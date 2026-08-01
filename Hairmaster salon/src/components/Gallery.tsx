import { useReveal } from "@/lib/useReveal";
import balayage from "@/assets/gallery/balayage.png";
import copperCorrection from "@/assets/gallery/copper-correction.png";
import rootMelt from "@/assets/gallery/root-melt.png";
import silverToner from "@/assets/gallery/silver-toner.png";
import curlyCut from "@/assets/gallery/curly-cut.png";
import bridalLift from "@/assets/gallery/bridal-lift.png";

interface GalleryLook {
  caption: string;
  from: number;
  to: number;
  image?: string;
}

const LOOKS: GalleryLook[] = [
  { caption: "Balayage, level 5 to 9", from: 5, to: 9, image: balayage },
  { caption: "Copper correction, level 1 to 6", from: 1, to: 6, image: copperCorrection },
  { caption: "Root melt, level 6", from: 6, to: 6, image: rootMelt },
  { caption: "Silver toner, level 8 to 10", from: 8, to: 10, image: silverToner },
  { caption: "Curly cut, level 3", from: 3, to: 3, image: curlyCut },
  { caption: "Bridal lift & style, level 2 to 8", from: 2, to: 8, image: bridalLift },
];

function GalleryTile({ look, index }: { look: GalleryLook; index: number }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <figure
      ref={ref}
      className="reveal group relative aspect-square overflow-hidden rounded-lg bg-black/20"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {look.image ? (
        <img
          src={look.image}
          alt={look.caption}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      ) : (
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            background: `linear-gradient(155deg, var(--color-lvl-${look.to}), var(--color-lvl-${Math.round(
              (look.from + look.to) / 2,
            )}) 55%, var(--color-lvl-${look.from}))`,
          }}
          aria-hidden="true"
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,18,13,0) 45%, rgba(20,18,13,0.85) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
        style={{
          background: `linear-gradient(90deg, var(--color-lvl-${look.from}), var(--color-lvl-${look.to}))`,
        }}
        aria-hidden="true"
      />
      <figcaption className="absolute inset-x-0 bottom-0 p-4 font-display text-lg text-cream md:p-5 md:text-xl">
        {look.caption}
      </figcaption>
    </figure>
  );
}

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="wrap">
        <p className="eyebrow eyebrow--light">Gallery</p>
        <h2 className="section-title section-title--light">Recent formulas.</h2>
        <p className="section-lede" style={{ color: "var(--color-cream-soft)" }}>
          Every look starts as a formula — here's what a few of them turned into.
        </p>
      </div>
      <div className="wrap">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {LOOKS.map((look, index) => (
            <GalleryTile key={look.caption} look={look} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
