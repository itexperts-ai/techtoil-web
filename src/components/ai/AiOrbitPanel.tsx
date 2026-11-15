import { motion } from 'framer-motion'

const agents = [
  { id: 'A1', name: 'Support agent', status: 'Live', color: '#00C9A7' },
  { id: 'A2', name: 'Lead qualifier', status: 'Live', color: '#2D6BFF' },
  { id: 'A3', name: 'Ops reporter', status: 'Queued', color: '#5B8CFF' },
]

const flows = [
  { from: 'Inbox', to: 'Agent', label: 'route' },
  { from: 'Agent', to: 'CRM', label: 'write' },
  { from: 'CRM', to: 'Human', label: 'handoff' },
]

export function AiOrbitPanel() {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-[0_30px_80px_-40px_rgba(12,18,34,0.45)]">
      <div className="node-grid absolute inset-0 opacity-80" />
      <div className="relative p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="ai-chip">Neural layer</p>
            <p className="mt-3 font-display text-lg font-bold tracking-[-0.03em]">Agent mesh</p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-ai-soft px-3 py-1.5 text-xs font-bold text-[#057a66]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ai opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ai" />
            </span>
            Online
          </div>
        </div>

        {/* Orbit diagram */}
        <div className="relative mx-auto mt-8 h-44 w-full max-w-xs">
          <svg viewBox="0 0 240 180" className="absolute inset-0 h-full w-full" aria-hidden>
            <circle cx="120" cy="95" r="58" fill="none" stroke="rgba(45,107,255,0.2)" strokeWidth="1.5" strokeDasharray="4 6" />
            <circle cx="120" cy="95" r="32" fill="none" stroke="rgba(0,201,167,0.25)" strokeWidth="1.5" />
            <motion.circle
              cx="120"
              cy="37"
              r="7"
              fill="#00C9A7"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            />
            <circle cx="178" cy="120" r="7" fill="#2D6BFF" />
            <circle cx="62" cy="120" r="7" fill="#5B8CFF" />
            <path d="M120 44V95M120 95L171 118M120 95L69 118" stroke="#0C1222" strokeWidth="1.5" strokeOpacity="0.35" />
            <circle cx="120" cy="95" r="10" fill="#0C1222" />
            <text x="120" y="99" textAnchor="middle" fill="#F8FAFC" fontSize="8" fontWeight="700">
              AIM
            </text>
          </svg>
        </div>

        <div className="mt-2 grid gap-2">
          {agents.map((a, i) => (
            <motion.div
              key={a.id}
              className="flex items-center justify-between rounded-2xl bg-bg/80 px-3.5 py-3 ring-1 ring-ink/5"
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl text-[0.65rem] font-bold text-white" style={{ background: a.color }}>
                  {a.id}
                </span>
                <div>
                  <p className="text-sm font-semibold tracking-[-0.02em]">{a.name}</p>
                  <p className="text-xs text-mute">Governed workflow</p>
                </div>
              </div>
              <span className={`text-[0.65rem] font-bold uppercase tracking-wide ${a.status === 'Live' ? 'text-ai' : 'text-faint'}`}>
                {a.status}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-line pt-4">
          {flows.map((f, i) => (
            <span key={f.label} className="inline-flex items-center gap-1.5 text-xs text-mute">
              <span className="rounded-md bg-bg px-2 py-1 font-semibold text-ink ring-1 ring-ink/5">{f.from}</span>
              <span className="text-accent">→</span>
              <span className="rounded-md bg-bg px-2 py-1 font-semibold text-ink ring-1 ring-ink/5">{f.to}</span>
              {i < flows.length - 1 && <span className="mx-1 text-faint">·</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
