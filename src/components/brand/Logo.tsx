import { Link } from 'react-router-dom'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg'
  tone?: 'dark' | 'light'
  className?: string
}

/**
 * Cobalt Relay mark — open hub node + docked agent satellite
 * (the “O” as workflow node)
 */
function Mark({ size, tone }: { size: number; tone: 'dark' | 'light' }) {
  const plate = tone === 'light' ? '#FFFFFF' : '#14171C'
  const ring = tone === 'light' ? '#14171C' : '#FFFFFF'

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
      <rect width="64" height="64" rx="16" fill={plate} />
      {/* Open ring (O / AIM hub) */}
      <circle cx="30" cy="34" r="14" stroke={ring} strokeWidth="2.5" fill="none" />
      <circle cx="30" cy="34" r="4" fill="#1E4DFF" />
      {/* Hairline to docked agent */}
      <path d="M30 20V10" stroke="#1E4DFF" strokeWidth="1.25" />
      <circle cx="30" cy="8" r="3.5" fill="#1E4DFF" />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'lg' ? 44 : 34
  const text = size === 'lg' ? 'text-[1.55rem]' : 'text-[1.1rem]'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'

  const node = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark size={mark} tone={tone} />
      <span className="flex flex-col leading-none">
        <span className={`font-display font-extrabold tracking-[-0.05em] ${ink} ${text}`}>
          Tech<span className="text-accent">toil</span>
        </span>
        <span
          className={`mt-1 font-mono text-[0.58rem] font-medium uppercase tracking-[0.14em] ${
            tone === 'light' ? 'text-accent-bright' : 'text-mute'
          }`}
        >
          AIM · hub
        </span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil"
      className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
    >
      {node}
    </Link>
  )
}
