'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ContactSection() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from('.contact-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      });

      gsap.from('.contact-description', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 0.2,
        ease: 'power2.out',
      });

      gsap.from('.contact-card', {
        scrollTrigger: {
          trigger: '.contact-card',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });

      gsap.from('.faq-item', {
        scrollTrigger: {
          trigger: '.faq-section',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
      });
    },
    { scope: sectionRef }
  );

  const faqItems = [
    {
      id: 1,
      question: 'What cybersecurity services do you offer?',
      answer:
        "We offer a comprehensive range of cybersecurity services including vulnerability assessments, penetration testing, security consulting, incident response, and managed security services tailored to your organization's needs.",
    },
    {
      id: 2,
      question: 'How quickly can you respond to security incidents?',
      answer:
        'Our incident response team is available 24/7 and typically begins addressing security incidents within 30 minutes of notification. We prioritize rapid response to minimize potential damage and data loss.',
    },
    {
      id: 3,
      question: 'Do you offer customized security solutions?',
      answer:
        'Yes, we understand that every organization has unique security requirements. We work closely with clients to develop and implement customized security solutions that address their specific challenges and objectives.',
    },
    {
      id: 4,
      question: 'How do your services help with compliance requirements?',
      answer:
        'Our security solutions are designed to help organizations meet various regulatory compliance requirements including GDPR, HIPAA, PCI DSS, and SOC 2. We provide comprehensive reporting and documentation to support your compliance efforts.',
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-background text-foreground"
      id="contact"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 space-y-3">
          <motion.h2
            className="contact-title text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready To Choose Your Cybersecurity Partner?
          </motion.h2>
          <motion.p
            className="contact-description text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get in touch with our security experts to discuss how we can help
            protect your digital assets
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="contact-card p-8 bg-card rounded-xl border border-border shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              How May We Help You?
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-input focus:outline-none focus:ring-2 focus:ring-[#4318ff] focus:border-transparent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-input focus:outline-none focus:ring-2 focus:ring-[#4318ff] focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-input focus:outline-none focus:ring-2 focus:ring-[#4318ff] focus:border-transparent transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-input focus:outline-none focus:ring-2 focus:ring-[#4318ff] focus:border-transparent transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="consultation">Security Consultation</option>
                  <option value="service">Service Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-input focus:outline-none focus:ring-2 focus:ring-[#4318ff] focus:border-transparent transition-colors"
                  placeholder="Tell us about your security needs..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="px-6 py-3 bg-[#4318ff] text-white rounded-lg font-medium hover:bg-[#3a14e0] transition-colors shadow-lg shadow-[#4318ff]/20 w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Request
              </motion.button>
            </form>
          </motion.div>

          <div className="faq-section space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Quick Answers to Your Security Concerns
            </h3>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="faq-item p-6 bg-card rounded-xl border border-border shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4 className="font-medium text-lg mb-2">{item.question}</h4>
                  <p className="text-muted-foreground">{item.answer}</p>
                </motion.div>
              ))}
            </div>

            <div className="p-6 bg-[#4318ff]/5 rounded-xl border border-[#4318ff]/20 mt-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#4318ff]/10 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-[#4318ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    Need Immediate Assistance?
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    Our security team is available 24/7
                  </p>
                  <a
                    href="tel:+18005551234"
                    className="text-[#4318ff] font-medium hover:underline"
                  >
                    +1 (800) 555-1234
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
