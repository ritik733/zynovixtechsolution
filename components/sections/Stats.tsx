"use client";

import {
  Briefcase,
  Users,
  Rocket,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "5+",
    title: "Projects Delivered",
  },
  {
    icon: Users,
    value: "2+",
    title: "Global Clients",
  },
  {
    icon: Rocket,
    value: "98%",
    title: "Success Rate",
  },
  {
    icon: Award,
    value: "24/7",
    title: "Technical Support",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-24 dark:bg-[#030712]">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white/90 p-10 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-500 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                  <Icon className="text-cyan-500 dark:text-cyan-400" />
                </div>

                <h2 className="text-5xl font-black bg-gradient-to-r from-orange-500 to-amber-600 dark:from-orange-400 dark:to-amber-500 bg-clip-text text-transparent">
                  {item.value}
                </h2>

                <p className="mt-4 font-medium text-slate-600 dark:text-slate-400">
                  {item.title}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}