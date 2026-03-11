import { motion } from "motion/react";

export default function Video() {
  return (
    <div className="py-20 px-6 text-center">
      <h2 className="font-serif text-5xl text-white mb-8">Naša Party Show</h2>
      <p className="text-[#D4A843] text-xl mb-12">Pozrite si nás v akcii!</p>
      <div className="max-w-4xl mx-auto aspect-video bg-zinc-800 flex items-center justify-center rounded-xl shadow-2xl">
        <button className="w-20 h-20 bg-[#D4A843] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
          <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2" />
        </button>
      </div>
    </div>
  );
}
