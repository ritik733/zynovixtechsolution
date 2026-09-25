"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import TiltCard from "@/components/three/TiltCard";
import Reveal3D from "@/components/three/Reveal3D";
import Portal3D from "@/components/three/Portal3D";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-transparent py-16 sm:py-24 md:py-32 text-white">
      {/* 3D Warp Portal / Vortex in Background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10 opacity-75">
        <div className="h-[280px] w-[280px] sm:h-[450px] sm:w-[450px] md:h-[650px] md:w-[650px] max-w-full">
          <Portal3D className="h-full w-full" />
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal3D rotate={-20}>
          <TiltCard intensity={10} glare={true}>
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-cyan-500/30 bg-slate-900/80 p-6 sm:p-12 md:p-16 text-center backdrop-blur-xl shadow-[0_0_60px_rgba(34,211,238,0.2)]">
              {/* Inner ambient glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-violet-600/10" />

              <span
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                style={{ transform: "translateZ(35px)" }}
              >
                <Sparkles size={15} />
                Let's Scale Your Business Together
              </span>

              <h2
                className="mt-6 sm:mt-8 text-2xl min-[400px]:text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight"
                style={{ transform: "translateZ(30px)" }}
              >
                Ready to Scale &amp;
                <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                  Automate Operations?
                </span>
              </h2>

              <p
                className="mx-auto mt-4 sm:mt-6 max-w-2xl text-xs sm:text-base md:text-lg leading-relaxed text-slate-300"
                style={{ transform: "translateZ(20px)" }}
              >
                Whether you need a custom-built website, an enterprise ERP system, or automated
                business workflows, we provide the architecture and engineering power to elevate your business.
              </p>

              <div
                className="mt-8 sm:mt-10 flex flex-col min-[450px]:flex-row justify-center gap-3 sm:gap-4 w-full"
                style={{ transform: "translateZ(25px)" }}
              >
                <Link
                  href="/contact"
                  className="group flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 px-6 sm:px-8 py-3.5 sm:py-4 font-semibold shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/50 text-sm sm:text-base w-full min-[450px]:w-auto min-h-[44px]"
                >
                  Book Free System Audit
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/services"
                  className="flex items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/60 backdrop-blur-md px-6 sm:px-8 py-3.5 sm:py-4 font-semibold transition hover:border-cyan-400 hover:bg-slate-800/80 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] text-sm sm:text-base w-full min-[450px]:w-auto min-h-[44px]"
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