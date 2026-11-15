import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from '../brand/Logo'
import { services } from '../../data/services'

export function TopNav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const overHero = onHome && !solid

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const link = overHero
    ? 'px-3 py-2 text-[0.8125rem] font-medium text-white/80 hover:text-white'
    : 'px-3 py-2 text-[0.8125rem] font-medium text-soft hover:text-ink'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid || open
          ? 'border-b border-line bg-surface/92 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-[4.25rem] md:px-6">
        <Logo tone={overHero && !open ? 'light' : 'dark'} />
        <nav className="hidden items-center gap-0.5 md:flex">
          {['Aim', 'AI', 'Services'].map((label) => (
            <a key={label} href={`/#${label.toLowerCase()}`} className={link}>
              {label}
            </a>
          ))}
          <Link to="/about" className={link}>
            About
          </Link>
          <Link
            to="/contact"
            className={`ml-3 px-4 py-2 text-[0.8125rem] font-semibold transition ${
              overHero
                ? 'bg-white text-ink hover:bg-mist'
                : 'bg-slate text-white hover:bg-blue'
            }`}
          >
            Contact
          </Link>
        </nav>
        <button
          type="button"
          className={`border px-3 py-1.5 text-sm font-bold md:hidden ${
            overHero && !open
              ? 'border-white/35 text-white'
              : 'border-line text-ink'
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-surface px-4 py-4 md:hidden">
          <a href="/#aim" className="block py-2 font-semibold" onClick={() => setOpen(false)}>
            Aim
          </a>
          <a href="/#ai" className="block py-2 font-semibold" onClick={() => setOpen(false)}>
            AI
          </a>
          {services.map((s) => (
            <a
              key={s.id}
              href={`/#${s.id}`}
              className="block py-1.5 text-sm text-soft"
              onClick={() => setOpen(false)}
            >
              {s.num} {s.title}
            </a>
          ))}
          <Link
            to="/contact"
            className="mt-3 flex justify-center bg-slate py-3 text-sm font-bold text-white"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}
