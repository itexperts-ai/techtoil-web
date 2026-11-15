import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {
  ArrowUpRight,
  Check,
  Code2,
  LineChart,
  Briefcase,
  Cpu,
  Layers,
} from 'lucide-react'
import { aiHighlights, services } from '../data/services'

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
}

const pillars = [
  {
    icon: Code2,
    t: 'Technical solutions',
    d: 'Product design, engineering, cloud, APIs, QA, and AI automation — built to ship and scale.',
    href: '#product-development',
  },
  {
    icon: LineChart,
    t: 'Growth solutions',
    d: 'SEO, social, and lead systems that turn presence into measurable pipeline.',
    href: '#marketing',
  },
  {
    icon: Briefcase,
    t: 'Management & advisory',
    d: 'Startup consultancy, funding readiness, and HR hiring — On Role and Off Role.',
    href: '#consultancy',
  },
  {
    icon: Cpu,
    t: 'AIM intelligence',
    d: 'Agents and workflows that automate ops while people keep judgment and control.',
    href: '#ai-automation',
  },
]

const process = [
  { n: '01', t: 'Discover', d: 'Map goals, constraints, and which of the seven solutions matter first.' },
  { n: '02', t: 'Architect', d: 'Plan technical, growth, and management workstreams on one brief.' },
  { n: '03', t: 'Deliver', d: 'Ship in sprints across product, marketing, AI, and talent.' },
  { n: '04', t: 'Manage', d: 'Operate, improve, and hand over systems your team can run.' },
]

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])

  return (
    <div>
      {/* Hero — solutions focus */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src="/media/hero.jpg"
            alt=""
            className="h-[115%] w-full object-cover object-[62%_center]"
          />
        </motion.div>
        <div className="hero-wash absolute inset-0" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl items-center px-4 pb-16 pt-28 md:px-6">
          <motion.div
            className="max-w-[36rem]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow text-accent">7 solutions · Tech · Mgmt · AIM</p>
            <h1 className="display mt-5 text-ink">
              Full-stack services for every stage of the{' '}
              <span className="italic font-medium">business.</span>
            </h1>
            <p className="lede mt-5 max-w-lg text-ink/70">
              Techtoil delivers technical builds, growth systems, management advisory, funding
              readiness, AI operations, and hiring — seven connected capabilities under one
              studio.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white hover:bg-accent-deep"
              >
                View all 7 solutions <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-ink/12 bg-paper/90 px-6 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm hover:border-ink/25"
              >
                Talk to us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All 7 solutions — primary focus */}
      <section id="solutions" className="scroll-mt-24 bg-paper px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade} className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-accent">Our solutions</p>
              <h2 className="title mt-3">Seven services. Complete coverage.</h2>
            </div>
            <p className="max-w-sm text-sm text-mute md:text-right">
              Technical delivery, growth, management, capital readiness, intelligence, and
              talent — open any practice for full depth.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((s, i) => (
              <motion.a
                key={s.id}
                href={`#${s.id}`}
                className={`group rounded-2xl border border-line bg-surface p-6 transition hover:border-accent/40 hover:shadow-[0_20px_40px_-28px_rgba(23,26,24,0.4)] ${
                  i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.04 }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display text-sm font-medium text-accent">{s.num}</span>
                  <ArrowUpRight className="h-4 w-4 text-faint transition group-hover:text-accent" />
                </div>
                <h3 className="mt-4 font-display text-xl font-medium tracking-[-0.02em] group-hover:text-accent">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{s.tagline}</p>
              </motion.a>
            ))}
            <motion.div
              className="flex flex-col justify-between rounded-2xl bg-accent p-6 text-white sm:col-span-2 lg:col-span-1"
              {...fade}
            >
              <div>
                <Layers className="h-6 w-6 opacity-80" />
                <p className="mt-4 font-display text-xl font-medium">Need a mix?</p>
                <p className="mt-2 text-sm text-white/75">
                  Most clients combine technical, growth, and management solutions on one plan.
                </p>
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
              >
                Build your stack <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars — tech / growth / mgmt / AI */}
      <section className="bg-bg px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade} className="max-w-2xl">
            <p className="eyebrow text-accent">How we work</p>
            <h2 className="title mt-3">Technical, growth, management, and AIM.</h2>
            <p className="mt-4 text-mute">
              One partner for software, marketing systems, advisory, funding support, AI
              ops, and hiring — so delivery and management stay aligned.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {pillars.map((p, i) => (
              <motion.a
                key={p.t}
                href={p.href}
                className="flex gap-5 rounded-2xl bg-surface p-7 ring-1 ring-line transition hover:ring-accent/35"
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.05 }}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <p.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium tracking-[-0.02em]">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{p.d}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="band-dark px-4 py-20 text-white md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div {...fade}>
            <p className="eyebrow text-accent-bright">AIM · Technical intelligence</p>
            <h2 className="title mt-4">AI operations as a managed solution.</h2>
            <p className="lede mt-4 text-white/60">
              Not a bolt-on demo — workflows, agents, and handoffs designed into how your
              business runs.
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
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Depth — all 7 */}
      <div id="services" className="scroll-mt-24">
        <div className="bg-paper px-4 py-14 md:px-6 md:py-16">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow text-accent">Service depth</p>
            <h2 className="title mt-3">Every solution, in full detail.</h2>
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
                  <p className="eyebrow text-accent">
                    {s.num} · Solution
                  </p>
                  <h2 className="title mt-3">{s.title}</h2>
                  <p className="mt-3 font-display text-xl italic text-ink/80">{s.tagline}</p>
                  <p className="lede mt-4 text-mute">{s.summary}</p>
                  <ul className="mt-8 space-y-3">
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
                    Discuss {s.title} <ArrowUpRight className="h-4 w-4" />
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

      {/* Delivery / mgmt process */}
      <section className="bg-paper px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade} className="max-w-2xl">
            <p className="eyebrow text-accent">Delivery & management</p>
            <h2 className="title mt-3">From brief to managed systems.</h2>
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
          <p className="eyebrow text-accent-bright">Next step</p>
          <h2 className="title mt-4 max-w-xl">
            Tell us which solutions you need — technical, growth, or management.
          </h2>
          <p className="lede mt-4 max-w-lg text-white/55">
            We’ll map the right mix across all seven capabilities into one practical plan.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-bright px-6 py-3.5 text-sm font-semibold text-white hover:bg-white hover:text-dark"
          >
            Request a solutions plan <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
