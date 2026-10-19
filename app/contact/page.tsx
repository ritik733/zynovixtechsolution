import Link from "next/link";
import { Suspense } from "react";
import { Mail, Phone, MapPin, Clock, Sparkles, ShieldCheck, Zap, Lock } from "lucide-react";
import ContactForm from "./ContactForm";
import { HeroAtmosphereGlow } from "@/components/ui/TechPattern";

export const metadata = {
  title: "Contact Us | Zynovix Tech Solutions",
  description: "Get in touch with us for your next modern web, Frappe ERPNext, or custom software project.",
};

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-white text-slate-900 dark:bg-[#050816] dark:text-white min-h-screen">
      {/* Background Decor - Exact match to Homepage Hero */}
      <HeroAtmosphereGlow />

      {/* Hero */}
      <section className="relative pt-32 pb-12 text-slate-900 dark:text-white md:pt-40 md:pb-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            <Sparkles size={14} /> Direct Architectural Discovery
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
            Let's Build Something <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Extraordinary</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-slate-600 dark:text-slate-300 md:text-lg leading-relaxed">
            Have an idea, project, or enterprise business bottleneck? Talk directly with our senior software engineers and receive a comprehensive architecture roadmap within 24 hours.
          </p>

          {/* Trust Guarantees Row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-slate-600 dark:text-slate-400">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/60 px-3.5 py-1 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
              <Zap size={13} className="text-cyan-500" />
              <span>&lt; 24-Hour Discovery Response</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/60 px-3.5 py-1 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
              <Lock size={13} className="text-blue-500" />
              <span>Strict NDA & Code IP Ownership</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/60 px-3.5 py-1 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
              <ShieldCheck size={13} className="text-emerald-500" />
              <span>Direct Engineering Consultation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-8 pb-24 md:py-12 md:pb-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 lg:grid-cols-5">
          
          {/* Contact Form */}
          <div className="rounded-3xl border border-slate-200/90 bg-white/90 p-6 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60 md:p-8 lg:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Book a Free Consultation
            </h2>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 md:text-base">
              Tell us about your project and we'll contact you shortly.
            </p>

            {/* Functional Contact Form */}
            <Suspense fallback={<div className="h-64 animate-pulse rounded-xl bg-slate-100 dark:bg-slate-800" />}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 lg:col-span-2">
            
            {/* Heading */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Get In Touch
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
                Whether you're looking to build a website, mobile app, AI
                solution, or enterprise software, our team is ready to help.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">

              {/* Email */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-md transition-all hover:border-cyan-500/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50">
                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Email
                  </h3>

                  <a
                    href="mailto:work@zynovixtechsolutions.com"
                    className="text-sm text-slate-600 transition hover:text-cyan-500 dark:text-slate-300 dark:hover:text-cyan-400 font-medium"
                  >
                    work@zynovixtechsolutions.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-md transition-all hover:border-cyan-500/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50">
                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Phone
                  </h3>

                  <a
                    href="tel:+916367500528"
                    className="text-sm text-slate-600 transition hover:text-cyan-500 dark:text-slate-300 dark:hover:text-cyan-400 font-medium"
                  >
                    +91 6367500528
                  </a>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-md transition-all hover:border-cyan-500/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50">
                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Office
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                    2nd Floor, 12 Amrit Nagar,
                    <br />
                    Opposite of Pacific University,
                    <br />
                    Debari, Udaipur,
                    <br />
                    Rajasthan, India
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-md transition-all hover:border-cyan-500/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50">
                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400">
                  <Clock className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Working Hours
                  </h3>

                  <p className="text-sm leading-tight text-slate-600 dark:text-slate-300 font-medium">
                    Monday - Friday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="rounded-3xl border border-violet-500/30 bg-white/90 p-6 sm:p-7 text-slate-900 shadow-xl backdrop-blur-xl transition-all dark:border-violet-500/30 dark:bg-slate-900/60 dark:text-white">
              <h3 className="text-xl font-bold md:text-2xl">
                Ready to Start Your Project?
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
                Let's discuss your requirements and create a solution that
                helps your business grow.
              </p>

              <Link
                href="/portfolio"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:scale-105 md:text-base"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}