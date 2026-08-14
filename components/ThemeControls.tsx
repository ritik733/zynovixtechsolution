"use client";

import ThemeToggle from "@/components/ThemeToggle";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ThemeControls() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 rounded-3xl bg-white/80 p-2 shadow-[0_24px_80px_-42px_rgba(15,23,42,0.9)] backdrop-blur-xl transition-colors duration-300 text-slate-900 dark:bg-slate-950/85 dark:text-white dark:shadow-[0_24px_80px_-42px_rgba(0,0,0,0.7)]">
      <WhatsAppButton />
      <ThemeToggle />
    </div>
  );
}
