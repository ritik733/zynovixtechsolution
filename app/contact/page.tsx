import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact | Zynovix",
  description: "Get in touch with us for your next project.",
};

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Hero */}
      <section className="bg-white py-20 text-slate-900 dark:bg-slate-950 dark:text-white md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Let's Build Something Amazing
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-slate-600 dark:text-slate-300 md:text-lg">
            Have an idea, project, or business challenge? We'd love to hear
            from you. Fill out the form below and we'll get back to you within
            24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 dark:bg-slate-950 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 lg:grid-cols-5">
          
          {/* Contact Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 md:p-8 lg:col-span-3">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Book a Free Consultation
            </h2>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 md:text-base">
              Tell us about your project and we'll contact you shortly.
            </p>

            {/* Functional Contact Form */}
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8 lg:col-span-2">
            
            {/* Heading */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Get In Touch
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
                Whether you're looking to build a website, mobile app, AI
                solution, or enterprise software, our team is ready to help.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">

              {/* Email */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Email
                  </h3>

                  <a
                    href="mailto:work@zynovixtechsolutions.com"
                    className="text-sm text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                  >
                    work@zynovixtechsolutions.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Phone
                  </h3>

                  <a
                    href="tel:+916367500528"
                    className="text-sm text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                  >
                    +91 6367500528
                  </a>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Office
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    2nd Floor, 12 Amrit Nagar,
                    <br />
                    Opposite of Pacific University,
                    <br />
                    Debari, Udaipur,
                    <br />
                    Rajasthan, India
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400">
                  <Clock className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Working Hours
                  </h3>

                  <p className="text-sm leading-tight text-slate-600 dark:text-slate-300">
                    Monday - Friday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-xl transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 dark:text-white md:p-7">
              <h3 className="text-xl font-bold md:text-2xl">
                Ready to Start Your Project?
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
                Let's discuss your requirements and create a solution that
                helps your business grow.
              </p>

              <Link
                href="/portfolio"
                className="mt-5 inline-block rounded-xl bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-blue-700/30 transition hover:bg-blue-500 md:text-base"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}