'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Mr. Michel Phelops',
      position: 'UX Designer',
      image: '/testimonials/person1.jpg',
      rating: 4,
      quote:
        "We were impressed with Secur's ability to tailor their services to our specific needs. Their in-depth knowledge and expertise helped us identify and address potential vulnerabilities before they could cause serious damage.",
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'CTO, TechForward',
      image: '/testimonials/person2.jpg',
      rating: 5,
      quote:
        "Secur's cybersecurity solutions have completely transformed how we approach digital security. Their team identified vulnerabilities we weren't even aware of and implemented robust protection systems that give us peace of mind.",
    },
    {
      id: 3,
      name: 'David Miller',
      position: 'Director of IT',
      image: '/testimonials/person3.jpg',
      rating: 5,
      quote:
        'After experiencing a security breach with our previous provider, switching to Secur was the best decision we made. Their incident response team is exceptional, and their preventative measures are comprehensive and effective.',
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

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <span
          key={index}
          className={index < rating ? 'text-amber-400' : 'text-gray-600'}
        >
          ★
        </span>
      ));
  };

  return (
    <section className="py-20 bg-[#010817] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Section label */}
          <div className="inline-block bg-[#4318FF]/10 text-[#4318FF] font-semibold text-sm py-2 px-4 rounded-full mb-4">
            Our Testimonial
          </div>

          {/* Section heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Hear from Our Satisfied Clients
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Additional profile images on sides for visual effect */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 hidden md:block">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-600/20 bg-purple-600/20">
              <Image
                src="/testimonials/person2.jpg"
                alt="Testimonial"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 hidden md:block">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-amber-500/20 bg-amber-500/20">
              <Image
                src="/testimonials/person3.jpg"
                alt="Testimonial"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          </div>

          {/* Main testimonial slider */}
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-custom-pagination',
              bulletClass: 'swiper-custom-bullet',
              bulletActiveClass: 'swiper-custom-bullet-active',
            }}
            onSwiper={setSwiper}
            speed={700}
            className="testimonials-swiper py-8"
          >
            {testimonials.map(testimonial => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col items-center text-center">
                  {/* Profile image */}
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-indigo-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100px, 128px"
                    />
                  </div>

                  {/* Testimonial content */}
                  <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400 mb-2">{testimonial.position}</p>

                    {/* Star rating */}
                    <div className="flex justify-center text-2xl mb-8 space-x-2">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination */}
          <div className="swiper-custom-pagination flex justify-center mt-8 space-x-2"></div>

          {/* Custom navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              ref={prevRef}
              className="w-12 h-12 rounded-full bg-[#151B29] border border-[#25304C] text-[#4318FF] flex items-center justify-center transition-colors hover:bg-[#192132] focus:outline-none focus:ring-2 focus:ring-[#4318FF]/50 disabled:opacity-50"
              aria-label="Previous testimonial"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 6L9 12L15 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              ref={nextRef}
              className="w-12 h-12 rounded-full bg-[#4318FF] text-white flex items-center justify-center transition-colors hover:bg-[#3A63D2] focus:outline-none focus:ring-2 focus:ring-[#4318FF]/50 disabled:opacity-50"
              aria-label="Next testimonial"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6L15 12L9 18"
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

      <style jsx global>{`
        /* Custom pagination styles */
        .swiper-custom-pagination {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .swiper-custom-bullet {
          width: 10px;
          height: 10px;
          background-color: rgba(75, 123, 245, 0.3);
          border-radius: 50%;
          margin: 0 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .swiper-custom-bullet-active {
          background-color: #4318ff;
          width: 12px;
          height: 12px;
        }

        /* Fade-in effect for slider */
        .swiper-slide-active {
          animation: fadeIn 0.8s ease forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0.4;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
