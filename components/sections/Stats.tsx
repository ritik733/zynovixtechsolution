"use client";

import { Briefcase, Users, Rocket, Award } from "lucide-react";
import TiltCard from "@/components/three/TiltCard";
import Reveal3D from "@/components/three/Reveal3D";

const stats = [
  {
    icon: Briefcase,
    value: "5+",
    title: "Projects Delivered",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Users,
    value: "2+",
    title: "Global Clients",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: Rocket,
    value: "98%",
    title: "Success Rate",
    color: "from-indigo-400 to-purple-500",
  },
  {
    icon: Award,
    value: "24/7",
    title: "Technical Support",
    color: "from-purple-400 to-cyan-400",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-transparent py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-[800px] rounded-full bg-cyan-600/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, idx) => {
            const Icon = item.icon;

            return (
              <Reveal3D key={item.title} delay={idx * 0.1} rotate={-25}>
                <TiltCard intensity={18} className="h-full">
                  <div className="group relative h-full rounded-3xl border border-slate-800/80 bg-slate-900/60 p-10 text-center backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-900/80 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]">
                    {/* 3D Floating Icon */}
                    <div
                      className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 transition-transform duration-300 group-hover:scale-110"
                      style={{ transform: "translateZ(35px)" }}
                    >
                      <Icon className="text-cyan-400" size={32} />
                    </div>

                    {/* 3D Floating Stat Value */}
                    <h2
                      className={`text-5xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]`}
                      style={{ transform: "translateZ(25px)" }}
                    >
                      {item.value}
                    </h2>

                    {/* Title */}
                    <p
                      className="mt-4 font-medium text-slate-300"
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