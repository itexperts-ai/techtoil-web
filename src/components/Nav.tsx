import { useEffect, useState } from 'react'
import { Logo } from './Logo'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#automation', label: 'AI Ops' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="wrap nav__inner">
        <a href="#top" aria-label="Techtoil home">
          <Logo size={32} />
        </a>

        <ul className="nav__links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a className="nav__cta" href="#contact">
          Start a project
        </a>

        <button
          className="nav__burger"
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>

      <div className={`nav__drawer ${open ? 'is-open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a className="nav__cta" href="#contact" onClick={() => setOpen(false)}>
          Start a project
        </a>
      </div>
    </header>
  )
}
