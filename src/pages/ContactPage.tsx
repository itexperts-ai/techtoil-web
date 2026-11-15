import { Mail, MapPin, Phone } from 'lucide-react'
import { ConsultationForm } from '../components/forms/ConsultationForm'
import { company, mapsEmbedUrl, mapsOpenUrl } from '../data/company'
import { services } from '../data/services'

export function ContactPage() {
  return (
    <div className="bg-fog px-4 pb-24 pt-32 md:px-6 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <p className="label text-volt">Contact & location</p>
        <h1 className="headline mt-4 max-w-2xl">Talk with Techtoil.</h1>
        <p className="lede mt-4 max-w-xl text-mute">
          Send a brief, call us, or visit the registered office — everything in one place.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-volt" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-dim">Email</p>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-1 block font-semibold text-volt hover:text-volt-deep"
                  >
                    {company.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-volt" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-dim">Phone</p>
                  <ul className="mt-1 space-y-1">
                    {company.phones.map((p) => (
                      <li key={p.href}>
                        <a href={p.href} className="font-semibold text-ink hover:text-volt">
                          {p.display}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-volt" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-dim">
                    {company.registeredOffice.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-mute">
                    {company.registeredOffice.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <p className="mt-2 text-xs text-dim">CIN: {company.cin}</p>
                </div>
              </div>
            </div>

            <div className="border border-rule bg-snow p-5">
              <p className="label text-sea">{company.operationsOffice.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-mute">
                {company.operationsOffice.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>

            <ul className="space-y-1.5 text-sm text-mute">
              {services.map((s) => (
                <li key={s.id}>
                  {s.num} · {s.title}
                </li>
              ))}
            </ul>

            <ConsultationForm />
          </div>

          <div className="flex flex-col gap-4">
            <div className="overflow-hidden border border-rule bg-snow">
              <iframe
                title="Techtoil registered office map"
                src={mapsEmbedUrl(company.registeredOffice.mapsQuery)}
                className="h-[22rem] w-full border-0 lg:h-[28rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={mapsOpenUrl(company.registeredOffice.mapsQuery)}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-volt hover:text-volt-deep"
            >
              Open registered office in Google Maps →
            </a>
            <a
              href={mapsOpenUrl(company.operationsOffice.mapsQuery)}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-volt hover:text-volt-deep"
            >
              Open Noida operations in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
