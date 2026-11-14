import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'

export function TopNav() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-line bg-snow/90 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-4 md:px-6">
        <Logo tone={solid ? 'dark' : 'light'} />
        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            to="/about"
            className={`hidden rounded-md px-3 py-2 text-sm font-semibold sm:inline ${
              solid ? 'text-mute hover:text-ink' : 'text-white/75 hover:text-white'
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`rounded-md px-3.5 py-2 text-sm font-bold transition ${
              solid
                ? 'bg-ink text-white hover:bg-accent'
                : 'bg-white text-ink hover:bg-white/90'
            }`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
