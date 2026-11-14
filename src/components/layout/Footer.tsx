import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'

export function Footer() {
  return (
    <footer className="border-t border-line bg-mist">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <Logo />
        <div className="flex flex-wrap gap-5 text-sm font-medium text-soft">
          <a href="/#spine" className="hover:text-ink">
            Story
          </a>
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
      <div className="border-t border-line px-4 py-3 text-xs text-faint md:px-6">
        <div className="mx-auto flex max-w-6xl justify-between">
          <span>© {new Date().getFullYear()} Techtoil</span>
          <span>Idea → Working business</span>
        </div>
      </div>
    </footer>
  )
}
