import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'
import { services } from '../../data/services'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-6">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-sm text-[0.875rem] leading-relaxed text-white/50">
            AIM-led studio for product, growth, AI operations, and talent — advanced
            craft, clear outcomes.
          </p>
        </div>
        <div>
          <p className="type-mono text-white/35">Services</p>
          <ul className="mt-4 space-y-2.5 text-[0.875rem] text-white/60">
            {services.map((s) => (
              <li key={s.id}>
                <a href={`/#${s.id}`} className="transition hover:text-white">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="type-mono text-white/35">Company</p>
          <ul className="mt-4 space-y-2.5 text-[0.875rem] text-white/60">
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
      <div className="border-t border-white/10 px-4 py-4 md:px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 text-[0.7rem] text-white/35">
          <span>© {new Date().getFullYear()} Techtoil</span>
          <span className="font-mono tracking-wider">VISION → EXECUTION</span>
        </div>
      </div>
    </footer>
  )
}
