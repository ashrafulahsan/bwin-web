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
};
