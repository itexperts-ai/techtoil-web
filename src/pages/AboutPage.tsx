import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export function AboutPage() {
  return (
    <div className="bg-bg px-4 pb-24 pt-32 md:px-6 md:pt-40">
      <div className="mx-auto max-w-2xl">
        <p className="eyebrow text-accent">About</p>
        <h1 className="title mt-4">
          A professional studio for businesses that need to move.
        </h1>
        <div className="body-lg mt-8 space-y-5 text-muted">
          <p>
            Techtoil helps organizations go from vision to execution with product
            design, development, marketing, consultancy, funding readiness, AI
            operations, and hiring support.
          </p>
          <p>
            Those capabilities stay connected — so AI, craft, and strategy work as
            one path.
          </p>
        </div>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 bg-deep px-5 py-3.5 text-sm font-semibold text-white hover:bg-accent"
        >
          Work with us <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
