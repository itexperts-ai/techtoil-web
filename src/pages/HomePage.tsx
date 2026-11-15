import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Check, Bot, Workflow, ShieldCheck, Sparkles } from 'lucide-react'
import { aiHighlights, services } from '../data/services'
import { AiOrbitPanel } from '../components/ai/AiOrbitPanel'
import { AimRelayGraph } from '../components/ai/AimRelayGraph'

const fade = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
}

const steps = [
  { n: '01', t: 'Intake', d: 'Clarify stage, constraints, and the outcome that matters.' },
  { n: '02', t: 'Route', d: 'Map craft + agents that move the outcome.' },
  { n: '03', t: 'Run', d: 'Ship product, growth, and automation in shared sprints.' },
  { n: '04', t: 'Deliver', d: 'Hand over systems people and agents can run together.' },
]

const aiPillars = [
  {
    icon: Bot,
    t: 'Agents that act',
    d: 'Support, qualification, and ops agents that update your systems — not just chat.',
  },
  {
    icon: Workflow,
    t: 'Governed workflows',
    d: 'Mapped processes with clear triggers, tools, and audit trails.',
  },
  {
    icon: ShieldCheck,
    t: 'Human control',
    d: 'Handoffs stay with your team wherever judgment matters.',
  },
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
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src="/media/hero.jpg"
            alt=""
            className="h-[115%] w-full object-cover object-[62%_center]"
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
            <div className="flex flex-wrap items-center gap-2">
              <span className="ai-chip">AIM · Intelligence</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-accent">
                <Sparkles className="h-3.5 w-3.5" /> Product · Growth · AI
              </span>
            </div>
            <h1 className="display mt-6 text-ink">
              Vision to a business that <span className="text-accent">runs.</span>
            </h1>
            <p className="lede mt-5 max-w-md text-mute">
              Design, build, grow, fund, automate, and hire — with AI agents and workflows
              designed into the operating system.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#intelligence" className="btn-primary">
                See AI layer <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link to="/contact" className="btn-ghost">
                Book a call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Relay graph + why */}
      <section className="px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div {...fade}>
            <p className="eyebrow text-accent">Relay</p>
            <h2 className="title mt-4">AIM is the hub. Seven crafts on the edges.</h2>
            <p className="mt-4 text-mute">
              Services are nodes on one graph — agents traverse the edges. Stop stitching
              vendors; keep product, growth, capital, AI ops, and talent on a shared plan.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                'Connected craft on one brief',
                'Outcome first — then craft + agents',
                'Automation with human control',
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fade}>
            <AimRelayGraph />
          </motion.div>
        </div>
      </section>

      {/* AI Intelligence — designed, not just text */}
      <section id="intelligence" className="band-ai scroll-mt-24 px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fade}>
            <p className="ai-chip">AI operations</p>
            <h2 className="title mt-5">Intelligence designed into the product.</h2>
            <p className="lede mt-4 text-mute">
              Not a bolt-on chatbot. Agents, workflows, and handoffs modeled as a visible
              operating layer — with AIM at the center.
            </p>

            <div className="mt-10 space-y-5">
              {aiPillars.map((p) => (
                <div key={p.t} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display font-bold tracking-[-0.02em]">{p.t}</p>
                    <p className="mt-1 text-sm text-mute">{p.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <ul className="mt-10 space-y-4 border-t border-line pt-8">
              {aiHighlights.map((h) => (
                <li key={h.title} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-ai" strokeWidth={2.5} />
                  <div>
                    <p className="font-semibold">{h.title}</p>
                    <p className="mt-1 text-sm text-mute">{h.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fade}>
            <AiOrbitPanel />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <div id="services" className="scroll-mt-24">
        <div className="bg-paper px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-accent">Services</p>
              <h2 className="title mt-3">Seven crafts. Full depth.</h2>
            </div>
            <p className="max-w-sm text-sm text-mute md:text-right">
              Product-level detail for every capability — from concept to hired teams.
            </p>
          </div>
        </div>

        {services.map((s, i) => {
          const reverse = i % 2 === 1
          const isAi = s.id === 'ai-automation'
          return (
            <section
              key={s.id}
              id={s.id}
              className={`scroll-mt-24 px-4 py-16 md:px-6 md:py-20 ${
                isAi ? 'band-ai' : reverse ? 'bg-bg' : 'bg-paper'
              }`}
            >
              <div
                className={`mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                  reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <motion.div {...fade}>
                  {isAi ? (
                    <p className="ai-chip">Flagship · AI</p>
                  ) : (
                    <p className="eyebrow text-accent">{s.num} · Service</p>
                  )}
                  <h2 className="title mt-4">{s.title}</h2>
                  <p className="mt-3 text-lg font-semibold tracking-[-0.02em] text-ink/85">
                    {s.tagline}
                  </p>
                  <p className="lede mt-4 text-mute">{s.summary}</p>
                  <ul className="mt-7 space-y-3">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm font-medium">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                          <Check className="h-3 w-3 text-accent" strokeWidth={2.5} />
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary mt-8">
                    Discuss {s.title} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div {...fade}>
                  <img
                    src={s.image}
                    alt={s.title}
                    className="aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-[0_30px_60px_-30px_rgba(12,18,34,0.45)]"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </section>
          )
        })}
      </div>

      {/* Process */}
      <section className="bg-paper px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade} className="max-w-2xl">
            <p className="eyebrow text-accent">Process</p>
            <h2 className="title mt-4">From brief to running systems.</h2>
          </motion.div>
          <div className="mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                className="relative border border-line bg-paper p-6 first:rounded-l-2xl last:rounded-r-2xl max-lg:rounded-2xl max-lg:mb-3"
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.05 }}
              >
                {i < steps.length - 1 && (
                  <span className="absolute right-0 top-1/2 hidden h-px w-3 translate-x-full bg-accent lg:block" />
                )}
                <p className="font-mono text-xs text-accent">{step.n}</p>
                <h3 className="mt-3 font-display text-lg font-bold tracking-[-0.02em]">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 md:px-6 md:py-24">
        <motion.div
          className="band-dark relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-8 py-14 text-white md:px-12 md:py-16"
          {...fade}
        >
          <p className="ai-chip !bg-ai/20 !text-ai">Next step</p>
          <h2 className="title mt-5 max-w-xl">Ready to map craft and AI into one plan?</h2>
          <p className="lede mt-4 max-w-lg text-white/55">
            Tell us your stage. We’ll design the product path and the agent layer together.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-white hover:bg-accent-bright"
          >
            Book a call <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
