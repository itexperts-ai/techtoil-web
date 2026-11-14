import { useState, type FormEvent } from 'react'
import { services } from '../data/services'

export function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="section contact" id="contact">
      <div className="wrap contact__panel">
        <div>
          <span className="section__eyebrow">Get started</span>
          <h2>Tell us what you are building next.</h2>
          <p>
            Share a short brief — product, marketing, funding, AI automation, or
            hiring — and we will come back with a clear next step.
          </p>
          <a className="btn btn--primary" href="mailto:hello@techtoil.com">
            hello@techtoil.com
          </a>
        </div>

        {sent ? (
          <div className="contact__success" role="status">
            Thanks — your message is noted. We will reach out shortly.
          </div>
        ) : (
          <form className="contact__form" onSubmit={onSubmit}>
            <label>
              Name
              <input name="name" type="text" required placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" type="email" required placeholder="you@company.com" />
            </label>
            <label>
              Interest
              <select name="interest" defaultValue="development">
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Message
              <textarea
                name="message"
                required
                placeholder="What are you trying to achieve?"
              />
            </label>
            <button className="btn btn--primary" type="submit">
              Send message
            </button>
            <p className="contact__note">Demo form — no backend; message stays in this session.</p>
          </form>
        )}
      </div>
    </section>
  )
}
