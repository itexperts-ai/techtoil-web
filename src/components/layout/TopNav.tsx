import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Logo } from '../brand/Logo'
import { navLinks, services } from '../../data/services'

export function TopNav() {
  const [open, setOpen] = useState(false)
  const [mega, setMega] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-midnight/85 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        <Logo size="sm" />

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {navLinks.map((l) =>
            l.label === 'Solutions' ? (
              <div
                key={l.path}
                className="relative"
                onMouseEnter={() => setMega(true)}
                onMouseLeave={() => setMega(false)}
              >
                <NavLink
                  to={l.path}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition ${
                      isActive || mega ? 'text-white' : 'text-muted hover:text-white'
                    }`
                  }
                >
                  Solutions <ChevronDown className="h-3.5 w-3.5" />
                </NavLink>
                {mega && (
                  <div className="absolute left-0 top-full w-[640px] pt-2">
                    <div className="glass rounded-xl p-4 shadow-2xl shadow-black/40">
                      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan">
                        Seven integrated capabilities
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {services.map((s) => (
                          <Link
                            key={s.id}
                            to={s.path}
                            className="rounded-lg p-3 hover:bg-white/5 transition"
                            onClick={() => setMega(false)}
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-display text-xs font-bold text-electric">
                                {s.num}
                              </span>
                              <span className="text-sm font-semibold text-white">{s.short}</span>
                            </div>
                            <p className="mt-1 text-xs text-muted line-clamp-2">{s.tagline}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={l.path}
                to={l.path}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-semibold transition ${
                    isActive ? 'text-white' : 'text-muted hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex rounded-md bg-white px-3.5 py-2 text-sm font-bold text-midnight hover:bg-soft transition"
          >
            Contact Us
          </Link>
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-line"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-surface px-4 py-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className="block py-2.5 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <p className="mt-3 mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
            All 7 services
          </p>
          {services.map((s) => (
            <Link
              key={s.id}
              to={s.path}
              className="flex gap-3 py-2.5 border-b border-line"
              onClick={() => setOpen(false)}
            >
              <span className="font-display text-xs font-bold text-electric">{s.num}</span>
              <span className="text-sm font-medium text-white/90">{s.title}</span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 flex justify-center rounded-md bg-electric py-3 text-sm font-bold"
            onClick={() => setOpen(false)}
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </header>
  )
}
