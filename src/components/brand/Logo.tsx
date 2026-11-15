import { Link } from 'react-router-dom'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg' | 'hero'
  tone?: 'dark' | 'light'
  className?: string
}

function Mark({ size, tone }: { size: number; tone: 'dark' | 'light' }) {
  const bg = tone === 'light' ? '#ffffff' : '#1b4332'
  const stem = tone === 'light' ? '#1b4332' : '#95d5b2'
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
      <rect width="64" height="64" rx="16" fill={bg} />
      <path
        d="M20 14c10 0 18 4 18 14v8c0 6-4 10-10 10H26v-8h2c2 0 4-1.5 4-4v-6c0-4-3-6-8-6H20V14Z"
        fill={stem}
      />
      <circle cx="44" cy="44" r="6" fill="#40916c" />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'hero' ? 58 : size === 'lg' ? 42 : 32
  const text =
    size === 'hero'
      ? 'text-[clamp(2.6rem,7vw,4.5rem)]'
      : size === 'lg'
        ? 'text-[1.7rem]'
        : 'text-[1.15rem]'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'
  const soft = tone === 'light' ? 'text-white/45' : 'text-moss'

  const node = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Mark size={mark} tone={tone} />
      <span className={`font-display font-bold leading-none tracking-[-0.045em] ${ink} ${text}`}>
        Tech<span className={`font-semibold ${soft}`}>toil</span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil"
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-fern/40"
    >
      {node}
    </Link>
  )
}
