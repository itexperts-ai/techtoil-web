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
  const plate = tone === 'light' ? '#FFFFFF' : '#0A192F'

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
      <defs>
        <linearGradient id={`${uid}-g`} x1="12" y1="8" x2="52" y2="56">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill={plate} />
      <rect x="10" y="10" width="44" height="44" rx="10" fill={`url(#${uid}-g)`} />
      <path
        d="M20 22h24v7H36v19h-8V29H20V22Z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'lg' ? 44 : 34
  const text = size === 'lg' ? 'text-[1.5rem]' : 'text-[1.1rem]'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'

  const node = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark size={mark} tone={tone} />
      <span className="flex flex-col leading-none">
        <span className={`font-display font-bold tracking-[-0.04em] ${ink} ${text}`}>
          Tech<span className="text-accent">toil</span>
        </span>
        <span
          className={`mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em] ${
            tone === 'light' ? 'text-accent-bright' : 'text-mute'
          }`}
        >
          IT Solutions
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
