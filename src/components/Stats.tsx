import { motion } from "framer-motion";

const stats = [
  { val: "225+", label: "Completed design studies" },
  { val: "36", label: "Ongoing spatial explorations" },
  { val: "12", label: "Cross-disciplinary collaborators" },
  { val: "98%", label: "Return rate across commissions" },
];

export default function Stats() {
  return (
    <section className="section-container py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.12, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-12 md:p-16 flex flex-col gap-8 justify-between min-h-[300px] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] cursor-default hover:bg-white/15 transition-colors duration-300"
          >
            <span className="text-6xl md:text-[5.5rem] leading-none font-light text-primary tabular-nums font-display tracking-tighter">{stat.val}</span>
            <span className="text-secondary/80 text-sm md:text-sm uppercase tracking-[0.2em] leading-relaxed mt-auto">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
