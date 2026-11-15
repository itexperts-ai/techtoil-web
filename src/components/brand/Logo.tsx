import { Link } from 'react-router-dom'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg'
  tone?: 'dark' | 'light'
  className?: string
}

/** Aperture mark — simple ring + core */
function Mark({ size, tone }: { size: number; tone: 'dark' | 'light' }) {
  const plate = tone === 'light' ? '#F7F8FA' : '#12161C'

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
      <rect width="64" height="64" rx="16" fill={plate} />
      <circle cx="32" cy="32" r="16" stroke="#0F6B5C" strokeWidth="3" />
      <circle cx="32" cy="32" r="6.5" fill="#0F6B5C" />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'lg' ? 42 : 32
  const text = size === 'lg' ? 'text-[1.5rem]' : 'text-[1.1rem]'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'

  const node = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark size={mark} tone={tone} />
      <span className={`font-display font-bold leading-none tracking-[-0.04em] ${ink} ${text}`}>
        Tech<span className="text-accent">toil</span>
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
