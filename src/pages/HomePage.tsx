import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { Logo } from '../components/brand/Logo'
import { aiHighlights, services } from '../data/services'

const fade = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
}

export function HomePage() {
  return (
    <div>
      {/* LIGHT SPLIT HERO — completely different from dark full-bleed */}
      <section className="min-h-[100svh] bg-ivory pt-20 md:pt-0">
        <div className="mx-auto grid min-h-[100svh] max-w-6xl lg:grid-cols-2">
          <motion.div
            className="flex flex-col justify-center px-4 py-16 md:px-6 lg:pr-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Logo to={null} size="hero" />
            <h1 className="display mt-8 max-w-lg text-ink">
              From vision to a business that runs.
            </h1>
            <p className="lede mt-5 max-w-md text-soft">
              Design, build, grow, fund, automate, and hire — with AI in the loop.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-leaf px-5 py-3.5 text-sm font-semibold text-white hover:bg-moss"
              >
                View services <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center border border-line px-5 py-3.5 text-sm font-semibold text-ink hover:bg-sand"
              >
                Contact us
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative min-h-[48vh] lg:min-h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <img
              src="/media/hero.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Direction band */}
      <section className="forest px-4 py-20 text-white md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade}>
            <p className="eyebrow text-fern">Our direction</p>
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

      {/* AI */}
      <section className="bg-sand px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fade}>
            <p className="eyebrow text-moss">Intelligence</p>
            <h2 className="title mt-4">AI built into operations.</h2>
            <p className="lede mt-4 text-soft">
              Agents, workflows, and automation that remove friction — without giving up
              control.
            </p>
            <ul className="mt-8 space-y-5">
              {aiHighlights.map((h) => (
                <li key={h.title} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-fern" strokeWidth={2.25} />
                  <div>
                    <p className="font-semibold">{h.title}</p>
                    <p className="mt-1 text-sm text-soft">{h.body}</p>
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

      {/* Services — product-design style sections only */}
      <div id="services" className="scroll-mt-24">
        {services.map((s, i) => {
          const reverse = i % 2 === 1
          return (
            <section
              key={s.id}
              id={s.id}
              className={`scroll-mt-24 border-t border-line px-4 py-16 md:px-6 md:py-20 ${
                reverse ? 'bg-sand' : 'bg-ivory'
              }`}
            >
              <div
                className={`mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                  reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <motion.div {...fade}>
                  <p className="eyebrow text-moss">
                    {s.num} · Service
                  </p>
                  <h2 className="title mt-3">{s.title}</h2>
                  <p className="mt-3 text-lg font-medium text-ink/80">{s.tagline}</p>
                  <p className="lede mt-4 text-soft">{s.summary}</p>
                  <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                    {s.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 border border-line bg-ivory px-3.5 py-3 text-sm font-medium"
                      >
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-fern"
                          strokeWidth={2.25}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 bg-leaf px-5 py-3.5 text-sm font-semibold text-white hover:bg-moss"
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
        <motion.div className="forest mx-auto max-w-6xl px-6 py-14 text-white md:px-12" {...fade}>
          <h2 className="title max-w-2xl">Ready for a clear next step?</h2>
          <p className="lede mt-4 max-w-xl text-white/60">
            Tell us your stage. We map design, build, growth, funding, automation, and
            hiring into a practical plan.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-white px-5 py-3.5 text-sm font-semibold text-leaf hover:bg-sand"
          >
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
