import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'

export function Footer() {
  return (
    <footer className="border-t border-line bg-navy-2">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-mute">
            One studio for the journey from idea to a business that runs.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-mute">
          <a href="/#paths" className="hover:text-white">
            Paths
          </a>
          <Link to="/about" className="hover:text-white">
            About
          </Link>
          <Link to="/contact" className="hover:text-white">
            Contact
          </Link>
          <a href="mailto:hello@techtoil.com" className="hover:text-white">
            hello@techtoil.com
          </a>
        </div>
      </div>
      <div className="border-t border-line px-4 py-4 text-xs text-mute/70 md:px-6">
        <div className="mx-auto flex max-w-6xl justify-between gap-2">
          <span>© {new Date().getFullYear()} Techtoil</span>
          <span>Build with clarity</span>
        </div>
      </div>
    </footer>
  )
}
