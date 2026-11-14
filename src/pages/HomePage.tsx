import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Logo } from '../components/brand/Logo'

const spine = [
  {
    side: 'left',
    kicker: 'The problem',
    title: 'Ambition gets scattered.',
    body: 'Design in one room. Build in another. Marketing somewhere else. Ops and hiring last. The idea loses its thread.',
  },
  {
    side: 'right',
    kicker: 'Our aim',
    title: 'One studio. One thread.',
    body: 'Techtoil keeps strategy and execution together — so you move from vision to a business customers can feel.',
  },
  {
    side: 'left',
    kicker: 'How we show up',
    title: 'Meet you at the chapter you are in.',
    body: 'Whether you need to shape a product, find demand, automate operations, or strengthen the team — we start from the outcome, then bring the right craft.',
  },
  {
    side: 'right',
    kicker: 'What you get',
    title: 'Progress you can point to.',
    body: 'Not slide decks that die in a folder. Designs, products, growth systems, automations, and hiring motions that keep working.',
  },
]

const craftLine =
  'Product design · Product development · Marketing & growth · Startup consultancy · Funding readiness · AI operations · Hiring support'

export function HomePage() {
  return (
    <div>
      {/* COVER — white typographic hero (not dark overlay theme) */}
      <section className="px-4 pb-12 pt-28 md:px-6 md:pb-16 md:pt-36">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Logo to={null} size="lg" />
            <h1 className="mt-12 max-w-4xl font-display text-[clamp(3.2rem,10vw,7rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em]">
              From spark
              <br />
              to something
              <br />
              <span className="text-ember">that runs.</span>
            </h1>
            <div className="mt-8 flex max-w-2xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-lg text-soft">
                Techtoil is the partner between idea and operating business —
                design, build, grow, and strengthen without losing the plot.
              </p>
              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center bg-ember px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-ember-dark"
              >
                Start a project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full-bleed image strip — visual only, no text overlay */}
      <section className="w-full">
        <img
          src="/media/ember.jpg"
          alt=""
          className="h-[42vh] w-full object-cover md:h-[52vh]"
        />
      </section>

      {/* SPINE — magazine alternating story (new layout structure) */}
      <section id="spine" className="relative px-4 py-20 md:px-6 md:py-28">
        <div className="pointer-events-none absolute bottom-20 left-1/2 top-20 hidden w-px -translate-x-1/2 bg-line md:block" />
        <div className="pointer-events-none absolute left-1/2 top-20 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-ember md:block" />

        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-ember">
            The story
          </p>

          <div className="mt-14 space-y-16 md:space-y-24">
            {spine.map((beat, i) => (
              <motion.article
                key={beat.title}
                className={`relative grid gap-4 md:grid-cols-2 md:gap-16 ${
                  beat.side === 'right' ? 'md:text-right' : ''
                }`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: 0.05 }}
              >
                <div
                  className={`relative ${
                    beat.side === 'right' ? 'md:col-start-2' : 'md:col-start-1'
                  }`}
                >
                  <span className="absolute -top-3 left-0 font-display text-6xl font-extrabold text-mist md:text-7xl">
                    0{i + 1}
                  </span>
                  <div className="relative pt-8">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">
                      {beat.kicker}
                    </p>
                    <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-none tracking-[-0.02em] md:text-4xl">
                      {beat.title}
                    </h2>
                    <p
                      className={`mt-4 text-soft md:text-lg ${
                        beat.side === 'right' ? 'md:ml-auto' : ''
                      } max-w-md`}
                    >
                      {beat.body}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Single dark band — only contrast section */}
      <section className="bg-char px-4 py-20 text-white md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">
            Craft we draw from
          </p>
          <p className="mt-6 max-w-4xl font-display text-2xl font-bold uppercase leading-tight tracking-[-0.02em] md:text-4xl">
            {craftLine}
          </p>
          <p className="mt-6 max-w-xl text-white/60">
            These sit behind the work — tools for the chapter you are in, not a
            menu that replaces your goal.
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl border-t border-line pt-14">
          <h2 className="font-display text-4xl font-extrabold uppercase leading-none tracking-[-0.02em] md:text-6xl">
            Tell us the
            <br />
            <span className="text-ember">next chapter.</span>
          </h2>
          <p className="mt-6 max-w-md text-soft md:text-lg">
            A short note is enough. We will come back with a clear next step.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex bg-ember px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-ember-dark"
          >
            Talk to Techtoil
          </Link>
        </div>
      </section>
    </div>
  )
}
