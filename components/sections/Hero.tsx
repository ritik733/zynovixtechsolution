"use client";

import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Bot,
  Cpu,
  Database,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900 dark:bg-[#050816] dark:text-white min-h-screen">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-150px] top-[-100px] h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-[-120px] bottom-[-100px] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

        {/* Purple Glow - Centered */}
        <div className="absolute left-1/2 top-0 h-60 w-[900px] -translate-x-1/2 rounded-full bg-violet-600 blur-[160px] opacity-30" />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div className="text-center lg:text-left">
          

            <h1 className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
              Build
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Intelligent AI
              </span>
              Solutions for the Future
            </h1>

            <p className="mt-4 sm:mt-6 md:mt-8 max-w-xl text-base sm:text-lg leading-relaxed sm:leading-8 text-slate-600 dark:text-slate-300 mx-auto lg:mx-0 font-normal">
              We develop AI-powered software, intelligent automation,
              enterprise SaaS, and scalable cloud applications that help
              businesses innovate, automate, and grow faster.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 sm:px-7 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition hover:scale-105 shadow-md shadow-blue-500/20"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>

              <Link
                href="/portfolio"
                className="rounded-xl border border-slate-300 bg-white/80 text-slate-800 px-5 sm:px-7 py-3 sm:py-4 text-sm sm:text-base font-semibold transition hover:border-cyan-500 hover:bg-slate-100 dark:border-slate-700 dark:bg-transparent dark:text-white dark:hover:bg-slate-900"
              >
                View Portfolio
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                ["5+", "Projects"],
                ["98%", "Success"],
                ["2+", "Clients"],
                ["24/7", "Support"],
              ].map(([value, label]) => (
                <div key={label}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-cyan-500 dark:text-cyan-400">
                    {value}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Orbiting Cards Inside Circle */}
          <div className="relative flex justify-center mt-8 lg:mt-0">
            <div className="relative flex h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] md:h-[480px] md:w-[480px] lg:h-[520px] lg:w-[520px] items-center justify-center rounded-full border border-cyan-500/20 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 backdrop-blur-xl">
              {/* Animated Rings */}
              <div className="absolute h-[200px] w-[200px] sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] rounded-full border border-cyan-500/20 animate-pulse" />
              <div className="absolute h-[140px] w-[140px] sm:h-[200px] sm:w-[200px] md:h-[240px] md:w-[240px] rounded-full border border-blue-500/20" />

              {/* AI Agents - Top Left */}
              <div className="absolute top-[2%] left-[2%] sm:top-[4%] sm:left-[4%] md:top-[6%] md:left-[6%] rounded-xl border border-slate-200 bg-white/90 p-2 sm:p-3 backdrop-blur shadow-lg text-slate-900 dark:border-slate-700 dark:bg-slate-900/80 dark:text-white">
                <Bot className="mb-1 sm:mb-2 h-4 w-4 sm:h-5 sm:w-5 text-cyan-500 dark:text-cyan-400" />
                <p className="text-[10px] sm:text-xs font-semibold whitespace-nowrap">AI Agents</p>
              </div>

              {/* Machine Learning - Top Right */}
              <div className="absolute top-[2%] right-[2%] sm:top-[4%] sm:right-[4%] md:top-[6%] md:right-[6%] rounded-xl border border-slate-200 bg-white/90 p-2 sm:p-3 backdrop-blur shadow-lg text-slate-900 dark:border-slate-700 dark:bg-slate-900/80 dark:text-white">
                <Cpu className="mb-1 sm:mb-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                <p className="text-[10px] sm:text-xs font-semibold whitespace-nowrap">Machine Learning</p>
              </div>

              {/* Big Data - Bottom Center */}
              <div className="absolute bottom-[2%] sm:bottom-[4%] md:bottom-[6%] left-1/2 -translate-x-1/2 rounded-xl border border-slate-200 bg-white/90 p-2 sm:p-3 backdrop-blur shadow-lg text-slate-900 dark:border-slate-700 dark:bg-slate-900/80 dark:text-white">
                <Database className="mb-1 sm:mb-2 h-4 w-4 sm:h-5 sm:w-5 text-cyan-500 dark:text-cyan-400 mx-auto" />
                <p className="text-[10px] sm:text-xs font-semibold whitespace-nowrap">Big Data</p>
              </div>

              {/* Center Icon */}
              <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white/95 p-4 sm:p-6 md:p-8 shadow-2xl backdrop-blur-xl z-10 text-slate-900 dark:border-white/10 dark:bg-slate-900/70 dark:text-white">
                <BrainCircuit
                  size={60}
                  className="sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px] mx-auto text-cyan-500 dark:text-cyan-400"
                />
                <p className="mt-3 sm:mt-4 md:mt-6 text-center text-lg sm:text-xl font-bold">
                  AI Core Engine
                </p>
                <p className="mt-1 sm:mt-2 text-center text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                  Intelligent • Scalable • Secure
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <p className="mb-6 sm:mb-8 text-center text-slate-500 dark:text-slate-400 text-xs sm:text-sm uppercase font-semibold tracking-[3px] sm:tracking-[4px]">
            Technologies We Use
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
              "Node.js",
              "AWS",
              "Docker",
              "Azure",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-100/90 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-3 text-[10px] sm:text-xs md:text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}