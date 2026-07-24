"use client";

import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[180px]" />
        <div className="absolute left-20 top-10 h-60 w-60 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-20 bottom-10 h-60 w-60 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">

        <div className="overflow-hidden rounded-[36px] border border-violet-500/20 bg-gradient-to-br from-[#0F1438]/90 to-[#081020]/90 p-10 md:p-16 backdrop-blur-2xl">

          <div className="text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-600 to-blue-500 shadow-[0_0_40px_rgba(139,92,246,0.45)]">
              <Briefcase className="h-10 w-10 text-white" />
            </div>

            <h2 className="mt-8 text-4xl font-bold text-white md:text-6xl">
              Ready to Build
              <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                The Future?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Join a passionate team creating AI-powered solutions,
              scalable cloud platforms, and next-generation digital
              products for businesses around the world.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">

              <Link
                href="#application-form"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105"
              >
                Apply Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="#open-positions"
                className="inline-flex items-center justify-center rounded-xl border border-violet-500/30 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                View Open Positions
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}