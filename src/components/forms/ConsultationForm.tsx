import { useState, type FormEvent } from 'react'
import { services } from '../../data/services'

type Props = {
  defaultServices?: string[]
  compact?: boolean
}

/**
 * Lead form with validation + explicit integration note.
 * Does not fake backend success — shows "ready to connect" state.
 */
export function ConsultationForm({ defaultServices = [], compact = false }: Props) {
  const [status, setStatus] = useState<'idle' | 'ready' | 'error'>('idle')
  const [error, setError] = useState('')

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = String(fd.get('name') || '').trim()
    const email = String(fd.get('email') || '').trim()
    const consent = fd.get('consent')
    if (!name || !email) {
      setError('Name and business email are required.')
      setStatus('error')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid business email.')
      setStatus('error')
      return
    }
    if (!consent) {
      setError('Please accept the privacy notice to continue.')
      setStatus('error')
      return
    }
    setError('')
    // Integration point: POST /api/leads
    setStatus('ready')
  }

  if (status === 'ready') {
    return (
      <div className="rounded-xl border border-cyan/30 bg-cyan/10 p-5 text-sm">
        <p className="font-bold text-white">Form validated — ready for API integration.</p>
        <p className="mt-2 text-muted">
          Connect this form to your backend (<code className="text-cyan">POST /api/leads</code>).
          No fake submission was sent.
        </p>
        <p className="mt-3">
          Meanwhile email{' '}
          <a className="text-cyan font-semibold" href="mailto:hello@techtoil.com">
            hello@techtoil.com
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3 rounded-xl border border-line bg-surface/50 p-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-muted">
          Full Name
          <input name="name" required className="field" placeholder="Your name" />
        </label>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-muted">
          Business Email
          <input name="email" type="email" required className="field" placeholder="you@company.com" />
        </label>
      </div>
      {!compact && (
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-muted">
            Phone
            <input name="phone" className="field" placeholder="+91 …" />
          </label>
          <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-muted">
            Company
            <input name="company" className="field" placeholder="Company name" />
          </label>
        </div>
      )}
      <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-muted">
        Services Required
        <select name="services" multiple defaultValue={defaultServices} className="field min-h-24">
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.num} — {s.title}
            </option>
          ))}
        </select>
        <span className="normal-case tracking-normal font-medium text-[11px]">
          Hold Ctrl/Cmd to select multiple
        </span>
      </label>
      <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-muted">
        Project Description
        <textarea
          name="description"
          required
          className="field min-h-24"
          placeholder="What are you trying to achieve?"
        />
      </label>
      <label className="flex items-start gap-2 text-xs text-muted">
        <input name="consent" type="checkbox" className="mt-0.5" />
        <span>
          I agree to be contacted about this inquiry and accept the{' '}
          <a href="/privacy" className="text-cyan">
            Privacy Policy
          </a>
          .
        </span>
      </label>
      {status === 'error' && <p className="text-sm text-red-300">{error}</p>}
      <button type="submit" className="w-full rounded-md bg-electric py-3 text-sm font-bold text-white">
        Submit inquiry
      </button>
      <style>{`
        .field {
          width: 100%;
          border-radius: 0.375rem;
          border: 1px solid rgba(255,255,255,0.08);
          background: #0B1020;
          padding: 0.65rem 0.75rem;
          color: white;
          font: inherit;
          outline: none;
        }
        .field:focus { border-color: #356DFF; }
      `}</style>
    </form>
  )
}
