"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let rafId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      // Smooth ease toward cursor (0.15 = trail, higher = snappier)
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      glow.style.transform = `translate3d(${currentX - 300}px, ${currentY - 300}px, 0)`;
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-0 hidden lg:block h-[600px] w-[600px] rounded-full opacity-40 mix-blend-screen will-change-transform"
      style={{
        background:
          "radial-gradient(circle, rgba(34,211,238,0.35) 0%, rgba(59,130,246,0.15) 40%, transparent 70%)",
        filter: "blur(80px)",
      }}
    />
  );
}