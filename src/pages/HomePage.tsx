import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown, ArrowUpRight, Check } from 'lucide-react'
import { aiHighlights, services } from '../data/services'

const fade = {
  initial: { opacity: 0, y: 28 },
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
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  return (
    <div>
      {/* Hero rebuilt — no Techtoil wordmark */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src="/media/hero.jpg"
            alt=""
            className="h-[120%] w-full object-cover object-[70%_center]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-mist via-mist/88 to-mist/15 md:via-mist/75 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-mist/90 via-transparent to-mist/40" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-14 pt-28 md:justify-center md:px-6 md:pb-20">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 border border-jade/20 bg-mist/70 px-3.5 py-2 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-jade" />
              <span className="eyebrow text-jade">Vision → Execution</span>
            </div>

            <h1 className="display mt-7 text-ink md:mt-8">
              Build the business
              <span className="block text-jade">behind the idea.</span>
            </h1>

            <p className="lede mt-6 max-w-lg text-mute">
              Design, engineering, growth, funding, AI operations, and hiring — connected as
              one path from first sketch to running systems.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-jade px-6 py-3.5 text-sm font-semibold text-white hover:bg-jade-deep"
              >
                Explore services <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-ink/15 bg-surface/80 px-6 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm hover:border-ink/30"
              >
                Book a conversation
              </Link>
            </div>

            <a
              href="#path"
              className="mt-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-mute hover:text-ink"
            >
              See the path <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Path strip */}
      <section id="path" className="scroll-mt-24 border-y border-line bg-obsidian px-4 py-5 text-white md:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/55">
          {['Design', 'Build', 'Grow', 'Fund', 'Automate', 'Hire'].map((step, i) => (
            <span key={step} className="inline-flex items-center gap-3">
              {i > 0 && <span className="hidden text-brass sm:inline">—</span>}
              <span className="hover:text-white">{step}</span>
            </span>
          ))}
        </div>
      </section>

      {/* Why us — new layout */}
      <section className="bg-mist px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end"
            {...fade}
          >
            <div>
              <p className="eyebrow text-jade">Why this model</p>
              <h2 className="title mt-4">
                One atelier for every stage of execution.
              </h2>
            </div>
            <p className="lede text-mute">
              Most teams stitch five vendors together. We keep product, growth, capital
              readiness, intelligence, and talent on a single line — so momentum does not
              leak between handoffs.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {[
              {
                n: '01',
                t: 'Unified delivery',
                d: 'Design through hiring stay in one operating rhythm — shared context, shared goals.',
              },
              {
                n: '02',
                t: 'Outcome ownership',
                d: 'We start from the destination you need, then assemble the crafts that move it.',
              },
              {
                n: '03',
                t: 'Intelligent ops',
                d: 'AI removes friction in the workflow while people keep judgment and control.',
              },
            ].map((item, i) => (
              <motion.article
                key={item.n}
                className="flex min-h-[16rem] flex-col justify-between border border-line bg-surface p-7 md:p-8"
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.05 }}
              >
                <span className="font-display text-4xl font-extrabold tracking-[-0.07em] text-jade/25">
                  {item.n}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-[-0.03em]">{item.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute">{item.d}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* AI — rebuilt */}
      <section className="band-obsidian overflow-hidden px-4 py-20 text-white md:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fade} className="relative">
            <img
              src="/media/svc-aiops.jpg"
              alt="AI operations"
              className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-transparent p-6 pt-20">
              <p className="text-sm font-semibold text-jade-bright">
                Agents · Workflows · Human control
              </p>
            </div>
          </motion.div>

          <motion.div {...fade}>
            <p className="eyebrow text-jade-bright">Intelligence layer</p>
            <h2 className="title mt-4">AI that runs inside the business — not beside it.</h2>
            <p className="lede mt-5 text-white/60">
              We design automation that updates real systems, with clear handoffs where
              people stay accountable.
            </p>
            <ul className="mt-10 space-y-6">
              {aiHighlights.map((h) => (
                <li key={h.title} className="flex gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border border-jade-bright/40">
                    <Check className="h-4 w-4 text-jade-bright" strokeWidth={2.5} />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold tracking-[-0.02em]">
                      {h.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/55">{h.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Services — rebuilt */}
      <div id="services" className="scroll-mt-24">
        <div className="border-t border-line bg-mist px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow text-jade">Services</p>
              <h2 className="title mt-3">Seven capabilities. Full depth.</h2>
            </div>
            <p className="max-w-xs text-sm text-mute md:text-right">
              Product-level detail for every craft — from first concept to hired teams.
            </p>
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
                className={`mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <motion.div {...fade}>
                  <p className="eyebrow text-brass">{s.num} / Service</p>
                  <h2 className="title mt-4">{s.title}</h2>
                  <p className="mt-3 text-lg font-semibold tracking-[-0.02em] text-ink/85">
                    {s.tagline}
                  </p>
                  <p className="lede mt-4 text-mute">{s.summary}</p>

                  <div className="mt-8 grid gap-2 sm:grid-cols-2">
                    {s.details.map((d) => (
                      <div
                        key={d}
                        className="flex items-start gap-2.5 border-l-2 border-jade/40 bg-surface/80 py-3 pl-3.5 pr-3 text-sm font-medium"
                      >
                        {d}
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 bg-obsidian px-5 py-3.5 text-sm font-semibold text-white hover:bg-jade"
                  >
                    Discuss {s.title} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>

                <motion.div {...fade} className="relative">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute left-0 top-0 h-full w-1 bg-jade" />
                </motion.div>
              </div>
            </section>
          )
        })}
      </div>

      {/* CTA — rebuilt */}
      <section className="bg-mist px-4 py-20 md:px-6 md:py-24">
        <motion.div
          className="mx-auto max-w-6xl border border-line bg-surface"
          {...fade}
        >
          <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
            <div className="p-8 md:p-12 lg:p-14">
              <p className="eyebrow text-jade">Next move</p>
              <h2 className="title mt-4 max-w-lg">
                Tell us where you are. We’ll map what to do next.
              </h2>
              <p className="lede mt-4 max-w-md text-mute">
                A practical plan across design, build, growth, funding, automation, and
                hiring — sized to your stage.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-jade px-6 py-3.5 text-sm font-semibold text-white hover:bg-jade-deep"
              >
                Start a conversation <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="band-obsidian flex flex-col justify-between p-8 text-white md:p-12">
              <p className="eyebrow text-brass">What you get</p>
              <ul className="mt-8 space-y-4 text-sm text-white/70 lg:mt-0">
                <li className="border-t border-white/10 pt-4">Clear priority map</li>
                <li className="border-t border-white/10 pt-4">Craft mix for your stage</li>
                <li className="border-t border-white/10 pt-4">AI + people operating model</li>
                <li className="border-t border-white/10 pt-4">Path to a running business</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
