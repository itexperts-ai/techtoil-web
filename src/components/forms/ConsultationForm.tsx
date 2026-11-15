import { useMemo, useState, type FormEvent } from 'react'
import { company } from '../../data/company'
import { services } from '../../data/services'

type Props = {
  variant?: 'contact' | 'assessment'
  defaultInterest?: string
}

const assessmentGoals = [
  { value: 'product', label: 'Product design & development' },
  { value: 'growth', label: 'Marketing & growth systems' },
  { value: 'management', label: 'Consultancy / funding / hiring' },
  { value: 'aim', label: 'AI operations & automation' },
  { value: 'full', label: 'Full multi-solution engagement' },
  { value: 'other', label: 'Not sure — help me scope it' },
]

export function ConsultationForm({ variant = 'contact', defaultInterest }: Props) {
  const [status, setStatus] = useState<'idle' | 'ready' | 'error'>('idle')
  const [error, setError] = useState('')

  const interestDefault = useMemo(() => {
    if (defaultInterest) return defaultInterest
    return variant === 'assessment' ? 'full' : services[1].id
  }, [defaultInterest, variant])

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = String(fd.get('name') || '').trim()
    const email = String(fd.get('email') || '').trim()
    const companyName = String(fd.get('company') || '').trim()
    const interest = String(fd.get('interest') || '').trim()
    const message = String(fd.get('message') || '').trim()
    const timeline = String(fd.get('timeline') || '').trim()

    if (!name || !email) {
      setError('Name and email are required.')
      setStatus('error')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid work email.')
      setStatus('error')
      return
    }
    if (!message) {
      setError('Please share a short brief so we can prepare.')
      setStatus('error')
      return
    }

    const subject =
      variant === 'assessment'
        ? `Assessment request — ${name}${companyName ? ` (${companyName})` : ''}`
        : `Project inquiry — ${name}${companyName ? ` (${companyName})` : ''}`

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      companyName ? `Company: ${companyName}` : null,
      `Interest: ${interest}`,
      timeline ? `Timeline: ${timeline}` : null,
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n')

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setError('')
    setStatus('ready')
  }

  if (status === 'ready') {
    return (
      <div className="rounded-xl border border-line bg-paper p-6 text-sm md:p-8">
        <p className="font-display text-lg font-semibold">Brief ready to send.</p>
        <p className="mt-2 text-mute">
          Your mail client should open with the details. If not, email{' '}
          <a href={`mailto:${company.email}`} className="font-semibold text-accent">
            {company.email}
          </a>{' '}
          or call {company.phones[0].display}.
        </p>
        <p className="mt-4 text-xs text-faint">{company.assessmentSla}</p>
      </div>
    )
  }

  const interestOptions =
    variant === 'assessment'
      ? assessmentGoals
      : services.map((s) => ({ value: s.id, label: s.title }))

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-xl border border-line bg-paper p-6 shadow-sm md:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-mute">
          Name
          <input name="name" required className="field" placeholder="Your name" autoComplete="name" />
        </label>
        <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-mute">
          Work email
          <input
            name="email"
            type="email"
            required
            className="field"
            placeholder="you@company.com"
            autoComplete="email"
          />
        </label>
      </div>

      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-mute">
        Company
        <input name="company" className="field" placeholder="Organisation name" autoComplete="organization" />
      </label>

      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-mute">
        {variant === 'assessment' ? 'What should we assess?' : 'Solution interest'}
        <select name="interest" className="field field-select" defaultValue={interestDefault}>
          {interestOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>

      {variant === 'assessment' && (
        <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-mute">
          Ideal start
          <select name="timeline" className="field field-select" defaultValue="2-4 weeks">
            <option value="ASAP">As soon as possible</option>
            <option value="2-4 weeks">In 2–4 weeks</option>
            <option value="1-3 months">In 1–3 months</option>
            <option value="exploring">Still exploring</option>
          </select>
        </label>
      )}

      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-mute">
        {variant === 'assessment' ? 'Context for the assessment' : 'Project brief'}
        <textarea
          name="message"
          required
          className="field min-h-32"
          placeholder={
            variant === 'assessment'
              ? 'Stage, goals, constraints, and which of the 7 solutions matter most…'
              : 'What product, growth, or management outcome do you need?'
          }
        />
      </label>

      {status === 'error' && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        className="w-full rounded-lg bg-accent py-3.5 text-sm font-semibold text-white hover:bg-accent-deep"
      >
        {variant === 'assessment' ? 'Book free assessment' : 'Submit brief'}
      </button>
      <p className="text-center text-xs text-faint">{company.assessmentSla}</p>
    </form>
  )
}
