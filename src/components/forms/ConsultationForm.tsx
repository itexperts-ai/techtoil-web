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
      <div className="rounded-xl border border-signal/25 bg-signal/5 p-5 text-sm">
        <p className="font-bold">Thanks — your note is ready to send.</p>
        <p className="mt-2 text-ink-soft">
          Wire this form to your backend when ready. For now, email{' '}
          <a className="font-semibold text-signal" href="mailto:hello@techtoil.com">
            hello@techtoil.com
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3 rounded-xl border border-line bg-white p-5">
      <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-steel">
        Name
        <input name="name" required className="field" placeholder="Your name" />
      </label>
      <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-steel">
        Email
        <input name="email" type="email" required className="field" placeholder="you@company.com" />
      </label>
      <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-steel">
        What are you working on?
        <textarea
          name="message"
          required
          className="field min-h-28"
          placeholder="A short brief is enough."
        />
      </label>
      {status === 'error' && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        className="w-full rounded-md bg-signal py-3 text-sm font-bold text-white hover:bg-signal-deep"
      >
        Send message
      </button>
      <style>{`
        .field {
          width: 100%;
          border-radius: 0.375rem;
          border: 1px solid rgba(16,20,24,0.12);
          background: #f7f8fa;
          padding: 0.7rem 0.8rem;
          color: #101418;
          font: inherit;
          outline: none;
        }
        .field:focus { border-color: #0C5EF0; background: #fff; }
      `}</style>
    </form>
  )
}
