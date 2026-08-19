import '@/styles/globals.css';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'BWIN Consultants — Skill Development, Consultancy & Business Automation',
    template: '%s | BWIN Consultants',
  },
  description: 'BWIN Consultants helps individuals build in-demand skills and helps businesses run better — through hands-on training, practical consultancy, and automation that removes the busywork from daily operations.',
  openGraph: {
    siteName: SITE_NAME,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var t = localStorage.getItem('bwin-theme');
    if (t === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
