import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import { ConsultationForm } from '../components/forms/ConsultationForm'
import { company, mapsEmbedUrl, mapsOpenUrl } from '../data/company'

export function ContactPage() {
  return (
    <div className="bg-bg">
      <section className="border-b border-line bg-paper px-4 pb-14 pt-32 md:px-6 md:pb-16 md:pt-36">
        <div className="mx-auto max-w-6xl">
          <span className="citron-label">Contact</span>
          <h1 className="display mt-6 max-w-2xl">
            Let’s <span className="display-italic">talk.</span>
          </h1>
          <p className="lede mt-5 max-w-xl text-mute">
            Reach {company.legalName} — form, phone, email, and map together.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-0 divide-y divide-line border-y border-line">
            <a href={`mailto:${company.email}`} className="flex gap-4 py-5 hover:bg-paper/70">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent-bright">
                <Mail className="h-4 w-4 text-ink" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                  Email
                </span>
                <span className="mt-1 block font-semibold break-all">{company.email}</span>
              </span>
            </a>

            <div className="flex gap-4 py-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent-bright">
                <Phone className="h-4 w-4 text-ink" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">Phone</p>
                <ul className="mt-1 space-y-1">
                  {company.phones.map((p) => (
                    <li key={p.href}>
                      <a href={p.href} className="font-semibold hover:opacity-60">
                        {p.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4 py-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent-bright">
                <MapPin className="h-4 w-4 text-ink" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                  {company.registeredOffice.label}
                </p>
                <p className="mt-2 font-display text-lg font-semibold tracking-[-0.02em]">
                  {company.legalName}
                </p>
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

            <div className="py-5">
              <p className="eyebrow text-mute">{company.operationsOffice.label}</p>
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
            <p className="eyebrow text-mute">Send a brief</p>
            <h2 className="title mt-3">How can we help?</h2>
            <div className="mt-6">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-4 px-4 py-8 md:px-6">
          <div>
            <p className="eyebrow text-mute">Map</p>
            <h2 className="title mt-2">Find our offices</h2>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-semibold">
            <a
              href={mapsOpenUrl(company.registeredOffice.mapsQuery)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 border-b border-ink pb-0.5"
            >
              Delhi map <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={mapsOpenUrl(company.operationsOffice.mapsQuery)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 border-b border-ink pb-0.5"
            >
              Noida map <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <iframe
          title="Techtoil registered office map"
          src={mapsEmbedUrl(company.registeredOffice.mapsQuery)}
          className="h-[22rem] w-full border-0 md:h-[28rem]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </div>
  )
}
