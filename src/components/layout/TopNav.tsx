import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from '../brand/Logo'
import { services } from '../../data/services'

export function TopNav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  // Always readable: frosted bar on home (even over hero) + solid elsewhere
  const frosted = onHome || solid || open || !onHome
  const elevated = solid || open || !onHome

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        elevated
          ? 'border-b border-line bg-quartz/95 shadow-sm shadow-ink/5 backdrop-blur-xl'
          : frosted
            ? 'border-b border-line/60 bg-quartz/80 backdrop-blur-xl'
            : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden items-center md:flex">
          <Link
            to="/"
            className="px-3 py-2 text-sm font-semibold text-ink/80 hover:text-ink"
          >
            Home
          </Link>
          <a
            href="/#services"
            className="px-3 py-2 text-sm font-semibold text-ink/80 hover:text-ink"
          >
            Services
          </a>
          <Link
            to="/about"
            className="px-3 py-2 text-sm font-semibold text-ink/80 hover:text-ink"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="ml-2 bg-teal px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-deep"
          >
            Contact
          </Link>
        </nav>
        <button
          type="button"
          aria-label="Menu"
          className="border border-ink/20 bg-quartz/90 px-3 py-1.5 text-sm font-semibold text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-quartz px-4 py-5 md:hidden">
          <Link to="/" className="block py-2.5 font-semibold text-ink" onClick={() => setOpen(false)}>
            Home
          </Link>
          <a
            href="/#services"
            className="block py-2.5 font-semibold text-ink"
            onClick={() => setOpen(false)}
          >
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
          <Link
            to="/about"
            className="mt-1 block py-2.5 font-semibold text-ink"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="mt-3 flex justify-center bg-teal py-3 text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}
