export type Service = {
  id: string
  number: string
  title: string
  tag: string
  description: string
  points: string[]
}

export const services: Service[] = [
  {
    id: 'design',
    number: '01',
    title: 'Product Design',
    tag: 'Experience',
    description:
      'Research-led UX and sharp UI systems that turn ideas into products people trust and love to use.',
    points: ['User research & flows', 'Design systems', 'Prototypes & usability'],
  },
  {
    id: 'development',
    number: '02',
    title: 'Product Development',
    tag: 'Engineering',
    description:
      'End-to-end builds — web, mobile, and platforms — shipped with clean architecture and measurable outcomes.',
    points: ['Web & mobile apps', 'APIs & platforms', 'MVP to scale'],
  },
  {
    id: 'marketing',
    number: '03',
    title: 'Marketing Solutions',
    tag: 'SEO · SMO · LeadGen',
    description:
      'Growth engines that compound: search visibility, social presence, and pipelines that actually convert.',
    points: ['SEO & content', 'Social & brand', 'Lead generation'],
  },
  {
    id: 'consultancy',
    number: '04',
    title: 'Startup Consultancy',
    tag: 'Strategy',
    description:
      'Hands-on guidance for founders — from positioning and GTM to operating models that survive growth.',
    points: ['GTM strategy', 'Product-market fit', 'Operating playbooks'],
  },
  {
    id: 'funding',
    number: '05',
    title: 'Funding Support',
    tag: 'Capital',
    description:
      'Pitch readiness, investor materials, and introductions that help startups raise with clarity and confidence.',
    points: ['Pitch decks', 'Financial narratives', 'Investor readiness'],
  },
  {
    id: 'automation',
    number: '06',
    title: 'AI Operations Automation',
    tag: 'Intelligence',
    description:
      'Automate repetitive ops with AI agents, workflows, and intelligent systems so teams move faster with less friction.',
    points: ['Process automation', 'AI agents & copilots', 'Ops dashboards'],
  },
  {
    id: 'hr',
    number: '07',
    title: 'HR Hiring Support',
    tag: 'OnRole · OffRole',
    description:
      'Find and place the right talent — full-time on-role and flexible off-role — matched to your culture and pace.',
    points: ['On-role hiring', 'Off-role / contract', 'Team scaling'],
  },
]
