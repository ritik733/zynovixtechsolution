"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Send,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Bot,
} from "lucide-react";
import TiltCard from "@/components/three/TiltCard";
import Reveal3D from "@/components/three/Reveal3D";
import CyberOrb3D from "@/components/three/CyberOrb3D";

const contactCards = [
  {
    icon: Mail,
    title: "Email Us Directly",
    value: "contact@zynovix.tech",
    sub: "Average response: < 2 hours",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
  },
  {
    icon: Phone,
    title: "Call Our Engineers",
    value: "+91 98765 43210",
    sub: "Mon-Fri from 9am to 6pm IST",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    value: "Jaipur, Rajasthan, India",
    sub: "Global delivery across US, UK & APAC",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Monday – Friday",
    sub: "24/7 Tier-1 Technical Support",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Custom Web Development & Portals",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen text-white">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-20 h-72 sm:h-96 w-72 sm:w-96 rounded-full bg-cyan-600/15 blur-[160px]" />
        <div className="absolute right-1/4 top-1/2 h-72 sm:h-96 w-72 sm:w-96 rounded-full bg-violet-600/15 blur-[160px]" />
      </div>

      {/* Hero Section with 3D Reveal */}
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <Reveal3D rotate={-15}>
            <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              <Sparkles size={15} />
              Let's Connect &amp; Innovate
            </span>

            <h1 className="mt-5 sm:mt-6 text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              Let's Build Something
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]">
                Extraordinary
              </span>
            </h1>

            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-xs sm:text-base md:text-lg leading-relaxed text-slate-300">
              Have an idea, project, or operational bottleneck? Our software engineers,
              ERP architects, and automation specialists are ready to build solutions
              tailored to your business.
            </p>

            {/* Quick trust chips */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck size={16} className="text-cyan-400 shrink-0" />
                <span>NDA &amp; IP Protected</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Bot size={16} className="text-blue-400 shrink-0" />
                <span>Free Operational Audit</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>Response in 24 Hours</span>
              </div>
            </div>
          </Reveal3D>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* ===================== LEFT: 3D Tilt Contact Form (7 cols) ===================== */}
            <div className="lg:col-span-7">
              <Reveal3D rotate={-20}>
                <TiltCard intensity={10} glare={true} className="h-full">
                  <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 sm:p-8 md:p-10 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.12)]">
                    {/* Inner corner glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

                    <div style={{ transform: "translateZ(30px)" }}>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                        Book a Technical Consultation
                      </h2>
                      <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-400">
                        Share your goals and requirements. We'll map out a custom
                        roadmap and architecture estimate.
                      </p>
                    </div>

                    {submitted ? (
                      <div
                        className="my-10 sm:my-12 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-6 sm:p-8 text-center"
                        style={{ transform: "translateZ(35px)" }}
                      >
                        <div className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 mb-4 animate-bounce">
                          <CheckCircle2 size={32} />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          Inquiry Received!
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-slate-300">
                          Thank you for reaching out, {formData.name || "friend"}. A
                          software solutions engineer will review your project and email you
                          within 24 hours.
                        </p>
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="mt-6 rounded-xl border border-cyan-500/40 px-6 py-2.5 text-xs sm:text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20 min-h-[44px]"
                        >
                          Send Another Message
                        </button>
                      </div>
                    ) : (
                      <form
                        onSubmit={handleSubmit}
                        className="mt-6 sm:mt-8 space-y-4 sm:space-y-5"
                        style={{ transform: "translateZ(25px)" }}
                      >
                        {/* Full Name */}
                        <div>
                          <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5">
                            Full Name <span className="text-cyan-400">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="John Doe"
                            className="w-full rounded-xl border border-slate-700/80 bg-slate-950/60 px-3.5 py-3 sm:px-4 sm:py-3.5 text-sm text-white placeholder:text-slate-500 transition outline-none focus:border-cyan-400 focus:bg-slate-950/90 focus:ring-2 focus:ring-cyan-500/20 min-h-[44px]"
                          />
                        </div>

                        {/* Email + Phone Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                          <div>
                            <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5">
                              Email Address <span className="text-cyan-400">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              placeholder="john@company.com"
                              className="w-full rounded-xl border border-slate-700/80 bg-slate-950/60 px-3.5 py-3 sm:px-4 sm:py-3.5 text-sm text-white placeholder:text-slate-500 transition outline-none focus:border-cyan-400 focus:bg-slate-950/90 focus:ring-2 focus:ring-cyan-500/20 min-h-[44px]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5">
                              Phone / WhatsApp
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                              }
                              placeholder="+91 98765 43210"
                              className="w-full rounded-xl border border-slate-700/80 bg-slate-950/60 px-3.5 py-3 sm:px-4 sm:py-3.5 text-sm text-white placeholder:text-slate-500 transition outline-none focus:border-cyan-400 focus:bg-slate-950/90 focus:ring-2 focus:ring-cyan-500/20 min-h-[44px]"
                            />
                          </div>
                        </div>

                        {/* Service Focus */}
                        <div>
                          <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5">
                            Primary Focus Area
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) =>
                              setFormData({ ...formData, service: e.target.value })
                            }
                            className="w-full rounded-xl border border-slate-700/80 bg-slate-950/80 px-3.5 py-3 sm:px-4 sm:py-3.5 text-sm text-white transition outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 min-h-[44px]"
                          >
                            <option>Custom Web Development &amp; Portals</option>
                            <option>Enterprise ERP Software (Inventory, Finance, Frappe)</option>
                            <option>System &amp; Workflow Automation</option>
                            <option>Custom Business Solutions &amp; Internal Tools</option>
                            <option>API &amp; Third-Party Integrations</option>
                            <option>Cloud Infrastructure &amp; DevOps</option>
                          </select>
                        </div>

                        {/* Project Details */}
                        <div>
                          <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5">
                            Project Scope &amp; Details{" "}
                            <span className="text-cyan-400">*</span>
                          </label>
                          <textarea
                            rows={4}
                            required
                            value={formData.details}
                            onChange={(e) =>
                              setFormData({ ...formData, details: e.target.value })
                            }
                            placeholder="Tell us about what you want to build, timeline, budget, or current tech challenges..."
                            className="w-full rounded-xl border border-slate-700/80 bg-slate-950/60 px-3.5 py-3 sm:px-4 sm:py-3.5 text-sm text-white placeholder:text-slate-500 transition outline-none resize-y focus:border-cyan-400 focus:bg-slate-950/90 focus:ring-2 focus:ring-cyan-500/20"
                          />
                        </div>

                        {/* Submit Button with 3D elevation */}
                        <div style={{ transform: "translateZ(30px)" }}>
                          <button
                            type="submit"
                            className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-400/45 cursor-pointer min-h-[48px]"
                          >
                            <span>Send Project Inquiry</span>
                            <Send
                              size={17}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </TiltCard>
              </Reveal3D>
            </div>

            {/* ===================== RIGHT: 3D Info & Interactive Cyber Beacon (5 cols) ===================== */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              {/* Contact Information Cards with 3D Tilt */}
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
                {contactCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <Reveal3D key={card.title} delay={idx * 0.06} rotate={-15}>
                      <TiltCard intensity={18} glare={true}>
                        <div className="group relative flex items-center gap-3.5 sm:gap-4 rounded-xl sm:rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-slate-900/80 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]">
                          {/* 3D Popout Icon */}
                          <div
                            className={`flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl ${card.bg} ${card.color} transition-transform duration-300 group-hover:scale-115`}
                            style={{ transform: "translateZ(30px)" }}
                          >
                            <Icon size={20} className="sm:w-6 sm:h-6" />
                          </div>

                          {/* 3D Popout Text */}
                          <div style={{ transform: "translateZ(20px)" }}>
                            <h3 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                              {card.title}
                            </h3>
                            <p className="mt-0.5 text-sm sm:text-base font-bold text-white transition group-hover:text-cyan-300 break-all sm:break-normal">
                              {card.value}
                            </p>
                            <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                              {card.sub}
                            </p>
                          </div>
                        </div>
                      </TiltCard>
                    </Reveal3D>
                  );
                })}
              </div>

              {/* 3D Interactive Enterprise Operations Beacon Visual */}
              <Reveal3D delay={0.25} rotate={-15}>
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-6 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.15)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-cyan-400">
                      Operations Center
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] sm:text-xs text-emerald-400 font-medium">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      Active 24/7
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-400">
                    Interact with the 3D enterprise system model below.
                  </p>

                  <div className="h-44 sm:h-52 w-full mt-2">
                    <CyberOrb3D className="h-full w-full" />
                  </div>

                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-800 text-center">
                    <Link
                      href="/portfolio"
                      className="group inline-flex items-center text-xs sm:text-sm font-semibold text-cyan-400 transition hover:text-cyan-300 min-h-[36px]"
                    >
                      <span>Explore Delivered Case Studies</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal3D>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
