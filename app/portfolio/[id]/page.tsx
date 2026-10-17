import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Calendar,
  Building2,
  TrendingUp,
  Layers,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import ProjectCard from "@/components/portfolio/ProjectCard";
import {
  portfolioProjects,
  getProjectById,
  getRelatedProjects,
} from "@/data/portfolio";

export function generateStaticParams() {
  return portfolioProjects.flatMap((p) => [
    { id: p.id },
    ...(p.slug ? [{ id: p.slug }] : []),
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found | Zynovix Tech Solutions",
    };
  }

  return {
    title: `${project.title} | Zynovix Tech Solutions Portfolio`,
    description: project.description,
  };
}

const categoryStyles: Record<string, { badge: string; border: string }> = {
  ERP: {
    badge: "text-violet-600 dark:text-violet-400 border-violet-500/30 bg-violet-500/10",
    border: "hover:border-violet-500/50",
  },
  "Web App": {
    badge: "text-cyan-600 dark:text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    border: "hover:border-cyan-500/50",
  },
  "Custom Software": {
    badge: "text-orange-600 dark:text-orange-400 border-orange-500/30 bg-orange-500/10",
    border: "hover:border-orange-500/50",
  },
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const related = getRelatedProjects(project.id, 2);
  const catTheme = categoryStyles[project.category] || categoryStyles["Web App"];

  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-[#050816] dark:text-white">
      {/* Top Hero Section */}
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-6xl px-6">
          {/* Breadcrumb / Back button */}
          <div className="mb-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Projects
            </Link>
          </div>

          {/* Title & Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full border px-3.5 py-1 text-xs font-semibold ${catTheme.badge}`}
            >
              {project.category}
            </span>
            {project.featured && (
              <span className="rounded-full bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
                ⭐ Featured Case Study
              </span>
            )}
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
            {project.title}
          </h1>

          {project.tagline && (
            <p className="mt-4 max-w-3xl text-lg text-slate-600 md:text-xl dark:text-slate-300 font-normal leading-relaxed">
              {project.tagline}
            </p>
          )}

          {/* Key Meta Strip */}
          <div className="mt-10 grid grid-cols-2 gap-4 rounded-3xl border border-slate-200 bg-slate-50/70 p-6 md:grid-cols-4 dark:border-slate-800 dark:bg-slate-900/60">
            <div>
              <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <Building2 className="h-3.5 w-3.5" />
                Client
              </span>
              <p className="mt-1.5 text-base font-semibold text-slate-900 dark:text-white">
                {project.client || "Confidential Enterprise"}
              </p>
            </div>

            <div>
              <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <Calendar className="h-3.5 w-3.5" />
                Timeline
              </span>
              <p className="mt-1.5 text-base font-semibold text-slate-900 dark:text-white">
                {project.timeline || "8 - 12 Weeks"}
              </p>
            </div>

            <div>
              <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <Layers className="h-3.5 w-3.5" />
                Category
              </span>
              <p className="mt-1.5 text-base font-semibold text-slate-900 dark:text-white">
                {project.category}
              </p>
            </div>

            <div>
              <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <ShieldCheck className="h-3.5 w-3.5" />
                Status
              </span>
              <p className="mt-1.5 flex items-center gap-2 text-base font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Deployed & Active
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Showcase */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-xl dark:border-slate-800">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Impact & Key Results */}
      {project.results && project.results.length > 0 && (
        <section className="pb-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 p-8 dark:border-cyan-500/30">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold text-sm">
                <TrendingUp className="h-4 w-4" />
                Key Project Impact & Measurable Results
              </div>
              <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
                {project.results.map((res, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80"
                  >
                    <div className="text-3xl font-extrabold text-slate-900 md:text-4xl dark:text-white">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                        {res.metric}
                      </span>
                    </div>
                    <p className="mt-2 text-xs md:text-sm font-medium text-slate-600 dark:text-slate-400">
                      {res.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Overview, Challenge & Solution */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-12">
            {/* Project Overview */}
            {project.overview && (
              <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                  <Sparkles className="h-5 w-5 text-cyan-500" />
                  Project Overview
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
                  {project.overview}
                </p>
              </div>
            )}

            {/* Challenge & Solution Grid */}
            {(project.challenge || project.solution) && (
              <div className="grid gap-8 md:grid-cols-2">
                {project.challenge && (
                  <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8 dark:border-red-500/30">
                    <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                      The Problem
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                      The Challenge
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base dark:text-slate-300">
                      {project.challenge}
                    </p>
                  </div>
                )}

                {project.solution && (
                  <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8 dark:border-cyan-500/30">
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                      The Execution
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                      The Zynovix Solution
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base dark:text-slate-300">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Key Features */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <section className="pb-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                Capabilities
              </span>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                Key Features Delivered
              </h2>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-500 dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                    {feat.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack & Deliverables Grid */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Technologies */}
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Technology Stack
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Frameworks, libraries, and tools chosen for optimal speed and reliability.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {project.techStack ? (
                  project.techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-800 dark:border-slate-700/60 dark:bg-slate-800/60 dark:text-slate-200"
                    >
                      <span className="font-semibold">{tech.name}</span>
                      <span className="ml-2 text-xs text-slate-400 dark:text-slate-500">
                        ({tech.category})
                      </span>
                    </div>
                  ))
                ) : (
                  project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 dark:bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))
                )}
              </div>
            </div>

            {/* Project Deliverables */}
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Scope & Deliverables
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Milestones and engineering assets handed over to the client.
              </p>

              <ul className="mt-6 space-y-3">
                {project.deliverables && project.deliverables.length > 0 ? (
                  project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))
                ) : (
                  project.tags.map((tag, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <span className="h-2 w-2 rounded-full bg-cyan-500 shrink-0" />
                      <span>{tag} Module Implementation</span>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-center text-white shadow-xl md:p-12">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to Build a Similar Solution?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-blue-100 md:text-lg">
              Whether you need customized Frappe ERPNext, a scalable web application,
              or tailor-made workflow automation, our engineering team is here to assist.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-8 py-3.5 font-semibold text-blue-700 transition hover:bg-blue-50 shadow-md"
              >
                Discuss Your Project
              </Link>
              <Link
                href="/portfolio"
                className="rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Explore More Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="pb-24 border-t border-slate-200/60 dark:border-slate-800/60 pt-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  Portfolio
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Other Projects You May Like
                </h3>
              </div>
              <Link
                href="/portfolio"
                className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
              >
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {related.map((relProject) => (
                <ProjectCard key={relProject.id} project={relProject} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
