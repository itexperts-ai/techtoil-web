import { Link } from 'react-router-dom'
import { useId } from 'react'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg' | 'hero'
  tone?: 'dark' | 'light'
  className?: string
}

/**
 * Polar Ember mark — twin pillars + ember core nucleus.
 * Reads as a forged T without copying prior monograms.
 */
function Mark({ size, tone }: { size: number; tone: 'dark' | 'light' }) {
  const uid = useId().replace(/:/g, '')
  const plate = tone === 'light' ? '#ffffff' : '#0a0f1a'
  const edge = tone === 'light' ? 'rgba(10,15,26,0.1)' : 'rgba(255,255,255,0.12)'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <defs>
        <linearGradient id={`${uid}-e`} x1="20" y1="16" x2="52" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff8a5c" />
          <stop offset="0.5" stopColor="#ff4d1a" />
          <stop offset="1" stopColor="#c2410c" />
        </linearGradient>
      </defs>
      <rect width="72" height="72" rx="18" fill={plate} />
      <rect x="2.5" y="2.5" width="67" height="67" rx="15.5" stroke={edge} fill="none" />
      {/* Twin pillars */}
      <rect x="18" y="22" width="11" height="32" rx="2" fill={`url(#${uid}-e)`} />
      <rect x="43" y="22" width="11" height="32" rx="2" fill={`url(#${uid}-e)`} />
      {/* Cross bar */}
      <rect x="18" y="22" width="36" height="10" rx="2" fill={`url(#${uid}-e)`} />
      {/* Ember nucleus */}
      <circle cx="36" cy="48" r="7" fill={`url(#${uid}-e)`} />
      <circle cx="36" cy="48" r="3" fill={plate} />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'hero' ? 58 : size === 'lg' ? 42 : 32
  const text =
    size === 'hero'
      ? 'text-[clamp(2.4rem,7vw,4.2rem)]'
      : size === 'lg'
        ? 'text-[1.6rem]'
        : 'text-[1.05rem]'
  const gap = size === 'hero' ? 'gap-3.5' : 'gap-2.5'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'

  const node = (
    <span className={`inline-flex items-center ${gap} ${className}`}>
      <Mark size={mark} tone={tone} />
      <span
        className={`font-display font-bold leading-none tracking-[-0.05em] ${ink} ${text}`}
      >
        Tech<span className="text-ember">toil</span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil"
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ember/40"
    >
      {node}
    </Link>
  )
}
