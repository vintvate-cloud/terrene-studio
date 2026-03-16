import brandBg from "@/assets/brand-bg.jpg";

export default function BrandSection() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img src={brandBg} className="w-full h-full object-cover opacity-40" alt="Architecture stairs" />
      </div>
      <h2 className="relative z-10 text-[15vw] md:text-[20vw] font-bold text-primary tracking-tighter leading-none select-none">
        TERRENE
      </h2>
      <p className="relative z-10 text-secondary text-lg md:text-2xl tracking-widest uppercase mt-4">
        Spaces that breathe with time
      </p>
    </section>
  );
}
