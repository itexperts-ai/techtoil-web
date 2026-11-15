import { Link } from 'react-router-dom'
import { useId } from 'react'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg' | 'hero'
  tone?: 'dark' | 'light'
  className?: string
}

/**
 * Forge mark — architectural T + rising path (vision → execution).
 * Concept: one stroke climbing through a plate, signal node at the peak.
 */
function Mark({ size, tone }: { size: number; tone: 'dark' | 'light' }) {
  const uid = useId().replace(/:/g, '')
  const plate = tone === 'light' ? '#ffffff' : '#0c0e14'
  const rail = tone === 'light' ? 'rgba(12,14,20,0.12)' : 'rgba(255,255,255,0.14)'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <defs>
        <linearGradient id={`${uid}-t`} x1="18" y1="14" x2="58" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fb7185" />
          <stop offset="0.55" stopColor="#e11d48" />
          <stop offset="1" stopColor="#9f1239" />
        </linearGradient>
      </defs>
      <rect width="80" height="80" rx="20" fill={plate} />
      <rect x="3" y="3" width="74" height="74" rx="17" stroke={rail} strokeWidth="1.25" fill="none" />
      {/* Rising path under the T */}
      <path
        d="M16 58 L32 42 L44 50 L62 28"
        stroke={tone === 'light' ? '#94a3b8' : '#64748b'}
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="62" cy="28" r="5.5" fill={`url(#${uid}-t)`} />
      {/* Bold forge T */}
      <path d="M18 20h44v10H49v26H31V30H18V20Z" fill={`url(#${uid}-t)`} />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'hero' ? 64 : size === 'lg' ? 44 : 34
  const text =
    size === 'hero'
      ? 'text-[clamp(2.6rem,7.5vw,4.6rem)]'
      : size === 'lg'
        ? 'text-[1.75rem]'
        : 'text-[1.15rem]'
  const gap = size === 'hero' ? 'gap-3.5' : 'gap-2.5'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'
  const soft = tone === 'light' ? 'text-white/50' : 'text-mute'

  const node = (
    <span className={`inline-flex items-center ${gap} ${className}`}>
      <Mark size={mark} tone={tone} />
      <span
        className={`font-display font-extrabold leading-[0.88] tracking-[-0.06em] ${ink} ${text}`}
      >
        Tech<span className={`font-semibold ${soft}`}>toil</span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil"
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-signal/40"
    >
      {node}
    </Link>
  )
}
