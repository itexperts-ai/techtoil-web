import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Logo } from '../components/brand/Logo'

const journey = [
  {
    stage: 'Begin',
    title: 'Shape the idea',
    copy: 'We help you find the real problem, the real user, and the first version worth building.',
  },
  {
    stage: 'Build',
    title: 'Make it real',
    copy: 'Design and engineering that turn ambition into a product people can touch, trust, and use.',
  },
  {
    stage: 'Grow',
    title: 'Find your market',
    copy: 'Presence, pipeline, and positioning — so the work you shipped does not sit quietly online.',
  },
  {
    stage: 'Scale',
    title: 'Run with confidence',
    copy: 'Smarter operations, the right talent, and readiness for the next chapter of the business.',
  },
]

const crafts = [
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
      {/* Hero */}
      <section className="relative min-h-[100svh] overflow-hidden bg-void text-white">
        <motion.img
          src="/media/hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-void/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-void/50" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-14 pt-28 md:px-6 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <Logo tone="light" to={null} size="lg" />
            <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/45">
              Studio for builders
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.75rem,7.2vw,5.4rem)] font-extrabold leading-[0.96] tracking-[-0.05em]">
              From first spark
              <br />
              to something
              <br />
              <span className="text-[#8eb6ff]">that runs.</span>
            </h1>
            <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-white/68 md:text-xl md:leading-relaxed">
              Techtoil is the partner between vision and execution — helping you
              design, build, grow, and operate without losing the plot.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3.5 text-sm font-bold text-white transition hover:bg-accent-2"
              >
                Start a conversation <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="#story"
                className="inline-flex items-center rounded-md border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
              >
                Read our story
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="border-b border-line bg-snow px-4 py-16 md:px-6 md:py-20">
        <motion.blockquote
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-story text-[1.55rem] font-medium leading-snug tracking-[-0.02em] text-ink md:text-[2.15rem] md:leading-[1.25]">
            “Ambition is common. What most teams lack is a clear path from the
            idea in their head to a business that actually works.”
          </p>
          <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-mute">
            — The Techtoil belief
          </footer>
        </motion.blockquote>
      </section>

      {/* Story */}
      <section id="story" className="bg-snow px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
                Why we exist
              </p>
              <h2 className="mt-4 font-display text-[1.9rem] font-bold leading-[1.12] tracking-[-0.04em] md:text-[2.45rem]">
                Too many good ideas get stuck between agencies, freelancers, and
                unfinished plans.
              </h2>
            </motion.div>

            <motion.div
              className="space-y-5 text-[1.05rem] leading-relaxed text-mute md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
            >
              <p>
                One team designs. Another builds. Someone else runs ads. Advice
                arrives in slides. Hiring happens in a rush. Operations stay
                manual until everyone is tired.
              </p>
              <p>
                Techtoil was created to hold that whole arc in one place. We sit
                with you at the beginning, stay through the messy middle, and
                help you reach a business that customers can feel.
              </p>
              <p className="font-semibold text-ink">
                Our aim is simple: shorten the distance between what you imagine
                and what the world can use.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey narrative */}
      <section className="border-y border-line bg-paper px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
              The path
            </p>
            <h2 className="mt-4 font-display text-[1.9rem] font-bold tracking-[-0.04em] md:text-[2.45rem] md:leading-[1.12]">
              A clearer journey from spark to scale.
            </h2>
            <p className="mt-4 text-mute md:text-lg">
              Wherever you are, we meet you there — and move the work forward
              without forcing a menu of disconnected services.
            </p>
          </div>

          <div className="mt-14 grid gap-0 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((j, i) => (
              <motion.article
                key={j.stage}
                className="border-t border-ink/10 py-8 md:border-t-0 md:border-l md:border-ink/10 md:px-6 md:py-2 first:md:border-l-0 first:md:pl-0"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  {j.stage}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight">{j.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-mute">{j.copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* How it feels */}
      <section className="bg-void px-4 py-20 text-white md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8eb6ff]">
                How it feels
              </p>
              <h2 className="mt-4 font-display text-[1.9rem] font-bold tracking-[-0.04em] md:text-[2.5rem] md:leading-[1.1]">
                Calm process.
                <br />
                Serious craft.
              </h2>
            </div>
            <p className="font-story text-xl leading-snug text-white/70 md:text-2xl md:leading-snug">
              We listen hard, cut the noise, and ship work you can point to —
              products, growth systems, automations, and teams that keep
              momentum after we step back.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {[
              {
                t: 'One conversation',
                d: 'Strategy, product, growth, and ops stay connected — not handed between strangers.',
              },
              {
                t: 'Tangible progress',
                d: 'You leave each phase with something real: a design, a build, a pipeline, a plan.',
              },
              {
                t: 'Built to last',
                d: 'We care about what still works when the excitement of kickoff is gone.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.t}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-6"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <h3 className="font-display text-lg font-bold">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craft ribbon */}
      <section className="bg-snow px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-md font-display text-[1.7rem] font-bold tracking-[-0.04em] md:text-[2.1rem]">
              The craft behind the story.
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-mute">
              These are the muscles we use — always in service of your next
              chapter, never as a shopping list.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-paper/70">
            <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-3 py-5 pl-5">
              {[...crafts, ...crafts].map((c, i) => (
                <span
                  key={`${c}-${i}`}
                  className="inline-flex items-center rounded-full border border-line bg-snow px-4 py-2 text-sm font-semibold text-ink/70"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-line bg-snow px-4 py-20 md:px-6 md:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
              Next chapter
            </p>
            <h2 className="mt-4 font-display text-[2rem] font-bold tracking-[-0.045em] md:text-[3rem] md:leading-[1.05]">
              Tell us the story you want to build.
            </h2>
            <p className="mt-5 max-w-xl text-mute md:text-lg">
              A short note is enough. We will come back with a clear next step —
              honest, practical, and specific to where you are.
            </p>
            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3.5 text-sm font-bold text-white transition hover:bg-accent"
            >
              Talk to Techtoil <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
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
