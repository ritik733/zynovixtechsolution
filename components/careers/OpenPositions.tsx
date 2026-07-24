"use client";

import {
  ArrowRight,
  Briefcase,
  Clock3,
  MapPin,
} from "lucide-react";

const jobs = [
  {
    title: "Frontend Developer",
    location: "Remote / Jaipur",
    type: "Full Time",
    experience: "1-3 Years",
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Backend Developer",
    location: "Remote",
    type: "Full Time",
    experience: "2+ Years",
    skills: ["Node.js", "Python", "MongoDB"],
  },
  {
    title: "AI Engineer",
    location: "Remote",
    type: "Full Time",
    experience: "2+ Years",
    skills: ["Python", "LLMs", "LangChain"],
  },
  {
    title: "UI/UX Designer",
    location: "Jaipur",
    type: "Internship",
    experience: "Freshers Welcome",
    skills: ["Figma", "Adobe XD", "UI Design"],
  },
  {
    title: "Digital Marketing Executive",
    location: "Hybrid",
    type: "Full Time",
    experience: "1+ Years",
    skills: ["SEO", "Meta Ads", "Google Ads"],
  },
  {
    title: "Business Development Executive",
    location: "Jaipur",
    type: "Full Time",
    experience: "Freshers Welcome",
    skills: ["Sales", "Communication", "CRM"],
  },
];

export default function OpenPositions() {
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

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Open Positions
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Find Your Dream Role
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
            Join an ambitious team building AI-powered digital products for
            businesses around the world.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {jobs.map((job, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-violet-500/20 bg-[#0F1438]/80 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_0_45px_rgba(139,92,246,.25)]"
            >
              <div className="flex items-start justify-between">

                <div>

                  <h3 className="text-2xl font-semibold text-white">
                    {job.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-4 text-slate-400">

                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      {job.location}
                    </div>

                    <div className="flex items-center gap-2">
                      <Briefcase size={18} />
                      {job.type}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock3 size={18} />
                      {job.experience}
                    </div>

                  </div>

                </div>

              </div>

              <div className="mt-8 flex flex-wrap gap-3">

                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

              <div className="mt-8 flex gap-4">

                <button className="rounded-xl border border-violet-500/30 px-5 py-3 text-white transition hover:bg-violet-500/10">
                  View Details
                </button>

                <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-3 font-semibold text-white transition hover:scale-105">
                  Apply Now
                  <ArrowRight size={18} />
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}