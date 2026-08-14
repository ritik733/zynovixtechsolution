"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  if (!mounted) {
    return (
      <div className="h-12 w-12 rounded-full border border-slate-200/80 bg-white/80 dark:border-slate-700/70 dark:bg-slate-900/80 shadow-md" />
    );
  }

  return (
    <div className="relative group">
      <button
        type="button"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-slate-100 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-amber-400"
        aria-label={isDark ? "Switch to Light theme" : "Switch to Dark theme"}
        title={isDark ? "Switch to Light theme" : "Switch to Dark theme"}
      >
        {isDark ? (
          <Sun className="h-5 w-5 text-amber-400 transition-transform duration-300 group-hover:rotate-45" />
        ) : (
          <Moon className="h-5 w-5 text-violet-600 transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </button>

      <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 dark:bg-slate-100 dark:text-slate-900">
        {isDark ? "Dark Mode (Click for Light)" : "Light Mode (Click for Dark)"}
      </span>
    </div>
  );
}

