import { motion } from "framer-motion";

const stats = [
  { val: "225+", label: "Completed design studies" },
  { val: "36",   label: "Ongoing spatial explorations" },
  { val: "12",   label: "Cross-disciplinary collaborators" },
  { val: "98%",  label: "Return rate across commissions" },
];

export default function Stats({ className = "" }: { className?: string }) {
  return (
    // This section acts as the "curtain" — it has a solid background so it 
    // physically covers the pinned Hero image as it scrolls upward over it.
    // The rounded top + decorative rule creates the physical "curtain edge".
    <section className={`relative z-10 bg-background rounded-t-[2.5rem] -mt-8 shadow-[0_-20px_60px_rgba(0,0,0,0.6)] ${className}`}>
      {/* Decorative curtain-top edge */}
      <div className="flex items-center justify-center pt-8 pb-2">
        <div className="w-12 h-1 rounded-full bg-white/20" />
      </div>

      <div className="section-container py-20 md:py-28">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-secondary/60 uppercase tracking-[0.3em] text-xs mb-12 md:mb-16"
        >
          By the numbers
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-12 md:p-14 flex flex-col gap-8 justify-between min-h-[280px] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] cursor-default hover:bg-white/10 transition-colors duration-300"
            >
              <span className="text-6xl md:text-[5rem] leading-none font-light text-primary tabular-nums font-display tracking-tighter">
                {stat.val}
              </span>
              <span className="text-secondary/70 text-xs uppercase tracking-[0.25em] leading-relaxed mt-auto">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
