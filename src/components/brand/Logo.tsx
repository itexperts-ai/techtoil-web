import { Link } from 'react-router-dom'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg' | 'hero'
  tone?: 'dark' | 'light'
  className?: string
}

function Mark({ size, tone }: { size: number; tone: 'dark' | 'light' }) {
  const bg = tone === 'light' ? '#ffffff' : '#0f1115'
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
      <rect width="64" height="64" rx="14" fill={bg} />
      <path d="M14 18h36v8H38v20h-12V26H14V18Z" fill="#e11d48" />
      <rect x="14" y="46" width="36" height="4" rx="2" fill={tone === 'light' ? '#6b7280' : '#9aa3b2'} />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'hero' ? 56 : size === 'lg' ? 40 : 30
  const text =
    size === 'hero'
      ? 'text-[clamp(2.5rem,7vw,4.4rem)]'
      : size === 'lg'
        ? 'text-[1.65rem]'
        : 'text-[1.1rem]'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'
  const soft = tone === 'light' ? 'text-white/45' : 'text-mute'

  const node = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark size={mark} tone={tone} />
      <span className={`font-display font-bold leading-none tracking-[-0.05em] ${ink} ${text}`}>
        Tech<span className={`font-medium ${soft}`}>toil</span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil"
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-rose/40"
    >
      {node}
    </Link>
  )
}
