import { motion } from 'framer-motion'
import { services } from '../data/services'

export function Services() {
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <div className="section__head">
          <span className="section__eyebrow">What we do</span>
          <h2>Seven capabilities. One partner from spark to scale.</h2>
          <p>
            Whether you need a product shipped, a pipeline filled, capital readiness,
            AI ops, or the right people — Techtoil covers the full stack of startup
            execution.
          </p>
        </div>

        <div className="services__list">
          {services.map((s, i) => (
            <motion.article
              key={s.id}
              className="service"
              id={s.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.25) }}
            >
              <div className="service__meta">
                <span className="service__num">{s.number}</span>
                <span className="service__tag">{s.tag}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <ul className="service__points">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
