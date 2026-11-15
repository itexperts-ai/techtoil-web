import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'
import { services } from '../../data/services'

export function TopNav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        solid ? 'border-b border-line bg-white/90 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-[4.25rem] md:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex">
          {['Aim', 'AI', 'Services'].map((label) => (
            <a
              key={label}
              href={`/#${label.toLowerCase()}`}
              className="px-3 py-2 text-sm font-semibold text-soft hover:text-ink"
            >
              {label}
            </a>
          ))}
          <Link to="/about" className="px-3 py-2 text-sm font-semibold text-soft hover:text-ink">
            About
          </Link>
          <Link
            to="/contact"
            className="ml-2 rounded-full bg-ink px-4 py-2 text-sm font-bold text-white hover:bg-blue"
          >
            Contact
          </Link>
        </nav>
        <button
          type="button"
          className="rounded-full border border-line px-3 py-1.5 text-sm font-bold md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-white px-4 py-4 md:hidden">
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
            className="mt-3 flex justify-center rounded-full bg-ink py-3 text-sm font-bold text-white"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}
