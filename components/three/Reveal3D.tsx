"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export default function Reveal3D({
  children,
  delay = 0,
  rotate = -20,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  rotate?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, rotateX: rotate, y: 50, z: -80 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0, z: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
        transformOrigin: "50% 100%",
      }}
    >
      {children}
    </motion.div>
  );
}