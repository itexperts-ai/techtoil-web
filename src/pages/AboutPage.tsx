import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { company } from '../data/company'

export function AboutPage() {
  return (
    <div className="band-soft px-4 pb-24 pt-32 md:px-6 md:pt-40">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow text-accent">About</p>
        <h1 className="title mt-4">{company.legalName}</h1>
        <div className="lede mt-8 space-y-5 text-mute">
          <p>
            {company.brandName} helps organizations go from vision to execution with product
            design, development, marketing, consultancy, funding readiness, AI operations,
            and hiring support.
          </p>
          <p>
            Those capabilities stay connected — so AI, craft, and strategy work as one path.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl bg-surface/90 p-6 ring-1 ring-ink/5 md:p-7">
            <p className="eyebrow text-accent">Registered Office</p>
            <p className="mt-3 text-sm leading-relaxed text-mute">
              {company.registeredOffice.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p className="mt-3 text-xs text-faint">CIN: {company.cin}</p>
          </div>
          <div className="rounded-3xl bg-surface/90 p-6 ring-1 ring-ink/5 md:p-7">
            <p className="eyebrow text-accent">Operations</p>
            <p className="mt-3 text-sm leading-relaxed text-mute">
              {company.operationsOffice.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>

        <Link to="/contact" className="btn-primary mt-10">
          Work with us <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
