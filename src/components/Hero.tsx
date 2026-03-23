import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";

// ─── Heading animation ───────────────────────────────────────────────────────
const staggerHeading = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 1.1 } },
};
const wordAnimationHeading = {
  hidden: { y: "150%", rotate: 4, opacity: 0 },
  visible: { y: 0, rotate: 0, opacity: 1, transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] as const } },
};
const SplitTextHeading = ({ text }: { text: string }) => (
  <span className="inline-flex justify-center whitespace-pre flex-wrap">
    {text.split(" ").map((word, i) => (
      <span key={i} className="overflow-hidden inline-flex pb-2 -mb-2 mr-[0.25em]">
        <motion.span variants={wordAnimationHeading} className="inline-block origin-bottom-left">{word}</motion.span>
      </span>
    ))}
  </span>
);
const staggerParagraph = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 1.9 } },
};
const wordAnimationParagraph = {
  hidden: { y: "120%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const } },
};
const SplitTextParagraph = ({ text }: { text: string }) => (
  <span className="inline-flex justify-center whitespace-pre flex-wrap">
    {text.split(" ").map((word, i) => (
      <span key={i} className="overflow-hidden inline-flex pb-1 -mb-1 mr-[0.3em]">
        <motion.span variants={wordAnimationParagraph} className="inline-block">{word}</motion.span>
      </span>
    ))}
  </span>
);

export default function Hero({ isReady = false }: { isReady?: boolean }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Subtle image parallax as curtain reveals it
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  // Hero content fades out as curtain approaches
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-8%"]);

  return (
    // The hero is sticky — it stays behind while the curtain above it scrolls
    <section ref={sectionRef} className="sticky top-0 h-screen w-full overflow-hidden z-0">
      {/* Background Image — clip-path reveals from bottom on entry */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 z-0 scale-110"
        initial={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 0 }}
        animate={isReady
          ? { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }
          : { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 }
        }
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0 }}
      >
        <img src="/heroimage.jpg" className="w-full h-full object-cover" alt="Architectural Interior" />
        <div className="absolute inset-0 bg-black/35" />
      </motion.div>

      {/* Hero copy */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 h-full px-4 w-full flex flex-col items-center justify-center text-center pt-16"
      >
        <motion.h1
          variants={staggerHeading}
          initial="hidden"
          animate={isReady ? "visible" : "hidden"}
          className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tighter mb-8 font-display text-white font-medium flex flex-col items-center"
        >
          <SplitTextHeading text="Spaces that feel rooted, human," />
          <span className="mt-1 md:mt-2" />
          <SplitTextHeading text="and quietly bold" />
        </motion.h1>

        <motion.div
          variants={staggerParagraph}
          initial="hidden"
          animate={isReady ? "visible" : "hidden"}
          className="text-white/80 max-w-xl mx-auto mb-14 text-base md:text-lg font-light tracking-wide flex flex-col items-center"
        >
          <SplitTextParagraph text="At Terrene, we shape environments that elevate daily life," />
          <span className="mt-1" />
          <SplitTextParagraph text="invite pause, and speak through texture and light." />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 2.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <MagneticWrapper strength={0.25}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative flex items-center gap-4 bg-[#e8e6e1]/90 backdrop-blur-sm rounded-full py-1.5 pl-1.5 pr-6 transition-all font-medium text-sm shadow-xl mx-auto overflow-hidden group"
            >
              <div className="absolute left-1.5 top-1.5 w-10 h-10 bg-zinc-900 rounded-full z-0 group-hover:scale-[15] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-center" />
              <div className="relative z-10 flex items-center justify-center w-10 h-10 text-white rounded-full">
                <ArrowRight size={18} strokeWidth={2} />
              </div>
              <span className="relative z-[11] tracking-wide pr-2 text-zinc-900 group-hover:text-white transition-colors duration-300 pointer-events-none">
                Discover More
              </span>
            </motion.button>
          </MagneticWrapper>
        </motion.div>
      </motion.div>
    </section>
  );
}
