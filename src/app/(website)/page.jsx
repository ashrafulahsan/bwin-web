import { Hero } from './_components/Hero';
import { SkillDevelopmentSection } from './_components/SkillDevelopmentSection';
import { ConsultancyServiceSection } from './_components/ConsultancyServiceSection';
import { BusinessAutomationSection } from './_components/BusinessAutomationSection';
import { WhyChooseUsSection } from './_components/WhyChooseUsSection';
import { TestimonialsSection } from './_components/TestimonialsSection';
import { FaqSection } from './_components/FaqSection';
import { buildMetadata } from '@/lib/seo';
import { routes } from '@/config/site.config';
import { pageMetadata } from './_data/page-metadata';

export const metadata = buildMetadata({ ...pageMetadata.home, path: routes.home });

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
