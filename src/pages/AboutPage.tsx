import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { company } from '../data/company'

export function AboutPage() {
  return (
    <div className="bg-canvas px-4 pb-24 pt-32 md:px-6 md:pt-40">
      <div className="mx-auto max-w-2xl">
        <p className="kicker text-brand">About</p>
        <h1 className="h-section mt-4">
          {company.legalName}
        </h1>
        <div className="copy mt-8 space-y-5 text-steel">
          <p>
            {company.brandName} helps organizations go from vision to execution with
            product design, development, marketing, consultancy, funding readiness,
            AI operations, and hiring support.
          </p>
          <p>
            Those capabilities stay connected — so AI, craft, and strategy work as
            one path.
          </p>
        </div>

        <div className="mt-10 border border-edge bg-paper p-5 text-sm text-steel md:p-6">
          <p className="kicker text-mint">Registered Office</p>
          <p className="mt-3 leading-relaxed">
            {company.registeredOffice.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="mt-3 text-xs text-haze">CIN: {company.cin}</p>
        </div>

        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 bg-night px-5 py-3.5 text-sm font-semibold text-white hover:bg-brand"
        >
          Work with us <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
