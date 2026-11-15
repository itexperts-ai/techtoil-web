import { Link } from 'react-router-dom'
import { useId } from 'react'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg' | 'hero'
  tone?: 'dark' | 'light'
  className?: string
}

/** Atelier seal — octagon plate, jade T, brass node */
function Mark({ size, tone }: { size: number; tone: 'dark' | 'light' }) {
  const uid = useId().replace(/:/g, '')
  const plate = tone === 'light' ? '#ffffff' : '#07110f'
  const edge = tone === 'light' ? 'rgba(7,17,15,0.12)' : 'rgba(255,255,255,0.14)'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 68 68"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <defs>
        <linearGradient id={`${uid}-j`} x1="14" y1="12" x2="54" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1ec9ab" />
          <stop offset="0.55" stopColor="#0b6b5c" />
          <stop offset="1" stopColor="#085246" />
        </linearGradient>
      </defs>
      {/* Soft octagon-like rounded plate */}
      <rect width="68" height="68" rx="18" fill={plate} />
      <rect x="3" y="3" width="62" height="62" rx="15" stroke={edge} fill="none" />
      <path
        d="M16 46c8 6 28 6 36-8"
        stroke="#b08d57"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <path d="M20 22h28v8H41v18h-14V30H20V22Z" fill={`url(#${uid}-j)`} />
      <circle cx="50" cy="44" r="4.5" fill="#b08d57" />
      <circle cx="50" cy="44" r="2" fill={plate} />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'hero' ? 58 : size === 'lg' ? 42 : 32
  const text =
    size === 'hero'
      ? 'text-[clamp(2.4rem,6.5vw,4rem)]'
      : size === 'lg'
        ? 'text-[1.6rem]'
        : 'text-[1.08rem]'
  const gap = size === 'hero' ? 'gap-3.5' : 'gap-2.5'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'

  const node = (
    <span className={`inline-flex items-center ${gap} ${className}`}>
      <Mark size={mark} tone={tone} />
      <span className={`font-display font-extrabold leading-none tracking-[-0.055em] ${ink} ${text}`}>
        Tech<span className="text-jade">toil</span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil"
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-jade/40"
    >
      {node}
    </Link>
  )
}
