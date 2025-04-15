'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileWhoAreWeOpen, setMobileWhoAreWeOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-32 md:w-40 h-8 md:h-10">
              <Image
                src="/praeferre-updated-logo-light.png"
                alt="Praeferre Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-1 lg:gap-2">
                {/* SECTORS */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/sectors"
                    className="text-white font-medium hover:text-purple-400 transition-colors px-2 lg:px-3 py-2 text-sm uppercase"
                  >
                    SECTORS
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* PRODUCTS */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/products"
                    className="text-gray-400 font-medium hover:text-white transition-colors px-2 lg:px-3 py-2 text-sm uppercase"
                  >
                    PRODUCTS
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* WHO ARE WE Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-400 font-medium hover:text-white focus:text-white data-[state=open]:text-white transition-colors px-2 lg:px-3 py-2 text-sm uppercase bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                    WHO ARE WE
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-48 bg-background/90 backdrop-blur-md rounded shadow-lg py-2 z-50">
                      <li>
                        <Link
                          href="/about-team"
                          className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-accent/50"
                        >
                          About Our Team
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/company-history"
                          className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-accent/50"
                        >
                          Company History
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* PRICING */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/pricing"
                    className="text-gray-400 font-medium hover:text-white transition-colors px-2 lg:px-3 py-2 text-sm uppercase"
                  >
                    PRICING
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* RESOURCES Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-400 font-medium hover:text-white focus:text-white data-[state=open]:text-white transition-colors px-2 lg:px-3 py-2 text-sm uppercase bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                    RESOURCES
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-48 bg-background/90 backdrop-blur-md rounded shadow-lg py-2 z-50">
                      <li>
                        <Link
                          href="/blogs"
                          className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-accent/50"
                        >
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/documentation"
                          className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-accent/50"
                        >
                          Documentation
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language toggle */}
            <button className="hidden md:flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 transition-colors">
              <svg
                width="18"
                height="18"
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
            <button className="hidden md:flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 transition-colors">
              <svg
                width="18"
                height="18"
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
              className="hidden sm:flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#4318FF] hover:bg-[#3A14E0] text-white rounded-full font-medium transition-colors text-sm"
            >
              Contact Us
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
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
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
              href="/sectors"
              className="text-white font-medium py-3 hover:bg-gray-800/50 px-4 rounded-lg uppercase text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              SECTORS
            </Link>
            <Link
              href="/products"
              className="text-gray-400 font-medium py-3 hover:bg-gray-800/50 px-4 rounded-lg uppercase text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              PRODUCTS
            </Link>

            {/* WHO ARE WE Mobile */}
            <div className="py-1">
              <button
                className="w-full text-left text-gray-400 font-medium py-3 hover:bg-gray-800/50 px-4 rounded-lg flex justify-between items-center uppercase text-sm"
                onClick={() => setMobileWhoAreWeOpen(!mobileWhoAreWeOpen)}
              >
                WHO ARE WE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${
                    mobileWhoAreWeOpen ? 'rotate-180' : ''
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {mobileWhoAreWeOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  <Link
                    href="/about-team"
                    className="block text-gray-400 py-2 px-4 hover:bg-gray-800/50 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Our Team
                  </Link>
                  <Link
                    href="/company-history"
                    className="block text-gray-400 py-2 px-4 hover:bg-gray-800/50 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Company History
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className="text-gray-400 font-medium py-3 hover:bg-gray-800/50 px-4 rounded-lg uppercase text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              PRICING
            </Link>

            {/* RESOURCES Mobile */}
            <div className="py-1">
              <button
                className="w-full text-left text-gray-400 font-medium py-3 hover:bg-gray-800/50 px-4 rounded-lg flex justify-between items-center uppercase text-sm"
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              >
                RESOURCES
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${
                    mobileResourcesOpen ? 'rotate-180' : ''
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {mobileResourcesOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  <Link
                    href="/blogs"
                    className="block text-gray-400 py-2 px-4 hover:bg-gray-800/50 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blogs
                  </Link>
                  <Link
                    href="/documentation"
                    className="block text-gray-400 py-2 px-4 hover:bg-gray-800/50 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Documentation
                  </Link>
                </div>
              )}
            </div>

            <div className="flex mt-4 space-x-2">
              {/* Mobile language toggle */}
              <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 transition-colors">
                <svg
                  width="18"
                  height="18"
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

              {/* Mobile search button */}
              <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 transition-colors">
                <svg
                  width="18"
                  height="18"
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

              <Link
                href="/contact"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-[#4318FF] hover:bg-[#3A14E0] text-white rounded-full font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
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
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
