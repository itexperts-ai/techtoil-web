import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export function AboutPage() {
  return (
    <div className="bg-snow">
      <section className="border-b border-line px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">About</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.04em] md:text-5xl md:leading-[1.05]">
            A studio built for the full arc of a business.
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-mute">
            <p>
              Techtoil partners with founders and operators who need more than a
              single specialty. We help shape products, ship platforms, grow
              presence, prepare for capital, automate operations, and hire with
              intent.
            </p>
            <p>
              The aim is always the same: shorten the distance between what you
              imagine and what customers can use — with clarity at every step.
            </p>
          </div>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3.5 text-sm font-bold text-white hover:bg-accent"
          >
            Work with us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
