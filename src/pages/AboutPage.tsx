import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export function AboutPage() {
  return (
    <div className="bg-sand">
      <section className="px-4 pb-20 pt-32 md:px-6 md:pb-28 md:pt-36">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sea">About</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.04em] md:text-5xl md:leading-[1.05]">
            A studio for the full arc of a business.
          </h1>
          <p className="mt-6 font-serif text-xl italic leading-snug text-ink/85 md:text-2xl">
            We help ambitious teams keep one clear thread from idea to a product
            customers can feel — and a company that can grow.
          </p>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-mute">
            <p>
              Techtoil brings together product craft, engineering, growth,
              guidance, intelligent operations, and hiring support. Not as
              separate shops — as one conversation that stays with the work.
            </p>
            <p>
              Our aim is to shorten the distance between vision and something
              that runs, without losing clarity along the way.
            </p>
          </div>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-tide px-5 py-3.5 text-sm font-bold text-white hover:bg-sea"
          >
            Work with us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
