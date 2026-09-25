"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Torus, Box } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

function PipelineStreamParticles({ count = 1000 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const c1 = new THREE.Color("#06b6d4");
    const c2 = new THREE.Color("#2563eb");
    const c3 = new THREE.Color("#10b981");

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.2 + Math.random() * 4.5;
      const z = -Math.random() * 14;

      pos[i * 3] = radius * Math.cos(angle);
      pos[i * 3 + 1] = radius * Math.sin(angle);
      pos[i * 3 + 2] = z;

      const r = Math.random();
      const c = r < 0.5 ? c1 : r < 0.8 ? c2 : c3;
      cols[i * 3] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;
    }
    return [pos, cols];
  }, [count]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const t = clock.getElapsedTime();
    pointsRef.current.rotation.z = -t * 0.3;
  });

  return (
    <Points ref={pointsRef} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.05}
        sizeAttenuation
        depthWrite={false}
        opacity={0.75}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function PipelineGatewayRings() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();

    // Tilt pipeline toward pointer
    groupRef.current.rotation.x = pointer.y * 0.3;
    groupRef.current.rotation.y = pointer.x * 0.3;
    groupRef.current.rotation.z = t * 0.12;
  });

  const rings = [
    { radius: 2.3, z: 0, color: "#06b6d4" },
    { radius: 2.1, z: -1.8, color: "#0284c7" },
    { radius: 1.8, z: -3.6, color: "#2563eb" },
    { radius: 1.5, z: -5.4, color: "#10b981" },
    { radius: 1.2, z: -7.2, color: "#06b6d4" },
  ];

  return (
    <group ref={groupRef}>
      {rings.map((ring, idx) => (
        <group key={idx} position={[0, 0, ring.z]}>
          <Torus args={[ring.radius, 0.025, 16, 64]}>
            <meshBasicMaterial
              color={ring.color}
              transparent
              opacity={0.8 - idx * 0.1}
              blending={THREE.AdditiveBlending}
            />
          </Torus>
          {/* Subtle perimeter data nodes on the rings */}
          <Box args={[0.08, 0.08, 0.08]} position={[ring.radius, 0, 0]}>
            <meshBasicMaterial color="#ffffff" />
          </Box>
          <Box args={[0.08, 0.08, 0.08]} position={[-ring.radius, 0, 0]}>
            <meshBasicMaterial color="#38bdf8" />
          </Box>
        </group>
      ))}
      <PipelineStreamParticles />
    </group>
  );
}

import ThreeErrorBoundary from "./ThreeErrorBoundary";
import { isWebGLAvailable } from "./webglUtils";

function PortalFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
      <div className="h-56 w-56 rounded-full border border-cyan-500/30 animate-spin [animation-duration:20s]" />
      <div className="absolute h-40 w-40 rounded-full border border-dashed border-blue-500/40 animate-spin [animation-duration:15s] [animation-direction:reverse]" />
    </div>
  );
}

export default function Portal3D({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(false);

  useEffect(() => {
    setMounted(true);
    setHasWebGL(isWebGLAvailable());
  }, []);

  if (!mounted) return null;

  if (!hasWebGL) {
    return (
      <div className={`relative ${className}`}>
        <PortalFallback />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <ThreeErrorBoundary fallback={<PortalFallback />}>
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 55 }}
          dpr={[1, 1.5]}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
          }}
        >
          <ambientLight intensity={0.5} />
          <PipelineGatewayRings />
        </Canvas>
      </ThreeErrorBoundary>
    </div>
  );
}
