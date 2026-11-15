import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { aiHighlights, services } from '../data/services'

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
}

const method = [
  {
    n: '01',
    t: 'Discover',
    d: 'Clarify stage, constraints, and the outcome that matters most.',
  },
  {
    n: '02',
    t: 'Map',
    d: 'Choose the craft mix — design, build, growth, funding, AI, hiring.',
  },
  {
    n: '03',
    t: 'Build',
    d: 'Ship in focused sprints with shared context across every workstream.',
  },
  {
    n: '04',
    t: 'Operate',
    d: 'Hand over systems people and AI can run without constant firefighting.',
  },
]

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1])

  return (
    <div>
      {/* 1 — Hero: full-bleed photo + paper slab */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden bg-dark">
        <motion.div
          className="absolute inset-0"
          style={{ y: imgY, scale: imgScale }}
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/media/hero.jpg"
            alt=""
            className="h-full w-full object-cover object-[62%_center] brightness-[0.92] saturate-[0.85]"
          />
        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl items-end px-4 pb-12 pt-28 md:px-6 md:pb-16">
          <motion.div
            className="paper-slab w-full max-w-lg border border-line p-7 shadow-[0_20px_60px_rgba(14,18,16,0.18)] md:p-10"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            <motion.div
              className="hairline-draw mb-6 h-px w-16 bg-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            />
            <h1 className="display text-ink">Build what lasts.</h1>
            <p className="lede mt-5 max-w-md text-mute">
              Design, ship, grow, fund, automate, and hire — one connected path, with AI in
              the loop.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent px-5 py-3.5 font-display text-sm font-semibold tracking-[-0.02em] text-white hover:bg-accent-deep"
              >
                Start a brief <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="#ledger"
                className="font-display text-sm font-semibold tracking-[-0.02em] text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-accent"
              >
                See the work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2 — Practice ledger */}
      <section id="ledger" className="scroll-mt-24 border-t border-line bg-paper px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade} className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-accent">Practice</p>
              <h2 className="title mt-3">Seven disciplines. One studio.</h2>
            </div>
            <p className="max-w-sm font-body text-mute md:text-right">
              Indexed like a print ledger — open any craft for full depth below.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-x-10 border-t border-line md:grid-cols-2">
            {services.map((s, i) => (
              <motion.a
                key={s.id}
                href={`#${s.id}`}
                className="group flex items-baseline justify-between gap-4 border-b border-line py-5"
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.04 }}
              >
                <span className="flex min-w-0 items-baseline gap-4">
                  <span className="font-display text-xs font-semibold tracking-[0.16em] text-accent">
                    {s.num}
                  </span>
                  <span className="font-display text-lg font-semibold tracking-[-0.03em] group-hover:text-accent md:text-xl">
                    {s.title}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-faint transition group-hover:text-accent" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Studio promise (asymmetric) */}
      <section className="border-t border-line bg-bg px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div {...fade} className="lg:col-span-5">
            <p className="eyebrow text-accent">Studio</p>
            <h2 className="title mt-4">One partner for every stage of execution.</h2>
          </motion.div>
          <motion.div {...fade} className="space-y-8 lg:col-span-7">
            <p className="lede text-mute">
              Stop stitching vendors together. Keep product, growth, capital readiness,
              intelligence, and talent on a shared plan — so craft and AI move as one.
            </p>
            <ul className="space-y-0 border-t border-line">
              {[
                {
                  t: 'Connected craft',
                  d: 'Design, engineering, marketing, funding, AI ops, and hiring stay on one brief.',
                },
                {
                  t: 'Outcome first',
                  d: 'We start from where you want to go — then choose the work that moves it.',
                },
                {
                  t: 'AI with control',
                  d: 'Automate repetitive work while people keep judgment and ownership.',
                },
              ].map((item) => (
                <li key={item.t} className="border-b border-line py-5">
                  <h3 className="font-display text-lg font-semibold tracking-[-0.03em]">{item.t}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-mute">{item.d}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 4 — Intelligence */}
      <section className="band-dark px-4 py-20 text-white md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fade}>
            <p className="eyebrow text-white/45">Intelligence</p>
            <h2 className="title mt-4">AI built into operations.</h2>
            <p className="lede mt-4 text-white/60">
              Agents, workflows, and automation that remove friction — without giving up
              control.
            </p>
            <ul className="mt-9 space-y-6">
              {aiHighlights.map((h) => (
                <li key={h.title} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-white/70" strokeWidth={2.5} />
                  <div>
                    <p className="font-display font-semibold tracking-[-0.02em]">{h.title}</p>
                    <p className="mt-1 text-[0.95rem] text-white/50">{h.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fade}>
            <img
              src="/media/svc-aiops.jpg"
              alt="AI operations"
              className="aspect-[4/3] w-full object-cover brightness-[0.95] saturate-[0.8]"
            />
          </motion.div>
        </div>
      </section>

      {/* 5 — Services depth */}
      <div id="services" className="scroll-mt-24">
        <div className="border-t border-line bg-paper px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow text-accent">Depth</p>
            <h2 className="title mt-3 max-w-xl">Product-level detail for every craft.</h2>
          </div>
        </div>

        {services.map((s, i) => {
          const reverse = i % 2 === 1
          return (
            <section
              key={s.id}
              id={s.id}
              className={`scroll-mt-24 border-t border-line px-4 py-16 md:px-6 md:py-20 ${
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
                  <p className="mt-3 font-display text-lg font-semibold tracking-[-0.02em] text-ink/85">
                    {s.tagline}
                  </p>
                  <p className="lede mt-4 text-mute">{s.summary}</p>
                  <ul className="mt-7 space-y-0">
                    {s.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-3 border-t border-line py-3 text-[0.95rem] first:border-0 first:pt-0"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 bg-dark px-5 py-3.5 font-display text-sm font-semibold text-white hover:bg-accent"
                  >
                    Discuss {s.title} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div {...fade}>
                  <img
                    src={s.image}
                    alt={s.title}
                    className="aspect-[4/3] w-full object-cover saturate-[0.88]"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </section>
          )
        })}
      </div>

      {/* 6 — Method */}
      <section className="border-t border-line bg-surface px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade} className="max-w-2xl">
            <p className="eyebrow text-accent">Method</p>
            <h2 className="title mt-4">From brief to running systems.</h2>
          </motion.div>

          <div className="mt-14 grid gap-0 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {method.map((step, i) => (
              <motion.div
                key={step.n}
                className="border-b border-line py-8 sm:border-b-0 sm:px-5 sm:py-8 lg:border-r lg:last:border-r-0 first:sm:pl-0 last:sm:pr-0"
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.05 }}
              >
                <p className="font-display text-xs font-semibold tracking-[0.18em] text-accent">
                  {step.n}
                </p>
                <h3 className="mt-4 font-display text-xl font-bold tracking-[-0.03em]">{step.t}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-mute">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Begin CTA */}
      <section className="border-t border-line bg-paper px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          <motion.div
            className="band-dark flex flex-col justify-between p-8 text-white md:min-h-[18rem] md:p-10"
            {...fade}
          >
            <div>
              <p className="eyebrow text-white/40">Begin</p>
              <h2 className="title mt-4">Send a brief.</h2>
              <p className="mt-4 max-w-sm text-white/55">
                Tell us your stage. We’ll map the craft into one practical plan.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-10 inline-flex w-fit items-center gap-2 bg-white px-5 py-3.5 font-display text-sm font-semibold text-dark hover:bg-paper"
            >
              Start a brief <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div
            className="flex flex-col justify-between border border-line bg-bg p-8 md:min-h-[18rem] md:p-10"
            {...fade}
            transition={{ ...fade.transition, delay: 0.08 }}
          >
            <div>
              <p className="eyebrow text-accent">Partner</p>
              <h2 className="title mt-4">Book a call.</h2>
              <p className="mt-4 max-w-sm text-mute">
                Prefer a conversation first? Reach the studio directly.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-10 inline-flex w-fit items-center gap-2 border border-ink/20 bg-paper px-5 py-3.5 font-display text-sm font-semibold text-ink hover:border-accent hover:text-accent"
            >
              Contact studio <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
