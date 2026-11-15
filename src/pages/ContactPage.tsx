import { ConsultationForm } from '../components/forms/ConsultationForm'
import { services } from '../data/services'

export function ContactPage() {
  return (
    <div className="bg-canvas px-4 pb-24 pt-32 md:px-6 md:pt-40">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <p className="kicker text-brand">Contact</p>
          <h1 className="h-section mt-4">Tell us what you need.</h1>
          <p className="copy mt-5 text-steel">
            Any of the seven services — send a short brief.
          </p>
          <ul className="mt-6 space-y-1.5 text-sm text-steel">
            {services.map((s) => (
              <li key={s.id}>
                {s.num} · {s.title}
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <a className="font-semibold text-brand" href="mailto:hello@techtoil.com">
              hello@techtoil.com
            </a>
          </p>
        </div>
        <ConsultationForm />
      </div>
    </div>
  )
}
