import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Discover',
    body: 'Align on goals, constraints, and the outcome that matters — product, growth, capital, or ops.',
  },
  {
    title: 'Design',
    body: 'Shape the experience, architecture, and plan so every sprint moves the needle.',
  },
  {
    title: 'Build',
    body: 'Ship with disciplined engineering, marketing execution, or automation that sticks.',
  },
  {
    title: 'Scale',
    body: 'Layer hiring, funding support, and AI ops so momentum compounds instead of stalling.',
  },
]

export function Process() {
  return (
    <section className="section process" id="process">
      <div className="wrap">
        <div className="section__head">
          <span className="section__eyebrow">How we work</span>
          <h2>A clear path from conversation to compound growth.</h2>
          <p>
            No bloated process — just a sharp loop that keeps founders and operators
            moving with focus.
          </p>
        </div>

        <div className="process__steps">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="process__step"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
