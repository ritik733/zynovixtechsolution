"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Torus } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

function VortexParticles({ count = 1200 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const c1 = new THREE.Color("#22d3ee");
    const c2 = new THREE.Color("#a855f7");

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 1 + Math.random() * 5;
      const z = -Math.random() * 15;

      pos[i * 3] = radius * Math.cos(angle);
      pos[i * 3 + 1] = radius * Math.sin(angle);
      pos[i * 3 + 2] = z;

      const c = Math.random() > 0.5 ? c1 : c2;
      cols[i * 3] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;
    }
    return [pos, cols];
  }, [count]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const t = clock.getElapsedTime();
    pointsRef.current.rotation.z = -t * 0.4;
  });

  return (
    <Points ref={pointsRef} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.06}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function PortalRings() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();

    // Tilt portal towards mouse
    groupRef.current.rotation.x = pointer.y * 0.35;
    groupRef.current.rotation.y = pointer.x * 0.35;
    groupRef.current.rotation.z = t * 0.15;
  });

  const rings = [
    { radius: 2.2, z: 0, color: "#22d3ee", speed: 0.3 },
    { radius: 2.0, z: -1.5, color: "#38bdf8", speed: -0.4 },
    { radius: 1.8, z: -3.0, color: "#818cf8", speed: 0.5 },
    { radius: 1.5, z: -4.5, color: "#a855f7", speed: -0.6 },
    { radius: 1.2, z: -6.0, color: "#c084fc", speed: 0.7 },
    { radius: 0.9, z: -7.5, color: "#22d3ee", speed: -0.8 },
  ];

  return (
    <group ref={groupRef}>
      {rings.map((ring, idx) => (
        <Torus
          key={idx}
          args={[ring.radius, 0.025, 16, 64]}
          position={[0, 0, ring.z]}
        >
          <meshBasicMaterial
            color={ring.color}
            transparent
            opacity={0.75 - idx * 0.08}
            blending={THREE.AdditiveBlending}
          />
        </Torus>
      ))}
      <VortexParticles />
    </group>
  );
}

export default function Portal3D({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.5} />
        <PortalRings />
      </Canvas>
    </div>
  );
}
