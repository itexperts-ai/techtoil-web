import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import { ConsultationForm } from '../components/forms/ConsultationForm'
import { company, mapsEmbedUrl, mapsOpenUrl } from '../data/company'

export function ContactPage() {
  return (
    <div className="bg-sand">
      {/* Contact hero strip */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="/media/contact-hero.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-leaf/75" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
          <p className="eyebrow text-fern">Contact & location</p>
          <h1 className="display mt-4 max-w-2xl text-white">Let’s talk.</h1>
          <p className="lede mt-5 max-w-lg text-white/75">
            Reach {company.legalName} — form, phone, email, and map in one place.
          </p>
        </div>
      </section>

      {/* Details + form */}
      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${company.email}`}
                className="border border-line bg-ivory p-5 transition hover:border-moss/40"
              >
                <Mail className="h-5 w-5 text-moss" />
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-mist">Email</p>
                <p className="mt-2 font-semibold text-ink break-all">{company.email}</p>
              </a>
              <div className="border border-line bg-ivory p-5">
                <Phone className="h-5 w-5 text-moss" />
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-mist">Phone</p>
                <ul className="mt-2 space-y-1">
                  {company.phones.map((p) => (
                    <li key={p.href}>
                      <a href={p.href} className="font-semibold text-ink hover:text-moss">
                        {p.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border border-line bg-ivory p-5 md:p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-moss" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-mist">
                    {company.registeredOffice.label}
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold tracking-[-0.02em]">
                    {company.legalName}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-soft">
                    {company.registeredOffice.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <p className="mt-3 text-xs text-mist">CIN: {company.cin}</p>
                </div>
              </div>
            </div>

            <div className="border border-line bg-ivory p-5 md:p-6">
              <p className="eyebrow text-moss">{company.operationsOffice.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-soft">
                {company.operationsOffice.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow text-moss">Send a brief</p>
            <h2 className="title mt-3">How can we help?</h2>
            <div className="mt-6">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed map */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-moss">Map</p>
              <h2 className="title mt-2">Registered office</h2>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-semibold">
              <a
                href={mapsOpenUrl(company.registeredOffice.mapsQuery)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-moss hover:text-leaf"
              >
                Delhi map <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={mapsOpenUrl(company.operationsOffice.mapsQuery)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-moss hover:text-leaf"
              >
                Noida map <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
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
