import { motion } from "framer-motion";

const tags = ["Quiet", "View", "Tactile", "Light-forward", "Slow design", "Modular rhythm"];

export default function HowWeWork() {
  return (
    <section className="section-container py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className="text-3xl md:text-5xl font-light text-primary tracking-tighter mb-8">How we work</h3>
          <p className="text-body">
            We approach each build with a clarity of intent. Every plan is shaped through research, iteration, and conversation. What remains is the essential — designed to last and built to feel lived in.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-wrap gap-3"
        >
          {tags.map((tag) => (
            <span key={tag} className="pill-tag">{tag}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
