import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'

export function Footer() {
  return (
    <footer className="bg-tide text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 md:flex-row md:justify-between md:px-6">
        <div className="max-w-sm">
          <Logo tone="light" />
          <p className="mt-5 text-sm leading-relaxed text-white/55">
            From first spark to a business that runs — one studio, one clear path.
          </p>
        </div>
        <div className="flex flex-wrap content-start gap-x-8 gap-y-3 text-sm text-white/55">
          <a href="/#manifesto" className="hover:text-white">
            Manifesto
          </a>
          <a href="/#path" className="hover:text-white">
            Path
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
      <div className="border-t border-white/10 px-4 py-4 text-xs text-white/35 md:px-6">
        <div className="mx-auto flex max-w-6xl justify-between gap-2">
          <span>© {new Date().getFullYear()} Techtoil</span>
          <span>Clarity in every build</span>
        </div>
      </div>
    </footer>
  )
}
