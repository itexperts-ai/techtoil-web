import { useState, type FormEvent } from 'react'
import { services } from '../../data/services'

export function ConsultationForm() {
  const [status, setStatus] = useState<'idle' | 'ready' | 'error'>('idle')
  const [error, setError] = useState('')

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = String(fd.get('name') || '').trim()
    const email = String(fd.get('email') || '').trim()
    if (!name || !email) {
      setError('Name and email are required.')
      setStatus('error')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email.')
      setStatus('error')
      return
    }
    setError('')
    setStatus('ready')
  }

  if (status === 'ready') {
    return (
      <div className="border border-line bg-surface p-6 text-sm md:p-8">
        <p className="font-semibold">Message ready.</p>
        <p className="mt-2 text-muted">
          Email{' '}
          <a href="mailto:hello@techtoil.com" className="font-semibold text-accent">
            hello@techtoil.com
          </a>{' '}
          or connect your backend.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 border border-line bg-surface p-6 md:p-8"
    >
      {(
        [
          ['name', 'Name', 'text', 'Your name'],
          ['email', 'Email', 'email', 'you@company.com'],
        ] as const
      ).map(([name, label, type, ph]) => (
        <label key={name} className="grid gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
          {label}
          <input name={name} type={type} required className="field" placeholder={ph} />
        </label>
      ))}
      <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
        Interest
        <select name="interest" className="field" defaultValue="aim">
          <option value="aim">Our AIM / general</option>
          <option value="ai">AI operations</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.num} — {s.title}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
        Brief
        <textarea
          name="message"
          required
          className="field min-h-28"
          placeholder="What are you building?"
        />
      </label>
      {status === 'error' && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        className="w-full bg-deep py-3.5 text-sm font-semibold text-white hover:bg-accent"
      >
        Send message
      </button>
      <style>{`
        .field {
          width: 100%;
          border: 1px solid rgba(12,18,34,0.1);
          background: #eef1f5;
          padding: 0.85rem 1rem;
          font: inherit;
          outline: none;
        }
        .field:focus { border-color: #2563eb; background: #f8f9fb; }
      `}</style>
    </form>
  )
}
