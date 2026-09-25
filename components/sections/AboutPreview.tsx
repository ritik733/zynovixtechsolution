"use client";

import Link from "next/link";
import { ArrowRight, Database, ShieldCheck, Zap, Sparkles } from "lucide-react";
import TiltCard from "@/components/three/TiltCard";
import Reveal3D from "@/components/three/Reveal3D";
import CyberOrb3D from "@/components/three/CyberOrb3D";

const features = [
  {
    icon: Database,
    title: "Modular ERP Software",
    desc: "Custom ERP systems unifying inventory, accounting, order fulfillment, and multi-branch operations.",
    color: "text-cyan-400",
  },
  {
    icon: Zap,
    title: "System & Workflow Automation",
    desc: "Automate repetitive manual workflows, invoicing, data sync, and operational pipelines to eliminate bottlenecks.",
    color: "text-emerald-400",
  },
  {
    icon: ShieldCheck,
    title: "Custom Web & Cloud Platforms",
    desc: "High-performance, secure digital platforms built with Next.js, React, and modern cloud architecture.",
    color: "text-blue-400",
  },
];

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-transparent py-16 sm:py-24 md:py-28 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-10 top-1/4 h-72 sm:h-80 w-72 sm:w-80 rounded-full bg-cyan-600/10 blur-[140px]" />
        <div className="absolute left-10 bottom-1/4 h-72 sm:h-80 w-72 sm:w-80 rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
          {/* Left Column */}
          <div>
            <Reveal3D rotate={-15}>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                <Sparkles size={14} />
                About Zynovix Tech Solutions
              </span>

              <h2 className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Digital Engineering &amp;
                <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                  Business Solutions Partner
                </span>
              </h2>

              <p className="mt-5 sm:mt-8 text-sm sm:text-base md:text-lg leading-relaxed text-slate-300">
                We help ambitious businesses and growing organizations leverage modern
                web technologies, tailored ERP platforms, and end-to-end system
                automation to streamline their day-to-day operations and accelerate growth.
              </p>

              <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed">
                From scalable corporate websites and client portals to comprehensive
                ERP integrations and automated data pipelines, we build reliable software
                that drives measurable business value.
              </p>

              <div className="mt-7 sm:mt-10">
                <Link
                  href="/about"
                  className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 sm:px-7 py-3 sm:py-3.5 font-semibold shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40 text-sm sm:text-base w-full min-[420px]:w-auto min-h-[44px]"
                >
                  Discover Our Mission
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal3D>

            {/* Embedded 3D Interactive Visual */}
            <div className="mt-8 sm:mt-10 block">
              <Reveal3D delay={0.2} rotate={-10}>
                <div className="h-44 sm:h-56 w-full rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md overflow-hidden relative shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                  <div className="absolute top-3 left-4 z-10">
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-cyan-400">
                      Modular Architecture
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-slate-400">
                      Interactive 3D ERP &amp; Automation Stack
                    </p>
                  </div>
                  <CyberOrb3D className="h-full w-full" />
                </div>
              </Reveal3D>
            </div>
          </div>

          {/* Right Column: 3D Tilt Feature Cards */}
          <div className="grid gap-4 sm:gap-6">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal3D key={item.title} delay={idx * 0.1} rotate={-20}>
                  <TiltCard intensity={14} className="h-full">
                    <div className="group relative rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-slate-900/60 p-5 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-slate-900/80 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]">
                      <div
                        className="mb-4 sm:mb-5 inline-flex rounded-xl sm:rounded-2xl bg-cyan-500/10 p-2.5 sm:p-3.5 transition-transform duration-300 group-hover:scale-110"
                        style={{ transform: "translateZ(35px)" }}
                      >
                        <Icon className={item.color} size={28} />
                      </div>
                      <h3
                        className="text-xl sm:text-2xl font-bold text-white transition group-hover:text-cyan-300"
                        style={{ transform: "translateZ(25px)" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="mt-2 sm:mt-3 leading-relaxed text-xs sm:text-sm md:text-base text-slate-300"
                        style={{ transform: "translateZ(15px)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </TiltCard>
                </Reveal3D>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}