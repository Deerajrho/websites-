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

// App-style shell: sticky sidebar on desktop, and the sections laid out as a 12-column bento board.
// Each section sets its own column span; pairs that sit side by side are listed next to each other.
// Each section's copy lives in lib/content.ts.
export default function Home() {
  return (
    <>
      <SmoothScroll />
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-4 p-3 sm:gap-6 sm:p-4 lg:grid-cols-[17rem_minmax(0,1fr)] lg:p-6">
        <Header />
        <div className="min-w-0 space-y-4 sm:space-y-6">
          <main className="grid grid-cols-1 gap-4 sm:gap-6 xl:grid-cols-12">
            <Hero />
            <KeyFacts />
            <Intro />
            <Residences />
            <PaymentPlan />
            <MasterPlan />
            <Amenities />
            <Gallery />
            <Location />
            <PriorityAccess />
            <Faq />
            <Brochure />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
      <MobileActionBar />
    </>
  );
}
