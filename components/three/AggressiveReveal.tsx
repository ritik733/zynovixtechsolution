"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface AggressiveRevealProps {
  children: ReactNode;
  /** Delay in seconds before animation starts */
  delay?: number;
  /** Starting rotateX angle. More negative = more aggressive flip. Default -45 */
  rotate?: number;
  /** Direction of entry: "up" | "down" | "left" | "right" */
  from?: "up" | "down" | "left" | "right";
  /** Duration of animation in seconds. Default 0.9 */
  duration?: number;
  /** Additional CSS classes */
  className?: string;
}

export default function AggressiveReveal({
  children,
  delay = 0,
  rotate = -45,
  from = "up",
  duration = 0.9,
  className = "",
}: AggressiveRevealProps) {
  const directionMap = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: -60, y: 0 },
    right: { x: 60, y: 0 },
  };

  const start = directionMap[from];

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        rotateX: rotate,
        y: start.y,
        x: start.x,
        z: -120,
        filter: "blur(8px)",
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        rotateX: 0,
        y: 0,
        x: 0,
        z: 0,
        filter: "blur(0px)",
        scale: 1,
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
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