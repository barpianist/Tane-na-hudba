import { useState } from "react";
import { motion } from "motion/react";
import Lightbox from "yet-another-react-lightbox";
import { BAND_MEMBERS } from "../constants";

export default function About() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = BAND_MEMBERS.map((member) => ({
    src: `https://picsum.photos/seed/${member.name}/800/1200`,
  }));

  return (
    <div className="py-20 px-6">
      <h2 className="font-serif text-5xl text-white text-center mb-12">Naša Zostava</h2>
      <p className="text-center text-zinc-300 mb-12 max-w-2xl mx-auto">Sme zohratá partia muzikantov, ktorá prináša energiu a vášeň na každú udalosť.</p>
      <div className="grid grid-cols-1 gap-12 max-w-2xl mx-auto">
        {BAND_MEMBERS.map((member, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.02 }}
            className="group relative cursor-pointer"
            onClick={() => {
              setIndex(index);
              setOpen(true);
            }}
          >
            <img src={`https://picsum.photos/seed/${member.name}/800/600`} alt={member.name} className="w-full aspect-[3/2] object-cover grayscale group-hover:grayscale-0 transition-all duration-300 rounded-lg" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4A843] transition-all duration-300 rounded-lg" />
            <div className="absolute bottom-6 left-6 text-white bg-black/50 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="font-bold text-2xl">{member.name}</h3>
              <p className="text-[#D4A843] text-lg">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </div>
  );
}
