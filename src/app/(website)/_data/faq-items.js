// Static for now — swap this export for an API call (e.g. GET /api/v1/faqs?scope=home) once FAQs are
// managed in the backend (pages module). Shape must stay { q, a } for FaqSection to keep working unchanged.
export const homeFaqItems = [
  { q: 'What services does BWIN Consultants actually offer?', a: 'Three things: skill development courses and bootcamps, business consultancy (finance, HR, compliance, strategy), and business automation (workflow, reporting, AI tooling). Most clients start with one and expand once they see results.' },
  { q: 'Do I need experience to join a skill development course?', a: 'No — our courses are tiered from beginner to advanced, and tabs on the course catalog let you filter by level. Mentors also review your project work regardless of where you start.' },
  { q: 'How fast can consultancy or automation work begin?', a: 'A free consultation call usually happens within one business day. Most engagements kick off within a week of that call, once scope and goals are agreed.' },
  { q: 'Is the free consultation really free?', a: 'Yes, no cost and no obligation. It exists to match you with the right course, service, or automation fit before you commit to anything.' },
  { q: 'Can businesses bundle multiple services together?', a: 'Yes — check our Bundle Offer page for packaged pricing across skill development, consultancy, and automation, usually at a lower combined rate than booking separately.' },
  { q: 'What if I’m not happy with the outcome?', a: 'We check in at every milestone so issues surface early, not at the end. If something isn’t working, tell your consultant or trainer directly — adjustments are part of the engagement, not an extra ask.' },
];
