'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';

export default function TestimonialsSection() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CTO, TechGlobal',
      image: '/testimonials/person1.webp',
      rating: 5,
      content:
        "Implementing Secur's cybersecurity framework has been transformative for our organization. Not only did they identify vulnerabilities we weren't aware of, but they also provided a strategic roadmap for enhancing our security posture.",
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CEO, DataFlow Systems',
      image: '/testimonials/person1.webp',
      rating: 5,
      content:
        "We've worked with several security firms over the years, but Secur stands out for their technical expertise and customer-centric approach. Their team became an extension of our own, ensuring we were protected every step of the way.",
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'CISO, HealthGuard',
      image: '/testimonials/person1.webp',
      rating: 5,
      content:
        'In the healthcare sector, data security is non-negotiable. Secur not only understood our unique challenges but provided tailored solutions that ensured our patient data remained protected while meeting all regulatory requirements.',
    },
    {
      id: 4,
      name: 'David Patel',
      position: 'VP of IT, FinSecure',
      image: '/testimonials/person1.webp',
      rating: 5,
      content:
        'After experiencing a security breach, we turned to Secur for their incident response expertise. Their team quickly contained the threat, conducted a thorough forensic analysis, and implemented robust measures to prevent future incidents.',
    },
  ];

  // Connect custom navigation buttons to Swiper instance
  useEffect(() => {
    if (
      swiper &&
      swiper.params.navigation &&
      prevRef.current &&
      nextRef.current
    ) {
      // Type assertion to help TypeScript understand navigation structure
      const navigation = swiper.params.navigation as {
        prevEl?: HTMLElement | null;
        nextEl?: HTMLElement | null;
      };
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  // const renderStars = (rating: number) => {
  //   return Array(5)
  //     .fill(0)
  //     .map((_, index) => (
  //       <span
  //         key={index}
  //         className={index < rating ? 'text-amber-400' : 'text-gray-600'}
  //       >
  //         ★
  //       </span>
  //     ));
  // };

  return (
    <section className="py-24 bg-[#010817] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-primary font-semibold mb-4">
              Client Testimonials
            </h3>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-400">
              Discover why organizations across industries trust Secur to
              safeguard their digital assets and infrastructure.
            </p>
          </div>

          <div className="relative testimonials-slider">
            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onSwiper={setSwiper}
              className="pb-14"
            >
              {testimonials.map(testimonial => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-[#0F1628] rounded-2xl p-8 h-full border border-white/5 relative">
                    {/* Glow effect */}
                    <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-sm opacity-50"></div>
                    <div className="relative z-10">
                      {/* Quotation mark */}
                      <div className="absolute -top-4 -left-2 text-primary/20">
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 60 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 30V60H30V30H10C10 13.5 23.5 0 40 0H30C13.5 0 0 13.5 0 30ZM60 0H50C33.5 0 20 13.5 20 30V60H50V30H30C30 13.5 43.5 0 60 0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>

                      {/* Rating */}
                      <div className="flex mb-6 text-primary">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 1L12.795 6.90983L19.2658 7.72949L14.4207 12.0902L15.8779 18.4705L10 15.25L4.12215 18.4705L5.5793 12.0902L0.734152 7.72949L7.20499 6.90983L10 1Z"
                              fill="currentColor"
                            />
                          </svg>
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-gray-300 mb-6">
                        {testimonial.content}
                      </p>

                      {/* Author */}
                      <div className="flex items-center">
                        <div className="mr-4 w-12 h-12 relative rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                ref={prevRef}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8333 10H4.16666"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.99999 15.8334L4.16666 10.0001L9.99999 4.16675"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                ref={nextRef}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.16666 10H15.8333"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 4.16675L15.8333 10.0001L10 15.8334"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -top-10 -left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
