import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-end md:justify-between md:px-6">
        <div>
          <Logo size="sm" className="[&_span]:text-white [&_.text-signal]:text-[#6ea0ff]" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            A partner for teams who want to design, build, launch, and scale —
            without stitching five agencies together.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-white/65">
          <Link to="/#aim" className="hover:text-white">
            Our aim
          </Link>
          <Link to="/#work" className="hover:text-white">
            What we do
          </Link>
          <Link to="/about" className="hover:text-white">
            About
          </Link>
          <Link to="/contact" className="hover:text-white">
            Contact
          </Link>
          <Link to="/privacy" className="hover:text-white">
            Privacy
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-xs text-white/45 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Techtoil</span>
          <span>Build what comes next.</span>
        </div>
      </div>
    </footer>
  )
}
