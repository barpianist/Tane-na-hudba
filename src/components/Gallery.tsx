import { motion } from "motion/react";

export default function Gallery() {
  return (
    <div className="py-20 px-6">
      <h2 className="font-serif text-5xl text-white text-center mb-16">Momenty zo Zábavy</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-lg"
          >
            <img src={`https://picsum.photos/seed/gallery${i}/600/400`} alt="Gallery" className="w-full h-64 object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
