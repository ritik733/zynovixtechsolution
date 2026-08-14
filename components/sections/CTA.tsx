import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-28 text-slate-900 dark:bg-[#050816] dark:text-white">

      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white/95 p-14 text-center backdrop-blur shadow-xl text-slate-900 dark:border-slate-800 dark:bg-slate-900/60 dark:text-white dark:shadow-none">

        <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
          Let's Build Together
        </span>

        <h2 className="mt-8 text-4xl font-bold md:text-6xl text-slate-900 dark:text-white">
          Ready to Build
          <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
            Your AI Product?
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-600 dark:text-slate-400 font-medium">
          Whether you're a startup or an enterprise,
          we help transform ideas into intelligent,
          scalable, AI-powered software solutions.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white hover:scale-105 transition shadow-md shadow-blue-500/20"
          >
            Book Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

          <Link
            href="/services"
            className="rounded-xl border border-slate-300 bg-white/80 text-slate-800 px-8 py-4 font-semibold transition hover:border-cyan-500 hover:bg-slate-100 dark:border-slate-700 dark:bg-transparent dark:text-white dark:hover:bg-slate-900"
          >
            Explore Services
          </Link>

        </div>

      </div>
    </section>
  );
}