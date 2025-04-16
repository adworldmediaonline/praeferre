// import { forwardRef } from 'react';
// import PageTransition from '../components/landing/PageTransition';
import dynamic from 'next/dynamic';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import FAQSection from '../components/landing/FAQSection';
import ServicesSection from '../components/landing/ServicesSection';
import WhyChooseSection from '../components/landing/WhyChooseSection';
// import TestimonialsSection from '../components/landing/TestimonialsSection';
import PricingSection from '../components/landing/PricingSection';
import BlogSection from '../components/landing/BlogSection';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';

// Lazy load TestimonialsSection for better performance
const TestimonialsSection = dynamic(
  () => import('../components/landing/TestimonialsSection'),
  {
    loading: () => (
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <div className="h-6 w-24 bg-gray-800 rounded animate-pulse mb-4"></div>
            <div className="h-12 w-3/4 max-w-2xl bg-gray-800 rounded animate-pulse"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {[1, 2, 3].map(item => (
              <div
                key={item}
                className="bg-gray-900 rounded-xl p-6 w-full md:w-1/3 animate-pulse"
              >
                <div className="h-32 bg-gray-800 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-800 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-800 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    ssr: true,
  }
);

// type HomeProps = object;
// type HomeRef = React.ForwardedRef<HTMLDivElement>;

export default function Home() {
  return (
    // <PageTransition ref={ref}>
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection variant="video-split" />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <PricingSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
    // </PageTransition>
  );
}

// export default forwardRef(Home);
