import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Quiet Listening",
    desc: "Every project begins with long, unhurried conversations. We study how the space will actually be lived in before drawing a single line.",
    tag: "Discovery",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1400",
  },
  {
    num: "02",
    title: "Site Reading",
    desc: "We map the view corridors, light angles at every hour, and the materiality of the surrounding landscape before any decision is made.",
    tag: "Research",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1400",
  },
  {
    num: "03",
    title: "Tactile Selection",
    desc: "Materials are chosen by touch as much as by eye. Stone, wood, and textile samples are curated directly on-site under natural light.",
    tag: "Curation",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1400",
  },
  {
    num: "04",
    title: "Light Mapping",
    desc: "We blueprint light paths across all seasons. A space must feel alive in January as much as in July — this is non-negotiable.",
    tag: "Detail",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1400",
  },
  {
    num: "05",
    title: "Slow Build",
    desc: "Revisions are welcomed at every stage. Good design doesn't rush — we take the time a lasting space deserves.",
    tag: "Construction",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1400",
  },
];

export default function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Each panel is 100vw. Total translation = (n-1) * 100vw
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(steps.length - 1) * 100}vw`]);

  return (
    <section
      ref={containerRef}
      className="relative z-10 bg-background"
      style={{ height: `${steps.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Section label + title */}
        <div className="absolute top-10 left-6 md:left-14 z-10 flex flex-col gap-1">
          <p className="text-secondary/40 uppercase tracking-[0.3em] text-xs">Process</p>
          <h2 className="text-2xl md:text-4xl font-light tracking-tighter font-display text-primary">
            How we work
          </h2>
        </div>

        {/* Progress bar */}
        <motion.div
          className="absolute top-0 left-0 h-[2px] bg-white/25 z-20"
          style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
        />

        {/* Horizontal track */}
        <motion.div
          style={{ x }}
          className="flex h-full w-max will-change-transform"
        >
          {steps.map((step, i) => (
            // Each panel = full viewport width, split left/right
            <div
              key={i}
              className="flex h-full"
              style={{ width: "100vw" }}
            >
              {/* LEFT — text content */}
              <div className="flex flex-col justify-end w-1/2 h-full px-8 md:px-14 pb-16 pt-32">
                {/* Ghost number */}
                <span className="text-[9rem] md:text-[12rem] font-display font-light leading-none tracking-tighter text-white/6 select-none mb-2">
                  {step.num}
                </span>

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-secondary/40 text-xs uppercase tracking-[0.3em]">{step.tag}</span>
                  {i < steps.length - 1 && (
                    <>
                      <div className="w-16 h-[1px] bg-white/15" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    </>
                  )}
                </div>

                <h3 className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tighter text-primary mb-6 leading-[0.95]">
                  {step.title}
                </h3>
                <p className="text-secondary/70 text-base font-light leading-relaxed max-w-sm">
                  {step.desc}
                </p>
              </div>

              {/* RIGHT — image */}
              <div className="w-1/2 h-full relative overflow-hidden">
                {/* Inner image with subtle parallax feel */}
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover scale-[1.04]"
                  loading="lazy"
                />
                {/* Gradient overlay so left panel edge blends */}
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
                {/* Bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Step counter */}
        <motion.div
          className="absolute bottom-10 right-6 md:right-14 text-secondary/30 text-xs uppercase tracking-[0.3em] flex items-center gap-2"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]) }}
        >
          <span>Scroll to advance</span>
        </motion.div>
      </div>
    </section>
  );
}
