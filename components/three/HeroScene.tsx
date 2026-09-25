"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  Points,
  PointMaterial,
  Torus,
  Box,
  Cylinder,
  RoundedBox,
} from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/* ============================================================
   ENTERPRISE CAMERA & SCROLL RIG
   Smoothly tilts with cursor and tracks scroll depth
   ============================================================ */
function EnterpriseCameraRig() {
  const { camera } = useThree();
  const target = useRef({ x: 0, y: 0, z: 8 });

  useFrame(({ clock, pointer }) => {
    const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
    const progress = Math.min(1, scrollY / 900);

    target.current.z = 8 - progress * 2.2;
    target.current.x = pointer.x * 1.1;
    target.current.y = pointer.y * 0.7 + Math.sin(clock.elapsedTime * 0.5) * 0.12;

    camera.position.x += (target.current.x - camera.position.x) * 0.06;
    camera.position.y += (target.current.y - camera.position.y) * 0.06;
    camera.position.z += (target.current.z - camera.position.z) * 0.06;

    camera.rotation.z = Math.sin(clock.elapsedTime * 0.2) * 0.015 - pointer.x * 0.04;
  });

  return null;
}

/* ============================================================
   DIGITAL DATA PIPELINE PARTICLES
   Represents automated packets streaming through business systems
   ============================================================ */
function EnterpriseDataStream({ count = 1200 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const cyan = new THREE.Color("#06b6d4");
    const cobalt = new THREE.Color("#3b82f6");
    const emerald = new THREE.Color("#10b981");

    for (let i = 0; i < count; i++) {
      // Cylindrical bus distribution
      const radius = 2.2 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 7.5;

      pos[i * 3] = radius * Math.cos(theta);
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = radius * Math.sin(theta);

      const rand = Math.random();
      const c = rand < 0.5 ? cyan : rand < 0.85 ? cobalt : emerald;
      cols[i * 3] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;
    }
    return [pos, cols];
  }, [count]);

  useFrame(({ pointer }, d) => {
    if (!ref.current) return;
    ref.current.rotation.y += d * 0.12 + pointer.x * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled>
      <PointMaterial
        transparent
        vertexColors
        size={0.045}
        sizeAttenuation
        depthWrite={false}
        opacity={0.75}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

/* ============================================================
   MODULAR ERP ARCHITECTURE & WEB INTERFACE STACK
   Represents custom web apps, ERP modules, and database pipelines
   ============================================================ */
function ModularEnterpriseStack() {
  const group = useRef<THREE.Group>(null);
  const webPanel = useRef<THREE.Group>(null);
  const modulesGroup = useRef<THREE.Group>(null);
  const pipelineRing = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }, d) => {
    const t = clock.elapsedTime;

    // Smooth whole stack mouse responsive tilt
    if (group.current) {
      group.current.rotation.y = t * 0.2 + pointer.x * 0.4;
      group.current.rotation.x = 0.35 + pointer.y * 0.25;
    }

    // Web UI Panel subtle float
    if (webPanel.current) {
      webPanel.current.position.y = 1.35 + Math.sin(t * 1.2) * 0.08;
    }

    // Orbiting ERP modular blocks
    if (modulesGroup.current) {
      modulesGroup.current.rotation.y = -t * 0.25;
    }

    // Automation pipeline loop
    if (pipelineRing.current) {
      pipelineRing.current.rotation.z = t * 0.4;
    }
  });

  return (
    <group ref={group}>
      {/* 1. Base: Enterprise Database & Server Cluster */}
      <group position={[0, -1.6, 0]}>
        <Cylinder args={[1.9, 2.1, 0.45, 32]}>
          <meshStandardMaterial
            color="#0f172a"
            metalness={0.9}
            roughness={0.2}
            emissive="#06b6d4"
            emissiveIntensity={0.25}
          />
        </Cylinder>
        {/* Perimeter bus data track */}
        <Torus args={[2.05, 0.025, 16, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.9} />
        </Torus>
        <Cylinder args={[1.5, 1.7, 0.35, 32]} position={[0, 0.4, 0]}>
          <meshStandardMaterial
            color="#1e293b"
            metalness={0.8}
            roughness={0.3}
            wireframe
          />
        </Cylinder>
      </group>

      {/* 2. Middle: Modular ERP Service Blocks (CRM, Inventory, Accounting, Logistics) */}
      <group ref={modulesGroup} position={[0, -0.4, 0]}>
        {/* Module A: Inventory & Supply Chain */}
        <group position={[1.4, 0, 0]}>
          <RoundedBox args={[0.7, 0.7, 0.7]} radius={0.06} smoothness={4}>
            <meshStandardMaterial
              color="#0284c7"
              emissive="#06b6d4"
              emissiveIntensity={0.8}
              roughness={0.2}
              metalness={0.8}
            />
          </RoundedBox>
          <Box args={[0.74, 0.74, 0.74]}>
            <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.6} />
          </Box>
        </group>

        {/* Module B: Financial Accounting & Invoicing */}
        <group position={[-1.4, 0, 0]}>
          <RoundedBox args={[0.7, 0.7, 0.7]} radius={0.06} smoothness={4}>
            <meshStandardMaterial
              color="#2563eb"
              emissive="#3b82f6"
              emissiveIntensity={0.7}
              roughness={0.2}
              metalness={0.8}
            />
          </RoundedBox>
          <Box args={[0.74, 0.74, 0.74]}>
            <meshBasicMaterial color="#60a5fa" wireframe transparent opacity={0.6} />
          </Box>
        </group>

        {/* Module C: Automation & Workflow Engine */}
        <group position={[0, 0, 1.4]}>
          <RoundedBox args={[0.7, 0.7, 0.7]} radius={0.06} smoothness={4}>
            <meshStandardMaterial
              color="#059669"
              emissive="#10b981"
              emissiveIntensity={0.8}
              roughness={0.2}
              metalness={0.8}
            />
          </RoundedBox>
          <Box args={[0.74, 0.74, 0.74]}>
            <meshBasicMaterial color="#34d399" wireframe transparent opacity={0.6} />
          </Box>
        </group>

        {/* Module D: CRM & Client Operations */}
        <group position={[0, 0, -1.4]}>
          <RoundedBox args={[0.7, 0.7, 0.7]} radius={0.06} smoothness={4}>
            <meshStandardMaterial
              color="#6366f1"
              emissive="#818cf8"
              emissiveIntensity={0.7}
              roughness={0.2}
              metalness={0.8}
            />
          </RoundedBox>
          <Box args={[0.74, 0.74, 0.74]}>
            <meshBasicMaterial color="#a5b4fc" wireframe transparent opacity={0.6} />
          </Box>
        </group>

        {/* Connecting Data Bus Lines */}
        <Torus args={[1.4, 0.02, 16, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.7} />
        </Torus>
      </group>

      {/* 3. Top: Modern Web Platform & Digital Interface Pane */}
      <group ref={webPanel} position={[0, 1.35, 0]}>
        {/* Isometric Browser / Web Frame */}
        <RoundedBox args={[2.5, 1.6, 0.05]} radius={0.04} smoothness={4}>
          <meshStandardMaterial
            color="#090d16"
            emissive="#0284c7"
            emissiveIntensity={0.4}
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.85}
          />
        </RoundedBox>
        {/* Browser Top Navbar line */}
        <Box args={[2.3, 0.12, 0.06]} position={[0, 0.6, 0.01]}>
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.8} />
        </Box>
        {/* Interface card blocks */}
        <Box args={[0.9, 0.75, 0.04]} position={[-0.6, 0.05, 0.03]}>
          <meshStandardMaterial
            color="#0284c7"
            emissive="#06b6d4"
            emissiveIntensity={0.6}
            wireframe
          />
        </Box>
        <Box args={[0.9, 0.75, 0.04]} position={[0.6, 0.05, 0.03]}>
          <meshStandardMaterial
            color="#2563eb"
            emissive="#3b82f6"
            emissiveIntensity={0.6}
            wireframe
          />
        </Box>
      </group>

      {/* 4. Automated Workflow Pipeline Rings */}
      <group ref={pipelineRing}>
        {/* Outer automation loop */}
        <Torus args={[2.9, 0.025, 16, 100]} rotation={[Math.PI / 3, 0.2, 0]}>
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={1.8}
          />
        </Torus>
        {/* Secondary sync loop */}
        <Torus args={[3.4, 0.018, 16, 100]} rotation={[-Math.PI / 3.5, 0.5, 0]}>
          <meshStandardMaterial
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={1.5}
          />
        </Torus>
      </group>
    </group>
  );
}

/* ============================================================
   MAIN SCENE
   ============================================================ */
function Scene({ isMobile, reduced }: { isMobile: boolean; reduced: boolean }) {
  if (reduced) {
    return (
      <>
        <ambientLight intensity={0.6} />
        <ModularEnterpriseStack />
      </>
    );
  }

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[6, 8, 6]} intensity={60} color="#06b6d4" />
      <pointLight position={[-6, -6, -6]} intensity={50} color="#3b82f6" />
      <pointLight position={[0, 6, -6]} intensity={45} color="#10b981" />

      <Suspense fallback={null}>
        <EnterpriseDataStream count={isMobile ? 600 : 1300} />
        <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8}>
          <ModularEnterpriseStack />
        </Float>
        <EnterpriseCameraRig />
      </Suspense>
    </>
  );
}

import ThreeErrorBoundary from "./ThreeErrorBoundary";
import { isWebGLAvailable } from "./webglUtils";

function HeroFallbackGraphic() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl animate-pulse" />
      <div className="absolute h-72 w-72 rounded-full border border-cyan-500/20 animate-spin [animation-duration:30s]" />
      <div className="absolute h-52 w-52 rounded-full border border-dashed border-blue-500/30 animate-spin [animation-duration:18s] [animation-direction:reverse]" />
      <div className="relative flex h-36 w-36 items-center justify-center rounded-2xl border border-cyan-400/40 bg-slate-900/90 shadow-[0_0_40px_rgba(34,211,238,0.3)] backdrop-blur-md">
        <div className="flex flex-col items-center text-center p-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-cyan-500/40 mb-1.5">
            Z
          </div>
          <span className="text-xs font-bold text-cyan-300">Modular ERP</span>
          <span className="text-[10px] text-slate-400">&amp; Automation</span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   EXPORT
   ============================================================ */
export default function HeroScene() {
  const [reduced, setReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setIsMobile(window.innerWidth < 768);
    setHasWebGL(isWebGLAvailable());
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-44 w-44 rounded-2xl border border-cyan-500/20 animate-pulse bg-cyan-950/20" />
      </div>
    );
  }

  if (!hasWebGL) {
    return <HeroFallbackGraphic />;
  }

  return (
    <ThreeErrorBoundary fallback={<HeroFallbackGraphic />}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 48 }}
        dpr={isMobile ? 1 : [1, 1.5]}
        gl={{
          alpha: true,
          antialias: !isMobile,
          powerPreference: "high-performance",
        }}
      >
        <Scene isMobile={isMobile} reduced={reduced} />
      </Canvas>
    </ThreeErrorBoundary>
  );
}