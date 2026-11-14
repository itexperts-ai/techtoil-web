import { Link } from 'react-router-dom'

export function AboutPage() {
  return (
    <div className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-signal">About</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
          Techtoil is a studio for people who build.
        </h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
          <p>
            We partner with founders, operators, and growing teams who need more
            than a single specialty. Product, engineering, growth, guidance,
            automation, and talent — whatever the next stage demands.
          </p>
          <p>
            Our aim is simple: help you move from vision to something that runs
            in the real world, without losing the thread between strategy and
            shipping.
          </p>
          <p>
            Company history, team bios, and client proof can live here when you
            are ready to publish them — we do not invent credentials.
          </p>
        </div>
        <Link
          to="/contact"
          className="mt-10 inline-flex rounded-md bg-ink px-5 py-3 text-sm font-bold text-white hover:bg-signal"
        >
          Work with us
        </Link>
      </div>
    </div>
  )
}
