import { Hero } from './_components/Hero';
import { SkillDevelopmentSection } from './_components/SkillDevelopmentSection';
import { ConsultancyServiceSection } from './_components/ConsultancyServiceSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SkillDevelopmentSection />
      <ConsultancyServiceSection />
    </>
  );
}
