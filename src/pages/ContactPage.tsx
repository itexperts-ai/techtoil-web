import { Mail, MapPin, Phone } from 'lucide-react'
import { ConsultationForm } from '../components/forms/ConsultationForm'
import { company, mapsEmbedUrl, mapsOpenUrl } from '../data/company'
import { services } from '../data/services'

export function ContactPage() {
  return (
    <div className="bg-canvas">
      <div className="px-4 pb-16 pt-32 md:px-6 md:pt-40">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="kicker text-brand">Contact</p>
            <h1 className="h-section mt-4">Tell us what you need.</h1>
            <p className="copy mt-5 text-steel">
              Reach {company.legalName} — send a brief or call us directly.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-haze">
                    Email
                  </p>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-1 block font-semibold text-brand hover:text-brand-deep"
                  >
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-haze">
                    Phone
                  </p>
                  <ul className="mt-1 space-y-1">
                    {company.phones.map((p) => (
                      <li key={p.href}>
                        <a
                          href={p.href}
                          className="font-semibold text-ink hover:text-brand"
                        >
                          {p.display}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-haze">
                    {company.registeredOffice.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-steel">
                    {company.registeredOffice.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            <ul className="mt-8 space-y-1.5 border-t border-edge pt-6 text-sm text-steel">
              {services.map((s) => (
                <li key={s.id}>
                  {s.num} · {s.title}
                </li>
              ))}
            </ul>
          </div>

          <ConsultationForm />
        </div>
      </div>

      {/* Locations + map */}
      <section id="location" className="scroll-mt-24 border-t border-edge bg-paper px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="kicker text-brand">Location</p>
          <h2 className="h-section mt-3">Find us</h2>
          <p className="copy mt-3 max-w-xl text-steel">
            Registered office in New Delhi. Operations presence in Noida.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="border border-edge bg-canvas p-5 md:p-6">
                <p className="kicker text-mint">{company.registeredOffice.label}</p>
                <p className="mt-3 text-sm font-semibold tracking-[-0.02em]">
                  {company.legalName}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {company.registeredOffice.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <p className="mt-3 text-xs text-haze">CIN: {company.cin}</p>
                <a
                  href={mapsOpenUrl(company.registeredOffice.mapsQuery)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-brand hover:text-brand-deep"
                >
                  Open in Google Maps
                </a>
              </div>

              <div className="border border-edge bg-canvas p-5 md:p-6">
                <p className="kicker text-mint">{company.operationsOffice.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-steel">
                  {company.operationsOffice.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <a
                  href={mapsOpenUrl(company.operationsOffice.mapsQuery)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-brand hover:text-brand-deep"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="overflow-hidden border border-edge bg-canvas">
              <iframe
                title="Techtoil registered office map"
                src={mapsEmbedUrl(company.registeredOffice.mapsQuery)}
                className="h-[22rem] w-full border-0 md:h-full md:min-h-[26rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
