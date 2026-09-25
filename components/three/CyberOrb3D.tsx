"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus, Octahedron } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

/* ============================================================
   INNER QUANTUM CORE + GYROSCOPE RINGS + SATELLITES
   ============================================================ */
function QuantumCore() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);
  const ring3Ref = useRef<THREE.Group>(null);
  const satellitesRef = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();

    // Core pulsing rotation
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.4 + pointer.x * 0.5;
      coreRef.current.rotation.x = t * 0.2 + pointer.y * 0.5;
    }

    // Gyroscope rings rotating at opposing axes
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.5;
      ring1Ref.current.rotation.x = pointer.y * 0.4;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -t * 0.4;
      ring2Ref.current.rotation.y = pointer.x * 0.4;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = t * 0.35;
      ring3Ref.current.rotation.z = pointer.x * 0.3;
    }

    // Satellites orbiting
    if (satellitesRef.current) {
      satellitesRef.current.rotation.y = t * 0.6;
      satellitesRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
      {/* Central Quantum Sphere */}
      <Sphere ref={coreRef} args={[1.2, 32, 32]}>
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#22d3ee"
          emissiveIntensity={1.5}
          wireframe
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>

      {/* Inner glowing nucleus */}
      <Sphere args={[0.7, 24, 24]}>
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.35} />
      </Sphere>

      {/* Primary Ring 1 - Cyan */}
      <group ref={ring1Ref}>
        <Torus args={[2.0, 0.03, 16, 80]}>
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#06b6d4"
            emissiveIntensity={1.8}
          />
        </Torus>
      </group>

      {/* Primary Ring 2 - Violet */}
      <group ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <Torus args={[2.5, 0.025, 16, 80]}>
          <meshStandardMaterial
            color="#a855f7"
            emissive="#9333ea"
            emissiveIntensity={1.6}
          />
        </Torus>
      </group>

      {/* Outer Ring 3 - Deep Blue */}
      <group ref={ring3Ref} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <Torus args={[3.0, 0.02, 16, 80]}>
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#2563eb"
            emissiveIntensity={1.4}
          />
        </Torus>
      </group>

      {/* Orbiting Satellite Data Nodes */}
      <group ref={satellitesRef}>
        <Octahedron args={[0.25, 0]} position={[2.6, 0.4, 0]}>
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={2}
          />
        </Octahedron>
        <Octahedron args={[0.2, 0]} position={[-2.8, -0.6, 0.8]}>
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={2}
          />
        </Octahedron>
        <Octahedron args={[0.22, 0]} position={[0.5, 2.7, -1]}>
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={2}
          />
        </Octahedron>
      </group>
    </Float>
  );
}

/* ============================================================
   EXPORTED CYBER ORB COMPONENT
   ============================================================ */
export default function CyberOrb3D({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="h-48 w-48 rounded-full border border-cyan-500/20 animate-pulse" />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-cyan-500/15 blur-3xl" />

      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} color="#22d3ee" intensity={50} />
        <pointLight position={[-5, -5, -5]} color="#a855f7" intensity={40} />
        <QuantumCore />
      </Canvas>
    </div>
  );
}
