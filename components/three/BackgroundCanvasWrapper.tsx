"use client";

import { useEffect, useState } from "react";
import Global3DBackground from "./Global3DBackground";

export default function BackgroundCanvasWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <Global3DBackground />;
}
