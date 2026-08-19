// Static for now — swap this export for an API call (e.g. GET /api/v1/consultancy/services) once the
// consultancy module has a real backend. Shape must stay
// { key, label, img, imgSrc, title, desc, features: [{ icon, title, desc }] } for
// ConsultancyServiceSection to keep working unchanged.
export const consultancyServices = [
  {
    key: 'financial',
    label: 'Financial Consultancy',
    img: 'cs-financial',
    imgSrc: '/assets/consult/financial.png',
    title: 'Financial clarity, built to last',
    desc: 'We help you read your numbers with confidence — cash flow, forecasting, and reporting systems that hold up under scrutiny and support every decision you make.',
    features: [
      { icon: 'chart-bar', title: 'Forecasting & planning', desc: 'Rolling forecasts and budget models built around how your business actually runs.' },
      { icon: 'banknotes', title: 'Cash flow control', desc: 'Clear visibility into what’s coming in and going out, months ahead.' },
    ],
  },
  {
    key: 'business',
    label: 'Business Consultancy',
    img: 'cs-business',
    imgSrc: '/assets/consult/business.png',
    title: 'Operations that scale with you',
    desc: 'From process mapping to workflow automation, we find where time and margin are leaking and fix it — without adding headcount.',
    features: [
      { icon: 'cog-6-tooth', title: 'Process optimization', desc: 'We map, measure, and streamline the workflows costing you the most.' },
      { icon: 'chart-bar', title: 'Performance tracking', desc: 'Dashboards that show what’s working, in real numbers.' },
    ],
  },
  {
    key: 'solicitory',
    label: 'Solicitory Consultancy',
    img: 'cs-solicitory',
    imgSrc: '/assets/consult/solicitory.png',
    title: 'Compliance without the guesswork',
    desc: 'Regulatory filings, contracts, and governance handled by people who track every rule change so you don’t have to.',
    features: [
      { icon: 'shield-check', title: 'Regulatory compliance', desc: 'Stay ahead of filings and standards across every jurisdiction you operate in.' },
      { icon: 'document-text', title: 'Contract review', desc: 'Every agreement checked for risk before you sign.' },
    ],
  },
  {
    key: 'hr',
    label: 'HR Consultancy',
    img: 'cs-hr',
    imgSrc: '/assets/consult/hr.png',
    title: 'Teams that are built to perform',
    desc: 'Hiring, policy, and culture work designed around retention — so the people you invest in stay and grow with you.',
    features: [
      { icon: 'users', title: 'Talent strategy', desc: 'Hiring plans and role design matched to where your team is headed.' },
      { icon: 'academic-cap', title: 'Training programs', desc: 'Structured upskilling paths tied to real performance goals.' },
    ],
  },
  {
    key: 'strategy',
    label: 'Strategy Consultancy',
    img: 'cs-strategy',
    imgSrc: '/assets/consult/strategy.png',
    title: 'Direction backed by data',
    desc: 'We turn market research and internal data into a strategy roadmap your leadership team can actually execute against.',
    features: [
      { icon: 'light-bulb', title: 'Market positioning', desc: 'Sharpen where you compete and why customers choose you.' },
      { icon: 'globe-alt', title: 'Growth roadmap', desc: 'A phased plan for expansion, prioritized by impact.' },
    ],
  },
  {
    key: 'startups',
    label: 'Start Ups',
    img: 'cs-startups',
    imgSrc: '/assets/consult/startups.png',
    title: 'From idea to first hire',
    desc: 'Incorporation, funding readiness, and go-to-market support for founders who need a partner that’s done this before.',
    features: [
      { icon: 'rocket-launch', title: 'Launch readiness', desc: 'Legal, financial, and operational foundations set up correctly from day one.' },
      { icon: 'currency-dollar', title: 'Funding support', desc: 'Pitch materials and financial models investors expect to see.' },
    ],
  },
];
