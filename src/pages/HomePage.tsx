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
      {/* Preferred hero — kept */}
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

      {/* Unique path timeline */}
      <section className="relative overflow-hidden bg-quartz px-4 py-20 md:px-6 md:py-28">
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-teal/8 blur-3xl" />
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade} className="max-w-2xl">
            <p className="eyebrow text-teal">The path</p>
            <h2 className="title mt-4">
              Strategy, product, growth, and intelligence — one continuous line.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-mute md:text-base">
              Connected crafts so vision does not stall between teams, tools, or stages.
            </p>
          </motion.div>

          <div className="relative mt-16">
            <div className="path-line absolute left-0 right-0 top-5 hidden h-0.5 md:block" />
            <div className="grid gap-10 md:grid-cols-3 md:gap-8">
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
                  className="relative"
                  {...fade}
                  transition={{ ...fade.transition, delay: i * 0.08 }}
                >
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center bg-teal font-display text-sm font-bold text-white">
                    0{i + 1}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.03em]">
                    {item.t}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute">{item.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Editorial AI */}
      <section className="band-slate px-4 py-20 text-white md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div {...fade}>
              <p className="eyebrow text-teal-bright">Intelligence</p>
              <h2 className="title mt-4">AI built into operations.</h2>
            </motion.div>
            <motion.p className="lede text-white/60" {...fade}>
              Agents, workflows, and automation that remove friction — without giving up
              control.
            </motion.p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <motion.div {...fade} className="relative">
              <div className="absolute -inset-3 border border-teal-bright/25" />
              <img
                src="/media/svc-aiops.jpg"
                alt="AI operations"
                className="relative aspect-[4/3] w-full object-cover"
              />
            </motion.div>
            <motion.ul className="flex flex-col justify-center space-y-0" {...fade}>
              {aiHighlights.map((h, idx) => (
                <li
                  key={h.title}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-t border-white/10 py-6 first:border-0 first:pt-0"
                >
                  <span className="font-display text-2xl font-semibold tracking-[-0.06em] text-teal-bright/80">
                    0{idx + 1}
                  </span>
                  <div>
                    <p className="font-semibold tracking-[-0.02em]">{h.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/55">{h.body}</p>
                  </div>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Services — magazine numbers */}
      <div id="services" className="scroll-mt-24">
        <div className="border-t border-line bg-quartz px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-teal">Capabilities</p>
              <h2 className="title mt-3">Seven services. One studio.</h2>
            </div>
            <p className="max-w-sm text-sm text-mute">
              Deep product-style detail for every capability — from design to hiring.
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
                reverse ? 'bg-bg' : 'bg-quartz'
              }`}
            >
              <div
                className={`mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <motion.div {...fade} className="relative">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -left-2 -top-8 font-display text-[6.5rem] font-bold leading-none tracking-[-0.08em] text-teal/[0.07] md:text-[8rem]"
                  >
                    {s.num}
                  </span>
                  <div className="relative">
                    <p className="eyebrow text-teal">Service · {s.num}</p>
                    <h2 className="title mt-4">{s.title}</h2>
                    <p className="mt-3 text-lg font-medium tracking-[-0.02em] text-ink/80">
                      {s.tagline}
                    </p>
                    <p className="lede mt-4 text-mute">{s.summary}</p>
                    <ul className="mt-8 space-y-0">
                      {s.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-3 border-t border-line py-3 text-sm font-medium first:border-0 first:pt-0"
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
                  </div>
                </motion.div>
                <motion.div {...fade} className="relative overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-y-0 left-0 w-1.5 bg-teal" />
                </motion.div>
              </div>
            </section>
          )
        })}
      </div>

      {/* CTA */}
      <section className="bg-quartz px-4 py-20 md:px-6 md:py-24">
        <motion.div
          className="mx-auto grid max-w-6xl overflow-hidden shadow-[0_30px_80px_-40px_rgba(11,18,21,0.35)] lg:grid-cols-[1.2fr_0.8fr]"
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
            <div className="relative flex h-full flex-col justify-between p-8 text-white md:p-10">
              <p className="eyebrow text-white/70">Studio promise</p>
              <div>
                <p className="font-display text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                  Vision → Execution
                </p>
                <p className="mt-3 max-w-xs text-sm text-white/80">
                  Product, growth, capital readiness, AI ops, and talent — connected.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
