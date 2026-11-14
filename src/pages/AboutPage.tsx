import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export function AboutPage() {
  return (
    <div className="bg-navy px-4 pb-24 pt-32 text-ink md:px-6 md:pt-40">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">About</p>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white md:text-5xl">
          A studio for the full business journey.
        </h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-mute">
          <p>
            Techtoil partners with founders and operators who want design,
            product, growth, guidance, AI operations, and hiring in one coherent
            path — mapped to where the business actually is.
          </p>
          <p>
            We organize around Launch, Scale, Automate, and Strengthen so you get
            outcomes, not an endless services menu.
          </p>
        </div>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3.5 text-sm font-bold text-navy hover:bg-gold-dark"
        >
          Work with us <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
