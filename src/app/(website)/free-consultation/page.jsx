import { buildMetadata } from '@/lib/seo';
import { routes } from '@/config/site.config';
import { pageMetadata } from '../_data/page-metadata';
import { ConsultancyPageContent } from '../_components/ConsultancyPageContent';

export const metadata = buildMetadata({ ...pageMetadata.freeConsultation, path: routes.freeConsultation });

export default function FreeConsultationPage() {
  return <ConsultancyPageContent />;
}
