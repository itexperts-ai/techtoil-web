import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { company } from '../data/company'

export function AboutPage() {
  return (
    <div className="bg-bg px-4 pb-24 pt-32 md:px-8 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="citron-label">About</span>
            <h1 className="title mt-6">{company.legalName}</h1>
          </div>
          <div className="lede space-y-5 text-mute lg:col-span-7">
            <p>
              {company.brandName} helps organizations go from vision to execution with product
              design, development, marketing, consultancy, funding readiness, AI operations,
              and hiring support.
            </p>
            <p>
              Those capabilities stay connected — so AI, craft, and strategy work as one path.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px bg-line md:grid-cols-2">
          <div className="bg-paper p-8 md:p-10">
            <p className="eyebrow text-mute">Registered Office</p>
            <p className="mt-4 text-sm leading-relaxed text-mute">
              {company.registeredOffice.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p className="mt-4 text-xs tracking-wide text-faint">CIN {company.cin}</p>
          </div>
          <div className="bg-paper p-8 md:p-10">
            <p className="eyebrow text-mute">Operations</p>
            <p className="mt-4 text-sm leading-relaxed text-mute">
              {company.operationsOffice.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>

        <Link
          to="/contact"
          className="mt-12 inline-flex items-center gap-2 bg-accent-bright px-6 py-3.5 text-sm font-bold text-ink hover:bg-accent"
        >
          Work with us <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
