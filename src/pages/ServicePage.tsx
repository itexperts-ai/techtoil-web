import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services } from '../data/services'
import { ConsultationForm } from '../components/forms/ConsultationForm'

export function ServicePage() {
  const { slug } = useParams()
  const service = services.find((s) => s.path.endsWith(`/${slug}`))
  if (!service) return <Navigate to="/solutions" replace />

  const faqs = [
    {
      q: `What does ${service.short} typically include?`,
      a: service.capabilities.slice(0, 4).join(', ') + ', tailored to your stage and goals.',
    },
    {
      q: 'How do engagements start?',
      a: 'With a consultation to clarify outcomes, constraints, and the right mix of Techtoil capabilities.',
    },
    {
      q: 'Can this combine with other pillars?',
      a: 'Yes — Techtoil is one ecosystem. Most clients combine two or more capabilities in a single roadmap.',
    },
  ]

  return (
    <div>
      <section className="relative overflow-hidden border-b border-line px-4 py-14 md:px-6">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div
          className="absolute -right-10 top-0 h-64 w-64 rounded-full blur-3xl"
          style={{ background: `${service.accent}33` }}
        />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-cyan">
            Service {service.num} · {service.category}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{service.tagline}</p>
          <p className="mt-3 max-w-2xl text-muted">{service.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#inquire"
              className="rounded-md bg-electric px-5 py-3 text-sm font-bold"
            >
              Start this engagement
            </a>
            <Link
              to="/solutions"
              className="rounded-md border border-line px-5 py-3 text-sm font-bold"
            >
              All solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line px-4 py-12 md:px-6">
        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold">Problems we solve</h2>
            <ul className="mt-4 space-y-3">
              {service.problems.map((p) => (
                <li key={p} className="rounded-lg border border-line bg-surface/50 px-4 py-3 text-sm">
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">Capabilities</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {service.capabilities.map((c) => (
                <li
                  key={c}
                  className="rounded-lg border border-line px-3 py-3 text-sm font-semibold text-white/90"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface/40 px-4 py-12 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold">How our approach works</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {service.process.map((step, i) => (
              <span key={step} className="inline-flex items-center gap-2 text-sm">
                <span className="rounded-md border border-line bg-midnight px-3 py-2 font-semibold">
                  <span className="mr-2 font-display text-xs text-electric">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {step}
                </span>
                {i < service.process.length - 1 && <span className="text-cyan">→</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line px-4 py-12 md:px-6">
        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold">Deliverables</h2>
            <ul className="mt-4 space-y-2">
              {service.deliverables.map((d) => (
                <li key={d} className="flex gap-2 text-sm text-muted">
                  <span className="text-cyan">▹</span> {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">FAQs</h2>
            <div className="mt-4 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-lg border border-line bg-surface/40 px-4 py-3">
                  <summary className="cursor-pointer text-sm font-bold">{f.q}</summary>
                  <p className="mt-2 text-sm text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="inquire" className="px-4 py-14 md:px-6">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold">Inquire about {service.short}</h2>
            <p className="mt-2 text-muted">
              Share your context. We&apos;ll respond with a clear next step. Forms are
              frontend-ready — wire your backend endpoint when available.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cyan"
            >
              Or use the full consultation form <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ConsultationForm defaultServices={[service.id]} compact />
        </div>
      </section>
    </div>
  )
}
