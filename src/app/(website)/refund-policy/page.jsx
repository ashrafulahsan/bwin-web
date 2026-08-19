import { buildMetadata } from '@/lib/seo';
import { routes } from '@/config/site.config';
import { pageMetadata } from '../_data/page-metadata';
import { refundPolicyContent } from '../_data/legal-content';
import { LegalLayout } from '../_components/LegalLayout';

export const metadata = buildMetadata({ ...pageMetadata.refundPolicy, path: routes.refundPolicy });

export default function RefundPolicyPage() {
  return <LegalLayout title="Refund policy" {...refundPolicyContent} />;
}
