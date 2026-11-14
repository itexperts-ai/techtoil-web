import { useState, type FormEvent } from 'react'

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
      <div className="rounded-xl border border-signal/20 bg-white p-6 text-sm">
        <p className="font-bold">Message ready.</p>
        <p className="mt-2 text-soft">
          Email{' '}
          <a href="mailto:hello@techtoil.com" className="font-semibold text-signal">
            hello@techtoil.com
          </a>{' '}
          or connect your backend API.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-line bg-panel p-6">
      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-dim">
        Name
        <input name="name" required className="field" placeholder="Your name" />
      </label>
      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-dim">
        Email
        <input name="email" type="email" required className="field" placeholder="you@company.com" />
      </label>
      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-dim">
        Brief
        <textarea name="message" required className="field min-h-28" placeholder="What are you building?" />
      </label>
      {status === 'error' && <p className="text-sm text-red-600">{error}</p>}
      <button type="submit" className="w-full rounded-md bg-signal py-3.5 text-sm font-bold text-white hover:bg-signal-dark">
        Send message
      </button>
      <style>{`
        .field {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid rgba(10,10,10,0.1);
          background: #fafafa;
          padding: 0.8rem 0.9rem;
          font: inherit;
          outline: none;
        }
        .field:focus { border-color: #0055FF; background: #fff; }
      `}</style>
    </form>
  )
}
