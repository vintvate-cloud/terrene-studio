import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import brandBg from "@/assets/brand-bg.jpg";

export default function BrandSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[90vh] w-full overflow-hidden flex flex-col justify-between">
      {/* Parallax bg */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 z-0 scale-110">
        <img src={brandBg} className="w-full h-full object-cover" alt="Architecture stairs" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-background/40" />
      </motion.div>

      {/* Center text */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[18vw] md:text-[16vw] font-bold text-primary tracking-tighter leading-none select-none"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Terrene
        </motion.h2>
      </div>

      {/* Bottom row */}
      <div className="relative z-10 px-6 md:px-12 pb-12 flex flex-col md:flex-row justify-between items-end gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-2xl md:text-4xl text-primary font-light tracking-tight leading-tight italic" style={{ fontFamily: "'Sora', sans-serif" }}>
            Spaces that breathe<br />with time
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-secondary text-sm md:text-base max-w-sm text-right leading-relaxed"
        >
          Our approach is guided by rhythm, proportion, and light, allowing every environment to grow more meaningful as it is lived in.
        </motion.p>
      </div>
    </section>
  );
}
