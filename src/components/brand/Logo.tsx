import { Link } from 'react-router-dom'
import { useId } from 'react'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg' | 'hero'
  tone?: 'dark' | 'light'
  className?: string
}

/** Architectural mark: bevel plate + bold T + orbit signal */
function Mark({ size, tone }: { size: number; tone: 'dark' | 'light' }) {
  const uid = useId().replace(/:/g, '')
  const plate = tone === 'light' ? '#ffffff' : '#0a0c10'
  const rim = tone === 'light' ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.08)'
  const orbit = tone === 'light' ? '#94a3b8' : '#64748b'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 88 88"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <defs>
        <linearGradient id={`${uid}-g`} x1="16" y1="14" x2="64" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.45" stopColor="#2563eb" />
          <stop offset="1" stopColor="#0891b2" />
        </linearGradient>
        <linearGradient id={`${uid}-p`} x1="0" y1="0" x2="88" y2="88" gradientUnits="userSpaceOnUse">
          <stop stopColor={tone === 'light' ? '#f8fafc' : '#151922'} />
          <stop offset="1" stopColor={plate} />
        </linearGradient>
      </defs>
      {/* Beveled plate */}
      <rect x="2" y="2" width="84" height="84" rx="24" fill={`url(#${uid}-p)`} />
      <rect
        x="2"
        y="2"
        width="84"
        height="84"
        rx="24"
        stroke={rim}
        strokeWidth="1.5"
        fill="none"
      />
      {/* Soft inner frame */}
      <rect
        x="10"
        y="10"
        width="68"
        height="68"
        rx="18"
        stroke={tone === 'light' ? 'rgba(10,12,16,0.08)' : 'rgba(255,255,255,0.06)'}
        strokeWidth="1"
        fill="none"
      />
      {/* Orbit arc */}
      <path
        d="M20 60c12 10 36 10 50-4"
        stroke={orbit}
        strokeWidth="2.25"
        strokeLinecap="round"
        fill="none"
      />
      {/* Bold T stem + bar */}
      <path
        d="M22 24h44v11H52.5v29h-17V35H22V24Z"
        fill={`url(#${uid}-g)`}
      />
      {/* Signal gem */}
      <circle cx="64" cy="62" r="8" fill="#2563eb" />
      <circle cx="64" cy="62" r="3.5" fill={plate} />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'hero' ? 72 : size === 'lg' ? 48 : 38
  const text =
    size === 'hero'
      ? 'text-[clamp(2.9rem,8.2vw,5.2rem)]'
      : size === 'lg'
        ? 'text-[1.9rem]'
        : 'text-[1.25rem]'
  const gap = size === 'hero' ? 'gap-4' : 'gap-3'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'

  const node = (
    <span className={`inline-flex items-center ${gap} ${className}`}>
      <Mark size={mark} tone={tone} />
      <span
        className={`font-display font-extrabold leading-[0.86] tracking-[-0.075em] ${ink} ${text}`}
      >
        Tech
        <span className="bg-gradient-to-r from-azure to-cyan bg-clip-text text-transparent">
          toil
        </span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil"
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-azure/40"
    >
      {node}
    </Link>
  )
}
