import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'
import { services } from '../../data/services'

export function Footer() {
  return (
    <footer className="border-t border-line bg-midnight">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo size="sm" />
          <p className="mt-4 max-w-sm text-sm text-muted leading-relaxed">
            Techtoil is an AI-powered business growth partner — product, technology,
            marketing, capital readiness, automation, and talent in one ecosystem.
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan mb-3">
            Solutions
          </p>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.id}>
                <Link to={s.path} className="text-sm text-muted hover:text-white transition">
                  {s.num} · {s.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan mb-3">
            Company
          </p>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/how-we-work" className="hover:text-white">
                How We Work
              </Link>
            </li>
            <li>
              <Link to="/industries" className="hover:text-white">
                Industries
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line px-4 md:px-6 py-4 text-xs text-muted flex flex-wrap justify-between gap-2 max-w-6xl mx-auto">
        <span>© {new Date().getFullYear()} Techtoil. All rights reserved.</span>
        <span>From Vision to Execution. From Startup to Scale.</span>
      </div>
    </footer>
  )
}
