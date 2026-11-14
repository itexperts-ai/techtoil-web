import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Logo } from '../brand/Logo'

const links = [
  { to: '/#aim', label: 'Our aim' },
  { to: '/#work', label: 'What we do' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function TopNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-mist/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Logo size="sm" />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-semibold text-ink-soft transition hover:text-ink"
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-md bg-ink px-3.5 py-2 text-sm font-bold text-white transition hover:bg-signal sm:inline-flex"
          >
            Start a project
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-4 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block py-2.5 text-sm font-semibold"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-3 flex justify-center rounded-md bg-ink py-3 text-sm font-bold text-white"
            onClick={() => setOpen(false)}
          >
            Start a project
          </Link>
        </div>
      )}
    </header>
  )
}
