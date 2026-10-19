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
