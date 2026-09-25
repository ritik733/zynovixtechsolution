"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export default function TiltMarquee({
  items,
  speed = 30,
}: {
  items: ReactNode[];
  speed?: number;
}) {
  const loop = [...items, ...items];

  return (
    <div style={{ perspective: 1000 }} className="overflow-hidden py-4">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        style={{
          transform: "rotateX(8deg) rotateY(-2deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {loop.map((node, i) => (
          <div key={i} className="shrink-0 transition-transform duration-300 hover:scale-105">
            {node}
          </div>
        ))}
      </motion.div>
    </div>
  );
}