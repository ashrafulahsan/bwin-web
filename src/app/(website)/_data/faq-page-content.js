// Static for now — swap these exports for an API call (e.g. GET /api/v1/faqs?grouped=true) once FAQs are
// managed in the backend (pages module). Shapes must stay { key, label, icon } for categories and a
// { [categoryKey]: [{ q, a }] } map for FAQ_DATA, for FaqPageContent to keep working unchanged.
export const faqCategories = [
  { key: 'general', label: 'General', icon: 'sparkles' },
  { key: 'skill', label: 'Skill development', icon: 'academic-cap' },
  { key: 'consultancy', label: 'Consultancy', icon: 'briefcase' },
  { key: 'automation', label: 'Business automation', icon: 'cpu-chip' },
  { key: 'billing', label: 'Pricing & billing', icon: 'credit-card' },
];

export const faqPageData = {
  general: [
    { q: 'What does BWIN Consultants do?', a: 'We help people and businesses grow in three ways: skill development courses and bootcamps, business consultancy (finance, HR, compliance, strategy), and business automation (workflows, reporting, AI tooling).' },
    { q: 'How do I know which service is right for me?', a: 'Book a free consultation. A consultant reviews your goals in a short call and points you to the right course, service, or automation fit — no cost, no obligation.' },
    { q: 'Do you work with individuals or only businesses?', a: 'Both. Skill development courses are built for individuals and teams; consultancy and automation are typically business engagements, though solo founders are welcome too.' },
    { q: 'Where are you based, and do you work remotely?', a: 'Our office is listed on the Contact page. Consultancy and automation work is delivered remotely for clients anywhere; courses are fully online.' },
  ],
  skill: [
    { q: 'Do I need prior experience to enroll in a course?', a: 'No. Courses are tiered beginner through advanced, and the course catalog lets you filter by level so you start at the right point.' },
    { q: 'Are courses self-paced or scheduled?', a: 'Both formats exist depending on the course — self-paced tracks and live cohort-based bootcamps with fixed schedules. Each course page states which.' },
    { q: 'Do I get a certificate after completing a course?', a: 'Yes, every completed course or bootcamp includes a certificate, and mentors review your project work along the way.' },
    { q: 'Can my whole team enroll together?', a: 'Yes — check the Bundle Offer page for team pricing, or contact us for a custom quote on larger cohorts.' },
  ],
  consultancy: [
    { q: 'What areas does your consultancy cover?', a: 'Finance and reporting, HR and hiring, compliance and contracts, and general business strategy — see the Consultancy Service page for the full breakdown.' },
    { q: 'How long does a typical consultancy engagement take?', a: 'It depends on scope — some engagements resolve in a few weeks, others run for months. Your quote will include an estimated timeline.' },
    { q: 'Will I work with the same consultant throughout?', a: 'Yes, you’re assigned a lead consultant for continuity, with specialists brought in as needed for specific areas.' },
    { q: 'Can consultancy work start before I sign a long-term contract?', a: 'Most engagements start with a smaller diagnostic phase so both sides can confirm fit before committing to a longer scope.' },
  ],
  automation: [
    { q: 'What kind of processes can you automate?', a: 'Common examples: financial reconciliation, reporting dashboards, document extraction with AI tooling, and repetitive operational workflows.' },
    { q: 'Do I need technical staff to maintain the automation?', a: 'No — we build with your team’s technical comfort in mind and provide handover documentation and training as part of every project.' },
    { q: 'How is automation progress tracked?', a: 'Projects are broken into milestones with visible progress tracking, so you always know what’s shipped and what’s next.' },
    { q: 'Does automation work integrate with our existing tools?', a: 'Yes, in most cases — we assess your current stack during the free consultation and design around it rather than replacing it wholesale.' },
  ],
  billing: [
    { q: 'How is pricing structured?', a: 'Skill development courses are priced per course or bundle; consultancy and automation are quoted per project scope. Request a free quote for exact numbers.' },
    { q: 'Do you offer payment plans?', a: 'Yes, for larger courses and consultancy engagements — ask your consultant during the free consultation or quote request.' },
    { q: 'What’s your refund policy?', a: 'See our Refund Policy page for full terms; in short, course refunds follow a clear cutoff window and consultancy refunds are scoped per contract.' },
    { q: 'Are there any hidden fees?', a: 'No — quotes are itemized up front, and any change in scope is confirmed with you before it affects the price.' },
  ],
};
