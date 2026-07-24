"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you hire freshers?",
    answer:
      "Yes! We welcome talented freshers and interns who are eager to learn and grow with us.",
  },
  {
    question: "Can I work remotely?",
    answer:
      "Many of our roles offer remote or hybrid work depending on the position and project requirements.",
  },
  {
    question: "How long does the hiring process take?",
    answer:
      "Typically between 1 and 2 weeks, depending on the role and interview availability.",
  },
  {
    question: "Which technologies do you work with?",
    answer:
      "We build solutions using AI, Python, React, Next.js, Node.js, Cloud, Automation, Data Engineering, and modern web technologies.",
  },
  {
    question: "Can I apply for multiple positions?",
    answer:
      "Absolutely. Apply for the roles that best match your skills and interests.",
  },
  {
    question: "Will I receive feedback after the interview?",
    answer:
      "Yes. We strive to provide feedback to every candidate after the interview process.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 overflow-hidden">

      {/* Glow */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-4xl px-6">

        <div className="text-center mb-16">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-slate-400">
            Everything you need to know before applying.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => {

            const open = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border border-violet-500/20 bg-[#0F1438]/80 backdrop-blur-xl"
              >

                <button
                  onClick={() =>
                    setOpenIndex(open ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >

                  <span className="text-lg font-semibold text-white">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />

                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-slate-400 leading-7">
                    {faq.answer}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}