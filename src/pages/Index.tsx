import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import HowWeWork from "@/components/HowWeWork";
import ProjectFeature from "@/components/ProjectFeature";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import BrandSection from "@/components/BrandSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <SmoothScroll>
      <main className="bg-background min-h-screen">
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <HowWeWork />
        <ProjectFeature />
        <Testimonials />
        <Gallery />
        <BrandSection />
        <Footer />
      </main>
    </SmoothScroll>
  );
};

export default Index;
