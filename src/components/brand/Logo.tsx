import { Link } from 'react-router-dom'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg'
  tone?: 'dark' | 'light'
  className?: string
}

function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
      <rect width="64" height="64" rx="14" fill="#3A6754" />
      <rect x="29" y="14" width="6" height="36" rx="2" fill="#F7F5F1" />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'lg' ? 42 : 32
  const text = size === 'lg' ? 'text-[1.5rem]' : 'text-[1.12rem]'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'

  const node = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark size={mark} />
      <span className={`font-display text-[length:inherit] font-semibold tracking-[-0.03em] ${ink} ${text}`}>
        Tech<span className="italic font-medium">toil</span>
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
