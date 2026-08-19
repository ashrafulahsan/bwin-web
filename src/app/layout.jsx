import '@/styles/globals.css';

export const metadata = {
  title: 'BWIN Consultants',
  description: 'Skill development, consultancy, and business automation.',
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
