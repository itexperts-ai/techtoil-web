import { ConsultationForm } from '../components/forms/ConsultationForm'

export function ContactPage() {
  return (
    <div className="px-4 pb-24 pt-32 md:px-6 md:pt-40">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">Contact</p>
          <h1 className="mt-4 font-display text-5xl font-extrabold uppercase leading-none tracking-[-0.02em]">
            Start here.
          </h1>
          <p className="mt-5 max-w-md text-soft">
            Tell us what you are building. We reply with a practical next step.
          </p>
          <p className="mt-8">
            <a className="font-bold text-ember" href="mailto:hello@techtoil.com">
              hello@techtoil.com
            </a>
          </p>
        </div>
        <ConsultationForm />
      </div>
    </div>
  )
}
