import { motion } from "motion/react";
import { BAND_MEMBERS } from "../constants";

export default function About() {
  return (
    <div className="py-20 px-6">
      <h2 className="font-serif text-5xl text-white text-center mb-12">Naša Zostava</h2>
      <p className="text-center text-zinc-300 mb-12 max-w-2xl mx-auto">Sme zohratá partia muzikantov, ktorá prináša energiu a vášeň na každú udalosť.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {BAND_MEMBERS.map((member, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            className="group relative"
          >
            <img src={`https://picsum.photos/seed/${member.name}/400/600`} alt={member.name} className="w-full h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4A843] transition-all duration-300" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-xl">{member.name}</h3>
              <p className="text-[#D4A843]">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
