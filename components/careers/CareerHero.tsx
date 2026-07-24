"use client";

import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";

export default function CareerHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-[-150px] h-[350px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[150px]" />
      <div className="absolute right-0 top-1/2 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-violet-300 backdrop-blur-xl">
          <Briefcase size={18} />
          <span>We're Hiring</span>
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
          Build The Future
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            With Zynovix
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          Join our passionate team of developers, designers, AI engineers,
          marketers, and innovators building next-generation digital solutions.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="#open-positions"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105"
          >
            View Open Positions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

          <Link
            href="#application-form"
            className="inline-flex items-center justify-center rounded-xl border border-violet-500/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white/10"
          >
            Apply Now
          </Link>

        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">

          {[
            ["10+", "Open Positions"],
            ["100%", "Remote Friendly"],
            ["24/7", "Learning Culture"],
            ["5★", "Team Environment"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <h3 className="text-3xl font-bold text-white">{value}</h3>
              <p className="mt-2 text-sm text-slate-400">{label}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}