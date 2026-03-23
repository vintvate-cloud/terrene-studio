import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const text = "At Terrene, we design with purpose and clarity, creating spaces that speak through light, scale, and the quiet confidence of lasting form.";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 50%"],
  });

  // Apply spring physics to make it feel fluid, not mechanical
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // The diagonal "bleed" is implemented as a CSS `background-clip: text` gradient
  // that shifts its position from left to right as the user scrolls.
  // We map scroll progress → the X position of a sharp diagonal gradient stop.
  const gradientX = useTransform(smoothProgress, [0, 1], ["-20%", "120%"]);

  return (
    <section
      ref={containerRef}
      className="relative z-10 bg-background py-40 md:py-56 px-6 md:px-8 text-center overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-secondary/50 uppercase tracking-[0.3em] text-xs mb-16"
        >
          Our Ethos
        </motion.p>

        {/* Ink Bleed heading:
            The gradient has 3 stops:
            - Left of the wave: revealed bright cream (fully bleeded)
            - At the wave: sharp edge
            - Right of the wave: dim grey (not yet bleeded)
            We animate the `gradientX` position so the wave sweeps left→right.
        */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          style={{
            backgroundImage: useTransform(
              gradientX,
              (x) =>
                `linear-gradient(
                  105deg,
                  hsl(34,16%,90%) 0%,
                  hsl(34,16%,90%) ${x},
                  rgba(255,255,255,0.12) calc(${x} + 18%),
                  rgba(255,255,255,0.08) 100%
                )`
            ),
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
          className="text-3xl md:text-5xl lg:text-7xl font-light tracking-tighter leading-tight font-display"
        >
          {text}
        </motion.h2>

        {/* Button reveals after the bleed completes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-secondary mt-16"
          >
            Our Philosophy
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
