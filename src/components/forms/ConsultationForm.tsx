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
      <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 text-sm">
        <p className="font-bold text-ink">Message ready.</p>
        <p className="mt-2 text-mute">
          Connect your backend when ready, or email{' '}
          <a href="mailto:hello@techtoil.com" className="font-semibold text-accent">
            hello@techtoil.com
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-line bg-white p-6 shadow-[0_20px_60px_rgba(18,21,26,0.04)]"
    >
      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-mute">
        Name
        <input name="name" required className="field" placeholder="Your name" />
      </label>
      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-mute">
        Email
        <input name="email" type="email" required className="field" placeholder="you@company.com" />
      </label>
      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-mute">
        Brief
        <textarea
          name="message"
          required
          className="field min-h-32"
          placeholder="What are you trying to achieve?"
        />
      </label>
      {status === 'error' && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        className="w-full rounded-md bg-accent py-3.5 text-sm font-bold text-white hover:bg-accent-2"
      >
        Send message
      </button>
      <style>{`
        .field {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid rgba(18,21,26,0.12);
          background: #f4f6f8;
          padding: 0.8rem 0.9rem;
          color: #12151a;
          font: inherit;
          outline: none;
        }
        .field:focus { border-color: #155EEF; background: #fff; }
      `}</style>
    </form>
  )
}
