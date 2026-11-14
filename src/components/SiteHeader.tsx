import { useEffect, useState } from 'react'
import { services } from '../data/services'
import { Logo } from './Logo'

export function SiteHeader({ activeId }: { activeId: string }) {
  const [on, setOn] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setOn(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`header ${on ? 'is-on' : ''}`}>
        <div className="header__inner">
          <a href="#top" aria-label="Techtoil home">
            <Logo height={32} />
          </a>

          <nav className="header__jump" aria-label="Services">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={activeId === s.id ? 'is-active' : ''}
                title={s.title}
              >
                {s.num}
              </a>
            ))}
          </nav>

          <a className="header__cta" href="#start">
            Start a project
          </a>

          <button
            className="header__menu"
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <i />
          </button>
        </div>
      </header>

      <div
        className={`drawer ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(false)}
        role="presentation"
      >
        <div
          className="drawer__panel"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-label="All services"
        >
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`} onClick={() => setOpen(false)}>
              <span className="num">{s.num}</span>
              <span>{s.title}</span>
            </a>
          ))}
          <a
            className="header__cta"
            href="#start"
            style={{ display: 'inline-flex', marginTop: '1.25rem' }}
            onClick={() => setOpen(false)}
          >
            Start a project
          </a>
        </div>
      </div>
    </>
  )
}
