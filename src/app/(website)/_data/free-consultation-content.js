// Static for now — swap these exports for API calls (e.g. GET /api/v1/consultancy/interests,
// GET /api/v1/faqs?scope=free-consultation) once this content is managed in the backend.
export const consultationInterests = ['Skill development', 'Consultancy service', 'Business automation', 'Not sure yet'];

// Shape must stay { q, a } for FaqSection to keep working unchanged.
export const freeConsultationFaq = [
  { q: 'Is the consultation call really free?', a: 'Yes — no cost, no obligation. It exists purely to match you with the right course, service, or automation fit before you spend anything.' },
  { q: 'How long does the call take?', a: 'Usually 15–20 minutes. We ask about your goals and current setup, then recommend next steps — no sales script.' },
  { q: 'What should I prepare before the call?', a: 'Nothing formal. A rough idea of your goals, team size, or current challenges helps us give sharper recommendations, but it’s not required.' },
  { q: 'Will I be pressured to buy something?', a: 'No. The consultation is diagnostic — we tell you what we’d recommend and why. You decide what happens next, on your own timeline.' },
];
