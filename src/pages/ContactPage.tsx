import { ConsultationForm } from '../components/forms/ConsultationForm'

export function ContactPage() {
  return (
    <div className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-signal">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight">
            Start a conversation.
          </h1>
          <p className="mt-4 max-w-md text-ink-soft leading-relaxed">
            Tell us where you are and where you want to go. We will reply with a
            practical next step.
          </p>
          <p className="mt-6 text-sm">
            Email:{' '}
            <a className="font-semibold text-signal" href="mailto:hello@techtoil.com">
              hello@techtoil.com
            </a>
          </p>
        </div>
        <ConsultationForm />
      </div>
    </div>
  )
}
