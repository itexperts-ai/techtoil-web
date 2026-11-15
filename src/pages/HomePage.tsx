import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { aiHighlights, services } from '../data/services'
import { company } from '../data/company'

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
}

const method = [
  { n: '01', t: 'Discover', d: 'Clarify stage, constraints, and the outcome that matters most.' },
  { n: '02', t: 'Map', d: 'Choose the craft mix — design, build, growth, funding, AI, hiring.' },
  { n: '03', t: 'Build', d: 'Ship in focused sprints with shared context across every workstream.' },
  { n: '04', t: 'Operate', d: 'Hand over systems people and AI can run without firefighting.' },
]

const lookWidths = [
  'w-[18rem] sm:w-[22rem]',
  'w-[14rem] sm:w-[16rem]',
  'w-[16rem] sm:w-[19rem]',
  'w-[15rem] sm:w-[17rem]',
]

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1])
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '6%'])

  return (
    <div>
      {/* Hero — campaign still */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: imgScale, y: imgY }}>
          <img
            src="/media/hero.jpg"
            alt=""
            className="h-full w-full object-cover object-[58%_center] saturate-[0.88]"
          />
        </motion.div>
        <div className="hero-wash absolute inset-0" />
        <div className="grain z-[1]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-end px-4 pb-16 pt-28 md:items-center md:px-8 md:pb-20">
          <div className="hero-copy max-w-2xl">
            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="citron-label">Atelier · 2026</span>
              <span className="text-xs font-medium tracking-[0.14em] text-ink/55 uppercase">
                Delhi · Noida
              </span>
            </motion.div>
            <motion.h1
              className="display mt-7 text-ink"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Build what{' '}
              <span className="display-italic relative inline-block">
                lasts.
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] w-[42%] bg-accent-bright"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.55, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: 'left' }}
                  aria-hidden
                />
              </span>
            </motion.h1>
            <motion.p
              className="lede mt-6 max-w-lg text-ink/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              Design, ship, grow, fund, automate, and hire — one connected studio path, with
              AI in the loop.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/contact" className="link-line text-ink">
                Start a brief <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href="#collection" className="text-sm font-medium text-ink/50 hover:text-ink">
                View collection
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lookbook — bleeds to edge, lead card larger */}
      <section id="collection" className="scroll-mt-24 bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            {...fade}
            className="flex flex-col gap-4 border-b border-line pb-10 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="eyebrow text-mute">No. 01 — Collection</p>
              <h2 className="title mt-4">Seven practices.</h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-mute md:text-right">
              A lookbook of craft. Scroll, then open any practice in full.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="lookbook-scroll mt-10 pl-4 md:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {services.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`group relative h-[24rem] shrink-0 overflow-hidden transition-transform duration-300 hover:-translate-y-2 sm:h-[30rem] ${lookWidths[i % lookWidths.length]}`}
              style={{ scrollSnapAlign: 'start' }}
            >
              <img
                src={s.image}
                alt=""
                className="h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="font-display text-sm italic text-accent-bright">{s.num}</p>
                <p className="mt-2 font-display text-[1.65rem] font-medium leading-[1.05] tracking-[-0.03em] text-white sm:text-[2rem]">
                  {s.title}
                </p>
              </div>
              <span className="absolute bottom-0 left-0 h-0 w-full bg-accent-bright transition-all duration-300 group-hover:h-3" />
            </a>
          ))}
        </motion.div>
      </section>

      {/* Plate — overlapping editorial */}
      <section className="relative overflow-hidden bg-bg">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-12">
          <motion.div {...fade} className="relative min-h-[24rem] lg:col-span-8 lg:min-h-[36rem]">
            <img
              src="/media/svc-design.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 hidden md:block lg:bottom-10 lg:left-10">
              <p className="font-display text-6xl italic font-medium leading-none text-white/90 lg:text-8xl">
                studio
              </p>
            </div>
          </motion.div>
          <motion.div
            {...fade}
            className="relative z-10 flex flex-col justify-center bg-paper px-5 py-14 md:px-10 lg:col-span-4 lg:py-20 lg:-ml-8 lg:mt-16 lg:mb-16 lg:shadow-[0_40px_80px_-40px_rgba(14,13,12,0.25)]"
          >
            <span className="font-display text-5xl font-medium text-accent-bright">01</span>
            <h2 className="title mt-5">One studio for every stage.</h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-mute">
              Stop stitching vendors. Keep product, growth, capital readiness, intelligence,
              and talent on a shared plan — so craft and AI move together.
            </p>
            <Link to="/about" className="link-line mt-8 w-fit text-ink">
              About the atelier <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Method — verso / recto */}
      <section className="bg-paper px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div {...fade}>
            <p className="eyebrow text-mute">No. 02 — Method</p>
            <h2 className="title mt-4">
              From brief to{' '}
              <span className="display-italic text-[length:inherit]">running</span> systems.
            </h2>
            <div className="mt-12 space-y-0">
              {method.map((step, i) => (
                <motion.div
                  key={step.n}
                  className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-line py-7 first:border-t-0 first:pt-0"
                  {...fade}
                  transition={{ ...fade.transition, delay: i * 0.05 }}
                >
                  <span className="font-display text-2xl font-medium text-accent-bright">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium tracking-[-0.02em]">
                      {step.t}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mute">{step.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fade} className="relative min-h-[22rem] overflow-hidden lg:min-h-full">
            <img
              src="/media/svc-aiops.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/10" />
          </motion.div>
        </div>
      </section>

      {/* Quote band */}
      <section className="border-y border-line bg-surface px-4 py-16 md:px-8 md:py-20">
        <motion.blockquote
          className="mx-auto max-w-4xl text-center"
          {...fade}
        >
          <p className="font-display text-2xl font-medium leading-snug tracking-[-0.03em] md:text-4xl md:leading-[1.2]">
            “Hierarchy from type and photograph — not from noise.”
          </p>
          <footer className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-mute">
            Techtoil atelier note
          </footer>
        </motion.blockquote>
      </section>

      {/* Intelligence */}
      <section className="band-dark relative overflow-hidden px-4 py-20 text-white md:px-8 md:py-28">
        <div className="grain opacity-[0.06]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div {...fade} className="max-w-2xl">
            <span className="citron-label">Intelligence</span>
            <h2 className="title mt-7">AI built into operations.</h2>
            <p className="lede mt-5 text-white/55">
              Agents, workflows, and automation that remove friction — without giving up
              control.
            </p>
          </motion.div>
          <div className="mt-14 grid gap-10 border-t border-white/10 pt-12 md:grid-cols-3">
            {aiHighlights.map((h, i) => (
              <motion.div
                key={h.title}
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.07 }}
              >
                <p className="text-[0.62rem] font-semibold tracking-[0.18em] text-accent-bright">
                  0{i + 1}
                </p>
                <p className="mt-3 font-display text-2xl font-medium tracking-[-0.03em]">
                  {h.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/45">{h.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services depth */}
      <div id="services" className="scroll-mt-24">
        <div className="bg-paper px-4 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow text-mute">No. 03 — Depth</p>
            <h2 className="title mt-4 max-w-xl">Every craft, in full.</h2>
          </div>
        </div>

        {services.map((s, i) => {
          const reverse = i % 2 === 1
          return (
            <section
              key={s.id}
              id={s.id}
              className={`scroll-mt-24 px-4 py-16 md:px-8 md:py-24 ${
                reverse ? 'bg-bg' : 'bg-paper'
              }`}
            >
              <div
                className={`mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-12 ${
                  reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <motion.div {...fade} className="lg:col-span-5">
                  <p className="eyebrow text-mute">
                    {s.num} · Practice
                  </p>
                  <h2 className="title mt-4">{s.title}</h2>
                  <p className="mt-4 font-display text-xl italic leading-snug text-ink/75">
                    {s.tagline}
                  </p>
                  <p className="lede mt-5 text-mute">{s.summary}</p>
                  <ul className="mt-8 space-y-3.5">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-ink" strokeWidth={1.75} />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="link-line mt-9 w-fit text-ink">
                    Discuss {s.title} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div {...fade} className="relative lg:col-span-7">
                  <span className="pointer-events-none absolute -left-2 -top-6 z-10 hidden font-display text-7xl font-medium text-accent-bright/90 md:block lg:-left-4 lg:text-8xl">
                    {s.num}
                  </span>
                  <img
                    src={s.image}
                    alt={s.title}
                    className="aspect-[4/5] w-full object-cover md:aspect-[5/4]"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </section>
          )
        })}
      </div>

      {/* Visit */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <motion.div
            {...fade}
            className="flex flex-col justify-center px-4 py-16 md:px-10 md:py-24"
          >
            <p className="eyebrow text-mute">No. 04 — Visit</p>
            <h2 className="title mt-4">
              Send a <span className="display-italic text-[length:inherit]">brief.</span>
            </h2>
            <p className="mt-5 max-w-md text-mute">
              Tell us your stage. We’ll map the craft into one practical plan.
            </p>
            <p className="mt-8 text-sm leading-relaxed text-mute">
              {company.registeredOffice.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p className="mt-3 text-sm font-medium">
              <a href={`mailto:${company.email}`} className="hover:opacity-60">
                {company.email}
              </a>
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex w-fit items-center gap-2 bg-accent-bright px-6 py-3.5 text-sm font-bold text-ink hover:bg-accent"
            >
              Book a call <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div {...fade} className="relative min-h-[24rem] lg:min-h-[32rem]">
            <img
              src="/media/svc-consult.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
