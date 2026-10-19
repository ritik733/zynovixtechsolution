"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Lock, ShieldCheck } from "lucide-react";
import ProjectCard from "@/components/portfolio/ProjectCard";
import FilterTabs from "@/components/portfolio/FilterTabs";
import {
  portfolioProjects,
  type PortfolioCategory,
} from "@/data/portfolio";
import { HeroAtmosphereGlow } from "@/components/ui/TechPattern";

type Filter = "All" | PortfolioCategory;

export default function PortfolioPage() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return portfolioProjects;
    return portfolioProjects.filter((p) => p.category === filter);
  }, [filter]);

  const counts = useMemo(() => {
    return {
      All: portfolioProjects.length,
      ERP: portfolioProjects.filter((p) => p.category === "ERP").length,
      "Web App": portfolioProjects.filter((p) => p.category === "Web App").length,
      "Custom Software": portfolioProjects.filter((p) => p.category === "Custom Software").length,
    };
  }, []);

  return (
    <main className="relative overflow-hidden bg-white text-slate-900 min-h-screen dark:bg-[#050816] dark:text-white">
      {/* Background Decor - Exact match to Homepage Hero */}
      <HeroAtmosphereGlow />

      <section className="relative pt-32 pb-12 text-center md:pt-40 md:pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-4">
            <Sparkles size={14} /> Production Deployments & Case Studies
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            Engineered For Scale. <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Proven in Production.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed"
          >
            Explore our battle-tested portfolio across custom Frappe ERPNext implementations, sub-second Next.js web applications, and enterprise automation engines.
          </motion.p>
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <FilterTabs active={filter} onChange={setFilter} counts={counts} />
        </div>
      </section>

      <section className="py-8 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          {filtered.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-slate-500 dark:text-slate-400 py-20"
            >
              No projects in this category yet. Check back soon!
            </motion.p>
          ) : (
            <motion.div
              layout
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="relative py-20 pb-28 text-center">
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-white/95 p-8 sm:p-14 text-center backdrop-blur-2xl shadow-2xl text-slate-900 dark:border-violet-500/30 dark:bg-slate-900/80 dark:text-white dark:shadow-[0_20px_60px_rgba(110,80,255,0.15)]">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              <Sparkles size={14} /> Turn Ideas Into Production Reality
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Have an Enterprise Project in Mind?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
              Whether you need an enterprise Frappe ERPNext implementation, a custom Next.js web application, or hospitality software, our engineers are ready to build.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white transition hover:scale-105 shadow-lg shadow-cyan-500/25 text-base"
              >
                Let&apos;s Build Together
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
                <span>Strict NDA & Code IP Ownership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span>Zero-Downtime Data Migration</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}