import { buildMetadata } from '@/lib/seo';
import { routes } from '@/config/site.config';
import { pageMetadata } from '../_data/page-metadata';
import { privacyPolicyContent } from '../_data/legal-content';
import { LegalLayout } from '../_components/LegalLayout';

export const metadata = buildMetadata({ ...pageMetadata.privacyPolicy, path: routes.privacyPolicy });

export default function PrivacyPolicyPage() {
  return <LegalLayout title="Privacy policy" {...privacyPolicyContent} />;
}
