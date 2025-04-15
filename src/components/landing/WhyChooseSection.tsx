import Image from 'next/image';

export default function WhyChooseSection() {
  const features = [
    {
      id: 1,
      title: 'Cutting-Edge Technology',
      description:
        'We leverage the latest cybersecurity tools and techniques to safeguard your business. Our advanced threat.',
      icon: '/icons/gear-advanced.svg',
    },
    {
      id: 2,
      title: 'Customized Solutions',
      description:
        'Our tailored approach ensures that your security needs are met, regardless of your industry or size.',
      icon: '/icons/solutions-custom.svg',
    },
  ];

  const achievements = [
    {
      value: '5000+',
      label: 'Projects Completed',
      color: 'bg-gradient-to-r from-green-500 to-green-600',
    },
    {
      value: '95%',
      label: 'Client Retention Rate',
      color: 'bg-gradient-to-r from-amber-500 to-amber-600',
    },
    {
      value: '150k+',
      label: 'Customers Globally',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
    },
    {
      value: '25+',
      label: 'Years Of Experience',
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
    },
  ];

  return (
    <section className="py-20 bg-[#010817] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative z-10 h-[500px] lg:h-[600px] w-full overflow-hidden rounded-3xl bg-gradient-to-b from-[#094AB2]/80 to-[#042454]">
              <Image
                src="/whyChooseUs/why-choose-us.webp"
                alt="Advanced Security Shield"
                fill
                className="object-cover object-center mix-blend-luminosity"
                priority
              />

              {/* Digital circuit pattern overlay */}
              <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] opacity-30 mix-blend-overlay"></div>

              {/* Decorative border glow */}
              <div className="absolute inset-0 rounded-3xl border border-[#4B7BF5]/30 shadow-[0_0_20px_rgba(75,123,245,0.4)]"></div>
            </div>

            {/* Badge overlay */}
            <div className="absolute -bottom-6 left-0 lg:-left-6 bg-white rounded-xl py-4 px-6 shadow-[0_4px_20px_rgba(0,0,0,0.2)] z-20">
              <div className="flex items-center gap-3">
                <div className="text-[#4B7BF5]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 2L4 8V16C4 23.1 9.1 29.7 16 31C22.9 29.7 28 23.1 28 16V8L16 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16L14.5 18.5L20 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="font-medium text-gray-900">
                  Trusted By 5k Clients
                </div>
              </div>
            </div>

            {/* Decorative glow effects */}
            <div className="absolute -top-10 -left-10 w-80 h-80 bg-[#4B7BF5]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-[#4B7BF5]/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-[#4B7BF5]/20 rounded-full blur-xl"></div>
          </div>

          {/* Right side - Content */}
          <div>
            <h3 className="text-[#4B7BF5] font-semibold mb-4">
              Why Choose Secur
            </h3>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Advanced Security Solutions For A Digital Age
            </h2>

            <p className="text-gray-400 mb-10">
              For over two decades, Secur has been at the forefront of
              cybersecurity, adapting to the ever-evolving threat landscape. Our
              seasoned professionals have a deep understanding of the latest
              attack vectors.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {features.map(feature => (
                <div key={feature.id} className="group">
                  <div className="flex flex-col">
                    {/* Feature icon in blue square */}
                    <div className="mb-6">
                      <div className="w-[68px] h-[68px] bg-[#4B7BF5]/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                        {/* Icon background glow */}
                        <div className="absolute inset-0 bg-[#4B7BF5]/5 rounded-2xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#4B7BF5]/10 rounded-full blur-lg"></div>

                        {/* Icon */}
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-[#4B7BF5]"
                        >
                          {feature.id === 1 ? (
                            // Gear icon for Cutting-Edge Technology
                            <path
                              d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z M27.7 17.9L27.3 15.3C27.2 14.2 26.2 13.3 25.1 13.4L24.1 13.5C23.8 13.5 23.2 13.2 23 12.9L22.2 11.6C21.8 10.8 21.9 9.7 22.6 9.1L23.4 8.4C24.2 7.8 24.4 6.7 23.9 5.9L22.8 4C22.3 3.2 21.2 2.9 20.3 3.4L19.4 3.9C19 4.1 18.3 4 18 3.7L17 2.8C16.3 2.2 15.3 2.1 14.5 2.5L13.5 3C13.1 3.2 12.4 3.1 12.1 2.8L11.4 2.1C10.7 1.4 9.6 1.4 8.9 2.1L7.4 3.6C6.7 4.3 6.7 5.4 7.4 6.1L8.1 6.8C8.4 7.1 8.5 7.8 8.3 8.2L7.8 9.1C7.5 9.9 6.5 10.3 5.7 10L4.7 9.5C3.9 9.2 3 9.5 2.5 10.3L1.4 12.2C0.9 13 1.1 14.1 1.9 14.7L2.7 15.4C3.1 15.7 3.3 16.3 3.2 16.7L3 17.9C2.8 18.7 3.3 19.6 4.1 19.9L5.3 20.4C5.7 20.6 6 21.1 6 21.5V22.5C6 23.3 6.5 24.1 7.3 24.4L9.3 25.2C10.1 25.5 11 25.2 11.5 24.5L12 23.8C12.3 23.4 12.9 23.1 13.3 23.1L14.4 23.2C15.3 23.3 16.1 22.8 16.4 22L16.8 21C17 20.5 17.5 20.2 18 20.2H18.6C19.1 20.2 19.6 20.5 19.9 21L20.4 21.8C20.9 22.7 21.9 23.1 22.8 22.7L24.6 21.9C25.5 21.5 25.9 20.5 25.6 19.6L25.2 18.7C25 18.2 25.2 17.6 25.7 17.3L26.6 16.8C27.4 16.3 27.9 15.2 27.7 14.3"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          ) : (
                            // Custom solutions icon
                            <>
                              <path
                                d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M25 16H28"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M4 16H7"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16 7V4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16 28V25"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </>
                          )}
                        </svg>
                      </div>
                    </div>

                    {/* Feature title and description */}
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Stats Section */}
        <div className="mt-28">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#4B7BF5]/10 text-[#4B7BF5] font-semibold text-sm py-2 px-4 rounded-full mb-4">
              Our Achievement
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Discover What Defines Us
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16">
            {achievements.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  {item.value}
                </div>
                <div className="relative">
                  <div className="text-gray-400">{item.label}</div>
                  {/* Colored underline */}
                  <div
                    className={`h-1 w-32 mx-auto mt-2 rounded-full ${item.color}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
