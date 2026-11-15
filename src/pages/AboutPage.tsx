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
            We are a complete IT solutions company for organizations that need product design
            & development, growth marketing, management advisory, funding readiness, AI
            operations, and hiring — delivered as connected services, not disconnected vendors.
          </p>
          <p>
            Buyers get one accountable team across technology and management. That is the
            Techtoil model: scope correctly, build what ships, and operate what lasts.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <a
              key={s.id}
              href={`/#${s.id}`}
              className="rounded-xl border border-line bg-paper p-5 transition hover:border-accent/40"
            >
              <p className="font-display font-semibold">{s.title}</p>
              <p className="mt-1.5 text-sm text-mute">{s.tagline}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-line bg-paper p-6 text-sm text-mute">
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
          <div className="rounded-xl border border-line bg-paper p-6 text-sm text-mute">
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

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/assessment"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3.5 text-sm font-semibold text-white hover:bg-accent-deep"
          >
            Book free assessment <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-lg border border-line bg-paper px-5 py-3.5 text-sm font-semibold text-ink hover:border-accent/40"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
