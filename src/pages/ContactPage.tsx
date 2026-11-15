import { ConsultationForm } from '../components/forms/ConsultationForm'
import { services } from '../data/services'

export function ContactPage() {
  return (
    <div className="bg-bg px-4 pb-24 pt-32 md:px-6 md:pt-40">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue">Contact</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
            Tell us what you need.
          </h1>
          <p className="mt-5 text-soft">
            AIM, AI, or any of the seven services — send a short brief.
          </p>
          <ul className="mt-6 space-y-1 text-sm text-soft">
            {services.map((s) => (
              <li key={s.id}>
                {s.num} · {s.title}
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <a className="font-bold text-blue" href="mailto:hello@techtoil.com">
              hello@techtoil.com
            </a>
          </p>
        </div>
        <ConsultationForm />
      </div>
    </div>
  )
}
