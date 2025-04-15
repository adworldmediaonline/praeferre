'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  const footerLinks = {
    company: [
      { title: 'About Us', href: '/about' },
      { title: 'Careers', href: '/careers' },
      { title: 'Partners', href: '/partners' },
      { title: 'News', href: '/news' },
    ],
    resources: [
      { title: 'Blog', href: '/blog' },
      { title: 'Guides', href: '/guides' },
      { title: 'Events', href: '/events' },
      { title: 'Webinars', href: '/webinars' },
    ],
    solutions: [
      { title: 'Network Security', href: '/network-security' },
      { title: 'Cloud Security', href: '/cloud-security' },
      { title: 'Data Protection', href: '/data-protection' },
      { title: 'Threat Management', href: '/threat-management' },
    ],
    support: [
      { title: 'Help Center', href: '/help' },
      { title: 'Contact Us', href: '/contact' },
      { title: 'FAQ', href: '/faq' },
      { title: 'Documentation', href: '/docs' },
    ],
    social: [
      { title: 'Twitter', icon: 'twitter', href: 'https://twitter.com' },
      { title: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com' },
      { title: 'Facebook', icon: 'facebook', href: 'https://facebook.com' },
      { title: 'GitHub', icon: 'github', href: 'https://github.com' },
    ],
  };

  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'twitter':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        );
      case 'facebook':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        );
      case 'github':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[#0A0F1D] pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-gray-800">
          {/* Logo and about */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo-shield.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white text-2xl font-bold">Secur</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              We specialize in providing comprehensive cybersecurity solutions
              to protect your digital assets from emerging threats.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#4318FF] transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 4.01C21 4.5 20.02 4.69 19 5C18.18 4.14 16.99 3.65 15.69 3.65C13.21 3.65 11.21 5.65 11.21 8.13C11.21 8.47 11.24 8.79 11.32 9.11C7.74 8.95 4.57 7.18 2.46 4.6C2.08 5.24 1.88 5.97 1.88 6.75C1.88 8.22 2.63 9.54 3.75 10.31C3.03 10.3 2.32 10.09 1.72 9.77V9.82C1.72 12 3.21 13.82 5.21 14.21C4.84 14.3 4.42 14.36 4.01 14.36C3.71 14.36 3.42 14.33 3.14 14.28C3.72 16.07 5.38 17.35 7.33 17.38C5.79 18.58 3.87 19.28 1.81 19.28C1.45 19.28 1.1 19.26 0.75 19.21C2.72 20.49 5.01 21.22 7.47 21.22C15.69 21.22 20.12 14.43 20.12 8.5C20.12 8.31 20.11 8.14 20.1 7.96C21.1 7.3 22 6.46 22.75 5.5L22 4.01Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#4318FF] transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 22V12H17L17.5 8H13.5V6C13.5 4.97 13.97 4 15.5 4H17.5V0.64C17.17 0.6 16.02 0.5 14.7 0.5C11.93 0.5 10 2.16 10 5.5V8H6.5V12H10V22H13.5Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#4318FF] transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H6.5V10H9V17ZM7.7 8.7C6.8 8.7 6.1 8 6.1 7.1C6.1 6.2 6.8 5.5 7.7 5.5C8.6 5.5 9.3 6.2 9.3 7.1C9.3 8 8.6 8.7 7.7 8.7ZM18 17H15.5V13.2C15.5 10.3 12.5 10.5 12.5 13.2V17H10V10H12.5V11.3C13.4 9.5 18 9.3 18 13.1V17Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#4318FF] transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8.89C10.35 8.89 8.89 10.35 8.89 12C8.89 13.65 10.35 15.11 12 15.11C13.65 15.11 15.11 13.65 15.11 12C15.11 10.35 13.65 8.89 12 8.89ZM21.73 12C21.73 10.68 21.74 9.36 21.67 8.04C21.6 6.53 21.23 5.18 20.12 4.07C19.01 2.96 17.66 2.59 16.15 2.52C14.83 2.45 13.51 2.46 12.19 2.46C10.87 2.46 9.55 2.45 8.23 2.52C6.72 2.59 5.37 2.96 4.26 4.07C3.15 5.18 2.78 6.53 2.71 8.04C2.64 9.36 2.65 10.68 2.65 12C2.65 13.32 2.64 14.64 2.71 15.96C2.78 17.47 3.15 18.82 4.26 19.93C5.37 21.04 6.72 21.41 8.23 21.48C9.55 21.55 10.87 21.54 12.19 21.54C13.51 21.54 14.83 21.55 16.15 21.48C17.66 21.41 19.01 21.04 20.12 19.93C21.23 18.82 21.6 17.47 21.67 15.96C21.74 14.64 21.73 13.32 21.73 12ZM12 17.01C9.29 17.01 7.09 14.81 7.09 12.1C7.09 9.39 9.29 7.19 12 7.19C14.71 7.19 16.91 9.39 16.91 12.1C16.91 14.81 14.71 17.01 12 17.01ZM17.11 8.03C16.4 8.03 15.83 7.46 15.83 6.75C15.83 6.04 16.4 5.47 17.11 5.47C17.82 5.47 18.39 6.04 18.39 6.75C18.39 6.93 18.36 7.1 18.29 7.26C18.23 7.42 18.13 7.57 18.01 7.69C17.89 7.81 17.74 7.9 17.58 7.97C17.42 8.03 17.25 8.07 17.07 8.07L17.11 8.03Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Meet The Team
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Latest News
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services/security-assessment"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Security Assessment
                </Link>
              </li>
              <li>
                <Link
                  href="/services/penetration-testing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Penetration Testing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/incident-response"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Incident Response
                </Link>
              </li>
              <li>
                <Link
                  href="/services/security-consulting"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Security Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/compliance"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Compliance & Auditing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="min-w-5 mt-1"
                >
                  <path
                    d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 21C16.4183 21 20 17.4183 20 13H4C4 17.4183 7.58172 21 12 21Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>123 Security Street, Cyber City, CS 12345</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 4H9L11 9L8.5 10.5C9.5 12.5 11.5 14.5 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>contact@securcompany.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8v4l3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 2h4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-gray-500">
          <p>© 2023 Secur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
