// Static for now — swap this export for an API call (e.g. GET /api/v1/site/stats) once these numbers are
// tracked in the backend instead of hand-maintained. Shape must stay
// { icon, value, suffix, label } for WhyChooseUsSection to keep working unchanged.
export const whyChooseUsStats = [
  { icon: 'academic-cap', value: 40, suffix: '+', label: 'Expert trainers' },
  { icon: 'book-open', value: 120, suffix: '+', label: 'Courses offered' },
  { icon: 'check-badge', value: 92, suffix: '%', label: 'Course completion rate' },
  { icon: 'face-smile', value: 8500, suffix: '+', label: 'Happy students' },
  { icon: 'gift', value: 25, suffix: '+', label: 'Cost-free courses' },
  { icon: 'chat-bubble-left-right', value: 24, suffix: '/7', label: 'Learner support' },
];
