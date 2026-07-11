import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Portfolio | Zynovix",
  description: "Explore our recent work in AI, web development, and cloud solutions.",
};

const projects = [
  {
    title: "Zeno AI Assistant",
    category: "AI Chatbot",
    image: "/images/team/Zeno_ai.png",
    description:
      "An intelligent conversational AI powered by LLMs, designed to handle complex queries with human-like understanding.",
  },
  // Uncomment more projects as you add them
  // {
  //   title: "Corporate Website",
  //   category: "Web Development",
  //   image: "/images/portfolio/corporate.jpg",
  //   description: "Modern, responsive corporate site with dynamic content management.",
  // },
  // {
  //   title: "Healthcare Dashboard",
  //   category: "Web Application",
  //   image: "/images/portfolio/healthcare.jpg",
  //   description: "Real-time patient data analytics and reporting dashboard.",
  // },
];

export default function PortfolioPage() {
  return (
    <main className="bg-[#050816] min-h-screen">
      {/* Hero Section – dark, with top spacing */}
      <section className="pt-32 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold">Our Portfolio</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            A selection of projects showcasing our expertise in AI, cloud,
            and modern web development.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          {projects.length === 0 ? (
            <p className="text-center text-slate-400">No projects to display yet.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="group rounded-3xl border border-slate-800 bg-slate-900/60 overflow-hidden transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  {/* Image Container */}
                  <div className="relative h-52 w-full bg-slate-800">
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
                  <div className="p-6">
                    <span className="text-sm font-medium text-cyan-400">
                      {project.category}
                    </span>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-slate-300">
                      {project.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    </p>
                    <div className="mt-6 flex items-center text-cyan-400 transition group-hover:translate-x-2">
                      View Project
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

      {/* CTA Section – dark with gradient button */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl font-bold text-white">Have a Project in Mind?</h2>
          <p className="mt-4 text-slate-300">
            We'd love to help turn your ideas into reality with our expertise.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 font-semibold text-white transition hover:scale-105"
          >
            Let's Talk
          </Link>
        </div>
      </section>
    </main>
  );
}