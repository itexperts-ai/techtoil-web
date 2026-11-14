import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Logo } from '../components/brand/Logo'

export function HomePage() {
  return (
    <div className="bg-bg">
      {/* Hero — brand as monument, then full-bleed visual */}
      <section className="px-5 pt-28 md:px-6 md:pt-36">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Logo to={null} size="xl" />
            <h1 className="mt-10 max-w-3xl font-display text-[clamp(2.4rem,6vw,4.25rem)] font-bold leading-[1.02] tracking-[-0.045em]">
              We turn ambition into
              <span className="text-signal"> working businesses.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft md:text-xl">
              Techtoil is a premium studio for teams who want design, product,
              growth, and operations handled as one clear journey — not a stack
              of disconnected vendors.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                to="/contact"
                className="inline-flex rounded-md bg-signal px-6 py-3.5 text-sm font-bold text-white transition hover:bg-signal-dark"
              >
                Start a project
              </Link>
              <a href="#aim" className="text-sm font-bold text-ink hover:text-signal">
                Our aim ↓
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto mt-14 max-w-6xl overflow-hidden md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          <div className="relative aspect-[16/8] w-full overflow-hidden md:aspect-[16/7]">
            <img
              src="/media/lumen.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Aim */}
      <section id="aim" className="px-5 py-24 md:px-6 md:py-32">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-signal">Our aim</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] md:text-4xl">
              Keep the thread intact.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-soft md:col-span-8 md:text-lg">
            <p>
              Great ideas stall when design lives in one place, engineering in
              another, marketing somewhere else, and operations last.
            </p>
            <p>
              Techtoil exists to hold that whole arc — from the first sketch to a
              product people use, a pipeline that grows, and systems that keep
              the company moving.
            </p>
            <p className="font-semibold text-ink">
              One partner. One conversation. From vision to execution.
            </p>
          </div>
        </div>
      </section>

      {/* Beliefs — large type, not cards */}
      <section className="border-y border-line bg-panel px-5 py-24 md:px-6 md:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-signal">
            What we believe
          </p>
          <div className="mt-12 space-y-12 md:space-y-16">
            {[
              {
                title: 'Clarity beats complexity.',
                body: 'We cut noise early — so every design, build, and campaign serves a real outcome.',
              },
              {
                title: 'Shipping beats slides.',
                body: 'Progress should be tangible: products, growth systems, automations, and teams you can run.',
              },
              {
                title: 'Partnership beats handoffs.',
                body: 'We stay through the messy middle, so strategy and execution never lose each other.',
              },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                className="grid gap-4 border-t border-line pt-10 md:grid-cols-12 md:gap-8"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <p className="font-display text-sm font-bold text-dim md:col-span-2">
                  0{i + 1}
                </p>
                <div className="md:col-span-10">
                  <h3 className="font-display text-2xl font-bold tracking-[-0.03em] md:text-3xl">
                    {b.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-soft md:text-lg">{b.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How we help — prose, not service menu */}
      <section className="px-5 py-24 md:px-6 md:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-signal">
            How we help
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-[-0.03em] md:text-4xl">
            The work behind the aim.
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-soft md:text-xl">
            Depending on your stage, we bring{' '}
            <strong className="font-semibold text-ink">product design</strong>,{' '}
            <strong className="font-semibold text-ink">product development</strong>,{' '}
            <strong className="font-semibold text-ink">marketing and growth</strong>,{' '}
            <strong className="font-semibold text-ink">startup consultancy</strong>,{' '}
            <strong className="font-semibold text-ink">funding readiness</strong>,{' '}
            <strong className="font-semibold text-ink">AI operations</strong>, and{' '}
            <strong className="font-semibold text-ink">hiring support</strong>
            — always in service of where you need to go next.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-28 md:px-6">
        <div className="mx-auto max-w-5xl rounded-2xl bg-deep px-8 py-14 text-white md:px-14 md:py-16">
          <h2 className="font-display text-3xl font-bold tracking-[-0.03em] md:text-4xl">
            Ready to build what comes next?
          </h2>
          <p className="mt-4 max-w-lg text-white/65 md:text-lg">
            Tell us where you are. We will reply with a clear, practical next step.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-md bg-signal px-6 py-3.5 text-sm font-bold text-white hover:bg-signal-dark"
          >
            Talk to Techtoil
          </Link>
        </div>
      </section>
    </div>
  )
}
