import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { company } from '../data/company'

export function AboutPage() {
  return (
    <div className="bg-bg px-4 pb-24 pt-32 md:px-6 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-accent">About</p>
            <h1 className="title mt-4">{company.legalName}</h1>
          </div>
          <div className="lede space-y-5 text-mute lg:col-span-7">
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
        </div>

        <div className="mt-14 grid gap-4 border-t border-line pt-10 md:grid-cols-2">
          <div className="border border-line bg-paper p-6 md:p-8">
            <p className="eyebrow text-accent">Registered Office</p>
            <p className="mt-4 leading-relaxed text-mute">
              {company.registeredOffice.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p className="mt-4 font-display text-xs tracking-[0.12em] text-faint">
              CIN {company.cin}
            </p>
          </div>
          <div className="border border-line bg-paper p-6 md:p-8">
            <p className="eyebrow text-accent">Operations</p>
            <p className="mt-4 leading-relaxed text-mute">
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
          className="mt-12 inline-flex items-center gap-2 bg-accent px-5 py-3.5 font-display text-sm font-semibold text-white hover:bg-accent-deep"
        >
          Work with us <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
