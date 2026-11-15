import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'
import { company } from '../../data/company'
import { services } from '../../data/services'

export function Footer() {
  return (
    <footer className="bg-void text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
            {company.legalName}
          </p>
        </div>
        <div>
          <p className="label text-white/35">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/60">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <a href="/#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="label text-white/35">Services</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/60">
            {services.map((s) => (
              <li key={s.id}>
                <a href={`/#${s.id}`} className="hover:text-white">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label text-white/35">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/60">
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
            {company.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="hover:text-white">
                  {p.display}
                </a>
              </li>
            ))}
            <li className="leading-relaxed text-white/45">
              {company.registeredOffice.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-xs text-white/35 sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {company.legalName}
          </span>
          <span>CIN {company.cin}</span>
        </div>
      </div>
    </footer>
  )
}
