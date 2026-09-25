"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  Points,
  PointMaterial,
  Icosahedron,
  Torus,
  Sphere,
} from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/* ============================================================
   HERO SCROLL + MOUSE CAMERA RIG
   Smoothly tilts with cursor and tracks scroll
   ============================================================ */
function HeroCameraRig() {
  const { camera } = useThree();
  const target = useRef({ x: 0, y: 0, z: 7.5 });

  useFrame(({ clock, pointer }) => {
    const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
    const progress = Math.min(1, scrollY / 900);

    target.current.z = 7.5 - progress * 2.5;
    target.current.x = pointer.x * 1.2;
    target.current.y = pointer.y * 0.8 + Math.sin(clock.elapsedTime * 0.6) * 0.15;

    camera.position.x += (target.current.x - camera.position.x) * 0.06;
    camera.position.y += (target.current.y - camera.position.y) * 0.06;
    camera.position.z += (target.current.z - camera.position.z) * 0.06;

    camera.rotation.z = Math.sin(clock.elapsedTime * 0.25) * 0.02 - pointer.x * 0.05;
  });

  return null;
}

/* ============================================================
   SWIRLING CYBER PARTICLES
   ============================================================ */
function HeroParticles({ count = 2000 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const cyan = new THREE.Color("#22d3ee");
    const purple = new THREE.Color("#a855f7");

    for (let i = 0; i < count; i++) {
      const r = 4.5 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const c = Math.random() > 0.4 ? cyan : purple;
      cols[i * 3] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;
    }
    return [pos, cols];
  }, [count]);

  useFrame(({ pointer }, d) => {
    if (!ref.current) return;
    ref.current.rotation.y += d * 0.08 + pointer.x * 0.02;
    ref.current.rotation.x += d * 0.04 + pointer.y * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled>
      <PointMaterial
        transparent
        vertexColors
        size={0.045}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

/* ============================================================
   CENTRAL QUANTUM CORE
   ============================================================ */
function HeroCore() {
  const mesh = useRef<THREE.Mesh>(null);
  const innerMesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }, d) => {
    const t = clock.elapsedTime;
    if (mesh.current) {
      mesh.current.rotation.y += d * 0.4 + pointer.x * 0.05;
      mesh.current.rotation.x += d * 0.2 - pointer.y * 0.05;
    }
    if (innerMesh.current) {
      innerMesh.current.rotation.y = -t * 0.3;
      innerMesh.current.rotation.z = t * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
      {/* Outer Holographic Icosahedron */}
      <Icosahedron ref={mesh} args={[1.75, 1]}>
        <meshStandardMaterial
          color="#22d3ee"
          wireframe
          emissive="#06b6d4"
          emissiveIntensity={1.8}
          roughness={0.2}
          metalness={0.9}
        />
      </Icosahedron>

      {/* Inner Glowing Crystal Sphere */}
      <Sphere ref={innerMesh} args={[0.95, 24, 24]}>
        <meshStandardMaterial
          color="#a855f7"
          wireframe
          emissive="#9333ea"
          emissiveIntensity={1.5}
        />
      </Sphere>

      {/* Pulsing Luminous Center */}
      <Sphere args={[0.5, 16, 16]}>
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.4} />
      </Sphere>
    </Float>
  );
}

/* ============================================================
   ORBITING NEON ENERGY RINGS
   ============================================================ */
function HeroRings() {
  const g = useRef<THREE.Group>(null);
  useFrame(({ pointer }, d) => {
    if (g.current) {
      g.current.rotation.z += d * 0.2;
      g.current.rotation.x = pointer.y * 0.3;
      g.current.rotation.y = pointer.x * 0.3;
    }
  });

  return (
    <group ref={g}>
      <Torus args={[2.7, 0.025, 16, 120]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#06b6d4"
          emissiveIntensity={2.0}
        />
      </Torus>
      <Torus args={[3.3, 0.018, 16, 120]} rotation={[Math.PI / 2.3, 0.4, 0]}>
        <meshStandardMaterial
          color="#a855f7"
          emissive="#9333ea"
          emissiveIntensity={1.8}
        />
      </Torus>
      <Torus args={[4.0, 0.012, 16, 120]} rotation={[Math.PI / 1.7, -0.3, 0]}>
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#2563eb"
          emissiveIntensity={1.6}
        />
      </Torus>
    </group>
  );
}

/* ============================================================
   MAIN HERO SCENE
   ============================================================ */
function Scene({ isMobile, reduced }: { isMobile: boolean; reduced: boolean }) {
  if (reduced) {
    return (
      <>
        <ambientLight intensity={0.6} />
        <HeroCore />
      </>
    );
  }

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[6, 6, 6]} intensity={70} color="#22d3ee" />
      <pointLight position={[-6, -6, -6]} intensity={60} color="#a855f7" />
      <pointLight position={[0, 6, -6]} intensity={40} color="#3b82f6" />

      <Suspense fallback={null}>
        <HeroParticles count={isMobile ? 1000 : 2000} />
        <HeroCore />
        <HeroRings />
        <HeroCameraRig />
      </Suspense>
    </>
  );
}

/* ============================================================
   EXPORT
   ============================================================ */
export default function HeroScene() {
  const [reduced, setReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-44 w-44 rounded-full border border-cyan-500/20 animate-pulse" />
      </div>
    );
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 50 }}
      dpr={isMobile ? 1 : [1, 1.5]}
      gl={{
        alpha: true,
        antialias: !isMobile,
        powerPreference: "high-performance",
      }}
    >
      <Scene isMobile={isMobile} reduced={reduced} />
    </Canvas>
  );
}