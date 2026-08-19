// Static for now — swap these exports for API calls (e.g. GET /api/v1/settings/office-hours,
// GET /api/v1/faqs?scope=contact-us) once this content is managed in the backend. Shapes must stay
// { day, time } for office hours and { q, a } for FAQ, for ContactUsPageContent to keep working unchanged.
export const officeHours = [
  { day: 'Sunday – Thursday', time: '9:00 AM – 6:00 PM' },
  { day: 'Friday', time: 'Closed' },
  { day: 'Saturday', time: '10:00 AM – 2:00 PM' },
];

export const contactUsFaq = [
  { q: 'What’s the fastest way to reach a real person?', a: 'Call or WhatsApp the number above during office hours (Sun–Thu, 9AM–6PM) for the quickest response. Email works too, but expect a reply within one business day.' },
  { q: 'Do you have an office I can visit?', a: 'Yes — our address and a map are listed above. Drop by during office hours, or book a call first so the right consultant is available when you arrive.' },
  { q: 'I’m not sure which service I need — who do I contact?', a: 'Use the general contact form above with a short description of your goals. We’ll route you to the right consultant or trainer, no need to pick a department yourself.' },
  { q: 'Do you work with clients outside Bangladesh?', a: 'Yes, consultancy and automation engagements are delivered remotely for international clients; skill development courses are available online everywhere.' },
];
