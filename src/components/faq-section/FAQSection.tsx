"use client"
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is CourseFlow?",
    answer:
      "CourseFlow is a course management platform that helps you manage courses, students, and instructors in one place.",
  },
  {
    question: "Is CourseFlow free to use?",
    answer:
      "Yes, CourseFlow offers a free version with core features. You can upgrade anytime for advanced tools.",
  },
  {
    question: "Can I manage multiple instructors?",
    answer:
      "Absolutely! CourseFlow lets you assign and manage multiple instructors for different courses.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use industry-standard security measures to keep your data safe and private.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-gray-600">
          Got a question? We’ve got answers! If you can’t find what you’re
          looking for, feel free to contact us.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-5 cursor-pointer transition"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-800">
                {faq.question}
              </h3>
              <span className="text-blue-600 text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
