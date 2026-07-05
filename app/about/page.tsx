import Link from "next/link";

export const metadata = {
  title: "About Us | Your Company",
  description: "Learn more about our company, mission, and values.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            We build modern, scalable, and user-focused digital solutions that
            help businesses grow and succeed.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Who We Are</h2>

            <p className="mb-4 text-slate-600">
              Our company specializes in delivering high-quality software
              solutions, websites, and digital experiences tailored to our
              clients' unique needs.
            </p>

            <p className="text-slate-600">
              We combine innovative thinking, modern technologies, and strong
              collaboration to create products that make a real impact.
            </p>
          </div>

          <div className="rounded-xl bg-slate-100 p-10">
            <h3 className="mb-4 text-2xl font-semibold">Our Mission</h3>

            <p className="text-slate-600">
              To empower businesses through reliable technology, exceptional
              design, and innovative software solutions.
            </p>

            <hr className="my-8" />

            <h3 className="mb-4 text-2xl font-semibold">Our Vision</h3>

            <p className="text-slate-600">
              To become a trusted technology partner for organizations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Our Core Values
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Innovation",
                text: "We embrace new technologies to deliver modern solutions.",
              },
              {
                title: "Quality",
                text: "Every project is built with performance and reliability in mind.",
              },
              {
                title: "Integrity",
                text: "We build long-term relationships through trust and transparency.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-xl bg-white p-8 shadow"
              >
                <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                <p className="text-slate-600">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl font-bold">
            Ready to work with us?
          </h2>

          <p className="mt-4 text-slate-600">
            Let's build something amazing together.
          </p>

          <Link
            href="/services"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Explore Services
          </Link>
        </div>
      </section>
    </main>
  );
}