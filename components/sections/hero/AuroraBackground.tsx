"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Cyan Glow */}
      <motion.div
        animate={{
          x: [-80, 100, -80],
          y: [-30, 40, -30],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-10 h-[700px] w-[700px] rounded-full bg-cyan-500/35 blur-[180px]"
      />

      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [60, -60, 60],
          y: [20, -50, 20],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-200px] top-[-80px] h-[800px] w-[800px] rounded-full bg-blue-600/30 blur-[220px]"
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-250px] left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/25 blur-[220px]"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}