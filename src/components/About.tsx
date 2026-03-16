import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-8 max-w-[1400px] mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="heading-lg max-w-5xl mx-auto leading-tight"
      >
        At Terrene, we design with purpose and clarity, creating spaces that speak through light, scale, and the quiet confidence of lasting form.
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <button className="btn-secondary mt-16">Our Philosophy</button>
      </motion.div>
    </section>
  );
}
