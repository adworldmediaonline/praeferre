'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-[#050A1C] pt-24 pb-6">
      {/* Top curved border with circuit pattern */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[#00C875]/20 rounded-b-3xl"></div>

      {/* CTA Banner */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#0a0e1d] rounded-3xl border border-[#00C875]/10 p-8 md:p-12 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Discover How We Can{' '}
              <span className="text-[#00C875]">Support</span> Your
              <br />
              Secure Advancement.
            </h2>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-[#00C875] to-[#00E5C2] px-8 py-3 font-medium text-white flex items-center"
          >
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/praeferre-updated-logo-light.png"
                alt="praeferre Logo"
                width={160}
                height={160}
                className="mr-2"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Since 1999, Secur has been a trusted leader in cybersecurity,
              protecting digital assets with.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0d1229] border border-[#00C875]/40 flex items-center justify-center text-[#00C875] hover:bg-[#00C875]/20 transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0d1229] border border-[#00C875]/40 flex items-center justify-center text-[#00C875] hover:bg-[#00C875]/20 transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0d1229] border border-[#00C875]/40 flex items-center justify-center text-[#00C875] hover:bg-[#00C875]/20 transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0d1229] border border-[#00C875]/40 flex items-center justify-center text-[#00C875] hover:bg-[#00C875]/20 transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          {/* IT Solution */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">IT Solution</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services/malware-protection"
                  className="flex items-center text-gray-400 hover:text-[#00C875] transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-[#00C875]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  Malware Protection
                </Link>
              </li>
              <li>
                <Link
                  href="/services/computer-security"
                  className="flex items-center text-gray-400 hover:text-[#00C875] transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-[#00C875]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  Computer Security
                </Link>
              </li>
              <li>
                <Link
                  href="/services/server-protection"
                  className="flex items-center text-gray-400 hover:text-[#00C875] transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-[#00C875]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  Server Protection
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cyber-security"
                  className="flex items-center text-gray-400 hover:text-[#00C875] transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-[#00C875]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link
                  href="/services/security-monitoring"
                  className="flex items-center text-gray-400 hover:text-[#00C875] transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-[#00C875]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  Security Monitoring
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Link</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="flex items-center text-gray-400 hover:text-[#00C875] transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-[#00C875]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  About Secur
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="flex items-center text-gray-400 hover:text-[#00C875] transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-[#00C875]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="flex items-center text-gray-400 hover:text-[#00C875] transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-[#00C875]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  Pricing Plan
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="flex items-center text-gray-400 hover:text-[#00C875] transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-[#00C875]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="flex items-center text-gray-400 hover:text-[#00C875] transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-[#00C875]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#0d1229] border border-[#00C875]/40 flex items-center justify-center text-[#00C875] mr-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#00C875] font-medium mb-1">Location</h4>
                  <p className="text-gray-400">
                    932 Dogwood Road,Chapel Hill,North Carolina
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#0d1229] border border-[#00C875]/40 flex items-center justify-center text-[#00C875] mr-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#00C875] font-medium mb-1">Phone</h4>
                  <p className="text-gray-400">
                    +165-5577-8749, +165-3564-7488
                  </p>
                </div>
              </div>

              {/* Opening Hour */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#0d1229] border border-[#00C875]/40 flex items-center justify-center text-[#00C875] mr-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#00C875] font-medium mb-1">
                    Opening Hour
                  </h4>
                  <p className="text-gray-400">Mon - Sat: 10.00 AM - 4.00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 By{' '}
            <Link href="/" className="text-[#00C875] hover:underline">
              Secur
            </Link>
            . All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms & Condition
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
