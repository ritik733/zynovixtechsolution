"use client";

import {
  Laptop,
  GraduationCap,
  HeartHandshake,
  Clock3,
  Plane,
  Trophy,
  Coffee,
  Wallet,
} from "lucide-react";

const benefits = [
  {
    icon: Laptop,
    title: "Remote Friendly",
    description: "Work from anywhere with flexible remote and hybrid options.",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "Courses, certifications, books, and conference sponsorships.",
  },
  {
    icon: Wallet,
    title: "Competitive Salary",
    description: "Performance-based compensation with yearly reviews.",
  },
  {
    icon: HeartHandshake,
    title: "Great Team Culture",
    description: "Supportive teammates, mentorship, and collaborative projects.",
  },
  {
    icon: Clock3,
    title: "Flexible Hours",
    description: "Healthy work-life balance with flexible working hours.",
  },
  {
    icon: Plane,
    title: "Paid Time Off",
    description: "Enjoy holidays, vacations, and personal leave when needed.",
  },
  {
    icon: Trophy,
    title: "Recognition",
    description: "Rewards for outstanding performance and innovation.",
  },
  {
    icon: Coffee,
    title: "Fun Environment",
    description: "Hackathons, team events, celebrations, and fun activities.",
  },
];

export default function Benefits() {
  return (
    <section className="relative py-24">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Benefits & Perks
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Why You'll Love Working Here
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
            We believe great people deserve a great workplace. That's why
            we invest in your growth, wellbeing, and success.
          </p>

        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-[#0F1438]/80 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-500 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {benefit.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}