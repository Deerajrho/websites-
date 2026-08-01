import LevelProgress from "@/components/LevelProgress";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import ServicesScroll from "@/components/ServicesScroll";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

function App() {
  return (
    <>
      <LevelProgress />
      <Header />
      <main>
        <Hero />
        <ServicesScroll />
        <Gallery />
        <Process />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </>
  );
}

export default App;
