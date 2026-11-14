import { useState, type FormEvent } from 'react'
import { services } from '../data/services'

export function CloseCTA() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="close" id="start">
      <div className="close__lines" aria-hidden />
      <div className="wrap">
        <h2>Ready to activate a pillar — or all seven?</h2>
        <p>
          Tell us which service you need first. We will reply with a clear next
          step for design, build, marketing, consultancy, funding, AI ops, or
          hiring.
        </p>
        <a className="btn btn--signal" href="mailto:hello@techtoil.com">
          hello@techtoil.com
        </a>

        {sent ? (
          <p className="close__ok" role="status">
            Received. We will get back to you shortly.
          </p>
        ) : (
          <form className="close-form" onSubmit={onSubmit}>
            <label>
              Name
              <input name="name" required placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" type="email" required placeholder="you@company.com" />
            </label>
            <label>
              Service
              <select name="service" defaultValue={services[0].id}>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.num} — {s.title}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Brief
              <textarea name="brief" required placeholder="What are you building?" />
            </label>
            <button className="btn btn--signal" type="submit">
              Send brief
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
