// Static for now — swap these exports for API calls (e.g. GET /api/v1/pages/about-us) once this content is
// managed in the backend (pages module). Shapes must stay { value, label } for milestones and
// { name, role, img } for team, for AboutUsPageContent to keep working unchanged.
export const aboutUsMilestones = [
  { value: '2016', label: 'Founded' },
  { value: '8,500+', label: 'Learners trained' },
  { value: '150+', label: 'Clients advised' },
  { value: '5', label: 'Countries served' },
];

export const aboutUsTeam = [
  { name: 'Farhana Rahman', role: 'Founder & CEO', img: 'team-1' },
  { name: 'Kamrul Islam', role: 'Head of Consultancy', img: 'team-2' },
  { name: 'Sadia Chowdhury', role: 'Head of Skill Development', img: 'team-3' },
  { name: 'Tanvir Ahmed', role: 'Head of Automation', img: 'team-4' },
];
