import { services } from '../data/services'

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <img
          className="footer__logo"
          src="/brand/techtoil-logo.jpg"
          alt="Techtoil"
        />
        <ul className="footer__list">
          {services.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>
                {s.num} · {s.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="footer__base">
          <span>© {new Date().getFullYear()} Techtoil</span>
          <span>Design · Build · Growth · Capital · AI · Talent</span>
        </div>
      </div>
    </footer>
  )
}
