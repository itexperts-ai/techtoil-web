import { motion } from 'framer-motion'
import { Logo } from './Logo'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__plane" aria-hidden />
      <div className="hero__beam" aria-hidden />

      <div className="wrap hero__inner">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__brand">
            <Logo height={72} />
          </div>
          <h1>Seven levers. One studio for builders.</h1>
          <p className="hero__lead">
            From product craft and engineering to growth, capital, AI-run
            operations, and hiring — Techtoil is built so founders never have to
            stitch seven agencies together.
          </p>
          <div className="hero__actions">
            <a className="btn btn--signal" href="#pillars">
              See all 7 services
            </a>
            <a className="btn btn--line" href="#start">
              Talk to Techtoil
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__stage"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        >
          <div className="hero__orbit">
            <div className="hero__orbit-ring" />
            <div className="hero__orbit-ring hero__orbit-ring--inner" />
            <div className="hero__orbit-core">
              <img src="/brand/techtoil-logo.jpg" alt="" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
