import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { Logo } from '../components/brand/Logo'
import { aiHighlights, services } from '../data/services'

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
}

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const fadeOut = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <div>
      {/* Hero — brand first, full bleed */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src="/media/hero-premium.jpg"
            alt=""
            className="h-[118%] w-full object-cover"
          />
        </motion.div>
        <div className="veil absolute inset-0" />

        <motion.div
          className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 md:justify-center md:px-6 md:pb-20"
          style={{ opacity: fadeOut }}
        >
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Logo to={null} size="hero" tone="light" />
            <h1 className="display mt-8 max-w-xl text-white">
              From vision to a business that runs.
            </h1>
            <p className="body-lg mt-5 max-w-md text-white/70">
              Design, build, grow, fund, automate, and hire — one professional partner.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white px-5 py-3.5 text-sm font-semibold text-ink transition hover:bg-wash"
              >
                View services <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#ai"
                className="inline-flex items-center border border-white/30 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                How we use AI
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* AIM */}
      <section id="aim" className="deep-panel px-4 py-20 text-white md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade}>
            <p className="eyebrow text-sky-300/90">Our AIM</p>
            <h2 className="title mt-4 max-w-2xl">
              Keep strategy, product, growth, and intelligence aligned.
            </h2>
            <p className="body-lg mt-5 max-w-xl text-white/60">
              Techtoil connects craft and AI so teams move with clarity — not seven
              disconnected vendors.
            </p>
          </motion.div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
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
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{item.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI */}
      <section id="ai" className="bg-surface px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fade}>
            <p className="eyebrow text-signal">Artificial Intelligence</p>
            <h2 className="title mt-4">AI for real operations.</h2>
            <p className="body-lg mt-4 text-muted">
              Support agents, CRM workflows, and reporting automation — built to remove
              friction without losing control.
            </p>
            <ul className="mt-8 space-y-5">
              {aiHighlights.map((h) => (
                <li key={h.title} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-signal" strokeWidth={2.25} />
                  <div>
                    <p className="font-semibold tracking-[-0.02em]">{h.title}</p>
                    <p className="mt-1 text-sm text-muted">{h.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="#ai-automation"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-deep"
            >
              AI Operations detail <ArrowUpRight className="h-4 w-4" />
            </a>
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

      {/* Services index — all 7 */}
      <section id="services" className="border-y border-line bg-wash px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade}>
            <p className="eyebrow text-accent">Services</p>
            <h2 className="title mt-3">What we deliver</h2>
            <p className="body-lg mt-3 max-w-lg text-muted">
              Seven professional capabilities — open any for full detail and imagery.
            </p>
          </motion.div>

          <div className="mt-10 border-t border-line">
            {services.map((s, i) => (
              <motion.a
                key={s.id}
                href={`#${s.id}`}
                className="group flex items-center gap-4 border-b border-line py-5 transition hover:bg-surface/80 md:gap-8 md:py-6"
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.03 }}
              >
                <span className="w-8 shrink-0 text-sm font-semibold text-accent">{s.num}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold tracking-[-0.02em] md:text-lg">
                    {s.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted">{s.tagline}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-subtle transition group-hover:text-accent" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Service details */}
      {services.map((s, i) => {
        const reverse = i % 2 === 1
        return (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-24 px-4 py-16 md:px-6 md:py-20 ${
              reverse ? 'bg-bg' : 'bg-surface'
            }`}
          >
            <div
              className={`mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                reverse ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <motion.div {...fade}>
                <p className="eyebrow text-signal">
                  {s.num} · Service
                </p>
                <h2 className="title mt-3">{s.title}</h2>
                <p className="mt-3 text-lg font-medium text-ink/80">{s.tagline}</p>
                <p className="body-lg mt-4 text-muted">{s.summary}</p>
                <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                  {s.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 border border-line bg-surface px-3.5 py-3 text-sm font-medium"
                    >
                      <Check
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal"
                        strokeWidth={2.25}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 bg-deep px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-accent"
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

      {/* CTA */}
      <section className="px-4 py-20 md:px-6 md:py-24">
        <motion.div
          className="deep-panel mx-auto max-w-6xl px-6 py-14 text-white md:px-12"
          {...fade}
        >
          <h2 className="title max-w-2xl">
            Ready for a clear next step?
          </h2>
          <p className="body-lg mt-4 max-w-xl text-white/60">
            Tell us your stage. We map design, build, growth, funding, automation, and
            hiring into a practical plan.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-white px-5 py-3.5 text-sm font-semibold text-ink transition hover:bg-wash"
          >
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
