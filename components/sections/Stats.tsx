"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Rocket,
  Award,
} from "lucide-react";
import Counter from "@/components/Counter";
import { AmbientAtmosphereGlow } from "@/components/ui/TechPattern";

const stats = [
  {
    icon: Briefcase,
    endValue: 5,
    suffix: "+",
    title: "Projects Delivered",
    subtext: "Production Web & ERP Suites",
  },
  {
    icon: Users,
    endValue: 8,
    suffix: "+",
    title: "Global Clients",
    subtext: "Hospitality & Enterprise Partners",
  },
  {
    icon: Rocket,
    endValue: 98,
    suffix: "%",
    title: "Success Rate",
    subtext: "On-Time Sprint Deliveries",
  },
  {
    icon: Award,
    static: "24/7",
    title: "Technical Support",
    subtext: "Dedicated Emergency SLA",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-[#050816]">
      {/* Pattern decor */}
      <AmbientAtmosphereGlow variant="cyan-blue" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                className="group relative rounded-3xl border border-slate-200/90 bg-white/90 p-8 text-center shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 transition-transform group-hover:scale-110">
                  <Icon size={28} />
                </div>

                <div className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                  {item.static ? (
                    item.static
                  ) : (
                    <Counter end={item.endValue!} suffix={item.suffix} />
                  )}
                </div>

                <h3 className="mt-3 text-base font-bold text-slate-800 dark:text-slate-200">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {item.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}