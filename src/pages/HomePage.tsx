import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles, Workflow, Shield, Check } from 'lucide-react'
import { Logo } from '../components/brand/Logo'
import { aiHighlights, services } from '../data/services'

const aimIcons = [Sparkles, Workflow, Shield]

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
}

export function HomePage() {
  return (
    <div className="bg-bg">
      {/* Advanced light hero */}
      <section className="relative overflow-hidden mesh-light">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
          }}
        />
        <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-12 px-4 pb-20 pt-28 md:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:pb-24 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <Logo to={null} size="lg" />
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              Our AIM
            </div>
            <h1 className="mt-5 font-display text-[clamp(2.5rem,5.8vw,4.15rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-ink">
              From vision to a business that runs —
              <span className="bg-gradient-to-r from-blue to-cyan bg-clip-text text-transparent">
                {' '}
                craft + AI, together.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-soft md:text-lg">
              Techtoil helps you design, build, grow, prepare for funding, automate
              with AI, and hire — as one clear partner.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_32px_rgba(37,99,235,0.28)] transition hover:bg-blue-deep hover:shadow-[0_16px_40px_rgba(37,99,235,0.35)]"
              >
                View 7 capabilities <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#ai"
                className="inline-flex items-center rounded-full border border-line bg-white/90 px-6 py-3.5 text-sm font-bold text-ink shadow-sm backdrop-blur transition hover:border-blue/35 hover:text-blue"
              >
                AI details
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue/15 via-transparent to-cyan/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_40px_100px_rgba(15,23,42,0.1)] ring-1 ring-line">
              <img
                src="/media/aim-ai-light.jpg"
                alt="AI-powered business growth"
                className="aspect-[16/11] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/85 to-transparent p-5 pt-16">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan">
                  AI in the studio
                </p>
                <p className="mt-1 max-w-sm text-sm font-semibold text-ink">
                  Agents, workflows, and automation that keep operations moving.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AIM pillars */}
      <section id="aim" className="border-y border-line bg-surface px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp}>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue">Aim</p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl font-extrabold tracking-[-0.035em] md:text-4xl">
              Keep strategy, product, growth, and intelligence on one path.
            </h2>
          </motion.div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
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
                  className="group rounded-3xl border border-line bg-bg p-6 transition duration-300 hover:-translate-y-1 hover:border-blue/25 hover:bg-glow hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)]"
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-line transition group-hover:bg-blue group-hover:text-white">
                    <Icon className="h-5 w-5 text-blue group-hover:text-white" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold">{item.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-soft">{item.d}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI advanced section */}
      <section id="ai" className="px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fadeUp}>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan">
              Artificial Intelligence
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.035em] md:text-4xl">
              Advanced AI for real business operations.
            </h2>
            <p className="mt-4 text-soft md:text-lg">
              From support agents to CRM workflows and reporting automation —
              Techtoil builds AI that removes friction without losing control.
            </p>
            <div className="mt-8 space-y-3">
              {aiHighlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  className="flex gap-3 rounded-2xl border border-line bg-surface p-4 shadow-sm shadow-ink/[0.03]"
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint text-cyan">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <div>
                    <h3 className="font-display font-bold">{h.title}</h3>
                    <p className="mt-1 text-sm text-soft">{h.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <a
              href="#ai-automation"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue transition hover:gap-3 hover:text-blue-deep"
            >
              Open AI Operations detail <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
          <motion.div className="relative" {...fadeUp}>
            <div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-blue/10 to-cyan/15 blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface shadow-[0_28px_70px_rgba(15,23,42,0.08)]">
              <img
                src="/media/svc-aiops.jpg"
                alt="AI operations"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services jump rail */}
      <section id="services" className="sticky top-16 z-30 border-y border-line bg-white/90 backdrop-blur-xl md:top-[4.25rem]">
        <div className="mx-auto max-w-6xl px-4 py-4 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue">
                Seven capabilities
              </p>
              <h2 className="mt-1 font-display text-xl font-extrabold md:text-2xl">
                Full detail and imagery for every service.
              </h2>
            </div>
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 rounded-full border border-line bg-bg px-3.5 py-2 text-xs font-semibold text-soft transition hover:border-blue hover:bg-glow hover:text-blue"
              >
                <span className="text-blue">{s.num}</span> {s.title}
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
            className={`scroll-mt-36 border-b border-line px-4 py-16 md:scroll-mt-40 md:px-6 md:py-24 ${
              reverse ? 'bg-bg' : 'bg-surface'
            }`}
          >
            <div
              className={`mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                reverse ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <motion.div {...fadeUp}>
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm font-bold text-blue">{s.num}</span>
                  <span className="rounded-full bg-glow px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-blue">
                    Service
                  </span>
                </div>
                <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.035em] md:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-2 text-lg font-semibold text-ink/75">{s.tagline}</p>
                <p className="mt-4 leading-relaxed text-soft md:text-lg">{s.summary}</p>
                <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                  {s.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 rounded-xl border border-line bg-white px-3.5 py-3 text-sm font-medium shadow-sm shadow-ink/[0.02]"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan" strokeWidth={3} />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue transition hover:gap-3 hover:text-blue-deep"
                >
                  Discuss {s.title} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div
                className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[0_24px_60px_rgba(15,23,42,0.07)] ring-1 ring-white"
                {...fadeUp}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.03]"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </section>
        )
      })}

      {/* Light CTA */}
      <section className="px-4 py-20 md:px-6 md:py-28">
        <motion.div
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-line px-6 py-14 md:px-12 md:py-16"
          style={{
            background:
              'radial-gradient(ellipse 80% 80% at 100% 0%, rgba(37,99,235,0.12), transparent 50%), radial-gradient(ellipse 60% 70% at 0% 100%, rgba(8,145,178,0.12), transparent 45%), #ffffff',
          }}
          {...fadeUp}
        >
          <h2 className="max-w-2xl font-display text-3xl font-extrabold tracking-[-0.035em] md:text-4xl">
            Ready to align AIM, AI, and the right capabilities?
          </h2>
          <p className="mt-4 max-w-xl text-soft md:text-lg">
            Tell us your stage. We will map design, build, growth, funding,
            automation, and hiring into a clear next step.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_32px_rgba(37,99,235,0.28)] hover:bg-blue-deep"
          >
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
