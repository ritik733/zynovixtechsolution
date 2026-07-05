import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-28 text-white">

      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/60 p-14 text-center backdrop-blur">

        <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
          Let's Build Together
        </span>

        <h2 className="mt-8 text-4xl font-bold md:text-6xl">
          Ready to Build
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Your AI Product?
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-400">
          Whether you're a startup or an enterprise,
          we help transform ideas into intelligent,
          scalable, AI-powered software solutions.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold hover:scale-105 transition"
          >
            Book Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

          <Link
            href="/services"
            className="rounded-xl border border-slate-700 px-8 py-4 font-semibold hover:border-cyan-500"
          >
            Explore Services
          </Link>

        </div>

      </div>
    </section>
  );
}