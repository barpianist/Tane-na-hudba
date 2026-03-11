import { motion } from "motion/react";

export default function Video() {
  // Zmeňte tento kód na ID vášho YouTube videa
  const youtubeVideoId = "dQw4w9WgXcQ"; 

  return (
    <div className="py-20 px-6 text-center">
      <h2 className="font-serif text-5xl text-white mb-8">Naša Party Show</h2>
      <p className="text-[#D4A843] text-xl mb-12">Pozrite si nás v akcii!</p>
      <div className="max-w-4xl mx-auto aspect-video rounded-xl shadow-2xl overflow-hidden">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeVideoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
