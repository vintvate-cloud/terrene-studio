import { motion } from "framer-motion";
import { Menu } from "lucide-react";

interface FloatingMenuProps {
  onClick: () => void;
}

export default function FloatingMenu({ onClick }: FloatingMenuProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      onClick={onClick}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-glow hover:shadow-[0_0_30px_rgba(229,223,214,0.25)] transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      <Menu size={18} strokeWidth={2} />
      <span className="text-sm tracking-wide">Menu</span>
    </motion.button>
  );
}
