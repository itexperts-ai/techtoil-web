import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Cpu, Layers, Rocket, Users } from 'lucide-react'
import { EcosystemVisual } from '../components/home/EcosystemVisual'
import { journeyStages, services } from '../data/services'
import { useState } from 'react'

const challenges = [
  { label: 'I have an idea but need clear direction', to: '/solutions/startup-consultancy' },
  { label: 'I need to design and develop a product', to: '/solutions/product-design' },
  { label: 'I want to acquire more customers', to: '/solutions/marketing' },
  { label: 'I need startup and funding guidance', to: '/solutions/funding-support' },
  { label: 'My operations are too manual', to: '/solutions/ai-automation' },
  { label: 'I need the right people for my business', to: '/solutions/hr-hiring' },
  { label: 'I want to scale my existing business', to: '/solutions' },
]

const diffs = [
  { icon: Layers, title: 'Strategy Meets Execution', body: 'Advisory that ships into product and process.' },
  { icon: Cpu, title: 'Technology Meets Business', body: 'Engineering tied to commercial outcomes.' },
  { icon: Rocket, title: 'AI Meets Operations', body: 'Automation that removes friction, not control.' },
  { icon: Users, title: 'Talent Meets Opportunity', body: 'On-role and off-role hiring when you scale.' },
]

export function HomePage() {
  const [stage, setStage] = useState(journeyStages[0].id)
  const active = journeyStages.find((s) => s.id === stage)!

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-electric/20 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-violet/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-2 lg:items-center lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan">
              AI-Powered Business Growth Partner
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-[3.25rem]">
              Build Smarter.
              <br />
              <span className="text-gradient">Grow Faster.</span>
              <br />
              Scale Without Limits.
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted md:text-lg">
              From product innovation and digital engineering to AI-powered operations,
              startup strategy, funding readiness, marketing, and talent — everything you
              need to move your business forward.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-electric px-5 py-3 text-sm font-bold hover:bg-electric/90"
              >
                Let&apos;s Build Together <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 rounded-md border border-line bg-white/5 px-5 py-3 text-sm font-bold hover:border-electric/40"
              >
                Explore Our Solutions
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/70">
              One partner. Seven capabilities. Unlimited possibilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <EcosystemVisual />
          </motion.div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="border-b border-line bg-surface/50 px-4 py-14 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            One Integrated Partner. Multiple Growth Capabilities.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {diffs.map((d) => (
              <div key={d.title} className="rounded-xl border border-line bg-midnight/60 p-5">
                <d.icon className="h-5 w-5 text-cyan" />
                <h3 className="mt-3 font-display text-base font-bold">{d.title}</h3>
                <p className="mt-2 text-sm text-muted">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="border-b border-line px-4 py-14 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold md:text-3xl max-w-2xl">
            Wherever You Are in Your Business Journey, We Help You Move Forward.
          </h2>
          <div className="mt-8 grid gap-2">
            {challenges.map((c) => (
              <Link
                key={c.label}
                to={c.to}
                className="group flex items-center justify-between gap-4 rounded-lg border border-line bg-surface/40 px-4 py-4 hover:border-electric/40 hover:bg-surface transition"
              >
                <span className="text-sm font-semibold md:text-base">{c.label}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted group-hover:text-cyan" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seven solutions — alternating layouts */}
      <section className="border-b border-line px-4 py-14 md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-cyan">
            Seven Core Solutions
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">
            Everything Your Business Needs to Move Forward.
          </h2>

          <div className="mt-10 space-y-6">
            {services.map((s, i) => {
              const reverse = i % 2 === 1
              return (
                <article
                  key={s.id}
                  className={`grid gap-6 overflow-hidden rounded-2xl border border-line bg-surface/40 p-5 md:p-7 lg:grid-cols-2 ${
                    reverse ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-3xl font-bold" style={{ color: s.accent }}>
                        {s.num}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-bold">{s.title}</h3>
                        <p className="text-xs text-muted">{s.category}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-lg font-semibold text-white/90">{s.tagline}</p>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{s.summary}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {s.capabilities.slice(0, 5).map((c) => (
                        <li
                          key={c}
                          className="rounded-full border border-line px-2.5 py-1 text-[11px] text-muted"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={s.path}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan hover:text-white"
                    >
                      Explore Solution <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div
                    className="relative min-h-[180px] rounded-xl border border-line grid place-items-center overflow-hidden"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${s.accent}33, transparent 55%), #0B1020`,
                    }}
                  >
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <div className="relative text-center px-6">
                      <p className="font-display text-5xl font-bold opacity-30">{s.num}</p>
                      <p className="mt-2 text-sm font-semibold">{s.short}</p>
                      <p className="mt-1 text-xs text-muted">Pillar of the Growth Ecosystem</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="border-b border-line bg-surface/40 px-4 py-14 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            Our Integrated Growth Ecosystem
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            IDEA → STRATEGY → DESIGN → DEVELOPMENT → LAUNCH → GROWTH → AUTOMATION → SCALE
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {journeyStages.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setStage(s.id)}
                className={`rounded-md px-3 py-2 text-xs font-bold uppercase tracking-wide transition ${
                  stage === s.id
                    ? 'bg-electric text-white'
                    : 'border border-line text-muted hover:text-white'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {active.services.map((id) => {
              const s = services.find((x) => x.id === id)!
              return (
                <Link
                  key={id}
                  to={s.path}
                  className="rounded-xl border border-line bg-midnight/70 p-4 hover:border-electric/40"
                >
                  <span className="font-display text-xs font-bold text-electric">{s.num}</span>
                  <p className="mt-1 font-semibold">{s.title}</p>
                  <p className="mt-1 text-xs text-muted">{s.tagline}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI band */}
      <section className="border-b border-line px-4 py-14 md:px-6">
        <div className="mx-auto max-w-6xl rounded-2xl border border-violet/30 bg-gradient-to-br from-surface via-midnight to-surface-2 p-8 md:p-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet">
            AI Innovation
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">
            Your Business, Powered by Intelligence.
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Improve customer experience, sales, marketing, recruitment, internal workflows,
            and business intelligence — with automation you can govern.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold text-white/80">
            {['Customer Query', 'AI Understands', 'Classifies', 'Checks Data', 'Executes', 'Updates CRM', 'Reports'].map(
              (step, i, arr) => (
                <span key={step} className="inline-flex items-center gap-3">
                  <span className="rounded-md border border-line bg-white/5 px-2.5 py-1.5">{step}</span>
                  {i < arr.length - 1 && <span className="text-cyan">→</span>}
                </span>
              ),
            )}
          </div>
          <Link
            to="/solutions/ai-automation"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-violet px-5 py-3 text-sm font-bold text-white"
          >
            Explore AI Automation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* How we work teaser */}
      <section className="border-b border-line px-4 py-14 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold">How We Work</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-5">
            {['Understand', 'Strategize', 'Design', 'Execute', 'Optimize & Scale'].map((step, i) => (
              <div key={step} className="rounded-xl border border-line p-4">
                <p className="font-display text-xs text-electric">0{i + 1}</p>
                <p className="mt-2 text-sm font-bold">{step}</p>
              </div>
            ))}
          </div>
          <Link to="/how-we-work" className="mt-6 inline-flex text-sm font-bold text-cyan">
            See full process →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Your Next Big Move Starts Here.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Tell us where you want to go. Let&apos;s figure out how to get there.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-electric px-5 py-3 text-sm font-bold hover:bg-electric/90"
            >
              Start a Conversation
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-line px-5 py-3 text-sm font-bold hover:border-cyan/40"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
