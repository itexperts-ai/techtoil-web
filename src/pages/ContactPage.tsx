import { ConsultationForm } from '../components/forms/ConsultationForm'

export function ContactPage() {
  return (
    <div className="bg-navy px-4 pb-24 pt-32 text-ink md:px-6 md:pt-40">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white md:text-5xl">
            Book a strategy call.
          </h1>
          <p className="mt-5 text-mute leading-relaxed">
            Share where you are — Launch, Scale, Automate, or Strengthen — and
            what you want next.
          </p>
          <p className="mt-8">
            <a className="font-bold text-gold" href="mailto:hello@techtoil.com">
              hello@techtoil.com
            </a>
          </p>
        </div>
        <ConsultationForm />
      </div>
    </div>
  )
}
