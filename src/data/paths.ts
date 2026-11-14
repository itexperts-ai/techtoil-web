/** Maturity paths — primary IA (not a 7-tile service catalog). */
export const paths = [
  {
    id: 'launch',
    label: 'Launch',
    title: 'From idea to first product',
    promise: 'Shape the problem, design the experience, and ship an MVP worth putting in market.',
    draws: ['Product design', 'Product development', 'Startup consultancy'],
  },
  {
    id: 'scale',
    label: 'Scale',
    title: 'From product to demand',
    promise: 'Build presence and pipeline so the product you shipped finds the right customers.',
    draws: ['Marketing & growth', 'SEO / SMO / LeadGen', 'Startup consultancy'],
  },
  {
    id: 'automate',
    label: 'Automate',
    title: 'From manual work to intelligent ops',
    promise: 'Remove repetitive friction with AI workflows so your team spends time on judgment.',
    draws: ['AI operations', 'Process automation', 'Integrations'],
  },
  {
    id: 'strengthen',
    label: 'Strengthen',
    title: 'From momentum to durable growth',
    promise: 'Prepare for capital conversations and hire the people who keep the engine running.',
    draws: ['Funding readiness', 'HR hiring', 'OnRole / Off Role'],
  },
]

export const toolbox = [
  'Product design',
  'Product development',
  'Marketing & growth',
  'Startup consultancy',
  'Funding readiness',
  'AI operations',
  'Hiring support',
]

export const process = [
  { t: 'Understand', d: 'Goals, constraints, and the outcome that matters.' },
  { t: 'Chart', d: 'Pick the path and the craft required for this stage.' },
  { t: 'Build', d: 'Ship tangible work — product, growth, ops, or talent.' },
  { t: 'Advance', d: 'Review, refine, and move to the next chapter.' },
]
