import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'
import { services } from '../../data/services'

export function Footer() {
  return (
    <footer className="bg-void text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-6">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm text-sm text-mute-dark">
            From vision to execution — product, growth, AI operations, and talent in one studio.
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan">Services</p>
          <ul className="mt-3 space-y-2 text-sm text-mute-dark">
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
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-mute-dark">
            <li>
              <a href="/#aim" className="hover:text-white">
                Our Aim
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
      <div className="border-t border-line-dark px-4 py-4 text-xs text-mute-dark md:px-6">
        <div className="mx-auto flex max-w-6xl justify-between gap-2">
          <span>© {new Date().getFullYear()} Techtoil</span>
          <span>Vision → Execution</span>
        </div>
      </div>
    </footer>
  )
}
