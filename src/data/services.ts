export type Service = {
  id: string
  num: string
  short: string
  title: string
  category: string
  path: string
  tagline: string
  summary: string
  capabilities: string[]
  process: string[]
  deliverables: string[]
  problems: string[]
  accent: string
}

export const services: Service[] = [
  {
    id: 'product-design',
    num: '01',
    short: 'Product Design',
    title: 'Product Design',
    category: 'Product Strategy, UI/UX & Digital Experience',
    path: '/solutions/product-design',
    tagline: 'Transform ideas into intuitive, scalable digital products.',
    summary:
      'Discovery, strategy, and design systems that turn business intent into experiences people trust — ready for engineering.',
    capabilities: [
      'Product Discovery & Strategy',
      'User Research & Personas',
      'Journey Mapping & IA',
      'Wireframes & UI/UX',
      'Design Systems',
      'Prototyping & Usability Testing',
    ],
    process: ['Discovery', 'Research', 'Strategy', 'Wireframes', 'UI Design', 'Prototype', 'Validation', 'Handover'],
    deliverables: [
      'Product requirement docs',
      'User journey maps',
      'Wireframes',
      'High-fidelity UI',
      'Interactive prototypes',
      'Design systems & specs',
    ],
    problems: [
      'Idea exists but product direction is unclear',
      'UI feels dated or inconsistent',
      'Users drop off mid-journey',
      'Engineering lacks design specs',
    ],
    accent: '#356DFF',
  },
  {
    id: 'product-development',
    num: '02',
    short: 'Development',
    title: 'Product Development',
    category: 'Digital Product Engineering',
    path: '/solutions/product-development',
    tagline: 'Build scalable products with modern, intelligent engineering.',
    summary:
      'Web, mobile, and SaaS platforms engineered for speed today and durability tomorrow — architecture that survives growth.',
    capabilities: [
      'Web & Mobile Apps',
      'SaaS & Custom Software',
      'MVP Development',
      'APIs & Microservices',
      'Cloud & CI/CD',
      'QA, Security & Maintenance',
    ],
    process: ['Requirements', 'Architecture', 'UI/UX Align', 'Development', 'Testing', 'Deployment', 'Maintenance'],
    deliverables: [
      'Production-ready applications',
      'API documentation',
      'Cloud deployment',
      'QA reports',
      'Runbooks & handover',
    ],
    problems: [
      'MVP needs to ship fast without shortcuts that hurt later',
      'Legacy stack is slowing release cycles',
      'No engineering bandwidth in-house',
      'Integrations and scale are blocking launch',
    ],
    accent: '#38D9F5',
  },
  {
    id: 'marketing',
    num: '03',
    short: 'Marketing',
    title: 'Marketing Solutions',
    category: 'SEO / SMO / LeadGen',
    path: '/solutions/marketing',
    tagline: 'Turn presence into a consistent customer acquisition engine.',
    summary:
      'SEO, social, and lead generation working as one system — visibility that compounds into qualified pipeline.',
    capabilities: [
      'Technical & On-page SEO',
      'Content & Keyword Systems',
      'SMO & Brand Campaigns',
      'B2B/B2C Lead Generation',
      'Landing Page Optimization',
      'CRM & Nurture Automation',
    ],
    process: ['Research', 'Strategy', 'Positioning', 'Campaigns', 'Acquisition', 'Optimization'],
    deliverables: [
      'SEO audits & roadmaps',
      'Content calendars',
      'Campaign creatives',
      'Lead funnels',
      'Performance reporting',
    ],
    problems: [
      'Traffic without conversions',
      'No predictable lead engine',
      'Weak search visibility',
      'Social presence without pipeline',
    ],
    accent: '#8268FF',
  },
  {
    id: 'startup-consultancy',
    num: '04',
    short: 'Consultancy',
    title: 'Startup Consultancy',
    category: 'Startup Strategy & Business Advisory',
    path: '/solutions/startup-consultancy',
    tagline: 'Turn a business idea into an execution-ready company.',
    summary:
      'Feasibility, business model, GTM, and operating clarity for founders who need structure before they scale spend.',
    capabilities: [
      'Idea Evaluation & Feasibility',
      'Market & Competitor Research',
      'Business Model & Pricing',
      'GTM Strategy',
      'MVP & Roadmap Planning',
      'Strategic Advisory',
    ],
    process: ['Idea', 'Validation', 'Business Model', 'Strategy', 'MVP Plan', 'Launch', 'Growth'],
    deliverables: [
      'Feasibility brief',
      'Business model canvas',
      'GTM plan',
      'MVP roadmap',
      'Founder playbooks',
    ],
    problems: [
      'Idea energy without a validated model',
      'Unclear pricing or GTM',
      'First-time founder decision overload',
      'Digital transformation without a plan',
    ],
    accent: '#356DFF',
  },
  {
    id: 'funding-support',
    num: '05',
    short: 'Funding',
    title: 'Funding Support for Startups',
    category: 'Funding Readiness & Investor Connect',
    path: '/solutions/funding-support',
    tagline: 'Prepare for funding conversations with clarity — not hope.',
    summary:
      'Pitch craft, financial narrative, and readiness support. Funding outcomes depend on viability and investor decisions — we strengthen your readiness, never guarantee capital.',
    capabilities: [
      'Funding Readiness Assessment',
      'Pitch Deck Preparation',
      'Financial Model Support',
      'Investor Presentation Coaching',
      'Outreach Strategy',
      'Due Diligence Prep',
    ],
    process: [
      'Assessment',
      'Funding Strategy',
      'Pitch Prep',
      'Financial Planning',
      'Investor Targeting',
      'Outreach',
      'Follow-up',
    ],
    deliverables: [
      'Pitch deck',
      'Financial narrative pack',
      'Investor target list approach',
      'Readiness checklist',
    ],
    problems: [
      'Deck does not tell a fundable story',
      'Numbers lack investor-grade clarity',
      'Unsure how to approach investors',
      'Not ready for diligence questions',
    ],
    accent: '#38D9F5',
  },
  {
    id: 'ai-automation',
    num: '06',
    short: 'AI Automation',
    title: 'AI-Powered Operations Automation',
    category: 'AI & Business Process Automation',
    path: '/solutions/ai-automation',
    tagline: 'Make operations smarter, faster, and less manual.',
    summary:
      'Workflow automation, AI agents, and intelligent systems that remove repetitive work while keeping control with your team.',
    capabilities: [
      'Process Analysis & Workflows',
      'AI Chatbots & Support',
      'Lead Qualification Agents',
      'CRM & Sales Automation',
      'Document & Reporting Automation',
      'Custom AI Integrations',
    ],
    process: ['Map Processes', 'Identify Leverage', 'Design Agents', 'Integrate', 'Pilot', 'Scale'],
    deliverables: [
      'Automation blueprint',
      'Deployed workflows/agents',
      'Integration map',
      'Ops dashboards',
      'Enablement guides',
    ],
    problems: [
      'Teams buried in repetitive tasks',
      'Support queues grow faster than headcount',
      'CRM hygiene is manual',
      'Reporting eats every Monday',
    ],
    accent: '#8268FF',
  },
  {
    id: 'hr-hiring',
    num: '07',
    short: 'HR Hiring',
    title: 'HR Hiring Support',
    category: 'OnRole / Off Role Talent',
    path: '/solutions/hr-hiring',
    tagline: 'Build the workforce your business actually needs.',
    summary:
      'On-role permanent hiring and off-role flexible talent — sourced, screened, and aligned to your culture and velocity.',
    capabilities: [
      'Permanent / On-Role Hiring',
      'Contract & Off-Role Staffing',
      'Technical & Non-Technical Recruiting',
      'Executive Search',
      'Dedicated Teams',
      'Screening & Onboarding Support',
    ],
    process: ['Requirement', 'Talent Mapping', 'Sourcing', 'Screening', 'Interview', 'Selection', 'Onboarding'],
    deliverables: [
      'Role scorecards',
      'Shortlisted candidates',
      'Interview coordination',
      'Offer & onboarding support',
    ],
    problems: [
      'Critical roles stay open too long',
      'Need surge capacity without full-time risk',
      'Screening quality is inconsistent',
      'Scaling team blocks product velocity',
    ],
    accent: '#356DFF',
  },
]

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Industries', path: '/industries' },
  { label: 'How We Work', path: '/how-we-work' },
  { label: 'About', path: '/about' },
]

export const industries = [
  'Startups & Entrepreneurs',
  'SaaS & Technology',
  'Healthcare',
  'Education',
  'E-commerce & Retail',
  'Real Estate',
  'Professional Services',
  'SMEs & Enterprises',
]

export const journeyStages = [
  { id: 'idea', label: 'Idea', services: ['startup-consultancy', 'product-design'] },
  { id: 'strategy', label: 'Strategy', services: ['startup-consultancy', 'funding-support'] },
  { id: 'design', label: 'Design', services: ['product-design'] },
  { id: 'development', label: 'Development', services: ['product-development'] },
  { id: 'launch', label: 'Launch', services: ['product-development', 'marketing'] },
  { id: 'growth', label: 'Growth', services: ['marketing', 'funding-support'] },
  { id: 'automation', label: 'Automation', services: ['ai-automation'] },
  { id: 'scale', label: 'Scale', services: ['hr-hiring', 'ai-automation', 'marketing'] },
]
