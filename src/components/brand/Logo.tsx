import { Link } from 'react-router-dom'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg'
  tone?: 'dark' | 'light'
  className?: string
}

function Mark({ size, tone }: { size: number; tone: 'dark' | 'light' }) {
  const plate = tone === 'light' ? '#F8F9FC' : '#0F1218'
  const t = tone === 'light' ? '#0F1218' : '#F8F9FC'

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
      <rect width="64" height="64" rx="18" fill={plate} />
      <circle cx="32" cy="32" r="15" fill="#E11D48" />
      <path d="M21 25.5h22v5.5H37.5V45h-11V31H21V25.5Z" fill={t} />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'lg' ? 42 : 32
  const text = size === 'lg' ? 'text-[1.55rem]' : 'text-[1.1rem]'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'

  const node = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark size={mark} tone={tone} />
      <span className={`font-display font-extrabold leading-none tracking-[-0.05em] ${ink} ${text}`}>
        Tech<span className="text-accent">toil</span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil"
      className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
    >
      {node}
    </Link>
  )
}
