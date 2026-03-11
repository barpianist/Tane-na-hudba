import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Domov", "Kapela", "Show", "Služby", "Galéria", "Referencie", "Kontakt"];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md p-6 flex justify-between items-center">
      <div className="text-2xl font-serif text-white">Virtuosen</div>
      <div className="hidden md:flex gap-8 text-zinc-300">
        {links.map((link) => <a key={link} href={`#${link}`} className="hover:text-[#D4A843]">{link}</a>)}
      </div>
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/90 flex flex-col items-center gap-4 py-8"
          >
            {links.map((link) => <a key={link} href={`#${link}`} onClick={() => setIsOpen(false)} className="text-white">{link}</a>)}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
