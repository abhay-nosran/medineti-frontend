import React from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { HeroSection } from '../sections/HeroSection';
import { ServicesOverview } from '../sections/ServicesOverview';
import { WhyChooseUsSection } from '../sections/WhyChooseUsSection';
import { ProcessSection } from '../sections/ProcessSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { FAQSection } from '../sections/FAQSection';
import { FinalCTASection } from '../sections/FinalCTASection';

export const LandingPage: React.FC = () => {
  return (
    <PageWrapper>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </PageWrapper>
  );
};