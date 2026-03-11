import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function ParallaxSection({ children, bgImage, id }: { children: ReactNode, bgImage: string, id: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section id={id} ref={ref} className="relative overflow-hidden min-h-[60vh] py-20 px-6">
      <motion.div 
        style={{ y, backgroundImage: `url(${bgImage})` }}
        className="absolute inset-0 bg-cover bg-center z-0"
      />
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
