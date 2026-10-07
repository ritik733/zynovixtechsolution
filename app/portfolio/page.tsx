"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import ProjectCard from "@/components/portfolio/ProjectCard";
import FilterTabs from "@/components/portfolio/FilterTabs";
import {
  portfolioProjects,
  type PortfolioCategory,
} from "@/data/portfolio";

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
    <main className="bg-white text-slate-900 min-h-screen dark:bg-[#050816] dark:text-white">
      <Navbar />

      <section className="pt-32 pb-12 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold"
          >
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Portfolio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-300 font-medium"
          >
            Real projects. Real results. Explore our work across ERP systems,
            web applications, and custom software.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-sm uppercase font-semibold tracking-[4px] text-slate-500 dark:text-slate-400"
          >
            ERP • Web Apps • Custom Software
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

      <section className="py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold"
          >
            Have a Project in Mind?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-slate-600 dark:text-slate-300 font-medium"
          >
            We'd love to help turn your ideas into reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 font-semibold text-white transition hover:scale-105 shadow-md shadow-blue-500/20"
            >
              Let's Talk
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}