import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Users, Zap } from "lucide-react";
import { AmbientAtmosphereGlow } from "@/components/ui/TechPattern";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900 py-24 dark:bg-[#050816] dark:text-white">
      {/* Decorative Atmosphere Glow */}
      <AmbientAtmosphereGlow variant="violet-cyan" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-12">

          {/* Left - Narrative & Core Strengths (5 cols) */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              <Zap size={14} /> Who We Are
            </span>

            <h2 className="mt-5 text-3xl font-extrabold md:text-5xl tracking-tight leading-[1.15]">
              Modern Web & ERP{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
                Software Development
              </span>
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              We empower startups, hotels, and established enterprises to modernize operations
              and accelerate digital revenue through high-velocity web engineering and robust Frappe ERPNext deployments.
            </p>

            <div className="mt-8 space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-cyan-500 flex-shrink-0" />
                <span>Tailored architecture aligned directly with your business bottlenecks</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-cyan-500 flex-shrink-0" />
                <span>Zero vendor lock-in with open-source Frappe & Next.js frameworks</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-cyan-500 flex-shrink-0" />
                <span>Direct collaboration with senior engineers & architects</span>
              </div>
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3.5 font-semibold text-white transition hover:scale-105 shadow-md shadow-blue-500/20"
            >
              Explore Our Story & Values
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Right - High-Impact Team Showcase Visual (7 cols) */}
          <div className="relative lg:col-span-7">
            {/* Visual Container Frame with Studio Glow */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/60 p-2 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-900">
                <Image
                  src="/images/about/engineering-pod-sprint.webp"
                  alt="Zynovix engineering pod executing live agile sprint with dual ultrawide displays showing TypeScript Next.js code and sprint Kanban board"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                {/* Gradient Rim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Badge Top Left */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-slate-900/80 px-3.5 py-1.5 backdrop-blur-md text-xs font-semibold text-white shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Engineering Pod • Live Sprints</span>
                </div>

                {/* Floating Metric Badge Bottom Right */}
                <div className="absolute bottom-4 right-4 max-w-[280px] rounded-2xl border border-cyan-500/30 bg-slate-950/85 p-3.5 backdrop-blur-md shadow-xl text-white">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <ShieldCheck size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider">Enterprise Guarantee</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-300 font-medium leading-snug">
                    99.4% Client Satisfaction & Zero-Downtime Data Migration Protocols
                  </p>
                </div>
              </div>
            </div>

            {/* Micro Feature Triad below Image */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-slate-200/80 bg-white/80 p-3 text-center dark:border-slate-800 dark:bg-slate-900/60 shadow-sm">
                <p className="text-xs font-bold text-slate-900 dark:text-white">Next.js 16 SSR</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Edge-Cached Speed</p>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white/80 p-3 text-center dark:border-slate-800 dark:bg-slate-900/60 shadow-sm">
                <p className="text-xs font-bold text-slate-900 dark:text-white">Frappe ERPNext</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Custom Accounting & CRM</p>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white/80 p-3 text-center dark:border-slate-800 dark:bg-slate-900/60 shadow-sm">
                <p className="text-xs font-bold text-slate-900 dark:text-white">Hotel PMS Core</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">0 Overbookings</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}