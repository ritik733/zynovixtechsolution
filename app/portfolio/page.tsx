import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Link from "next/link";

export const metadata = {
  title: "Portfolio | Your Company",
  description: "Explore some of our recent work.",
};

const projects = [
  {
    title: "Corporate Website",
    category: "Web Development",
  },
  {
    title: "Healthcare Dashboard",
    category: "Web Application",
  },
  {
    title: "Restaurant Mobile App",
    category: "Mobile Development",
  },
  {
    title: "AI Chat Assistant",
    category: "Artificial Intelligence",
  },
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
  },
  {
    title: "CRM System",
    category: "Business Software",
  },
];

export default function PortfolioPage() {
  return (
    <main>
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold">Portfolio</h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            A selection of projects showcasing our expertise and commitment to
            quality.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-xl border shadow-sm transition hover:shadow-xl"
              >
                <div className="flex h-52 items-center justify-center bg-slate-200">
                  <span className="text-slate-500">
                    Project Image
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-sm font-medium text-blue-600">
                    {project.category}
                  </span>

                  <h3 className="mt-2 text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-slate-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl font-bold">
            Have a project in mind?
          </h2>

          <p className="mt-4 text-slate-600">
            We'd love to help turn your ideas into reality.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </main>
  );
}
