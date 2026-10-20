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
    </>
  );
}
