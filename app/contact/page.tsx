import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact | Zynovix",
  description: "Get in touch with us for your next project.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-950 py-20 md:py-28 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let's Build Something Amazing
          </h1>
          <p className="mt-5 text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
            Have an idea, project, or business challenge? We'd love to hear
            from you. Fill out the form below and we'll get back to you within
            24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact Form - spans 3 columns */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-md border border-slate-200/70 p-6 md:p-8 transition-shadow hover:shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900">
              Book a Free Consultation
            </h2>
            <p className="text-slate-500 mt-2 text-sm md:text-base">
              Tell us about your project and we'll contact you shortly.
            </p>

            <form className="mt-8 space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm transition focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-200/60 outline-none placeholder:text-slate-400"
                />
              </div>

              {/* Email + Phone - inline on md+ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm transition focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-200/60 outline-none placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm transition focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-200/60 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm transition focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-200/60 outline-none placeholder:text-slate-400 resize-y"
                />
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3.5 text-base transition shadow-sm shadow-blue-200/40 hover:shadow-blue-200/70"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information - spans 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Intro - NOW IN WHITE */}
            <div>
              <h2 className="text-3xl font-bold text-white">
                Get In Touch
              </h2>
              <p className="mt-3 text-white text-sm md:text-base leading-relaxed">
                Whether you're looking to build a website, mobile app, AI
                solution, or enterprise software, our team is ready to help.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-4 bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-50 rounded-xl p-3 text-blue-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-700">Email</h3>
                  <p className="text-slate-600 text-sm">work@zynovixtechsolutions.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-50 rounded-xl p-3 text-blue-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-700">Phone</h3>
                  <p className="text-slate-600 text-sm">+91 6367500528</p>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-center gap-4 bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-50 rounded-xl p-3 text-blue-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-700">Office</h3>
                  <p className="text-slate-600 text-sm">Udaipur, Rajasthan, India</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-4 bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-50 rounded-xl p-3 text-blue-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-700">Working Hours</h3>
                  <p className="text-slate-600 text-sm leading-tight">
                    Monday - Friday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-slate-800 rounded-2xl p-6 md:p-7 text-white shadow-xl border border-slate-700">
              <h3 className="text-xl md:text-2xl font-bold">
                Ready to Start Your Project?
              </h3>
              <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed">
                Let's discuss your requirements and create a solution that
                helps your business grow.
              </p>
              <Link
                href="/portfolio"
                className="inline-block mt-5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3 rounded-xl transition text-sm md:text-base shadow-md shadow-blue-700/30"
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