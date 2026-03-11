import { motion } from "motion/react";
import { SERVICES } from "../constants";
import { Music, Mic, Star } from "lucide-react";

const icons = [Music, Mic, Star];

export default function Services() {
  return (
    <div className="py-20 px-6">
      <h2 className="font-serif text-5xl text-white text-center mb-16">Naše Služby</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {SERVICES.map((service, index) => {
          const Icon = icons[index];
          return (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-zinc-900/80 p-8 rounded-2xl border border-zinc-800 hover:border-[#D4A843] transition-colors"
            >
              <Icon className="text-[#D4A843] w-12 h-12 mb-6" />
              <h3 className="text-2xl text-white font-bold mb-4">{service.title}</h3>
              <p className="text-zinc-400 mb-6">{service.description}</p>
              <ul className="text-zinc-200 space-y-2">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#D4A843]">✓</span> {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
