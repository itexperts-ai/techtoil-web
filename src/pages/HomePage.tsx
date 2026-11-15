import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { Logo } from '../components/brand/Logo'
import { aiHighlights, services } from '../data/services'

const fade = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
}

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <div>
      {/* Premium full-bleed hero */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src="/media/hero.jpg"
            alt=""
            className="h-[115%] w-full object-cover object-[68%_center]"
          />
        </motion.div>
        <div className="hero-wash absolute inset-0" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-16 pt-28 md:px-6 md:pb-20">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <Logo to={null} size="hero" />
            <div className="mt-7 flex items-center gap-3">
              <span className="rule-brass h-px w-12" />
              <span className="eyebrow text-jade">Atelier · Vision → Execution</span>
            </div>
            <h1 className="display mt-6 text-ink">
              From vision to a business that runs.
            </h1>
            <p className="lede mt-5 max-w-md text-mute">
              Design, build, grow, fund, automate, and hire — with AI in the loop.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-jade px-5 py-3.5 text-sm font-semibold text-white hover:bg-jade-deep"
              >
                View services <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center border border-ink/15 bg-mist/85 px-5 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm hover:border-ink/30"
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architectural statement */}
      <section className="border-y border-line bg-mist px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[auto_1fr] md:items-center md:gap-14">
          <motion.p
            className="font-display text-6xl font-extrabold tracking-[-0.08em] text-jade/20 md:text-8xl"
            {...fade}
          >
            07
          </motion.p>
          <motion.div {...fade}>
            <p className="eyebrow text-brass">Studio model</p>
            <h2 className="title mt-3 max-w-2xl">
              Seven crafts. One atelier. Zero fragmentation.
            </h2>
            <p className="mt-4 max-w-xl text-mute">
              Product, growth, capital readiness, intelligence, and talent stay on the same
              path — so execution compounds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars — premium vertical rules */}
      <section className="bg-mist px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade}>
            <p className="eyebrow text-jade">Principles</p>
            <h2 className="title mt-4 max-w-xl">
              How we move from vision to a running business.
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-0 border-t border-line md:grid-cols-3">
            {[
              {
                t: 'One partner',
                d: 'Design, engineering, marketing, funding, AI ops, and hiring stay connected under one roof.',
              },
              {
                t: 'Outcome first',
                d: 'We start from where you want to go — then choose the craft that actually moves it.',
              },
              {
                t: 'AI with control',
                d: 'Automate repetitive work while people keep judgment, ownership, and taste.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.t}
                className="border-b border-line px-0 py-8 md:border-b-0 md:border-r md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.06 }}
              >
                <span className="font-display text-sm font-bold tracking-[0.18em] text-brass">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.03em]">
                  {item.t}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-mute">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence — immersive */}
      <section className="band-obsidian px-4 py-20 text-white md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <motion.div {...fade} className="flex flex-col justify-between">
              <div>
                <p className="eyebrow text-jade-bright">Intelligence</p>
                <h2 className="title mt-4">AI woven into the operating fabric.</h2>
                <p className="lede mt-5 text-white/60">
                  Agents, workflows, and automation that remove friction — without giving up
                  control.
                </p>
              </div>
              <div className="mt-10 hidden border-t border-white/10 pt-6 lg:block">
                <p className="text-sm text-white/45">
                  Governed systems · Human judgment · Production integrations
                </p>
              </div>
            </motion.div>

            <motion.div {...fade} className="space-y-0">
              {aiHighlights.map((h, idx) => (
                <div
                  key={h.title}
                  className="group grid grid-cols-[4rem_1fr] gap-5 border-t border-white/10 py-7 first:border-0 first:pt-0"
                >
                  <span className="font-display text-3xl font-bold tracking-[-0.06em] text-jade-bright/70 transition group-hover:text-jade-bright">
                    0{idx + 1}
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold tracking-[-0.02em]">
                      {h.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{h.body}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div className="relative mt-14 overflow-hidden" {...fade}>
            <img
              src="/media/svc-aiops.jpg"
              alt="AI operations"
              className="aspect-[21/9] w-full object-cover md:aspect-[24/9]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian/50 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <div id="services" className="scroll-mt-24">
        <div className="border-t border-line bg-mist px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow text-jade">Capabilities</p>
                <h2 className="title mt-3">Craft, in full detail.</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-mute">
                Every service is productized — clear outcomes, clear scope, connected to the
                rest of the atelier.
              </p>
            </div>
          </div>
        </div>

        {services.map((s, i) => {
          const reverse = i % 2 === 1
          return (
            <section
              key={s.id}
              id={s.id}
              className={`scroll-mt-24 border-t border-line px-4 py-16 md:px-6 md:py-20 ${
                reverse ? 'bg-bg' : 'bg-mist'
              }`}
            >
              <div
                className={`mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12 lg:gap-10 ${
                  reverse ? '' : ''
                }`}
              >
                <motion.div
                  className={`lg:col-span-6 ${reverse ? 'lg:order-2' : ''}`}
                  {...fade}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="font-display text-5xl font-extrabold tracking-[-0.08em] text-jade">
                      {s.num}
                    </span>
                    <span className="rule-brass h-px flex-1" />
                  </div>
                  <h2 className="title">{s.title}</h2>
                  <p className="mt-3 text-lg font-semibold tracking-[-0.02em] text-ink/85">
                    {s.tagline}
                  </p>
                  <p className="lede mt-4 text-mute">{s.summary}</p>
                  <ul className="mt-8 grid gap-2 sm:grid-cols-2">
                    {s.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2.5 border border-line bg-surface px-3.5 py-3 text-sm font-medium"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-jade"
                          strokeWidth={2.5}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 bg-obsidian px-5 py-3.5 text-sm font-semibold text-white hover:bg-jade"
                  >
                    Discuss {s.title} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>

                <motion.div
                  className={`relative lg:col-span-6 ${reverse ? 'lg:order-1' : ''}`}
                  {...fade}
                >
                  <div className="absolute -bottom-4 -right-4 hidden h-full w-full border border-brass/30 lg:block" />
                  <img
                    src={s.image}
                    alt={s.title}
                    className="relative aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </section>
          )
        })}
      </div>

      {/* Closing */}
      <section className="bg-mist px-4 py-20 md:px-6 md:py-24">
        <motion.div className="mx-auto max-w-6xl overflow-hidden" {...fade}>
          <div className="grid lg:grid-cols-2">
            <div className="band-obsidian px-8 py-14 text-white md:px-12 md:py-16">
              <p className="eyebrow text-brass">Begin</p>
              <h2 className="title mt-4">Let’s design the next step.</h2>
              <p className="lede mt-4 max-w-md text-white/60">
                Share your stage. We’ll map design, build, growth, funding, automation, and
                hiring into one clear plan.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-jade-bright px-5 py-3.5 text-sm font-semibold text-obsidian hover:bg-white"
              >
                Start a conversation <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative min-h-[16rem] bg-jade">
              <img
                src="/media/svc-design.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-luminosity"
              />
              <div className="relative flex h-full flex-col justify-between p-8 text-white md:p-10">
                <p className="eyebrow text-white/70">Promise</p>
                <div>
                  <p className="font-display text-3xl font-extrabold tracking-[-0.04em] md:text-4xl">
                    Vision
                    <br />
                    <span className="text-brass">→</span> Execution
                  </p>
                  <p className="mt-4 max-w-xs text-sm text-white/85">
                    Premium craft. Connected systems. Outcomes you can run.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
