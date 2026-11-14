import { useState, type FormEvent } from 'react'
import { paths } from '../../data/paths'

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
      <div className="rounded-3xl border border-gold/30 bg-navy-2 p-6 text-sm">
        <p className="font-bold text-white">Ready to connect.</p>
        <p className="mt-2 text-mute">
          Email{' '}
          <a href="mailto:hello@techtoil.com" className="font-semibold text-gold">
            hello@techtoil.com
          </a>{' '}
          or wire your API endpoint.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-line bg-navy-2 p-6 md:p-8">
      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-mute">
        Name
        <input name="name" required className="field" placeholder="Your name" />
      </label>
      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-mute">
        Email
        <input name="email" type="email" required className="field" placeholder="you@company.com" />
      </label>
      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-mute">
        Path
        <select name="path" className="field" defaultValue={paths[0].id}>
          {paths.map((p) => (
            <option key={p.id} value={p.id}>
              {p.label} — {p.title}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-mute">
        Brief
        <textarea name="message" required className="field min-h-28" placeholder="What are you building?" />
      </label>
      {status === 'error' && <p className="text-sm text-red-300">{error}</p>}
      <button
        type="submit"
        className="w-full rounded-full bg-gold py-3.5 text-sm font-bold text-navy hover:bg-gold-dark"
      >
        Send message
      </button>
      <style>{`
        .field {
          width: 100%;
          border-radius: 0.85rem;
          border: 1px solid rgba(255,255,255,0.1);
          background: #0b0f1a;
          padding: 0.85rem 1rem;
          color: #e8ecf3;
          font: inherit;
          outline: none;
        }
        .field:focus { border-color: #e8be4a; }
        .field option { color: #0b0f1a; }
      `}</style>
    </form>
  )
}
