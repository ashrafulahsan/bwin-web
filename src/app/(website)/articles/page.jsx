import { buildMetadata } from '@/lib/seo';
import { routes } from '@/config/site.config';
import { pageMetadata } from '../_data/page-metadata';
import { ArticlesPageContent } from '../_components/ArticlesPageContent';

export const metadata = buildMetadata({ ...pageMetadata.articles, path: routes.articles });

export default function ArticlesPage() {
  return <ArticlesPageContent />;
}
