import { motion } from "framer-motion";
import projectImg from "@/assets/project-feature.jpg";

export default function ProjectFeature() {
  return (
    <section className="section-container py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className="text-3xl md:text-5xl font-light text-primary tracking-tighter mb-6 font-display">Sanctum Hall</h3>
          <p className="text-body">
            Circular seating, arched openings, and natural textures create a serene gathering space. The design balances monumentality with intimacy, framing nature as the focal point.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ scale: 1.02 }}
          className="rounded-3xl overflow-hidden cursor-pointer"
        >
          <motion.img
            src={projectImg}
            alt="Sanctum Hall"
            className="w-full h-[400px] md:h-[500px] object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
