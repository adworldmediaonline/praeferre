'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="bg-hero-gradient pt-32 pb-20 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-radial-gradient z-0"></div>

      {/* Binary code pattern overlay - could be added as a background image */}
      <div className="absolute inset-0 opacity-30 bg-[url('/binary-pattern.png')] z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column with text content */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-primary">25 Years of </span>
              <span className="text-white">Cyber security Expertise</span>
            </h1>

            <p className="text-gray-300 mb-8 text-lg">
              Safeguard your business from cyber threats with Secur's advanced
              cybersecurity solutions. Our comprehensive suite of services
              includes threat detection and response, vulnerability assessment
              and penetration testing, incident response.
            </p>

            {/* Email form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="bg-[#0A1224] border border-gray-700 rounded-full px-6 py-3 flex-grow text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-3 font-medium transition-colors flex items-center justify-center gap-2"
              >
                Get A Free Quote
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
              </button>
            </form>
          </div>

          {/* Right column with image and play button */}
          <div className="relative flex justify-center">
            <div className="relative">
              <Image
                src="/hacker-image.png"
                alt="Cybersecurity Expert"
                width={600}
                height={600}
                className="z-10 relative"
                priority
              />

              {/* Play button */}
              <button
                className="absolute left-0 bottom-1/2 transform -translate-x-10 translate-y-24 z-20 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Play video"
              >
                <div className="text-primary">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                  </svg>
                </div>
              </button>

              {/* Curved arrow pointing to play button */}
              <div className="absolute left-1/4 bottom-1/3 z-10">
                <Image
                  src="/curved-arrow.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted by logos section */}
      <div className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          <div className="flex justify-center items-center h-14 bg-white rounded-lg p-3 shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-50 border-2 border-primary/10 hover:border-primary/20">
            <Image
              src="/sponsor/comp-1.png"
              alt="Secure Minded"
              width={120}
              height={48}
              className="object-contain h-full w-auto"
            />
          </div>
          <div className="flex justify-center items-center h-14 bg-white rounded-lg p-3 shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-50 border-2 border-primary/10 hover:border-primary/20">
            <Image
              src="/sponsor/comp-2.png"
              alt="Security Protection"
              width={120}
              height={48}
              className="object-contain h-full w-auto"
            />
          </div>
          <div className="flex justify-center items-center h-14 bg-white rounded-lg p-3 shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-50 border-2 border-primary/10 hover:border-primary/20">
            <Image
              src="/sponsor/comp-3.png"
              alt="Security"
              width={120}
              height={48}
              className="object-contain h-full w-auto"
            />
          </div>
          <div className="flex justify-center items-center h-14 bg-white rounded-lg p-3 shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-50 border-2 border-primary/10 hover:border-primary/20">
            <Image
              src="/sponsor/comp-4.png"
              alt="Security Squared"
              width={120}
              height={48}
              className="object-contain h-full w-auto"
            />
          </div>
          <div className="flex justify-center items-center h-14 bg-white rounded-lg p-3 shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-50 border-2 border-primary/10 hover:border-primary/20">
            <Image
              src="/sponsor/comp-5.jpg"
              alt="TechShield"
              width={120}
              height={48}
              className="object-contain h-full w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
