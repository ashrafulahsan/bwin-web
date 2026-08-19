// Static for now — swap these exports for API calls (e.g. GET /api/v1/pages/privacy-policy) once legal
// content is managed in the backend (pages module). Shape must stay { updated, sections: [{ heading,
// paragraphs: [string] }] } for LegalLayout to keep working unchanged. Paragraphs are plain text — any
// mention of the site email is auto-linked to mailto: by LegalLayout, no markup needed in the text.
export const privacyPolicyContent = {
  updated: 'July 2026',
  sections: [
    {
      heading: 'Information we collect',
      paragraphs: [
        'We collect the information you give us directly — name, email, phone number, company details — when you book a consultation, enroll in a course, or contact us. We also collect basic usage data (pages visited, course progress) to improve our services.',
      ],
    },
    {
      heading: 'How we use your information',
      paragraphs: [
        "Your information is used to deliver the service you signed up for — course access, consultancy scheduling, automation project updates — and to send you relevant updates if you've opted into our newsletter. We do not sell your data to third parties.",
      ],
    },
    {
      heading: 'Payment information',
      paragraphs: ['Payments are processed securely by SSLCommerz. We do not store your full card or mobile banking credentials on our servers.'],
    },
    {
      heading: 'Data sharing',
      paragraphs: [
        'We share information only with the trainers, consultants, or automation engineers directly assigned to your engagement, and with service providers (like payment processors) required to deliver our services.',
      ],
    },
    {
      heading: 'Your rights',
      paragraphs: [
        'You can request a copy of your data, ask us to correct it, or request deletion at any time by emailing info@bwinconsultants.com. You can unsubscribe from marketing emails using the link in any newsletter.',
      ],
    },
    {
      heading: 'Cookies',
      paragraphs: ['We use essential cookies to keep you logged in and remember your preferences. We do not use third-party advertising trackers.'],
    },
  ],
};

export const refundPolicyContent = {
  updated: 'July 2026',
  sections: [
    {
      heading: 'Skill development courses',
      paragraphs: [
        'Self-paced courses are eligible for a full refund within 7 days of purchase, provided less than 20% of the course content has been completed. After 7 days, or once completion passes 20%, purchases are final.',
        'Live bootcamps and cohort-based courses can be refunded in full up to 48 hours before the cohort start date. Once a cohort begins, refunds are not available, but you may transfer your seat to the next available cohort at no extra cost.',
      ],
    },
    {
      heading: 'Consultancy services',
      paragraphs: [
        "Single consultancy sessions are refundable in full if cancelled at least 24 hours before the scheduled session. Advisory retainers can be cancelled at any time; you'll be billed only for the days used in the current billing cycle.",
      ],
    },
    {
      heading: 'Business automation',
      paragraphs: [
        'Automation builds follow milestone-based billing. Refunds apply only to milestones not yet started. Work already delivered and approved is non-refundable, since it reflects hours already invested by our team.',
      ],
    },
    {
      heading: 'Bundle & team plans',
      paragraphs: [
        "Bundles follow the refund terms of their most restrictive included service. If you're unsure whether your plan qualifies, contact us before requesting a refund and we'll walk you through it.",
      ],
    },
    {
      heading: 'How to request a refund',
      paragraphs: [
        'Email info@bwinconsultants.com with your order details, or reach us via our contact page. Approved refunds are processed within 7–10 business days to your original payment method.',
      ],
    },
  ],
};

export const termsConditionsContent = {
  updated: 'July 2026',
  sections: [
    {
      heading: 'Using our services',
      paragraphs: [
        'By enrolling in a course, booking a consultancy session, or commissioning automation work, you agree to these terms. Services are provided to individuals and businesses for their own internal use unless otherwise agreed in writing.',
      ],
    },
    {
      heading: 'Course access & conduct',
      paragraphs: ['Course accounts are for individual use and may not be shared or resold. Certificates are issued only once all required coursework and assessments are completed.'],
    },
    {
      heading: 'Consultancy engagements',
      paragraphs: ['Consultancy recommendations are based on the information you provide. Final business decisions, and their outcomes, remain your responsibility — our role is advisory.'],
    },
    {
      heading: 'Automation deliverables',
      paragraphs: ['Automation builds are delivered per the agreed project scope. Change requests outside that scope may be billed separately and will always be confirmed with you before work begins.'],
    },
    {
      heading: 'Payments',
      paragraphs: ['Prices are listed in USD unless stated otherwise. Subscriptions renew automatically until cancelled; one-time purchases and project milestones are billed as agreed at checkout or in your project proposal.'],
    },
    {
      heading: 'Limitation of liability',
      paragraphs: ['BWIN Consultants is not liable for indirect or consequential losses arising from the use of our courses, consultancy advice, or automation tools, to the extent permitted by law.'],
    },
    {
      heading: 'Changes to these terms',
      paragraphs: ['We may update these terms occasionally; material changes will be communicated by email or a notice on this page.'],
    },
  ],
};
