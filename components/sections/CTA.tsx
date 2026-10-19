import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Lock, Sparkles } from "lucide-react";
import { AmbientAtmosphereGlow } from "@/components/ui/TechPattern";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-28 text-slate-900 dark:bg-[#050816] dark:text-white">
      {/* Background Decor */}
      <AmbientAtmosphereGlow variant="violet-cyan" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-white/95 p-8 sm:p-14 text-center backdrop-blur-2xl shadow-2xl text-slate-900 dark:border-violet-500/30 dark:bg-slate-900/80 dark:text-white dark:shadow-[0_20px_60px_rgba(110,80,255,0.15)]">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            <Sparkles size={14} /> Let's Build Together
          </div>

          <h2 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Ready to Upgrade Your{" "}
            <span className="block bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mt-2">
              Web & ERP Systems?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            Whether you need a high-velocity Next.js 16 storefront, a customized Frappe ERPNext deployment, or an intelligent hotel management platform, our senior engineers are ready to build.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white hover:scale-105 transition shadow-lg shadow-blue-500/25 text-base"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-slate-300 bg-white/80 text-slate-800 px-8 py-4 font-semibold transition hover:border-cyan-500 hover:bg-slate-100 dark:border-slate-700 dark:bg-transparent dark:text-white dark:hover:bg-slate-800 text-base"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust Guarantees Row */}
          <div className="mt-10 pt-8 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <Zap size={14} className="text-cyan-500" />
              <span>&lt; 24-Hour Discovery Response</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock size={14} className="text-blue-500" />
              <span>Strict NDA & 100% Code IP Ownership</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-500" />
              <span>Zero-Downtime Migration Protocols</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}