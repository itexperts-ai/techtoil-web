import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Check, Sparkles } from 'lucide-react'
import { aiHighlights, services } from '../data/services'

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
}

const steps = [
  { n: '01', t: 'Discover', d: 'Clarify stage, constraints, and the outcome that matters.' },
  { n: '02', t: 'Map', d: 'Pick the craft mix — design, build, growth, funding, AI, hiring.' },
  { n: '03', t: 'Build', d: 'Ship in focused sprints with shared context across teams.' },
  { n: '04', t: 'Operate', d: 'Hand over systems people and AI can run with confidence.' },
]

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  return (
    <div>
      {/* Hero — cinematic wash */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src="/media/hero.jpg"
            alt=""
            className="h-[115%] w-full object-cover object-[65%_center]"
          />
        </motion.div>
        <div className="hero-wash absolute inset-0" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl items-center px-4 pb-16 pt-28 md:px-6">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              className="inline-flex items-center gap-2 text-accent"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              <span className="eyebrow">Product · Growth · Intelligence</span>
            </motion.p>
            <h1 className="display mt-5 text-ink">
              Vision to a business that runs.
            </h1>
            <p className="lede mt-5 max-w-md text-mute">
              Design, build, grow, fund, automate, and hire — connected as one stylish path,
              with AI in the loop.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#services" className="btn-primary">
                Explore services <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link to="/contact" className="btn-ghost">
                Book a call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why — soft band, stylish chips not ledger */}
      <section className="band-soft relative overflow-hidden px-4 py-20 md:px-6 md:py-28">
        <div className="glow-dot -left-20 top-10 h-56 w-56 bg-accent/15" />
        <div className="glow-dot -right-16 bottom-0 h-64 w-64 bg-indigo-400/10" />
        <div className="relative mx-auto max-w-6xl">
          <motion.div {...fade} className="max-w-2xl">
            <p className="eyebrow text-accent">Why Techtoil</p>
            <h2 className="title mt-4">One studio. Every stage of execution.</h2>
            <p className="mt-4 text-mute">
              Stop stitching vendors. Keep product, growth, capital readiness, intelligence,
              and talent on a shared plan.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                t: 'One partner',
                d: 'Design, engineering, marketing, funding, AI ops, and hiring stay connected.',
              },
              {
                t: 'Outcome first',
                d: 'We start from where you want to go — then choose the craft that moves it.',
              },
              {
                t: 'AI with control',
                d: 'Automate repetitive work while people keep judgment and ownership.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.t}
                className="rounded-3xl bg-surface/80 p-7 shadow-[0_20px_50px_-28px_rgba(16,19,26,0.35)] ring-1 ring-ink/5 backdrop-blur-sm md:p-8"
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.07 }}
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 font-display text-sm font-bold text-accent">
                  0{i + 1}
                </div>
                <h3 className="font-display text-xl font-bold tracking-[-0.03em]">{item.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="band-dark relative overflow-hidden px-4 py-20 text-white md:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fade}>
            <p className="eyebrow text-accent-bright">Intelligence</p>
            <h2 className="title mt-4">AI woven into operations.</h2>
            <p className="lede mt-4 text-white/60">
              Agents, workflows, and automation that remove friction — without giving up
              control.
            </p>
            <ul className="mt-9 space-y-5">
              {aiHighlights.map((h) => (
                <li key={h.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <Check className="h-3.5 w-3.5 text-accent-bright" strokeWidth={2.5} />
                  </span>
                  <div>
                    <p className="font-semibold tracking-[-0.02em]">{h.title}</p>
                    <p className="mt-1 text-sm text-white/50">{h.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fade} className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-accent/20 blur-2xl" />
            <img
              src="/media/svc-aiops.jpg"
              alt="AI operations"
              className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover ring-1 ring-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <div id="services" className="scroll-mt-24">
        <div className="bg-paper px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-accent">Services</p>
              <h2 className="title mt-3">Seven crafts. Full depth.</h2>
            </div>
            <p className="max-w-sm text-sm text-mute md:text-right">
              Product-level detail for every capability — from first concept to hired teams.
            </p>
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
                  <p className="eyebrow text-accent">{s.num} · Service</p>
                  <h2 className="title mt-3">{s.title}</h2>
                  <p className="mt-3 text-lg font-semibold tracking-[-0.02em] text-ink/85">
                    {s.tagline}
                  </p>
                  <p className="lede mt-4 text-mute">{s.summary}</p>
                  <ul className="mt-7 space-y-3">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm font-medium">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                          <Check className="h-3 w-3 text-accent" strokeWidth={2.5} />
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary mt-8">
                    Discuss {s.title} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div {...fade}>
                  <img
                    src={s.image}
                    alt={s.title}
                    className="aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-[0_30px_60px_-30px_rgba(16,19,26,0.4)]"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </section>
          )
        })}
      </div>

      {/* Process */}
      <section className="relative overflow-hidden bg-paper px-4 py-20 md:px-6 md:py-28">
        <div className="glow-dot right-0 top-0 h-72 w-72 bg-accent/10" />
        <div className="relative mx-auto max-w-6xl">
          <motion.div {...fade} className="max-w-2xl">
            <p className="eyebrow text-accent">Process</p>
            <h2 className="title mt-4">A clear path from brief to running systems.</h2>
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                className="rounded-3xl bg-bg/80 p-6 ring-1 ring-ink/5"
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.06 }}
              >
                <p className="font-display text-3xl font-extrabold tracking-[-0.05em] text-accent/30">
                  {step.n}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold tracking-[-0.02em]">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 md:px-6 md:py-24">
        <motion.div
          className="band-dark relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-8 py-14 text-white md:px-12 md:py-16"
          {...fade}
        >
          <div className="glow-dot -right-10 -top-10 h-48 w-48 bg-accent/40" />
          <p className="eyebrow text-accent-bright">Next step</p>
          <h2 className="title mt-4 max-w-xl">Ready for a clear next move?</h2>
          <p className="lede mt-4 max-w-lg text-white/55">
            Tell us your stage. We’ll map design, build, growth, funding, automation, and
            hiring into one practical plan.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-bright px-5 py-3.5 text-sm font-semibold text-dark hover:bg-white"
          >
            Book a call <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
