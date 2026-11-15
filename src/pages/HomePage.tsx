import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { aiHighlights, services } from '../data/services'

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
}

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])

  return (
    <div>
      {/* NEW runway hero — ice field + mega brand + full-bleed media plane */}
      <section ref={heroRef} className="relative overflow-hidden pt-[4.25rem]">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-10 md:px-6 md:pb-12 md:pt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow text-ember">Studio · Vision → Execution</p>
            <h1 className="mega-brand mt-5 text-polar">
              Tech<span className="text-ember">toil</span>
            </h1>
            <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <p className="display max-w-xl text-polar">
                From vision to a business that runs.
              </p>
              <div className="md:pb-1">
                <p className="lede text-mute">
                  Design, build, grow, fund, automate, and hire — with AI in the loop.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 bg-ember px-5 py-3.5 text-sm font-bold text-white hover:bg-ember-deep"
                  >
                    Explore services <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center border border-ink/15 bg-surface px-5 py-3.5 text-sm font-bold text-ink hover:border-ink/35"
                  >
                    Talk to us
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[42vh] min-h-[16rem] w-full overflow-hidden md:h-[52vh]">
          <motion.img
            src="/media/hero.jpg"
            alt=""
            className="absolute inset-0 h-[120%] w-full object-cover object-center"
            style={{ y: mediaY }}
            initial={{ opacity: 0.6, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-polar/35 via-transparent to-bg/30" />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-4 md:px-6">
            <span className="eyebrow text-white/80">AIM · Product · Growth · Ops</span>
            <span className="hidden text-xs font-semibold tracking-wide text-white/70 sm:inline">
              7 connected capabilities
            </span>
          </div>
        </div>
      </section>

      {/* Capability strip — bento-inspired, not the old 3-column band only */}
      <section className="border-y border-line bg-ice px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade} className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-ember">Operating system</p>
              <h2 className="title mt-3 max-w-lg">One studio. One path. Multiple crafts.</h2>
            </div>
            <p className="max-w-sm text-sm text-mute">
              Strategy, product, growth, and intelligence stay linked — so execution does not
              fragment.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-3 md:grid-cols-6">
            {[
              {
                t: 'One partner',
                d: 'Design through hiring under one roof.',
                span: 'md:col-span-2',
              },
              {
                t: 'Outcome first',
                d: 'Start from the destination, then pick the craft.',
                span: 'md:col-span-2',
              },
              {
                t: 'AI with control',
                d: 'Automate the repetitive. Keep human judgment.',
                span: 'md:col-span-2',
              },
              {
                t: 'Build & ship',
                d: 'Product design and engineering that survive growth.',
                span: 'md:col-span-3',
              },
              {
                t: 'Grow & staff',
                d: 'Demand systems, funding readiness, and hiring velocity.',
                span: 'md:col-span-3',
              },
            ].map((item, i) => (
              <motion.div
                key={item.t}
                className={`border border-line bg-surface p-5 md:p-6 ${item.span}`}
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.04 }}
              >
                <h3 className="font-display text-base font-semibold tracking-[-0.03em] md:text-lg">
                  {item.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="band-polar px-4 py-20 text-white md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fade}>
            <p className="eyebrow text-ember">Intelligence</p>
            <h2 className="title mt-4">AI built into operations.</h2>
            <p className="lede mt-4 text-white/65">
              Agents, workflows, and automation that remove friction — without giving up
              control.
            </p>
            <ul className="mt-8 space-y-5">
              {aiHighlights.map((h) => (
                <li key={h.title} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-ember" strokeWidth={2.5} />
                  <div>
                    <p className="font-semibold">{h.title}</p>
                    <p className="mt-1 text-sm text-white/55">{h.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fade} className="relative">
            <img
              src="/media/svc-aiops.jpg"
              alt="AI operations"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute -right-3 -top-3 h-20 w-3 bg-ember" />
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
                reverse ? 'bg-bg' : 'bg-ice'
              }`}
            >
              <div
                className={`mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 ${
                  reverse ? 'lg:grid-cols-[1.1fr_0.9fr] lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <motion.div {...fade}>
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-4xl font-bold tracking-[-0.06em] text-ember/90">
                      {s.num}
                    </span>
                    <span className="eyebrow text-mute">Service</span>
                  </div>
                  <h2 className="title mt-4">{s.title}</h2>
                  <p className="mt-3 text-lg font-semibold tracking-[-0.02em] text-ink/85">
                    {s.tagline}
                  </p>
                  <p className="lede mt-4 text-mute">{s.summary}</p>
                  <ul className="mt-7 space-y-2">
                    {s.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2.5 border-b border-line py-2.5 text-sm font-medium last:border-0"
                      >
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ember"
                          strokeWidth={2.5}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 bg-polar px-5 py-3.5 text-sm font-bold text-white hover:bg-ember"
                  >
                    Discuss {s.title} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div {...fade} className="relative overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="aspect-[5/4] w-full object-cover md:aspect-[4/3]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-polar/25 to-transparent" />
                </motion.div>
              </div>
            </section>
          )
        })}
      </div>

      <section className="px-4 py-20 md:px-6 md:py-24">
        <motion.div
          className="mx-auto max-w-6xl overflow-hidden border border-line bg-surface"
          {...fade}
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="eyebrow text-ember">Next step</p>
              <h2 className="title mt-4">Ready for a clearer path?</h2>
              <p className="lede mt-4 text-mute">
                Tell us your stage. We map design, build, growth, funding, automation, and
                hiring into one plan.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-ember px-5 py-3.5 text-sm font-bold text-white hover:bg-ember-deep"
              >
                Start a conversation <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="band-polar relative min-h-[14rem] p-8 text-white md:p-12">
              <p className="font-display text-3xl font-bold tracking-[-0.04em] md:text-4xl">
                Vision
                <br />
                <span className="text-ember">→</span> Execution
              </p>
              <p className="mt-6 max-w-xs text-sm text-white/55">
                Product, growth, capital readiness, AI ops, and talent — connected.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
