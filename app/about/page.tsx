import Link from "next/link";
import { 
  CheckCircle, 
  Users, 
  Rocket, 
  Zap, 
  Shield, 
  Globe, 
  Code, 
  Award 
} from "lucide-react";

export const metadata = {
  title: "About Us | Zynovix",
  description: "Learn about Zynovix – our mission, values, and how we deliver AI-driven, cloud-native solutions for forward-thinking businesses.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#050816]">
      {/* Hero Section – dark, with more top padding */}
      <section className="pt-32 pb-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold">
            Building the Future,<br />One Line of Code at a Time
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            We are a team of engineers, designers, and AI specialists dedicated
            to creating intelligent, scalable, and beautiful digital products
            that solve real business problems.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-cyan-400">
              <CheckCircle className="h-5 w-5" />
              <span>AI & ML Experts</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <CheckCircle className="h-5 w-5" />
              <span>Cloud-Native</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <CheckCircle className="h-5 w-5" />
              <span>Agile Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story – dark cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white">Our Story</h2>
              <p className="mb-4 text-slate-300">
                Founded in 2020, Zynovix was born from a shared passion for
                leveraging cutting-edge technology to drive business
                transformation. What started as a small consultancy has grown
                into a full-service digital innovation partner trusted by
                startups and enterprises alike.
              </p>
              <p className="mb-4 text-slate-300">
                We believe that the best solutions emerge from a deep
                understanding of our clients' goals, combined with technical
                excellence and creative thinking. Our culture is built on
                curiosity, continuous learning, and a commitment to delivering
                measurable outcomes.
              </p>
              <p className="text-slate-300">
                Today, we specialize in Artificial Intelligence, Machine
                Learning, cloud infrastructure, and modern web development – but
                our core mission remains the same: empower businesses with
                technology that works for them.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur">
              <h3 className="mb-4 text-2xl font-semibold text-white">Our Mission</h3>
              <p className="text-slate-300">
                To democratise access to advanced technology by delivering
                affordable, high‑performance AI and cloud solutions that enable
                businesses to compete and thrive in the digital economy.
              </p>
              <hr className="my-6 border-slate-700" />
              <h3 className="mb-4 text-2xl font-semibold text-white">Our Vision</h3>
              <p className="text-slate-300">
                To be the global benchmark for ethical, human‑centric AI and
                cloud innovation – where technology amplifies human potential
                and drives sustainable growth.
              </p>
              <hr className="my-6 border-slate-700" />
              <h3 className="mb-4 text-2xl font-semibold text-white">Our Approach</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-cyan-400">▸</span>
                  <span>Collaborative discovery and requirement mapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-cyan-400">▸</span>
                  <span>Rapid prototyping and iterative development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-cyan-400">▸</span>
                  <span>Continuous integration, testing, and deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-cyan-400">▸</span>
                  <span>Post‑launch monitoring, support, and evolution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values – dark cards with icons */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">
            Our Core Values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Innovation First",
                text: "We don't just follow trends – we set them. Every project is an opportunity to explore new technologies and push boundaries.",
              },
              {
                icon: Shield,
                title: "Quality & Reliability",
                text: "Performance, security, and scalability are non‑negotiable. We build systems that are robust, maintainable, and future‑proof.",
              },
              {
                icon: Users,
                title: "Client Partnership",
                text: "We see ourselves as an extension of your team. Transparency, communication, and mutual success are at the heart of every engagement.",
              },
            ].map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:bg-slate-900"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-cyan-500/10 p-3">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">{value.title}</h3>
                  <p className="text-slate-300">{value.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us – dark stats and cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">
            Why Choose Zynovix?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400">5+</div>
              <p className="mt-2 text-slate-300">Successful Projects</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400">98%</div>
              <p className="mt-2 text-slate-300">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400">24/7</div>
              <p className="mt-2 text-slate-300">Support</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400">10+</div>
              <p className="mt-2 text-slate-300">Tech Experts</p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="flex items-center gap-3">
                <Rocket className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">End‑to‑End Solutions</h3>
              </div>
              <p className="mt-2 text-slate-300">
                From strategy and design to development, deployment, and
                maintenance – we cover the entire lifecycle.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">Global Perspective</h3>
              </div>
              <p className="mt-2 text-slate-300">
                We work with clients across industries and geographies, bringing
                diverse insights and best practices to every project.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="flex items-center gap-3">
                <Code className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">Modern Tech Stack</h3>
              </div>
              <p className="mt-2 text-slate-300">
                We leverage the latest frameworks (Next.js, React, Node.js),
                cloud platforms (AWS, Azure), and AI tools (LangChain, OpenAI)
                to deliver cutting‑edge solutions.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">Proven Track Record</h3>
              </div>
              <p className="mt-2 text-slate-300">
                Our portfolio includes successful products used by thousands of
                users, with measurable improvements in efficiency and revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team – updated with real members */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">Meet the Team</h2>
          <p className="mx-auto max-w-2xl text-slate-300">
            We are a passionate group of engineers, designers, and problem‑solvers
            who love what we do. Here are a few of the faces behind our work.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Pukhraj Tater", role: "CEO & Founder" },
              { name: "Piyush Dadhich", role: "Lead Developer" },
              { name: "Vinod Kharol", role: "Data Scientist" },
              { name: "Chandan Singh Baghela", role: "Marketing Director" },
            ].map((member) => (
              <div key={member.name} className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-cyan-500">
                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />
                <h3 className="mt-4 text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-slate-400">{member.role}</p>
              </div>
            ))}
          </div>
          {/* Link to full Team page */}
          <div className="mt-8">
            <Link
              href="/team"
              className="inline-block text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium border-b border-cyan-400/30 hover:border-cyan-400"
            >
              View full team →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA – dark with gradient buttons */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl font-bold text-white">Ready to Build Something Amazing?</h2>
          <p className="mt-4 text-slate-300">
            Let's talk about your project and how we can help you achieve your
            goals with technology that works.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 font-semibold text-white transition hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-block rounded-xl border border-cyan-500 px-8 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}