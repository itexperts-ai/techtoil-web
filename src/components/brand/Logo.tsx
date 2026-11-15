import { Link } from 'react-router-dom'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg' | 'hero'
  tone?: 'dark' | 'light'
  className?: string
}

function Mark({ size, tone }: { size: number; tone: 'dark' | 'light' }) {
  const bg = tone === 'light' ? '#ffffff' : '#0a0f1a'
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
      <rect width="64" height="64" rx="16" fill={bg} />
      <circle cx="32" cy="20" r="5" fill="#1d4ed8" />
      <circle cx="18" cy="42" r="5" fill="#0f766e" />
      <circle cx="46" cy="42" r="5" fill={tone === 'light' ? '#3b82f6' : '#60a5fa'} />
      <path
        d="M32 25v8M28.5 36.5 20.5 41M35.5 36.5 43.5 41"
        stroke={tone === 'light' ? '#64748b' : '#94a3b8'}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'hero' ? 58 : size === 'lg' ? 42 : 32
  const text =
    size === 'hero'
      ? 'text-[clamp(2.7rem,7.5vw,4.6rem)]'
      : size === 'lg'
        ? 'text-[1.75rem]'
        : 'text-[1.2rem]'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'
  const soft = tone === 'light' ? 'text-white/45' : 'text-steel'

  const node = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Mark size={mark} tone={tone} />
      <span className={`font-sans font-semibold leading-none tracking-[-0.045em] ${ink} ${text}`}>
        Tech<span className={`font-medium ${soft}`}>toil</span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil"
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
    >
      {node}
    </Link>
  )
}
