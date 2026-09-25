"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState, useEffect, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}

export default function TiltCard({
  children,
  className = "",
  intensity = 15,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      (window.innerWidth < 768 || window.matchMedia("(hover: none)").matches)
    ) {
      setIsTouch(true);
    }
  }, []);

  // Position between -0.5 and 0.5
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Percent position between 0% and 100% for specular glare
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const sx = useSpring(x, { stiffness: 280, damping: 24 });
  const sy = useSpring(y, { stiffness: 280, damping: 24 });

  const rotateX = useTransform(sy, [-0.5, 0.5], [`${intensity}deg`, `-${intensity}deg`]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [`-${intensity}deg`, `${intensity}deg`]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;

    x.set(px - 0.5);
    y.set(py - 0.5);

    if (glare) {
      setGlarePos({ x: Math.round(px * 100), y: Math.round(py * 100) });
    }
  };

  const onEnter = () => {
    if (!isTouch) setIsHovered(true);
  };
  const onLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onTouchEnd={onLeave}
      data-interactive="true"
      style={{ perspective: isTouch ? undefined : 1200 }}
      className={`relative ${className}`}
    >
      <motion.div
        style={{
          rotateX: isTouch ? 0 : rotateX,
          rotateY: isTouch ? 0 : rotateY,
          transformStyle: isTouch ? "flat" : "preserve-3d",
        }}
        animate={{
          scale: isHovered && !isTouch ? 1.02 : 1,
          translateZ: isHovered && !isTouch ? 20 : 0,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative h-full w-full"
      >
        {children}

        {/* Dynamic Holographic Specular Glare Overlay (desktop only) */}
        {glare && isHovered && !isTouch && (
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-30"
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(34, 211, 238, 0.18) 0%, rgba(139, 92, 246, 0.08) 35%, transparent 70%)`,
              mixBlendMode: "screen",
            }}
          />
        )}
      </motion.div>
    </div>
  );
}