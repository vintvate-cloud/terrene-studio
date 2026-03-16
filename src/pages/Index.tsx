import { useState } from "react";
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
import FloatingMenu from "@/components/FloatingMenu";
import FullscreenMenu from "@/components/FullscreenMenu";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <FloatingMenu onClick={() => setMenuOpen(true)} />
        <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </main>
    </SmoothScroll>
  );
};

export default Index;
