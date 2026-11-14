import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'

export function TopNav() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'border-b border-line bg-white/92 backdrop-blur-xl shadow-sm shadow-ink/5' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="flex items-center gap-1">
          <a
            href="/#manifesto"
            className="hidden px-3 py-2 text-sm font-semibold text-mute transition hover:text-ink sm:inline"
          >
            Manifesto
          </a>
          <Link
            to="/about"
            className="hidden px-3 py-2 text-sm font-semibold text-mute transition hover:text-ink sm:inline"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="rounded-full bg-tide px-4 py-2 text-sm font-bold text-white transition hover:bg-sea"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
