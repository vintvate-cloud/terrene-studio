import { motion, AnimatePresence } from "framer-motion";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = ["Index", "Studio", "Our Spaces", "One Installation", "Blueprints", "Connect"];

export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[60] bg-background p-8 md:p-12 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <span className="text-secondary uppercase tracking-widest text-sm">Navigation</span>
            <motion.button
              onClick={onClose}
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
              className="text-primary text-2xl hover:opacity-70 transition-opacity"
            >
              ✕
            </motion.button>
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            {menuItems.map((item, i) => (
              <motion.a
                key={item}
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                href="#"
                className="text-5xl md:text-7xl lg:text-8xl font-light text-primary hover:text-accent transition-colors tracking-tighter font-display group"
              >
                <span className="inline-block group-hover:translate-x-4 transition-transform duration-300">
                  {item}
                </span>
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between text-secondary gap-8">
            <div className="flex flex-col gap-1">
              <span>build@terrene.studio</span>
              <span>+1 (872) 441-2086</span>
            </div>
            <div className="flex gap-8">
              <span className="hover:text-primary transition-colors cursor-pointer">Instagram</span>
              <span className="hover:text-primary transition-colors cursor-pointer">LinkedIn</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Behance</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
