import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Logo } from '../components/brand/Logo'
import { aimPoints, focusAreas } from '../data/content'

export function HomePage() {
  return (
    <div>
      {/* Hero — brand first, one composition */}
      <section className="relative overflow-hidden mesh">
        <div className="pointer-events-none absolute inset-0 grain opacity-60" />
        <div className="relative mx-auto grid min-h-[88svh] max-w-6xl items-end gap-10 px-4 pb-16 pt-24 md:grid-cols-[1.15fr_0.85fr] md:items-center md:px-6 md:pb-20 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8">
              <Logo size="lg" to={null} />
            </div>
            <h1 className="font-display max-w-[11ch] text-4xl font-extrabold leading-[1.02] tracking-tight md:text-5xl lg:text-6xl">
              Build what comes next.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
              Techtoil helps founders and operators turn ambition into working
              products, clearer growth, and smarter operations — as one partner.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-signal px-5 py-3 text-sm font-bold text-white hover:bg-signal-deep"
              >
                Talk with us <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="#aim"
                className="inline-flex items-center rounded-md border border-line bg-white/60 px-5 py-3 text-sm font-bold text-ink hover:border-signal/40"
              >
                Our aim
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[1.5rem] border border-line bg-ink md:max-w-none"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            aria-hidden
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(12,94,240,0.45),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_40%)]" />
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:36px_36px]" />
            <motion.div
              className="absolute left-[12%] top-[18%] h-24 w-24 rounded-full border border-white/20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-[22%] right-[14%] h-16 w-40 rounded-xl border border-white/15 bg-white/5 backdrop-blur"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">
                Studio for builders
              </p>
              <p className="mt-2 font-display text-2xl font-bold leading-tight">
                Design. Build.
                <br />
                Grow. Scale.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aim */}
      <section id="aim" className="border-y border-line bg-white px-4 py-20 md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-signal">Our aim</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Help businesses move from idea to something that actually runs —
            and keeps getting better.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            We exist so you do not have to coordinate a design shop, a software
            team, a marketing agency, advisors, and an ops project separately.
            Techtoil is the connective tissue between vision and execution.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {aimPoints.map((p, i) => (
              <motion.article
                key={p.title}
                className="border-t border-line pt-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <h3 className="font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* What we do — soft areas, not a 7-item menu */}
      <section id="work" className="bg-fog px-4 py-20 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-signal">
              What we work on
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              The kinds of problems we take on.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              From early product work to growth, guidance, automation, and
              hiring — we show up where builders get stuck, and stay until the
              next stage is clear.
            </p>
          </div>

          <div className="mt-12 divide-y divide-line border-y border-line">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                className="grid gap-3 py-7 md:grid-cols-[220px_1fr] md:gap-10"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: Math.min(i * 0.04, 0.2) }}
              >
                <h3 className="font-display text-xl font-bold">{area.title}</h3>
                <p className="max-w-xl text-ink-soft leading-relaxed">{area.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feel / approach */}
      <section className="bg-ink px-4 py-20 text-white md:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6ea0ff]">
              How it feels
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              Calm execution.
              <br />
              Sharp ambition.
            </h2>
          </div>
          <p className="text-white/65 leading-relaxed md:text-lg">
            We prefer clear briefs, honest timelines, and work you can point at.
            No theatre. No padded decks. Just the next useful step toward a
            product, a pipeline, or a smoother operation.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-3 sm:grid-cols-3">
          {['Listen hard', 'Shape the path', 'Ship and refine'].map((step, i) => (
            <div key={step} className="rounded-xl border border-white/10 bg-white/5 px-5 py-6">
              <p className="font-display text-xs text-[#6ea0ff]">0{i + 1}</p>
              <p className="mt-2 font-display text-lg font-bold">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-line bg-white px-6 py-12 md:px-12 md:py-16">
          <h2 className="font-display max-w-xl text-3xl font-extrabold tracking-tight md:text-4xl">
            Tell us what you are trying to build.
          </h2>
          <p className="mt-4 max-w-lg text-ink-soft">
            Share a short note — product, growth, operations, or hiring — and we
            will come back with a clear next step.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-signal px-5 py-3 text-sm font-bold text-white hover:bg-signal-deep"
          >
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
