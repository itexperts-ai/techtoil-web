import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Logo } from '../components/brand/Logo'
import { paths, process, toolbox } from '../data/paths'

export function HomePage() {
  return (
    <div className="bg-navy text-ink">
      {/* Hero — outcome-led, full-bleed visual plane */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <img src="/media/forge.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/50" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 md:px-6 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-3xl"
          >
            <Logo to={null} size="lg" />
            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Growth studio for builders
            </p>
            <h1 className="mt-4 text-[clamp(2.6rem,6.5vw,4.8rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-white">
              Build the business
              <br />
              you meant to build.
            </h1>
            <p className="mt-5 max-w-xl text-base text-mute md:text-lg">
              Techtoil helps you move from idea to product, demand, intelligent
              operations, and a stronger team — as one partner, not five vendors.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3.5 text-sm font-bold text-navy hover:bg-gold-dark"
              >
                Book a strategy call <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="#paths"
                className="inline-flex items-center rounded-full border border-line px-5 py-3.5 text-sm font-bold text-white hover:border-gold/40"
              >
                Explore paths
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Maturity paths — primary structure */}
      <section id="paths" className="border-t border-line px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              Where you are
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-white md:text-4xl">
              Four paths. Pick the chapter — not a shopping list.
            </h2>
            <p className="mt-4 text-mute md:text-lg">
              Inspired by how the best studios productize help: by stage of the
              business, then by craft.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {paths.map((p, i) => (
              <motion.article
                key={p.id}
                className="rounded-3xl border border-line bg-navy-2 p-6 md:p-8"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gold">
                    {p.label}
                  </span>
                  <span className="text-sm font-bold text-mute">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-white md:text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute md:text-base">{p.promise}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.draws.map((d) => (
                    <span
                      key={d}
                      className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-mute"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Bento studio module */}
      <section id="studio" className="border-t border-line bg-navy-2 px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mint">
            The studio
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-[-0.03em] text-white md:text-4xl">
            Aim, process, and craft — in one system.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-6 md:grid-rows-2">
            <div className="rounded-3xl border border-line bg-navy p-6 md:col-span-4 md:row-span-2 md:p-8">
              <h3 className="text-lg font-bold text-white">Our aim</h3>
              <p className="mt-4 text-2xl font-semibold leading-snug tracking-[-0.02em] text-white md:text-3xl">
                Shorten the distance between vision and a business that actually
                runs — without losing the thread between strategy and shipping.
              </p>
              <p className="mt-6 max-w-xl text-mute">
                Design, engineering, growth, guidance, automation, and hiring stay
                in one conversation so nothing important falls between vendors.
              </p>
            </div>

            <div className="rounded-3xl border border-line bg-navy p-6 md:col-span-2">
              <h3 className="text-sm font-bold uppercase tracking-wide text-gold">Process</h3>
              <ul className="mt-4 space-y-3">
                {process.map((step, i) => (
                  <li key={step.t} className="text-sm">
                    <span className="font-bold text-white">
                      0{i + 1} {step.t}
                    </span>
                    <span className="mt-0.5 block text-mute">{step.d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-line bg-navy p-6 md:col-span-2">
              <h3 className="text-sm font-bold uppercase tracking-wide text-mint">Toolbox</h3>
              <p className="mt-3 text-sm text-mute">
                Craft we draw from when a path needs it — never the whole homepage.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {toolbox.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-ink"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light contrast band */}
      <section className="bg-ice px-4 py-20 text-navy md:px-6 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
              How it feels
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] md:text-4xl">
              Calm process. Serious craft. Clear next steps.
            </h2>
          </div>
          <p className="max-w-md text-navy/65 md:text-lg">
            No theatre. Tangible progress — products, pipelines, automations, and
            teams you can keep running after we step back.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-line bg-navy-2 px-6 py-12 md:px-12 md:py-16">
          <h2 className="max-w-xl text-3xl font-bold tracking-[-0.03em] text-white md:text-4xl">
            Tell us which chapter you are in.
          </h2>
          <p className="mt-4 max-w-lg text-mute md:text-lg">
            Launch, scale, automate, or strengthen — we will answer with a
            practical plan, not a generic pitch deck.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3.5 text-sm font-bold text-navy hover:bg-gold-dark"
          >
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
