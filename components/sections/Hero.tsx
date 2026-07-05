"use client";

import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Bot,
  Cpu,
  Sparkles,
  Database,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-150px] top-[-100px] h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-[-120px] bottom-[-100px] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative w-full px-8 py-28 lg:px-16 xl:px-24">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              <Sparkles size={16} />
              AI • Machine Learning • Automation
            </div>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
              Build
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Intelligent AI
              </span>
              Solutions for the Future
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              We develop AI-powered software, intelligent automation,
              enterprise SaaS, and scalable cloud applications that help
              businesses innovate, automate, and grow faster.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-semibold transition hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/portfolio"
                className="rounded-xl border border-slate-700 px-7 py-4 font-semibold transition hover:border-cyan-500 hover:bg-slate-900"
              >
                View Portfolio
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                ["50+", "Projects"],
                ["98%", "Success"],
                ["20+", "Clients"],
                ["24/7", "Support"],
              ].map(([value, label]) => (
                <div key={label}>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    {value}
                  </h3>
                  <p className="text-sm text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            <div className="relative flex h-[520px] w-[520px] items-center justify-center rounded-full border border-cyan-500/20 bg-gradient-to-br from-blue-600/20 to-cyan-400/20 backdrop-blur-xl">
              <div className="absolute h-80 w-80 rounded-full border border-cyan-500/20 animate-pulse" />

              <div className="absolute h-56 w-56 rounded-full border border-blue-500/20" />

              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl backdrop-blur-xl">
                <BrainCircuit
                  size={110}
                  className="mx-auto text-cyan-400"
                />

                <p className="mt-6 text-center text-xl font-semibold">
                  AI Core Engine
                </p>

                <p className="mt-2 text-center text-sm text-slate-400">
                  Intelligent • Scalable • Secure
                </p>
              </div>

              {/* Floating Cards */}

              <div className="absolute left-0 top-20 rounded-xl border border-slate-700 bg-slate-900/80 p-4 backdrop-blur">
                <Bot className="mb-2 text-cyan-400" />
                <p className="text-sm font-medium">AI Agents</p>
              </div>

              <div className="absolute right-2 top-40 rounded-xl border border-slate-700 bg-slate-900/80 p-4 backdrop-blur">
                <Cpu className="mb-2 text-blue-400" />
                <p className="text-sm font-medium">Machine Learning</p>
              </div>

              <div className="absolute bottom-12 left-16 rounded-xl border border-slate-700 bg-slate-900/80 p-4 backdrop-blur">
                <Database className="mb-2 text-cyan-400" />
                <p className="text-sm font-medium">Big Data</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies */}

        <div className="mt-24">
          <p className="mb-8 text-center text-slate-400 uppercase tracking-[4px]">
            Technologies We Use
          </p>

          <div className="flex flex-wrap justify-center gap-4">
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
                className="rounded-full border border-slate-700 bg-slate-900/70 px-5 py-3 text-sm text-slate-300 backdrop-blur transition hover:border-cyan-500 hover:text-white"
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
<div className="min-h-screen bg-[#060818]">

{/* Purple Glow */}

<div className="absolute left-1/2 top-0 h-60 w-[900px] -translate-x-1/2 rounded-full bg-violet-600 blur-[160px] opacity-30"></div>

</div>