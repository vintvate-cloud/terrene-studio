import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function RevealImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 20%"],
  });
  // Shutter/wipe reveal: clip-path sweeps from bottom
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["inset(100% 0% 0% 0% round 1rem)", "inset(0% 0% 0% 0% round 1rem)"]
  );
  // Inner image parallax
  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <motion.div ref={ref} style={{ clipPath }} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y: imageY }}
        className="w-full h-full object-cover scale-110"
      />
    </motion.div>
  );
}

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Velocity-inspired skew: section skews very slightly as you scroll through it
  const skewY = useTransform(scrollYProgress, [0, 0.5, 1], [1.5, 0, -1.5]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section ref={sectionRef} className="relative z-10 bg-background w-full py-32 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Images — left column */}
          <motion.div
            style={{ skewY }}
            className="lg:col-span-7 grid grid-cols-2 gap-4 will-change-transform"
          >
            <RevealImage
              src="/gallery-1.jpg"
              alt="Architecture facade"
              className="h-[280px] md:h-[420px] rounded-2xl cursor-pointer hover:brightness-110 transition-all duration-500"
            />
            <div className="relative -mt-8 md:-mt-14 group cursor-pointer">
              <RevealImage
                src="/gallery-2.jpg"
                alt="Office interior"
                className="h-[340px] md:h-[520px] rounded-2xl"
              />
              {/* Overlay — slides up on hover */}
              <div className="absolute inset-0 rounded-2xl bg-background/65 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="text-center">
                  <span className="text-5xl text-primary block font-display font-light">800+</span>
                  <span className="text-secondary text-xs uppercase tracking-widest mt-2 block">Project Images</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text — right column with independent parallax */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="lg:col-span-5 space-y-8"
          >
            <p className="text-secondary/50 uppercase tracking-[0.3em] text-xs">Visual Archive</p>
            <h3 className="text-3xl md:text-5xl text-primary tracking-tighter font-light font-display leading-tight">
              Take a closer look at the projects that define our practice.
            </h3>
            <p className="text-body leading-relaxed">
              From intimate interiors to expansive landscapes, each image highlights a unique perspective that might spark your next big idea.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.12)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="btn-primary inline-block"
            >
              Explore Gallery
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
