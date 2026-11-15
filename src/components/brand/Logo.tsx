import { Link } from 'react-router-dom'
import { useId } from 'react'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg'
  tone?: 'dark' | 'light'
  className?: string
}

/** Horizon mark — circle cut by a signal line */
function Mark({ size, tone }: { size: number; tone: 'dark' | 'light' }) {
  const uid = useId().replace(/:/g, '')
  const plate = tone === 'light' ? '#ffffff' : '#10141a'

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
      <defs>
        <linearGradient id={`${uid}-s`} x1="8" y1="32" x2="56" y2="32">
          <stop stopColor="#ff7a62" />
          <stop offset="1" stopColor="#ff4d2e" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={plate} />
      <circle cx="32" cy="32" r="16" stroke={tone === 'light' ? '#d1d5db' : '#374151'} strokeWidth="2.5" fill="none" />
      <path d="M10 34h44" stroke={`url(#${uid}-s)`} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="46" cy="34" r="4" fill={`url(#${uid}-s)`} />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'lg' ? 40 : 30
  const text = size === 'lg' ? 'text-[1.55rem]' : 'text-[1.05rem]'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'

  const node = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark size={mark} tone={tone} />
      <span className={`font-display font-semibold leading-none tracking-[-0.04em] ${ink} ${text}`}>
        Tech<span className="text-signal">toil</span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil"
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-signal/40"
    >
      {node}
    </Link>
  )
}
