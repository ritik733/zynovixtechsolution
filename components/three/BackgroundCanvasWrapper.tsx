"use client";

import { useEffect, useState } from "react";
import Global3DBackground from "./Global3DBackground";
import ThreeErrorBoundary from "./ThreeErrorBoundary";
import { isWebGLAvailable } from "./webglUtils";

function AmbientGradientFallback() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#030712]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/50 to-[#030712] -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-cyan-600/10 blur-[160px] -z-10" />
    </div>
  );
}

export default function BackgroundCanvasWrapper() {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(false);

  useEffect(() => {
    setMounted(true);
    setHasWebGL(isWebGLAvailable());
  }, []);

  if (!mounted) return null;

  if (!hasWebGL) {
    return <AmbientGradientFallback />;
  }

  return (
    <ThreeErrorBoundary fallback={<AmbientGradientFallback />}>
      <Global3DBackground />
    </ThreeErrorBoundary>
  );
}
