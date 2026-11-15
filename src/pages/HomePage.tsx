import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
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
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <div>
      {/* New hero */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img src="/media/hero.jpg" alt="" className="h-[118%] w-full object-cover" />
        </motion.div>
        <div className="scrim absolute inset-0" />

        <motion.div
          className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 md:justify-center md:px-6"
          style={{ opacity }}
        >
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Logo to={null} size="hero" tone="light" />
            <h1 className="h-hero mt-8 max-w-xl text-white">
              From vision to a business that runs.
            </h1>
            <p className="copy mt-5 max-w-md text-white/70">
              Design, build, grow, fund, automate, and hire — with AI in the loop.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white px-5 py-3.5 text-sm font-semibold text-ink hover:bg-canvas"
              >
                View services <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center border border-white/30 px-5 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Talk to us
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* AIM content kept, not in menu */}
      <section id="aim" className="night px-4 py-20 text-white md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade}>
            <p className="kicker text-sky-300/85">Our direction</p>
            <h2 className="h-section mt-4 max-w-2xl">
              Strategy, product, growth, and intelligence on one path.
            </h2>
            <p className="copy mt-5 max-w-xl text-white/55">
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
                className="border-t border-white/12 pt-6"
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.05 }}
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{item.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI section kept, not in menu */}
      <section id="ai" className="bg-paper px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fade}>
            <p className="kicker text-mint">Intelligence</p>
            <h2 className="h-section mt-4">AI built into operations.</h2>
            <p className="copy mt-4 text-steel">
              Agents, workflows, and automation that remove friction — without giving up
              control.
            </p>
            <ul className="mt-8 space-y-5">
              {aiHighlights.map((h) => (
                <li key={h.title} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-mint" strokeWidth={2.25} />
                  <div>
                    <p className="font-semibold tracking-[-0.02em]">{h.title}</p>
                    <p className="mt-1 text-sm text-steel">{h.body}</p>
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

      {/* Services list — NO "What we deliver" heading */}
      <section id="services" className="border-y border-edge bg-canvas px-4 py-12 md:px-6 md:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="border-t border-edge">
            {services.map((s, i) => (
              <motion.a
                key={s.id}
                href={`#${s.id}`}
                className="group flex items-center gap-4 border-b border-edge py-5 transition hover:bg-paper/70 md:gap-8 md:py-6"
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.03 }}
              >
                <span className="w-8 shrink-0 text-sm font-semibold text-brand">{s.num}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold tracking-[-0.02em] md:text-lg">
                    {s.title}
                  </span>
                  <span className="mt-1 block text-sm text-steel">{s.tagline}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-haze transition group-hover:text-brand" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Full service details */}
      {services.map((s, i) => {
        const reverse = i % 2 === 1
        return (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-24 px-4 py-16 md:px-6 md:py-20 ${
              reverse ? 'bg-canvas' : 'bg-paper'
            }`}
          >
            <div
              className={`mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                reverse ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <motion.div {...fade}>
                <p className="kicker text-mint">
                  {s.num} · Service
                </p>
                <h2 className="h-section mt-3">{s.title}</h2>
                <p className="mt-3 text-lg font-medium text-ink/80">{s.tagline}</p>
                <p className="copy mt-4 text-steel">{s.summary}</p>
                <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                  {s.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 border border-edge bg-paper px-3.5 py-3 text-sm font-medium"
                    >
                      <Check
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mint"
                        strokeWidth={2.25}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 bg-night px-5 py-3.5 text-sm font-semibold text-white hover:bg-brand"
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

      <section className="px-4 py-20 md:px-6 md:py-24">
        <motion.div className="night mx-auto max-w-6xl px-6 py-14 text-white md:px-12" {...fade}>
          <h2 className="h-section max-w-2xl">Ready for a clear next step?</h2>
          <p className="copy mt-4 max-w-xl text-white/55">
            Tell us your stage. We map design, build, growth, funding, automation, and
            hiring into a practical plan.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-white px-5 py-3.5 text-sm font-semibold text-ink hover:bg-canvas"
          >
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
