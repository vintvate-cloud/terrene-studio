import { useState, useEffect } from "react";
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
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  // isReady fires slightly after loading ends — gives the preloader exit animation
  // time to complete its own transition before we start drawing the page
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const t = setTimeout(() => setIsReady(true), 150);
      return () => clearTimeout(t);
    }
  }, [isLoading]);

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <CustomCursor />

      <SmoothScroll>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-background min-h-screen"
        >
          <Navbar isReady={isReady} />
          {/* 200vh wrapper: gives 100vh of scroll fuel for the curtain pull */}
          <div style={{ height: "200vh" }}>
            <Hero isReady={isReady} />
          </div>
          {/* -100vh margin: Stats curtain starts at the bottom of the viewport, pulls upward over the hero */}
          <Stats className="-mt-[100vh]" />
          <About />
          <HowWeWork />
          <ProjectFeature />
          <Testimonials />
          <Gallery />
          <BrandSection />
          <Footer />
        </motion.main>
      </SmoothScroll>
    </div>
  );
};

export default Index;
