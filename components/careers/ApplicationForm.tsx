"use client";

import { Send } from "lucide-react";

export default function ApplicationForm() {
  return (
    <section
      id="application-form"
      className="relative py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[160px]" />

      <div className="relative mx-auto max-w-4xl px-6">

        <div className="text-center mb-14">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Apply Now
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Start Your Journey
          </h2>

          <p className="mt-5 text-lg text-slate-400">
            We'd love to hear from you. Fill out the application form below.
          </p>

        </div>

        <form className="rounded-3xl border border-violet-500/20 bg-[#0F1438]/80 p-8 backdrop-blur-xl">

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-white">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border border-white/10 bg-[#060818] px-5 py-4 text-white outline-none focus:border-violet-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-white">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-xl border border-white/10 bg-[#060818] px-5 py-4 text-white outline-none focus:border-violet-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-white">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="+91 9876543210"
                className="w-full rounded-xl border border-white/10 bg-[#060818] px-5 py-4 text-white outline-none focus:border-violet-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-white">
                Position
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-[#060818] px-5 py-4 text-white outline-none focus:border-violet-500">

                <option>Frontend Developer</option>

                <option>Backend Developer</option>

                <option>AI Engineer</option>

                <option>UI/UX Designer</option>

                <option>Digital Marketing</option>

                <option>Business Development</option>

              </select>
            </div>

          </div>

          <div className="mt-6">

            <label className="mb-2 block text-white">
              Upload Resume
            </label>

            <input
              type="file"
              className="w-full rounded-xl border border-dashed border-violet-500/30 bg-[#060818] px-5 py-4 text-slate-300"
            />

          </div>

          <div className="mt-6">

            <label className="mb-2 block text-white">
              Cover Letter
            </label>

            <textarea
              rows={6}
              placeholder="Tell us about yourself..."
              className="w-full rounded-xl border border-white/10 bg-[#060818] px-5 py-4 text-white outline-none focus:border-violet-500"
            />

          </div>

          <button
            type="submit"
            className="mt-8 flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Submit Application

            <Send size={18} />

          </button>

        </form>

      </div>
    </section>
  );
}