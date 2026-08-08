import BackgroundAnimation from "@/components/BackgroundAnimation";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import TrustedResults from "@/components/sections/TrustedResults";
import Services from "@/components/sections/Services";
import FeaturedWork from "@/components/sections/FeaturedWork";
import HowWeWork from "@/components/sections/HowWeWork";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div id="top" className="relative flex flex-1 flex-col">
      <BackgroundAnimation />
      <div className="relative z-10 flex flex-1 flex-col">
        <Nav />
        <Hero />
        <TrustedResults />
        <Services />
        <FeaturedWork />
        <HowWeWork />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
