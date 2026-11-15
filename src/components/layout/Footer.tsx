import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'
import { services } from '../../data/services'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:px-6">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
            AIM-led studio for product, growth, AI operations, and talent.
          </p>
        </div>
        <div>
          <p className="label text-white/40">Services</p>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
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
          <p className="label text-white/40">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li>
              <a href="/#aim" className="hover:text-white">
                Aim
              </a>
            </li>
            <li>
              <a href="/#ai" className="hover:text-white">
                AI
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
            <li>
              <a href="mailto:hello@techtoil.com" className="hover:text-white">
                hello@techtoil.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-xs text-white/40 md:px-6">
        <div className="mx-auto flex max-w-6xl justify-between">
          <span>© {new Date().getFullYear()} Techtoil</span>
          <span>Vision → Execution</span>
        </div>
      </div>
    </footer>
  )
}
