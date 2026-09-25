"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export default function Cursor3D() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer 3D follower
  const springX = useSpring(mouseX, { stiffness: 450, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 28 });

  // 3D rotation based on velocity
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const springRotX = useSpring(rotX, { stiffness: 300, damping: 20 });
  const springRotY = useSpring(rotY, { stiffness: 300, damping: 20 });

  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia("(hover: none)").matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      mouseX.set(x);
      mouseY.set(y);

      // Compute velocity for 3D tilt
      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      lastPos.current = { x, y };

      const clampTilt = (val: number, max: number) =>
        Math.max(-max, Math.min(max, val));

      rotX.set(clampTilt(-dy * 0.8, 45));
      rotY.set(clampTilt(dx * 0.8, 45));

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest("[data-interactive]") ||
          target.getAttribute("role") === "button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [mouseX, mouseY, rotX, rotY]);

  if (!mounted || isTouch) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" style={{ perspective: 1000 }}>
      {/* Outer 3D Holographic Reticle */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          rotateX: springRotX,
          rotateY: springRotY,
          transformStyle: "preserve-3d",
          translateX: "-50%",
          translateY: "-50%",
        }}
        className={`fixed top-0 left-0 rounded-full border transition-all duration-200 ${
          isHovered
            ? "h-14 w-14 border-cyan-400 bg-cyan-500/10 shadow-[0_0_25px_rgba(34,211,238,0.5)]"
            : "h-9 w-9 border-cyan-400/50 bg-cyan-500/5 shadow-[0_0_12px_rgba(34,211,238,0.25)]"
        }`}
      >
        {/* Inner crosshair ticks when hovered */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
          </div>
        )}
      </motion.div>

      {/* Center pinpoint dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]"
      />
    </div>
  );
}
