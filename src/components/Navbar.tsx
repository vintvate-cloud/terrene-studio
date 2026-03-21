import { useState } from "react";
import FullscreenMenu from "./FullscreenMenu";
import { motion } from "framer-motion";
import { ArrowRight, Equal } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";

const PillButton = ({ icon: Icon, text, onClick, className = "" }: any) => (
  <MagneticWrapper strength={0.3}>
    <motion.button 
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.97 }} 
      onClick={onClick}
      className={`relative flex items-center gap-4 bg-[#e8e6e1]/90 backdrop-blur-sm rounded-full py-1.5 pl-1.5 pr-6 transition-all font-medium text-sm shadow-xl overflow-hidden group ${className}`}
    >
      <div className="absolute left-1.5 top-1.5 w-8 h-8 md:w-10 md:h-10 bg-zinc-900 rounded-full z-0 group-hover:scale-[15] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-center" />
      <div className="relative z-10 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-white rounded-full">
        <Icon size={18} strokeWidth={2} />
      </div>
      <span className="relative z-10 tracking-wide pr-2 text-zinc-900 group-hover:text-white transition-colors duration-300 pointer-events-none">{text}</span>
    </motion.button>
  </MagneticWrapper>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed inset-0 z-50 pointer-events-none">
        {/* Logo */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 pointer-events-auto text-white">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="4" />
            <rect x="7" y="7" width="10" height="10" rx="2" />
            <rect x="10.5" y="10.5" width="3" height="3" rx="0.5" />
          </svg>
        </div>

        {/* Reserve Button */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 pointer-events-auto">
          <PillButton icon={ArrowRight} text="Reserve" />
        </div>

        {/* Menu Button */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-8 pointer-events-auto">
          <PillButton icon={Equal} text="Menu" onClick={() => setIsOpen(true)} />
        </div>
      </nav>
      
      <FullscreenMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
