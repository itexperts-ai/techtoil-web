import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export function AboutPage() {
  return (
    <div className="bg-bg px-4 pb-24 pt-32 md:px-6 md:pt-40">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue">About</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
          An AIM-led studio for businesses that need to move.
        </h1>
        <div className="mt-8 space-y-5 text-lg text-soft">
          <p>
            Techtoil helps businesses move from vision to execution with product
            design, development, marketing, consultancy, funding readiness, AI
            operations, and hiring support.
          </p>
          <p>
            We keep those capabilities connected — so AI, craft, and strategy
            work as one path, not seven disconnected vendors.
          </p>
        </div>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 bg-slate px-5 py-3.5 text-sm font-bold text-white hover:bg-blue"
        >
          Work with us <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
