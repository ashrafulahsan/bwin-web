import { buildMetadata } from '@/lib/seo';
import { routes } from '@/config/site.config';
import { pageMetadata } from '../_data/page-metadata';
import { ContactUsPageContent } from '../_components/ContactUsPageContent';

export const metadata = buildMetadata({ ...pageMetadata.contactUs, path: routes.contactUs });

export default function ContactUsPage() {
  return <ContactUsPageContent />;
}
