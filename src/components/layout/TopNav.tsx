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
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        solid ? 'border-b border-line bg-white/92 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-[4.25rem] md:px-6">
        <Logo light={!solid} />
        <nav className="hidden items-center gap-1 md:flex">
          <a
            href="/#aim"
            className={`px-3 py-2 text-sm font-semibold ${solid ? 'text-mute hover:text-ink' : 'text-white/75 hover:text-white'}`}
          >
            Aim
          </a>
          <a
            href="/#ai"
            className={`px-3 py-2 text-sm font-semibold ${solid ? 'text-mute hover:text-ink' : 'text-white/75 hover:text-white'}`}
          >
            AI
          </a>
          <a
            href="/#services"
            className={`px-3 py-2 text-sm font-semibold ${solid ? 'text-mute hover:text-ink' : 'text-white/75 hover:text-white'}`}
          >
            Services
          </a>
          <Link
            to="/about"
            className={`px-3 py-2 text-sm font-semibold ${solid ? 'text-mute hover:text-ink' : 'text-white/75 hover:text-white'}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`ml-2 rounded-full px-4 py-2 text-sm font-bold ${
              solid ? 'bg-ink text-white hover:bg-blue' : 'bg-white text-ink hover:bg-cyan'
            }`}
          >
            Contact
          </Link>
        </nav>
        <button
          type="button"
          className={`md:hidden rounded-md border px-3 py-1.5 text-sm font-bold ${
            solid ? 'border-line text-ink' : 'border-white/30 text-white'
          }`}
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
          <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-mute">Services</p>
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="block py-1.5 text-sm text-mute"
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
