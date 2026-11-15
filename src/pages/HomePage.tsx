import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  ArrowUpRight,
  Check,
  Code2,
  LineChart,
  Briefcase,
  Cpu,
} from 'lucide-react'
import { aiHighlights, services } from '../data/services'

const fade = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
}

type Filter = 'all' | 'technical' | 'growth' | 'management' | 'intelligence'

const filterMap: Record<Exclude<Filter, 'all'>, string[]> = {
  technical: ['product-design', 'product-development'],
  growth: ['marketing'],
  management: ['consultancy', 'funding', 'hr-hiring'],
  intelligence: ['ai-automation'],
}

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All solutions' },
  { id: 'technical', label: 'Product & tech' },
  { id: 'growth', label: 'Growth' },
  { id: 'management', label: 'Management' },
  { id: 'intelligence', label: 'AIM' },
]

const pillars = [
  {
    icon: Code2,
    t: 'Product & engineering',
    d: 'Design systems, web/mobile apps, APIs, cloud, QA — build what ships.',
  },
  {
    icon: LineChart,
    t: 'Growth systems',
    d: 'SEO, social, and lead generation that create measurable demand.',
  },
  {
    icon: Briefcase,
    t: 'Management & talent',
    d: 'Consultancy, funding readiness, and On Role / Off Role hiring.',
  },
  {
    icon: Cpu,
    t: 'AIM operations',
    d: 'AI agents and workflows that cut manual work with clear control.',
  },
]

const process = [
  { n: '01', t: 'Discover', d: 'Map business goals to the right mix of tech, growth, and management.' },
  { n: '02', t: 'Architect', d: 'Define scope, stack, roadmap, and ownership across workstreams.' },
  { n: '03', t: 'Build', d: 'Deliver in sprints — product, campaigns, AI, and talent in sync.' },
  { n: '04', t: 'Operate', d: 'Handover, manage, and improve systems your team can run.' },
]

export function HomePage() {
  const [filter, setFilter] = useState<Filter>('all')
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])

  const visible =
    filter === 'all'
      ? services
      : services.filter((s) => filterMap[filter].includes(s.id))

  return (
    <div>
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src="/media/hero.jpg"
            alt="Techtoil IT solutions workspace"
            className="h-[115%] w-full object-cover object-[58%_center]"
          />
        </motion.div>
        <div className="hero-wash absolute inset-0" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl items-center px-4 pb-16 pt-28 md:px-6">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <p className="eyebrow text-accent">IT Solutions · Product · Management</p>
            <h1 className="display mt-5 text-ink">
              Your technology and management partner for what comes next.
            </h1>
            <p className="lede mt-5 max-w-md text-mute">
              Techtoil Infosol delivers product design & development, growth marketing,
              consultancy, funding support, AI operations, and hiring — seven solutions under
              one accountable team.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3.5 text-sm font-semibold text-white hover:bg-accent-deep"
              >
                Explore solutions <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg border border-ink/15 bg-paper/95 px-5 py-3.5 text-sm font-semibold text-ink hover:border-accent/40"
              >
                Book consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-line bg-paper px-4 py-14 md:px-6 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div key={p.t} {...fade} transition={{ ...fade.transition, delay: i * 0.05 }}>
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold tracking-[-0.02em]">
                {p.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="catalog" className="scroll-mt-24 bg-bg px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade} className="max-w-2xl">
            <p className="eyebrow text-accent">Solutions catalog</p>
            <h2 className="title mt-3">Seven capabilities. Built for IT buyers.</h2>
            <p className="mt-4 text-mute">
              Filter by product & tech, growth, management, or AIM. Each card opens full
              scope, approach, and outcomes.
            </p>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  filter === f.id
                    ? 'bg-accent text-white'
                    : 'bg-paper text-ink ring-1 ring-line hover:ring-accent/40'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((s, i) => (
              <motion.a
                key={s.id}
                href={`#${s.id}`}
                className="group overflow-hidden rounded-xl bg-paper shadow-sm ring-1 ring-line transition hover:shadow-md hover:ring-accent/35"
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.04 }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-bg">
                  <img
                    src={s.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded bg-paper/95 px-2 py-0.5 text-[0.65rem] font-bold text-accent">
                    {s.num}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold tracking-[-0.02em] group-hover:text-accent">
                      {s.title}
                    </h3>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-faint group-hover:text-accent" />
                  </div>
                  <p className="mt-2 text-sm text-mute">{s.tagline}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="band-dark px-4 py-20 text-white md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div {...fade}>
            <p className="eyebrow text-accent-bright">AIM · AI operations</p>
            <h2 className="title mt-4">Intelligence as an IT solution.</h2>
            <p className="lede mt-4 text-white/60">
              Automate support, sales ops, and reporting with governed agents — judgment
              stays with your people.
            </p>
            <ul className="mt-8 space-y-5">
              {aiHighlights.map((h) => (
                <li key={h.title} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent-bright" strokeWidth={2.5} />
                  <div>
                    <p className="font-semibold">{h.title}</p>
                    <p className="mt-1 text-sm text-white/50">{h.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fade}>
            <img
              src="/media/svc-aiops.jpg"
              alt="AI operations"
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
          </motion.div>
        </div>
      </section>

      <div id="services" className="scroll-mt-24">
        <div className="bg-paper px-4 py-14 md:px-6 md:py-16">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow text-accent">Service depth</p>
            <h2 className="title mt-3">Scope, approach, and outcomes.</h2>
          </div>
        </div>

        {services.map((s, i) => {
          const reverse = i % 2 === 1
          return (
            <section
              key={s.id}
              id={s.id}
              className={`scroll-mt-24 px-4 py-16 md:px-6 md:py-20 ${
                reverse ? 'bg-bg' : 'bg-paper'
              }`}
            >
              <div
                className={`mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                  reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <motion.div {...fade}>
                  <p className="eyebrow text-accent">{s.num} · Solution</p>
                  <h2 className="title mt-3">{s.title}</h2>
                  <p className="mt-3 text-lg font-semibold text-ink/85">{s.tagline}</p>
                  <p className="lede mt-4 text-mute">{s.summary}</p>
                  <ul className="mt-7 space-y-3">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-lg bg-dark px-5 py-3.5 text-sm font-semibold text-white hover:bg-accent"
                  >
                    Discuss {s.title} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div {...fade}>
                  <img
                    src={s.image}
                    alt={s.title}
                    className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg shadow-ink/10"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </section>
          )
        })}
      </div>

      <section className="bg-paper px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade} className="max-w-2xl">
            <p className="eyebrow text-accent">Engagement model</p>
            <h2 className="title mt-3">Discover → Architect → Build → Operate.</h2>
          </motion.div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <motion.div
                key={step.n}
                className="rounded-xl border border-line bg-bg p-6"
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.05 }}
              >
                <p className="font-display text-sm font-bold text-accent">{step.n}</p>
                <h3 className="mt-3 font-display text-lg font-semibold">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-6 md:py-24">
        <motion.div
          className="band-dark mx-auto max-w-6xl rounded-2xl px-8 py-14 text-white md:px-12 md:py-16"
          {...fade}
        >
          <p className="eyebrow text-accent-bright">Next step</p>
          <h2 className="title mt-4 max-w-xl">
            Ready to scope product, growth, or management work?
          </h2>
          <p className="lede mt-4 max-w-lg text-white/55">
            Tell us your stage. We’ll map the right IT and management solutions into one
            plan.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent-bright px-5 py-3.5 text-sm font-semibold text-white hover:bg-white hover:text-dark"
          >
            Book a free assessment <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
