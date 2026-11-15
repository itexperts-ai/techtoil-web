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
      <div className="border border-edge bg-paper p-6 text-sm md:p-8">
        <p className="font-semibold">Message ready.</p>
        <p className="mt-2 text-steel">
          Email{' '}
          <a href="mailto:hello@techtoil.com" className="font-semibold text-brand">
            hello@techtoil.com
          </a>{' '}
          or connect your backend.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 border border-edge bg-paper p-6 md:p-8">
      <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wide text-steel">
        Name
        <input name="name" required className="field" placeholder="Your name" />
      </label>
      <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wide text-steel">
        Email
        <input name="email" type="email" required className="field" placeholder="you@company.com" />
      </label>
      <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wide text-steel">
        Interest
        <select name="interest" className="field" defaultValue={services[0].id}>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.num} — {s.title}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wide text-steel">
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
        className="w-full bg-night py-3.5 text-sm font-semibold text-white hover:bg-brand"
      >
        Send message
      </button>
      <style>{`
        .field {
          width: 100%;
          border: 1px solid rgba(10,15,26,0.1);
          background: #e9edf3;
          padding: 0.85rem 1rem;
          font: inherit;
          outline: none;
        }
        .field:focus { border-color: #1d4ed8; background: #f6f8fb; }
      `}</style>
    </form>
  )
}
