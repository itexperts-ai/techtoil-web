import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from '../brand/Logo'

export function TopNav() {
  const [solid, setSolid] = useState(false)
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > (onHome ? 48 : 8))
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onHome])

  const overHero = onHome && !solid

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid || !onHome
          ? 'border-b border-line bg-snow/92 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[4.35rem] max-w-6xl items-center justify-between px-4 md:px-6">
        <Logo tone={overHero ? 'light' : 'dark'} />
        <nav className="flex items-center gap-1 sm:gap-2">
          {onHome && (
            <a
              href="#story"
              className={`hidden rounded-md px-3 py-2 text-sm font-semibold sm:inline ${
                overHero ? 'text-white/75 hover:text-white' : 'text-mute hover:text-ink'
              }`}
            >
              Story
            </a>
          )}
          <Link
            to="/about"
            className={`hidden rounded-md px-3 py-2 text-sm font-semibold sm:inline ${
              overHero ? 'text-white/75 hover:text-white' : 'text-mute hover:text-ink'
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`rounded-md px-3.5 py-2 text-sm font-bold transition ${
              overHero
                ? 'bg-white text-ink hover:bg-white/90'
                : 'bg-ink text-white hover:bg-accent'
            }`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
