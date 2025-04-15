'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function PricingSection() {
  const pricingPlans = [
    {
      id: 1,
      name: 'Basic Plan',
      price: '$45,00',
      description:
        'Small to medium-sized businesses, including those in retail, healthcare.',
      features: [
        { name: 'Regular vulnerability assessments', included: true },
        { name: 'Regular penetration testing', included: true },
        { name: 'Incident response planning', included: true },
        { name: 'Regular vulnerability assessments', included: false },
        { name: '24/7 security monitoring', included: false },
      ],
      isPopular: false,
    },
    {
      id: 2,
      name: 'Standard Plan',
      price: '$99,00',
      description:
        'Growing businesses that need comprehensive security solutions to',
      features: [
        { name: 'Regular vulnerability assessments', included: true },
        { name: 'Regular penetration testing', included: true },
        { name: 'Incident response planning', included: true },
        { name: 'Regular vulnerability assessments', included: true },
        { name: '24/7 security monitoring', included: false },
      ],
      isPopular: true,
    },
    {
      id: 3,
      name: 'Premium Plan',
      price: '$150,00',
      description:
        'Large organizations with complex IT infrastructures and stringent security',
      features: [
        { name: 'Regular vulnerability assessments', included: true },
        { name: 'Regular penetration testing', included: true },
        { name: 'Incident response planning', included: true },
        { name: 'Regular vulnerability assessments', included: true },
        { name: '24/7 security monitoring', included: true },
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="py-20 bg-[#010817]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          {/* Section label */}
          <div className="inline-block bg-[#4B7BF5]/10 text-[#4B7BF5] font-semibold text-sm py-2 px-4 rounded-full mb-4">
            Pricing Plan
          </div>

          {/* Section heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Affordable Cyber Security Solutions
          </h2>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map(plan => (
            <div
              key={plan.id}
              className={cn(
                'rounded-3xl overflow-hidden relative',
                plan.isPopular ? 'border border-[#4B7BF5]/30' : ''
              )}
            >
              {/* Card background */}
              <div
                className={cn(
                  'p-8 bg-[#051431] h-full flex flex-col',
                  plan.isPopular
                    ? 'bg-gradient-to-b from-[#051D46] to-[#051431]'
                    : 'bg-[#051431]'
                )}
              >
                {/* "Popular" badge */}
                {plan.isPopular && (
                  <div className="absolute top-6 right-6">
                    <span className="bg-[#4B7BF5] text-white text-xs font-medium px-3 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                )}

                {/* Plan name and description */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm mb-6 min-h-[50px]">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-10">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="#"
                  className={cn(
                    'flex justify-center items-center h-12 rounded-full text-center font-medium transition-colors mb-10',
                    plan.isPopular
                      ? 'bg-gradient-to-r from-[#4B7BF5] to-[#7B5EFB] text-white'
                      : 'border border-[#4B7BF5] text-[#4B7BF5] hover:bg-[#4B7BF5]/10'
                  )}
                >
                  Get Started
                </Link>

                {/* Features list */}
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div
                        className={cn(
                          'w-6 h-6 flex-shrink-0 rounded-full flex items-center justify-center',
                          feature.included
                            ? 'bg-[#4B7BF5]/10 text-[#4B7BF5]'
                            : 'bg-gray-800/50 text-gray-600'
                        )}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {feature.included ? (
                            <path
                              d="M5 12L10 17L20 7"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          ) : (
                            <circle
                              cx="12"
                              cy="12"
                              r="9"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                          )}
                        </svg>
                      </div>
                      <span
                        className={cn(
                          'text-sm',
                          feature.included ? 'text-gray-300' : 'text-gray-500'
                        )}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
