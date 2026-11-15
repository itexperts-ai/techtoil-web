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
  initial: { opacity: 0, y: 24 },
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
  { id: 'all', label: 'All 7' },
  { id: 'technical', label: 'Technical' },
  { id: 'growth', label: 'Growth' },
  { id: 'management', label: 'Management' },
  { id: 'intelligence', label: 'AIM' },
]

const pillars = [
  {
    icon: Code2,
    t: 'Technical solutions',
    d: 'Design, engineering, APIs, cloud, QA — products that ship and scale.',
    ids: '01–02',
  },
  {
    icon: LineChart,
    t: 'Growth solutions',
    d: 'SEO, social, and lead systems that turn presence into pipeline.',
    ids: '03',
  },
  {
    icon: Briefcase,
    t: 'Management & advisory',
    d: 'Consultancy, funding readiness, and On Role / Off Role hiring.',
    ids: '04–05 · 07',
  },
  {
    icon: Cpu,
    t: 'AIM intelligence',
    d: 'AI agents and workflows that automate ops with human control.',
    ids: '06',
  },
]

const process = [
  { n: '01', t: 'Assess', d: 'Identify which of the seven solutions unlock your next outcome.' },
  { n: '02', t: 'Plan', d: 'Architect technical, growth, and management workstreams together.' },
  { n: '03', t: 'Deliver', d: 'Ship in sprints with shared context across every capability.' },
  { n: '04', t: 'Manage', d: 'Operate, improve, and hand over systems your team can run.' },
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
      {/* Hero — research: outcome + audience + CTA + workspace photo */}
      <section ref={heroRef} className="relative min-h-[92svh] overflow-hidden md:min-h-[100svh]">
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src="/media/hero.jpg"
            alt="Techtoil solutions workspace"
            className="h-[115%] w-full object-cover object-[55%_center]"
          />
        </motion.div>
        <div className="hero-wash absolute inset-0" />

        <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-6xl items-center px-4 pb-14 pt-28 md:min-h-[100svh] md:px-6 md:pb-16">
          <motion.div
            className="max-w-[36rem]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow text-accent">IT · Growth · Management · AIM</p>
            <h1 className="display mt-5 text-ink">
              Seven solutions. One partner for tech, growth, and{' '}
              <span className="italic font-medium">management.</span>
            </h1>
            <p className="lede mt-5 max-w-lg text-ink/70">
              From product design and engineering to marketing, consultancy, funding support,
              AI operations, and hiring — Techtoil delivers connected services businesses
              actually run on.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white hover:bg-accent-deep"
              >
                Browse solutions <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-ink/12 bg-paper/90 px-6 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm hover:border-ink/25"
              >
                Book a consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4 pillars — Cloudsware-style capability row */}
      <section className="border-b border-line bg-paper px-4 py-14 md:px-6 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div key={p.t} {...fade} transition={{ ...fade.transition, delay: i * 0.05 }}>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <p.icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-[0.65rem] font-semibold tracking-[0.14em] text-faint uppercase">
                {p.ids}
              </p>
              <h3 className="mt-1 font-display text-lg font-medium tracking-[-0.02em]">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Visual catalog — research: image cards + filters beat text lists */}
      <section id="catalog" className="scroll-mt-24 bg-bg px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade} className="max-w-2xl">
            <p className="eyebrow text-accent">Solutions catalog</p>
            <h2 className="title mt-3">Find the service that matches your problem.</h2>
            <p className="mt-4 text-mute">
              Filter by technical, growth, management, or AIM — each card opens full scope
              and outcomes below.
            </p>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  filter === f.id
                    ? 'bg-accent text-white'
                    : 'bg-surface text-ink ring-1 ring-line hover:ring-accent/40'
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
                className="group overflow-hidden rounded-2xl bg-surface shadow-[0_20px_50px_-32px_rgba(23,26,24,0.4)] ring-1 ring-line transition hover:ring-accent/40"
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.04 }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-paper/95 px-2.5 py-1 text-[0.65rem] font-bold tracking-wide text-accent backdrop-blur-sm">
                    {s.num}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-xl font-medium tracking-[-0.02em] group-hover:text-accent">
                      {s.title}
                    </h3>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-faint group-hover:text-accent" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{s.tagline}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                    View scope →
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* AIM band */}
      <section className="band-dark px-4 py-20 text-white md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div {...fade}>
            <p className="eyebrow text-accent-bright">AIM · Intelligence solution</p>
            <h2 className="title mt-4">AI that solves ops problems — not demos.</h2>
            <p className="lede mt-4 text-white/60">
              Business problem first: fewer manual hours, faster handoffs, clearer reporting.
              Then the agents and workflows that deliver it.
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
            <a
              href="#ai-automation"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-bright hover:text-white"
            >
              Full AI operations scope <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
          <motion.div {...fade}>
            <img
              src="/media/svc-aiops.jpg"
              alt="AI operations"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Depth pages — outcome → what we do → scope */}
      <div id="services" className="scroll-mt-24">
        <div className="bg-paper px-4 py-14 md:px-6 md:py-16">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow text-accent">Service depth</p>
            <h2 className="title mt-3">Problem, approach, and outcome — for each solution.</h2>
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
                  <p className="mt-3 font-display text-xl italic text-ink/80">{s.tagline}</p>
                  <p className="lede mt-4 text-mute">{s.summary}</p>
                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-faint">
                    What’s included
                  </p>
                  <ul className="mt-3 space-y-3">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-9 inline-flex items-center gap-2 rounded-full bg-dark px-5 py-3.5 text-sm font-semibold text-white hover:bg-accent"
                  >
                    Request {s.title} consult <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div {...fade}>
                  <img
                    src={s.image}
                    alt={s.title}
                    className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_30px_60px_-34px_rgba(23,26,24,0.4)]"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </section>
          )
        })}
      </div>

      {/* Process */}
      <section className="bg-paper px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade} className="max-w-2xl">
            <p className="eyebrow text-accent">How engagement works</p>
            <h2 className="title mt-3">Assess → Plan → Deliver → Manage.</h2>
          </motion.div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <motion.div
                key={step.n}
                className="rounded-2xl bg-bg p-6 ring-1 ring-line"
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.05 }}
              >
                <p className="font-display text-2xl font-medium text-accent">{step.n}</p>
                <h3 className="mt-3 font-display text-xl font-medium">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-6 md:py-24">
        <motion.div
          className="band-dark mx-auto max-w-6xl rounded-[1.75rem] px-8 py-14 text-white md:px-12 md:py-16"
          {...fade}
        >
          <p className="eyebrow text-accent-bright">Consultation</p>
          <h2 className="title mt-4 max-w-xl">
            Tell us the business problem — we’ll map the right solutions.
          </h2>
          <p className="lede mt-4 max-w-lg text-white/55">
            Technical, growth, management, AIM, or hiring. One plan across the capabilities
            you need.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-bright px-6 py-3.5 text-sm font-semibold text-white hover:bg-white hover:text-dark"
          >
            Book your free assessment <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
