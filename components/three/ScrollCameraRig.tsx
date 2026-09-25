"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function ScrollCameraRig() {
  const { camera } = useThree();
  const targetZ = useRef(8);
  const targetY = useRef(0);
  const targetX = useRef(0);

  useFrame(({ clock, pointer }) => {
    // Read scroll progress (0 to 1)
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? scrollY / maxScroll : 0;

    // Camera dives forward as you scroll
    targetZ.current = 8 - progress * 4;

    // Camera drifts based on mouse
    targetX.current = pointer.x * 0.8;
    targetY.current = pointer.y * 0.5 + Math.sin(clock.elapsedTime * 0.5) * 0.2;

    // Smooth damping
    camera.position.x += (targetX.current - camera.position.x) * 0.05;
    camera.position.y += (targetY.current - camera.position.y) * 0.05;
    camera.position.z += (targetZ.current - camera.position.z) * 0.05;

    // Subtle rotation
    camera.rotation.z = Math.sin(clock.elapsedTime * 0.3) * 0.02;
  });

  return null;
}