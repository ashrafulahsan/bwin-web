import { buildMetadata } from '@/lib/seo';
import { routes } from '@/config/site.config';
import { pageMetadata } from '../_data/page-metadata';
import { termsConditionsContent } from '../_data/legal-content';
import { LegalLayout } from '../_components/LegalLayout';

export const metadata = buildMetadata({ ...pageMetadata.termsConditions, path: routes.termsConditions });

export default function TermsConditionsPage() {
  return <LegalLayout title="Terms and conditions" {...termsConditionsContent} />;
}
