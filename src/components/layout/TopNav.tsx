import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from '../brand/Logo'
import { services } from '../../data/services'

export function TopNav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const overHero = pathname === '/' && !solid && !open

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const link = overHero
    ? 'px-3 py-2 text-sm font-medium text-white/80 hover:text-white'
    : 'px-3 py-2 text-sm font-medium text-steel hover:text-ink'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid || open
          ? 'border-b border-edge bg-paper/95 backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-4 md:px-6">
        <Logo tone={overHero ? 'light' : 'dark'} />
        <nav className="hidden items-center md:flex">
          <a href="/#services" className={link}>
            Services
          </a>
          <Link to="/about" className={link}>
            About
          </Link>
          <Link
            to="/contact"
            className={`ml-4 px-4 py-2.5 text-sm font-semibold transition ${
              overHero
                ? 'bg-white text-ink hover:bg-canvas'
                : 'bg-night text-white hover:bg-brand'
            }`}
          >
            Contact
          </Link>
        </nav>
        <button
          type="button"
          aria-label="Menu"
          className={`border px-3 py-1.5 text-sm font-semibold md:hidden ${
            overHero ? 'border-white/35 text-white' : 'border-edge text-ink'
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <div className="border-t border-edge bg-paper px-4 py-5 md:hidden">
          <a
            href="/#services"
            className="block py-2.5 font-medium"
            onClick={() => setOpen(false)}
          >
            Services
          </a>
          {services.map((s) => (
            <a
              key={s.id}
              href={`/#${s.id}`}
              className="block py-1.5 pl-2 text-sm text-steel"
              onClick={() => setOpen(false)}
            >
              {s.title}
            </a>
          ))}
          <Link
            to="/about"
            className="mt-2 block py-2.5 font-medium"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="mt-3 flex justify-center bg-night py-3 text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}
