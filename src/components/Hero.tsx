import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/party/1920/1080?blur=4')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/60" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <h1 className="font-serif text-6xl md:text-8xl text-white mb-4">
          VIRTUOSEN <span className="text-[#D4A843] italic">Party Band</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-200">Nezabudnuteľná párty show pre každú udalosť.</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-32 h-32 bg-[#D4A843]/30 rounded-full blur-3xl"
      />
    </section>
  );
}
