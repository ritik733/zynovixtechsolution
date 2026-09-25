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
  ArrowRight
} from "lucide-react";

export const metadata = {
  title: "About Us | Zynovix Tech Solutions",
  description: "Learn about Zynovix – our mission, values, and how we deliver custom websites, enterprise ERP systems, and automated business solutions.",
};

export default function AboutPage() {
  return (
    <main className="bg-transparent text-white relative min-h-screen">
      {/* Hero Section – dark, with responsive top padding */}
      <section className="pt-24 pb-14 sm:pt-32 sm:pb-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            <Sparkles size={15} />
            Our Vision &amp; Mission
          </span>

          <h1 className="mt-5 text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Engineering Systems,<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Scaling Modern Businesses
            </span>
          </h1>

          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-xs sm:text-base md:text-lg text-slate-300 leading-relaxed">
            We are a team of software engineers, ERP architects, and automation specialists
            dedicated to creating scalable web platforms, modular business software,
            and automated workflows that solve real operational challenges.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-cyan-400">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Enterprise ERP Solutions</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Custom Web Development</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>System Automation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story – dark cards */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold text-white">Our Story</h2>
              <p className="mb-4 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                Founded in 2026, Zynovix Tech Solution was born from a shared vision:
                to bridge the gap between complex enterprise operations and modern digital efficiency.
                What started as custom software consultancy has grown into a full-scale
                digital engineering partner trusted by growing businesses and enterprises.
              </p>
              <p className="mb-4 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                We believe that the most impactful software emerges from a deep
                understanding of everyday business processes, combined with robust architectural
                principles and modern web technologies. Our team focuses on eliminating manual
                bottlenecks and building tools that teams genuinely love using.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                Today, we specialize in high-performance web development, enterprise ERP systems,
                business process automation, and cloud integrations – our core mission
                remains the same: empower businesses with technology that works seamlessly for them.
              </p>
            </div>
            <div className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900/60 p-5 sm:p-8 backdrop-blur">
              <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-white">Our Mission</h3>
              <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                To empower growing businesses with modular ERP systems, high-converting
                websites, and automated workflows that streamline day-to-day operations
                and accelerate profitability.
              </p>
              <hr className="my-5 sm:my-6 border-slate-700/60" />
              <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-white">Our Vision</h3>
              <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                To be the most trusted software engineering partner for organizations
                demanding reliable digital platforms, frictionless business automation,
                and scalable enterprise architecture.
              </p>
              <hr className="my-5 sm:my-6 border-slate-700/60" />
              <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-white">Our Approach</h3>
              <ul className="space-y-2 text-xs sm:text-sm md:text-base text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-cyan-400">▸</span>
                  <span>Collaborative discovery and requirement mapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-cyan-400">▸</span>
                  <span>Rapid prototyping and iterative development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-cyan-400">▸</span>
                  <span>Continuous integration, testing, and deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-cyan-400">▸</span>
                  <span>Post‑launch monitoring, support, and evolution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values – dark cards with icons */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Our Core Values
          </h2>
          <div className="grid gap-4 sm:gap-8 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Innovation First",
                text: "We don't just follow trends – we set them. Every project is an opportunity to explore new technologies and push boundaries.",
              },
              {
                icon: Shield,
                title: "Quality & Reliability",
                text: "Performance, security, and scalability are non‑negotiable. We build systems that are robust, maintainable, and future‑proof.",
              },
              {
                icon: Users,
                title: "Client Partnership",
                text: "We see ourselves as an extension of your team. Transparency, communication, and mutual success are at the heart of every engagement.",
              },
            ].map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900/60 p-5 sm:p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:bg-slate-900"
                >
                  <div className="mb-4 inline-flex rounded-xl sm:rounded-2xl bg-cyan-500/10 p-3">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-white">{value.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">{value.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us – dark stats and cards */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Why Choose Zynovix?
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center rounded-xl border border-slate-800 bg-slate-900/40 p-4 sm:p-6">
              <div className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">5+</div>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">Successful Projects</p>
            </div>
            <div className="text-center rounded-xl border border-slate-800 bg-slate-900/40 p-4 sm:p-6">
              <div className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">98%</div>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">Client Satisfaction</p>
            </div>
            <div className="text-center rounded-xl border border-slate-800 bg-slate-900/40 p-4 sm:p-6">
              <div className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">24/7</div>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">Support</p>
            </div>
            <div className="text-center rounded-xl border border-slate-800 bg-slate-900/40 p-4 sm:p-6">
              <div className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">10+</div>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">Tech Experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Preview */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-white">Meet the Team</h2>
          <p className="mx-auto max-w-2xl text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
            We are a passionate group of engineers, designers, and problem‑solvers
            who love what we do. Here are a few of the faces behind our work.
          </p>
          <div className="mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {[
              { name: "Pukhraj Tater", role: "CEO & Founder" },
              { name: "Piyush Dadhich", role: "Lead Developer" },
              { name: "Vinod Kharol", role: "Data Scientist" },
              { name: "Chandan Singh Baghela", role: "Marketing Director" },
            ].map((member) => (
              <div key={member.name} className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900/60 p-4 sm:p-6 transition hover:-translate-y-1 hover:border-cyan-500">
                <div className="mx-auto h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />
                <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-xs sm:text-sm text-slate-400">{member.role}</p>
              </div>
            ))}
          </div>
          {/* Link to full Team page */}
          <div className="mt-6 sm:mt-8">
            <Link
              href="/team"
              className="inline-block text-cyan-400 hover:text-cyan-300 transition-colors text-xs sm:text-sm font-medium border-b border-cyan-400/30 hover:border-cyan-400 py-1"
            >
              View full team →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA – dark with gradient buttons */}
      <section className="py-14 sm:py-20 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Ready to Build Something Amazing?</h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-slate-300">
            Let's talk about your project and how we can help you achieve your
            goals with technology that works.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 px-8 py-3.5 sm:py-4 font-semibold text-white transition hover:scale-105 shadow-lg shadow-cyan-500/25 text-sm sm:text-base w-full sm:w-auto min-h-[44px]"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-cyan-500 px-8 py-3.5 sm:py-4 font-semibold text-cyan-400 transition hover:bg-cyan-500/10 text-sm sm:text-base w-full sm:w-auto min-h-[44px]"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}