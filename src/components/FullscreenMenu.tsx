import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: "Index", image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { name: "Studio", image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { name: "Our Spaces", image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { name: "One Installation", image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { name: "Blueprints", image: "https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { name: "Connect", image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting-area.jpg?auto=compress&cs=tinysrgb&w=1200" },
];

export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] bg-background flex flex-col lg:flex-row"
        >
          {/* Left Side: Navigation Links */}
          <div className="w-full lg:w-[50%] h-full flex flex-col justify-between p-8 md:p-12 lg:p-16 z-10">
            {/* Header */}
            <div className="flex justify-between items-start">
              <span className="text-secondary/80 uppercase tracking-[0.2em] text-xs font-semibold">Navigation</span>
              <motion.button
                onClick={onClose}
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
                className="text-primary text-2xl hover:opacity-70 transition-opacity lg:hidden"
              >
                ✕
              </motion.button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-0 my-12 lg:my-0">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  href="#"
                  onMouseEnter={() => setActiveItem(i)}
                  className={`text-5xl md:text-7xl lg:text-[7rem] font-light transition-all duration-300 tracking-tighter font-display uppercase leading-[0.9] py-2 md:py-3
                    ${activeItem === i ? "text-primary pl-4 md:pl-8" : "text-primary/10 hover:text-primary/40"}
                  `}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row justify-between text-secondary/70 gap-8 text-xs md:text-sm uppercase tracking-widest">
              <div className="flex flex-col gap-2">
                <span className="hover:text-primary transition-colors cursor-pointer">build@terrene.studio</span>
                <span className="hover:text-primary transition-colors cursor-pointer">+1 (872) 441-2086</span>
              </div>
              <div className="flex gap-6 sm:gap-8">
                <span className="hover:text-primary transition-colors cursor-pointer">Instagram</span>
                <span className="hover:text-primary transition-colors cursor-pointer">LinkedIn</span>
                <span className="hover:text-primary transition-colors cursor-pointer">Behance</span>
              </div>
            </div>
          </div>

          {/* Right Side: Image Reveal (Hidden on smaller screens to prioritize text) */}
          <div className="hidden lg:block w-[50%] h-full relative bg-[#0a0a0a] overflow-hidden">
            {/* Desktop Close Button */}
            <motion.button
              onClick={onClose}
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="absolute top-12 right-12 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xl hover:bg-white/20 transition-colors"
            >
              ✕
            </motion.button>

            {/* Images mapping with clip-path wipe animation */}
            <AnimatePresence mode="sync">
              <motion.img
                key={activeItem}
                src={menuItems[activeItem].image}
                alt={menuItems[activeItem].name}
                initial={{ opacity: 0, scale: 1.1, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                animate={{ opacity: 1, scale: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                exit={{ opacity: 0, scale: 0.95, clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Subtle dark gradient overlay to make close button always legible */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
