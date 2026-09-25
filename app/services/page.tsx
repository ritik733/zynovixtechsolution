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
} from "lucide-react";

import Reveal3D from "@/components/three/Reveal3D";
import TiltCard from "@/components/three/TiltCard";
import AggressiveReveal from "@/components/three/AggressiveReveal";

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
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-32 pb-24">
        {/* Heading */}
        <Reveal3D rotate={-15}>
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-300 md:text-4xl">
              Our Services
            </h2>
            <p className="mt-2 text-lg text-slate-400">
              Welcome to the Services page.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              We combine Artificial Intelligence, Machine Learning,
              Cloud Infrastructure, and Modern Web Technologies
              to build future‑ready digital products.
            </p>
          </div>
        </Reveal3D>

        {/* Service Cards with tilt + reveal */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal3D key={service.title} delay={i * 0.06} rotate={-30}>
                <AggressiveReveal delay={i * 0.08} rotate={-70} from="up">
                <TiltCard className="h-full" intensity={10}>
                  <div className="group relative h-full rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition duration-300 hover:border-cyan-500 hover:bg-slate-900 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.35)]">
                    {/* icon with depth */}
                    <div
                      className="mb-6 inline-flex rounded-2xl bg-cyan-500/10 p-4 transition"
                      style={{ transform: "translateZ(40px)" }}
                    >
                      <Icon size={36} className="text-cyan-400" />
                    </div>

                    <h3
                      className="text-2xl font-semibold"
                      style={{ transform: "translateZ(25px)" }}
                    >
                      {service.title}
                    </h3>

                    <p
                      className="mt-4 leading-7 text-slate-400"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      {service.desc}
                    </p>

                    <ul className="mt-4 space-y-1 text-sm text-slate-500">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex items-center text-cyan-400 transition group-hover:translate-x-2">
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
        <Reveal3D rotate={-20} delay={0.1}>
          <div className="mt-24 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-800 p-12">
            <h3 className="text-center text-4xl font-bold">Why Choose Us?</h3>
            <div className="mt-12 grid gap-8 text-center md:grid-cols-4">
              {[
                ["5+", "Successful Projects"],
                ["98%", "Client Satisfaction"],
                ["2+", "Global Clients"],
                ["24/7", "Technical Support"],
              ].map(([value, label], i) => (
                <Reveal3D key={label} delay={i * 0.08} rotate={-20}>
                  <div>
                    <h2 className="text-5xl font-bold text-cyan-400">
                      {value}
                    </h2>
                    <p className="mt-3 text-slate-400">{label}</p>
                  </div>
                </Reveal3D>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold transition hover:scale-105"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </Reveal3D>
      </div>
    </main>
  );
}