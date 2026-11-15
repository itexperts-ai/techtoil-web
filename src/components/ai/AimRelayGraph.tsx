import { motion } from 'framer-motion'
import { services } from '../../data/services'

/** AIM hub with seven service nodes + traversing agent */
export function AimRelayGraph() {
  const cx = 200
  const cy = 170
  const r = 118
  const nodes = services.map((s, i) => {
    const a = (Math.PI * 2 * i) / services.length - Math.PI / 2
    return {
      ...s,
      x: cx + Math.cos(a) * r,
      y: cy + Math.sin(a) * r,
      tag: `agt.${s.id.split('-')[0]}`,
    }
  })

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-line bg-paper">
      <div className="node-grid absolute inset-0 opacity-70" />
      <div className="relative flex items-center justify-between px-4 pt-4 sm:px-5">
        <p className="ai-chip">relay.graph</p>
        <p className="font-mono text-[0.65rem] text-mute">nodes · edges · agents</p>
      </div>
      <svg viewBox="0 0 400 340" className="relative mx-auto h-auto w-full max-w-lg" role="img" aria-label="AIM hub connected to seven services">
        {/* Edges */}
        {nodes.map((n) => (
          <line
            key={`e-${n.id}`}
            x1={cx}
            y1={cy}
            x2={n.x}
            y2={n.y}
            stroke="#D3D9E2"
            strokeWidth="1.25"
            strokeDasharray="4 5"
          />
        ))}

        {/* Traversing agent on Design edge (index 0) */}
        <motion.circle
          r="5"
          fill="#1E4DFF"
          initial={{ cx, cy }}
          animate={{
            cx: [cx, nodes[0].x, cx, nodes[5].x, cx],
            cy: [cy, nodes[0].y, cy, nodes[5].y, cy],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Service nodes */}
        {nodes.map((n) => (
          <g key={n.id}>
            <a href={`#${n.id}`}>
              <circle cx={n.x} cy={n.y} r="9" fill="#E7ECF3" stroke="#14171C" strokeWidth="1.25" />
              <circle cx={n.x} cy={n.y} r="2.5" fill="#14171C" />
              <text
                x={n.x}
                y={n.y + 22}
                textAnchor="middle"
                className="fill-ink"
                style={{ fontSize: 8, fontFamily: 'IBM Plex Mono, monospace' }}
              >
                {n.num}
              </text>
            </a>
          </g>
        ))}

        {/* AIM hub */}
        <circle cx={cx} cy={cy} r="28" fill="#EEF2FF" stroke="#1E4DFF" strokeWidth="2" />
        <circle cx={cx} cy={cy} r="8" fill="#1E4DFF" />
        <text
          x={cx}
          y={cy + 42}
          textAnchor="middle"
          style={{ fontSize: 11, fontWeight: 700, fontFamily: 'Syne, sans-serif', fill: '#14171C' }}
        >
          AIM
        </text>
      </svg>
      <div className="flex flex-wrap gap-2 border-t border-line px-4 py-3 sm:px-5">
        {nodes.slice(0, 4).map((n) => (
          <span key={n.tag} className="agt-tag rounded bg-well px-2 py-1">
            {n.tag}
          </span>
        ))}
        <span className="agt-tag rounded bg-well px-2 py-1">+{nodes.length - 4}</span>
      </div>
    </div>
  )
}
