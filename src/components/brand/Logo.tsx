import { Link } from 'react-router-dom'
import { useId } from 'react'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg'
  tone?: 'dark' | 'light'
  className?: string
}

/** Impressive T mark — pine plate + luminous aperture core */
function Mark({ size, tone }: { size: number; tone: 'dark' | 'light' }) {
  const uid = useId().replace(/:/g, '')
  const plate = tone === 'light' ? '#F7F5F1' : '#171A18'

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
      <defs>
        <linearGradient id={`${uid}-g`} x1="10" y1="8" x2="54" y2="56">
          <stop stopColor="#5A8F74" />
          <stop offset="1" stopColor="#3A6754" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={plate} />
      <rect x="8" y="8" width="48" height="48" rx="12" fill={`url(#${uid}-g)`} />
      <path
        d="M18 20h28v7H37v21h-10V27H18V20Z"
        fill={tone === 'light' ? '#171A18' : '#F7F5F1'}
      />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'lg' ? 44 : 34
  const text = size === 'lg' ? 'text-[1.55rem]' : 'text-[1.15rem]'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'

  const node = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark size={mark} tone={tone} />
      <span className="flex flex-col leading-none">
        <span className={`font-display font-semibold tracking-[-0.035em] ${ink} ${text}`}>
          Tech<span className="italic font-medium text-accent">toil</span>
        </span>
        <span
          className={`mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.2em] ${
            tone === 'light' ? 'text-white/45' : 'text-mute'
          }`}
        >
          Solutions · Mgmt · Tech
        </span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil"
      className="rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
    >
      {node}
    </Link>
  )
}
