import { motion } from 'framer-motion'

const agents = [
  { id: 'agt.support', name: 'Support agent', status: 'live', edge: 'inbox → crm' },
  { id: 'agt.leads', name: 'Lead qualifier', status: 'live', edge: 'form → crm' },
  { id: 'agt.ops', name: 'Ops reporter', status: 'queued', edge: 'data → brief' },
]

const flows = [
  { from: 'inbox', to: 'agent' },
  { from: 'agent', to: 'crm' },
  { from: 'crm', to: 'human' },
]

export function AiOrbitPanel() {
  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-line bg-paper">
      <div className="node-grid absolute inset-0 opacity-60" />
      <div className="relative p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="ai-chip">agent.layer</p>
            <p className="mt-3 font-display text-lg font-bold tracking-[-0.03em]">Active mesh</p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-ai-soft px-3 py-1.5 font-mono text-[0.65rem] font-semibold text-accent-deep">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            online
          </div>
        </div>

        <div className="relative mx-auto mt-8 h-40 w-full max-w-xs">
          <svg viewBox="0 0 240 160" className="absolute inset-0 h-full w-full" aria-hidden>
            <circle cx="120" cy="85" r="52" fill="none" stroke="#D3D9E2" strokeWidth="1.25" strokeDasharray="4 5" />
            <line x1="120" y1="33" x2="120" y2="85" stroke="#D3D9E2" strokeWidth="1.25" />
            <line x1="120" y1="85" x2="172" y2="115" stroke="#1E4DFF" strokeWidth="1.5" />
            <line x1="120" y1="85" x2="68" y2="115" stroke="#D3D9E2" strokeWidth="1.25" strokeDasharray="4 5" />
            <circle cx="120" cy="85" r="10" fill="#1E4DFF" />
            <text x="120" y="89" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="IBM Plex Mono, monospace" fontWeight="600">
              AIM
            </text>
            <motion.circle
              r="5"
              fill="#1E4DFF"
              animate={{ cx: [120, 172, 120, 68, 120], cy: [33, 115, 85, 115, 33] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <circle cx="120" cy="33" r="6" fill="#E7ECF3" stroke="#14171C" strokeWidth="1" />
            <circle cx="172" cy="115" r="6" fill="#EEF2FF" stroke="#1E4DFF" strokeWidth="1.5" />
            <circle cx="68" cy="115" r="6" fill="#E7ECF3" stroke="#14171C" strokeWidth="1" />
          </svg>
        </div>

        <div className="mt-2 grid gap-2">
          {agents.map((a, i) => (
            <motion.div
              key={a.id}
              className="flex items-center justify-between rounded-xl bg-bg px-3.5 py-3"
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div>
                <p className="agt-tag">{a.id}</p>
                <p className="mt-0.5 text-sm font-semibold tracking-[-0.02em]">{a.name}</p>
                <p className="font-mono text-[0.65rem] text-mute">{a.edge}</p>
              </div>
              <span
                className={`font-mono text-[0.65rem] font-semibold uppercase ${
                  a.status === 'live' ? 'text-accent' : 'text-faint'
                }`}
              >
                {a.status}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-line pt-4">
          {flows.map((f, i) => (
            <span key={`${f.from}-${f.to}`} className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] text-mute">
              <span className="rounded bg-well px-2 py-1 text-ink">{f.from}</span>
              <span className="text-accent">→</span>
              <span className="rounded bg-well px-2 py-1 text-ink">{f.to}</span>
              {i < flows.length - 1 && <span className="text-faint">·</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
