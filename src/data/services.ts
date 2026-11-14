export type Service = {
  id: string
  num: string
  title: string
  subtitle: string
  summary: string
  focus: string[]
  outcome: string
}

/** Exact service pillars — each rendered as its own full chapter. */
export const services: Service[] = [
  {
    id: 'product-design',
    num: '01',
    title: 'Product Design',
    subtitle: 'Experience systems that feel inevitable',
    summary:
      'We shape product strategy, UX flows, and interface systems so every screen earns trust and every journey converts intent into action.',
    focus: ['Discovery & research', 'UX architecture', 'UI systems & prototypes', 'Usability validation'],
    outcome: 'A clear product narrative and design system your team can ship against.',
  },
  {
    id: 'product-development',
    num: '02',
    title: 'Product Development',
    subtitle: 'Engineering from MVP to durable platforms',
    summary:
      'Full-cycle product engineering — web, mobile, and backend — built for speed without painting you into a corner as you scale.',
    focus: ['Web & mobile apps', 'APIs & platforms', 'MVP launches', 'Performance & reliability'],
    outcome: 'Working product in market, with architecture ready for the next stage.',
  },
  {
    id: 'marketing-solution',
    num: '03',
    title: 'Marketing Solution — SEO / SMO / LeadGen',
    subtitle: 'Visibility that compounds into pipeline',
    summary:
      'Search, social, and lead generation working as one system — so your brand is found, remembered, and chosen.',
    focus: ['SEO & content engines', 'SMO & brand presence', 'Lead generation funnels', 'Campaign analytics'],
    outcome: 'Qualified demand you can measure, not vanity metrics.',
  },
  {
    id: 'startup-consultancy',
    num: '04',
    title: 'Startup Consultancy',
    subtitle: 'Operator clarity for founding teams',
    summary:
      'Hands-on counsel for positioning, GTM, pricing, and operating rhythm — the decisions that decide whether a startup survives growth.',
    focus: ['Positioning & GTM', 'Product-market fit loops', 'Operating models', 'Founder decision support'],
    outcome: 'A sharper plan and a calmer execution cadence.',
  },
  {
    id: 'funding-support',
    num: '05',
    title: 'Funding Support for Startups',
    subtitle: 'Raise with a story investors can underwrite',
    summary:
      'Pitch craft, financial narrative, and readiness coaching so you walk into investor rooms with precision — not hope.',
    focus: ['Pitch decks & narrative', 'Metrics & financial story', 'Investor readiness', 'Round preparation'],
    outcome: 'Materials and confidence that match the round you want.',
  },
  {
    id: 'ai-operations',
    num: '06',
    title: 'Operations Automation through Artificial Intelligence',
    subtitle: 'AI that removes friction from the business',
    summary:
      'We design and deploy AI workflows, agents, and ops automations so repetitive work disappears and judgment stays with your people.',
    focus: ['Process mapping', 'AI agents & copilots', 'Workflow automation', 'Ops dashboards'],
    outcome: 'Hours returned to the team every week — with controls you can trust.',
  },
  {
    id: 'hr-hiring',
    num: '07',
    title: 'HR Hiring Support — OnRole / Off Role',
    subtitle: 'Talent matched to how you actually build',
    summary:
      'On-role permanent hires and off-role flexible talent — sourced, screened, and aligned to your culture and velocity.',
    focus: ['On-role hiring', 'Off-role / contract talent', 'Role design & screening', 'Team scaling plans'],
    outcome: 'The right people in the right seats — without the hiring drag.',
  },
]
