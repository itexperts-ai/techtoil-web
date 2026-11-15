import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export function AboutPage() {
  return (
    <div className="bg-bg px-4 pb-24 pt-32 md:px-6 md:pt-40">
      <div className="mx-auto max-w-3xl">
        <p className="type-mono text-blue">About</p>
        <h1 className="type-title mt-4">
          An AIM-led studio for businesses that need to move.
        </h1>
        <div className="type-lead mt-8 space-y-5 text-soft">
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
          className="mt-10 inline-flex items-center gap-2 bg-slate px-5 py-3 text-[0.8125rem] font-semibold text-white hover:bg-blue"
        >
          Work with us <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}
