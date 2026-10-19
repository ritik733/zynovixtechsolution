import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Users,
  Rocket,
  Zap,
  Shield,
  Globe,
  Code,
  Award,
  Sparkles,
  Target,
  Eye,
  CheckCircle2,
} from "lucide-react";
import { HeroAtmosphereGlow } from "@/components/ui/TechPattern";

export const metadata = {
  title: "About Us | Zynovix Tech Solutions",
  description: "Learn about Zynovix – our mission, values, and how we deliver modern websites, Frappe ERPNext solutions, and custom business software.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-white text-slate-900 dark:bg-[#050816] dark:text-white overflow-hidden">
      {/* Background Decor - Exact match to Homepage Hero */}
      <HeroAtmosphereGlow />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 text-slate-900 dark:text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            <Sparkles size={14} /> Our Purpose & Origins
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Modern Web & ERP,<br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-indigo-400">
              Built for Your Business
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            We help businesses, hotels, and enterprises streamline operations
            and accelerate growth with modern website development, Frappe
            ERPNext implementations, and bespoke management software.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
              <CheckCircle className="h-4 w-4" />
              <span>Custom • Scalable • Reliable</span>
            </div>
            <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
              <CheckCircle className="h-4 w-4" />
              <span>Frappe ERPNext Specialists</span>
            </div>
            <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
              <CheckCircle className="h-4 w-4" />
              <span>24/7 Technical Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story – with Team Collaboration Image */}
      <section className="relative py-20 border-t border-slate-200/70 dark:border-white/5">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Story Text (6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                Pioneering Engineering
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Engineering Practical Systems That Solve Real Bottlenecks
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Founded in 2026, Zynovix was born from a shared passion for
                leveraging modern technology to drive business transformation.
                What started as a focused consultancy has grown into a
                full-service digital innovation partner trusted by startups,
                hotels, and enterprises alike.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                We believe that the best solutions emerge from a deep
                understanding of our clients' workflows, combined with technical
                excellence and creative thinking. Our culture is built on
                curiosity, continuous learning, and a commitment to delivering
                measurable outcomes.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Today, we specialize in modern website development, Frappe
                ERPNext implementations, and custom business tools like hotel
                management software — but our core mission remains the same:
                empower businesses with technology that works for them.
              </p>
            </div>

            {/* Team Showcase Image Frame (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/60 p-3 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-slate-900">
                  <Image
                    src="/images/about/cross-disciplinary-squads.webp"
                    alt="Zynovix senior engineering squad collaborating around an illuminated transparent glass whiteboard mapping microservices, Frappe ERPNext workflows, and cloud architectures"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-slate-950/80 px-3.5 py-1.5 backdrop-blur-md text-xs font-semibold text-white shadow-lg">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Technical Excellence in Action</span>
                  </div>

                  {/* Caption Bottom */}
                  <div className="absolute bottom-4 inset-x-4 rounded-xl border border-white/10 bg-slate-950/80 p-3 backdrop-blur-md text-white text-xs">
                    <p className="font-semibold text-cyan-300">Cross-Disciplinary Squads</p>
                    <p className="text-slate-300 text-[11px] mt-0.5">
                      Full-stack engineers, certified Frappe specialists, and cloud architects working collaboratively on your product.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision – with Innovation 3D Graphic */}
      <section className="relative py-20 bg-slate-50/70 dark:bg-transparent border-y border-slate-200/70 dark:border-white/5">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Visual Graphic (5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-white/60 p-3 shadow-2xl backdrop-blur-xl dark:border-violet-500/30 dark:bg-slate-900/60">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-950">
                  <Image
                    src="/images/about/mission-innovation.webp"
                    alt="3D conceptual model of interconnected software architecture, cloud microservices, and digital innovation at Zynovix"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 inset-x-4 rounded-xl border border-violet-500/30 bg-slate-950/85 p-3.5 backdrop-blur-md text-white">
                    <div className="flex items-center gap-2 text-violet-400 text-xs font-bold uppercase tracking-wider">
                      <Sparkles size={14} /> Future-Ready Engineering
                    </div>
                    <p className="text-slate-300 text-[11px] mt-1 leading-snug">
                      Interconnecting open-source power, high-availability cloud, and tailored operational workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Vision Cards (7 cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="rounded-3xl border border-slate-200/90 bg-white/90 p-7 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
                    <Target size={22} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  To empower businesses with affordable, high‑performance web,
                  ERP, and custom software solutions that streamline operations
                  and drive sustainable growth in the digital economy.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200/90 bg-white/90 p-7 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                    <Eye size={22} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  To be the trusted global partner for modern web development, Frappe
                  ERPNext solutions, and custom business software – where
                  technology is tailored to amplify human potential and business results.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200/90 bg-white/90 p-7 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                  Our Execution Methodology
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-cyan-500 flex-shrink-0" />
                    <span>Collaborative discovery & workflow mapping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-cyan-500 flex-shrink-0" />
                    <span>Rapid prototyping & agile sprints</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-cyan-500 flex-shrink-0" />
                    <span>Continuous CI/CD automated testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-cyan-500 flex-shrink-0" />
                    <span>Post-launch monitoring & SLA support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-20">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              Guiding Principles
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Our Core Values
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              The values that dictate how we architect systems, write clean code, and treat our clients.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Innovation First",
                text: "We don't just follow trends – we set them. Every project is an opportunity to explore new technologies, optimize Core Web Vitals, and push performance boundaries.",
              },
              {
                icon: Shield,
                title: "Quality & Reliability",
                text: "Performance, security, and scalability are non‑negotiable. We build systems that are robust, maintainable, and backed by automated tests and failover protocols.",
              },
              {
                icon: Users,
                title: "Client Partnership",
                text: "We see ourselves as an extension of your team. Complete transparency, proactive communication, and mutual long-term success are at the heart of every engagement.",
              },
            ].map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group rounded-3xl border border-slate-200/90 bg-white/90 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-500 dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-cyan-500/10 p-3.5 text-cyan-500 dark:text-cyan-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{value.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 bg-slate-50/60 dark:bg-transparent border-t border-slate-200/70 dark:border-white/5">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-slate-200/90 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <div className="flex items-center gap-3">
                <Rocket className="h-6 w-6 text-cyan-500 dark:text-cyan-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">End‑to‑End Solutions</h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                From strategy and design to development, deployment, and 24/7 SLA maintenance.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200/90 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-cyan-500 dark:text-cyan-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Global Standards</h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We work with international clients, applying strict security, GDPR, and ISO-grade best practices.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200/90 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <div className="flex items-center gap-3">
                <Code className="h-6 w-6 text-cyan-500 dark:text-cyan-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Modern Tech Stack</h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We leverage Next.js 16, React, Frappe v15, ERPNext, Python, and AWS/Docker container setups.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200/90 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-cyan-500 dark:text-cyan-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Proven Track Record</h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Measurable business improvements: 65% faster reconciliation and 0 double-booking guarantees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Ready to Build Something Amazing?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Let's talk about your project and how we can help you achieve your
            goals with technology that works.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3.5 font-semibold text-white transition hover:scale-105 shadow-md shadow-blue-500/20"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-block rounded-xl border border-cyan-500 px-8 py-3.5 font-semibold text-cyan-600 dark:text-cyan-400 transition hover:bg-cyan-500/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}