import { motion } from 'framer-motion'
import { Logo } from './Logo'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid" aria-hidden />
      <div className="hero__orb" aria-hidden />

      <div className="wrap hero__layout">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__brand">
            <Logo size={64} />
          </div>
          <h1>Build products. Scale startups. Automate with AI.</h1>
          <p className="hero__lead">
            Techtoil partners with founders and operators across design, development,
            growth, capital, AI-powered operations, and hiring — one team from idea
            to execution.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#services">
              Explore services
            </a>
            <a className="btn btn--ghost" href="#contact">
              Talk to us
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        >
          <div className="hero__canvas">
            <div className="hero__ring" />
            <div className="hero__ring hero__ring--2" />
            <div className="hero__core">
              <Logo markOnly size={88} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
