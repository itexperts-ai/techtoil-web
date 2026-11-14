import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Logo } from '../components/brand/Logo'

const path = [
  {
    k: '01',
    title: 'Discover',
    line: 'Name the real problem, the real user, and the outcome that matters.',
  },
  {
    k: '02',
    title: 'Design & build',
    line: 'Shape the experience and ship the product people can actually use.',
  },
  {
    k: '03',
    title: 'Grow',
    line: 'Bring customers in with presence, pipeline, and a story that lands.',
  },
  {
    k: '04',
    title: 'Strengthen',
    line: 'Automate the noise, hire with intent, prepare for the next chapter.',
  },
]

export function HomePage() {
  return (
    <div className="bg-sand">
      {/* NEW theme: Split atelier hero — light copy plane + full-height visual */}
      <section className="relative min-h-[100svh] lg:grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10 flex flex-col justify-center px-4 pb-16 pt-28 md:px-8 lg:px-10 lg:py-24 xl:pl-[max(2.5rem,calc((100vw-72rem)/2))]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <Logo to={null} size="lg" />
            <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.24em] text-sea">
              Studio for builders
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.8rem,6vw,4.6rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-ink">
              Ideas deserve
              <br />
              a cleaner
              <br />
              <span className="text-sea">path forward.</span>
            </h1>
            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-mute md:text-lg">
              Techtoil helps ambitious teams design, build, grow, and operate —
              as one partner from first spark to a business that runs.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-tide px-5 py-3.5 text-sm font-bold text-white transition hover:bg-sea"
              >
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="#manifesto"
                className="inline-flex items-center rounded-full border border-line bg-white px-5 py-3.5 text-sm font-bold text-ink transition hover:border-sea/40"
              >
                Read the manifesto
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative min-h-[48vh] overflow-hidden lg:min-h-[100svh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/media/panel.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tide/35 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-sand/20" />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur-md lg:bottom-10 lg:left-8 lg:right-auto lg:max-w-xs">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
              What we hold together
            </p>
            <p className="mt-2 font-serif text-lg leading-snug text-white">
              Product, growth, intelligence, and talent — one continuous conversation.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Manifesto band — unique tide + sea identity */}
      <section id="manifesto" className="bg-tide px-4 py-20 text-white md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sea">
            Manifesto
          </p>
          <h2 className="mt-6 max-w-4xl font-serif text-[clamp(1.7rem,4vw,2.85rem)] font-medium italic leading-[1.25] text-white">
            Most teams do not lack ambition. They lack a single thread from the
            idea in their head to a product customers can feel — and a business
            that can keep going.
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
            That is why Techtoil exists. We stay with the work across design,
            engineering, growth, guidance, automation, and hiring — so you are
            not stitching five vendors into one unfinished story.
          </p>
        </div>
      </section>

      {/* Path */}
      <section id="path" className="px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sea">
              The path
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.04em] md:text-4xl">
              Four movements. One aim.
            </h2>
            <p className="mt-4 text-mute md:text-lg">
              We meet you where you are — then move the story forward without
              turning your business into a checklist of departments.
            </p>
          </div>

          <div className="mt-14 space-y-0">
            {path.map((step, i) => (
              <motion.article
                key={step.k}
                className="grid gap-4 border-t border-line py-8 md:grid-cols-[6rem_14rem_1fr] md:items-baseline md:gap-8"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="font-display text-sm font-bold text-sea">{step.k}</span>
                <h3 className="font-display text-2xl font-bold tracking-tight">{step.title}</h3>
                <p className="text-mute md:text-[1.05rem]">{step.line}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Aim strip */}
      <section className="border-y border-line bg-spark px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sea">
              Our aim
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.04em] md:text-[2.6rem] md:leading-[1.1]">
              Shorten the distance between vision and something that runs.
            </h2>
          </div>
          <div className="space-y-4 text-mute md:text-lg">
            <p>
              We bring craft where it counts — product design and development,
              marketing and growth, startup guidance, funding readiness, AI-powered
              operations, and hiring support.
            </p>
            <p className="font-semibold text-ink">
              Not as separate shops. As one studio that keeps the thread intact.
            </p>
          </div>
        </div>
      </section>

      {/* Feel */}
      <section className="px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-lg font-display text-3xl font-extrabold tracking-[-0.04em] md:text-4xl">
            How it feels to work with us.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                t: 'Clear',
                d: 'Honest timelines, sharp briefs, and decisions you can follow.',
              },
              {
                t: 'Concrete',
                d: 'Designs, products, campaigns, automations — progress you can point to.',
              },
              {
                t: 'Continuous',
                d: 'We stay through the messy middle, not only the kickoff workshop.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.t}
                className="rounded-3xl border border-line bg-white p-7"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <h3 className="font-display text-xl font-bold text-sea">{item.t}</h3>
                <p className="mt-3 text-mute">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 md:px-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-tide px-6 py-14 text-white md:px-12 md:py-16">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sea">
              Next step
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-[-0.04em] md:text-4xl">
              Tell us what you are building.
            </h2>
            <p className="mt-4 text-white/60 md:text-lg">
              A short note is enough. We will answer with a practical next step —
              specific to your stage, not a generic pitch.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-sea px-5 py-3.5 text-sm font-bold text-white transition hover:bg-sea-deep"
            >
              Talk to Techtoil <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
