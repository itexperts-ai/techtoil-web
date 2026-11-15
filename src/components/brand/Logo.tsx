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
  const plate = tone === 'light' ? '#FBF9F6' : '#121110'
  const t = tone === 'light' ? '#121110' : '#FBF9F6'

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
      <defs>
        <linearGradient id={`${uid}-g`} x1="12" y1="8" x2="52" y2="56">
          <stop stopColor="#E8F97A" />
          <stop offset="1" stopColor="#D6F34C" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={plate} />
      <rect x="8" y="8" width="48" height="48" rx="12" fill={`url(#${uid}-g)`} />
      <path
        d="M20 22h24v6.5H36.5V44h-9V28.5H20V22Z"
        fill={t}
      />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'lg' ? 44 : 34
  const text = size === 'lg' ? 'text-[1.55rem]' : 'text-[1.12rem]'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'

  const node = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark size={mark} tone={tone} />
      <span className="flex flex-col leading-none">
        <span className={`font-display font-semibold tracking-[-0.04em] ${ink} ${text}`}>
          Tech<span className="italic font-medium">toil</span>
        </span>
        <span
          className={`mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.22em] ${
            tone === 'light' ? 'text-accent-bright' : 'text-mute'
          }`}
        >
          Infosol
        </span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil"
      className="outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
    >
      {node}
    </Link>
  )
}
