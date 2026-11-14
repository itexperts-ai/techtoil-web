import { services } from '../data/services'

export function Pillars() {
  return (
    <section className="pillars" id="pillars" aria-label="All seven services">
      <div className="wrap">
        <p className="pillars__label">All 7 services — jump to any pillar</p>
        <div className="pillars__list">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              <span className="num">{s.num}</span>
              <span className="title">{s.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
