import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { company } from '../data/company'

export function AboutPage() {
  return (
    <div className="bg-fog px-4 pb-24 pt-32 md:px-6 md:pt-40">
      <div className="mx-auto max-w-2xl">
        <p className="label text-volt">About</p>
        <h1 className="headline mt-4">{company.legalName}</h1>
        <div className="lede mt-8 space-y-5 text-mute">
          <p>
            {company.brandName} helps organizations go from vision to execution with
            product design, development, marketing, consultancy, funding readiness, AI
            operations, and hiring support.
          </p>
          <p>
            Those capabilities stay connected — so AI, craft, and strategy work as one
            path.
          </p>
        </div>
        <div className="mt-10 border border-rule bg-snow p-5 text-sm text-mute md:p-6">
          <p className="label text-sea">Registered Office</p>
          <p className="mt-3 leading-relaxed">
            {company.registeredOffice.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="mt-3 text-xs text-dim">CIN: {company.cin}</p>
        </div>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 bg-void px-5 py-3.5 text-sm font-semibold text-white hover:bg-volt"
        >
          Work with us <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
