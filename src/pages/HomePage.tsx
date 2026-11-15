import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { Logo } from '../components/brand/Logo'
import { aiHighlights, services } from '../data/services'

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-70px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
}

const aims = [
  {
    t: 'One partner',
    d: 'Design, engineering, marketing, funding readiness, AI ops, and hiring stay connected.',
  },
  {
    t: 'Outcome first',
    d: 'We start from where you want to go — then choose the craft that moves it.',
  },
  {
    t: 'AI with control',
    d: 'Automate repetitive work while people keep judgment and ownership.',
  },
]

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <div className="bg-bg">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src="/media/hero-advance.jpg"
            alt=""
            className="h-[118%] w-full object-cover object-center"
          />
        </motion.div>
        <div className="hero-veil absolute inset-0" />

        <motion.div
          className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 md:px-6 md:pb-20 lg:justify-center"
          style={{ opacity: contentOpacity }}
        >
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <Logo to={null} size="hero" tone="light" />
            <h1 className="mt-8 heading max-w-xl text-white">
              From vision to a business that runs.
            </h1>
            <p className="lead mt-5 max-w-md text-white/72">
              Craft and AI on one path — design, build, grow, fund, automate, and hire.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white px-5 py-3.5 text-sm font-semibold text-ink transition hover:bg-mist"
              >
                View services <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#ai"
                className="inline-flex items-center border border-white/30 bg-white/8 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                How we use AI
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* AIM */}
      <section id="aim" className="band-slate px-4 py-20 text-white md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade}>
            <p className="label text-sky-300/90">Our AIM</p>
            <h2 className="heading mt-3 max-w-2xl">
              Strategy, product, growth, and intelligence — kept on one line.
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
            {aims.map((item, i) => (
              <motion.div
                key={item.t}
                className="border-t border-white/15 pt-6"
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.06 }}
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{item.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI */}
      <section id="ai" className="bg-surface px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fade}>
            <p className="label text-teal">Artificial Intelligence</p>
            <h2 className="heading mt-3">AI built for operations — not demos.</h2>
            <p className="lead mt-4 text-soft">
              Support agents, CRM workflows, and reporting automation that remove
              friction without giving up control.
            </p>
            <div className="mt-8 space-y-5">
              {aiHighlights.map((h) => (
                <div key={h.title} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-teal" strokeWidth={2.25} />
                  <div>
                    <h3 className="font-semibold tracking-[-0.02em]">{h.title}</h3>
                    <p className="mt-1 text-sm text-soft">{h.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#ai-automation"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue hover:text-blue-deep"
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

      {/* Services overview — fixed, all 7 clear */}
      <section id="services" className="border-y border-line bg-panel px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade}>
            <p className="label text-blue">Services</p>
            <h2 className="heading mt-3">Everything we deliver</h2>
            <p className="lead mt-3 max-w-xl text-soft">
              Seven connected capabilities — each with full detail and imagery below.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.a
                key={s.id}
                href={`#${s.id}`}
                className={`group flex items-start gap-4 border border-line bg-surface p-5 transition hover:border-blue/35 hover:bg-bg ${
                  i === services.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.04 }}
              >
                <span className="text-sm font-semibold text-blue">{s.num}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold tracking-[-0.02em]">{s.title}</h3>
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-faint transition group-hover:text-blue" />
                  </div>
                  <p className="mt-1.5 text-sm text-soft">{s.tagline}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Full service detail */}
      {services.map((s, i) => {
        const reverse = i % 2 === 1
        return (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-24 border-b border-line px-4 py-16 md:px-6 md:py-20 ${
              reverse ? 'bg-bg' : 'bg-surface'
            }`}
          >
            <div
              className={`mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                reverse ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <motion.div {...fade}>
                <p className="label text-teal">
                  {s.num} · Service
                </p>
                <h2 className="heading mt-3">{s.title}</h2>
                <p className="mt-3 text-lg font-medium text-ink/80">{s.tagline}</p>
                <p className="lead mt-4 text-soft">{s.summary}</p>
                <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                  {s.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 border border-line bg-surface/90 px-3.5 py-3 text-sm font-medium"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" strokeWidth={2.25} />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 bg-slate px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue"
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
        <motion.div className="band-slate mx-auto max-w-6xl px-6 py-14 text-white md:px-12" {...fade}>
          <h2 className="heading max-w-2xl">
            Ready to align AIM, AI, and the right capabilities?
          </h2>
          <p className="lead mt-4 max-w-xl text-white/65">
            Tell us your stage. We map design, build, growth, funding, automation, and
            hiring into a clear next step.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-white px-5 py-3.5 text-sm font-semibold text-ink transition hover:bg-mist"
          >
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
