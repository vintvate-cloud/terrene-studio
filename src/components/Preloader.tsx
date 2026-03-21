import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsLoaded(true);
          // Wait for the full zoom and fade out sequence before unmounting
          setTimeout(onComplete, 1800);
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
        className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center bg-transparent"
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
      >
        {/* The SVG Mask layer */}
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <mask id="text-mask">
              {/* White background: makes the black rect visible */}
              <rect width="100%" height="100%" fill="white" />
              {/* Black text: cuts out the mask, making the rect transparent showing the scene */}
              <motion.text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="central"
                fill="black"
                className="font-light tracking-widest uppercase italic"
                style={{ fontSize: "16vw", transformOrigin: "50% 50%" }}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={
                  isLoaded
                    ? { scale: 150, opacity: 1 }
                    : { scale: 1, opacity: 1 }
                }
                transition={
                  isLoaded
                    ? { duration: 1.5, ease: [0.76, 0, 0.24, 1] }
                    : { duration: 1.5, ease: "easeOut" }
                }
              >
                TERRENE
              </motion.text>
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="black"
            mask="url(#text-mask)"
          />
        </svg>

        {/* The UI layer */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          animate={{ opacity: isLoaded ? 0 : 1, y: isLoaded ? -10 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute bottom-12 left-12">
            <div className="flex items-baseline space-x-1 text-white">
              <span className="text-6xl md:text-8xl font-medium leading-[0.8]">
                {progress}
              </span>
              <span className="text-xl font-light opacity-50">%</span>
            </div>
          </div>

          <div className="absolute top-12 right-12 text-white">
            <div className="flex flex-col items-end text-xs tracking-tighter uppercase opacity-40">
              <span>Spaces that feel rooted,</span>
              <span>human, and quietly bold.</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
