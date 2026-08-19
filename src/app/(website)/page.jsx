import { Hero } from './_components/Hero';
import { SkillDevelopmentSection } from './_components/SkillDevelopmentSection';
import { ConsultancyServiceSection } from './_components/ConsultancyServiceSection';
import { BusinessAutomationSection } from './_components/BusinessAutomationSection';
import { WhyChooseUsSection } from './_components/WhyChooseUsSection';
import { TestimonialsSection } from './_components/TestimonialsSection';
import { FaqSection } from './_components/FaqSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SkillDevelopmentSection />
      <ConsultancyServiceSection />
      <BusinessAutomationSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
}
