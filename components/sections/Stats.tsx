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
    value: "50+",
    title: "Projects Delivered",
  },
  {
    icon: Users,
    value: "20+",
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
    <section className="bg-[#030712] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="glass rounded-3xl p-10 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                  <Icon className="text-cyan-400" />
                </div>

                <h2 className="text-5xl font-black gradient-text">
                  {item.value}
                </h2>

                <p className="mt-4 text-slate-400">
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