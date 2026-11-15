import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { Logo } from '../components/brand/Logo'
import { aiHighlights, services } from '../data/services'

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
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
      {/* Keep this top section — user confirmed perfect */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src="/media/hero.jpg"
            alt=""
            className="h-[115%] w-full object-cover object-[68%_center]"
          />
        </motion.div>
        <div className="hero-wash absolute inset-0" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-16 pt-28 md:px-6 md:pb-20">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Logo to={null} size="hero" />
            <h1 className="display mt-8 text-ink">
              From vision to a business that runs.
            </h1>
            <p className="lede mt-5 max-w-md text-mute">
              Design, build, grow, fund, automate, and hire — with AI in the loop.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-teal px-5 py-3.5 text-sm font-semibold text-white hover:bg-teal-deep"
              >
                View services <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center border border-ink/15 bg-quartz/80 px-5 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm hover:border-ink/30"
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Improved direction */}
      <section className="relative overflow-hidden bg-quartz px-4 py-20 md:px-6 md:py-28">
        <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-teal/5 blur-3xl" />
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade} className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-teal">Direction</p>
              <h2 className="title mt-4 max-w-xl">
                Strategy, product, growth, and intelligence — one path.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-mute md:pb-1">
              Connected crafts so vision does not stall between teams, tools, or stages.
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
                className="group relative border border-line bg-surface p-7 transition hover:border-teal/35 md:p-8"
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.05 }}
              >
                <span className="absolute left-0 top-0 h-full w-1 bg-teal/0 transition group-hover:bg-teal" />
                <p className="font-display text-3xl font-semibold tracking-[-0.06em] text-teal/25">
                  0{i + 1}
                </p>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-[-0.03em]">
                  {item.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Improved AI band */}
      <section className="band-slate px-4 py-20 text-white md:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div {...fade}>
            <p className="eyebrow text-teal-bright">Intelligence</p>
            <h2 className="title mt-4">AI built into operations.</h2>
            <p className="lede mt-4 text-white/65">
              Agents, workflows, and automation that remove friction — without giving up
              control.
            </p>
            <ul className="mt-10 space-y-6">
              {aiHighlights.map((h) => (
                <li key={h.title} className="flex gap-4 border-t border-white/10 pt-6 first:border-0 first:pt-0">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center bg-teal-bright/15">
                    <Check className="h-4 w-4 text-teal-bright" strokeWidth={2.5} />
                  </span>
                  <div>
                    <p className="font-semibold tracking-[-0.02em]">{h.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/55">{h.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fade} className="relative">
            <div className="absolute -left-3 -top-3 h-full w-full border border-teal-bright/30" />
            <img
              src="/media/svc-aiops.jpg"
              alt="AI operations"
              className="relative aspect-[4/3] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Improved services */}
      <div id="services" className="scroll-mt-24">
        <div className="border-t border-line bg-quartz px-4 py-14 md:px-6 md:py-16">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow text-teal">Capabilities</p>
            <h2 className="title mt-3">Seven services. One studio.</h2>
          </div>
        </div>

        {services.map((s, i) => {
          const reverse = i % 2 === 1
          return (
            <section
              key={s.id}
              id={s.id}
              className={`scroll-mt-24 border-t border-line px-4 py-16 md:px-6 md:py-20 ${
                reverse ? 'bg-bg' : 'bg-quartz'
              }`}
            >
              <div
                className={`mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <motion.div {...fade}>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-4xl font-semibold tracking-[-0.06em] text-teal">
                      {s.num}
                    </span>
                    <span className="h-px flex-1 bg-line" />
                    <span className="eyebrow text-faint">Service</span>
                  </div>
                  <h2 className="title mt-5">{s.title}</h2>
                  <p className="mt-3 text-lg font-medium tracking-[-0.02em] text-ink/80">
                    {s.tagline}
                  </p>
                  <p className="lede mt-4 text-mute">{s.summary}</p>
                  <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                    {s.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2.5 bg-surface px-3.5 py-3 text-sm font-medium shadow-[inset_0_0_0_1px_rgba(11,18,21,0.08)]"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                          strokeWidth={2.5}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 bg-slate px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-teal"
                  >
                    Discuss {s.title} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div {...fade} className="relative">
                  <div className="absolute bottom-0 right-0 h-1/3 w-1 bg-teal" />
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

      {/* Improved CTA */}
      <section className="bg-quartz px-4 py-20 md:px-6 md:py-24">
        <motion.div
          className="mx-auto grid max-w-6xl overflow-hidden lg:grid-cols-[1.2fr_0.8fr]"
          {...fade}
        >
          <div className="band-slate px-8 py-14 text-white md:px-12 md:py-16">
            <p className="eyebrow text-teal-bright">Next step</p>
            <h2 className="title mt-4 max-w-xl">Ready for a clear next move?</h2>
            <p className="lede mt-4 max-w-lg text-white/60">
              Tell us your stage. We map design, build, growth, funding, automation, and
              hiring into one plan.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-teal-bright px-5 py-3.5 text-sm font-semibold text-slate hover:bg-white"
            >
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative min-h-[14rem] overflow-hidden bg-teal">
            <img
              src="/media/svc-design.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity"
            />
            <div className="relative flex h-full flex-col justify-end p-8 text-white md:p-10">
              <p className="font-display text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                Vision → Execution
              </p>
              <p className="mt-3 max-w-xs text-sm text-white/80">
                Product, growth, capital readiness, AI ops, and talent — connected.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
