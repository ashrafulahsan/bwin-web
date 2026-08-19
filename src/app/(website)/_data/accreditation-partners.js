// Static for now — swap this export for an API call (e.g. GET /api/v1/settings/partners) once accreditation
// partners are managed in the backend. Shape must stay { name, src } for every consumer (Hero, AboutUsPage)
// to keep working unchanged. `src` paths are relative to /public.
export const accreditationPartners = [
  { name: 'OTHM Qualifications — United Kingdom', src: '/assets/partners/othm.png' },
  { name: 'ASCM — Authorized APICS Training Partner, USA', src: '/assets/partners/ascm.png' },
  { name: 'PMI Authorized Training Partner — USA', src: '/assets/partners/pmi.png' },
  { name: 'AOSH — United Kingdom', src: '/assets/partners/aosh.png' },
  { name: 'Cisco — USA', src: '/assets/partners/cisco.png' },
];
