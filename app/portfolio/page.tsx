import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Portfolio | Zynovix Tech Solutions",
  description: "Explore our recent work in custom web development, enterprise ERP systems, and workflow automation.",
};

const projects = [
  {
    title: "Zynovix Enterprise ERP",
    category: "ERP Software",
    image: "/images/team/Zeno_ai.png",
    description:
      "A modular enterprise resource planning system integrating real-time inventory management, automated purchase orders, and financial accounting.",
  },
  {
    title: "Supply Chain & Order Automation",
    category: "System Automation",
    image: "",
    description:
      "Automated logistics pipeline connecting e-commerce storefronts, warehouse tracking systems, invoice generation, and courier webhooks.",
  },
  {
    title: "Omnichannel Business Portal",
    category: "Web Development",
    image: "",
    description:
      "Modern, ultra-fast client portal built with Next.js and Tailwind CSS featuring customer onboarding, account management, and payment processing.",
  },
  {
    title: "Operations & Financial Analytics Dashboard",
    category: "Business Solutions",
    image: "",
    description:
      "Real-time executive reporting platform aggregating cross-departmental ERP data, profit-and-loss metrics, and operational expense alerts.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-transparent text-white relative min-h-screen">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-[-100px] -translate-x-1/2 w-[320px] sm:w-[600px] md:w-[800px] h-[250px] sm:h-[350px] rounded-full bg-cyan-600/15 blur-[120px] pointer-events-none" />

      {/* Hero Section – dark, with responsive top spacing */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-xs sm:text-sm text-cyan-400 mb-4 backdrop-blur-sm">
            <span>✨</span>
            <span>Case Studies &amp; Projects</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Our <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed px-2">
            A selection of projects showcasing our expertise in enterprise ERP software,
            custom web applications, and system automation.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-6 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {projects.length === 0 ? (
            <p className="text-center text-slate-400">No projects to display yet.</p>
          ) : (
            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="group rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-sm overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-56 w-full bg-slate-800/60 overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-slate-500">
                        No image
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-950/50 border border-cyan-800/30">
                      {project.category}
                    </span>
                    <h3 className="mt-3 text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed">
                      {project.description || "Cutting-edge solution crafted with modern digital technologies."}
                    </p>
                    <div className="mt-5 flex items-center text-cyan-400 font-medium text-sm sm:text-base transition group-hover:translate-x-1.5 min-h-[44px]">
                      <span>View Project</span>
                      <svg
                        className="ml-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 sm:py-20 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-6 sm:p-10 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Have a Project in Mind?</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              We'd love to help turn your ideas into high-performance digital reality. Let's discuss your roadmap.
            </p>
            <div className="mt-6 sm:mt-8 flex justify-center">
              <Link
                href="/contact"
                className="w-full min-[400px]:w-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 px-8 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-105 active:scale-95 min-h-[44px]"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}