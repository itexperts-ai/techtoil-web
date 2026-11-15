import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'
import { services } from '../../data/services'

export function TopNav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid || open
          ? 'border-b border-line bg-ivory/95 backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden items-center md:flex">
          <Link to="/" className="px-3 py-2 text-sm font-medium text-soft hover:text-ink">
            Home
          </Link>
          <a href="/#services" className="px-3 py-2 text-sm font-medium text-soft hover:text-ink">
            Services
          </a>
          <Link to="/about" className="px-3 py-2 text-sm font-medium text-soft hover:text-ink">
            About
          </Link>
          <Link
            to="/contact"
            className="ml-3 bg-leaf px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-moss"
          >
            Contact
          </Link>
        </nav>
        <button
          type="button"
          aria-label="Menu"
          className="border border-line px-3 py-1.5 text-sm font-semibold text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-ivory px-4 py-5 md:hidden">
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
              className="block py-1.5 pl-2 text-sm text-soft"
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
            className="mt-3 flex justify-center bg-leaf py-3 text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}
