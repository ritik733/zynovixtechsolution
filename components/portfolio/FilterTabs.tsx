"use client";

import { motion } from "framer-motion";
import type { PortfolioCategory } from "@/data/portfolio";

type Filter = "All" | PortfolioCategory;

interface Props {
  active: Filter;
  onChange: (filter: Filter) => void;
  counts: Record<Filter, number>;
}

const filters: Filter[] = ["All", "ERP", "Web App", "Custom Software"];

export default function FilterTabs({ active, onChange, counts }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {filters.map((filter) => {
        const isActive = active === filter;

        return (
          <button
            key={filter}
            onClick={() => onChange(filter)}
            className={`relative rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
              isActive
                ? "text-white"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 shadow-md shadow-violet-500/20"
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {filter}
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  isActive
                    ? "bg-white/20"
                    : "bg-slate-200/70 dark:bg-slate-800"
                }`}
              >
                {counts[filter]}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}