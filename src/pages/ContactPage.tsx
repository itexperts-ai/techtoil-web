import { ConsultationForm } from '../components/forms/ConsultationForm'

export function ContactPage() {
  return (
    <div className="px-4 py-14 md:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-cyan">
            Contact
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold">
            Book a consultation
          </h1>
          <p className="mt-4 text-muted">
            Tell us where you are — idea, product, growth, funding, ops, or hiring — and
            which pillars you want activated.
          </p>
          <p className="mt-4 text-sm">
            Email:{' '}
            <a className="font-semibold text-cyan" href="mailto:hello@techtoil.com">
              hello@techtoil.com
            </a>
          </p>
        </div>
        <ConsultationForm />
      </div>
    </div>
  )
}
