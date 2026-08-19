import { buildMetadata } from '@/lib/seo';
import { routes } from '@/config/site.config';
import { pageMetadata } from '../_data/page-metadata';
import { TeamsPageContent } from '../_components/TeamsPageContent';

export const metadata = buildMetadata({ ...pageMetadata.teams, path: routes.teams });

export default function TeamsPage() {
  return <TeamsPageContent />;
}
