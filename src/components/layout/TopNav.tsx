import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'

export function TopNav() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'border-b border-line bg-navy/90 backdrop-blur-xl' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-[4.25rem] md:px-6">
        <Logo />
        <nav className="flex items-center gap-1">
          <a href="/#paths" className="hidden px-3 py-2 text-sm font-medium text-mute hover:text-white sm:inline">
            Paths
          </a>
          <a href="/#studio" className="hidden px-3 py-2 text-sm font-medium text-mute hover:text-white sm:inline">
            Studio
          </a>
          <Link to="/about" className="hidden px-3 py-2 text-sm font-medium text-mute hover:text-white sm:inline">
            About
          </Link>
          <Link
            to="/contact"
            className="ml-1 rounded-full bg-gold px-4 py-2 text-sm font-bold text-navy hover:bg-gold-dark"
          >
            Book a call
          </Link>
        </nav>
      </div>
    </header>
  )
}
