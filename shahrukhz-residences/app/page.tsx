import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileActionBar from "@/components/layout/MobileActionBar";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Amenities from "@/components/sections/Amenities";
import Brochure from "@/components/sections/Brochure";
import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import KeyFacts from "@/components/sections/KeyFacts";
import Location from "@/components/sections/Location";
import MasterPlan from "@/components/sections/MasterPlan";
import PaymentPlan from "@/components/sections/PaymentPlan";
import PriorityAccess from "@/components/sections/PriorityAccess";
import Residences from "@/components/sections/Residences";

// The page in reading order. Each section's copy lives in lib/content.ts.
export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main>
        <Hero />
        <KeyFacts />
        <Intro />
        <Residences />
        <PaymentPlan />
        <Amenities />
        <Gallery />
        <PriorityAccess />
        <MasterPlan />
        <Brochure />
        <Location />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
