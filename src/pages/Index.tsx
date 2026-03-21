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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          className="bg-background min-h-screen"
        >
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
        </motion.main>
      </SmoothScroll>
    </div>
  );
};

export default Index;
