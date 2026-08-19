import { SITE_URL } from '@/lib/seo';
import { routes } from '@/config/site.config';
import { pageMetadata } from './(website)/_data/page-metadata';

// Derived from pageMetadata's keys, so a route only appears here once its page actually exists
// (pageMetadata gets a new entry every time a page is built — see app/(website)/_data/page-metadata.js).
export default function sitemap() {
  return Object.keys(pageMetadata).map((key) => ({
    url: new URL(routes[key], SITE_URL).toString(),
    lastModified: new Date(),
  }));
}
