import { ConsultationForm } from '../components/forms/ConsultationForm'

export function ContactPage() {
  return (
    <div className="bg-bg px-5 pb-24 pt-32 md:px-6 md:pt-40">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-signal">Contact</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] md:text-5xl">
            Tell us what you are building.
          </h1>
          <p className="mt-5 text-soft leading-relaxed">
            A short note is enough. We respond with a practical next step.
          </p>
          <p className="mt-8">
            <a className="font-bold text-signal" href="mailto:hello@techtoil.com">
              hello@techtoil.com
            </a>
          </p>
        </div>
        <ConsultationForm />
      </div>
    </div>
  )
}
