"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ProjectCard from "@/components/portfolio/ProjectCard";
import FilterTabs from "@/components/portfolio/FilterTabs";
import type { PortfolioProject, PortfolioCategory } from "@/data/portfolio";

type Filter = "All" | PortfolioCategory;

interface PortfolioClientProps {
  projects: PortfolioProject[];
}

export default function PortfolioClient({ projects }: PortfolioClientProps) {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter, projects]);

  const counts = useMemo(() => {
    return {
      All: projects.length,
      ERP: projects.filter((p) => p.category === "ERP").length,
      "Web App": projects.filter((p) => p.category === "Web App").length,
      "Custom Software": projects.filter((p) => p.category === "Custom Software").length,
    };
  }, [projects]);

  return (
    <>
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
            Engineered For Scale.{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Proven in Production.
            </span>
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
    </>
  );
}
