import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MarqueeItem = ({ text, direction = "left", speed = 20 }: { text: string, direction?: "left" | "right", speed?: number }) => {
  return (
    <div className="relative flex overflow-hidden whitespace-nowrap py-2 opacity-80 mix-blend-difference">
      <motion.div
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        className="flex whitespace-nowrap"
      >
        <div className="text-[12vw] font-display uppercase tracking-[-0.05em] leading-none text-transparent flex shrink-0"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>
          {/* Duplicate 4 times to ensure it fills screen and loops perfectly */}
          <span className="pr-12">{text}</span>
          <span className="pr-12">{text}</span>
          <span className="pr-12">{text}</span>
          <span className="pr-12">{text}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default function BrandSection() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden bg-background py-32 flex flex-col gap-4">
      {/* Divider lines above and below acting as graphical architecture */}
      <div className="w-full h-[1px] bg-white/10 mb-8" />

      <div className="flex flex-col -my-4 transform rotate-[-2deg] scale-105">
        <MarqueeItem text="TERRENE STUDIO — SPACES THAT BREATHE —" direction="left" speed={25} />
        <MarqueeItem text="FORM FOLLOWS FEELING — RHYTHM & LIGHT —" direction="right" speed={30} />
        <MarqueeItem text="ARCHITECTURAL PRESENCE — TIMELESS DESIGN —" direction="left" speed={20} />
      </div>

      <div className="w-full h-[1px] bg-white/10 mt-8" />
    </section>
  );
}
