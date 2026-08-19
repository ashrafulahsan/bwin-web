// Static for now — swap this export for an API call (e.g. GET /api/v1/courses?featured=true,
// grouped by category) once the courses module has a real backend. Shape must stay
// { key, label, icon, courses: [{ title, img, students, duration, rating, reviews, price, orig, badge }] }
// for SkillDevelopmentSection to keep working unchanged.
export const skillDevelopmentTabs = [
  {
    key: 'hse',
    label: 'Health, Safety & Environment',
    icon: 'shield-check',
    courses: [
      { title: 'NEBOSH IGC', img: 'hse-1', students: 62, duration: '60hr 00min', rating: 4.8, reviews: 37, price: 49.99, orig: 179.99 },
      { title: 'IOSH (Managing Safety)', img: 'hse-2', students: 54, duration: '30hr 00min', rating: 4.7, reviews: 29, price: 34.99, orig: 129.99 },
      { title: 'OSHA 30 Hours (General Industry)', img: 'hse-3', students: 71, duration: '30hr 00min', rating: 4.6, reviews: 44, price: 29.99, orig: 99.99 },
      { title: 'OTHM Level 6', img: 'hse-5', students: 18, duration: '600hr+', rating: 4.9, reviews: 12, price: 149.99, orig: 399.99 },
      { title: 'Emergency Preparedness Training', img: 'hse-9', students: 33, duration: '10hr 00min', rating: 4.5, reviews: 9, price: 19.99, orig: 49.99 },
      { title: 'Road Safety Training & Consultancy', img: 'hse-8', students: 21, duration: '8hr 00min', rating: 4.4, reviews: 6, price: 14.99, orig: 39.99 },
    ],
  },
  {
    key: 'bpe',
    label: 'Business Process Excellence',
    icon: 'chart-bar',
    courses: [
      { title: 'Lean Six Sigma Black Belt', img: 'bpe-4', students: 45, duration: '80hr 00min', rating: 4.8, reviews: 31, price: 59.99, orig: 249.99 },
      { title: 'Certified Power BI Professional', img: 'bpe-8', students: 88, duration: '14hr 00min', rating: 4.7, reviews: 52, price: 24.99, orig: 89.99 },
      { title: 'PMP Preparation Course', img: 'bpe-12', students: 66, duration: '4 days', rating: 4.9, reviews: 40, price: 44.99, orig: 159.99 },
      { title: 'Certified Project Management Using Primavera P6', img: 'bpe-16', students: 29, duration: '25hr 00min', rating: 4.6, reviews: 15, price: 34.99, orig: 119.99 },
      { title: 'Certified Data Analyst Professional (MS Excel+Power BI)', img: 'bpe-13', students: 0, duration: '35hr 00min', rating: 0, reviews: 0, badge: 'Starts Aug 20' },
      { title: 'Executive Diploma in Project Management', img: 'bpe-14', students: 0, duration: '150hr+', rating: 0, reviews: 0, badge: 'Starts Sep 5' },
    ],
  },
  {
    key: 'tax',
    label: 'Tax, VAT & Customs',
    icon: 'banknotes',
    courses: [
      { title: 'Income Tax Training', img: 'tax-1', students: 40, duration: '15hr 00min', rating: 4.5, reviews: 14, price: 19.99, orig: 59.99 },
      { title: 'VAT & Customs Training', img: 'tax-3', students: 35, duration: '18hr 00min', rating: 4.6, reviews: 11, price: 22.99, orig: 69.99 },
      { title: 'ITP Preparation Training', img: 'tax-2', students: 22, duration: '20hr 00min', rating: 4.4, reviews: 7, price: 24.99, orig: 74.99 },
      { title: 'UD & Customs Training', img: 'tax-4', students: 0, duration: '12hr 00min', rating: 0, reviews: 0, badge: 'Free' },
    ],
  },
  {
    key: 'academic',
    label: 'Academic & Admission Prep',
    icon: 'academic-cap',
    courses: [
      { title: "Mathematics (O' & A' Level)", img: 'acad-1', students: 51, duration: '20hr 00min', rating: 4.7, reviews: 24, price: 17.99, orig: 44.99 },
      { title: "Physics (O' & A' Level)", img: 'acad-2', students: 0, duration: '18hr 00min', rating: 0, reviews: 0, badge: 'Starts Aug 10' },
      { title: 'BUET Admission MOC Test', img: 'acad-5', students: 0, duration: '15hr 00min', rating: 0, reviews: 0, badge: 'Free' },
      { title: 'Dhaka University Admission MOC Test', img: 'acad-7', students: 0, duration: '15hr 00min', rating: 0, reviews: 0, badge: 'Free' },
    ],
  },
];
