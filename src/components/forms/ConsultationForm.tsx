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
      <div className="rounded-3xl border border-sea/25 bg-spark p-6 text-sm">
        <p className="font-bold text-ink">Message ready.</p>
        <p className="mt-2 text-mute">
          Connect your backend when ready, or email{' '}
          <a href="mailto:hello@techtoil.com" className="font-semibold text-sea">
            hello@techtoil.com
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-line bg-white p-6 md:p-8">
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
        className="w-full rounded-full bg-tide py-3.5 text-sm font-bold text-white hover:bg-sea"
      >
        Send message
      </button>
      <style>{`
        .field {
          width: 100%;
          border-radius: 0.9rem;
          border: 1px solid rgba(12,18,32,0.1);
          background: #eef2f6;
          padding: 0.85rem 1rem;
          color: #0c1220;
          font: inherit;
          outline: none;
        }
        .field:focus { border-color: #128F9E; background: #fff; }
      `}</style>
    </form>
  )
}
