import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Cpu,
  Cloud,
  Database,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    desc: "Custom AI solutions, Generative AI, and intelligent business automation.",
  },
  {
    icon: Bot,
    title: "AI Chatbots & Agents",
    desc: "Build LLM-powered assistants using OpenAI, LangChain, and RAG.",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    desc: "Predictive analytics, recommendation engines, and ML model deployment.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "AWS, Azure, Docker, Kubernetes, and cloud-native architecture.",
  },
  {
    icon: Globe,
    title: "Web & SaaS Development",
    desc: "Scalable enterprise applications using Next.js, React, and Node.js.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    desc: "Data pipelines, analytics dashboards, and business intelligence.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-[#050816] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="text-center">
          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Intelligent Technology
            <span className="block text-cyan-400">
              Solutions We Deliver
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            We combine Artificial Intelligence, Machine Learning,
            Cloud Infrastructure, and Modern Web Technologies
            to build future-ready digital products.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:bg-slate-900"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/10 p-4">
                  <Icon
                    size={36}
                    className="text-cyan-400"
                  />
                </div>

                <h3 className="text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {service.desc}
                </p>

                <div className="mt-8 flex items-center text-cyan-400 group-hover:translate-x-2 transition">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us */}

        <div className="mt-24 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-800 p-12">

          <h3 className="text-center text-4xl font-bold">
            Why Choose Us?
          </h3>

          <div className="mt-12 grid gap-8 text-center md:grid-cols-4">

            <div>
              <h2 className="text-5xl font-bold text-cyan-400">
                5+
              </h2>
              <p className="mt-3 text-slate-400">
                Successful Projects
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-cyan-400">
                98%
              </h2>
              <p className="mt-3 text-slate-400">
                Client Satisfaction
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-cyan-400">
                2+
              </h2>
              <p className="mt-3 text-slate-400">
                Global Clients
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-cyan-400">
                24/7
              </h2>
              <p className="mt-3 text-slate-400">
                Technical Support
              </p>
            </div>

          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold transition hover:scale-105"
            >
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}