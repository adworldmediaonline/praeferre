'use client';

import { useState } from 'react';
import Image from 'next/image';
// Remove Cloudinary imports as we're using native video
// import { CldVideoPlayer } from 'next-cloudinary';
// import 'next-cloudinary/dist/cld-video-player.css';

type HeroSectionProps = {
  variant?: 'default' | 'video-split' | 'video-overlay' | 'premium';
  videoUrl?: string;
};

export default function HeroSection({
  variant = 'default',
  videoUrl = 'https://res.cloudinary.com/datdyxl7o/video/upload/v1744702730/Video_with_audio_2_r6zhwm.mp4',
}: HeroSectionProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  // Check if any video variant is active
  const isVideoVariant = variant !== 'default';

  return (
    <section
      className={`relative overflow-hidden ${
        variant === 'default'
          ? 'pt-32 pb-20 bg-hero-gradient'
          : variant === 'video-split'
          ? 'min-h-[90vh]'
          : 'min-h-[90vh] flex flex-col justify-between pt-20 pb-6 md:py-0'
      }`}
    >
      {/* Conditional Background */}
      {variant === 'default' ? (
        <>
          {/* Background radial gradient for default version */}
          <div className="absolute inset-0 bg-radial-gradient z-0"></div>
          {/* Binary code pattern overlay with lower z-index for default version */}
          <div className="absolute inset-0 opacity-30 bg-[url('/binary-pattern.png')] z-0"></div>
        </>
      ) : (
        <>
          {/* Video Background for video variants */}
          <div className="absolute inset-0 z-0 w-full h-full">
            {/* Different overlay styles for each variant */}
            {variant === 'video-overlay' && (
              <>
                <div className="absolute inset-0 bg-black/50 z-[1]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#00C875]/30 to-transparent z-[1]"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent z-[1]"></div>
              </>
            )}

            {variant === 'video-split' && (
              <>
                <div className="absolute inset-0 md:inset-y-0 md:left-1/2 md:right-0 bg-black/70 z-[1]"></div>
                <div className="absolute inset-0 md:inset-y-0 md:right-1/2 md:left-0 bg-gradient-to-r from-black/60 to-transparent z-[1]"></div>
                {/* Reduced opacity background for mobile */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 md:bg-transparent z-[1]"></div>
              </>
            )}

            {/* Video element */}
            <video
              src={videoUrl}
              className={`absolute top-0 left-0 w-full h-full ${
                variant === 'video-split'
                  ? 'md:object-right object-cover'
                  : 'object-cover'
              }`}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Binary code pattern overlay with higher z-index for video version */}
          <div className="absolute inset-0 bg-[url('/binary-pattern.png')] z-[2] opacity-20"></div>

          {/* Additional decorative elements for video-overlay variant */}
          {variant === 'video-overlay' && (
            <>
              <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#00C875]/20 blur-3xl z-[2]"></div>
              <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl z-[2]"></div>
            </>
          )}
        </>
      )}

      {/* Mobile bottom gradient for video-overlay */}
      {variant === 'video-overlay' && (
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent z-[3] pointer-events-none md:hidden"></div>
      )}

      <div className="container mx-auto px-4 relative z-10 flex-1 flex flex-col">
        {/* Content section with variants */}
        <div className="flex-1 flex items-center">
          {variant === 'default' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
              {/* Default content remains unchanged */}
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                  <span className="text-[#00C875]">25 Years of </span>
                  <span className="text-white">Cyber security Expertise</span>
                </h1>

                <p className="text-gray-300 mb-8 text-base sm:text-lg">
                  Safeguard your business from cyber threats with Secur's
                  advanced cybersecurity solutions. Our comprehensive suite of
                  services includes threat detection and response, vulnerability
                  assessment and penetration testing, incident response.
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
                    className="bg-[#0A1224] border border-gray-700 rounded-full px-6 py-3 flex-grow text-white focus:outline-none focus:ring-2 focus:ring-[#00C875]/50"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#00C875] hover:bg-[#00C875]/90 text-white rounded-full px-6 py-3 font-medium transition-colors flex items-center justify-center gap-2"
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

              {/* Right column with image */}
              <div className="relative flex justify-center">
                <div className="relative">
                  <Image
                    src="/hacker-image.png"
                    alt="Cybersecurity Expert"
                    width={600}
                    height={600}
                    className="z-10 relative max-w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          ) : variant === 'video-overlay' ? (
            /* VIDEO OVERLAY VARIANT - with floating card */
            <div className="opacity-100 py-4 md:py-8 w-full">
              <div className="max-w-4xl mx-auto px-3 sm:px-4">
                <div className="backdrop-blur-lg bg-black/40 border border-white/10 shadow-xl rounded-lg md:rounded-2xl overflow-hidden">
                  {/* Mobile header with green accent */}
                  <div className="w-full bg-gradient-to-r from-[#00C875]/20 to-transparent p-3">
                    <div className="text-[#00C875] text-xs font-medium uppercase tracking-wide">
                      Industry Leaders Since 1999
                    </div>
                  </div>

                  {/* Content padding */}
                  <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                    {/* Desktop-only badge */}
                    <div className="hidden md:inline-block mb-4 px-4 py-1 rounded-full bg-[#00C875]/20 border border-[#00C875]/30 text-[#00C875] text-sm font-medium">
                      Industry Leaders Since 1999
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-6">
                      <span className="text-[#00C875] block sm:inline">
                        25 Years
                      </span>
                      <span className="text-white block sm:inline sm:before:content-[' '] before:inline">
                        {' '}
                        of Cybersecurity
                      </span>
                    </h1>

                    <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-8 max-w-2xl">
                      Safeguard your business from cyber threats with our
                      advanced solutions including threat detection and
                      response, vulnerability assessment and penetration
                      testing.
                    </p>

                    {/* Stats in a row that stacks differently on mobile */}
                    <div className="flex flex-wrap md:grid md:grid-cols-3 gap-2 md:gap-6 mb-5 md:mb-8">
                      <div className="flex-1 min-w-[calc(50%-4px)] sm:min-w-0 md:min-w-full bg-white/5 backdrop-blur-sm p-3 md:p-4 rounded-lg text-center">
                        <div className="text-[#00C875] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-none mb-1 md:mb-2">
                          24/7
                        </div>
                        <div className="text-white text-xs md:text-sm opacity-80 md:opacity-100">
                          Continuous Protection
                        </div>
                      </div>
                      <div className="flex-1 min-w-[calc(50%-4px)] sm:min-w-0 md:min-w-full bg-white/5 backdrop-blur-sm p-3 md:p-4 rounded-lg text-center">
                        <div className="text-[#00C875] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-none mb-1 md:mb-2">
                          99.9%
                        </div>
                        <div className="text-white text-xs md:text-sm opacity-80 md:opacity-100">
                          Threat Detection
                        </div>
                      </div>
                      <div className="flex-1 min-w-[calc(100%-4px)] sm:min-w-0 md:min-w-full bg-white/5 backdrop-blur-sm p-3 md:p-4 rounded-lg text-center mt-2 md:mt-0">
                        <div className="text-[#00C875] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-none mb-1 md:mb-2">
                          15min
                        </div>
                        <div className="text-white text-xs md:text-sm opacity-80 md:opacity-100">
                          Response Time
                        </div>
                      </div>
                    </div>

                    {/* Form with different styling for mobile/desktop */}
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col sm:flex-row gap-3 md:gap-4"
                    >
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="bg-black/30 backdrop-blur-sm md:bg-white/10 border border-gray-700 md:border-white/20 rounded-md md:rounded-full px-4 md:px-6 py-2.5 md:py-4 w-full text-sm md:text-base text-white focus:outline-none focus:ring-1 md:focus:ring-2 focus:ring-[#00C875]/50"
                        required
                      />
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-[#00C875] to-[#00A36D] hover:from-[#00E087] hover:to-[#00C880] text-white rounded-md md:rounded-full px-5 md:px-8 py-2.5 md:py-4 font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base whitespace-nowrap"
                      >
                        <span className="md:hidden">Security Audit</span>
                        <span className="hidden md:inline">
                          Start Your Security Audit
                        </span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0"
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
                </div>
              </div>
            </div>
          ) : variant === 'video-split' ? (
            /* VIDEO SPLIT VARIANT - with content on right half */
            <div className="h-full opacity-100 w-full">
              <div className="grid md:grid-cols-2 min-h-[80vh] md:h-[90vh]">
                {/* Left side - empty to show video background */}
                <div className="hidden md:block"></div>

                {/* Right side - content that fills vertical space */}
                <div className="flex md:block py-16 md:py-0 px-4 md:px-0 items-center">
                  <div className="md:h-full backdrop-blur-sm bg-gradient-to-br from-black/40 to-black/20 md:from-black/80 md:to-black/40 rounded-2xl md:rounded-none w-full p-6 sm:p-8 md:py-12 md:px-12 md:flex md:flex-col md:justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4 md:mb-6">
                        <div className="h-1 w-10 bg-[#00C875]"></div>
                        <p className="text-[#00C875] uppercase tracking-wider text-xs sm:text-sm font-semibold">
                          Trusted Security Partner
                        </p>
                      </div>

                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                        <span className="text-white">Advanced </span>
                        <span className="text-[#00C875]">Cybersecurity </span>
                        <span className="text-white">Solutions</span>
                      </h1>

                      <p className="text-gray-300 mb-6 md:mb-8 text-sm sm:text-base">
                        Safeguard your business from cyber threats with Secur's
                        advanced cybersecurity solutions. Our comprehensive
                        suite of services includes threat detection and
                        response, vulnerability assessment and penetration
                        testing.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-8">
                        <div className="flex items-center gap-2">
                          <div className="h-5 w-5 rounded-full bg-[#00C875] flex items-center justify-center flex-shrink-0">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 6L5 9L10 3"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="text-white text-sm sm:text-base">
                            24/7 Monitoring
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="h-5 w-5 rounded-full bg-[#00C875] flex items-center justify-center flex-shrink-0">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 6L5 9L10 3"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="text-white text-sm sm:text-base">
                            Threat Intelligence
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="h-5 w-5 rounded-full bg-[#00C875] flex items-center justify-center flex-shrink-0">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 6L5 9L10 3"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="text-white text-sm sm:text-base">
                            AI-Powered
                          </span>
                        </div>
                      </div>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="bg-black/30 backdrop-blur-sm border border-gray-700 rounded-lg px-4 sm:px-5 py-3 flex-grow text-white focus:outline-none focus:ring-2 focus:ring-[#00C875]/50 text-sm sm:text-base"
                        required
                      />
                      <button
                        type="submit"
                        className="bg-[#00C875] hover:bg-[#00C875]/90 text-white rounded-lg px-5 sm:px-6 py-3 font-medium transition-colors flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap"
                      >
                        Free Consultation
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : variant === 'premium' ? (
            /* PREMIUM VARIANT - elegant, high-end design with primary color */
            <div className="h-full opacity-100 w-full">
              <div className="min-h-[90vh] relative">
                {/* Premium-specific background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A1224] via-[#0F172A] to-[#131B2E] opacity-80 z-[1]"></div>
                <div className="absolute inset-0 bg-[url('/binary-pattern.png')] opacity-20 z-[2]"></div>

                {/* Decorative elements */}
                <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-[#00C875]/20 to-[#00A36D]/5 blur-[100px] z-[2]"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-[#00C875]/10 to-[#4F46E5]/10 blur-[100px] z-[2]"></div>

                <div className="container mx-auto px-4 relative z-10 h-full flex flex-col items-center pt-28 pb-20">
                  <div className="relative w-full max-w-5xl mx-auto mb-16">
                    {/* Premium badge */}
                    <div className="flex justify-center mb-8">
                      <div className="px-6 py-1.5 bg-gradient-to-r from-[#00C875]/20 to-[#00A36D]/10 border border-[#00C875]/30 rounded-full">
                        <span className="text-[#00C875] text-sm font-medium uppercase tracking-widest">
                          Premium Protection
                        </span>
                      </div>
                    </div>

                    <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C875] to-[#00E087] uppercase leading-tight">
                        Enterprise-Grade
                      </span>
                      <span className="block text-white mt-3">
                        Cybersecurity Solutions
                      </span>
                    </h1>

                    <p className="text-center text-gray-300 mb-10 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                      Tailored security solutions designed for enterprise
                      businesses. Our advanced threat detection and mitigation
                      services deliver unparalleled protection for
                      mission-critical systems.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center transform transition-transform hover:scale-105 hover:bg-white/10">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#00C875]/30 to-transparent flex items-center justify-center mx-auto mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-[#00C875]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-white font-semibold text-lg mb-2">
                          Advanced Encryption
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Military-grade encryption protecting your most
                          sensitive data assets
                        </p>
                      </div>

                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center transform transition-transform hover:scale-105 hover:bg-white/10">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#00C875]/30 to-transparent flex items-center justify-center mx-auto mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-[#00C875]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-white font-semibold text-lg mb-2">
                          Threat Intelligence
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Real-time monitoring and proactive defense against
                          emerging threats
                        </p>
                      </div>

                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center transform transition-transform hover:scale-105 hover:bg-white/10">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#00C875]/30 to-transparent flex items-center justify-center mx-auto mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-[#00C875]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                        </div>
                        <h3 className="text-white font-semibold text-lg mb-2">
                          Compliance Shield
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Comprehensive compliance management for regulatory
                          requirements
                        </p>
                      </div>
                    </div>

                    {/* Form with premium styling */}
                    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                      <div className="flex flex-col sm:flex-row gap-3 backdrop-blur-sm bg-white/5 p-2 rounded-full border border-white/10">
                        <input
                          type="email"
                          placeholder="Enter Your Email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          className="bg-black/30 rounded-full px-6 py-4 flex-grow text-white focus:outline-none focus:ring-2 focus:ring-[#00C875]/50 text-sm"
                          required
                        />
                        <button
                          type="submit"
                          className="bg-gradient-to-r from-[#00C875] to-[#00A36D] hover:from-[#00E087] hover:to-[#00C875] text-white font-medium rounded-full px-8 py-4 transition-all duration-300 text-sm shadow-lg shadow-[#00C875]/20"
                        >
                          Request Enterprise Consultation
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Enhanced premium sponsor section */}
                  <div className="w-full mt-auto">
                    <div className="text-center mb-6">
                      <p className="text-gray-300 text-sm font-medium tracking-wide uppercase">
                        Trusted by Industry Leaders
                      </p>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-6 max-w-4xl mx-auto bg-gradient-to-r from-black/40 via-black/60 to-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex justify-center items-center h-12 md:h-16 bg-white rounded-lg p-2 sm:p-3 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-[#00C875]/10 hover:translate-y-[-2px] hover:bg-gray-50"
                        >
                          <Image
                            src={`/sponsor/comp-${i + 1}${
                              i === 4 ? '.jpg' : '.png'
                            }`}
                            alt={`Premium Partner ${i + 1}`}
                            width={100}
                            height={40}
                            className="object-contain h-full w-auto"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* Trusted by logos section */}
        <div
          className={`container mx-auto px-4 mt-8 md:mt-20 ${
            isVideoVariant ? 'relative z-10' : ''
          } ${
            variant === 'video-overlay' || variant === 'premium'
              ? 'hidden md:block'
              : ''
          }`}
        >
          {variant === 'video-overlay' && (
            <div className="mb-3 text-center">
              <p className="text-gray-300 text-xs uppercase tracking-wide font-medium">
                Trusted By Leading Organizations
              </p>
            </div>
          )}

          {/* Add title for video-split variant */}
          {variant === 'video-split' && (
            <div className="mb-3 text-center">
              <p className="text-gray-300 text-xs uppercase tracking-wide font-medium">
                Trusted By Leading Organizations
              </p>
            </div>
          )}

          <div
            className={`grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-4 md:gap-6 max-w-5xl mx-auto ${
              variant === 'video-overlay'
                ? 'md:bg-transparent bg-black/30 backdrop-blur-sm p-3 md:p-0 rounded-xl md:rounded-none'
                : variant === 'video-split'
                ? 'bg-black/30 backdrop-blur-sm p-3 rounded-xl'
                : ''
            }`}
          >
            <div className="flex justify-center items-center h-10 sm:h-12 md:h-14 bg-white/95 rounded-lg p-2 sm:p-3 shadow-md transition-transform hover:scale-105">
              <Image
                src="/sponsor/comp-1.png"
                alt="Secure Minded"
                width={100}
                height={40}
                className="object-contain h-full w-auto"
              />
            </div>
            <div className="flex justify-center items-center h-10 sm:h-12 md:h-14 bg-white/95 rounded-lg p-2 sm:p-3 shadow-md transition-transform hover:scale-105">
              <Image
                src="/sponsor/comp-2.png"
                alt="Security Protection"
                width={100}
                height={40}
                className="object-contain h-full w-auto"
              />
            </div>
            <div className="flex justify-center items-center h-10 sm:h-12 md:h-14 bg-white/95 rounded-lg p-2 sm:p-3 shadow-md transition-transform hover:scale-105">
              <Image
                src="/sponsor/comp-3.png"
                alt="Security"
                width={100}
                height={40}
                className="object-contain h-full w-auto"
              />
            </div>
            <div className="flex justify-center items-center h-10 sm:h-12 md:h-14 bg-white/95 rounded-lg p-2 sm:p-3 shadow-md transition-transform hover:scale-105 col-span-3 sm:col-span-1">
              <Image
                src="/sponsor/comp-4.png"
                alt="Security Squared"
                width={100}
                height={40}
                className="object-contain h-full w-auto"
              />
            </div>
            <div className="flex justify-center items-center h-10 sm:h-12 md:h-14 bg-white/95 rounded-lg p-2 sm:p-3 shadow-md transition-transform hover:scale-105 hidden sm:flex">
              <Image
                src="/sponsor/comp-5.jpg"
                alt="TechShield"
                width={100}
                height={40}
                className="object-contain h-full w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Add to your global CSS file:
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
}
*/
