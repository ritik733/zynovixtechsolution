import { LucideIcon } from "lucide-react";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface ServiceProcessTimelineProps {
  heading?: string;
  subheading?: string;
  steps: ProcessStep[];
}

export default function ServiceProcessTimeline({
  heading = "Our Structured Process",
  subheading = "A transparent, milestone-driven execution model ensuring quality and predictability at every phase.",
  steps,
}: ServiceProcessTimelineProps) {
  return (
    <section className="py-20 bg-slate-50/60 dark:bg-transparent border-y border-slate-200/70 dark:border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            Proven Methodology
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {heading}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {subheading}
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-sm font-bold text-white shadow-sm shadow-blue-500/30">
                    {step.number || `0${idx + 1}`}
                  </span>
                  {Icon && (
                    <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-600 dark:text-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
