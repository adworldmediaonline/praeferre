import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-20 bg-[#030712] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative z-10 h-[500px] lg:h-[600px] w-full overflow-hidden rounded-3xl">
              <Image
                src="/shield-circuit.png"
                alt="Cybersecurity Shield"
                fill
                className="object-cover"
                priority
              />

              {/* Decorative border glow */}
              <div className="absolute inset-0 rounded-3xl border border-[#4B7BF5]/30 shadow-[0_0_15px_rgba(75,123,245,0.3)]"></div>
            </div>

            {/* Badge overlay */}
            <div className="absolute -top-6 right-0 lg:-right-6 bg-white rounded-xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.2)] z-20 max-w-[260px]">
              <div className="flex items-center gap-3">
                <div className="text-[#4318FF] text-5xl font-bold leading-none">
                  25+
                </div>
                <div className="font-medium text-[#1E293B]">
                  Years of
                  <br />
                  Experience
                </div>
              </div>
            </div>

            {/* Decorative glow effects */}
            <div className="absolute -top-10 -left-10 w-80 h-80 bg-[#4B7BF5]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-[#4B7BF5]/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-[#4B7BF5]/20 rounded-full blur-xl"></div>
          </div>

          {/* Right side - Content */}
          <div>
            <h3 className="text-[#4B7BF5] font-semibold mb-4">
              About Our Company
            </h3>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Your Trusted Cybersecurity Partner Since 1999
            </h2>

            <p className="text-gray-400 mb-10">
              Secur is a pioneering cybersecurity firm dedicated to safeguarding
              your digital assets. With over two decades of experience, we've
              been at the forefront of innovation, providing comprehensive.
            </p>

            <div className="w-full h-px bg-gray-800 mb-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <div>
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-8 h-8 mt-1 flex-shrink-0">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                        stroke="#4B7BF5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.667 16L14.2223 19.3333L21.3337 12.6667"
                        stroke="#4B7BF5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl">
                      Our Mission
                    </h3>
                    <p className="text-gray-400 mt-2">
                      To empower organizations to navigated the more complex
                      cyber security landscape with confidence.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-8 h-8 mt-1 flex-shrink-0">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4"
                        stroke="#4B7BF5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z"
                        stroke="#4B7BF5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl">Our Vision</h3>
                    <p className="text-gray-400 mt-2">
                      To be the premier provider of innovative cyber security
                      solutions, protecting our clients from threats.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <Link
                href="/about"
                className="bg-[#4318FF] hover:bg-[#3A63D2] text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2 text-sm shadow-[0_4px_15px_rgba(75,123,245,0.4)]"
              >
                More About Us
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.125 10H16.875"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.25 4.375L16.875 10L11.25 15.625"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                  <Image
                    src="/andy-dufren.jpg"
                    alt="CEO portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Andy Dufren</p>
                  <p className="text-gray-400 text-xs">CEO, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
