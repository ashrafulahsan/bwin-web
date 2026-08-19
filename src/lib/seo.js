// Shared helper for building Next.js Metadata objects consistently across every page.
// Only usable from Server Components — Next.js disallows exporting `metadata` from a
// file marked 'use client'. Pages that need client-side interactivity (hooks, handlers)
// should stay thin Server Components that call buildMetadata() and render a separate
// 'use client' content component — see any of app/(website)/*/page.jsx for the pattern.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export const SITE_NAME = 'BWIN Consultants';

export function buildMetadata({ title, description, path = '/', image, noIndex = false } = {}) {
  const url = new URL(path, SITE_URL).toString();
  // Omit the `title` key entirely when not provided (rather than passing `title: undefined`) — Next.js
  // treats an explicit `title: undefined` as "this segment sets an empty title", not "inherit from the
  // parent layout's default", so the key must be absent for the home page to fall back correctly.
  const titleField = title ? { title } : {};
  return {
    ...titleField,
    description,
    alternates: { canonical: url },
    openGraph: {
      ...titleField,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      ...titleField,
      description,
      ...(image ? { images: [image] } : {}),
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
