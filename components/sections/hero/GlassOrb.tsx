"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Bot, Cpu, Database, Cloud } from "lucide-react";

// Each orbit: an ellipse tilted at its own angle, like the reference image
const ORBITS = [
  { id: "orbit-1", rx: 95, ry: 38, rotation: -12, color: "#f59e0b" },
  { id: "orbit-2", rx: 80, ry: 55, rotation: 20, color: "#38bdf8" },
  { id: "orbit-3", rx: 65, ry: 30, rotation: 55, color: "#c4b5fd" },
  { id: "orbit-4", rx: 50, ry: 42, rotation: -40, color: "#fca5a5" },
];

// Builds an SVG path string for an ellipse centered at (cx, cy)
function ellipsePath(cx: number, cy: number, rx: number, ry: number) {
  return `M ${cx - rx},${cy} A ${rx},${ry} 0 1,0 ${cx + rx},${cy} A ${rx},${ry} 0 1,0 ${cx - rx},${cy} Z`;
}

function Starfield({ count = 45 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 2,
      })),
    [count]
  );

  return (
    <div className="absolute inset-[-15%] overflow-hidden rounded-full">
      {stars.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{ top: `${s.top}%`, left: `${s.left}%`, width: s.size, height: s.size }}
          animate={{ opacity: [0.15, 0.9, 0.15] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function FeatureCallout({
  icon,
  label,
  dotColor,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  dotColor: string;
  className: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute z-10 flex items-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-xl px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 md:px-4 md:py-3 ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: dotColor }} />
      {icon}
      <span className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap">{label}</span>
    </motion.div>
  );
}

export default function GlassOrb() {
  return (
    <div className="relative flex items-center justify-center h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] md:h-[460px] md:w-[460px] lg:h-[540px] lg:w-[540px]">

      <Starfield count={45} />

      {/* Warm ambient glow behind the whole system, like the reference image */}
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-orange-500/10 blur-[60px] sm:blur-[90px] lg:blur-[120px]"
      />

      {/* The solar system diagram itself */}
      <svg viewBox="0 0 200 200" className="relative h-[85%] w-[85%] overflow-visible">
        <defs>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff7ed" stopOpacity="1" />
            <stop offset="30%" stopColor="#fb923c" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#ea580c" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
          </radialGradient>

          {ORBITS.map((o) => (
            <radialGradient key={o.id} id={`planetGlow-${o.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={o.color} stopOpacity="1" />
              <stop offset="100%" stopColor={o.color} stopOpacity="0" />
            </radialGradient>
          ))}
        </defs>

        {/* Orbit rings — tilted ellipses at different angles, like the reference photo */}
        {ORBITS.map((o) => (
          <ellipse
            key={o.id}
            cx="100"
            cy="100"
            rx={o.rx}
            ry={o.ry}
            transform={`rotate(${o.rotation} 100 100)`}
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="0.6"
          />
        ))}

        {/* Sun / core glow */}
        <circle cx="100" cy="100" r="30" fill="url(#sunGlow)" />
        <circle cx="100" cy="100" r="9" fill="#fffaf0" />

        {/* Invisible paths used purely to drive each planet's motion along its orbit */}
        {ORBITS.map((o) => (
          <path
            key={`path-${o.id}`}
            id={o.id}
            d={ellipsePath(100, 100, o.rx, o.ry)}
            transform={`rotate(${o.rotation} 100 100)`}
            fill="none"
            stroke="none"
          />
        ))}

        {/* Planets — small glowing dots, each riding its own orbit at its own speed */}
        {ORBITS.map((o, i) => (
          <circle key={`planet-${o.id}`} r={3 + i * 0.4} fill={`url(#planetGlow-${o.id})`}>
            <animateMotion dur={`${14 + i * 6}s`} repeatCount="indefinite" rotate="auto">
              <mpath href={`#${o.id}`} />
            </animateMotion>
          </circle>
        ))}
      </svg>

      {/* "AI Core" label, fixed on top of the sun, not rotating */}
      <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center px-2">
        <h2 className="text-xs sm:text-sm md:text-base font-bold drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
          AI Core
        </h2>
        <p className="mt-0.5 text-[8px] sm:text-[10px] md:text-xs text-slate-300 drop-shadow-[0_0_6px_rgba(0,0,0,0.9)]">
          Intelligent • Secure • Scalable
        </p>
      </div>

      {/* Static feature callouts around the edge, each tagged with its orbit's color */}
      <FeatureCallout
        icon={<Bot className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-[18px] md:w-[18px] text-cyan-400" />}
        label="AI Agents"
        dotColor="#38bdf8"
        className="left-[2%] top-[16%]"
      />

      <FeatureCallout
        icon={<Cpu className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-[18px] md:w-[18px] text-amber-400" />}
        label="Machine Learning"
        dotColor="#f59e0b"
        className="right-[0%] top-[22%]"
      />

      <FeatureCallout
        icon={<Database className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-[18px] md:w-[18px] text-violet-300" />}
        label="Big Data"
        dotColor="#c4b5fd"
        className="bottom-[14%] left-[4%]"
      />

      <FeatureCallout
        icon={<Cloud className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-[18px] md:w-[18px] text-red-300" />}
        label="Cloud AI"
        dotColor="#fca5a5"
        className="bottom-[20%] right-[2%]"
      />
    </div>
  );
}