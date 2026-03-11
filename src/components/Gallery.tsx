import { useState } from "react";
import { motion } from "motion/react";
import Lightbox from "yet-another-react-lightbox";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [...Array(8)].map((_, i) => ({
    src: `https://picsum.photos/seed/gallery${i}/1200/800`,
  }));

  return (
    <div className="py-20 px-6">
      <h2 className="font-serif text-5xl text-white text-center mb-16">Momenty zo Zábavy</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-lg cursor-pointer"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <img src={`https://picsum.photos/seed/gallery${i}/600/400`} alt="Gallery" className="w-full aspect-video object-cover" />
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
