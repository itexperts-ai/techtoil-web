import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Logo } from '../components/brand/Logo'
import { aiHighlights, services } from '../data/services'

export function HomePage() {
  return (
    <div>
      {/* HERO — AIM + AI visual */}
      <section className="relative min-h-[100svh] overflow-hidden bg-void text-white">
        <img
          src="/media/aim-ai.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-void/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/40" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 md:px-6 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-3xl"
          >
            <Logo to={null} size="lg" light />
            <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan">
              Our AIM
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em]">
              From vision to a business that runs —
              <span className="text-cyan"> powered by craft and AI.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-mute-dark md:text-lg">
              Techtoil helps teams design, build, grow, raise readiness, automate
              operations with AI, and hire the right people — as one integrated
              partner.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-blue px-5 py-3.5 text-sm font-bold text-white hover:bg-blue-deep"
              >
                Explore 7 capabilities <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#ai"
                className="inline-flex items-center rounded-full border border-line-dark px-5 py-3.5 text-sm font-bold text-white hover:border-cyan/50"
              >
                See AI approach
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AIM detail strip */}
      <section id="aim" className="border-b border-line bg-white px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {[
            {
              t: 'One partner',
              d: 'Strategy, product, growth, AI ops, and talent stay in one conversation.',
            },
            {
              t: 'Clear outcomes',
              d: 'We start from where you want to go — then bring the craft that moves it.',
            },
            {
              t: 'AI where it earns',
              d: 'Automation for real work: support, sales, reporting, and internal ops.',
            },
          ].map((item) => (
            <div key={item.t} className="border-t border-line pt-5">
              <h2 className="font-display text-xl font-bold">{item.t}</h2>
              <p className="mt-2 text-sm text-mute md:text-base">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI section — image + details */}
      <section id="ai" className="bg-ice px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue">
              Artificial Intelligence
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.03em] md:text-4xl">
              AI that removes friction from the business.
            </h2>
            <p className="mt-4 text-mute md:text-lg">
              We design AI-powered operations — agents, workflows, and
              integrations — so teams stop drowning in repetitive work and stay
              focused on decisions that matter.
            </p>
            <div className="mt-8 space-y-4">
              {aiHighlights.map((h) => (
                <div key={h.title} className="rounded-2xl border border-line bg-white p-4">
                  <h3 className="font-display font-bold text-ink">{h.title}</h3>
                  <p className="mt-1 text-sm text-mute">{h.body}</p>
                </div>
              ))}
            </div>
            <a
              href="#ai-automation"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue hover:text-blue-deep"
            >
              Jump to AI Operations detail <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-[1.75rem] border border-line"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img src="/media/svc-aiops.jpg" alt="AI operations automation" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Services index jump links */}
      <section id="services" className="border-y border-line bg-white px-4 py-10 md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue">
            Seven capabilities
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">
            Detail, images, and outcomes for every pillar.
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-mute hover:border-blue hover:text-blue"
              >
                {s.num} {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* All 7 services — alternating image + detail */}
      {services.map((s, i) => {
        const reverse = i % 2 === 1
        return (
          <section
            key={s.id}
            id={s.id}
            className={`border-b border-line px-4 py-16 md:px-6 md:py-24 ${
              reverse ? 'bg-ice' : 'bg-white'
            }`}
          >
            <div
              className={`mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                reverse ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm font-bold" style={{ color: s.accent }}>
                    {s.num}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-mute">
                    Capability
                  </span>
                </div>
                <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.03em] md:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-2 text-lg font-semibold text-ink/80">{s.tagline}</p>
                <p className="mt-4 text-mute md:text-lg">{s.summary}</p>
                <ul className="mt-6 space-y-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex gap-2 text-sm font-medium text-ink md:text-base">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: s.accent }} />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue hover:text-blue-deep"
                >
                  Talk about {s.title} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div
                className="overflow-hidden rounded-[1.75rem] border border-line shadow-sm"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
              >
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

      {/* CTA */}
      <section className="bg-void px-4 py-20 text-white md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-2xl font-display text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">
            Ready to connect AIM, AI, and the craft your business needs?
          </h2>
          <p className="mt-4 max-w-xl text-mute-dark md:text-lg">
            Tell us where you are. We will map the right mix of design, build,
            growth, funding readiness, AI ops, and hiring.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3.5 text-sm font-bold text-white hover:bg-blue-deep"
          >
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
