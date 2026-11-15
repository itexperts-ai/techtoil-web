import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'
import { services } from '../../data/services'

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:px-6">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-soft">
            AIM-led studio for product, growth, AI operations, and talent — light,
            clear, and built to ship.
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-faint">Services</p>
          <ul className="mt-3 space-y-2 text-sm text-soft">
            {services.map((s) => (
              <li key={s.id}>
                <a href={`/#${s.id}`} className="hover:text-ink">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-faint">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-soft">
            <li>
              <a href="/#aim" className="hover:text-ink">
                Aim
              </a>
            </li>
            <li>
              <a href="/#ai" className="hover:text-ink">
                AI
              </a>
            </li>
            <li>
              <Link to="/about" className="hover:text-ink">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-ink">
                Contact
              </Link>
            </li>
            <li>
              <a href="mailto:hello@techtoil.com" className="hover:text-ink">
                hello@techtoil.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line px-4 py-4 text-xs text-faint md:px-6">
        <div className="mx-auto flex max-w-6xl justify-between gap-2">
          <span>© {new Date().getFullYear()} Techtoil</span>
          <span>Vision → Execution</span>
        </div>
      </div>
    </footer>
  )
}
