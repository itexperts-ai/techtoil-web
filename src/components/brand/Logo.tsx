import { Link } from 'react-router-dom'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg'
  tone?: 'dark' | 'light'
  className?: string
}

/** Neural node triad — orbit mark for AIM studio */
function Mark({ size, tone }: { size: number; tone: 'dark' | 'light' }) {
  const plate = tone === 'light' ? '#F8FAFC' : '#0A0F1A'
  const line = tone === 'light' ? '#0A0F1A' : '#F8FAFC'

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
      <rect width="64" height="64" rx="18" fill={plate} />
      <circle cx="32" cy="32" r="17" stroke="#2D6BFF" strokeWidth="2.2" />
      <circle cx="32" cy="17" r="4.2" fill="#00C9A7" />
      <circle cx="46.5" cy="39" r="4.2" fill="#2D6BFF" />
      <circle cx="17.5" cy="39" r="4.2" fill="#5B8CFF" />
      <path
        d="M32 17.5V32M32 32L46 39M32 32L18 39"
        stroke={line}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'lg' ? 44 : 34
  const text = size === 'lg' ? 'text-[1.55rem]' : 'text-[1.1rem]'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'

  const node = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark size={mark} tone={tone} />
      <span className="flex flex-col leading-none">
        <span className={`font-display font-extrabold tracking-[-0.05em] ${ink} ${text}`}>
          Tech<span className="text-accent">toil</span>
        </span>
        <span
          className={`mt-1 text-[0.58rem] font-bold uppercase tracking-[0.2em] ${
            tone === 'light' ? 'text-ai' : 'text-mute'
          }`}
        >
          AIM Studio
        </span>
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
