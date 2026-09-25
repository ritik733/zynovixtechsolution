"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import TiltCard from "@/components/three/TiltCard";
import Reveal3D from "@/components/three/Reveal3D";

const projects = [
  {
    title: "Zeno AI Assistant",
    category: "Autonomous AI Agent",
    description:
      "Enterprise local LLM-powered AI assistant for automated reasoning, semantic document QA, and business task orchestration.",
    image: "/images/team/Zeno_ai.png",
  },
  {
    title: "OmniCloud SaaS Dashboard",
    category: "Cloud Architecture",
    description:
      "High-throughput multi-cloud intelligence platform providing real-time telemetry, automated healing, and cost anomaly alerts.",
    image: "",
  },
  {
    title: "Neural Vision QC",
    category: "Computer Vision",
    description:
      "Deep learning edge vision pipeline detecting micro-defects in manufacturing lines with 99.8% precision at millisecond latency.",
    image: "",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="relative overflow-hidden bg-transparent py-28 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 bottom-10 h-96 w-96 rounded-full bg-cyan-600/10 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <Reveal3D rotate={-15}>
          <div className="text-center">
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              Case Studies
            </span>
            <h2 className="mt-6 text-4xl font-extrabold md:text-5xl tracking-tight">
              Featured AI &
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Software Deployments
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-slate-300">
              We design and ship scalable AI solutions, enterprise SaaS
              architectures, and high-performance applications for forward-thinking companies.
            </p>
          </div>
        </Reveal3D>

        {/* Projects Grid with 3D Tilt */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <Reveal3D key={project.title} delay={idx * 0.1} rotate={-20}>
              <TiltCard intensity={18} className="h-full">
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-slate-900/80 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                  {/* Image Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-800/60">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-108"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500/10 via-slate-900 to-violet-600/15">
                        <div className="text-4xl text-cyan-400 font-mono">
                          ⟨/⟩
                        </div>
                      </div>
                    )}
                    {/* Futuristic holographic scanline overlay on hover */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <span
                      className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      {project.category}
                    </span>

                    <h3
                      className="mt-3 text-2xl font-bold text-white transition group-hover:text-cyan-300"
                      style={{ transform: "translateZ(25px)" }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="mt-4 leading-relaxed text-slate-300 text-sm"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      {project.description}
                    </p>

                    <Link
                      href="/portfolio"
                      className="mt-8 inline-flex items-center text-sm font-semibold text-cyan-400 transition hover:text-cyan-300 group-hover:translate-x-1"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      Explore Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </Reveal3D>
          ))}
        </div>

        {/* View All CTA */}
        <Reveal3D delay={0.2} rotate={-10}>
          <div className="mt-16 text-center">
            <Link
              href="/portfolio"
              className="group inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40"
            >
              Browse Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal3D>
      </div>
    </section>
  );
}