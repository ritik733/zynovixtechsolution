"use client";

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
import TiltCard from "@/components/three/TiltCard";
import Reveal3D from "@/components/three/Reveal3D";

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

export default function ServicesPreview() {
  return (
    <section className="relative overflow-hidden bg-transparent py-28 text-white">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-cyan-600/10 blur-[160px]" />
        <div className="absolute right-10 bottom-1/4 h-80 w-80 rounded-full bg-violet-600/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <Reveal3D rotate={-15}>
          <div className="text-center">
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              Our Capabilities
            </span>
            <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl md:text-5xl tracking-tight">
              Enterprise Services &
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Intelligent Tech Stacks
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              We combine Artificial Intelligence, Machine Learning, Cloud
              Infrastructure, and Modern Web Engineering to build future‑ready digital
              products.
            </p>
          </div>
        </Reveal3D>

        {/* Service Cards with 3D Tilt and Layered Depth */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal3D key={service.title} delay={i * 0.05} rotate={-20}>
                <TiltCard intensity={15} className="h-full">
                  <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-slate-800/80 bg-slate-900/60 p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-slate-900/80 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]">
                    <div>
                      {/* 3D Floating Icon */}
                      <div
                        className="mb-6 inline-flex rounded-2xl bg-cyan-500/10 p-4 transition-transform duration-300 group-hover:scale-110"
                        style={{ transform: "translateZ(35px)" }}
                      >
                        <Icon size={34} className="text-cyan-400" />
                      </div>

                      {/* 3D Title */}
                      <h3
                        className="text-2xl font-bold text-white transition group-hover:text-cyan-300"
                        style={{ transform: "translateZ(25px)" }}
                      >
                        {service.title}
                      </h3>

                      {/* 3D Description */}
                      <p
                        className="mt-4 leading-7 text-slate-300"
                        style={{ transform: "translateZ(15px)" }}
                      >
                        {service.desc}
                      </p>

                      {/* Features List */}
                      <ul
                        className="mt-6 space-y-2 text-sm text-slate-400"
                        style={{ transform: "translateZ(18px)" }}
                      >
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Learn More */}
                    <div
                      className="mt-8 flex items-center text-sm font-semibold text-cyan-400 transition group-hover:translate-x-2"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </TiltCard>
              </Reveal3D>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <Reveal3D rotate={-15} delay={0.15}>
          <div className="mt-24 rounded-3xl border border-slate-800/80 bg-slate-900/70 p-10 md:p-14 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.1)]">
            <h3 className="text-center text-3xl md:text-4xl font-bold text-white">
              Why Partner With Zynovix?
            </h3>
            <div className="mt-12 grid gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
              {[
                ["5+", "Delivered Projects"],
                ["98%", "Client Satisfaction"],
                ["2+", "Global Enterprises"],
                ["24/7", "Dedicated Support"],
              ].map(([value, label], idx) => (
                <TiltCard key={label} intensity={12} glare={false}>
                  <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5">
                    <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {value}
                    </h2>
                    <p className="mt-3 text-sm text-slate-300">{label}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="group inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 px-8 py-4 font-semibold shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal3D>
      </div>
    </section>
  );
}