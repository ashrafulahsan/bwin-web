// Static for now — swap this export for an API call (e.g. GET /api/v1/pages/:slug/seo) once page SEO
// metadata is managed in the backend (pages module). Shape must stay { title?, description, image? } —
// omit `title` only for the home page so it inherits the root layout's default title verbatim; every
// other page should set a short title (the " | BWIN Consultants" suffix is applied automatically by the
// root layout's title template). Add one entry per page as it's built — see any app/(website)/*/page.jsx
// for how an entry is consumed via buildMetadata().
export const pageMetadata = {
  home: {
    description: 'BWIN Consultants helps individuals build in-demand skills and helps businesses run better — through hands-on training, practical consultancy, and automation that removes the busywork from daily operations.',
  },
  consultancy: {
    title: 'Free Consultation',
    description: "Tell us what you're working on and one of our consultants will map out next steps — no cost, no obligation.",
  },
  freeConsultation: {
    title: 'Free Consultation',
    description: "Tell us what you're working on and one of our consultants will map out next steps — no cost, no obligation.",
  },
  loginSignup: {
    title: 'Login / Signup',
    description: 'Log in to your BWIN Consultants account or create a new one to start learning, book a consultation, or manage your automation projects.',
  },
  aboutUs: {
    title: 'About Us',
    description: 'BWIN Consultants was built on a simple idea — that training, advisory, and automation work best when they come from one team that understands the whole business. Meet the team and see our track record.',
  },
  contactUs: {
    title: 'Contact Us',
    description: "Whether it's a course, a consultation, or an automation project — reach out and we'll get back within one business day. Office address, phone, email, and office hours.",
  },
  teams: {
    title: 'Teams',
    description: 'Leadership, consultants, and trainers who bring decades of combined experience to every course, engagement, and build. Meet the people behind every result.',
  },
  faq: {
    title: 'FAQ',
    description: 'Everything you need to know about our courses, consultancy, and automation services — organized by topic.',
  },
  articles: {
    title: 'Articles & Insights',
    description: "Notes from our consultants, trainers, and automation team on what's actually working — skill development, consultancy, automation, and company news.",
  },
};
