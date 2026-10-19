"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ShowcaseSlider from "./ShowcaseSlider";
import {
  siMariadb,
  siPostgresql,
  siTypescript,
  siRedis,
  siLinux,
  siNginx,
  siGraphql,
} from "simple-icons";

interface TechItem {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const rowOne: TechItem[] = [
  {
    name: "Frappe Framework",
    category: "ERP & DocType Engine",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#fff" stroke="#E2E8F0" strokeWidth="1" />
        <path d="M7 6.5h9.5v2.3H9.6v3.4h6v2.3h-6v5.5H7z" fill="#0089FF" />
      </svg>
    ),
  },
  {
    name: "ERPNext",
    category: "Business Suite",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#0089FF" />
        <text x="12" y="15" textAnchor="middle" fontSize="6.5" fontWeight="800" fill="#fff">ERP</text>
      </svg>
    ),
  },
  {
    name: "Next.js 16",
    category: "SSR & Edge Platform",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="10.3" />
        <path d="M8.3 8v8M8.3 8l8 8" strokeLinecap="round" />
        <path d="M15.6 8v5.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Python",
    category: "Automation & Backend",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7">
        <path
          d="M11.9 1.6c-4.5 0-4.2 1.9-4.2 1.9v2h4.3v.6H5.9S3 5.8 3 10.4c0 4.6 2.5 4.4 2.5 4.4h1.5v-2.1s-.1-2.5 2.5-2.5h4.2s2.4 0 2.4-2.3V4S16.5 1.6 11.9 1.6z"
          fill="#3776AB"
        />
        <path
          d="M12.1 22.4c4.5 0 4.2-1.9 4.2-1.9v-2h-4.3v-.6h6.1s2.9.3 2.9-4.3c0-4.6-2.5-4.4-2.5-4.4h-1.5v2.1s.1 2.5-2.5 2.5H10s-2.4 0-2.4 2.3V20s-.4 2.4 4.5 2.4z"
          fill="#FFD43B"
        />
        <circle cx="8.9" cy="3.9" r=".8" fill="#fff" />
        <circle cx="15.1" cy="20.1" r=".8" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Type-Safe Architecture",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill={`#${siTypescript.hex}`}>
        <path d={siTypescript.path} />
      </svg>
    ),
  },
  {
    name: "React 19",
    category: "Interactive UI",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#61DAFB">
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" stroke="none" />
        <ellipse cx="12" cy="12" rx="9.5" ry="4" strokeWidth="1" />
        <ellipse cx="12" cy="12" rx="9.5" ry="4" strokeWidth="1" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9.5" ry="4" strokeWidth="1" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "Design Systems",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="#38BDF8">
        <path d="M12 6.5c-2.8 0-4.5 1.4-5.2 4.1.8-1.4 1.8-1.9 3-1.6.65.17 1.12.66 1.63 1.2.85.87 1.83 1.9 3.97 1.9 2.8 0 4.5-1.4 5.2-4.1-.8 1.4-1.8 1.9-3 1.6-.65-.17-1.12-.66-1.63-1.2-.85-.87-1.83-1.9-3.97-1.9Zm-5.2 6.15c-2.8 0-4.5 1.4-5.2 4.1.8-1.4 1.8-1.9 3-1.6.65.17 1.12.66 1.63 1.2.85.87 1.83 1.9 3.97 1.9 2.8 0 4.5-1.4 5.2-4.1-.8 1.4-1.8 1.9-3 1.6-.65-.17-1.12-.66-1.63-1.2-.85-.87-1.83-1.9-3.97-1.9Z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "Microservices & APIs",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="#68A063">
        <path d="M12 1.85c-.27 0-.55.07-.78.2L3.8 6.35c-.5.29-.8.82-.8 1.4v9.5c0 .58.3 1.11.8 1.4l2.1 1.21c1.02.5 1.39.5 1.87.5 1.5 0 2.36-.91 2.36-2.5V9.08c0-.13-.1-.23-.23-.23H9.1c-.13 0-.23.1-.23.23v8.38c0 .7-.72 1.4-1.9.8L4.7 17.4a.29.29 0 0 1-.15-.25V7.75c0-.11.06-.21.15-.26l7.42-4.28a.28.28 0 0 1 .29 0l7.42 4.28c.09.05.15.15.15.26v9.4c0 .1-.06.2-.15.25l-7.42 4.29a.27.27 0 0 1-.28 0l-1.9-1.13c-.06-.03-.13-.04-.18-.01-.53.3-.63.34-1.13.51-.12.04-.3.11.07.32l2.48 1.47c.24.14.51.21.78.21s.54-.07.78-.21l7.42-4.29c.5-.29.8-.82.8-1.4v-9.5c0-.58-.3-1.11-.8-1.4L12.78 2.05a1.6 1.6 0 0 0-.78-.2z" />
      </svg>
    ),
  },
];

const rowTwo: TechItem[] = [
  {
    name: "AWS Cloud",
    category: "Global Infrastructure",
    icon: (
      <Image
        src="/images/tech/aws.svg"
        alt="AWS"
        width={28}
        height={28}
        className="h-7 w-7 object-contain"
      />
    ),
  },
  {
    name: "Docker",
    category: "Containerization",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="#0DB7ED">
        <path d="M22.1 9.9c-.4-.3-1.3-.5-2.1-.4-.1-.7-.5-1.3-1.1-1.8l-.4-.3-.3.4c-.4.5-.6 1.3-.5 1.9.1.4.2.8.5 1.1-.2.1-.4.2-.6.3-.4.2-.9.2-1.3.2H1.5l-.1.5c-.1.9 0 1.9.4 2.8.5 1 1.3 1.7 2.4 2.1.9.4 2.4.6 3.9.6 1.8 0 3.6-.3 5.3-1 1.3-.5 2.5-1.3 3.5-2.4 1.6-1.7 2.5-3.7 3.2-5.5h.3c.7 0 1.5-.2 2-.7l.3-.3zM4.2 9.6h1.9v-1.9H4.2zm2.6 0h1.9v-1.9H6.8zm2.6 0h1.9v-1.9H9.4zm2.6 0h1.9v-1.9H12zm2.6 0h1.9v-1.9h-1.9zM6.8 6.9h1.9V5H6.8zm2.6 0h1.9V5H9.4zm2.6 0h1.9V5H12zm-7.8 5.4h1.9v-1.9H4.2zm2.6 0h1.9v-1.9H6.8zm2.6 0h1.9v-1.9H9.4zm2.6 0h1.9v-1.9H12zm2.6 0h1.9v-1.9h-1.9z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    category: "Relational Database",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill={`#${siPostgresql.hex}`}>
        <path d={siPostgresql.path} />
      </svg>
    ),
  },
  {
    name: "MariaDB",
    category: "High-Throughput SQL",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill={`#${siMariadb.hex}`}>
        <path d={siMariadb.path} />
      </svg>
    ),
  },
  {
    name: "Redis",
    category: "In-Memory Caching",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill={`#${siRedis.hex}`}>
        <path d={siRedis.path} />
      </svg>
    ),
  },
  {
    name: "Linux (Debian/Ubuntu)",
    category: "Server OS",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill={`#${siLinux.hex}`}>
        <path d={siLinux.path} />
      </svg>
    ),
  },
  {
    name: "Nginx",
    category: "Reverse Proxy & SSL",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill={`#${siNginx.hex}`}>
        <path d={siNginx.path} />
      </svg>
    ),
  },
  {
    name: "GraphQL",
    category: "Schema Federation",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill={`#${siGraphql.hex}`}>
        <path d={siGraphql.path} />
      </svg>
    ),
  },
];

function TechCard({ item }: { item: TechItem }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md transition-all hover:border-cyan-500 hover:shadow-cyan-500/10 dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-cyan-400">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-slate-50 dark:bg-white/5 p-1.5">
        {item.icon}
      </div>
      <div className="flex flex-col text-left">
        <span className="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap">
          {item.name}
        </span>
        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">
          {item.category}
        </span>
      </div>
    </div>
  );
}

export default function TrustBar() {
  // Duplicate arrays for infinite loop
  const marqueeRowOne = [...rowOne, ...rowOne, ...rowOne];
  const marqueeRowTwo = [...rowTwo, ...rowTwo, ...rowTwo];

  return (
    <section className="relative overflow-hidden bg-slate-50/70 pt-0 pb-20 dark:bg-[#050816]">
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-72 w-[850px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />
      </div>

      {/* 6-Image Showcase Slider directly above Engineered On Proven Foundations */}
      <ShowcaseSlider />

      <div className="mx-auto max-w-7xl px-6 text-center mt-16 sm:mt-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
          Engineered On Proven Foundations
        </div>
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Enterprise Tech Stack & Integration Ecosystem
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          From high-velocity Next.js 16 storefronts and custom Frappe ERPNext architectures to scalable Dockerized cloud backends with 99.9% uptime SLA.
        </p>
      </div>

      {/* Marquee Wrapper with Edge Masking */}
      <div className="relative mt-12 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Row 1: Leftward Scrolling */}
        <motion.div
          className="flex gap-4 sm:gap-6 py-2 w-max"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {marqueeRowOne.map((item, index) => (
            <TechCard key={`row1-${item.name}-${index}`} item={item} />
          ))}
        </motion.div>

        {/* Row 2: Rightward Scrolling */}
        <motion.div
          className="flex gap-4 sm:gap-6 py-2 w-max mt-3"
          animate={{ x: ["-33.333%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 38,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {marqueeRowTwo.map((item, index) => (
            <TechCard key={`row2-${item.name}-${index}`} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}