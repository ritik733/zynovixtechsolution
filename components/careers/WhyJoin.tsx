"use client";

import Image from "next/image";
import {
  Rocket,
  BrainCircuit,
  GraduationCap,
  Users,
  Sparkles,
} from "lucide-react";
import { TechDotGrid, AmbientAtmosphereGlow } from "@/components/ui/TechPattern";

const reasons = [
  {
    icon: Rocket,
    title: "Innovation First",
    description:
      "Work on cutting-edge cloud architectures, Frappe frameworks, and next-generation Next.js applications that solve real enterprise problems.",
  },
  {
    icon: BrainCircuit,
    title: "Continuous Learning",
    description:
      "Learn directly alongside senior architects, explore emerging full-stack paradigms, and grow your engineering and leadership skills.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Be part of an open, supportive team where technical autonomy is encouraged and everyone has a voice in architectural decisions.",
  },
  {
    icon: GraduationCap,
    title: "Career Growth",
    description:
      "Take ownership of critical software modules, lead client deliveries, and accelerate your career in a rapidly scaling digital consultancy.",
  },
];

export default function WhyJoin() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Pattern decor */}
      <TechDotGrid opacity={0.035} />
      <AmbientAtmosphereGlow variant="violet-cyan" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-300">
            <Sparkles size={14} /> Culture & Opportunity
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            More Than Just A Job — Build Meaningful Software
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            At Zynovix, you will work with passionate software engineers,
            modern cloud platforms, and mission-critical client projects that challenge you
            to level up every single sprint.
          </p>
        </div>

        {/* Culture Visual Showcase Banner */}
        <div className="mb-16 relative overflow-hidden rounded-3xl border border-violet-500/30 bg-white/60 p-3 shadow-2xl backdrop-blur-xl dark:border-violet-500/20 dark:bg-slate-900/60">
          <div className="relative aspect-[21/9] min-h-[260px] w-full overflow-hidden rounded-2xl bg-slate-950">
            <Image
              src="/images/about/team-culture-careers.webp"
              alt="Dynamic and collaborative software engineering team smiling and working together at a modern wooden desk in sunlit tech studio"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 max-w-lg text-white">
              <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold text-cyan-300 border border-cyan-500/30">
                Team Spirit & Craftsmanship
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold mt-2">
                Where Ambition Meets Engineering Excellence
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Flexible work culture, high-end equipment, and direct impact on high-growth businesses.
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200/90 bg-white/90 p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/10 dark:border-slate-800 dark:bg-slate-900/60"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-500 transition-transform duration-300 group-hover:scale-110 text-white shadow-md shadow-violet-500/20">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}