"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Float, Box, Torus } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/* ============================================================
   SHARED STATE FOR GLOBAL MOUSE & SCROLL TRACKING
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
   ENTERPRISE CAMERA & LIGHT RIG
   Dives through system architectural layers as user scrolls
   ============================================================ */
function EnterpriseCameraRig() {
  const { camera } = useThree();
  const lightRef = useRef<THREE.PointLight>(null);
  const targetCam = useRef({ x: 0, y: 0, z: 12, rotX: 0, rotY: 0 });

  useFrame(({ clock }) => {
    // Smooth lerp mouse
    globalInput.mouseX += (globalInput.targetMouseX - globalInput.mouseX) * 0.06;
    globalInput.mouseY += (globalInput.targetMouseY - globalInput.mouseY) * 0.06;

    const t = clock.getElapsedTime();
    const p = globalInput.scrollProgress;

    // Camera travels in 3D space through system layers
    targetCam.current.z = 12 - p * 12;
    targetCam.current.y = -p * 6 + Math.sin(t * 0.3) * 0.15;
    targetCam.current.x = globalInput.mouseX * 2.2;

    targetCam.current.rotX = -globalInput.mouseY * 0.2 + Math.sin(t * 0.25) * 0.015;
    targetCam.current.rotY = globalInput.mouseX * 0.28;

    camera.position.x += (targetCam.current.x - camera.position.x) * 0.05;
    camera.position.y += (targetCam.current.y - camera.position.y) * 0.05;
    camera.position.z += (targetCam.current.z - camera.position.z) * 0.05;

    camera.rotation.x += (targetCam.current.rotX - camera.rotation.x) * 0.05;
    camera.rotation.y += (targetCam.current.rotY - camera.rotation.y) * 0.05;
    camera.rotation.z = Math.sin(t * 0.15) * 0.01 - globalInput.mouseX * 0.04;

    // Interactive 3D Cursor Spotlight
    if (lightRef.current) {
      lightRef.current.position.x = globalInput.mouseX * 7;
      lightRef.current.position.y = -globalInput.mouseY * 5 + camera.position.y;
      lightRef.current.position.z = camera.position.z - 4;
    }
  });

  return (
    <>
      <ambientLight intensity={0.45} />
      <pointLight
        ref={lightRef}
        color="#06b6d4"
        intensity={50}
        distance={25}
        decay={2}
      />
      <pointLight position={[-12, 12, 6]} color="#2563eb" intensity={40} />
      <pointLight position={[12, -12, -6]} color="#059669" intensity={35} />
    </>
  );
}

/* ============================================================
   ENTERPRISE DATA NETWORK (Connected nodes & data packet cloud)
   ============================================================ */
function SystemNetworkNodes({ count = 2200 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const cyan = new THREE.Color("#06b6d4");
    const cobalt = new THREE.Color("#2563eb");
    const teal = new THREE.Color("#10b981");

    for (let i = 0; i < count; i++) {
      // Stratified matrix dispersion representing network topography
      const radius = 8 + Math.random() * 30;
      const theta = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 55;

      pos[i * 3] = radius * Math.cos(theta);
      pos[i * 3 + 1] = height;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 70;

      const choice = Math.random();
      const c = choice < 0.5 ? cyan : choice < 0.8 ? cobalt : teal;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame(({ clock }, delta) => {
    if (!pointsRef.current) return;
    const t = clock.getElapsedTime();

    pointsRef.current.rotation.y = t * 0.018 + globalInput.mouseX * 0.12;
    pointsRef.current.rotation.x = t * 0.008 + globalInput.mouseY * 0.08;

    const speedBoost = Math.abs(globalInput.scrollVelocity) * 0.0018;
    pointsRef.current.rotation.z += (0.008 + speedBoost) * delta;
  });

  return (
    <Points ref={pointsRef} positions={positions} colors={colors} stride={3} frustumCulled>
      <PointMaterial
        transparent
        vertexColors
        size={0.055}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

/* ============================================================
   ARCHITECTURAL SYSTEM GRID
   Isometric business grid floor with undulating data pulses
   ============================================================ */
function SystemFloorGrid({ isMobile }: { isMobile: boolean }) {
  const geomRef = useRef<THREE.PlaneGeometry>(null);
  const segments = isMobile ? 22 : 44;

  const originalZ = useMemo(() => {
    const geo = new THREE.PlaneGeometry(80, 80, segments, segments);
    const arr = new Float32Array(geo.attributes.position.array);
    geo.dispose();
    return arr;
  }, [segments]);

  useFrame(({ clock }) => {
    if (!geomRef.current) return;
    const t = clock.getElapsedTime() * 1.2;
    const pos = geomRef.current.attributes.position;
    const count = pos.count;

    const mx = globalInput.mouseX * 14;
    const my = globalInput.mouseY * 14;

    for (let i = 0; i < count; i++) {
      const x = originalZ[i * 3];
      const y = originalZ[i * 3 + 1];

      const dx = x - mx;
      const dy = y - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const mousePulse = Math.sin(dist * 0.35 - t * 2) * Math.max(0, 1 - dist / 22) * 1.1;

      // Architectural network wave
      const wave1 = Math.sin(x * 0.12 + t) * Math.cos(y * 0.12 + t * 0.7) * 1.2;
      const wave2 = Math.sin((x + y) * 0.08 + t * 1.1) * 0.6;

      pos.setZ(i, wave1 + wave2 + mousePulse);
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh position={[0, -9, -8]} rotation={[-Math.PI / 2.3, 0, 0]}>
      <planeGeometry ref={geomRef} args={[80, 80, segments, segments]} />
      <meshStandardMaterial
        color="#0284c7"
        emissive="#0369a1"
        emissiveIntensity={0.5}
        wireframe
        transparent
        opacity={0.3}
        roughness={0.2}
      />
    </mesh>
  );
}

/* ============================================================
   FLOATING MODULAR ERP NODES & PIPELINE RINGS
   ============================================================ */
function FloatingModularNodes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();

    groupRef.current.position.x = globalInput.mouseX * 1.0;
    groupRef.current.position.y = -globalInput.mouseY * 0.8;
    groupRef.current.rotation.y = t * 0.04 + globalInput.mouseX * 0.08;
  });

  return (
    <group ref={groupRef}>
      {/* Upper left: Database & Service Block */}
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.4} position={[-8, 6, -6]}>
        <Box args={[1.5, 1.5, 1.5]}>
          <meshStandardMaterial
            color="#0284c7"
            emissive="#06b6d4"
            emissiveIntensity={0.8}
            wireframe
            transparent
            opacity={0.65}
          />
        </Box>
        <Torus args={[2.0, 0.02, 16, 60]} rotation={[1, 1, 0]}>
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.6} />
        </Torus>
      </Float>

      {/* Mid right: Workflow Automation Module */}
      <Float speed={2.2} rotationIntensity={1.1} floatIntensity={1.6} position={[9, -4, -9]}>
        <Box args={[1.6, 1.0, 1.6]}>
          <meshStandardMaterial
            color="#2563eb"
            emissive="#3b82f6"
            emissiveIntensity={0.8}
            wireframe
            transparent
            opacity={0.65}
          />
        </Box>
        <Torus args={[2.3, 0.02, 16, 60]} rotation={[0.4, 0, 1]}>
          <meshBasicMaterial color="#10b981" transparent opacity={0.55} />
        </Torus>
      </Float>

      {/* Deep left: API Gateway Pipeline Loop */}
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.0} position={[-7, -14, -18]}>
        <Torus args={[3.0, 0.035, 16, 80]} rotation={[Math.PI / 3, 0.3, 0]}>
          <meshStandardMaterial
            color="#0ea5e9"
            emissive="#0284c7"
            emissiveIntensity={1.2}
            wireframe
            transparent
            opacity={0.6}
          />
        </Torus>
      </Float>

      {/* Deep right: Central ERP Cluster */}
      <Float speed={2.0} rotationIntensity={1.0} floatIntensity={1.2} position={[7, -22, -22]}>
        <Box args={[1.8, 1.8, 1.8]}>
          <meshStandardMaterial
            color="#10b981"
            emissive="#059669"
            emissiveIntensity={0.9}
            wireframe
            transparent
            opacity={0.6}
          />
        </Box>
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
        <SystemNetworkNodes count={800} />
      </>
    );
  }

  return (
    <>
      <EnterpriseCameraRig />
      <Suspense fallback={null}>
        <SystemNetworkNodes count={isMobile ? 700 : 2200} />
        <SystemFloorGrid isMobile={isMobile} />
        <FloatingModularNodes />
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

    const handlePointerMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      globalInput.targetMouseX = nx;
      globalInput.targetMouseY = ny;
    };

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
      {/* Ambient gradient layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.12),rgba(255,255,255,0))] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/50 to-[#030712] -z-10" />

      <Canvas
        camera={{ position: [0, 0, 12], fov: 58 }}
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
