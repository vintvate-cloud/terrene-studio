import { useState } from "react";
import FullscreenMenu from "./FullscreenMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-6 md:px-8 py-6 flex justify-between items-center mix-blend-difference">
        <div className="text-primary font-bold text-xl tracking-tighter">TERRENE</div>
        <div className="flex gap-3">
          <button onClick={() => setIsOpen(true)} className="btn-secondary">
            Menu
          </button>
          <button className="btn-primary !py-3 !px-6">
            Reserve
          </button>
        </div>
      </nav>
      <FullscreenMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
