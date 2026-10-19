"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle, Quote, TrendingUp } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  metric: string;
  metricLabel: string;
  service: string;
  serviceColor: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Zynovix revolutionized our shop floor and inventory ledger. Their Frappe ERPNext deployment unified multi-warehouse accounting, automated GST e-invoicing, and completely eliminated manual spreadsheet reconciliation.",
    name: "Rajesh Patel",
    role: "Chief Operating Officer",
    company: "Apex Precision Engineering",
    metric: "65% Faster",
    metricLabel: "Month-End Reconciliation",
    service: "Frappe & ERPNext",
    serviceColor: "text-blue-500 bg-blue-500/10 border-blue-500/20",
  },
  {
    quote:
      "Before Zynovix, managing Agoda, Booking.com, and direct walk-ins was a constant risk of double bookings. Their hotel PMS and channel manager synced room inventory in real-time and delighted our front-desk staff.",
    name: "Maya Sen",
    role: "General Manager",
    company: "Azure Bay Boutique Resort",
    metric: "0 Overbookings",
    metricLabel: "+42% Direct Website Revenue",
    service: "Hotel Management Suite",
    serviceColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
  },
  {
    quote:
      "Our previous e-commerce storefront was sluggish and losing mobile buyers. Zynovix rebuilt the web application on Next.js 16 with edge caching. Our Core Web Vitals score hit 98+ and conversion jumped immediately.",
    name: "Kabir Mehta",
    role: "Head of Digital Growth",
    company: "Velox Lifestyle Goods",
    metric: "0.8s LCP",
    metricLabel: "34% Conversion Uplift",
    service: "Custom Next.js Web Dev",
    serviceColor: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    quote:
      "Integrating our proprietary logistics tracking with ERPNext seemed daunting until Zynovix built fault-tolerant microservice webhooks. Telematics data now streams in sub-second latency with zero dropped events.",
    name: "Amit Varma",
    role: "VP of Enterprise Technology",
    company: "TransGlobal Supply Chain",
    metric: "Sub-Second",
    metricLabel: "Real-time API Sync",
    service: "API & System Integration",
    serviceColor: "text-violet-500 bg-violet-500/10 border-violet-500/20",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-[#050816]">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/4 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute right-1/4 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            Client Success & Proven ROI
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Trusted by Fast-Scaling Enterprises & Industry Leaders
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Real stories of business automation, zero-downtime migrations, and high-performance digital architectures delivered by Zynovix.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white/90 p-6 sm:p-8 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-cyan-500 hover:shadow-cyan-500/10 dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div>
                {/* Top Row: Service Tag & Star Rating */}
                <div className="flex items-center justify-between gap-2 flex-wrap mb-5">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${item.serviceColor}`}
                  >
                    {item.service}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className="fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Metric Badge */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-white/5 px-3 py-1.5 text-xs">
                  <TrendingUp size={14} className="text-cyan-500" />
                  <span className="font-bold text-slate-900 dark:text-white">
                    {item.metric}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    — {item.metricLabel}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author & Verification */}
              <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.role}, <span className="text-slate-700 dark:text-slate-300 font-medium">{item.company}</span>
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                  <CheckCircle size={13} />
                  <span>Verified Client</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Impact Numbers */}
        <div className="mt-16 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900/40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-cyan-500 dark:text-cyan-400">
                99.4%
              </p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                Client Satisfaction Score
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-blue-500 dark:text-blue-400">
                40+
              </p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                Enterprise Workflows Automated
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-violet-500 dark:text-violet-400">
                0 Downtime
              </p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                Data Migration Guarantee
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-emerald-500 dark:text-emerald-400">
                &lt; 1 Hour
              </p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                Average Emergency SLA Response
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
