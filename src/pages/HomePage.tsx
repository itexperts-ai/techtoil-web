import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Sparkles, Workflow, Shield, Check } from 'lucide-react'
import { Logo } from '../components/brand/Logo'
import { aiHighlights, services } from '../data/services'

const aimIcons = [Sparkles, Workflow, Shield]

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
}

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '6%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <div className="bg-bg">
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src="/media/hero-studio.jpg"
            alt=""
            className="h-[118%] w-full object-cover object-[center_35%]"
          />
        </motion.div>
        <div className="hero-veil absolute inset-0" />

        <motion.div
          className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 md:px-6 md:pb-20 lg:justify-center lg:pb-24"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <Logo to={null} size="hero" tone="light" />
            <h1 className="mt-7 font-sans text-[clamp(1.65rem,3.4vw,2.35rem)] font-semibold leading-[1.25] tracking-[-0.025em] text-white">
              From vision to a business that runs — craft and AI on one path.
            </h1>
            <p className="type-lead mt-5 max-w-md text-white/72">
              Design, build, grow, fund, automate, and hire — without seven
              disconnected vendors.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white px-5 py-3 text-[0.8125rem] font-semibold tracking-[-0.01em] text-ink transition hover:bg-mist"
              >
                Explore capabilities <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#ai"
                className="inline-flex items-center border border-white/30 bg-white/8 px-5 py-3 text-[0.8125rem] font-semibold tracking-[-0.01em] text-white backdrop-blur-sm transition hover:bg-white/16"
              >
                How we use AI
              </a>
            </div>
          </motion.div>

          <motion.div
            className="mt-14 hidden items-center gap-6 border-t border-white/15 pt-5 type-kicker text-white/50 lg:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.55 }}
          >
            <span>Our AIM</span>
            <span className="h-px flex-1 bg-white/15" />
            <span>Seven capabilities</span>
            <span className="h-px w-14 bg-white/15" />
            <span>Scroll</span>
          </motion.div>
        </motion.div>
      </section>

      <section id="aim" className="band-slate px-4 py-20 text-white md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp}>
            <p className="type-kicker text-sky-300/90">Our AIM</p>
            <h2 className="mt-3 max-w-2xl font-sans text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em]">
              Strategy, product, growth, and intelligence — kept on one line.
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {[
              {
                t: 'One partner',
                d: 'Design, engineering, marketing, funding readiness, AI ops, and hiring stay connected.',
              },
              {
                t: 'Outcome first',
                d: 'We start from where you want to go — then choose the craft that moves it.',
              },
              {
                t: 'AI with control',
                d: 'Automate repetitive work while people keep judgment and ownership.',
              },
            ].map((item, i) => {
              const Icon = aimIcons[i]
              return (
                <motion.div
                  key={item.t}
                  className="bg-slate/85 p-7 transition hover:bg-slate"
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.07 }}
                >
                  <Icon className="h-4.5 w-4.5 text-sky-300" />
                  <h3 className="mt-5 text-[1.05rem] font-semibold tracking-[-0.02em]">
                    {item.t}
                  </h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-white/60">
                    {item.d}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="ai" className="bg-surface px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <motion.div {...fadeUp}>
            <p className="type-kicker text-teal">Artificial Intelligence</p>
            <h2 className="mt-3 font-sans text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold tracking-[-0.03em]">
              AI built for operations — not demos.
            </h2>
            <p className="type-lead mt-4 text-soft">
              Support agents, CRM workflows, and reporting automation that remove
              friction without giving up control.
            </p>
            <div className="mt-8 border border-line">
              {aiHighlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  className={`flex gap-4 bg-bg/50 p-5 ${i > 0 ? 'border-t border-line' : ''}`}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" strokeWidth={2.25} />
                  <div>
                    <h3 className="text-[0.95rem] font-semibold tracking-[-0.02em]">
                      {h.title}
                    </h3>
                    <p className="mt-1 text-[0.875rem] text-soft">{h.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <a
              href="#ai-automation"
              className="mt-7 inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-blue transition hover:gap-3"
            >
              AI Operations detail <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
          <motion.div className="relative" {...fadeUp}>
            <div className="absolute -left-3 top-6 hidden h-[calc(100%-3rem)] w-2.5 bg-teal md:block" />
            <img
              src="/media/svc-aiops.jpg"
              alt="AI operations"
              className="aspect-[4/3] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section id="services" className="border-y border-line bg-panel px-4 py-11 md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="type-kicker text-blue">Seven capabilities</p>
          <h2 className="mt-2 font-sans text-[clamp(1.35rem,2.4vw,1.85rem)] font-semibold tracking-[-0.025em]">
            Each service — full detail and imagery.
          </h2>
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group flex items-center justify-between gap-3 border border-line bg-surface px-4 py-3 text-[0.8125rem] font-medium transition hover:border-blue/40 hover:bg-bg"
              >
                <span>
                  <span className="mr-2 font-semibold text-blue">{s.num}</span>
                  {s.title}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-faint transition group-hover:text-blue" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {services.map((s, i) => {
        const reverse = i % 2 === 1
        return (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-24 border-b border-line px-4 py-16 md:px-6 md:py-20 ${
              reverse ? 'bg-bg' : 'bg-surface'
            }`}
          >
            <div
              className={`mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                reverse ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <motion.div {...fadeUp}>
                <div className="flex items-baseline gap-3">
                  <span className="text-[2.5rem] font-semibold tracking-[-0.04em] text-mist md:text-[3rem]">
                    {s.num}
                  </span>
                  <span className="type-kicker text-teal">Service</span>
                </div>
                <h2 className="mt-1 font-sans text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-[-0.03em]">
                  {s.title}
                </h2>
                <p className="mt-2 text-[1.05rem] font-medium text-ink/75">{s.tagline}</p>
                <p className="type-lead mt-4 text-soft">{s.summary}</p>
                <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                  {s.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 border border-line bg-surface/80 px-3.5 py-3 text-[0.8125rem] font-medium"
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

              <motion.div className="overflow-hidden" {...fadeUp}>
                <img
                  src={s.image}
                  alt={s.title}
                  className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </section>
        )
      })}

      <section className="px-4 py-20 md:px-6 md:py-24">
        <motion.div
          className="band-slate mx-auto max-w-6xl px-6 py-14 text-white md:px-12 md:py-16"
          {...fadeUp}
        >
          <h2 className="max-w-2xl font-sans text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold tracking-[-0.03em]">
            Ready to align AIM, AI, and the right capabilities?
          </h2>
          <p className="type-lead mt-4 max-w-xl text-white/65">
            Tell us your stage. We map design, build, growth, funding, automation,
            and hiring into a clear next step.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-white px-5 py-3 text-[0.8125rem] font-semibold text-ink transition hover:bg-mist"
          >
            Start a conversation <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
