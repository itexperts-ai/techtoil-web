import { Link } from 'react-router-dom'
import { useId } from 'react'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg' | 'hero'
  tone?: 'dark' | 'light'
  className?: string
}

/** Minimal ring-T mark — clean, premium, not busy */
function Mark({ size, tone }: { size: number; tone: 'dark' | 'light' }) {
  const uid = useId().replace(/:/g, '')
  const plate = tone === 'light' ? '#ffffff' : '#0b1215'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <defs>
        <linearGradient id={`${uid}-g`} x1="12" y1="10" x2="52" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2dd4bf" />
          <stop offset="1" stopColor="#0f766e" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={plate} />
      <circle
        cx="32"
        cy="32"
        r="20"
        stroke={`url(#${uid}-g)`}
        strokeWidth="3.5"
        fill="none"
      />
      <path
        d="M22 24h20v6.5H35.5V42h-7V30.5H22V24Z"
        fill={`url(#${uid}-g)`}
      />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'hero' ? 56 : size === 'lg' ? 40 : 30
  const text =
    size === 'hero'
      ? 'text-[clamp(2.35rem,6.5vw,3.85rem)]'
      : size === 'lg'
        ? 'text-[1.55rem]'
        : 'text-[1.05rem]'
  const gap = size === 'hero' ? 'gap-3' : 'gap-2.5'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'

  const node = (
    <span className={`inline-flex items-center ${gap} ${className}`}>
      <Mark size={mark} tone={tone} />
      <span className={`font-display font-semibold leading-none tracking-[-0.05em] ${ink} ${text}`}>
        Tech<span className="text-teal">toil</span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil"
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-teal/40"
    >
      {node}
    </Link>
  )
}
