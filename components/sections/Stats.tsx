"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Rocket,
  Award,
} from "lucide-react";
import Counter from "@/components/Counter";

const stats = [
  {
    icon: Briefcase,
    endValue: 5,
    suffix: "+",
    title: "Projects Delivered",
  },
  {
    icon: Users,
    endValue: 2,
    suffix: "+",
    title: "Global Clients",
  },
  {
    icon: Rocket,
    endValue: 98,
    suffix: "%",
    title: "Success Rate",
  },
  {
    icon: Award,
    static: "24/7",
    title: "Technical Support",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-24 dark:bg-[#030712]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: "easeOut",
                }}
                className="rounded-3xl border border-slate-200 bg-white/90 p-10 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-500 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 + 0.2 }}
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10"
                >
                  <Icon className="text-cyan-500 dark:text-cyan-400" />
                </motion.div>

                <h2 className="text-5xl font-black bg-gradient-to-r from-orange-500 to-amber-600 dark:from-orange-400 dark:to-amber-500 bg-clip-text text-transparent">
                  {item.static ? (
                    item.static
                  ) : (
                    <Counter
                      end={item.endValue}
                      suffix={item.suffix}
                    />
                  )}
                </h2>

                <p className="mt-4 font-medium text-slate-600 dark:text-slate-400">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}