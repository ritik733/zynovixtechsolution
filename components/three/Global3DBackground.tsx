"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Float, Torus, Octahedron, Icosahedron } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/* ============================================================
   SHARED STATE FOR GLOBAL MOUSE & SCROLL TRACKING
   (Ensures smooth interaction even when canvas has pointer-events-none)
   ============================================================ */
const globalInput = {
  mouseX: 0,
  mouseY: 0,
  targetMouseX: 0,
  targetMouseY: 0,
  scrollY: 0,
  scrollProgress: 0,
  scrollVelocity: 0,
  lastScrollY: 0,
};

/* ============================================================
   INTERACTIVE 3D CAMERA & LIGHT RIG
   Dives forward with scroll and tilts smoothly with cursor
   ============================================================ */
function CameraAndLightRig() {
  const { camera } = useThree();
  const lightRef = useRef<THREE.PointLight>(null);
  const targetCam = useRef({ x: 0, y: 0, z: 12, rotX: 0, rotY: 0 });

  useFrame(({ clock }) => {
    // Smooth lerp mouse
    globalInput.mouseX += (globalInput.targetMouseX - globalInput.mouseX) * 0.06;
    globalInput.mouseY += (globalInput.targetMouseY - globalInput.mouseY) * 0.06;

    const t = clock.getElapsedTime();
    const p = globalInput.scrollProgress;

    // Camera travels in 3D space: dives deeper as user scrolls
    targetCam.current.z = 12 - p * 14;
    targetCam.current.y = -p * 8 + Math.sin(t * 0.4) * 0.2;
    targetCam.current.x = globalInput.mouseX * 2.5;

    // Camera rotation follows mouse tilt & subtle scroll tilt
    targetCam.current.rotX = -globalInput.mouseY * 0.25 + Math.sin(t * 0.3) * 0.02;
    targetCam.current.rotY = globalInput.mouseX * 0.35;

    // Smoothly damp camera
    camera.position.x += (targetCam.current.x - camera.position.x) * 0.05;
    camera.position.y += (targetCam.current.y - camera.position.y) * 0.05;
    camera.position.z += (targetCam.current.z - camera.position.z) * 0.05;

    camera.rotation.x += (targetCam.current.rotX - camera.rotation.x) * 0.05;
    camera.rotation.y += (targetCam.current.rotY - camera.rotation.y) * 0.05;
    camera.rotation.z = Math.sin(t * 0.2) * 0.015 - globalInput.mouseX * 0.05;

    // Interactive 3D Cursor Spotlight
    if (lightRef.current) {
      lightRef.current.position.x = globalInput.mouseX * 8;
      lightRef.current.position.y = -globalInput.mouseY * 6 + camera.position.y;
      lightRef.current.position.z = camera.position.z - 4;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight
        ref={lightRef}
        color="#22d3ee"
        intensity={60}
        distance={25}
        decay={2}
      />
      <pointLight position={[-10, 10, 5]} color="#8b5cf6" intensity={40} />
      <pointLight position={[10, -10, -5]} color="#3b82f6" intensity={45} />
    </>
  );
}

/* ============================================================
   COSMIC DATA PARTICLE CLOUD (Deep 3D space)
   ============================================================ */
function CosmicParticles({ count = 3000 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const color1 = new THREE.Color("#22d3ee"); // cyan
    const color2 = new THREE.Color("#8b5cf6"); // violet
    const color3 = new THREE.Color("#38bdf8"); // sky

    for (let i = 0; i < count; i++) {
      // Cylindrical & spherical dispersion
      const radius = 10 + Math.random() * 35;
      const theta = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 60;

      pos[i * 3] = radius * Math.cos(theta);
      pos[i * 3 + 1] = height;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;

      // Color distribution
      const choice = Math.random();
      const c = choice < 0.45 ? color1 : choice < 0.8 ? color2 : color3;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame(({ clock }, delta) => {
    if (!pointsRef.current) return;
    const t = clock.getElapsedTime();

    // Constant cosmic spin + reactive mouse swirl
    pointsRef.current.rotation.y = t * 0.02 + globalInput.mouseX * 0.15;
    pointsRef.current.rotation.x = t * 0.01 + globalInput.mouseY * 0.1;

    // React to scroll velocity
    const speedBoost = Math.abs(globalInput.scrollVelocity) * 0.002;
    pointsRef.current.rotation.z += (0.01 + speedBoost) * delta;
  });

  return (
    <Points ref={pointsRef} positions={positions} colors={colors} stride={3} frustumCulled>
      <PointMaterial
        transparent
        vertexColors
        size={0.065}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

/* ============================================================
   CYBERNETIC 3D WAVE GRID (Digital ocean in depth)
   Undulates with procedural waves & ripples near cursor
   ============================================================ */
function CyberWaveGrid() {
  const meshRef = useRef<THREE.Mesh>(null);
  const geomRef = useRef<THREE.PlaneGeometry>(null);

  // Store base original Z coordinates
  const originalZ = useMemo(() => {
    const geo = new THREE.PlaneGeometry(80, 80, 50, 50);
    return new Float32Array(geo.attributes.position.array);
  }, []);

  useFrame(({ clock }) => {
    if (!geomRef.current) return;
    const t = clock.getElapsedTime() * 1.5;
    const pos = geomRef.current.attributes.position;
    const count = pos.count;

    const mx = globalInput.mouseX * 15;
    const my = globalInput.mouseY * 15;

    for (let i = 0; i < count; i++) {
      const x = originalZ[i * 3];
      const y = originalZ[i * 3 + 1];

      // Distance to cursor
      const dx = x - mx;
      const dy = y - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const mouseWave = Math.sin(dist * 0.4 - t * 2) * Math.max(0, 1 - dist / 20) * 1.2;

      // Complex ambient waves
      const wave1 = Math.sin(x * 0.15 + t) * Math.cos(y * 0.15 + t * 0.8) * 1.4;
      const wave2 = Math.sin((x + y) * 0.1 + t * 1.2) * 0.8;

      pos.setZ(i, wave1 + wave2 + mouseWave);
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh
      ref={meshRef}
      position={[0, -10, -10]}
      rotation={[-Math.PI / 2.3, 0, 0]}
    >
      <planeGeometry ref={geomRef} args={[80, 80, 50, 50]} />
      <meshStandardMaterial
        color="#0891b2"
        emissive="#06b6d4"
        emissiveIntensity={0.65}
        wireframe
        transparent
        opacity={0.35}
        roughness={0.2}
      />
    </mesh>
  );
}

/* ============================================================
   FLOATING 3D POLYHEDRAL DATA CRYSTALS
   Hover in 3D space, reactive to scroll and cursor
   ============================================================ */
function FloatingCrystals() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();

    // Floating reaction to cursor
    groupRef.current.position.x = globalInput.mouseX * 1.2;
    groupRef.current.position.y = -globalInput.mouseY * 1.0;
    groupRef.current.rotation.y = t * 0.05 + globalInput.mouseX * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Upper left crystal */}
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.8} position={[-8, 6, -5]}>
        <Icosahedron args={[1.3, 0]}>
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#0ea5e9"
            emissiveIntensity={1.2}
            wireframe
            transparent
            opacity={0.7}
          />
        </Icosahedron>
        <Torus args={[2.0, 0.02, 16, 60]} rotation={[1, 1, 0]}>
          <meshBasicMaterial color="#a855f7" transparent opacity={0.6} />
        </Torus>
      </Float>

      {/* Mid right octahedron */}
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2} position={[9, -4, -8]}>
        <Octahedron args={[1.6, 0]}>
          <meshStandardMaterial
            color="#a855f7"
            emissive="#7c3aed"
            emissiveIntensity={1.4}
            wireframe
            transparent
            opacity={0.75}
          />
        </Octahedron>
        <Torus args={[2.4, 0.02, 16, 60]} rotation={[0.5, 0, 1]}>
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.6} />
        </Torus>
      </Float>

      {/* Deep floating ring */}
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2} position={[-6, -14, -18]}>
        <Torus args={[3.2, 0.04, 16, 80]} rotation={[Math.PI / 3, 0.4, 0]}>
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#2563eb"
            emissiveIntensity={1.5}
            wireframe
            transparent
            opacity={0.65}
          />
        </Torus>
      </Float>

      {/* Deep right cluster */}
      <Float speed={2.2} rotationIntensity={1.4} floatIntensity={1.5} position={[7, -22, -22]}>
        <Icosahedron args={[1.5, 1]}>
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#0284c7"
            emissiveIntensity={1.3}
            wireframe
            transparent
            opacity={0.6}
          />
        </Icosahedron>
      </Float>
    </group>
  );
}

/* ============================================================
   BACKGROUND SCENE
   ============================================================ */
function BackgroundScene({ isMobile, reduced }: { isMobile: boolean; reduced: boolean }) {
  if (reduced) {
    return (
      <>
        <ambientLight intensity={0.4} />
        <CosmicParticles count={1000} />
      </>
    );
  }

  return (
    <>
      <CameraAndLightRig />
      <Suspense fallback={null}>
        <CosmicParticles count={isMobile ? 1200 : 2800} />
        <CyberWaveGrid />
        <FloatingCrystals />
      </Suspense>
    </>
  );
}

/* ============================================================
   EXPORTED GLOBAL 3D BACKGROUND COMPONENT
   ============================================================ */
export default function Global3DBackground() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const checkReduced = () =>
      setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    checkMobile();
    checkReduced();

    // Global cursor tracking
    const handlePointerMove = (e: PointerEvent) => {
      // Normalized between -1 and 1
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      globalInput.targetMouseX = nx;
      globalInput.targetMouseY = ny;
    };

    // Global scroll tracking
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      globalInput.scrollY = scrollY;
      globalInput.scrollProgress = Math.min(1, Math.max(0, scrollY / maxScroll));
      globalInput.scrollVelocity = scrollY - globalInput.lastScrollY;
      globalInput.lastScrollY = scrollY;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", checkMobile, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#030712]"
      style={{ perspective: 1200 }}
    >
      {/* Ambient gradient layer to blend WebGL seamlessly with deep dark theme */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.18),rgba(255,255,255,0))] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/40 to-[#030712] -z-10" />

      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={isMobile ? 1 : [1, 1.5]}
        gl={{
          alpha: true,
          antialias: !isMobile,
          powerPreference: "high-performance",
        }}
      >
        <BackgroundScene isMobile={isMobile} reduced={reduced} />
      </Canvas>
    </div>
  );
}
