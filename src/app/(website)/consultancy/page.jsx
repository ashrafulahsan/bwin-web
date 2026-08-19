import { buildMetadata } from '@/lib/seo';
import { routes } from '@/config/site.config';
import { pageMetadata } from '../_data/page-metadata';
import { ConsultancyPageContent } from '../_components/ConsultancyPageContent';

export const metadata = buildMetadata({ ...pageMetadata.consultancy, path: routes.consultancy });

export default function ConsultancyPage() {
  return <ConsultancyPageContent />;
}
