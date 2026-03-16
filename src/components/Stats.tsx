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
            className="glass-card p-10 flex flex-col gap-4 cursor-default"
          >
            <span className="text-4xl font-light text-primary tabular-nums font-display">{stat.val}</span>
            <span className="text-secondary text-sm uppercase tracking-wider leading-tight">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
