import { motion } from 'framer-motion'
import { services } from '../data/services'

export function ServiceChapters({ activeId }: { activeId: string }) {
  return (
    <div className="chapters" id="services">
      {services.map((s) => (
        <article key={s.id} className="chapter" id={s.id}>
          <nav className="chapter__rail" aria-label="Service index">
            {services.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeId === item.id ? 'is-active' : ''}
              >
                <span className="num">{item.num}</span>
                <span>{item.title}</span>
              </a>
            ))}
          </nav>

          <div className="chapter__body">
            <motion.div
              className="chapter__frame"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <div className="chapter__num" aria-hidden>
                {s.num}
              </div>
              <p className="chapter__kicker">Service {s.num} of 07</p>
              <h2>{s.title}</h2>
              <p className="chapter__sub">{s.subtitle}</p>
              <p className="chapter__summary">{s.summary}</p>

              <div className="chapter__grid">
                <div className="chapter__focus">
                  <h3>What we cover</h3>
                  <ul>
                    {s.focus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="chapter__outcome">
                  <span>Outcome</span>
                  <p>{s.outcome}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </article>
      ))}
    </div>
  )
}
