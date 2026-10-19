"use client";

import Image from "next/image";
import {
  CheckCircle,
  Database,
  Layers,
  Lock,
  Server,
  Zap,
  Globe,
  Smartphone,
  Cpu,
  RefreshCw,
  Sliders,
  DollarSign,
  Activity,
  HardDrive,
  Calendar,
  BedDouble,
  UserCheck,
  Receipt,
  FileSpreadsheet,
  CheckCircle2,
  XCircle,
  Link2,
} from "lucide-react";

// 1. Website Development Visual
export function WebsiteMockupVisual() {
  return (
    <div className="relative mx-auto w-full rounded-2xl border border-slate-200/90 bg-white/95 p-4 sm:p-5 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/90">
      {/* Top Browser Bar */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-rose-500/80" />
          <span className="h-3 w-3 rounded-full bg-amber-500/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400 font-mono">
          <Lock className="h-3 w-3 text-emerald-500" />
          <span>https://storefront.zynovix.dev</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">
          <span>98+ Score</span>
        </div>
      </div>

      {/* Main Website Showcase Image */}
      <div className="mt-4 space-y-3">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200/80 bg-slate-950 dark:border-slate-800">
          <Image
            src="/images/services/custom-website-development.webp"
            alt="Custom responsive website development and Next.js 16 web application interface engineered by Zynovix"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-slate-950/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
            <Zap className="h-3.5 w-3.5 text-cyan-400" /> Next.js 16 SSR & Edge Caching
          </div>
        </div>

        {/* Performance Metrics Cards */}
        <div className="grid grid-cols-4 gap-2 pt-1 text-center">
          <div className="rounded-lg bg-slate-50 p-2 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-800">
            <div className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">100</div>
            <div className="text-[9px] text-slate-500 uppercase tracking-wider">Perf</div>
          </div>
          <div className="rounded-lg bg-slate-50 p-2 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-800">
            <div className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">100</div>
            <div className="text-[9px] text-slate-500 uppercase tracking-wider">A11y</div>
          </div>
          <div className="rounded-lg bg-slate-50 p-2 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-800">
            <div className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">100</div>
            <div className="text-[9px] text-slate-500 uppercase tracking-wider">SEO</div>
          </div>
          <div className="rounded-lg bg-slate-50 p-2 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-800">
            <div className="text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400">0.8s</div>
            <div className="text-[9px] text-slate-500 uppercase tracking-wider">LCP</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Frappe & ERPNext Visual
export function ERPNextMockupVisual() {
  return (
    <div className="relative mx-auto w-full rounded-2xl border border-slate-200/90 bg-white/95 p-4 sm:p-5 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/90">
      {/* ERP Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-xs font-bold text-white">
            E
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">ERPNext Enterprise Hub</div>
            <div className="text-[10px] text-slate-500">Connected to MariaDB • Live Sync</div>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Active Workflows
        </span>
      </div>

      {/* Main ERP Image Showcase */}
      <div className="mt-4 space-y-3">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200/80 bg-slate-950 dark:border-slate-800">
          <Image
            src="/images/services/frappe-erpnext-solutions.webp"
            alt="Enterprise Frappe ERPNext accounting, multi-warehouse stock, and custom DocType workflow dashboard by Zynovix"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-slate-950/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
            <Database className="h-3.5 w-3.5 text-blue-400" /> Multi-Warehouse & GST Ledger
          </div>
        </div>

        {/* Modules Pill Navigator */}
        <div className="flex flex-wrap gap-1.5 text-[10px]">
          {["Accounting", "Inventory", "Manufacturing", "Sales CRM", "Custom DocTypes"].map((m, i) => (
            <span
              key={m}
              className={`rounded-md px-2 py-0.5 font-medium ${
                i === 0
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
              }`}
            >
              {m}
            </span>
          ))}
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="rounded-lg border border-slate-200/70 bg-slate-50/70 p-2.5 dark:border-slate-800 dark:bg-slate-800/40">
            <span className="text-[10px] text-slate-500 block">Ledger Automation</span>
            <span className="font-bold text-slate-900 dark:text-white">65% Faster Closes</span>
          </div>
          <div className="rounded-lg border border-slate-200/70 bg-slate-50/70 p-2.5 dark:border-slate-800 dark:bg-slate-800/40">
            <span className="text-[10px] text-slate-500 block">E-Invoicing Sync</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">100% GST Valid</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. Hotel Management Visual
export function HotelMockupVisual() {
  return (
    <div className="relative mx-auto w-full rounded-2xl border border-slate-200/90 bg-white/95 p-4 sm:p-5 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/90">
      {/* Hospitality Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-xs font-bold text-white">
            <BedDouble className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Hospitality Suite PMS</div>
            <div className="text-[10px] text-slate-500">Live Booking & Front Desk Desk</div>
          </div>
        </div>
        <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-semibold text-amber-600 dark:bg-amber-950/40 dark:text-amber-400">
          94% Occupancy Today
        </span>
      </div>

      {/* Main Hotel Image Showcase */}
      <div className="mt-4 space-y-3">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200/80 bg-slate-950 dark:border-slate-800">
          <Image
            src="/images/services/hotel-management-software.webp"
            alt="Hotel PMS software tablet interface with room booking calendar and live OTA channel manager sync by Zynovix"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-slate-950/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
            <BedDouble className="h-3.5 w-3.5 text-amber-400" /> 0 Overbooking Guarantee • OTA Sync
          </div>
        </div>

        {/* POS Bill Integration Bar */}
        <div className="rounded-xl border border-slate-200/80 bg-slate-50 p-2.5 dark:border-slate-800 dark:bg-slate-800/50 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Receipt className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <div>
              <div className="font-semibold text-slate-800 dark:text-slate-200 text-[11px]">Restaurant POS Room-Charge</div>
              <div className="text-[9px] text-slate-500">Instant Folio Posting • Agoda & Airbnb Synced</div>
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Active</span>
        </div>
      </div>
    </div>
  );
}

// 4. Custom Business Software Visual
export function CustomBusinessSoftwareVisual() {
  return (
    <div className="relative mx-auto w-full rounded-2xl border border-slate-200/90 bg-white/95 p-4 sm:p-5 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/90">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
        <div className="text-xs font-bold text-slate-900 dark:text-white">
          Custom SaaS & Automated Workflows
        </div>
        <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
          70% Time Saved
        </span>
      </div>

      {/* Main Custom Software Image Showcase */}
      <div className="mt-4 space-y-3">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200/80 bg-slate-950 dark:border-slate-800">
          <Image
            src="/images/services/custom-business-software.webp"
            alt="Custom enterprise business software and automated workflow pipeline dashboard designed by Zynovix"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-slate-950/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
            <Cpu className="h-3.5 w-3.5 text-emerald-400" /> Operational Automation Engine
          </div>
        </div>

        {/* Transformation Checklist */}
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="rounded-lg bg-emerald-50/60 p-2 text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-300">
            <span className="font-bold block">✓ RBAC Security</span>
            <span className="text-[9px] text-slate-600 dark:text-slate-400">Granular permissions</span>
          </div>
          <div className="rounded-lg bg-emerald-50/60 p-2 text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-300">
            <span className="font-bold block">✓ Auto Ingestion</span>
            <span className="text-[9px] text-slate-600 dark:text-slate-400">Zero manual entry</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 5. API & Integrations Visual
export function ApiIntegrationsVisual() {
  return (
    <div className="relative mx-auto w-full rounded-2xl border border-slate-200/90 bg-white/95 p-4 sm:p-5 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/90">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-xs font-bold text-white">
            <Link2 className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">API Integration Topology</div>
            <div className="text-[10px] text-slate-500">Bi-directional Webhooks & Microservices</div>
          </div>
        </div>
        <span className="rounded-full bg-violet-50 px-2.5 py-0.5 text-[10px] font-semibold text-violet-600 dark:bg-violet-950/40 dark:text-violet-400">
          24/7 Monitored
        </span>
      </div>

      {/* Main API Image Showcase */}
      <div className="mt-4 space-y-3">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200/80 bg-slate-950 dark:border-slate-800">
          <Image
            src="/images/services/api-system-integrations.webp"
            alt="3D enterprise API data pipeline connecting microservices and secure payment gateways engineered by Zynovix"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-slate-950/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
            <Layers className="h-3.5 w-3.5 text-violet-400" /> Sub-Second Webhooks & Payment Gateway
          </div>
        </div>

        {/* Live Payload Stream Box */}
        <div className="rounded-xl bg-slate-900 p-2.5 font-mono text-[10px] text-slate-300">
          <div className="flex items-center justify-between text-[9px] text-slate-400 border-b border-slate-800 pb-1 mb-1">
            <span>LIVE EVENT STREAM</span>
            <span className="text-emerald-400 font-bold">200 OK • 38ms</span>
          </div>
          <div className="text-cyan-400 truncate">POST /api/v1/integrations/order-sync</div>
        </div>
      </div>
    </div>
  );
}

// 6. Cloud Hosting & Maintenance Visual
export function CloudHostingVisual() {
  return (
    <div className="relative mx-auto w-full rounded-2xl border border-slate-200/90 bg-white/95 p-4 sm:p-5 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/90">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-r from-sky-500 to-cyan-600 text-xs font-bold text-white">
            <Server className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Cloud Server Telemetry</div>
            <div className="text-[10px] text-slate-500">Continuous Monitoring & Backups</div>
          </div>
        </div>
        <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
          99.98% SLA
        </span>
      </div>

      {/* Main Cloud Image Showcase */}
      <div className="mt-4 space-y-3">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200/80 bg-slate-950 dark:border-slate-800">
          <Image
            src="/images/services/cloud-hosting-maintenance.webp"
            alt="High-availability enterprise cloud server infrastructure and 99.9% uptime monitoring console by Zynovix"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-slate-950/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
            <Server className="h-3.5 w-3.5 text-sky-400" /> AWS & Docker Infrastructure • 24/7 Watch
          </div>
        </div>

        {/* Gauges */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="rounded-lg border border-slate-200/80 bg-slate-50 p-2 dark:border-slate-800 dark:bg-slate-800/40">
            <span className="text-[9px] text-slate-500 block">CPU LOAD</span>
            <span className="font-bold text-slate-900 dark:text-white">18%</span>
          </div>
          <div className="rounded-lg border border-slate-200/80 bg-slate-50 p-2 dark:border-slate-800 dark:bg-slate-800/40">
            <span className="text-[9px] text-slate-500 block">RAM UTIL</span>
            <span className="font-bold text-slate-900 dark:text-white">42%</span>
          </div>
          <div className="rounded-lg border border-slate-200/80 bg-slate-50 p-2 dark:border-slate-800 dark:bg-slate-800/40">
            <span className="text-[9px] text-slate-500 block">DAILY SNAPSHOT</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
}
