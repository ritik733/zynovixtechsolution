import Link from "next/link";
import { ArrowRight, Brain, ShieldCheck, Zap } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <div>
            <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
              About Us
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              AI-First Software
              <span className="block text-cyan-400">
                Development Company
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-400">
              We help startups, enterprises, and growing businesses
              leverage Artificial Intelligence, Machine Learning,
              Cloud Computing, and Custom Software Development to
              build intelligent digital products.
            </p>

            <p className="mt-6 text-slate-400">
              From AI chatbots and LLM applications to enterprise SaaS
              platforms and cloud-native solutions, we create software
              that scales with your business.
            </p>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold transition hover:scale-105"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Right */}
          <div className="grid gap-6">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
              <Brain className="mb-4 text-cyan-400" size={42} />
              <h3 className="text-xl font-semibold">
                AI Innovation
              </h3>
              <p className="mt-3 text-slate-400">
                Intelligent AI systems powered by modern
                Large Language Models and Machine Learning.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
              <Zap className="mb-4 text-cyan-400" size={42} />
              <h3 className="text-xl font-semibold">
                Automation
              </h3>
              <p className="mt-3 text-slate-400">
                Automate repetitive workflows and improve
                productivity using AI-powered solutions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
              <ShieldCheck className="mb-4 text-cyan-400" size={42} />
              <h3 className="text-xl font-semibold">
                Enterprise Ready
              </h3>
              <p className="mt-3 text-slate-400">
                Secure, scalable, cloud-native applications
                designed for modern businesses.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}