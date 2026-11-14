import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Logo } from '../components/brand/Logo'

const capabilities = [
  'Product design',
  'Product development',
  'Marketing & growth',
  'Startup consultancy',
  'Funding readiness',
  'AI operations',
  'Hiring support',
]

export function HomePage() {
  return (
    <div>
      {/* Full-bleed hero — brand + one message + visual plane */}
      <section className="relative min-h-[100svh] overflow-hidden bg-void text-white">
        <img
          src="/media/hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/40" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 md:px-6 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-8 md:mb-10">
              <Logo tone="light" to={null} />
            </div>
            <h1 className="font-display text-[clamp(2.6rem,7vw,5.2rem)] font-extrabold leading-[0.95] tracking-[-0.045em]">
              Clarity for
              <br />
              ambitious builds.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
              Techtoil helps teams design, build, launch, and scale — product,
              growth, intelligence, and talent in one focused partnership.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3.5 text-sm font-bold text-white hover:bg-accent-2"
              >
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="#studio"
                className="inline-flex items-center rounded-md border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-bold text-white backdrop-blur hover:bg-white/10"
              >
                Discover the studio
              </a>
            </div>
          </motion.div>

          <motion.div
            className="mt-14 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            {capabilities.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Studio aim */}
      <section id="studio" className="bg-snow px-4 py-24 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
              The studio
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-[-0.03em] md:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
              We exist to make the path from vision to working business shorter —
              and sharper.
            </h2>
          </motion.div>
          <motion.div
            className="space-y-6 text-base leading-relaxed text-mute md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            <p>
              Most teams do not fail for lack of ambition. They stall because
              design, engineering, growth, advice, automation, and hiring live in
              different rooms.
            </p>
            <p>
              Techtoil brings those conversations together. We help you shape the
              product, ship the platform, find the customers, prepare for capital,
              automate the ops noise, and bring the right people in — when each
              step actually matters.
            </p>
            <p className="font-semibold text-ink">
              Not a marketplace of vendors. A single studio that stays with the
              work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How we show up — 3 principles, not 7 service cards */}
      <section className="border-y border-line bg-paper px-4 py-24 md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
            How we work
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold tracking-[-0.03em] md:text-4xl">
            Three commitments on every engagement.
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {[
              {
                n: '01',
                t: 'Understand before we build',
                d: 'We start with the outcome you need — market, product, ops, or talent — then choose the work that moves it.',
              },
              {
                n: '02',
                t: 'Ship what you can point to',
                d: 'Designs, products, campaigns, automations, hire plans. Tangible progress, not slides that die in a folder.',
              },
              {
                n: '03',
                t: 'Leave you stronger',
                d: 'Systems, clarity, and momentum your team can keep running after we step back.',
              },
            ].map((item, i) => (
              <motion.article
                key={item.n}
                className="border-t border-ink/15 pt-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <p className="font-display text-sm font-bold text-accent">{item.n}</p>
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight">{item.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute md:text-[15px]">{item.d}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Capability ribbon — quiet, not a menu */}
      <section className="bg-snow px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-md font-display text-3xl font-extrabold tracking-[-0.03em] md:text-4xl">
              The craft we bring to the table.
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-mute">
              Capabilities stay in service of your goal — never as a checklist to
              sell against.
            </p>
          </div>
          <div className="mt-12 overflow-hidden border-y border-line">
            <div className="flex animate-[marquee_28s_linear_infinite] gap-10 whitespace-nowrap py-5 text-sm font-semibold uppercase tracking-[0.12em] text-ink/55">
              {[...capabilities, ...capabilities].map((c, i) => (
                <span key={`${c}-${i}`} className="inline-flex items-center gap-10">
                  {c}
                  <span className="h-1 w-1 rounded-full bg-accent" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-void px-4 py-24 text-white md:px-6 md:py-28">
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <h2 className="font-display max-w-2xl text-3xl font-extrabold tracking-[-0.03em] md:text-5xl md:leading-[1.05]">
            Ready when you are.
          </h2>
          <p className="mt-5 max-w-lg text-white/60 md:text-lg">
            Tell us what you are building. We will answer with a clear next step —
            not a generic pitch deck.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3.5 text-sm font-bold text-ink hover:bg-paper"
          >
            Talk to Techtoil <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
