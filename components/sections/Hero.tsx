"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Bot,
  Cpu,
  Database,
  Sparkles,
  BrainCircuit,
} from "lucide-react";
import TiltCard from "@/components/three/TiltCard";
import HeroScene from "@/components/three/HeroScene";

/* Text elements animate in sequentially with 3D perspective entry */
const fadeUp = {
  hidden: { opacity: 0, y: 35, z: -60, rotateX: -20, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    z: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.15 * i,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent text-white min-h-[calc(100vh-80px)]">
      {/* Subtle depth lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-150px] top-[-100px] h-72 sm:h-96 w-72 sm:w-96 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute right-[-120px] bottom-[-100px] h-72 sm:h-96 w-72 sm:w-96 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-60 w-[900px] -translate-x-1/2 rounded-full bg-violet-600 blur-[160px] opacity-25" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8 lg:px-12 pt-24 pb-14 sm:pt-32 sm:pb-20 md:py-24 lg:py-28">
        <div className="grid items-center gap-10 lg:gap-20 lg:grid-cols-2">
          {/* ===================== LEFT ===================== */}
          <div className="text-center lg:text-left" style={{ perspective: 1000 }}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-cyan-300 mx-auto lg:mx-0 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
            >
              <Sparkles size={15} />
              AI • Machine Learning • Automation
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-5 sm:mt-8 text-[28px] min-[380px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.15] sm:leading-tight tracking-tight"
            >
              Build
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.3)]">
                Intelligent AI
              </span>
              Solutions for the Future
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-4 sm:mt-6 md:mt-8 max-w-xl text-sm sm:text-lg leading-relaxed sm:leading-8 text-slate-300 mx-auto lg:mx-0"
            >
              We develop AI-powered software, intelligent automation,
              enterprise SaaS, and scalable cloud applications that help
              businesses innovate, automate, and grow faster.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-7 sm:mt-10 flex flex-col min-[420px]:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="group relative flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40 w-full min-[420px]:w-auto min-h-[44px]"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="flex items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/60 backdrop-blur-md px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold transition hover:border-cyan-400 hover:bg-slate-800/80 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] w-full min-[420px]:w-auto min-h-[44px]"
              >
                View Portfolio
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6"
            >
              {[
                ["5+", "Projects"],
                ["98%", "Success"],
                ["2+", "Clients"],
                ["24/7", "Support"],
              ].map(([value, label]) => (
                <TiltCard key={label} intensity={8} glare={false}>
                  <div className="rounded-xl border border-slate-800/70 bg-slate-900/40 p-2.5 sm:p-3 text-center backdrop-blur-sm transition hover:border-cyan-500/40">
                    <h3 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {value}
                    </h3>
                    <p className="text-[11px] sm:text-sm text-slate-400">{label}</p>
                  </div>
                </TiltCard>
              ))}
            </motion.div>
          </div>

          {/* ===================== RIGHT — 3D Scene ===================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15, z: -100 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center mt-6 lg:mt-0"
            style={{ transformPerspective: 1200 }}
          >
            <div className="relative h-[270px] w-[270px] min-[360px]:h-[300px] min-[360px]:w-[300px] min-[420px]:h-[340px] min-[420px]:w-[340px] sm:h-[440px] sm:w-[440px] md:h-[500px] md:w-[500px] lg:h-[560px] lg:w-[560px] max-w-full">
              {/* Soft glow rings behind canvas */}
              <div className="pointer-events-none absolute inset-0 rounded-full border border-cyan-500/20 animate-pulse" />
              <div className="pointer-events-none absolute inset-8 rounded-full border border-purple-500/20" />

              {/* The 3D scene */}
              <HeroScene />

              {/* 3D Floating interactive chips with true 3D tilt */}
              <div className="pointer-events-auto absolute inset-0">
                {/* AI Agents — top left */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[2%] left-[2%] sm:top-[4%] sm:left-[4%] md:top-[6%] md:left-[6%] scale-[0.82] min-[420px]:scale-90 sm:scale-100 origin-top-left"
                >
                  <TiltCard intensity={25}>
                    <div className="rounded-xl border border-cyan-500/40 bg-slate-900/85 p-2 sm:p-3 backdrop-blur-md shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                      <Bot className="mb-1 sm:mb-2 h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                      <p className="text-[10px] sm:text-xs font-medium whitespace-nowrap text-cyan-200">
                        AI Agents
                      </p>
                    </div>
                  </TiltCard>
                </motion.div>

                {/* Machine Learning — top right */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute top-[2%] right-[2%] sm:top-[4%] sm:right-[4%] md:top-[6%] md:right-[6%] scale-[0.82] min-[420px]:scale-90 sm:scale-100 origin-top-right"
                >
                  <TiltCard intensity={25}>
                    <div className="rounded-xl border border-violet-500/40 bg-slate-900/85 p-2 sm:p-3 backdrop-blur-md shadow-[0_0_25px_rgba(168,85,247,0.25)]">
                      <Cpu className="mb-1 sm:mb-2 h-4 w-4 sm:h-5 sm:w-5 text-violet-400" />
                      <p className="text-[10px] sm:text-xs font-medium whitespace-nowrap text-violet-200">
                        Machine Learning
                      </p>
                    </div>
                  </TiltCard>
                </motion.div>

                {/* Big Data — bottom center */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-[2%] sm:bottom-[4%] md:bottom-[6%] left-1/2 -translate-x-1/2 scale-[0.82] min-[420px]:scale-90 sm:scale-100 origin-bottom"
                >
                  <TiltCard intensity={25}>
                    <div className="rounded-xl border border-blue-500/40 bg-slate-900/85 p-2 sm:p-3 backdrop-blur-md shadow-[0_0_25px_rgba(59,130,246,0.25)] text-center">
                      <Database className="mb-1 sm:mb-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mx-auto" />
                      <p className="text-[10px] sm:text-xs font-medium whitespace-nowrap text-blue-200">
                        Big Data
                      </p>
                    </div>
                  </TiltCard>
                </motion.div>

                {/* Label under 3D */}
                <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none w-max max-w-full px-2">
                  <p className="text-xs sm:text-base font-semibold text-white flex items-center gap-1.5 sm:gap-2 justify-center">
                    <BrainCircuit className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-400" />
                    Interactive AI Core
                  </p>
                  <p className="mt-0.5 text-[10px] sm:text-xs text-slate-400">
                    Real-time WebGL Engine • Scroll & Mouse Reactive
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===================== TECHNOLOGIES ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 sm:mt-20 md:mt-24"
        >
          <p className="mb-5 sm:mb-8 text-center text-slate-400 text-xs sm:text-sm uppercase tracking-[2.5px] sm:tracking-[4px]">
            Technologies We Engineer With
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {[
              "OpenAI",
              "LangChain",
              "Python",
              "TensorFlow",
              "PyTorch",
              "Next.js",
              "React",
              "Three.js",
              "Node.js",
              "AWS",
              "Docker",
              "Azure",
            ].map((tech) => (
              <span
                key={tech}
                className="group relative cursor-default rounded-full border border-slate-700/60 bg-slate-900/60 px-3 sm:px-5 py-1.5 sm:py-2.5 text-[10px] sm:text-xs md:text-sm text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_18px_rgba(34,211,238,0.25)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}