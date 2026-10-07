"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { PortfolioProject } from "@/data/portfolio";

const categoryStyles: Record<string, string> = {
  ERP: "text-violet-600 dark:text-violet-400 border-violet-500/30 bg-violet-500/10",
  "Web App": "text-cyan-600 dark:text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  "Custom Software": "text-orange-600 dark:text-orange-400 border-orange-500/30 bg-orange-500/10",
};

export default function ProjectCard({ project }: { project: PortfolioProject }) {
  const accent = categoryStyles[project.category] || categoryStyles["Web App"];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group rounded-3xl border border-slate-200 bg-white/90 shadow-sm overflow-hidden hover:border-cyan-500 dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-none"
    >
      <div className="relative h-52 w-full overflow-hidden bg-slate-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {project.featured && (
          <span className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-900">
            ⭐ Featured
          </span>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3">
          <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${accent}`}>
            {project.category}
          </span>
          {project.client && (
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {project.client}
            </span>
          )}
        </div>

        <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-slate-600 dark:text-slate-300 leading-7">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center font-medium text-cyan-600 dark:text-cyan-400 transition group-hover:translate-x-2">
          View Project
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </motion.div>
  );
}