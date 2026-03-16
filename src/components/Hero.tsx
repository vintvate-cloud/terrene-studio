import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={heroBg}
          className="w-full h-full object-cover scale-110"
          alt="Architectural Interior"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="heading-xl mb-8 font-display"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          Spaces that feel rooted, human, and quietly bold
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-body max-w-xl mx-auto mb-10"
        >
          At Terrene, we shape environments that elevate daily life, invite pause, and speak through texture and light.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="btn-primary">
            Discover More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
