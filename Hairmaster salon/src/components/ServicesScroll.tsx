import ScrollAnimation, { type ScrollColumn } from "@/components/ui/you-can-scroll";
import portraitWomen from "@/assets/hero/portrait-women.png";
import portraitMen from "@/assets/hero/portrait-men.png";

const COLUMNS: ScrollColumn[] = [
  {
    id: "women",
    label: "For Her",
    bgImage: portraitWomen,
    bgPosition: "center 15%",
    items: [
      "Updos",
      "Eyebrow threading",
      "Bridal services",
      "Hair extensions",
      "Ombre hair color",
      "Balayage",
      "Blowouts",
      "Blowdry",
      "Box Braids",
      "Braids",
      "Twist braids",
      "Body waxing",
      "Manicure",
      "Pedicure",
      "Makeup",
      "Hairstyling",
      "Hair highlighting",
      "Bang trim",
      "Shampoo & conditioning",
      "Hair & Make-up Academy",
    ],
  },
  {
    id: "men",
    label: "For Him",
    bgImage: portraitMen,
    bgPosition: "center 20%",
    items: [
      "Beard trim",
      "Shaving",
      "Haircut",
      "Kids' cuts",
      "Perms",
      "Keratin treatments",
      "Curly hair",
      "Braiding",
      "Dreadlocks",
      "Hair regrowth",
      "Hair coloring",
      "Hair treatments",
      "Hair straightening",
      "Botox Hair Treatment",
      "Cera Smooth",
      "Cryo Hair Treatment",
      "Hair Dandruff Treatment",
      "Kera Shine Hair Treatment",
      "Free Consultation",
      "Online hair salon booking",
    ],
  },
];

export default function ServicesScroll() {
  return (
    <section className="services-scroll" id="services-scroll">
      <div className="wrap">
        <p className="eyebrow eyebrow--light">The Full Menu</p>
        <h2 className="section-title section-title--light">Scroll the list.</h2>
        <p className="section-lede" style={{ color: "var(--color-cream-soft)" }}>
          Everything on the books, split for her and for him. Scroll each column — the one
          centered is the one in focus.
        </p>
      </div>
      <ScrollAnimation columns={COLUMNS} />
    </section>
  );
}
