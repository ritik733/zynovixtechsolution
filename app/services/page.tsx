import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Cpu,
  Cloud,
  Database,
  Globe,
  Shield,
  Blocks,
  Wifi,
  Sparkles,
} from "lucide-react";

import Reveal3D from "@/components/three/Reveal3D";
import TiltCard from "@/components/three/TiltCard";
import AggressiveReveal from "@/components/three/AggressiveReveal";

export const metadata = {
  title: "Services | Zynovix Tech Solutions",
  description:
    "Explore our full suite of AI development, machine learning, cloud SaaS, cybersecurity, and blockchain engineering services.",
};

const services = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    desc: "Custom AI solutions, Generative AI, and intelligent business automation.",
    features: ["LLM fine‑tuning", "Computer vision", "NLP pipelines"],
  },
  {
    icon: Bot,
    title: "AI Chatbots & Agents",
    desc: "Build LLM‑powered assistants using OpenAI, LangChain, and RAG.",
    features: ["Conversational AI", "Document QA", "Autonomous agents"],
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    desc: "Predictive analytics, recommendation engines, and ML model deployment.",
    features: ["Regression/Classification", "Time‑series forecasting", "MLOps"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "AWS, Azure, Docker, Kubernetes, and cloud‑native architecture.",
    features: ["Infrastructure as Code", "Serverless", "Multi‑cloud strategy"],
  },
  {
    icon: Globe,
    title: "Web & SaaS Development",
    desc: "Scalable enterprise applications using Next.js, React, and Node.js.",
    features: ["Micro‑frontends", "API design", "Real‑time features"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    desc: "Data pipelines, analytics dashboards, and business intelligence.",
    features: ["ETL/ELT", "Data warehousing", "BI reporting"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Zero‑trust architectures, penetration testing, and compliance frameworks.",
    features: ["Threat monitoring", "Vulnerability assessment", "GDPR/HIPAA"],
  },
  {
    icon: Blocks,
    title: "Blockchain",
    desc: "Decentralised applications, smart contracts, and tokenisation.",
    features: ["Ethereum/Solana", "DeFi protocols", "NFT marketplaces"],
  },
  {
    icon: Wifi,
    title: "IoT & Edge Computing",
    desc: "Connected device ecosystems, real‑time analytics, and edge AI.",
    features: ["Sensor data ingestion", "Edge inference", "Device management"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-transparent text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-[900px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[160px]" />
        <div className="absolute right-0 top-1/3 h-72 sm:h-80 w-72 sm:w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute left-0 bottom-0 h-72 sm:h-80 w-72 sm:w-80 rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
        {/* Heading */}
        <Reveal3D rotate={-15}>
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              <Sparkles size={15} />
              Comprehensive Capabilities
            </span>
            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Engineering Services &amp;{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-base text-slate-300">
              We combine Artificial Intelligence, Machine Learning, Cloud
              Infrastructure, and Modern Web Technologies to build future‑ready digital
              products.
            </p>
          </div>
        </Reveal3D>

        {/* Service Cards with tilt + reveal */}
        <div className="mt-10 sm:mt-16 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal3D key={service.title} delay={i * 0.04} rotate={-20}>
                <AggressiveReveal delay={i * 0.05} rotate={-35} from="up">
                  <TiltCard className="h-full" intensity={12}>
                    <div className="group relative flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-slate-900/60 p-5 sm:p-8 backdrop-blur-md transition duration-300 hover:border-cyan-400/60 hover:bg-slate-900/80 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.35)]">
                      <div>
                        {/* icon with depth */}
                        <div
                          className="mb-4 sm:mb-6 inline-flex rounded-xl sm:rounded-2xl bg-cyan-500/10 p-3 sm:p-4 transition"
                          style={{ transform: "translateZ(40px)" }}
                        >
                          <Icon size={30} className="text-cyan-400" />
                        </div>

                        <h2
                          className="text-xl sm:text-2xl font-bold text-white transition group-hover:text-cyan-300"
                          style={{ transform: "translateZ(25px)" }}
                        >
                          {service.title}
                        </h2>

                        <p
                          className="mt-2.5 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-slate-300"
                          style={{ transform: "translateZ(15px)" }}
                        >
                          {service.desc}
                        </p>

                        <ul className="mt-4 sm:mt-6 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-400">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 sm:mt-8 flex items-center text-xs sm:text-sm font-semibold text-cyan-400 transition group-hover:translate-x-2">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </TiltCard>
                </AggressiveReveal>
              </Reveal3D>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <Reveal3D rotate={-15} delay={0.1}>
          <div className="mt-16 sm:mt-24 rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6 sm:p-12 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.1)]">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Why Choose Zynovix?
            </h2>
            <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
              {[
                ["5+", "Successful Projects"],
                ["98%", "Client Satisfaction"],
                ["2+", "Global Clients"],
                ["24/7", "Technical Support"],
              ].map(([value, label], i) => (
                <Reveal3D key={label} delay={i * 0.05} rotate={-15}>
                  <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-3 sm:p-5">
                    <div className="text-2xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {value}
                    </div>
                    <p className="mt-1.5 sm:mt-3 text-[11px] sm:text-sm text-slate-300">{label}</p>
                  </div>
                </Reveal3D>
              ))}
            </div>

            <div className="mt-8 sm:mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 px-7 sm:px-8 py-3.5 sm:py-4 font-semibold text-white transition hover:scale-105 shadow-lg shadow-cyan-500/25 text-sm sm:text-base w-full sm:w-auto min-h-[44px]"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </Reveal3D>
      </div>
    </main>
  );
}