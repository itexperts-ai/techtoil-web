import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, ArrowUpRight, Navigation } from 'lucide-react'
import { ConsultationForm } from '../components/forms/ConsultationForm'
import {
  company,
  mapsDirectionsUrl,
  mapsEmbedUrl,
  mapsOpenUrl,
} from '../data/company'

type OfficeKey = 'registered' | 'operations'

export function ContactPage() {
  const [office, setOffice] = useState<OfficeKey>('registered')
  const active =
    office === 'registered' ? company.registeredOffice : company.operationsOffice

  return (
    <div className="bg-bg">
      <section className="border-b border-line bg-paper px-4 pb-14 pt-32 md:px-6 md:pb-16 md:pt-36">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-accent">Contact</p>
          <h1 className="display mt-4 max-w-2xl">Talk to Techtoil.</h1>
          <p className="lede mt-5 max-w-xl text-mute">
            Product, growth, management, AIM, or hiring — reach {company.legalName}. For a
            scoped recommendation,{' '}
            <Link to="/assessment" className="font-semibold text-accent">
              book a free assessment
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-4">
            <a
              href={`mailto:${company.email}`}
              className="flex gap-4 rounded-xl border border-line bg-paper p-5 transition hover:border-accent/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Mail className="h-5 w-5 text-accent" />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-wide text-faint">
                  Email
                </span>
                <span className="mt-1 block font-semibold break-all">{company.email}</span>
              </span>
            </a>

            <div className="flex gap-4 rounded-xl border border-line bg-paper p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Phone className="h-5 w-5 text-accent" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-faint">Phone</p>
                <ul className="mt-1 space-y-1">
                  {company.phones.map((p) => (
                    <li key={p.href}>
                      <a href={p.href} className="font-semibold hover:text-accent">
                        {p.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-line bg-paper p-5 md:p-6">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-faint">
                    {company.registeredOffice.label}
                  </p>
                  <p className="mt-2 font-display font-semibold">{company.legalName}</p>
                  <p className="mt-2 text-sm leading-relaxed text-mute">
                    {company.registeredOffice.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <p className="mt-3 text-xs text-faint">CIN: {company.cin}</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-line bg-paper p-5 md:p-6">
              <p className="eyebrow text-accent">{company.operationsOffice.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-mute">
                {company.operationsOffice.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow text-accent">Project brief</p>
            <h2 className="title mt-3">What do you need built or managed?</h2>
            <div className="mt-6">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-accent">Locations</p>
              <h2 className="title mt-2">Exact Techtoil offices on the map</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setOffice('registered')}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  office === 'registered'
                    ? 'bg-accent text-white'
                    : 'bg-bg text-ink ring-1 ring-line hover:ring-accent/40'
                }`}
              >
                Delhi · Registered
              </button>
              <button
                type="button"
                onClick={() => setOffice('operations')}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  office === 'operations'
                    ? 'bg-accent text-white'
                    : 'bg-bg text-ink ring-1 ring-line hover:ring-accent/40'
                }`}
              >
                Noida · Operations
              </button>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-bg shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-paper px-4 py-3 md:px-5">
              <div className="min-w-0">
                <p className="font-display text-sm font-semibold">{active.label}</p>
                <p className="truncate text-xs text-mute md:text-sm">{active.singleLine}</p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <a
                  href={mapsOpenUrl(active)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:text-accent-deep"
                >
                  Open in Maps <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={mapsDirectionsUrl(active)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:text-accent-deep"
                >
                  Directions <Navigation className="h-4 w-4" />
                </a>
              </div>
            </div>
            <iframe
              key={office}
              title={`${active.label} map — Techtoil`}
              src={mapsEmbedUrl(active)}
              className="h-[22rem] w-full border-0 md:h-[32rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <p className="border-t border-line bg-paper px-4 py-2.5 text-xs text-faint md:px-5">
              Pin: {active.lat.toFixed(6)}, {active.lng.toFixed(6)} · Zoomed to street level for
              Techtoil’s {active.label.toLowerCase()}.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
