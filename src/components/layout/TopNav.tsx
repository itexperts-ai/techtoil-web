import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'

export function TopNav() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'border-b border-line bg-bg/90 backdrop-blur-xl' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 md:h-20 md:px-6">
        <Logo />
        <div className="flex items-center gap-6">
          <Link to="/about" className="hidden text-sm font-semibold text-soft hover:text-ink sm:inline">
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm font-bold text-ink underline decoration-signal decoration-2 underline-offset-4 hover:text-signal"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}
