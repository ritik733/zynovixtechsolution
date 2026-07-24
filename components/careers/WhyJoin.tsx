"use client";

import {
  Rocket,
  BrainCircuit,
  GraduationCap,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Innovation First",
    description:
      "Work on cutting-edge AI, cloud, automation, and next-generation web technologies that solve real business problems.",
  },
  {
    icon: BrainCircuit,
    title: "Continuous Learning",
    description:
      "Learn from experienced mentors, explore new technologies, and grow your technical and leadership skills.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Be part of a supportive team where ideas are valued and everyone contributes to building amazing products.",
  },
  {
    icon: GraduationCap,
    title: "Career Growth",
    description:
      "Take ownership of your work, earn new responsibilities, and accelerate your career in a fast-growing company.",
  },
];

export default function WhyJoin() {
  return (
    <section className="relative py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Why Join Us
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            More Than Just A Job
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            At Zynovix Technologies, you'll work with passionate people,
            modern technologies, and exciting projects that challenge you
            to grow every day.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-violet-500/20 bg-[#0F1438]/80 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]"
              >
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-500 transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-slate-400">
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