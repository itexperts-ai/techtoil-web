import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { aiHighlights, services } from '../data/services'
import { company } from '../data/company'

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
}

const method = [
  { n: '01', t: 'Discover', d: 'Clarify stage, constraints, and the outcome that matters.' },
  { n: '02', t: 'Map', d: 'Choose the craft mix across design, build, growth, funding, AI, hiring.' },
  { n: '03', t: 'Build', d: 'Ship in focused sprints with shared context across every workstream.' },
  { n: '04', t: 'Operate', d: 'Hand over systems people and AI can run without firefighting.' },
]

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1])

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
          <img
            src="/media/hero.jpg"
            alt=""
            className="h-full w-full object-cover object-[60%_center] saturate-[0.9]"
          />
        </motion.div>
        <div className="hero-wash absolute inset-0" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl items-center px-4 pb-16 pt-28 md:px-6">
          <div className="hero-copy max-w-xl">
            <motion.span
              className="citron-label"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Delhi · Noida
            </motion.span>
            <motion.h1
              className="display mt-6 text-ink"
              initial={{ opacity: 0, y: 36, clipPath: 'inset(100% 0 0 0)' }}
              animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              Build what{' '}
              <motion.span
                className="display-italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.5 }}
              >
                lasts.
              </motion.span>
            </motion.h1>
            <motion.p
              className="lede mt-5 max-w-md text-ink/75"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              Design, ship, grow, fund, automate, and hire — one connected studio path.
            </motion.p>
            <motion.div
              className="mt-9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-sm font-semibold tracking-wide text-ink hover:opacity-70"
              >
                Start a brief <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collection lookbook */}
      <section id="collection" className="scroll-mt-24 border-t border-line bg-paper px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade} className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-mute">Collection</p>
              <h2 className="title mt-3">Seven practices.</h2>
            </div>
            <p className="max-w-xs text-sm text-mute">Scroll the lookbook — then open any craft below.</p>
          </motion.div>

          <motion.div
            className="lookbook-scroll mt-10"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group relative h-[22rem] w-[15rem] shrink-0 scroll-snap-align-start overflow-hidden sm:h-[26rem] sm:w-[18rem]"
                style={{ scrollSnapAlign: 'start' }}
              >
                <img
                  src={s.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-accent-bright">
                    {s.num}
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold leading-none tracking-[-0.03em] text-white sm:text-3xl">
                    {s.title.split(' ')[0]}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured / studio */}
      <section className="border-t border-line bg-bg">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-12">
          <motion.div {...fade} className="relative min-h-[22rem] lg:col-span-7 lg:min-h-[32rem]">
            <img
              src="/media/svc-design.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            {...fade}
            className="flex flex-col justify-center px-4 py-14 md:px-10 lg:col-span-5 lg:py-20"
          >
            <span className="font-display text-5xl font-semibold text-accent-bright">01</span>
            <h2 className="title mt-4">One studio for every stage.</h2>
            <p className="mt-5 text-mute">
              Stop stitching vendors. Keep product, growth, capital readiness, intelligence,
              and talent on a shared plan — so craft and AI move together.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold border-b border-ink pb-1 w-fit"
            >
              About the studio <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Method staggered */}
      <section className="border-t border-line bg-paper px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fade}>
            <p className="eyebrow text-mute">Method</p>
            <h2 className="title mt-4">From brief to running systems.</h2>
            <div className="mt-10 space-y-8">
              {method.map((step, i) => (
                <div
                  key={step.n}
                  className="border-l-2 border-accent-bright pl-5"
                  style={{ marginLeft: `${i * 12}px` }}
                >
                  <p className="text-xs font-semibold tracking-[0.16em] text-mute">{step.n}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.02em]">
                    {step.t}
                  </h3>
                  <p className="mt-2 text-sm text-mute">{step.d}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fade} className="relative min-h-[20rem] overflow-hidden lg:min-h-full">
            <img
              src="/media/svc-aiops.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Intelligence */}
      <section className="band-dark px-4 py-20 text-white md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade} className="max-w-2xl">
            <span className="citron-label">Intelligence</span>
            <h2 className="title mt-6">AI built into operations.</h2>
            <p className="lede mt-4 text-white/55">
              Agents, workflows, and automation that remove friction — without giving up
              control.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {aiHighlights.map((h, i) => (
              <motion.div key={h.title} {...fade} transition={{ ...fade.transition, delay: i * 0.06 }}>
                <p className="font-display text-2xl font-semibold tracking-[-0.03em]">{h.title}</p>
                <p className="mt-3 text-sm text-white/50">{h.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services depth */}
      <div id="services" className="scroll-mt-24">
        <div className="border-t border-line bg-paper px-4 py-14 md:px-6 md:py-16">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow text-mute">Depth</p>
            <h2 className="title mt-3">Every craft, in full.</h2>
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
                  <p className="eyebrow text-mute">
                    {s.num} · {s.title}
                  </p>
                  <h2 className="title mt-3">{s.title}</h2>
                  <p className="mt-3 font-display text-xl italic text-ink/80">{s.tagline}</p>
                  <p className="lede mt-4 text-mute">{s.summary}</p>
                  <ul className="mt-7 space-y-3">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-ink" strokeWidth={2} />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-semibold"
                  >
                    Discuss {s.title} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div {...fade}>
                  <img
                    src={s.image}
                    alt={s.title}
                    className="aspect-[3/4] w-full object-cover md:aspect-[4/3]"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </section>
          )
        })}
      </div>

      {/* Visit CTA */}
      <section className="border-t border-line bg-paper">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
          <motion.div {...fade} className="flex flex-col justify-center px-4 py-16 md:px-10 md:py-24">
            <p className="eyebrow text-mute">Visit</p>
            <h2 className="title mt-4">Send a brief.</h2>
            <p className="mt-4 max-w-md text-mute">
              Tell us your stage. We’ll map the craft into one practical plan.
            </p>
            <p className="mt-8 text-sm leading-relaxed text-mute">
              {company.registeredOffice.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex w-fit items-center gap-2 bg-accent-bright px-5 py-3.5 text-sm font-bold text-ink hover:bg-accent"
            >
              Book a call <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div {...fade} className="relative min-h-[22rem] lg:min-h-[28rem]">
            <img
              src="/media/svc-consult.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
