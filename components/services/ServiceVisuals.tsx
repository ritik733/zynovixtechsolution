"use client";

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
          <span>https://acme-global.com</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">
          <span>98+ Score</span>
        </div>
      </div>

      {/* Main Website Preview Mockup */}
      <div className="mt-4 space-y-3">
        {/* Mock Header */}
        <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500" />
            <div className="h-3 w-20 rounded bg-slate-300 dark:bg-slate-700" />
          </div>
          <div className="flex gap-2">
            <div className="h-2.5 w-10 rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-2.5 w-10 rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-2.5 w-12 rounded bg-cyan-500/60" />
          </div>
        </div>

        {/* Mock Hero Banner */}
        <div className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 sm:p-5 text-white shadow-inner">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-[10px] font-medium text-cyan-300">
            <Zap className="h-3 w-3 text-cyan-400" /> Next.js 16 SSR & Edge CDN
          </div>
          <h4 className="mt-2 text-base sm:text-lg font-bold">
            Accelerating Digital Commerce & Enterprise Growth
          </h4>
          <p className="mt-1 text-xs text-slate-300">
            Tailored UI architecture optimized for conversions, core web vitals, and search rankings.
          </p>
          <div className="mt-3 flex gap-2">
            <div className="h-7 w-24 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-[11px] font-semibold flex items-center justify-center text-white">
              Launch Project
            </div>
            <div className="h-7 w-20 rounded-lg border border-slate-700 text-[11px] flex items-center justify-center text-slate-300">
              Live Demo
            </div>
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

      {/* Floating Smartphone Mockup Overlay */}
      <div className="absolute -bottom-5 -right-3 sm:-right-4 w-32 sm:w-36 rounded-2xl border-2 border-slate-300 bg-white p-2 shadow-2xl dark:border-slate-700 dark:bg-slate-950">
        <div className="flex items-center justify-between border-b border-slate-100 pb-1 dark:border-slate-800">
          <span className="text-[8px] font-bold text-slate-500">9:41</span>
          <div className="h-1.5 w-6 rounded-full bg-slate-400 dark:bg-slate-600" />
        </div>
        <div className="mt-1.5 space-y-1">
          <div className="h-2 w-14 rounded bg-cyan-500" />
          <div className="h-1.5 w-full rounded bg-slate-200 dark:bg-slate-800" />
          <div className="h-10 rounded-lg bg-slate-100 dark:bg-slate-900 p-1 flex items-center justify-center">
            <Smartphone className="h-4 w-4 text-cyan-500" />
          </div>
          <div className="text-[8px] text-center font-bold text-slate-600 dark:text-slate-300">
            100% Mobile Ready
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

      {/* Modules Navigator Pill */}
      <div className="mt-3 flex flex-wrap gap-1.5 text-[10px]">
        {["Accounting", "Inventory", "Manufacturing", "Sales CRM", "HR & Payroll", "Custom DocTypes"].map((m, i) => (
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

      {/* KPI Cards */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-slate-200/70 bg-slate-50/70 p-3 dark:border-slate-800 dark:bg-slate-800/40">
          <div className="text-[10px] font-semibold text-slate-500">Monthly Ledger Flow</div>
          <div className="mt-1 text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            $482,900.00
          </div>
          <div className="mt-0.5 text-[9px] text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
            <Zap className="h-2.5 w-2.5" /> Automated GST Reconciliation
          </div>
        </div>

        <div className="rounded-xl border border-slate-200/70 bg-slate-50/70 p-3 dark:border-slate-800 dark:bg-slate-800/40">
          <div className="text-[10px] font-semibold text-slate-500">Multi-Warehouse Stock</div>
          <div className="mt-1 text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            14,280 Units
          </div>
          <div className="mt-0.5 text-[9px] text-cyan-600 dark:text-cyan-400 flex items-center gap-0.5">
            <CheckCircle className="h-2.5 w-2.5" /> 4 Hubs Synchronized
          </div>
        </div>
      </div>

      {/* Recent Workflow Table Mockup */}
      <div className="mt-4 rounded-xl border border-slate-200/80 bg-white overflow-hidden dark:border-slate-800 dark:bg-slate-950/50">
        <div className="bg-slate-100/70 px-3 py-1.5 text-[10px] font-bold text-slate-600 dark:bg-slate-800/80 dark:text-slate-400 flex justify-between">
          <span>Custom DocType</span>
          <span>Status</span>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-800 text-[11px]">
          <div className="p-2.5 flex items-center justify-between">
            <div>
              <div className="font-semibold text-slate-800 dark:text-slate-200">WO-2026-0814 (Batch Assembly)</div>
              <div className="text-[9px] text-slate-500">Plant Alpha • Auto Raw Material Issue</div>
            </div>
            <span className="rounded bg-emerald-100 px-2 py-0.5 text-[9px] font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              Approved
            </span>
          </div>
          <div className="p-2.5 flex items-center justify-between">
            <div>
              <div className="font-semibold text-slate-800 dark:text-slate-200">SINV-0042 (Enterprise Client)</div>
              <div className="text-[9px] text-slate-500">Multi-Currency • E-Invoice Generated</div>
            </div>
            <span className="rounded bg-blue-100 px-2 py-0.5 text-[9px] font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              Paid
            </span>
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
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-xs font-bold text-white">
            <BedDouble className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Hospitality Suite PMS</div>
            <div className="text-[10px] text-slate-500">Live Booking & Front Desk Desk</div>
          </div>
        </div>
        <span className="rounded-full bg-cyan-50 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400">
          94% Occupancy Today
        </span>
      </div>

      {/* Visual Booking Calendar / Room Status Grid */}
      <div className="mt-4 space-y-2.5">
        <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600 dark:text-slate-400">
          <span>Room Allocation Grid</span>
          <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-mono">Today: Oct 19</span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-xs">
          {/* Room 101 */}
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-50/50 p-2.5 dark:bg-emerald-950/20">
            <div className="flex justify-between items-center text-[10px]">
              <span className="font-bold text-emerald-800 dark:text-emerald-300">Room 101</span>
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
            </div>
            <div className="mt-1 font-semibold text-slate-800 dark:text-slate-200 text-[11px]">Deluxe King</div>
            <div className="text-[9px] text-slate-500 mt-0.5">Checked-in (Folio: $480)</div>
            <div className="mt-1.5 rounded bg-emerald-200/60 dark:bg-emerald-900/60 px-1.5 py-0.5 text-[8px] font-bold text-emerald-800 dark:text-emerald-300 text-center">
              Occupied
            </div>
          </div>

          {/* Room 204 */}
          <div className="rounded-xl border border-blue-500/30 bg-blue-50/50 p-2.5 dark:bg-blue-950/20">
            <div className="flex justify-between items-center text-[10px]">
              <span className="font-bold text-blue-800 dark:text-blue-300">Room 204</span>
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            </div>
            <div className="mt-1 font-semibold text-slate-800 dark:text-slate-200 text-[11px]">Sea View Suite</div>
            <div className="text-[9px] text-slate-500 mt-0.5">Arrival 2:00 PM (Stripe Direct)</div>
            <div className="mt-1.5 rounded bg-blue-200/60 dark:bg-blue-900/60 px-1.5 py-0.5 text-[8px] font-bold text-blue-800 dark:text-blue-300 text-center">
              Reserved
            </div>
          </div>

          {/* Room 302 */}
          <div className="rounded-xl border border-amber-500/30 bg-amber-50/50 p-2.5 dark:bg-amber-950/20">
            <div className="flex justify-between items-center text-[10px]">
              <span className="font-bold text-amber-800 dark:text-amber-300">Room 302</span>
              <span className="h-2 w-2 rounded-full bg-amber-500" />
            </div>
            <div className="mt-1 font-semibold text-slate-800 dark:text-slate-200 text-[11px]">Executive Twin</div>
            <div className="text-[9px] text-slate-500 mt-0.5">Housekeeping Inspection</div>
            <div className="mt-1.5 rounded bg-amber-200/60 dark:bg-amber-900/60 px-1.5 py-0.5 text-[8px] font-bold text-amber-800 dark:text-amber-300 text-center">
              Cleaned
            </div>
          </div>
        </div>

        {/* POS Bill Integration Bar */}
        <div className="mt-3 rounded-xl border border-slate-200/80 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-800/50 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Receipt className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
            <div>
              <div className="font-semibold text-slate-800 dark:text-slate-200">Dining & Spa POS Room-Charge</div>
              <div className="text-[10px] text-slate-500">Instant Folio Posting • Zero Discrepancy</div>
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Synced</span>
        </div>
      </div>
    </div>
  );
}

// 4. Custom Business Software Visual
export function CustomBusinessSoftwareVisual() {
  return (
    <div className="relative mx-auto w-full rounded-2xl border border-slate-200/90 bg-white/95 p-4 sm:p-5 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/90">
      {/* Header comparison title */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
        <div className="text-xs font-bold text-slate-900 dark:text-white">
          Workflow Transformation Overview
        </div>
        <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-semibold text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
          70% Time Saved
        </span>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Before Column */}
        <div className="rounded-xl border border-rose-200/80 bg-rose-50/40 p-3 dark:border-rose-950 dark:bg-rose-950/10">
          <div className="flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400">
            <XCircle className="h-4 w-4" />
            <span>Before: Disconnected</span>
          </div>
          <ul className="mt-2 space-y-1.5 text-[11px] text-slate-600 dark:text-slate-400">
            <li className="flex items-start gap-1">
              <span className="text-rose-500">•</span> Fragmented Excel files & spreadsheets
            </li>
            <li className="flex items-start gap-1">
              <span className="text-rose-500">•</span> 4+ hours daily spent copy-pasting data
            </li>
            <li className="flex items-start gap-1">
              <span className="text-rose-500">•</span> No approval audit logs or access control
            </li>
            <li className="flex items-start gap-1">
              <span className="text-rose-500">•</span> Frequent shipping/billing human mistakes
            </li>
          </ul>
        </div>

        {/* After Column */}
        <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/40 p-3 dark:border-emerald-950 dark:bg-emerald-950/10">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="h-4 w-4" />
            <span>After: Custom Platform</span>
          </div>
          <ul className="mt-2 space-y-1.5 text-[11px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-1">
              <span className="text-emerald-500 font-bold">✓</span> Centralized PostgreSQL Single Truth
            </li>
            <li className="flex items-start gap-1">
              <span className="text-emerald-500 font-bold">✓</span> Automated PDF manifest ingestion
            </li>
            <li className="flex items-start gap-1">
              <span className="text-emerald-500 font-bold">✓</span> Granular RBAC Role-Based Permissions
            </li>
            <li className="flex items-start gap-1">
              <span className="text-emerald-500 font-bold">✓</span> 99.4% Operational tracking accuracy
            </li>
          </ul>
        </div>
      </div>

      {/* Modern Dashboard preview strip */}
      <div className="mt-4 rounded-xl border border-slate-200/70 bg-slate-900 p-3 text-white">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-cyan-400" />
            <span className="font-semibold text-xs">Live Dispatch & Operational Engine</span>
          </div>
          <span className="text-[10px] font-mono text-cyan-300">Automated Pipeline</span>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-2 text-center text-[10px]">
          <div className="rounded bg-slate-800 p-1.5">
            <div className="font-bold text-cyan-400">82 Orders</div>
            <div className="text-[9px] text-slate-400">Processed Today</div>
          </div>
          <div className="rounded bg-slate-800 p-1.5">
            <div className="font-bold text-emerald-400">0 Latency</div>
            <div className="text-[9px] text-slate-400">Auto Handoff</div>
          </div>
          <div className="rounded bg-slate-800 p-1.5">
            <div className="font-bold text-indigo-400">100% Audit</div>
            <div className="text-[9px] text-slate-400">Traceability</div>
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
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-xs font-bold text-white">
            <Link2 className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">API Integration Topology</div>
            <div className="text-[10px] text-slate-500">Bi-directional Webhooks & REST Endpoints</div>
          </div>
        </div>
        <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
          24/7 Monitored
        </span>
      </div>

      {/* Network Node Flow */}
      <div className="mt-5 relative">
        <div className="grid grid-cols-3 items-center gap-3 text-center">
          {/* Source node */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 dark:border-slate-800 dark:bg-slate-800/60">
            <Globe className="h-5 w-5 mx-auto text-blue-500 mb-1" />
            <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200">Store / Web App</div>
            <div className="text-[9px] text-slate-500">Next.js / Shopify</div>
          </div>

          {/* Central Integration Engine */}
          <div className="rounded-xl border-2 border-cyan-500 bg-cyan-500/10 p-3 shadow-lg shadow-cyan-500/10">
            <RefreshCw className="h-5 w-5 mx-auto text-cyan-600 dark:text-cyan-400 animate-spin mb-1" style={{ animationDuration: "12s" }} />
            <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400">Zynovix API Hub</div>
            <div className="text-[9px] font-mono text-slate-500">Validate & Transform</div>
          </div>

          {/* Destination ERP / DB */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 dark:border-slate-800 dark:bg-slate-800/60">
            <Database className="h-5 w-5 mx-auto text-indigo-500 mb-1" />
            <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200">Frappe ERPNext</div>
            <div className="text-[9px] text-slate-500">Auto Sales Order</div>
          </div>
        </div>

        {/* Live Payload Stream Box */}
        <div className="mt-4 rounded-xl bg-slate-900 p-3 font-mono text-[10px] text-slate-300">
          <div className="flex items-center justify-between text-[9px] text-slate-400 border-b border-slate-800 pb-1 mb-1.5">
            <span>EVENT LOG</span>
            <span className="text-emerald-400 font-bold">200 OK • 42ms</span>
          </div>
          <div className="text-cyan-400">POST /api/v1/integrations/order-sync</div>
          <div className="text-slate-400 mt-0.5 truncate">
            {`{"event": "payment.succeeded", "invoice": "INV-892", "erp_synced": true}`}
          </div>
        </div>

        {/* Reliability Badges */}
        <div className="mt-3 flex items-center justify-around text-[10px] text-slate-600 dark:text-slate-400 pt-1">
          <span className="flex items-center gap-1 font-medium">
            <CheckCircle className="h-3 w-3 text-emerald-500" /> OAuth2 / Tokens
          </span>
          <span className="flex items-center gap-1 font-medium">
            <CheckCircle className="h-3 w-3 text-emerald-500" /> Auto Retries
          </span>
          <span className="flex items-center gap-1 font-medium">
            <CheckCircle className="h-3 w-3 text-emerald-500" /> Webhook HMAC
          </span>
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
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-xs font-bold text-white">
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

      {/* Metrics Gauges */}
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-xl border border-slate-200/80 bg-slate-50 p-2.5 dark:border-slate-800 dark:bg-slate-800/40">
          <div className="text-[10px] font-semibold text-slate-500">CPU Load</div>
          <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">18%</div>
          <div className="h-1.5 w-full bg-slate-200 rounded-full mt-1.5 overflow-hidden dark:bg-slate-700">
            <div className="h-full bg-emerald-500 w-[18%]" />
          </div>
        </div>

        <div className="rounded-xl border border-slate-200/80 bg-slate-50 p-2.5 dark:border-slate-800 dark:bg-slate-800/40">
          <div className="text-[10px] font-semibold text-slate-500">RAM Util</div>
          <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">42%</div>
          <div className="h-1.5 w-full bg-slate-200 rounded-full mt-1.5 overflow-hidden dark:bg-slate-700">
            <div className="h-full bg-cyan-500 w-[42%]" />
          </div>
        </div>

        <div className="rounded-xl border border-slate-200/80 bg-slate-50 p-2.5 dark:border-slate-800 dark:bg-slate-800/40">
          <div className="text-[10px] font-semibold text-slate-500">Daily Backup</div>
          <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-1">Verified</div>
          <div className="text-[9px] text-slate-400 mt-0.5">03:00 AM UTC</div>
        </div>
      </div>

      {/* Infrastructure Stack Cards */}
      <div className="mt-4 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 dark:border-slate-800 dark:bg-slate-800/30">
        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
          Infrastructure Stack & Security
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-800 dark:text-slate-200">
            <CheckCircle className="h-3.5 w-3.5 text-cyan-500" />
            <span>Nginx Reverse Proxy & SSL</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-800 dark:text-slate-200">
            <CheckCircle className="h-3.5 w-3.5 text-cyan-500" />
            <span>MariaDB / Postgres Tuning</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-800 dark:text-slate-200">
            <CheckCircle className="h-3.5 w-3.5 text-cyan-500" />
            <span>Offsite Encrypted Backups</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-800 dark:text-slate-200">
            <CheckCircle className="h-3.5 w-3.5 text-cyan-500" />
            <span>24/7 Heartbeat Monitoring</span>
          </div>
        </div>
      </div>
    </div>
  );
}
