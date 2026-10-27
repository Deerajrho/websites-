import FrameBackdrop from "@/components/layout/FrameBackdrop";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileActionBar from "@/components/layout/MobileActionBar";
import Pane from "@/components/layout/Pane";
import SmoothScroll from "@/components/layout/SmoothScroll";
import WhatsAppLinks from "@/components/layout/WhatsAppLinks";
import Amenities from "@/components/sections/Amenities";
import Brochure from "@/components/sections/Brochure";
import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Location from "@/components/sections/Location";
import MasterPlan from "@/components/sections/MasterPlan";
import PaymentPlan from "@/components/sections/PaymentPlan";
import Residences from "@/components/sections/Residences";
import JsonLd, { agentNode } from "@/components/ui/JsonLd";
import { contact, faq, seo, siteUrl } from "@/lib/content";

// Structured data for search engines: the development (location, contact), the FAQ shown on the page,
// and the sales agency, linked to the page as its publisher.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ApartmentComplex",
      "@id": `${siteUrl}/#residence`,
      name: "Shahrukhz Residences by Danube",
      description: seo.description,
      url: siteUrl,
      image: `${siteUrl}/og.jpg`,
      telephone: contact.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai Maritime City",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
    },
    // Built from the same list as the visible FAQ section, so the two always match (Google requires that).
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    agentNode,
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      about: { "@id": `${siteUrl}/#residence` },
      publisher: { "@id": `${siteUrl}/#agent` },
    },
  ],
};

// The fly-through plays behind the whole page as you scroll (sea, beach, house, courtyard, aerial);
// the sections float over it as panes, light seafoam in the first half, deep ocean in the second.
// Each section's copy lives in lib/content.ts.
export default function Home() {
  const pair = "grid gap-16 xl:grid-cols-12 xl:gap-12";
  return (
    <>
      <SmoothScroll />
      <WhatsAppLinks />
      <FrameBackdrop />
      <Header />
      <main>
        <Hero />
        <Pane tone="shore" label="01 · Shoreline"><Intro /></Pane>
        <Pane tone="shore" label="02 · Residences"><Residences /></Pane>
        <Pane tone="shore" label="03 · Terms & plans" className="space-y-28">
          <PaymentPlan />
          <MasterPlan />
        </Pane>
        <Pane tone="deep" label="04 · Amenities"><Amenities /></Pane>
        <Pane tone="deep" label="05 · Gallery"><Gallery /></Pane>
        <Pane tone="deep" label="06 · Location"><Location /></Pane>
        <Pane tone="deep" label="07 · Questions" className={pair}>
          <Faq />
          <Brochure />
        </Pane>
        <Pane tone="deep" label="08 · Contact"><Contact /></Pane>
      </main>
      <Footer />
      <MobileActionBar />
      <JsonLd data={jsonLd} />
    </>
  );
}
