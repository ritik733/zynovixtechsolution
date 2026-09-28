import Link from "next/link";
import { ArrowRight, Globe, Database, Hotel } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="bg-white text-slate-900 py-24 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <div>
            <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
              About Us
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              Modern Web & ERP
              <span className="block text-cyan-400">
                Software Development
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-400 font-medium">
              We help businesses, hotels, and enterprises streamline operations
              and accelerate growth with modern website development, Frappe ERPNext
              implementations, and bespoke management software.
            </p>

            <p className="mt-6 text-slate-600 dark:text-slate-400">
              From custom web applications and client portals to comprehensive ERPNext
              modules and specialized hotel management tools, we build solutions
              tailored specifically to your business workflows.
            </p>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105 shadow-md shadow-blue-500/20"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Right */}
          <div className="grid gap-6">

            <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none">
              <Globe className="mb-4 text-cyan-500 dark:text-cyan-400" size={42} />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Custom Website Development
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-400">
                Fast, responsive, and SEO-optimized web applications built with Next.js, React, and modern web frameworks.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none">
              <Database className="mb-4 text-cyan-500 dark:text-cyan-400" size={42} />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Frappe ERPNext Solutions
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-400">
                End-to-end ERP implementations, custom Doctypes, accounting, inventory, and automated business workflows.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none">
              <Hotel className="mb-4 text-cyan-500 dark:text-cyan-400" size={42} />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Hotel & Management Tools
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-400">
                Purpose-built tools for room reservation, billing, guest check-in, and hospitality operational management.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}