import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";
// Animation Variants for massive heading
const staggerHeading = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2, // Wait slightly before starting
    },
  },
};

const wordAnimationHeading = {
  hidden: { y: "150%", rotate: 4, opacity: 0 },
  visible: {
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1] as const, // Cinematic deceleration
    },
  },
};

// Helper for splitting text into masked lines
const SplitTextHeading = ({ text }: { text: string }) => {
  return (
    <span className="inline-flex justify-center whitespace-pre flex-wrap">
      {text.split(" ").map((word, i) => (
        <span key={i} className="overflow-hidden inline-flex pb-2 -mb-2 mr-[0.25em]">
          <motion.span variants={wordAnimationHeading} className="inline-block origin-bottom-left">
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

// Animation Variants for paragraph
const staggerParagraph = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.8 }, // Start after heading
  },
};

const wordAnimationParagraph = {
  hidden: { y: "120%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const } },
};

const SplitTextParagraph = ({ text }: { text: string }) => {
  return (
    <span className="inline-flex justify-center whitespace-pre flex-wrap">
      {text.split(" ").map((word, i) => (
        <span key={i} className="overflow-hidden inline-flex pb-1 -mb-1 mr-[0.3em]">
          <motion.span variants={wordAnimationParagraph} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-[110vh] w-full overflow-hidden flex items-center justify-center pt-16">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="/heroimage.jpg"
          className="w-full h-full object-cover scale-110"
          alt="Architectural Interior"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 px-4 w-full flex flex-col items-center text-center">

        {/* Animated Heading */}
        <motion.h1
          variants={staggerHeading}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tighter mb-8 font-display text-white font-medium flex flex-col items-center"
        >
          <SplitTextHeading text="Spaces that feel rooted, human," />
          <span className="mt-1 md:mt-2" />
          <SplitTextHeading text="and quietly bold" />
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.div
          variants={staggerParagraph}
          initial="hidden"
          animate="visible"
          className="text-white/80 max-w-xl mx-auto mb-14 text-base md:text-lg font-light tracking-wide flex flex-col items-center"
        >
          <SplitTextParagraph text="At Terrene, we shape environments that elevate daily life," />
          <span className="mt-1" />
          <SplitTextParagraph text="invite pause, and speak through texture and light." />
        </motion.div>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
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
              <span className="relative z-[11] tracking-wide pr-2 text-zinc-900 group-hover:text-white transition-colors duration-300 pointer-events-none">Discover More</span>
            </motion.button>
          </MagneticWrapper>
        </motion.div>

      </motion.div>
    </section>
  );
}
