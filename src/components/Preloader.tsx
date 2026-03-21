import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white px-8"
      >
        <div className="relative overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-light tracking-widest uppercase italic"
          >
            Terrene Studio
          </motion.h1>
          {/* Subtle line reveal */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] bg-white/30 mt-4 origin-left"
          />
        </div>

        <div className="absolute bottom-12 left-12 overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex items-baseline space-x-1"
          >
            <span className="text-8xl md:text-[12rem] font-medium leading-[0.8]">
              {progress}
            </span>
            <span className="text-2xl font-light opacity-50">%</span>
          </motion.div>
        </div>

        <div className="absolute top-12 right-12">
          <div className="flex flex-col items-end text-sm tracking-tighter uppercase opacity-40">
            <span>Spaces that feel rooted,</span>
            <span>human, and quietly bold.</span>
          </div>
        </div>

        {/* Dynamic shape animation */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
        >
          <div className="w-[80vw] h-[80vw] border border-white/5 rounded-full" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
