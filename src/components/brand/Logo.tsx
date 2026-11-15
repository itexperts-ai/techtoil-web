import { Link } from 'react-router-dom'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg' | 'hero'
  tone?: 'dark' | 'light'
  className?: string
}

/** Precision mark: geometric T with teal baseline */
function Mark({ size, tone }: { size: number; tone: 'dark' | 'light' }) {
  const bg = tone === 'light' ? '#ffffff' : '#0c1222'
  const t = '#2563eb'
  const bar = '#0d9488'
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
      <rect width="64" height="64" rx="13" fill={bg} />
      <path d="M15 19h34v6.8H36.2V43h-8.4V25.8H15V19Z" fill={t} />
      <rect x="20" y="47" width="24" height="3.2" rx="1.6" fill={bar} />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'hero' ? 56 : size === 'lg' ? 40 : 30
  const text =
    size === 'hero'
      ? 'text-[clamp(2.6rem,7vw,4.5rem)]'
      : size === 'lg'
        ? 'text-[1.7rem]'
        : 'text-[1.15rem]'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'
  const soft = tone === 'light' ? 'text-white/50' : 'text-muted'

  const node = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Mark size={mark} tone={tone} />
      <span className={`font-sans font-bold leading-none tracking-[-0.04em] ${ink} ${text}`}>
        Tech<span className={`font-semibold ${soft}`}>toil</span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil"
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
    >
      {node}
    </Link>
  )
}
