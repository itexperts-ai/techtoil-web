import { Link } from 'react-router-dom'
import { useId } from 'react'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg'
  tone?: 'dark' | 'light'
  className?: string
}

function Mark({ size, tone }: { size: number; tone: 'dark' | 'light' }) {
  const uid = useId().replace(/:/g, '')
  const plate = tone === 'light' ? 'rgba(255,255,255,0.08)' : '#0B1424'

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
      <defs>
        <linearGradient id={`${uid}-g`} x1="8" y1="6" x2="56" y2="58">
          <stop stopColor="#2B7CD3" />
          <stop offset="1" stopColor="#0F3D6E" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={plate} />
      <rect x="4" y="4" width="56" height="56" rx="14" fill={`url(#${uid}-g)`} />
      {/* Layered T — product / delivery / operate */}
      <path
        d="M18 18h28v6.5H36.5V46h-9V24.5H18V18Z"
        fill="#FFFFFF"
      />
      <rect x="18" y="18" width="28" height="2.5" rx="1" fill="rgba(255,255,255,0.55)" />
      <circle cx="48" cy="48" r="3.2" fill="#FFFFFF" fillOpacity="0.9" />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'lg' ? 46 : 36
  const text = size === 'lg' ? 'text-[1.55rem]' : 'text-[1.15rem]'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'

  const node = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark size={mark} tone={tone} />
      <span className="flex flex-col leading-none">
        <span className={`font-display font-bold tracking-[-0.045em] ${ink} ${text}`}>
          Tech<span className="text-accent">toil</span>
        </span>
        <span
          className={`mt-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.18em] ${
            tone === 'light' ? 'text-white/55' : 'text-mute'
          }`}
        >
          Infosol · IT Solutions
        </span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil Infosol"
      className="rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
    >
      {node}
    </Link>
  )
}
