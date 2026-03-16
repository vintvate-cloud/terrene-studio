import { motion } from "framer-motion";
import testimonialImg from "@/assets/testimonial.jpg";

export default function Testimonials() {
  return (
    <section className="section-container py-32 text-center">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-light text-primary tracking-tighter mb-16"
      >
        Voices from our spaces
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <div className="rounded-3xl overflow-hidden mb-10">
          <img src={testimonialImg} alt="Villa Interior" className="w-full h-[300px] md:h-[400px] object-cover" />
        </div>

        <p className="text-body italic mb-10 max-w-2xl mx-auto">
          "The design feels deeply personal, as if it grew from the way we live. The flow of each room, the light at different hours — everything was thought through with care."
        </p>

        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary text-sm font-medium">
            EH
          </div>
          <div className="text-left">
            <div className="text-primary text-sm font-medium">Evelyn Hart</div>
            <div className="text-secondary text-xs">Villa Owner</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
