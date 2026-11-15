import { Link } from 'react-router-dom'
import { useId } from 'react'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg' | 'hero'
  tone?: 'dark' | 'light'
  className?: string
}

function Mark({ size, tone }: { size: number; tone: 'dark' | 'light' }) {
  const uid = useId().replace(/:/g, '')
  const plate = tone === 'light' ? '#ffffff' : '#0f1419'

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
      <defs>
        <linearGradient id={`${uid}-g`} x1="12" y1="10" x2="52" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2dd4bf" />
          <stop offset="1" stopColor="#0d9488" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill={plate} />
      <rect x="14" y="14" width="36" height="36" rx="4" stroke={`url(#${uid}-g)`} strokeWidth="3" fill="none" />
      <path d="M24 24h16v6H34v16h-8V30h-2V24Z" fill={`url(#${uid}-g)`} />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'hero' ? 52 : size === 'lg' ? 40 : 30
  const text =
    size === 'hero'
      ? 'text-[clamp(2.2rem,6vw,3.6rem)]'
      : size === 'lg'
        ? 'text-[1.5rem]'
        : 'text-[1.05rem]'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'

  const node = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark size={mark} tone={tone} />
      <span className={`font-display font-bold leading-none tracking-[-0.05em] ${ink} ${text}`}>
        Tech<span className="text-mint">toil</span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil"
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-mint/40"
    >
      {node}
    </Link>
  )
}
