"use client";

import { Briefcase, Users, Rocket, Award } from "lucide-react";
import TiltCard from "@/components/three/TiltCard";
import Reveal3D from "@/components/three/Reveal3D";

const stats = [
  {
    icon: Briefcase,
    value: "50+",
    title: "Projects Delivered",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Rocket,
    value: "99.9%",
    title: "System Reliability",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: Users,
    value: "100+",
    title: "Workflows Automated",
    color: "from-indigo-400 to-emerald-400",
  },
  {
    icon: Award,
    value: "24/7",
    title: "Enterprise Support",
    color: "from-emerald-400 to-cyan-400",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-transparent py-12 sm:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-[800px] rounded-full bg-cyan-600/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;

            return (
              <Reveal3D key={item.title} delay={idx * 0.08} rotate={-20}>
                <TiltCard intensity={16} className="h-full">
                  <div className="group relative h-full rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-7 lg:p-10 text-center backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-900/80 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]">
                    {/* 3D Floating Icon */}
                    <div
                      className="mx-auto mb-3 sm:mb-6 flex h-11 w-11 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-cyan-500/10 transition-transform duration-300 group-hover:scale-110"
                      style={{ transform: "translateZ(35px)" }}
                    >
                      <Icon className="text-cyan-400 h-5 w-5 sm:h-8 sm:w-8" />
                    </div>

                    {/* 3D Floating Stat Value */}
                    <h2
                      className={`text-2xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]`}
                      style={{ transform: "translateZ(25px)" }}
                    >
                      {item.value}
                    </h2>

                    {/* Title */}
                    <p
                      className="mt-1.5 sm:mt-4 text-xs sm:text-sm lg:text-base font-medium text-slate-300"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      {item.title}
                    </p>
                  </div>
                </TiltCard>
              </Reveal3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}