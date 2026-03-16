import { motion } from "framer-motion";
import { Linkedin, Instagram, Dribbble, Youtube } from "lucide-react";

const socialIcons = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
  { icon: Dribbble, label: "Dribbble" },
  { icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative section-container py-24 overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      {/* Top row: social icons + quote */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex gap-4"
        >
          {socialIcons.map(({ icon: Icon, label }, i) => (
            <motion.a
              key={label}
              href="#"
              whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.4)" }}
              transition={{ duration: 0.2 }}
              className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-secondary hover:text-primary transition-colors"
              aria-label={label}
            >
              <Icon size={20} strokeWidth={1.5} />
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-secondary max-w-sm text-right font-light leading-relaxed"
        >
          We believe design is not decoration but the quiet structure that shapes experience.
        </motion.p>
      </div>

      {/* Giant metallic "Terrene" */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="metallic-text text-[18vw] md:text-[16vw] font-bold leading-[0.85] tracking-tighter select-none"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        Terrene
      </motion.h2>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-secondary text-sm gap-4">
        <span>
          Developed by — <span className="text-accent">Razal</span>
        </span>
        <span className="text-muted-foreground">This website uses cookies.</span>
        <span>All rights reserved © 2025</span>
      </div>
    </footer>
  );
}
