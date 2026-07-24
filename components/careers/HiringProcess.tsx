"use client";

import {
  FileText,
  PhoneCall,
  Code2,
  Users,
  PartyPopper,
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Apply Online",
    description:
      "Submit your application along with your resume through our careers page.",
  },
  {
    icon: PhoneCall,
    title: "HR Screening",
    description:
      "Our HR team will review your profile and schedule a short introductory call.",
  },
  {
    icon: Code2,
    title: "Technical Interview",
    description:
      "Meet our engineering team and demonstrate your technical skills.",
  },
  {
    icon: Users,
    title: "Final Discussion",
    description:
      "Discuss the role, expectations, and your career goals with leadership.",
  },
  {
    icon: PartyPopper,
    title: "Welcome to Zynovix",
    description:
      "Receive your offer letter and begin your exciting journey with us.",
  },
];

export default function HiringProcess() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Hiring Process
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            How We Hire
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
            We've designed a transparent hiring process so you always know
            what comes next.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Desktop Line */}
          <div className="absolute left-0 right-0 top-10 hidden lg:block h-[2px] bg-gradient-to-r from-violet-500 via-blue-500 to-violet-500" />

          <div className="grid gap-10 lg:grid-cols-5">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="relative text-center"
                >

                  {/* Number */}
                  <div className="absolute -top-4 left-1/2 z-20 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white shadow-lg shadow-violet-600/40">
                    {index + 1}
                  </div>

                  {/* Card */}
                  <div className="group rounded-3xl border border-violet-500/20 bg-[#0F1438]/80 p-8 pt-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-500 transition-transform duration-500 group-hover:scale-110">

                      <Icon className="h-8 w-8 text-white" />

                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {step.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}