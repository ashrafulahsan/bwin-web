// Static for now — swap this export for an API call (e.g. GET /api/v1/testimonials) once reviews are
// collected in the backend. Shape must stay
// { key, label, accent, reviews: [{ name, role, img, rating, text }] } for TestimonialsSection to keep
// working unchanged.
export const testimonialCategories = [
  {
    key: 'skill',
    label: 'Skill development',
    accent: 'navy',
    reviews: [
      { name: 'Farhan Ahmed', role: 'Data Analyst, Grameenphone', img: 'rv-skill-1', rating: 5, text: 'The data analytics course was structured better than any bootcamp I’ve paid triple for. Mentors actually reviewed my project work.' },
      { name: 'Nusrat Jahan', role: 'Ops Executive, Robi', img: 'rv-skill-2', rating: 5, text: 'I finished the Lean Six Sigma certification in six weeks and used it to redesign our intake process the same month.' },
      { name: 'Tanvir Hasan', role: 'Supply Chain Lead, Square Group', img: 'rv-skill-3', rating: 4, text: 'Practical, no-fluff sessions. The supply chain bootcamp gave me frameworks I still reference weekly.' },
    ],
  },
  {
    key: 'consultancy',
    label: 'Consultancy',
    accent: 'orange',
    reviews: [
      { name: 'Rashida Karim', role: 'Founder, Karim Textiles', img: 'rv-consult-1', rating: 5, text: 'BWIN rebuilt our financial reporting from scratch. For the first time, our board meetings run on numbers we trust.' },
      { name: 'Imran Chowdhury', role: 'MD, Chowdhury Exports', img: 'rv-consult-2', rating: 5, text: 'Their compliance team caught two contract risks our own lawyer missed. Worth every taka of the retainer.' },
      { name: 'Sadia Islam', role: 'HR Director, Bengal Retail', img: 'rv-consult-3', rating: 4, text: 'The HR consultancy engagement cut our time-to-hire nearly in half within one quarter.' },
    ],
  },
  {
    key: 'automation',
    label: 'Business Automation',
    accent: 'tan',
    reviews: [
      { name: 'Kamal Uddin', role: 'Operations Manager, Delta Pharma', img: 'rv-auto-1', rating: 5, text: 'The workflow automation they built removed three days of manual reconciliation from our monthly close.' },
      { name: 'Mahmuda Akter', role: 'Finance Lead, Anwar Group', img: 'rv-auto-2', rating: 5, text: 'Dashboards update themselves now. I haven’t built a manual report since we onboarded with BWIN.' },
      { name: 'Rafiq Islam', role: 'CTO, NextPay', img: 'rv-auto-3', rating: 4, text: 'Their AI tooling for document extraction paid for itself in the first month of use.' },
    ],
  },
];
