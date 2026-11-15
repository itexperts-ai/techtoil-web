import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from '../brand/Logo'
import { services } from '../../data/services'

export function TopNav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const overDarkHero = onHome && !solid && !open

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  const bar = solid || open || !onHome
  const link = overDarkHero
    ? 'px-3 py-2 text-sm font-medium text-white/80 hover:text-white'
    : 'px-3 py-2 text-sm font-medium text-mute hover:text-ink'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        bar
          ? 'border-b border-line bg-surface/95 shadow-sm shadow-ink/5 backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-4 md:px-6">
        <Logo tone={overDarkHero ? 'light' : 'dark'} />
        <nav className="hidden items-center md:flex">
          <Link to="/" className={link}>
            Home
          </Link>
          <a href="/#services" className={link}>
            Services
          </a>
          <Link to="/about" className={link}>
            About
          </Link>
          <Link
            to="/contact"
            className={`ml-3 px-4 py-2.5 text-sm font-semibold transition ${
              overDarkHero
                ? 'bg-white text-ink hover:bg-bg'
                : 'bg-azure px-4 text-white hover:bg-azure-deep'
            }`}
          >
            Contact
          </Link>
        </nav>
        <button
          type="button"
          aria-label="Menu"
          className={`border px-3 py-1.5 text-sm font-semibold md:hidden ${
            overDarkHero ? 'border-white/35 text-white' : 'border-line text-ink'
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-surface px-4 py-5 md:hidden">
          <Link to="/" className="block py-2.5 font-medium" onClick={() => setOpen(false)}>
            Home
          </Link>
          <a href="/#services" className="block py-2.5 font-medium" onClick={() => setOpen(false)}>
            Services
          </a>
          {services.map((s) => (
            <a
              key={s.id}
              href={`/#${s.id}`}
              className="block py-1.5 pl-2 text-sm text-mute"
              onClick={() => setOpen(false)}
            >
              {s.title}
            </a>
          ))}
          <Link to="/about" className="mt-1 block py-2.5 font-medium" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link
            to="/contact"
            className="mt-3 flex justify-center bg-azure py-3 text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}
