"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Rocket,
  Code2,
  Boxes,
  Settings2,
  Handshake,
  ShieldCheck,
  Headset,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f7ff] via-white to-slate-50 dark:from-[#050816] dark:via-[#070d22] dark:to-[#050816] text-slate-900 dark:text-white pt-24 sm:pt-28 md:pt-32 lg:pt-36">
      {/* Ambient background bloom matching the modern high-tech workspace */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        {/* Soft upper-left sky blue bloom */}
        <div className="absolute -left-24 top-10 h-[560px] w-[560px] rounded-full bg-blue-400/15 blur-[140px] dark:bg-blue-600/20" />
        {/* Soft upper-right cyan bloom */}
        <div className="absolute right-0 top-16 h-[580px] w-[580px] rounded-full bg-cyan-400/15 blur-[150px] dark:bg-cyan-500/15" />
      </div>

      <div className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-12 pb-10 sm:pb-14 lg:pb-16">
        <div className="grid items-center gap-10 lg:gap-8 lg:grid-cols-12">
          {/* LEFT COLUMN: Main Typography & Action CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 text-left z-10">
            {/* Top Badge: Rocket + Technology Partner */}
            <div className="inline-flex">
              <div className="inline-flex items-center gap-2.5 rounded-full bg-[#EAF3FF] dark:bg-sky-950/70 border border-[#BFDBFE]/90 dark:border-sky-800/60 px-4 py-1.5 shadow-xs transition-all hover:border-[#93C5FD]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0076FF] text-white shadow-xs">
                  <Rocket className="h-3 w-3" />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#0060E6] dark:text-sky-300 tracking-wide">
                  Technology Partner for Growing Businesses
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[64px] font-extrabold tracking-tight text-[#0B192C] dark:text-white leading-[1.08]">
              Transform Your Ideas
              <span className="block mt-1 sm:mt-1.5">Into Powerful</span>
              <span className="block mt-1 sm:mt-1.5 text-[#0076FF] dark:text-[#38BDF8]">
                Digital Solutions.
              </span>
            </h1>

            {/* Subheading / Value Proposition */}
            <p className="mt-6 max-w-xl text-base sm:text-lg md:text-[19px] leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
              We build modern websites, intelligent ERP solutions and custom software
              that help businesses streamline operations and accelerate growth.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4">
              {/* Primary Blue Button */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#006CEE] to-[#0084FF] px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:shadow-blue-500/45 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* Secondary Pill Button */}
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-900/80 dark:border-slate-600 bg-white dark:bg-slate-900/90 px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-slate-900 dark:text-white shadow-xs transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-950 dark:hover:border-slate-400 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Our Work</span>
                <span className="text-[11px] ml-1 text-slate-900 dark:text-white transition-transform duration-200 group-hover:translate-x-0.5">
                  ▶
                </span>
              </Link>
            </div>

            {/* 3 Core Services Horizontal Bar */}
            <div className="mt-10 pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
              <Link
                href="/services/custom-website-development"
                className="inline-flex items-center gap-2 transition hover:text-[#0076FF]"
              >
                <Code2 className="h-4 w-4 sm:h-5 sm:w-5 text-[#0076FF]" strokeWidth={2.2} />
                <span>Web Development</span>
              </Link>

              <div className="hidden sm:block h-4 w-px bg-slate-300 dark:bg-slate-700" />

              <Link
                href="/services/frappe-erpnext-solutions"
                className="inline-flex items-center gap-2 transition hover:text-[#0076FF]"
              >
                <Boxes className="h-4 w-4 sm:h-5 sm:w-5 text-[#0076FF]" strokeWidth={2} />
                <span>Frappe & ERPNext</span>
              </Link>

              <div className="hidden sm:block h-4 w-px bg-slate-300 dark:bg-slate-700" />

              <Link
                href="/services/custom-business-software"
                className="inline-flex items-center gap-2 transition hover:text-[#0076FF]"
              >
                <Settings2 className="h-4 w-4 sm:h-5 sm:w-5 text-[#0076FF]" strokeWidth={2} />
                <span>Custom Software</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Realistic 3D Workspace Mockup with ERPNext Dashboard, Laptop & Phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0"
          >
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-tr from-blue-500/10 via-cyan-400/15 to-transparent rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative w-full max-w-[680px] lg:max-w-none transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src="/images/hero-devices-blended.webp"
                alt="Zynovix ERPNext Dashboard on iMac, Modern Web App on MacBook, and Mobile App on iPhone Workspace"
                width={1002}
                height={670}
                priority
                quality={92}
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Organic Wave Shelf Transition into Bottom Trust Pillars */}
      <div className="relative w-full overflow-hidden leading-none mt-4 sm:mt-6">
        <svg
          className="relative block w-full h-8 sm:h-12 lg:h-14 text-white dark:text-[#0b1120]"
          viewBox="0 0 1440 50"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,28 C320,48 640,18 1020,24 C1220,27 1360,12 1440,4 L1440,50 L0,50 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Bottom 4 Trust Pillars Bar */}
      <div className="relative bg-white dark:bg-[#0b1120] border-b border-slate-100 dark:border-slate-800/80 py-6 sm:py-8 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 items-center">
            {/* 1. Trusted Technology Partner */}
            <div className="flex items-center gap-3.5 lg:justify-center lg:px-6">
              <Handshake className="h-8 w-8 text-[#0076FF] shrink-0" strokeWidth={1.8} />
              <div className="text-left">
                <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-tight">
                  Trusted Technology
                </p>
                <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-tight">
                  Partner
                </p>
              </div>
            </div>

            {/* 2. Scalable & Reliable Solutions */}
            <div className="flex items-center gap-3.5 lg:justify-center lg:px-6 lg:border-l lg:border-slate-200 dark:lg:border-slate-800">
              <ShieldCheck className="h-8 w-8 text-[#0076FF] shrink-0" strokeWidth={1.8} />
              <div className="text-left">
                <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-tight">
                  Scalable & Reliable
                </p>
                <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-tight">
                  Solutions
                </p>
              </div>
            </div>

            {/* 3. Dedicated Support */}
            <div className="flex items-center gap-3.5 lg:justify-center lg:px-6 lg:border-l lg:border-slate-200 dark:lg:border-slate-800">
              <Headset className="h-8 w-8 text-[#0076FF] shrink-0" strokeWidth={1.8} />
              <div className="text-left">
                <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-tight">
                  Dedicated Support
                </p>
              </div>
            </div>

            {/* 4. Driving Business Growth Together */}
            <div className="flex items-center gap-3.5 lg:justify-center lg:px-6 lg:border-l lg:border-slate-200 dark:lg:border-slate-800">
              <svg
                className="h-8 w-8 text-[#0076FF] shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 20V10" />
                <path d="M12 20V4" />
                <path d="M6 20v-6" />
                <path d="M4 8l5-5 5 5 6-6" />
                <path d="M16 2h4v4" />
              </svg>
              <div className="text-left">
                <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-tight">
                  Driving Business
                </p>
                <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-tight">
                  Growth Together
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
