"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Install lucide-react

const faqs = [
  {
    question: `Is dental treatment painful—or is that just a myth?`,
    answer: `Most modern dental treatments are virtually painless thanks to advanced techniques and gentle care.`,
  },
  {
    question: `How often should I really visit the dentist?
`,
    answer: `The sweet spot is every 6 months for most people. Regular checkups help catch issues early—before they become costly or painful. 
`,
  },
  {
    question: `What’s the first mistake people make with their dental care?
`,
    answer: `Waiting too long to get help. Small problems like sensitivity or bleeding gums can turn into major issues if ignored. 
`,
  },
  {
    question: `Is it really necessary to get dental X-rays?
`,
    answer: `Yes, X-rays are essential for spotting issues that aren’t visible during a regular exam—like hidden decay, infections, or impacted teeth.
`,
  },
  {
    question: `What causes tooth sensitivity—and can it be treated?

`,
    answer: `Tooth sensitivity often comes from worn enamel, exposed roots, or cavities. The good news? It’s treatable! Desensitizing toothpaste, 

`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-white px-4 md:px-12 lg:px-24 py-16">
      <div className="text-center mb-12">
        <span className="inline-block font-[Noto_Sans] text-xs text-blue-600 bg-blue-100 px-3 py-1 rounded-full font-medium uppercase tracking-wide mb-2">
          FAQ
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold font-[Noto_Sans]">
          <span className="text-blue-600">Frequently</span> Asked Questions
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Find answers to common questions about our dental services and care.
        </p>
      </div>

      <div className="space-y-4 max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full px-6 py-4 text-left flex text-lg font-bold justify-between items-center 
               transition-colors duration-300 font-[Noto_Sans] ${
                 openIndex !== index ? "text-gray-800" : "text-blue-600"
               }`}
            >
              <span>{faq.question}</span>

              <ChevronDown
                className={`w-5 h-5 ${
                  openIndex === index
                    ? " duration-500 rotate-180"
                    : " duration-500"
                }
                 text-blue-600`}
              />
            </button>

            <div
              className={`px-6 overflow-hidden text-gray-600  text-sm transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-40 py-4 " : "max-h-0"
              }`}
            >
              <div className="transition-opacity duration-300 text-base">
                {openIndex === index && <p>{faq.answer}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
