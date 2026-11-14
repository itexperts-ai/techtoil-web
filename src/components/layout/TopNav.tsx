import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'

export function TopNav() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        solid ? 'border-b border-line bg-paper/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="flex items-center gap-5 text-sm font-semibold">
          <a href="/#spine" className="hidden text-soft hover:text-ink sm:inline">
            Story
          </a>
          <Link to="/about" className="hidden text-soft hover:text-ink sm:inline">
            About
          </Link>
          <Link to="/contact" className="text-ember hover:text-ember-dark">
            Contact →
          </Link>
        </nav>
      </div>
    </header>
  )
}
