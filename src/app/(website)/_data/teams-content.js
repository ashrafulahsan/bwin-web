// Static for now — swap these exports for an API call (e.g. GET /api/v1/team) once team members are managed
// in the backend. Shapes must stay { value, label } for stats, { name, role, img, bio } for leadership, and
// { name, role, cat, img, tags } for people, for TeamsPageContent to keep working unchanged.
export const teamStats = [
  { value: '40+', label: 'Expert trainers' },
  { value: '35+', label: 'Consultants' },
  { value: '12+', label: 'Yrs avg. experience' },
  { value: '92%', label: 'Client satisfaction' },
];

export const teamLeadership = [
  {
    name: 'Farhana Rahman',
    role: 'Founder & CEO',
    img: 'team-lead-1',
    bio: 'Started BWIN in 2016 running weekend workshops out of a rented desk in Dhaka. Now sets direction across all three divisions, still teaches one cohort a year.',
  },
  {
    name: 'Kamrul Islam',
    role: 'Head of Consultancy',
    img: 'team-lead-2',
    bio: '15+ years in finance and HR advisory before joining BWIN. Built the consultancy practice from a single retainer client to 150+ organizations served.',
  },
  {
    name: 'Tanvir Ahmed',
    role: 'Head of Automation',
    img: 'team-lead-3',
    bio: 'Former operations engineer who automated his own team out of manual reporting — then did the same for BWIN clients. Leads every automation build personally.',
  },
];

export const teamPeople = [
  { name: 'Nadia Ferdous', role: 'Financial Consultant', cat: 'consultants', img: 'team-c-1', tags: ['Financial reporting', 'Tax advisory'] },
  { name: 'Imtiaz Kabir', role: 'HR Consultant', cat: 'consultants', img: 'team-c-2', tags: ['Talent strategy', 'Policy design'] },
  { name: 'Shirin Akhtar', role: 'Compliance Consultant', cat: 'consultants', img: 'team-c-3', tags: ['Contracts', 'Risk & compliance'] },
  { name: 'Rafiul Haque', role: 'Strategy Consultant', cat: 'consultants', img: 'team-c-4', tags: ['Strategic planning', 'OKRs'] },
  { name: 'Ariful Islam', role: 'Data Analytics Trainer', cat: 'trainers', img: 'team-t-1', tags: ['Excel', 'Power BI', 'SQL'] },
  { name: 'Mahin Sarker', role: 'Project Management Trainer', cat: 'trainers', img: 'team-t-2', tags: ['PMP', 'Agile'] },
  { name: 'Farzana Yasmin', role: 'Workplace Safety Trainer', cat: 'trainers', img: 'team-t-3', tags: ['OSHA', 'AOSH'] },
  { name: 'Zahid Hasan', role: 'Supply Chain Trainer', cat: 'trainers', img: 'team-t-4', tags: ['APICS', 'ASCM'] },
  { name: 'Nusrat Jabin', role: 'Automation Trainer', cat: 'trainers', img: 'team-t-5', tags: ['RPA', 'Low-code'] },
  { name: 'Kazi Omar', role: 'Digital Marketing Trainer', cat: 'trainers', img: 'team-t-6', tags: ['SEO', 'Paid media'] },
];

export const teamFilters = [
  { key: 'all', label: 'All' },
  { key: 'consultants', label: 'Consultants' },
  { key: 'trainers', label: 'Trainers' },
];
