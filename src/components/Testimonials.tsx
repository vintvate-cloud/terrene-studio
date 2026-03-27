import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const testimonials = [
  {
    quote: "The design feels deeply personal, as if it grew from the way we live. The flow of each room, the light at different hours — everything was thought through with care.",
    name: "Evelyn Hart",
    role: "Villa Owner",
    initials: "EH",
  },
  {
    quote: "ARC Dezine didn't just design our space — they understood our rhythm. The result is an office where we actually want to spend time.",
    name: "Marcus Rowe",
    role: "Creative Director",
    initials: "MR",
  },
  {
    quote: "Every material, every proportion, every view was considered. Being inside the finished space feels like being inside a carefully composed idea.",
    name: "Sasha Lim",
    role: "Homeowner",
    initials: "SL",
  },
];

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 30%"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className="relative flex flex-col gap-8 p-10 md:p-14 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/15 transition-all duration-500 group cursor-default"
    >
      {/* Large floating quote mark */}
      <span className="absolute top-6 left-8 text-[6rem] leading-none font-serif text-white/5 select-none group-hover:text-white/10 transition-colors duration-500">"</span>

      {/* Quote text */}
      <p className="relative text-lg md:text-xl font-light leading-relaxed text-primary/80 italic z-10 pt-8">
        "{t.quote}"
      </p>

      {/* Divider line that grows on hover */}
      <div className="w-full h-[1px] bg-white/10 group-hover:bg-white/25 transition-all duration-500 origin-left" />

      {/* Author */}
      <div className="flex items-center gap-4 z-10">
        <div className="w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-primary text-xs font-semibold tracking-wide group-hover:bg-white/15 transition-colors duration-300">
          {t.initials}
        </div>
        <div className="flex flex-col">
          <span className="text-primary text-sm font-medium tracking-wide">{t.name}</span>
          <span className="text-secondary/60 text-xs uppercase tracking-[0.2em] mt-0.5">{t.role}</span>
        </div>
        {/* Index number top right */}
        <span className="ml-auto text-[2.5rem] font-display font-light text-white/8 leading-none tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: headerProgress } = useScroll({
    target: headerRef,
    offset: ["start 85%", "start 30%"],
  });
  const headerY = useTransform(headerProgress, [0, 1], [40, 0]);
  const headerOpacity = useTransform(headerProgress, [0, 0.6], [0, 1]);

  return (
    <section className="relative z-10 bg-background w-full py-32 md:py-40">
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={headerRef}
          style={{ y: headerY, opacity: headerOpacity }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="text-secondary/50 uppercase tracking-[0.3em] text-xs mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter font-display text-primary">
              Voices from<br />our spaces
            </h2>
          </div>
          <p className="text-secondary/60 text-sm md:text-base font-light max-w-xs leading-relaxed text-right">
            Every project leaves an impression — here's what our clients remember most.
          </p>
        </motion.div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
