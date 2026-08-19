// Static for now — swap these exports for an API call (e.g. GET /api/v1/blogs) once articles are managed in
// the backend (blogs module). Shape must stay { title, cat, img, date, read, excerpt } for
// ArticlesPageContent to keep working unchanged.
export const articleCategories = ['All', 'Skill Development', 'Consultancy', 'Automation', 'Company News'];

export const articles = [
  { title: 'Five signs your team needs Lean Six Sigma training', cat: 'Skill Development', img: 'art-1', date: 'Jul 2, 2026', read: '5 min read', excerpt: 'Certifications aside, here’s how to tell your operations team is ready for a structured process-improvement program.' },
  { title: 'What a good VAT filing process actually looks like', cat: 'Consultancy', img: 'art-2', date: 'Jun 24, 2026', read: '6 min read', excerpt: 'Most businesses treat VAT as a monthly scramble. Here’s how we help clients turn it into a repeatable system.' },
  { title: 'Why your ERP rollout keeps stalling', cat: 'Automation', img: 'art-3', date: 'Jun 18, 2026', read: '7 min read', excerpt: 'The most common reasons ERP projects lose momentum halfway through — and how to avoid them.' },
  { title: 'BWIN named APICS/ASCM authorized training partner', cat: 'Company News', img: 'art-4', date: 'Jun 10, 2026', read: '3 min read', excerpt: 'We’re now an authorized ASCM training partner, expanding our supply chain certification offerings.' },
  { title: 'Supply chain management skills that are actually in demand', cat: 'Skill Development', img: 'art-5', date: 'Jun 3, 2026', read: '5 min read', excerpt: 'A look at which SCM competencies employers are hiring for right now, based on our placement data.' },
  { title: 'How to brief a business consultant (so you get useful advice)', cat: 'Consultancy', img: 'art-6', date: 'May 27, 2026', read: '4 min read', excerpt: 'The difference between a productive consulting engagement and a wasted one often comes down to the first meeting.' },
  { title: 'Workflow automation for teams with no dev resources', cat: 'Automation', img: 'art-7', date: 'May 19, 2026', read: '6 min read', excerpt: 'No-code and low-code tools that let non-technical teams automate real processes this quarter.' },
  { title: 'Inside our new Mirpur training center', cat: 'Company News', img: 'art-8', date: 'May 12, 2026', read: '3 min read', excerpt: 'A look at the space where our in-person bootcamps and workshops now run.' },
  { title: 'Six Sigma vs. general process improvement: which do you need?', cat: 'Skill Development', img: 'art-9', date: 'May 5, 2026', read: '5 min read', excerpt: 'Not every process problem calls for a formal Six Sigma project. Here’s how to tell which one you’re facing.' },
];
