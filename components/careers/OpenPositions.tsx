"use client";

import {
  ArrowRight,
  Briefcase,
  Clock3,
  MapPin,
  GraduationCap,
} from "lucide-react";

export default function OpenPositions() {
  const scrollToForm = () => {
    document.getElementById("application-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="open-positions"
      className="relative py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-32 h-96 w-96 rounded-full bg-violet-600/10 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-500 dark:text-violet-300">
            Current Opening
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900 dark:text-white">
            Fresher Interns Wanted
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600 dark:text-slate-400">
            Kickstart your career with real projects in Web Development,
            Frappe ERPNext, and Custom Software. We're looking for eager
            learners ready to grow with us.
          </p>
        </div>

        {/* Single Intern Card */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="group rounded-3xl border border-slate-200/70 bg-white/90 p-8 sm:p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_0_45px_rgba(139,92,246,.25)] dark:border-violet-500/20 dark:bg-[#0F1438]/80">

            {/* Header */}
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-500">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">
                  Fresher Internship Program
                </h3>
                <p className="mt-2 text-slate-500 dark:text-slate-400 font-medium">
                  Learn, build, and ship real products with our team.
                </p>
              </div>
            </div>

            {/* Meta info */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <MapPin size={18} className="text-violet-500" />
                <span className="font-medium">Udaipur / Hybrid</span>
              </div>

              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <Briefcase size={18} className="text-violet-500" />
                <span className="font-medium">Internship</span>
              </div>

              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <Clock3 size={18} className="text-violet-500" />
                <span className="font-medium">3–6 Months</span>
              </div>
            </div>

            {/* What you'll work on */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                What you'll work on
              </h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                  Modern websites with Next.js & React
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                  Frappe / ERPNext implementations
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                  Custom business software & integrations
                </li>
              </ul>
            </div>

            {/* Who can apply */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Who can apply
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Final-year students",
                  "Recent graduates",
                  "Any degree (CS/IT preferred)",
                  "Strong basics & willingness to learn",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-500 dark:text-violet-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <button
                onClick={scrollToForm}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-8 py-4 font-semibold text-white transition hover:scale-105 shadow-md shadow-violet-500/20"
              >
                Apply Now
                <ArrowRight size={18} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}