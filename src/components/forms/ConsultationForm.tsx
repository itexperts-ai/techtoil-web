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
      <div className="border border-line bg-mist p-6 text-sm">
        <p className="font-bold">Message ready.</p>
        <p className="mt-2 text-soft">
          Email{' '}
          <a href="mailto:hello@techtoil.com" className="font-semibold text-ember">
            hello@techtoil.com
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 border border-line bg-mist p-6">
      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-faint">
        Name
        <input name="name" required className="field" placeholder="Your name" />
      </label>
      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-faint">
        Email
        <input name="email" type="email" required className="field" placeholder="you@company.com" />
      </label>
      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-faint">
        Brief
        <textarea name="message" required className="field min-h-28" placeholder="What are you building?" />
      </label>
      {status === 'error' && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        className="w-full bg-ember py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-ember-dark"
      >
        Send
      </button>
      <style>{`
        .field {
          width: 100%;
          border: 1px solid rgba(17,17,17,0.12);
          background: #fff;
          padding: 0.8rem 0.9rem;
          font: inherit;
          outline: none;
        }
        .field:focus { border-color: #FF4D00; }
      `}</style>
    </form>
  )
}
