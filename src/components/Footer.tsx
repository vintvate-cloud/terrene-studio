export default function Footer() {
  return (
    <footer className="section-container py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-32">
        <div className="flex gap-6 text-secondary">
          <span className="hover:text-primary transition-colors cursor-pointer">IG</span>
          <span className="hover:text-primary transition-colors cursor-pointer">LN</span>
          <span className="hover:text-primary transition-colors cursor-pointer">BE</span>
        </div>
        <p className="text-xl md:text-2xl text-primary max-w-md italic font-light">
          "We believe design is not decoration but the quiet structure that shapes experience."
        </p>
      </div>
      <h2 className="text-[12vw] md:text-[15vw] font-bold leading-none tracking-tighter select-none" style={{ color: "rgba(255,255,255,0.05)" }}>
        TERRENE
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-secondary text-sm uppercase tracking-widest gap-4">
        <span>Developed by — Razal</span>
        <span>© 2025 All Rights Reserved</span>
      </div>
    </footer>
  );
}
