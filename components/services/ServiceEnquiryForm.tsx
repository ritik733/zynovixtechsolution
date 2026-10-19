"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export interface FormFieldConfig {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "number" | "select" | "checkbox-group" | "textarea";
  placeholder?: string;
  required?: boolean;
  options?: string[];
  colSpan?: 1 | 2;
  defaultValue?: string | string[];
}

interface ServiceEnquiryFormProps {
  id?: string;
  serviceName: string;
  formTitle?: string;
  formSubtitle?: string;
  submitButtonText?: string;
  fields: FormFieldConfig[];
}

export default function ServiceEnquiryForm({
  id = "enquiry",
  serviceName,
  formTitle = "Discuss Your Project With Our Specialists",
  formSubtitle = "Share your project goals and requirements. We'll review your scope and provide a tailored proposal within 24 hours.",
  submitButtonText = "Submit Enquiry",
  fields,
}: ServiceEnquiryFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload: Record<string, unknown> = {
      serviceName,
    };

    fields.forEach((field) => {
      if (field.type === "checkbox-group") {
        const values = formData.getAll(field.name);
        payload[field.name] = values;
      } else {
        payload[field.name] = formData.get(field.name);
      }
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit enquiry");
      }

      setSuccess(true);
      form.reset();

      // Trigger conversion event for analytics / conversion tracking
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("zynovix:enquiry_submit", {
            detail: { service: serviceName, timestamp: new Date().toISOString() },
          })
        );
      }
    } catch (err: unknown) {
      console.error("Enquiry submission error:", err);
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again or reach out to us directly."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={id} className="py-20 bg-slate-50 dark:bg-[#070B18]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-xl dark:border-slate-800 dark:bg-slate-900/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Get Started
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {formTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              {formSubtitle}
            </p>
          </div>

          {success ? (
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-8 text-center dark:border-emerald-500/30 dark:bg-emerald-950/20">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                Enquiry Received Successfully!
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Thank you for reaching out regarding <strong>{serviceName}</strong>. Our technical team is reviewing your requirements and will contact you within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="flex items-center gap-3 rounded-xl border border-rose-500/30 bg-rose-50/50 p-4 text-sm text-rose-600 dark:bg-rose-950/20 dark:text-rose-400">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid gap-6 sm:grid-cols-2">
                {fields.map((field) => {
                  const isFullWidth = field.colSpan === 2 || field.type === "textarea" || field.type === "checkbox-group";

                  return (
                    <div
                      key={field.name}
                      className={isFullWidth ? "sm:col-span-2" : "sm:col-span-1"}
                    >
                      <label
                        htmlFor={field.name}
                        className="mb-1.5 block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300"
                      >
                        {field.label}{" "}
                        {field.required && (
                          <span className="text-cyan-600 dark:text-cyan-400">*</span>
                        )}
                      </label>

                      {field.type === "select" ? (
                        <select
                          id={field.name}
                          name={field.name}
                          required={field.required}
                          defaultValue=""
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200/50 dark:border-slate-700 dark:bg-slate-800/60 dark:text-white dark:focus:bg-slate-800"
                        >
                          <option value="" disabled>
                            {field.placeholder || `Select ${field.label}`}
                          </option>
                          {field.options?.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      ) : field.type === "checkbox-group" ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-1">
                          {field.options?.map((opt) => (
                            <label
                              key={opt}
                              className="flex items-center gap-2.5 rounded-lg border border-slate-200/80 bg-slate-50/60 p-3 text-xs sm:text-sm text-slate-700 cursor-pointer transition hover:bg-slate-100 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-800/40 dark:text-slate-300 dark:hover:bg-slate-800"
                            >
                              <input
                                type="checkbox"
                                name={field.name}
                                value={opt}
                                className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500 dark:border-slate-700 dark:bg-slate-800"
                              />
                              <span>{opt}</span>
                            </label>
                          ))}
                        </div>
                      ) : field.type === "textarea" ? (
                        <textarea
                          id={field.name}
                          name={field.name}
                          required={field.required}
                          rows={4}
                          placeholder={field.placeholder}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200/50 dark:border-slate-700 dark:bg-slate-800/60 dark:text-white dark:focus:bg-slate-800"
                        />
                      ) : (
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200/50 dark:border-slate-700 dark:bg-slate-800/60 dark:text-white dark:focus:bg-slate-800"
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-9 py-4 font-semibold text-white shadow-lg shadow-blue-500/25 transition duration-200 hover:scale-[1.02] hover:shadow-cyan-500/30 disabled:opacity-70 disabled:hover:scale-100"
                  data-track="enquiry-form-submit"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Sending Your Request...</span>
                    </>
                  ) : (
                    <>
                      <span>{submitButtonText}</span>
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
                <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                  Strict privacy guarantee. No spam. You will speak directly with our solutions architects.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
