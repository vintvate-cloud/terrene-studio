import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

export default function Gallery() {
  return (
    <section className="section-container py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          <motion.div
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl overflow-hidden h-[280px] md:h-[400px]"
          >
            <img src={gallery1} className="w-full h-full object-cover" alt="Architecture facade" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl overflow-hidden h-[340px] md:h-[500px] -mt-8 md:-mt-12 relative group"
          >
            <img src={gallery2} className="w-full h-full object-cover" alt="Office interior" />
            <div className="absolute inset-0 bg-background/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <span className="text-4xl text-primary block font-light">800+</span>
                <span className="text-secondary text-xs uppercase tracking-wider">Project Images</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 space-y-8"
        >
          <h3 className="text-3xl md:text-5xl text-primary tracking-tighter font-light">
            Take a closer look at the projects that define our practice.
          </h3>
          <p className="text-body">
            From intimate interiors to expansive landscapes, each image highlights a unique perspective that might spark your next big idea.
          </p>
          <button className="btn-primary">Explore Gallery</button>
        </motion.div>
      </div>
    </section>
  );
}
