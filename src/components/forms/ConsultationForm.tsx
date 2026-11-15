import { useState, type FormEvent } from 'react'
import { company } from '../../data/company'
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
      <div className="border border-line bg-ivory p-6 text-sm md:p-8">
        <p className="font-semibold">Message ready.</p>
        <p className="mt-2 text-soft">
          Email{' '}
          <a href={`mailto:${company.email}`} className="font-semibold text-moss">
            {company.email}
          </a>{' '}
          or call {company.phones[0].display}.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 border border-line bg-ivory p-6 md:p-8">
      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-soft">
        Name
        <input name="name" required className="field" placeholder="Your name" />
      </label>
      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-soft">
        Email
        <input name="email" type="email" required className="field" placeholder="you@company.com" />
      </label>
      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-soft">
        Interest
        <select name="interest" className="field" defaultValue={services[0].id}>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.num} — {s.title}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-soft">
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
        className="w-full bg-leaf py-3.5 text-sm font-semibold text-white hover:bg-moss"
      >
        Send message
      </button>
      <style>{`
        .field {
          width: 100%;
          border: 1px solid rgba(20,32,26,0.12);
          background: #f3f5f2;
          padding: 0.85rem 1rem;
          font: inherit;
          outline: none;
        }
        .field:focus { border-color: #2d6a4f; background: #fbfcfb; }
      `}</style>
    </form>
  )
}
