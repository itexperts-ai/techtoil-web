import { Link } from 'react-router-dom'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg'
  tone?: 'dark' | 'light'
  className?: string
}

function Mark({ size, tone }: { size: number; tone: 'dark' | 'light' }) {
  const stroke = tone === 'light' ? '#F4F5F2' : '#141815'
  const fill = '#1C3D5A'

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
      {/* Crop-mark brackets + quiet T survey point */}
      <path d="M10 10H26V12.5H12.5V26H10V10Z" fill={stroke} />
      <path d="M54 54H38V51.5H51.5V38H54V54Z" fill={stroke} />
      <rect x="27" y="25" width="10" height="14" fill={fill} />
      <rect x="22" y="25" width="20" height="4.5" fill={fill} />
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
      <span className={`font-display font-bold leading-none tracking-[-0.05em] ${ink} ${text}`}>
        Tech<span className="text-accent">toil</span>
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
