import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'

export function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-6">
        <Logo />
        <div className="flex flex-wrap gap-6 text-sm font-medium text-soft">
          <Link to="/about" className="hover:text-ink">
            About
          </Link>
          <Link to="/contact" className="hover:text-ink">
            Contact
          </Link>
          <a href="mailto:hello@techtoil.com" className="hover:text-ink">
            hello@techtoil.com
          </a>
        </div>
      </div>
      <div className="border-t border-line px-5 py-4 text-xs text-dim md:px-6">
        <div className="mx-auto flex max-w-5xl justify-between gap-2">
          <span>© {new Date().getFullYear()} Techtoil</span>
          <span>Vision → Execution</span>
        </div>
      </div>
    </footer>
  )
}
