import { Link } from 'react-router-dom'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg' | 'hero'
  tone?: 'dark' | 'light'
  className?: string
}

/** Unique mark: sharp T + signal node */
function Mark({ size, tone }: { size: number; tone: 'dark' | 'light' }) {
  const bg = tone === 'light' ? '#ffffff' : '#0b1426'
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
      <rect width="64" height="64" rx="18" fill={bg} />
      <path d="M17 17h30v7.2H35.6V43h-7.2V24.2H17V17Z" fill="#2b5cff" />
      <circle cx="32" cy="49" r="3.6" fill="#0f766e" />
      <path d="M32 43.2v2.2" stroke={tone === 'light' ? '#94a3b8' : '#64748b'} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'hero' ? 60 : size === 'lg' ? 44 : 32
  const text =
    size === 'hero'
      ? 'text-[clamp(2.8rem,7.8vw,4.8rem)]'
      : size === 'lg'
        ? 'text-[1.8rem]'
        : 'text-[1.2rem]'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'
  const soft = tone === 'light' ? 'text-white/40' : 'text-mute'

  const node = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Mark size={mark} tone={tone} />
      <span className={`font-sans font-semibold leading-none tracking-[-0.05em] ${ink} ${text}`}>
        Tech<span className={`font-medium ${soft}`}>toil</span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil"
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-volt/40"
    >
      {node}
    </Link>
  )
}
