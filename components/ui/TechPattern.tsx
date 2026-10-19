"use client";

interface PatternProps {
  className?: string;
  dotColor?: string;
  opacity?: number;
}

/**
 * Clean SVG Dot Grid with optional radial gradient mask
 * Seamlessly fills wide empty spaces in B2B SaaS sections.
 */
export function TechDotGrid({
  className = "",
  dotColor = "currentColor",
  opacity = 0.04,
}: PatternProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        <defs>
          <pattern
            id="dot-grid-pattern"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill={dotColor} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid-pattern)" />
      </svg>
    </div>
  );
}

/**
 * Engineering Circuit Mesh: subtle vector traces and node junctions
 */
export function TechCircuitMesh({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden opacity-[0.035] dark:opacity-[0.07] ${className}`}
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
      >
        <path
          d="M0 100 H200 L250 150 H500 L550 200 H800"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M0 300 H150 L200 250 H450 L500 300 H800"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M0 500 H350 L400 450 H650 L700 500 H800"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Connection Nodes */}
        <circle cx="200" cy="100" r="3.5" fill="currentColor" />
        <circle cx="250" cy="150" r="3.5" fill="currentColor" />
        <circle cx="500" cy="150" r="3.5" fill="currentColor" />
        <circle cx="150" cy="300" r="3.5" fill="currentColor" />
        <circle cx="200" cy="250" r="3.5" fill="currentColor" />
        <circle cx="450" cy="250" r="3.5" fill="currentColor" />
        <circle cx="350" cy="500" r="3.5" fill="currentColor" />
        <circle cx="400" cy="450" r="3.5" fill="currentColor" />
        <circle cx="650" cy="450" r="3.5" fill="currentColor" />
      </svg>
    </div>
  );
}

/**
 * Geometric Blueprint Grid: subtle square grid lines with center radial fade
 */
export function BlueprintGrid({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] ${className}`}
      aria-hidden="true"
    >
      <div
        className="h-full w-full opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}

/**
 * Ambient Atmosphere Glow: Dual blurred colored radial gradients
 */
export function AmbientAtmosphereGlow({
  variant = "cyan-blue",
}: {
  variant?: "cyan-blue" | "violet-cyan" | "emerald-blue";
}) {
  const colors = {
    "cyan-blue": {
      left: "bg-cyan-500/10",
      right: "bg-blue-600/10",
    },
    "violet-cyan": {
      left: "bg-violet-600/10",
      right: "bg-cyan-500/10",
    },
    "emerald-blue": {
      left: "bg-emerald-500/10",
      right: "bg-blue-600/10",
    },
  }[variant];

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className={`absolute -left-36 top-1/4 h-96 w-96 rounded-full blur-[160px] ${colors.left}`}
      />
      <div
        className={`absolute -right-36 bottom-1/4 h-96 w-96 rounded-full blur-[160px] ${colors.right}`}
      />
    </div>
  );
}

/**
 * Signature Hero Atmosphere Glow:
 * Matches the Homepage Hero background exactly across the entire site:
 * - Top-left blue glow (bg-blue-600/20 blur-3xl)
 * - Upper-right cyan glow for hero viewports (bg-cyan-500/20 blur-3xl)
 * - Bottom-right cyan glow (bg-cyan-500/20 blur-3xl)
 * - Centered violet aurora (h-60 w-[900px] bg-violet-600 blur-[160px] opacity-30)
 * - Subtle 60px x 60px space grid with opacity-10
 */
export function HeroAtmosphereGlow({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* Left Blue Glow */}
      <div className="absolute left-[-150px] top-[-100px] h-96 w-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

      {/* Right Cyan Glow - Upper Hero Viewport */}
      <div className="absolute right-[-120px] top-[180px] sm:top-[220px] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />

      {/* Right Cyan Glow - Bottom / Extended */}
      <div className="absolute right-[-120px] bottom-[-100px] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />

      {/* Purple Glow - Centered Top Aurora */}
      <div className="absolute left-1/2 top-0 h-60 w-[900px] -translate-x-1/2 rounded-full bg-violet-600 blur-[160px] opacity-30 pointer-events-none" />

      {/* Ambient continuation glows down long pages */}
      <div className="absolute left-1/4 top-[1000px] h-96 w-96 rounded-full bg-blue-600/10 blur-[160px] pointer-events-none" />
      <div className="absolute right-1/4 top-[1700px] h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px] pointer-events-none" />
      <div className="absolute left-1/3 top-[2400px] h-96 w-96 rounded-full bg-violet-600/10 blur-[160px] pointer-events-none" />

      {/* Subtle 60px Grid Pattern - Same as Homepage Hero */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
