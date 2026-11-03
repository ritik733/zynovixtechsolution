"use client";

import ThemeToggle from "@/components/ThemeToggle";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ThemeControls() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 sm:gap-3 rounded-2xl sm:rounded-3xl bg-white/80 p-1.5 sm:p-2 shadow-[0_24px_80px_-42px_rgba(15,23,42,0.9)] backdrop-blur-xl transition-colors duration-300 text-slate-900 dark:bg-slate-950/85 dark:text-white dark:shadow-[0_24px_80px_-42px_rgba(0,0,0,0.7)] [contain:layout_style]">
      <WhatsAppButton />
      <ThemeToggle />
    </div>
  );
}
