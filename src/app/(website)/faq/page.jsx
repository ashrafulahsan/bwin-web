import { buildMetadata } from '@/lib/seo';
import { routes } from '@/config/site.config';
import { pageMetadata } from '../_data/page-metadata';
import { FaqPageContent } from '../_components/FaqPageContent';

export const metadata = buildMetadata({ ...pageMetadata.faq, path: routes.faq });

export default function FaqPage() {
  return <FaqPageContent />;
}
