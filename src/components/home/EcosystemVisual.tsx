import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { services } from '../../data/services'

/** Interactive seven-node growth engine for the hero. */
export function EcosystemVisual() {
  const nodes = services.map((s, i) => {
    const angle = (i / services.length) * Math.PI * 2 - Math.PI / 2
    const r = 38
    return {
      ...s,
      x: 50 + r * Math.cos(angle),
      y: 50 + r * Math.sin(angle),
    }
  })

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      <div className="absolute inset-0 rounded-full border border-electric/20" />
      <div className="absolute inset-[12%] rounded-full border border-cyan/15" />
      <motion.div
        className="absolute inset-[28%] rounded-full glass grid place-items-center text-center px-4"
        animate={{ boxShadow: ['0 0 0 rgba(53,109,255,0.1)', '0 0 40px rgba(56,217,245,0.18)', '0 0 0 rgba(53,109,255,0.1)'] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-cyan">Center</p>
          <p className="mt-1 font-display text-sm font-bold leading-tight md:text-base">
            Business Growth Engine
          </p>
        </div>
      </motion.div>

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden>
        {nodes.map((n) => (
          <line
            key={n.id}
            x1="50"
            y1="50"
            x2={n.x}
            y2={n.y}
            stroke="rgba(53,109,255,0.35)"
            strokeWidth="0.35"
          />
        ))}
      </svg>

      {nodes.map((n, i) => (
        <motion.div
          key={n.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.08 * i, duration: 0.45 }}
        >
          <Link
            to={n.path}
            className="block w-[4.6rem] rounded-lg border border-white/10 bg-surface/90 px-1.5 py-2 text-center shadow-lg shadow-black/30 backdrop-blur hover:border-electric/50 hover:bg-surface-2 transition"
            title={n.title}
          >
            <span className="font-display text-[10px] font-bold" style={{ color: n.accent }}>
              {n.num}
            </span>
            <span className="mt-0.5 block text-[9px] font-semibold leading-tight text-white/90">
              {n.short}
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
