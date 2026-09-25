"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Box, Torus, Cylinder } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

/* ============================================================
   ENTERPRISE ERP & AUTOMATION SYSTEM CORE
   ============================================================ */
function EnterpriseSystemCore() {
  const centralRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);
  const modulesRef = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();

    // Central server hub rotation
    if (centralRef.current) {
      centralRef.current.rotation.y = t * 0.35 + pointer.x * 0.4;
      centralRef.current.rotation.x = 0.2 + pointer.y * 0.3;
    }

    // Pipeline rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.45;
      ring1Ref.current.rotation.x = pointer.y * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.35;
      ring2Ref.current.rotation.z = pointer.x * 0.3;
    }

    // Orbiting ERP service blocks
    if (modulesRef.current) {
      modulesRef.current.rotation.y = -t * 0.4;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      {/* Central Database / Core Server */}
      <group ref={centralRef}>
        <Cylinder args={[0.9, 0.9, 1.4, 32]}>
          <meshStandardMaterial
            color="#0b1329"
            emissive="#0284c7"
            emissiveIntensity={0.6}
            metalness={0.9}
            roughness={0.2}
          />
        </Cylinder>
        {/* Core database segment rings */}
        <Torus args={[0.92, 0.02, 16, 48]} position={[0, 0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color="#38bdf8" />
        </Torus>
        <Torus args={[0.92, 0.02, 16, 48]} position={[0, -0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color="#10b981" />
        </Torus>
      </group>

      {/* Orbiting Automation Pipeline 1 */}
      <group ref={ring1Ref}>
        <Torus args={[2.0, 0.025, 16, 80]}>
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={1.6}
          />
        </Torus>
      </group>

      {/* Orbiting Pipeline 2 */}
      <group ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <Torus args={[2.5, 0.02, 16, 80]}>
          <meshStandardMaterial
            color="#2563eb"
            emissive="#3b82f6"
            emissiveIntensity={1.5}
          />
        </Torus>
      </group>

      {/* Orbiting ERP Modular Service Cubes */}
      <group ref={modulesRef}>
        {/* Inventory Module */}
        <Box args={[0.42, 0.42, 0.42]} position={[2.2, 0.3, 0]}>
          <meshStandardMaterial
            color="#0284c7"
            emissive="#06b6d4"
            emissiveIntensity={1.2}
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
        {/* Finance & Invoicing Module */}
        <Box args={[0.38, 0.38, 0.38]} position={[-2.3, -0.4, 0.5]}>
          <meshStandardMaterial
            color="#2563eb"
            emissive="#3b82f6"
            emissiveIntensity={1.2}
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
        {/* Automation Pipeline Module */}
        <Box args={[0.4, 0.4, 0.4]} position={[0.4, 2.2, -0.8]}>
          <meshStandardMaterial
            color="#059669"
            emissive="#10b981"
            emissiveIntensity={1.2}
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
      </group>
    </Float>
  );
}

import ThreeErrorBoundary from "./ThreeErrorBoundary";
import { isWebGLAvailable } from "./webglUtils";

function CyberOrbFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute h-36 w-36 rounded-full bg-cyan-500/15 blur-xl animate-pulse" />
      <div className="h-28 w-28 rounded-full border border-cyan-500/30 flex items-center justify-center">
        <div className="h-20 w-20 rounded-full border border-dashed border-emerald-500/40 animate-spin [animation-duration:12s]" />
      </div>
    </div>
  );
}

/* ============================================================
   EXPORTED COMPONENT
   ============================================================ */
export default function CyberOrb3D({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(false);

  useEffect(() => {
    setMounted(true);
    setHasWebGL(isWebGLAvailable());
  }, []);

  if (!mounted) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="h-44 w-44 rounded-2xl border border-cyan-500/20 animate-pulse bg-cyan-950/20" />
      </div>
    );
  }

  if (!hasWebGL) {
    return (
      <div className={`relative ${className}`}>
        <CyberOrbFallback />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-cyan-500/10 blur-3xl" />

      <ThreeErrorBoundary fallback={<CyberOrbFallback />}>
        <Canvas
          camera={{ position: [0, 0, 6.5], fov: 48 }}
          dpr={[1, 1.5]}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
          }}
        >
          <ambientLight intensity={0.45} />
          <pointLight position={[5, 5, 5]} color="#06b6d4" intensity={45} />
          <pointLight position={[-5, -5, -5]} color="#2563eb" intensity={35} />
          <pointLight position={[0, 4, -4]} color="#10b981" intensity={30} />
          <EnterpriseSystemCore />
        </Canvas>
      </ThreeErrorBoundary>
    </div>
  );
}
