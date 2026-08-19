import { buildMetadata } from '@/lib/seo';
import { routes } from '@/config/site.config';
import { pageMetadata } from '../_data/page-metadata';
import { AboutUsPageContent } from '../_components/AboutUsPageContent';

export const metadata = buildMetadata({ ...pageMetadata.aboutUs, path: routes.aboutUs });

export default function AboutUsPage() {
  return <AboutUsPageContent />;
}
