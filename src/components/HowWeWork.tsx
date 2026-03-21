import { motion } from "framer-motion";

const tags = ["Quiet", "View", "Tactile", "Light-forward", "Slow design", "Modular rhythm"];

export default function HowWeWork() {
  return (
    <section className="section-container py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className="text-3xl md:text-5xl font-light text-primary tracking-tighter mb-8 font-display">How we work</h3>
          <p className="text-body mb-12">
            We approach each build with a clarity of intent. Every plan is shaped through research, iteration, and conversation. What remains is the essential — designed to last and built to feel lived in.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                className="pill-tag"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-2 gap-4 h-[500px]"
        >
          <div className="relative rounded-2xl overflow-hidden mt-12">
            <img 
              src="/how-we-work-1.jpg" 
              alt="Design process" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden mb-12">
            <img 
              src="/how-we-work-2.jpg" 
              alt="Architectural planning" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 relative rounded-2xl overflow-hidden h-48 -mt-8">
            <img 
              src="/how-we-work-3.jpg" 
              alt="Minimal interior" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
