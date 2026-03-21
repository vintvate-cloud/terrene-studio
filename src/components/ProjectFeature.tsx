import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticWrapper from "./MagneticWrapper";

const projects = [
  {
    title: "Sanctum Hall",
    desc: "Circular seating, arched openings, and natural textures create a serene gathering space.",
    img: "/project-1.jpg",
  },
  {
    title: "Azure Pavilion",
    desc: "A brutalist approach to natural light, combining exposed concrete with expansive skylights.",
    img: "/project-2.jpg",
  },
  {
    title: "Lumina Residence",
    desc: "Glass, steel, and warm oak harmonizing to blur the boundaries between interior and exterior.",
    img: "/project-3.jpg",
  },
  {
    title: "Oasis Gallery",
    desc: "A minimalist cathedral of art, utilizing negative space to emphasize individual exhibits.",
    img: "/project-4.jpg",
  }
];

const Card = ({ project, index, progress, range, targetScale }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Image parallax as the card enters the screen
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  
  // Card scale and opacity as it gets stacked under the next cards
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, range, [1, 0.5]);

  return (
    <div ref={containerRef} className="h-screen w-full flex items-center justify-center sticky top-0">
      <motion.div
        style={{ 
          scale, 
          opacity, 
          // Stacking offset creates the visual lip
          top: `calc(1vh + ${index * 35}px)` 
        }}
        className="w-full md:w-[96vw] h-[100vh] md:h-[94vh] rounded-none md:rounded-[2.5rem] overflow-hidden relative shadow-[0_-10px_50px_rgba(0,0,0,0.5)] origin-top border-t border-white/10"
      >
        <motion.div style={{ scale: imageScale }} className="w-full h-full relative">
          <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />
        </motion.div>

        {/* Card Content Footer */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 pb-12 md:pb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 pointer-events-none">
          <div className="max-w-3xl text-white">
            <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-display font-medium tracking-tighter mb-4 leading-[0.9]">{project.title}</h2>
            <p className="text-white/80 text-base md:text-xl font-light leading-relaxed tracking-wide max-w-xl">{project.desc}</p>
          </div>
          <div className="self-start md:self-end shrink-0 pointer-events-auto">
            <MagneticWrapper strength={0.2}>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-8 py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-white hover:text-black transition-all duration-300">
                Explore Project
              </button>
            </MagneticWrapper>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function ProjectFeature() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Global scroll progress for the entire section to drive the stacking scales
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative w-full bg-background pb-[10vh] pt-[5vh]">
      {/* Background ambient text behind all cards */}
      <div className="sticky top-0 h-[20vh] w-full flex items-center justify-center z-0 pointer-events-none mb-[-20vh]">
        <h2 className="text-xl md:text-2xl font-display uppercase tracking-[0.4em] text-secondary/30 mt-8">
          Featured Works
        </h2>
      </div>

      {projects.map((project, i) => {
        // As you scroll past this card, targetScale determines how much it shrinks back
        const targetScale = 1 - (projects.length - i) * 0.05;
        // The scroll progress range over which this card scales down
        const range = [i * 0.25, 1];
        
        return (
          <Card 
            key={i} 
            index={i} 
            project={project} 
            progress={scrollYProgress} 
            range={range} 
            targetScale={targetScale} 
          />
        );
      })}
    </section>
  );
}
