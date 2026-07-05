"use client";

const companies = [
  "OpenAI",
  "Microsoft",
  "AWS",
  "Google Cloud",
  "Azure",
  "LangChain",
  "Next.js",
  "Docker",
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-[#020617]/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-8">

        <p className="mb-8 text-center text-sm uppercase tracking-[4px] text-slate-500">
          Technologies & Platforms
        </p>

        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4 lg:grid-cols-8">

          {companies.map((company) => (
            <div
              key={company}
              className="rounded-xl border border-white/5 bg-white/[0.03] py-5 font-semibold text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
            >
              {company}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}