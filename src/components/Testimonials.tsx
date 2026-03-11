import { motion } from "motion/react";
import { TESTIMONIALS } from "../constants";

export default function Testimonials() {
  return (
    <div className="py-20 px-6">
      <h2 className="font-serif text-5xl text-white text-center mb-16">Čo o nás povedali</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="bg-zinc-900/80 p-8 rounded-2xl border-l-4 border-[#D4A843]">
            <p className="text-zinc-200 italic mb-6">"{t.text}"</p>
            <p className="text-white font-bold">{t.name}</p>
            <p className="text-[#D4A843] text-sm">{t.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
