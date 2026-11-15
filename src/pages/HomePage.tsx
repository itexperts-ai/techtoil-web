import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { aiHighlights, services } from '../data/services'

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
}

const process = [
  { n: '01', t: 'Discover', d: 'Clarify stage, constraints, and the outcome that matters most.' },
  { n: '02', t: 'Map', d: 'Choose the craft mix — design, build, growth, funding, AI, hiring.' },
  { n: '03', t: 'Build', d: 'Ship in focused sprints with shared context across every workstream.' },
  { n: '04', t: 'Operate', d: 'Hand over systems people and AI can run without constant firefighting.' },
]

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <div>
      {/* Hero — cinematic wash, high readability */}
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
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow text-accent">Product · Growth · Intelligence</p>
            <h1 className="display mt-5 text-ink">From vision to a business that runs.</h1>
            <p className="lede mt-5 max-w-md text-ink/75">
              Design, build, grow, fund, automate, and hire — connected as one path, with AI
              in the loop.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-accent px-5 py-3.5 text-sm font-semibold text-white hover:bg-accent-deep"
              >
                Explore services <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center border border-ink/15 bg-paper/90 px-5 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm hover:border-ink/30"
              >
                Book a call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-paper px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade} className="max-w-2xl">
            <p className="eyebrow text-accent">Why Techtoil</p>
            <h2 className="title mt-4">One studio for every stage of execution.</h2>
            <p className="mt-4 text-mute">
              Stop stitching vendors together. Keep product, growth, capital readiness,
              intelligence, and talent on a shared plan.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
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
                className="border border-line bg-surface p-7 md:p-8"
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.05 }}
              >
                <p className="text-xs font-bold tracking-[0.14em] text-accent">0{i + 1}</p>
                <h3 className="mt-5 text-xl font-bold tracking-[-0.03em]">{item.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI — elegant content, no chrome */}
      <section className="band-dark px-4 py-20 text-white md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fade}>
            <p className="eyebrow text-accent-bright">Intelligence</p>
            <h2 className="title mt-4">AI built into operations.</h2>
            <p className="lede mt-4 text-white/65">
              Agents, workflows, and automation that remove friction — without giving up
              control.
            </p>
            <ul className="mt-8 space-y-5">
              {aiHighlights.map((h) => (
                <li key={h.title} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent-bright" strokeWidth={2.5} />
                  <div>
                    <p className="font-semibold">{h.title}</p>
                    <p className="mt-1 text-sm text-white/55">{h.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fade}>
            <img
              src="/media/svc-aiops.jpg"
              alt="AI operations"
              className="aspect-[4/3] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <div id="services" className="scroll-mt-24">
        <div className="border-t border-line bg-paper px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-accent">Services</p>
              <h2 className="title mt-3">Seven capabilities. Full depth.</h2>
            </div>
            <p className="max-w-sm text-sm text-mute md:text-right">
              Product-level detail for every craft — from first concept to hired teams.
            </p>
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
                  <p className="mt-3 text-lg font-semibold text-ink/85">{s.tagline}</p>
                  <p className="lede mt-4 text-mute">{s.summary}</p>
                  <ul className="mt-7 space-y-0">
                    {s.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-3 border-t border-line py-3 text-sm font-medium first:border-0 first:pt-0"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 bg-dark px-5 py-3.5 text-sm font-semibold text-white hover:bg-accent"
                  >
                    Discuss {s.title} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div {...fade}>
                  <img
                    src={s.image}
                    alt={s.title}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </section>
          )
        })}
      </div>

      {/* Process */}
      <section className="border-t border-line bg-paper px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade} className="max-w-2xl">
            <p className="eyebrow text-accent">Process</p>
            <h2 className="title mt-4">A clear path from brief to running systems.</h2>
          </motion.div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <motion.div
                key={step.n}
                className="border-t-2 border-accent pt-6"
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.05 }}
              >
                <p className="text-sm font-bold tracking-[0.14em] text-accent">{step.n}</p>
                <h3 className="mt-4 text-lg font-bold tracking-[-0.02em]">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg px-4 py-20 md:px-6 md:py-24">
        <motion.div
          className="band-dark mx-auto max-w-6xl px-8 py-14 text-white md:px-12 md:py-16"
          {...fade}
        >
          <p className="eyebrow text-accent-bright">Next step</p>
          <h2 className="title mt-4 max-w-xl">Ready for a clear next move?</h2>
          <p className="lede mt-4 max-w-lg text-white/60">
            Tell us your stage. We’ll map design, build, growth, funding, automation, and
            hiring into one practical plan.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-accent-bright px-5 py-3.5 text-sm font-semibold text-white hover:bg-white hover:text-dark"
          >
            Book a call <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
