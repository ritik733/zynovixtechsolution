"use client";

import { useEffect, useRef, useState } from "react";

export default function MouseGlow() {
  const glowRef = useRef(null);
  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse / trackpad)
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    setHasFinePointer(true);
    const glow = glowRef.current;
    if (!glow) return;

    let rafId = null;
    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;
    let isMoving = false;
    let hasMovedOnce = false;

    const animate = () => {
      // Smooth ease toward cursor
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      
      currentX += dx * 0.15;
      currentY += dy * 0.15;
      glow.style.transform = `translate3d(${currentX - 300}px, ${currentY - 300}px, 0)`;

      // If difference is tiny, pause RAF to save CPU and battery during scrolling/reading
      if (Math.abs(dx) < 0.15 && Math.abs(dy) < 0.15) {
        currentX = targetX;
        currentY = targetY;
        glow.style.transform = `translate3d(${currentX - 300}px, ${currentY - 300}px, 0)`;
        isMoving = false;
        rafId = null;
        return;
      }

      rafId = requestAnimationFrame(animate);
    };

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!hasMovedOnce) {
        hasMovedOnce = true;
        currentX = targetX;
        currentY = targetY;
        glow.style.opacity = "0.35";
        glow.style.transform = `translate3d(${currentX - 300}px, ${currentY - 300}px, 0)`;
      }

      if (!isMoving) {
        isMoving = true;
        rafId = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  if (!hasFinePointer) {
    return null;
  }

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-0 h-[600px] w-[600px] rounded-full dark:mix-blend-screen will-change-transform transition-opacity duration-500"
      style={{
        opacity: 0,
        background:
          "radial-gradient(circle, rgba(34,211,238,0.25) 0%, rgba(59,130,246,0.10) 40%, transparent 70%)",
        filter: "blur(80px)",
      }}
      aria-hidden="true"
    />
  );
}
