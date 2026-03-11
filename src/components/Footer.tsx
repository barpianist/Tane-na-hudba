import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-black text-center text-zinc-500">
      <div className="flex justify-center gap-6 mb-6">
        <Instagram className="hover:text-[#D4A843] cursor-pointer" />
        <Facebook className="hover:text-[#D4A843] cursor-pointer" />
        <Youtube className="hover:text-[#D4A843] cursor-pointer" />
      </div>
      <p>&copy; 2026 Virtuosen Party Band. Všetky práva vyhradené.</p>
    </footer>
  );
}
