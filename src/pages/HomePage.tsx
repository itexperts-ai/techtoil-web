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
      {/* Approved hero composition — retokened to Porcelain Cobalt */}
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
                className="inline-flex items-center gap-2 bg-cobalt px-5 py-3.5 text-sm font-bold text-white hover:bg-cobalt-deep"
              >
                View services <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center border border-ink/15 bg-porcelain/85 px-5 py-3.5 text-sm font-bold text-ink backdrop-blur-sm hover:border-ink/30"
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-line bg-noir px-4 py-5 text-white md:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white/65">
          <span>Product Design</span>
          <span className="text-cobalt-bright">/</span>
          <span>Development</span>
          <span className="text-cobalt-bright">/</span>
          <span>Marketing</span>
          <span className="text-cobalt-bright">/</span>
          <span>Consultancy</span>
          <span className="text-cobalt-bright">/</span>
          <span>Funding</span>
          <span className="text-cobalt-bright">/</span>
          <span>AI Ops</span>
          <span className="text-cobalt-bright">/</span>
          <span>Hiring</span>
        </div>
      </section>

      <section className="bg-porcelain px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade} className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow text-cobalt">Direction</p>
              <h2 className="title mt-4 max-w-xl">
                Strategy, product, growth, and intelligence — one path.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-mute">
              Connected crafts so vision does not stall between teams, tools, or stages.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-4 lg:grid-cols-12">
            {[
              {
                t: 'One partner',
                d: 'Design, engineering, marketing, funding, AI ops, and hiring stay connected.',
                span: 'lg:col-span-4',
              },
              {
                t: 'Outcome first',
                d: 'We start from where you want to go — then choose the craft that moves it.',
                span: 'lg:col-span-4',
              },
              {
                t: 'AI with control',
                d: 'Automate repetitive work while people keep judgment and ownership.',
                span: 'lg:col-span-4',
              },
            ].map((item, i) => (
              <motion.div
                key={item.t}
                className={`relative overflow-hidden border border-line bg-surface p-7 md:p-8 ${item.span}`}
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.05 }}
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-cobalt/5" />
                <p className="font-display text-5xl font-extrabold tracking-[-0.08em] text-cobalt/15">
                  0{i + 1}
                </p>
                <h3 className="mt-6 font-display text-xl font-bold tracking-[-0.03em]">{item.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="band-noir px-4 py-20 text-white md:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div {...fade}>
            <p className="eyebrow text-cobalt-bright">Intelligence</p>
            <h2 className="title mt-4">AI built into operations.</h2>
            <p className="lede mt-4 text-white/65">
              Agents, workflows, and automation that remove friction — without giving up
              control.
            </p>
            <ul className="mt-10 space-y-1">
              {aiHighlights.map((h, idx) => (
                <li
                  key={h.title}
                  className="grid grid-cols-[auto_1fr] gap-4 border-t border-white/10 py-5"
                >
                  <span className="font-display text-sm font-bold text-cobalt-bright">
                    0{idx + 1}
                  </span>
                  <div>
                    <p className="font-bold tracking-[-0.02em]">{h.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/55">{h.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fade} className="relative">
            <div className="absolute -inset-3 border border-cobalt/40" />
            <img
              src="/media/svc-aiops.jpg"
              alt="AI operations"
              className="relative aspect-[4/3] w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-noir/80 px-4 py-3 text-sm font-semibold backdrop-blur-md">
              Governed agents · Human judgment · Real systems
            </div>
          </motion.div>
        </div>
      </section>

      <div id="services" className="scroll-mt-24">
        <div className="border-t border-line bg-porcelain px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-cobalt">Capabilities</p>
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
                reverse ? 'bg-bg' : 'bg-porcelain'
              }`}
            >
              <div
                className={`mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <motion.div {...fade}>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center bg-cobalt font-display text-sm font-extrabold text-white">
                      {s.num}
                    </span>
                    <span className="eyebrow text-faint">Service</span>
                  </div>
                  <h2 className="title mt-6">{s.title}</h2>
                  <p className="mt-3 text-lg font-semibold tracking-[-0.02em] text-ink/85">
                    {s.tagline}
                  </p>
                  <p className="lede mt-4 text-mute">{s.summary}</p>
                  <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                    {s.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2.5 border border-line bg-surface px-3.5 py-3 text-sm font-semibold"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-cobalt"
                          strokeWidth={2.5}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 bg-noir px-5 py-3.5 text-sm font-bold text-white hover:bg-cobalt"
                  >
                    Discuss {s.title} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div {...fade} className="relative overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-cobalt" />
                </motion.div>
              </div>
            </section>
          )
        })}
      </div>

      <section className="bg-porcelain px-4 py-20 md:px-6 md:py-24">
        <motion.div className="mx-auto max-w-6xl overflow-hidden" {...fade}>
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="band-noir px-8 py-14 text-white md:px-12 md:py-16">
              <p className="eyebrow text-cobalt-bright">Next step</p>
              <h2 className="title mt-4 max-w-xl">Ready for a clear next move?</h2>
              <p className="lede mt-4 max-w-lg text-white/60">
                Tell us your stage. We map design, build, growth, funding, automation, and
                hiring into one plan.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-cobalt px-5 py-3.5 text-sm font-bold text-white hover:bg-cobalt-bright hover:text-noir"
              >
                Start a conversation <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative min-h-[16rem] bg-cobalt">
              <img
                src="/media/svc-design.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-luminosity"
              />
              <div className="relative flex h-full flex-col justify-between p-8 text-white md:p-10">
                <p className="eyebrow text-white/70">Studio promise</p>
                <div>
                  <p className="font-display text-3xl font-extrabold tracking-[-0.04em] md:text-4xl">
                    Vision → Execution
                  </p>
                  <p className="mt-3 max-w-xs text-sm text-white/85">
                    Product, growth, capital readiness, AI ops, and talent — connected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
