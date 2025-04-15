import { forwardRef } from 'react';
import PageTransition from '../components/landing/PageTransition';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import FAQSection from '../components/landing/FAQSection';
import ServicesSection from '../components/landing/ServicesSection';
import WhyChooseSection from '../components/landing/WhyChooseSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import PricingSection from '../components/landing/PricingSection';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';

type HomeProps = object;
type HomeRef = React.ForwardedRef<HTMLDivElement>;

const Home = (props: HomeProps, ref: HomeRef) => {
  return (
    <PageTransition ref={ref}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </PageTransition>
  );
};

export default forwardRef(Home);
