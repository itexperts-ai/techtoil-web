import { motion } from 'framer-motion'

export function AiBand() {
  return (
    <section className="ai-band" id="automation">
      <div className="ai-band__scan" aria-hidden />
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section__eyebrow">AI world operations</span>
          <h2>Automate the work that slows your team down.</h2>
          <p className="ai-band__copy">
            We design and deploy AI-driven workflows for ops, support, finance
            follow-ups, reporting, and internal tools — so humans focus on judgment,
            not busywork.
          </p>
        </motion.div>

        <motion.div
          className="ai-band__stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className="ai-band__stat">
            <strong>Agents + workflows</strong>
            <span>Custom automations wired into your stack</span>
          </div>
          <div className="ai-band__stat">
            <strong>OnRole / OffRole</strong>
            <span>Talent pipelines that match how you hire</span>
          </div>
          <div className="ai-band__stat">
            <strong>Design → Capital</strong>
            <span>From product craft to funding readiness</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
