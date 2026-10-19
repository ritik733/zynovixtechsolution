"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Pause,
  Play,
} from "lucide-react";

export interface ShowcaseSlide {
  id: number;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  metrics: string;
}

const slides: ShowcaseSlide[] = [
  {
    id: 1,
    title: "Sub-Second Next.js Web Storefronts & Applications",
    badge: "Next.js 16 • Edge Caching",
    tagline: "Core Web Vitals & Headless Commerce",
    description:
      "High-velocity web storefronts and modern web applications engineered with Next.js 16, server-side rendering, and instant edge-cached responses.",
    image: "/images/services/custom-website-development.webp",
    alt: "Modern Next.js 16 web application interface and responsive e-commerce storefront designed by Zynovix",
    href: "/services/custom-website-development",
    metrics: "98+ Lighthouse • 0.8s LCP Speed",
  },
  {
    id: 2,
    title: "Frappe & ERPNext Enterprise Deployment Suite",
    badge: "Frappe Core • ERPNext v15",
    tagline: "Accounting, Ledgers & Live Operations",
    description:
      "End-to-end open source enterprise ERP implementation uniting general ledgers, automated GST invoicing, inventory tracking, and HR payroll.",
    image: "/images/services/frappe-erpnext-solutions.webp",
    alt: "Enterprise Frappe ERPNext dashboard showcasing real-time inventory and financial ledgers developed by Zynovix",
    href: "/services/frappe-erpnext-solutions",
    metrics: "100% Synced • Auto GST e-Invoice",
  },
  {
    id: 3,
    title: "Intelligent Hotel Management & Channel Manager",
    badge: "Hospitality PMS Core",
    tagline: "Zero Double-Bookings Guarantee",
    description:
      "Cloud-native hotel PMS featuring bi-directional OTA synchronization, front-desk point-of-sale, banquet billing, and contactless guest experiences.",
    image: "/images/services/hotel-management-software.webp",
    alt: "Comprehensive hotel management software suite featuring real-time room inventory and POS terminals",
    href: "/services/hotel-management-software",
    metrics: "2-Way OTA Sync • 65% Faster Night Audits",
  },
  {
    id: 4,
    title: "Custom Business Platforms & Workflow Automation",
    badge: "Tailored SaaS • Internal Tools",
    tagline: "Engineered For Specific Bottlenecks",
    description:
      "Custom administrative web software, internal reporting dashboards, and automated business workflows designed for your operational requirements.",
    image: "/images/services/custom-business-software.webp",
    alt: "Custom enterprise business software and automated pipeline dashboard developed by Zynovix",
    href: "/services/custom-business-software",
    metrics: "Role-Based Security • 10x Task Velocity",
  },
  {
    id: 5,
    title: "High-Throughput API Pipelines & Microservices",
    badge: "REST & Webhooks • Fault-Tolerant",
    tagline: "Real-Time System Interconnectivity",
    description:
      "Scalable data connectors synchronizing ERPNext, third-party logistics dispatchers, CRM portals, and multi-currency payment gateways.",
    image: "/images/services/api-system-integrations.webp",
    alt: "3D enterprise API data pipeline connecting microservices and secure payment gateways engineered by Zynovix",
    href: "/services/api-system-integrations",
    metrics: "Sub-50ms Latency • Automated Retry Queues",
  },
  {
    id: 6,
    title: "High-Availability Cloud DevOps & Server Management",
    badge: "AWS & Docker • 24/7 SLA",
    tagline: "Continuous Delivery & Monitoring",
    description:
      "Production-hardened Debian/Ubuntu cloud server architectures, automated encrypted database backups, container orchestration, and 99.98% uptime.",
    image: "/images/services/cloud-hosting-maintenance.webp",
    alt: "Modern cloud DevOps server infrastructure and automated deployment pipelines configured by Zynovix",
    href: "/services/cloud-hosting-maintenance",
    metrics: "99.98% SLA • 24/7 Monitored",
  },
];

export default function ShowcaseSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-play interval (5.5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const slide = slides[current];

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-slate-950 dark:bg-[#040612] border-y border-slate-200/80 dark:border-white/10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Enterprise Solutions Showcase Slider"
    >
      {/* Viewport Height Container (100% full width, edge-to-edge) */}
      <div className="relative w-full h-[540px] sm:h-[580px] lg:h-[620px] overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Full-bleed background image spanning 100vw */}
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority={current === 0}
            />

            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40 lg:bg-gradient-to-r lg:from-slate-950/95 lg:via-slate-950/75 lg:to-slate-950/20 dark:from-[#050816]/95 dark:via-[#050816]/75 dark:to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-slate-950/25 pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Floating Content Layout */}
        <div className="relative mx-auto max-w-7xl h-full px-6 sm:px-8 lg:px-12 flex flex-col justify-between py-10 sm:py-14 z-10 pointer-events-none">
          {/* Top Bar: Badge, Counter, Pause/Play */}
          <div className="flex items-center justify-between pointer-events-auto">
            <div className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-slate-950/80 px-4 py-1.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>{slide.badge}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-xl border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md">
                <span className="text-cyan-400 font-bold">{current + 1}</span> of {slides.length}
              </span>
              <button
                type="button"
                onClick={() => setIsPaused((p) => !p)}
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-slate-950/70 text-white backdrop-blur-md transition hover:border-cyan-400 hover:text-cyan-400"
                aria-label={isPaused ? "Play auto-slide" : "Pause auto-slide"}
                title={isPaused ? "Play" : "Pause"}
              >
                {isPaused ? <Play size={13} /> : <Pause size={13} />}
              </button>
            </div>
          </div>

          {/* Center-Left Content Area */}
          <div className="max-w-2xl text-white pointer-events-auto mt-auto mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400 drop-shadow">
              {slide.tagline}
            </span>

            <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg">
              {slide.title}
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-xl drop-shadow">
              {slide.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href={slide.href}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:scale-105"
              >
                <span>Explore Solution</span>
                <ArrowRight size={16} />
              </Link>
              <div className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-slate-950/80 px-4 py-3 text-xs font-bold text-cyan-300 backdrop-blur-md shadow-md">
                <Sparkles size={14} className="text-cyan-400" />
                <span>{slide.metrics}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Screen-Edge Navigation Chevrons */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-white/20 bg-slate-950/70 text-white backdrop-blur-md transition hover:scale-110 hover:border-cyan-400 hover:bg-slate-900 shadow-2xl"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-white/20 bg-slate-950/70 text-white backdrop-blur-md transition hover:scale-110 hover:border-cyan-400 hover:bg-slate-900 shadow-2xl"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Full-Width 6-Item Bottom Thumbnail Strip (Edge-to-Edge) */}
      <div className="w-full border-t border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y sm:divide-y-0 divide-white/10">
          {slides.map((s, idx) => {
            const isActive = idx === current;
            return (
              <button
                key={`thumb-${s.id}`}
                type="button"
                onClick={() => {
                  setDirection(idx > current ? 1 : -1);
                  setCurrent(idx);
                }}
                className={`relative flex items-center gap-3 p-3 sm:p-4 text-left transition-all ${
                  isActive
                    ? "bg-white/15 dark:bg-white/10 border-b-4 border-cyan-400"
                    : "opacity-60 hover:opacity-100 hover:bg-white/5"
                }`}
              >
                <div className="relative h-11 w-16 flex-shrink-0 overflow-hidden rounded-lg border border-white/20">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 truncate">
                    0{s.id} • {s.badge.split("•")[0]}
                  </p>
                  <p className="text-xs font-semibold text-white truncate mt-0.5">
                    {s.title.split(" ")[0]} {s.title.split(" ")[1]} {s.title.split(" ")[2]}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
