'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-white font-medium hover:text-purple-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-400 font-medium hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-400 font-medium hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="/pages"
              className="text-gray-400 font-medium hover:text-white transition-colors"
            >
              Pages
            </Link>
            <Link
              href="/shop"
              className="text-gray-400 font-medium hover:text-white transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/blog"
              className="text-gray-400 font-medium hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 font-medium hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            {/* Language toggle */}
            <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12H22"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Search button */}
            <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#4318FF] hover:bg-[#3A14E0] text-white rounded-full font-medium transition-colors"
            >
              Get a Free Consultation
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33337 8H12.6667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.66663 4L12.6666 8L8.66663 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 6H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 18H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-gray-800/50">
          <nav className="flex flex-col py-4 px-4">
            <Link
              href="/"
              className="text-white font-medium py-3 hover:bg-gray-800/50 px-4 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-400 font-medium py-3 hover:bg-gray-800/50 px-4 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-400 font-medium py-3 hover:bg-gray-800/50 px-4 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/pages"
              className="text-gray-400 font-medium py-3 hover:bg-gray-800/50 px-4 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pages
            </Link>
            <Link
              href="/shop"
              className="text-gray-400 font-medium py-3 hover:bg-gray-800/50 px-4 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/blog"
              className="text-gray-400 font-medium py-3 hover:bg-gray-800/50 px-4 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 font-medium py-3 hover:bg-gray-800/50 px-4 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="mt-4 flex items-center justify-center gap-2 px-5 py-3 bg-[#4318FF] hover:bg-[#3A14E0] text-white rounded-full font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Free Consultation
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33337 8H12.6667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.66663 4L12.6666 8L8.66663 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
