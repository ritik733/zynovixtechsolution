import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import ServiceBreadcrumbs from "./ServiceBreadcrumbs";

interface ServiceHeroProps {
  badge: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  visual: React.ReactNode;
}

export default function ServiceHero({
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  visual,
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-36 lg:pb-24">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-cyan-500/10 blur-[130px] dark:bg-cyan-500/15" />
        <div className="h-[350px] w-[500px] rounded-full bg-blue-600/10 blur-[140px] dark:bg-blue-600/15" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServiceBreadcrumbs currentTitle={title} />

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{badge}</span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white leading-[1.15]">
              {title}
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={primaryCta.href}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 font-semibold text-white shadow-md shadow-blue-500/20 transition hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 text-sm sm:text-base"
                data-track="hero-primary-cta"
              >
                <span>{primaryCta.label}</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-6 py-3.5 font-semibold text-slate-800 backdrop-blur-sm transition hover:bg-slate-100 hover:border-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 text-sm sm:text-base"
                data-track="hero-secondary-cta"
              >
                <span>{secondaryCta.label}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {visual}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
