import { motion } from "motion/react";
import { Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-20 px-6 text-center">
      <h2 className="font-serif text-5xl text-white mb-12">Rezervujte si váš termín</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 text-zinc-200">
        <a href="tel:+421914257883" className="flex items-center gap-3 text-xl hover:text-[#D4A843] transition-colors">
          <Phone /> +421 914 257 883
        </a>
        <a href="mailto:info@virtuosenpartyband.sk" className="flex items-center gap-3 text-xl hover:text-[#D4A843] transition-colors">
          <Mail /> info@virtuosenpartyband.sk
        </a>
      </div>
    </div>
  );
}
