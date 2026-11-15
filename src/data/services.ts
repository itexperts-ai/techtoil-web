export type Service = {
  id: string
  num: string
  title: string
  tagline: string
  summary: string
  details: string[]
  image: string
  accent: string
}

export const services: Service[] = [
  {
    id: 'product-design',
    num: '01',
    title: 'Product Design',
    tagline: 'Turn ideas into experiences people trust.',
    summary:
      'Discovery, UX flows, UI systems, and prototypes — so your product feels clear before a single line of production code ships.',
    details: [
      'Product discovery & research',
      'User journeys & wireframes',
      'UI/UX for web & mobile',
      'Design systems & prototypes',
      'Usability validation',
    ],
    image: '/media/svc-design.jpg',
    accent: '#2F6BFF',
  },
  {
    id: 'product-development',
    num: '02',
    title: 'Product Development',
    tagline: 'Build scalable products that actually ship.',
    summary:
      'Web, mobile, and platform engineering from MVP to production — architecture that survives growth.',
    details: [
      'Web & mobile applications',
      'SaaS & custom software',
      'APIs & cloud infrastructure',
      'QA, security & performance',
      'Ongoing product maintenance',
    ],
    image: '/media/svc-dev.jpg',
    accent: '#2EE6D6',
  },
  {
    id: 'marketing',
    num: '03',
    title: 'Marketing Solutions',
    tagline: 'SEO · SMO · LeadGen — growth that compounds.',
    summary:
      'Search, social, and lead systems that turn presence into pipeline — measurable demand, not vanity metrics.',
    details: [
      'Technical & on-page SEO',
      'Social media & brand campaigns',
      'Lead generation funnels',
      'Landing page optimization',
      'Analytics & nurture flows',
    ],
    image: '/media/svc-marketing.jpg',
    accent: '#2F6BFF',
  },
  {
    id: 'consultancy',
    num: '04',
    title: 'Startup Consultancy',
    tagline: 'Structure the business behind the idea.',
    summary:
      'Feasibility, business model, GTM, and founder decision support — so early teams move with clarity.',
    details: [
      'Idea evaluation & feasibility',
      'Market & competitor research',
      'Business model & pricing',
      'Go-to-market strategy',
      'MVP & roadmap planning',
    ],
    image: '/media/svc-consult.jpg',
    accent: '#2EE6D6',
  },
  {
    id: 'funding',
    num: '05',
    title: 'Funding Support for Startups',
    tagline: 'Raise with readiness — never false guarantees.',
    summary:
      'Pitch narrative, financial story, and investor preparation. Funding depends on viability and investor decisions; we strengthen your readiness.',
    details: [
      'Funding readiness assessment',
      'Pitch deck & narrative',
      'Financial model support',
      'Investor targeting approach',
      'Due diligence preparation',
    ],
    image: '/media/svc-funding.jpg',
    accent: '#2F6BFF',
  },
  {
    id: 'ai-automation',
    num: '06',
    title: 'AI Operations Automation',
    tagline: 'Make the business smarter, faster, less manual.',
    summary:
      'AI agents, workflows, and automations for support, sales, reporting, and internal ops — judgment stays with your people.',
    details: [
      'Process mapping & workflow design',
      'AI chatbots & support agents',
      'CRM & sales automation',
      'Document & reporting automation',
      'Custom AI integrations',
    ],
    image: '/media/svc-aiops.jpg',
    accent: '#2EE6D6',
  },
  {
    id: 'hr-hiring',
    num: '07',
    title: 'HR Hiring Support',
    tagline: 'OnRole & Off Role talent that fits your pace.',
    summary:
      'Permanent hiring and flexible contract talent — sourced, screened, and aligned to culture and velocity.',
    details: [
      'On-role permanent recruitment',
      'Off-role / contract staffing',
      'Technical & leadership hiring',
      'Screening & interview coordination',
      'Dedicated team augmentation',
    ],
    image: '/media/svc-hr.jpg',
    accent: '#2F6BFF',
  },
]

export const aiHighlights = [
  {
    title: 'Intelligent workflows',
    body: 'Map repetitive processes and replace them with governed AI workflows.',
  },
  {
    title: 'Agents that act',
    body: 'Support, lead qualification, and ops agents that update your systems — not just chat.',
  },
  {
    title: 'Human + AI control',
    body: 'Automation with clear handoffs, so teams keep judgment where it matters.',
  },
]
