// Static for now — swap this export for an API call (e.g. GET /api/v1/business-automation/services) once
// the automation module has a real backend. Shape must stay { title, desc, progress, items: [string] } for
// BusinessAutomationSection to keep working unchanged.
export const businessAutomationCards = [
  {
    title: 'Workflow Automation',
    desc: 'Repetitive tasks handled automatically, freeing your team for higher-value work.',
    progress: 30,
    items: ['Process mapping & redesign', 'RPA implementation', 'Approval workflow automation', 'System integration'],
  },
  {
    title: 'Reporting & Dashboards',
    desc: 'Live dashboards that turn scattered data into decisions your team can act on.',
    progress: 55,
    items: ['Automated data pipelines', 'Custom KPI dashboards', 'Scheduled report delivery', 'Cross-platform integration'],
  },
  {
    title: 'AI & Smart Tools',
    desc: 'Practical AI built into your daily operations, not bolted on as a gimmick.',
    progress: 80,
    items: ['Document & data extraction', 'Predictive forecasting', 'Chat & support automation', 'Anomaly detection'],
  },
];
