import { Link } from 'react-router-dom'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg' | 'hero'
  tone?: 'dark' | 'light'
  className?: string
}

/**
 * Expressive Techtoil mark:
 * ascending craft stroke + rose signal node (vision → execution)
 */
function Mark({ size, tone }: { size: number; tone: 'dark' | 'light' }) {
  const bg = tone === 'light' ? '#ffffff' : '#0f1115'
  const mid = tone === 'light' ? '#374151' : '#e5e7eb'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <rect width="72" height="72" rx="20" fill={bg} />
      {/* Rising path — toil / build */}
      <path
        d="M16 48c8-2 12-10 14-18 2 10 8 16 18 18"
        stroke={mid}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Bold T beam */}
      <path d="M20 20h32v7.5H40.5V42H31.5V27.5H20V20Z" fill="#e11d48" />
      {/* Signal node */}
      <circle cx="52" cy="50" r="6" fill="#e11d48" />
      <circle cx="52" cy="50" r="2.5" fill={bg} />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'hero' ? 64 : size === 'lg' ? 44 : 34
  const text =
    size === 'hero'
      ? 'text-[clamp(2.7rem,7.5vw,4.75rem)]'
      : size === 'lg'
        ? 'text-[1.75rem]'
        : 'text-[1.15rem]'
  const gap = size === 'hero' ? 'gap-3.5' : 'gap-2.5'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'
  const accent = tone === 'light' ? 'text-rose' : 'text-rose'

  const node = (
    <span className={`inline-flex items-center ${gap} ${className}`}>
      <Mark size={mark} tone={tone} />
      <span className={`font-display font-bold leading-[0.9] tracking-[-0.06em] ${ink} ${text}`}>
        Tech<span className={accent}>toil</span>
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
