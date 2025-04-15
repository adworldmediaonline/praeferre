'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div
      className={`rounded-xl mb-4 overflow-hidden transition-all duration-300 ${
        isOpen ? 'bg-[#4318FF]' : 'bg-[#061a3a]'
      }`}
    >
      <button
        className="flex w-full justify-between items-center text-left px-5 py-4 focus:outline-none"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <h3 className="text-white font-medium">{question}</h3>
        <span
          className={`flex items-center justify-center w-6 h-6 text-white transition-transform`}
        >
          {isOpen ? (
            <svg
              width="14"
              height="2"
              viewBox="0 0 14 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1V13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M1 7H13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <div className="px-5 pb-4 text-white/80">{answer}</div>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Why do I need cybersecurity services?',
      answer:
        'We specialize in a wide range of software development services, including custom software development.',
    },
    {
      question: "How does Secur's cybersecurity services work?",
      answer:
        'Our cybersecurity services begin with a thorough assessment of your systems, followed by implementation of tailored security solutions and continuous monitoring to protect against evolving threats.',
    },
    {
      question: 'What is security consulting and compliance?',
      answer:
        'Security consulting involves expert advice on your security posture, while compliance ensures your systems meet industry regulations and standards like GDPR, HIPAA, or PCI DSS.',
    },
    {
      question: 'How does incident response work?',
      answer:
        'Our incident response team quickly identifies, contains, and eliminates security threats when they occur, followed by a thorough analysis to prevent similar incidents in the future.',
    },
    {
      question: 'What is threat detection and response?',
      answer:
        'Threat detection uses advanced tools to identify potential security threats in real-time, while response involves immediate action to neutralize those threats before they cause damage.',
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section className="py-20 bg-[#001028]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-14 items-start">
          <div className="order-2 lg:order-1 lg:w-1/2 xl:pr-10">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={index === openIndex}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:w-1/2">
            <div>
              <h3 className="text-[#4B7BF5] font-medium mb-3">
                Frequently Asked Questions
              </h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
                Quick Answers to Your Cyber Security Concerns
              </h2>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden max-w-md">
                  <Image
                    src="/faq-lock.jpg"
                    alt="Cybersecurity padlock"
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Overlay glow */}
                <div className="absolute -inset-1 rounded-2xl border border-[#4B7BF5]/20 shadow-[0_0_15px_rgba(75,123,245,0.2)] pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
