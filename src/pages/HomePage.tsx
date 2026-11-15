import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Sparkles, Workflow, Shield, Check } from 'lucide-react'
import { Logo } from '../components/brand/Logo'
import { aiHighlights, services } from '../data/services'

const aimIcons = [Sparkles, Workflow, Shield]

const fadeUp = {
  initial: { opacity: 0, y: 32 },
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
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <div className="bg-bg">
      {/* Full-bleed atmospheric hero — not flat white */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src="/media/aim-ai.jpg"
            alt=""
            className="h-[120%] w-full object-cover object-center"
          />
        </motion.div>
        <div className="hero-veil absolute inset-0" />

        <motion.div
          className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 md:px-6 md:pb-20 lg:justify-center lg:pb-24"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <Logo to={null} size="hero" tone="light" />
            <h1 className="mt-8 max-w-2xl font-display text-[clamp(1.85rem,4.2vw,3rem)] font-bold leading-[1.15] tracking-[-0.03em] text-white">
              From vision to a business that runs — craft and AI on one path.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
              Design, build, grow, fund, automate, and hire — without seven disconnected vendors.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white px-5 py-3.5 text-sm font-bold text-ink transition hover:bg-mist"
              >
                Explore capabilities <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#ai"
                className="inline-flex items-center border border-white/35 bg-white/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                How we use AI
              </a>
            </div>
          </motion.div>

          <motion.div
            className="mt-14 hidden items-center gap-6 border-t border-white/20 pt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55 lg:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <span>Our AIM</span>
            <span className="h-px flex-1 bg-white/20" />
            <span>Seven capabilities</span>
            <span className="h-px w-16 bg-white/20" />
            <span>Scroll</span>
          </motion.div>
        </motion.div>
      </section>

      {/* AIM — slate contrast band */}
      <section id="aim" className="band-slate px-4 py-20 text-white md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp}>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#7dd3fc]">
              Our AIM
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-[-0.035em] md:text-5xl">
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
                  className="bg-slate/80 p-7 backdrop-blur-sm transition hover:bg-slate"
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                >
                  <Icon className="h-5 w-5 text-[#7dd3fc]" />
                  <h3 className="mt-5 font-display text-xl font-bold">{item.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{item.d}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI section — mid-tone surface */}
      <section id="ai" className="bg-surface px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <motion.div {...fadeUp}>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal">
              Artificial Intelligence
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.035em] md:text-4xl">
              AI built for operations — not demos.
            </h2>
            <p className="mt-4 text-soft md:text-lg">
              Support agents, CRM workflows, and reporting automation that remove
              friction without giving up control.
            </p>
            <div className="mt-8 space-y-0 border border-line">
              {aiHighlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  className={`flex gap-4 bg-bg/60 p-5 ${i > 0 ? 'border-t border-line' : ''}`}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" strokeWidth={2.5} />
                  <div>
                    <h3 className="font-display font-bold">{h.title}</h3>
                    <p className="mt-1 text-sm text-soft">{h.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <a
              href="#ai-automation"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue transition hover:gap-3"
            >
              AI Operations detail <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
          <motion.div className="relative" {...fadeUp}>
            <div className="absolute -left-3 top-6 hidden h-[calc(100%-3rem)] w-3 bg-teal md:block" />
            <img
              src="/media/svc-aiops.jpg"
              alt="AI operations"
              className="aspect-[4/3] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Services index */}
      <section id="services" className="border-y border-line bg-panel px-4 py-12 md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue">
            Seven capabilities
          </p>
          <h2 className="mt-2 font-display text-2xl font-extrabold md:text-3xl">
            Each service — full detail and imagery.
          </h2>
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group flex items-center justify-between gap-3 border border-line bg-surface px-4 py-3 text-sm font-semibold transition hover:border-blue hover:bg-bg"
              >
                <span>
                  <span className="mr-2 text-blue">{s.num}</span>
                  {s.title}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-faint transition group-hover:text-blue" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 7 services */}
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
              className={`mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                reverse ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <motion.div {...fadeUp}>
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-4xl font-extrabold text-mist md:text-5xl">
                    {s.num}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-teal">
                    Service
                  </span>
                </div>
                <h2 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.035em] md:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-2 text-lg font-semibold text-ink/80">{s.tagline}</p>
                <p className="mt-4 leading-relaxed text-soft md:text-lg">{s.summary}</p>
                <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                  {s.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 border border-line bg-surface/80 px-3.5 py-3 text-sm font-medium"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" strokeWidth={2.5} />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 bg-slate px-5 py-3 text-sm font-bold text-white transition hover:bg-blue"
                >
                  Discuss {s.title} <ArrowUpRight className="h-4 w-4" />
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

      {/* CTA */}
      <section className="px-4 py-20 md:px-6 md:py-28">
        <motion.div
          className="band-slate mx-auto max-w-6xl px-6 py-14 text-white md:px-12 md:py-16"
          {...fadeUp}
        >
          <h2 className="max-w-2xl font-display text-3xl font-extrabold tracking-[-0.035em] md:text-4xl">
            Ready to align AIM, AI, and the right capabilities?
          </h2>
          <p className="mt-4 max-w-xl text-white/70 md:text-lg">
            Tell us your stage. We map design, build, growth, funding, automation,
            and hiring into a clear next step.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-bold text-ink transition hover:bg-mist"
          >
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
