import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { Logo } from '../components/brand/Logo'
import { aiHighlights, services } from '../data/services'

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
}

export function HomePage() {
  return (
    <div>
      {/* Unique hero: content slab + clipped cinematic image */}
      <section className="relative min-h-[100svh] overflow-hidden bg-bg pt-[4.25rem]">
        <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
          <img
            src="/media/hero.jpg"
            alt=""
            className="hero-clip h-full w-full object-cover object-center"
          />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-4.25rem)] max-w-6xl lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            className="flex flex-col justify-center px-4 py-14 md:px-6 lg:py-20"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <Logo to={null} size="hero" />
            <div className="mt-8 h-1 w-16 bg-rose" />
            <h1 className="display mt-7 max-w-xl text-ink">
              From vision to a business that runs.
            </h1>
            <p className="lede mt-5 max-w-md text-mute">
              Design, build, grow, fund, automate, and hire — with AI in the loop.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-rose px-5 py-3.5 text-sm font-semibold text-white hover:bg-rose-deep"
              >
                View services <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center border border-line bg-surface px-5 py-3.5 text-sm font-semibold text-ink hover:border-ink/30"
              >
                Contact us
              </Link>
            </div>
          </motion.div>

          {/* Mobile / tablet image */}
          <div className="px-4 pb-10 md:px-6 lg:hidden">
            <img
              src="/media/hero.jpg"
              alt=""
              className="aspect-[16/11] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="band-graphite px-4 py-20 text-white md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade}>
            <p className="eyebrow text-rose">Our direction</p>
            <h2 className="title mt-4 max-w-2xl">
              Strategy, product, growth, and intelligence on one path.
            </h2>
          </motion.div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                t: 'One partner',
                d: 'Design, engineering, marketing, funding, AI ops, and hiring stay connected.',
              },
              {
                t: 'Outcome first',
                d: 'We start from where you want to go — then choose the craft that moves it.',
              },
              {
                t: 'AI with control',
                d: 'Automate repetitive work while people keep judgment and ownership.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.t}
                className="border-t border-white/15 pt-6"
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.05 }}
              >
                <h3 className="font-display text-lg font-semibold">{item.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fade}>
            <p className="eyebrow text-rose">Intelligence</p>
            <h2 className="title mt-4">AI built into operations.</h2>
            <p className="lede mt-4 text-mute">
              Agents, workflows, and automation that remove friction — without giving up
              control.
            </p>
            <ul className="mt-8 space-y-5">
              {aiHighlights.map((h) => (
                <li key={h.title} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-rose" strokeWidth={2.25} />
                  <div>
                    <p className="font-semibold">{h.title}</p>
                    <p className="mt-1 text-sm text-mute">{h.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fade}>
            <img
              src="/media/svc-aiops.jpg"
              alt="AI operations"
              className="aspect-[4/3] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <div id="services" className="scroll-mt-24">
        {services.map((s, i) => {
          const reverse = i % 2 === 1
          return (
            <section
              key={s.id}
              id={s.id}
              className={`scroll-mt-24 border-t border-line px-4 py-16 md:px-6 md:py-20 ${
                reverse ? 'bg-bg' : 'bg-surface'
              }`}
            >
              <div
                className={`mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                  reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <motion.div {...fade}>
                  <p className="eyebrow text-rose">
                    {s.num} · Service
                  </p>
                  <h2 className="title mt-3">{s.title}</h2>
                  <p className="mt-3 text-lg font-medium text-ink/80">{s.tagline}</p>
                  <p className="lede mt-4 text-mute">{s.summary}</p>
                  <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                    {s.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 border border-line bg-surface px-3.5 py-3 text-sm font-medium"
                      >
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose"
                          strokeWidth={2.25}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 bg-graphite px-5 py-3.5 text-sm font-semibold text-white hover:bg-rose"
                  >
                    Discuss {s.title} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div {...fade}>
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
      </div>

      <section className="px-4 py-20 md:px-6 md:py-24">
        <motion.div className="band-graphite mx-auto max-w-6xl px-6 py-14 text-white md:px-12" {...fade}>
          <h2 className="title max-w-2xl">Ready for a clear next step?</h2>
          <p className="lede mt-4 max-w-xl text-white/60">
            Tell us your stage. We map design, build, growth, funding, automation, and
            hiring into a practical plan.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-rose px-5 py-3.5 text-sm font-semibold text-white hover:bg-rose-deep"
          >
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
