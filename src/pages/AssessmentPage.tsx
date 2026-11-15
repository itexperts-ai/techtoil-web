import { Link } from 'react-router-dom'
import { ArrowUpRight, Check, ClipboardList, Compass, MessagesSquare } from 'lucide-react'
import { ConsultationForm } from '../components/forms/ConsultationForm'
import { company } from '../data/company'
import { services } from '../data/services'

const steps = [
  {
    icon: ClipboardList,
    t: 'Share the brief',
    d: 'Tell us stage, goals, and which solutions you need — product, growth, management, AIM, or hiring.',
  },
  {
    icon: Compass,
    t: 'We map the scope',
    d: 'Techtoil reviews your context across all seven capabilities and proposes a clear engagement path.',
  },
  {
    icon: MessagesSquare,
    t: 'Working session',
    d: 'A focused call to align priorities, timeline, and the right mix of delivery streams.',
  },
]

export function AssessmentPage() {
  return (
    <div className="bg-bg">
      <section className="border-b border-line bg-paper px-4 pb-14 pt-32 md:px-6 md:pb-16 md:pt-36">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-accent">Free assessment</p>
          <h1 className="display mt-4 max-w-3xl">Book a new assessment.</h1>
          <p className="lede mt-5 max-w-2xl text-mute">
            {company.legalName} delivers the full stack — product design & development, marketing,
            consultancy, funding readiness, AI operations, and hiring. Use this form when you want
            a scoped recommendation, not a generic sales pitch.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.t} className="rounded-xl border border-line bg-paper p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <s.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold">{s.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-mute">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16 md:px-6 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="eyebrow text-accent">What we can assess</p>
            <h2 className="title mt-3">All seven solutions — one accountable team.</h2>
            <p className="mt-4 text-mute">
              Start with one workstream or a combined plan. We correct scope so you don’t buy
              disconnected vendors for the same outcome.
            </p>
            <ul className="mt-8 space-y-3">
              {services.map((s) => (
                <li key={s.id} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
                  <span>
                    <span className="font-semibold">{s.title}</span>
                    <span className="text-mute"> — {s.tagline}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-mute">
              Prefer email?{' '}
              <a href={`mailto:${company.email}`} className="font-semibold text-accent">
                {company.email}
              </a>
              {' · '}
              <Link to="/contact" className="font-semibold text-accent inline-flex items-center gap-1">
                Contact & map <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </p>
          </div>
          <div>
            <ConsultationForm variant="assessment" />
          </div>
        </div>
      </section>
    </div>
  )
}
