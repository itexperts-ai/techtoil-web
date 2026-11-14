import { Logo } from './Logo'
import { services } from '../data/services'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <Logo className="tt-logo--light" size={28} />
          <ul className="footer__links">
            {services.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Techtoil. All rights reserved.</span>
          <span>Product · Growth · Capital · AI · Talent</span>
        </div>
      </div>
    </footer>
  )
}
