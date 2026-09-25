"use client";

import Link from "next/link";
import { ArrowRight, Brain, ShieldCheck, Zap } from "lucide-react";
import TiltCard from "@/components/three/TiltCard";
import Reveal3D from "@/components/three/Reveal3D";
import CyberOrb3D from "@/components/three/CyberOrb3D";

const features = [
  {
    icon: Brain,
    title: "AI Innovation",
    desc: "Intelligent AI systems powered by modern Large Language Models and Machine Learning.",
    color: "text-cyan-400",
  },
  {
    icon: Zap,
    title: "Autonomous Workflows",
    desc: "Automate repetitive workflows and boost team productivity with intelligent agents.",
    color: "text-violet-400",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Architecture",
    desc: "Secure, scalable, cloud-native applications designed for mission-critical operations.",
    color: "text-blue-400",
  },
];

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-transparent py-28 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-10 top-1/4 h-80 w-80 rounded-full bg-cyan-600/10 blur-[140px]" />
        <div className="absolute left-10 bottom-1/4 h-80 w-80 rounded-full bg-violet-600/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Column */}
          <div>
            <Reveal3D rotate={-15}>
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                About Zynovix
              </span>

              <h2 className="mt-6 text-4xl font-extrabold md:text-5xl tracking-tight leading-tight">
                AI-First Software
                <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                  Engineering Company
                </span>
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-slate-300">
                We help ambitious startups, enterprises, and growing businesses
                leverage Artificial Intelligence, Machine Learning, Cloud
                Computing, and Custom Web Engineering to build intelligent digital
                products that redefine industries.
              </p>

              <p className="mt-6 text-slate-400">
                From autonomous AI agents and LLM applications to enterprise
                SaaS platforms and cloud-native microservices, we build software
                that drives quantifiable real-world value.
              </p>

              <div className="mt-10">
                <Link
                  href="/about"
                  className="group inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3.5 font-semibold shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40"
                >
                  Discover Our Mission
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal3D>

            {/* Embedded 3D Interactive Cyber Orb Visual */}
            <div className="mt-10 hidden sm:block">
              <Reveal3D delay={0.2} rotate={-10}>
                <div className="h-56 w-full rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md overflow-hidden relative shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                  <div className="absolute top-3 left-4 z-10">
                    <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                      Neural Core Model
                    </p>
                    <p className="text-[10px] text-slate-400">
                      Interactive 3D Quantum Gyroscope
                    </p>
                  </div>
                  <CyberOrb3D className="h-full w-full" />
                </div>
              </Reveal3D>
            </div>
          </div>

          {/* Right Column: 3D Tilt Feature Cards */}
          <div className="grid gap-6">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal3D key={item.title} delay={idx * 0.12} rotate={-25}>
                  <TiltCard intensity={16} className="h-full">
                    <div className="group relative rounded-3xl border border-slate-800/80 bg-slate-900/60 p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-slate-900/80 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]">
                      <div
                        className="mb-5 inline-flex rounded-2xl bg-cyan-500/10 p-3.5 transition-transform duration-300 group-hover:scale-110"
                        style={{ transform: "translateZ(35px)" }}
                      >
                        <Icon className={item.color} size={36} />
                      </div>
                      <h3
                        className="text-2xl font-bold text-white transition group-hover:text-cyan-300"
                        style={{ transform: "translateZ(25px)" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="mt-3 leading-relaxed text-slate-300"
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