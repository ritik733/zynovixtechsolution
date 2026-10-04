"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Upload } from "lucide-react";

export default function ApplicationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fileName, setFileName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const resume = formData.get("resume") as File | null;
    if (!resume || resume.size === 0) {
      setErrorMsg("Please attach your resume as a PDF file.");
      setStatus("error");
      return;
    }
    if (resume.type !== "application/pdf") {
      setErrorMsg("Resume must be a PDF file.");
      setStatus("error");
      return;
    }
    if (resume.size > 5 * 1024 * 1024) {
      setErrorMsg("Resume must be under 5MB.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      formEl.reset();
      setFileName("");
    } catch (err) {
      setErrorMsg("Network error. Please check your connection.");
      setStatus("error");
    }
  };

  return (
    <section
      id="application-form"
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[160px]" />

      <div className="relative mx-auto max-w-4xl px-6">

        <div className="text-center mb-14">
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-500 dark:text-violet-300">
            Apply Now
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900 dark:text-white">
            Start Your Journey
          </h2>

          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
            Fill in your details and we'll get back to you within 2–3 days.
          </p>
        </div>

        {status === "success" ? (
          <div className="rounded-3xl border border-green-500/30 bg-green-500/5 p-12 text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
            <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
              Application Received!
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Thanks for applying. Our team will review your application and
              reach out soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 backdrop-blur-xl dark:border-violet-500/20 dark:bg-[#0F1438]/80"
          >
            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-slate-900 dark:text-white font-medium">
                  Full Name *
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-violet-500 focus:bg-white dark:border-white/10 dark:bg-[#060818] dark:text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-slate-900 dark:text-white font-medium">
                  Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-violet-500 focus:bg-white dark:border-white/10 dark:bg-[#060818] dark:text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-slate-900 dark:text-white font-medium">
                  Phone Number *
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 9876543210"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-violet-500 focus:bg-white dark:border-white/10 dark:bg-[#060818] dark:text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-slate-900 dark:text-white font-medium">
                  College / University
                </label>
                <input
                  name="college"
                  type="text"
                  placeholder="Your college name"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-violet-500 focus:bg-white dark:border-white/10 dark:bg-[#060818] dark:text-white"
                />
              </div>

            </div>

            <div className="mt-6">
              <label className="mb-2 block text-slate-900 dark:text-white font-medium">
                Upload Resume (PDF, max 5MB) *
              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-violet-500/40 bg-slate-50 px-5 py-4 text-slate-700 transition hover:border-violet-500 hover:bg-violet-500/5 dark:bg-[#060818] dark:text-slate-100">
                <Upload className="h-5 w-5 text-violet-500 flex-shrink-0" />
                <span className="text-sm font-medium truncate">
                  {fileName || "Click to choose a PDF file"}
                </span>
                <input
                  name="resume"
                  type="file"
                  accept="application/pdf,.pdf"
                  required
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    setFileName(f ? f.name : "");
                  }}
                />
              </label>

              <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">
                Make sure your resume is in PDF format and under 5MB.
              </p>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-slate-900 dark:text-white font-medium">
                Why do you want to join? *
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us briefly about yourself and what excites you about this internship..."
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-violet-500 focus:bg-white dark:border-white/10 dark:bg-[#060818] dark:text-white"
              />
            </div>

            {status === "error" && (
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/5 px-5 py-4">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                <p className="text-red-500 text-sm font-medium">{errorMsg}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-8 flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-8 py-4 font-semibold text-white transition hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === "loading" ? "Sending..." : "Submit Application"}
              <Send size={18} />
            </button>

          </form>
        )}

      </div>
    </section>
  );
}
