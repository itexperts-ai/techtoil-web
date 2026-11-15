import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { aiHighlights, services } from '../data/services'

const fade = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
}

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <div>
      {/* HORIZON hero — type above the line, image is the horizon */}
      <section ref={heroRef} className="bg-paper pt-[4.25rem]">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-12 md:px-6 md:pb-12 md:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <p className="eyebrow text-signal">Vision → Execution</p>
            <h1 className="display mt-6 max-w-3xl text-ink">
              Draw the line from idea to a business that runs.
            </h1>
            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <p className="lede max-w-md text-mute">
                Design, build, grow, fund, automate, and hire — kept on one horizon, with AI in
                the loop.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 bg-signal px-5 py-3.5 text-sm font-semibold text-white hover:bg-signal-deep"
                >
                  View services <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center border border-line bg-surface px-5 py-3.5 text-sm font-semibold text-ink hover:border-ink/30"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="horizon" />

        <div className="relative h-[42vh] min-h-[15rem] overflow-hidden md:h-[50vh]">
          <motion.img
            src="/media/hero.jpg"
            alt=""
            className="absolute inset-0 h-[120%] w-full object-cover object-center"
            style={{ y: imgY }}
          />
          <div className="absolute inset-x-0 bottom-0 flex justify-between px-4 py-4 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/80 md:px-6">
            <span>Design · Build · Grow</span>
            <span className="hidden sm:inline">Fund · Automate · Hire</span>
          </div>
        </div>
      </section>

      {/* Idea strip */}
      <section className="border-b border-line bg-paper px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="eyebrow text-signal">The idea</p>
              <h2 className="title mt-4">One horizon. Seven crafts.</h2>
            </div>
            <p className="lede text-mute">
              We treat strategy, product, growth, capital readiness, intelligence, and talent
              as points on the same line — so execution does not break between teams.
            </p>
          </motion.div>

          <div className="mt-14">
            <div className="horizon mb-10" />
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  t: 'Aligned',
                  d: 'Design through hiring share one brief, one timeline, one definition of done.',
                },
                {
                  t: 'Directed',
                  d: 'We start from the outcome you need — then choose the craft that moves the line.',
                },
                {
                  t: 'Intelligent',
                  d: 'AI compresses busywork while people keep judgment where it matters.',
                },
              ].map((item, i) => (
                <motion.div key={item.t} {...fade} transition={{ ...fade.transition, delay: i * 0.05 }}>
                  <p className="font-display text-sm font-semibold tracking-[0.16em] text-signal">
                    0{i + 1}
                  </p>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.03em]">
                    {item.t}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute">{item.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence */}
      <section className="band-night px-4 py-20 text-white md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade}>
            <p className="eyebrow text-signal">Intelligence</p>
            <h2 className="title mt-4 max-w-xl">AI on the operating horizon.</h2>
            <p className="lede mt-4 max-w-xl text-white/60">
              Agents and workflows that update real systems — with clear human handoffs.
            </p>
          </motion.div>

          <div className="horizon-light mt-12" />

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.ul className="space-y-0" {...fade}>
              {aiHighlights.map((h, idx) => (
                <li
                  key={h.title}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-b border-white/10 py-6 last:border-0"
                >
                  <span className="font-display text-lg font-semibold text-signal">0{idx + 1}</span>
                  <div>
                    <p className="font-semibold tracking-[-0.02em]">{h.title}</p>
                    <p className="mt-1.5 text-sm text-white/55">{h.body}</p>
                  </div>
                </li>
              ))}
            </motion.ul>
            <motion.div {...fade}>
              <img
                src="/media/svc-aiops.jpg"
                alt="AI operations"
                className="aspect-[4/3] w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <div id="services" className="scroll-mt-24">
        <div className="bg-paper px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow text-signal">Services</p>
            <h2 className="title mt-4">Crafts on the line.</h2>
            <div className="horizon mt-10" />
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
                  <p className="eyebrow text-signal">{s.num}</p>
                  <h2 className="title mt-3">{s.title}</h2>
                  <p className="mt-3 text-lg font-semibold tracking-[-0.02em] text-ink/85">
                    {s.tagline}
                  </p>
                  <p className="lede mt-4 text-mute">{s.summary}</p>
                  <ul className="mt-7 space-y-3">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm font-medium">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" strokeWidth={2.5} />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 bg-night px-5 py-3.5 text-sm font-semibold text-white hover:bg-signal"
                  >
                    Discuss {s.title} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div {...fade} className="relative">
                  <div className="absolute left-0 right-0 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                    <div className="horizon" />
                  </div>
                  <img
                    src={s.image}
                    alt={s.title}
                    className="relative z-0 aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </section>
          )
        })}
      </div>

      {/* CTA */}
      <section className="bg-paper px-4 py-20 md:px-6 md:py-24">
        <motion.div className="mx-auto max-w-6xl" {...fade}>
          <div className="horizon mb-10" />
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="eyebrow text-signal">Begin</p>
              <h2 className="title mt-4">Extend the horizon with us.</h2>
              <p className="lede mt-4 max-w-lg text-mute">
                Share your stage. We’ll map design, build, growth, funding, automation, and
                hiring into one clear line.
              </p>
            </div>
            <div className="lg:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-signal px-5 py-3.5 text-sm font-semibold text-white hover:bg-signal-deep"
              >
                Start a conversation <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
