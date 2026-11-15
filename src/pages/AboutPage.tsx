import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { company } from '../data/company'
import { services } from '../data/services'

export function AboutPage() {
  return (
    <div className="bg-bg px-4 pb-24 pt-32 md:px-6 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow text-accent">About</p>
        <h1 className="title mt-4 max-w-3xl">{company.legalName}</h1>
        <div className="lede mt-8 max-w-3xl space-y-5 text-mute">
          <p>
            {company.brandName} is a solutions studio for organizations that need technical
            delivery, growth systems, management advisory, funding readiness, AI operations,
            and hiring — connected as one path.
          </p>
          <p>
            We focus on all seven capabilities below so product, marketing, management, and
            intelligence stay on a shared plan.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <a
              key={s.id}
              href={`/#${s.id}`}
              className="rounded-2xl border border-line bg-surface p-5 transition hover:border-accent/40"
            >
              <p className="text-xs font-semibold text-accent">{s.num}</p>
              <p className="mt-2 font-display text-lg font-medium">{s.title}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface p-6 text-sm text-mute">
            <p className="eyebrow text-accent">Registered Office</p>
            <p className="mt-3 leading-relaxed">
              {company.registeredOffice.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p className="mt-3 text-xs text-faint">CIN: {company.cin}</p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-6 text-sm text-mute">
            <p className="eyebrow text-accent">Operations</p>
            <p className="mt-3 leading-relaxed">
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
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-white hover:bg-accent-deep"
        >
          Discuss your solutions mix <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
