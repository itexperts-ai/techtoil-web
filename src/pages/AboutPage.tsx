import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export function AboutPage() {
  return (
    <div className="bg-snow">
      <section className="border-b border-line px-4 pb-20 pt-32 md:px-6 md:pb-28 md:pt-36">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">About</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-[-0.045em] md:text-5xl md:leading-[1.05]">
            We help ambitious teams finish what they start.
          </h1>
          <p className="mt-6 font-story text-xl leading-snug text-ink/80 md:text-2xl">
            Techtoil is a studio for the full arc of a business — from the first
            sketch of an idea to a product, a pipeline, and an operation that can
            grow.
          </p>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-mute">
            <p>
              We work with founders and operators who are tired of stitching
              together disconnected help. Design, engineering, growth, guidance,
              automation, and hiring should feel like one story — not seven
              separate projects.
            </p>
            <p>
              That is our aim: keep the thread intact from vision to something
              customers can use, and leave your team stronger than we found it.
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
