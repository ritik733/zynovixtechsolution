"use client";
import { motion } from "framer-motion";

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) {
  const dirMap = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: -20, y: 0 },
    right: { x: 20, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...dirMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -20px 0px" }}
      transition={{ duration: 0.45, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
