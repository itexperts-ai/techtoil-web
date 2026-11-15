import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react'
import { Logo } from '../components/brand/Logo'
import { aiHighlights, services } from '../data/services'

const fade = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
}

const aims = [
  {
    n: '01',
    t: 'One partner',
    d: 'Design, engineering, marketing, funding readiness, AI ops, and hiring stay connected.',
  },
  {
    n: '02',
    t: 'Outcome first',
    d: 'We start from where you want to go — then choose the craft that moves it.',
  },
  {
    n: '03',
    t: 'AI with control',
    d: 'Automate repetitive work while people keep judgment and ownership.',
  },
]

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0])
  const lineScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.6])

  return (
    <div className="bg-bg">
      {/* Advanced full-bleed hero */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden grain">
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src="/media/hero-advance.jpg"
            alt=""
            className="h-[120%] w-full object-cover object-center"
          />
        </motion.div>
        <div className="hero-veil absolute inset-0" />

        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 border-r border-white/10 lg:block" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-16 hidden border-t border-white/10 lg:block" />

        <motion.div
          className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-14 pt-28 md:px-6 lg:justify-center lg:pb-20"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="type-mono text-white/45">Studio · Vision → Execution</p>
              <div className="mt-6">
                <Logo to={null} size="hero" tone="light" />
              </div>
              <motion.div
                className="mt-8 h-px origin-left bg-white/35"
                style={{ scaleX: lineScale }}
              />
              <h1 className="mt-8 max-w-xl type-display text-white">
                From vision to a business that runs.
              </h1>
              <p className="type-lead mt-5 max-w-md text-white/70">
                Craft and AI on one path — design, build, grow, fund, automate, and hire.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 bg-white px-5 py-3 text-[0.8125rem] font-semibold text-ink transition hover:bg-mist"
                >
                  Explore capabilities <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#ai"
                  className="inline-flex items-center gap-2 border border-white/25 bg-white/5 px-5 py-3 text-[0.8125rem] font-semibold text-white backdrop-blur-sm transition hover:bg-white/12"
                >
                  How we use AI
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hidden flex-col gap-6 text-right lg:flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.8 }}
            >
              <div>
                <p className="type-mono text-white/40">Chapter</p>
                <p className="mt-1 font-mono text-3xl font-medium text-white/90">01</p>
              </div>
              <div>
                <p className="type-mono text-white/40">Focus</p>
                <p className="mt-1 text-sm font-medium text-white/75">AIM + AI</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Capability marquee */}
      <div className="overflow-hidden border-y border-line bg-panel py-4">
        <div className="marquee gap-10 whitespace-nowrap px-4">
          {[...services, ...services].map((s, i) => (
            <span
              key={`${s.id}-${i}`}
              className="inline-flex items-center gap-3 text-[0.8125rem] font-medium text-ink/70"
            >
              <span className="font-mono text-[0.65rem] text-blue">{s.num}</span>
              {s.title}
              <span className="text-faint">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* AIM — editorial ink band */}
      <section id="aim" className="band-ink grain px-4 py-20 text-white md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]" {...fade}>
            <div>
              <p className="type-mono text-sky-300/80">01 — Our AIM</p>
              <h2 className="type-title mt-4">
                Strategy, product, growth, and intelligence — kept on one line.
              </h2>
            </div>
            <p className="type-lead max-w-xl self-end text-white/60 lg:pb-1">
              Techtoil exists so ambitious teams do not assemble seven vendors for one
              outcome. We align craft and AI around where the business needs to go.
            </p>
          </motion.div>

          <div className="mt-16 grid border-t border-white/10 md:grid-cols-3">
            {aims.map((item, i) => (
              <motion.div
                key={item.n}
                className={`border-white/10 py-8 md:px-6 md:py-10 ${i > 0 ? 'md:border-l' : ''} ${i < aims.length - 1 ? 'border-b md:border-b-0' : ''}`}
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.08 }}
              >
                <p className="font-mono text-xs text-white/35">{item.n}</p>
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em]">{item.t}</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-white/55">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI — sticky asymmetric */}
      <section id="ai" className="bg-surface px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <motion.div className="lg:sticky lg:top-28 lg:self-start" {...fade}>
            <p className="type-mono text-teal">02 — Artificial Intelligence</p>
            <h2 className="type-title mt-4">AI built for operations — not demos.</h2>
            <p className="type-lead mt-5 text-soft">
              Support agents, CRM workflows, and reporting automation that remove
              friction without giving up control.
            </p>
            <a
              href="#ai-automation"
              className="mt-8 inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-blue transition hover:gap-3"
            >
              Open AI Operations <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          <div className="space-y-6">
            <motion.div {...fade}>
              <img
                src="/media/svc-aiops.jpg"
                alt="AI operations"
                className="aspect-[16/10] w-full object-cover"
              />
            </motion.div>
            <div className="border border-line bg-bg/40">
              {aiHighlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  className={`flex gap-4 p-5 md:p-6 ${i > 0 ? 'border-t border-line' : ''}`}
                  {...fade}
                  transition={{ ...fade.transition, delay: i * 0.06 }}
                >
                  <span className="font-mono text-[0.65rem] text-teal">0{i + 1}</span>
                  <div>
                    <h3 className="text-[0.95rem] font-semibold tracking-[-0.02em]">
                      {h.title}
                    </h3>
                    <p className="mt-1.5 text-[0.875rem] text-soft">{h.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services index — advanced grid */}
      <section id="services" className="border-y border-line bg-panel px-4 py-14 md:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div className="flex flex-wrap items-end justify-between gap-4" {...fade}>
            <div>
              <p className="type-mono text-blue">03 — Capabilities</p>
              <h2 className="type-title mt-3">Seven services. Full depth.</h2>
            </div>
            <p className="max-w-xs text-[0.875rem] text-soft">
              Each capability ships with detail, imagery, and a clear next conversation.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <motion.a
                key={s.id}
                href={`#${s.id}`}
                className="group flex min-h-[9.5rem] flex-col justify-between bg-surface p-5 transition hover:bg-bg"
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.03 }}
              >
                <span className="font-mono text-[0.7rem] text-blue">{s.num}</span>
                <span className="flex items-end justify-between gap-2">
                  <span className="text-[0.95rem] font-semibold tracking-[-0.02em] leading-snug">
                    {s.title}
                  </span>
                  <ArrowUpRight className="mb-0.5 h-4 w-4 shrink-0 text-faint transition group-hover:text-blue" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Service spreads */}
      {services.map((s, i) => {
        const reverse = i % 2 === 1
        return (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-24 border-b border-line px-4 py-16 md:px-6 md:py-24 ${
              reverse ? 'bg-bg' : 'bg-surface'
            }`}
          >
            <div
              className={`mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-12 lg:gap-8 ${
                reverse ? '' : ''
              }`}
            >
              <motion.div
                className={`lg:col-span-5 ${reverse ? 'lg:order-2 lg:col-start-8' : ''}`}
                {...fade}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-4xl font-medium tracking-tight text-mist md:text-5xl">
                    {s.num}
                  </span>
                  <span className="type-mono text-teal">Service</span>
                </div>
                <h2 className="type-title mt-3">{s.title}</h2>
                <p className="mt-3 text-[1.05rem] font-medium text-ink/80">{s.tagline}</p>
                <p className="type-lead mt-4 text-soft">{s.summary}</p>
                <ul className="mt-8 space-y-0 border border-line">
                  {s.details.map((d, di) => (
                    <li
                      key={d}
                      className={`flex items-start gap-3 bg-surface/70 px-4 py-3 text-[0.8125rem] font-medium ${
                        di > 0 ? 'border-t border-line' : ''
                      }`}
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" strokeWidth={2.25} />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 bg-slate px-5 py-3 text-[0.8125rem] font-semibold text-white transition hover:bg-blue"
                >
                  Discuss {s.title} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>

              <motion.div
                className={`relative lg:col-span-7 ${reverse ? 'lg:order-1 lg:col-start-1' : ''}`}
                {...fade}
              >
                <div className="absolute -left-3 top-8 hidden h-24 w-px bg-blue lg:block" />
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

      {/* Closing CTA */}
      <section className="px-4 py-20 md:px-6 md:py-28">
        <motion.div className="band-ink grain mx-auto max-w-6xl px-6 py-14 text-white md:px-12 md:py-16" {...fade}>
          <p className="type-mono text-white/40">Next</p>
          <h2 className="type-title mt-4 max-w-2xl">
            Ready to align AIM, AI, and the right capabilities?
          </h2>
          <p className="type-lead mt-5 max-w-xl text-white/60">
            Tell us your stage. We map design, build, growth, funding, automation, and
            hiring into a clear next step.
          </p>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2 bg-white px-5 py-3 text-[0.8125rem] font-semibold text-ink transition hover:bg-mist"
          >
            Start a conversation <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
