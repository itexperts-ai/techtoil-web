import { ConsultationForm } from '../components/forms/ConsultationForm'

export function ContactPage() {
  return (
    <div className="bg-sand px-4 pb-20 pt-32 md:px-6 md:pb-28 md:pt-36">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sea">
            Contact
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.04em] md:text-5xl">
            Tell us what you are building.
          </h1>
          <p className="mt-5 max-w-md text-mute leading-relaxed">
            A short brief is enough. We respond with a practical next step.
          </p>
          <p className="mt-8 text-sm">
            <a className="font-bold text-sea" href="mailto:hello@techtoil.com">
              hello@techtoil.com
            </a>
          </p>
        </div>
        <ConsultationForm />
      </div>
    </div>
  )
}
