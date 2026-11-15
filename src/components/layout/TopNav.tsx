import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from '../brand/Logo'
import { services } from '../../data/services'

export function TopNav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/95 shadow-sm shadow-ink/5 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.35rem] max-w-6xl items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden items-center md:flex">
          <Link to="/" className="px-3 py-2 text-sm font-semibold text-ink hover:text-accent">
            Home
          </Link>
          <a href="/#catalog" className="px-3 py-2 text-sm font-semibold text-ink hover:text-accent">
            Services
          </a>
          <Link to="/about" className="px-3 py-2 text-sm font-semibold text-ink hover:text-accent">
            About
          </Link>
          <Link
            to="/contact"
            className="ml-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-deep"
          >
            Contact
          </Link>
        </nav>
        <button
          type="button"
          aria-label="Menu"
          className="rounded-lg border border-line px-3 py-1.5 text-sm font-semibold md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-paper px-4 py-5 md:hidden">
          <Link to="/" className="block py-2.5 font-semibold" onClick={() => setOpen(false)}>
            Home
          </Link>
          <a href="/#catalog" className="block py-2.5 font-semibold" onClick={() => setOpen(false)}>
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
          <Link to="/about" className="mt-1 block py-2.5 font-semibold" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link
            to="/contact"
            className="mt-3 flex justify-center rounded-lg bg-accent py-3 text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}
