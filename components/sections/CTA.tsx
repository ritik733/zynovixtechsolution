"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import TiltCard from "@/components/three/TiltCard";
import Reveal3D from "@/components/three/Reveal3D";
import Portal3D from "@/components/three/Portal3D";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-transparent py-32 text-white">
      {/* 3D Warp Portal / Vortex in Background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10 opacity-75">
        <div className="h-[550px] w-[550px] sm:h-[700px] sm:w-[700px]">
          <Portal3D className="h-full w-full" />
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal3D rotate={-20}>
          <TiltCard intensity={10} glare={true}>
            <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-slate-900/80 p-10 sm:p-16 text-center backdrop-blur-xl shadow-[0_0_60px_rgba(34,211,238,0.2)]">
              {/* Inner ambient glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-violet-600/10" />

              <span
                className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-xs sm:text-sm font-semibold text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                style={{ transform: "translateZ(35px)" }}
              >
                <Sparkles size={16} />
                Let's Engineer the Future Together
              </span>

              <h2
                className="mt-8 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight"
                style={{ transform: "translateZ(30px)" }}
              >
                Ready to Build
                <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                  Your Next AI Product?
                </span>
              </h2>

              <p
                className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300"
                style={{ transform: "translateZ(20px)" }}
              >
                Whether you are launching an AI startup or modernizing enterprise
                infrastructure, we provide the architecture, models, and engineering
                power to bring your vision to life.
              </p>

              <div
                className="mt-10 flex flex-wrap justify-center gap-4"
                style={{ transform: "translateZ(25px)" }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 px-8 py-4 font-semibold shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/50"
                >
                  Book Free Architecture Review
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/services"
                  className="rounded-xl border border-slate-700/80 bg-slate-900/60 backdrop-blur-md px-8 py-4 font-semibold transition hover:border-cyan-400 hover:bg-slate-800/80 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                >
                  Explore Capabilities
                </Link>
              </div>
            </div>
          </TiltCard>
        </Reveal3D>
      </div>
    </section>
  );
}