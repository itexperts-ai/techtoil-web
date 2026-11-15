import { Link } from 'react-router-dom'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg'
  tone?: 'dark' | 'light'
  className?: string
}

/** Monogram: citron plate + geometric T with basting notch */
function Mark({ size, tone }: { size: number; tone: 'dark' | 'light' }) {
  const plate = '#D6F34C'
  const ink = '#0E0D0C'
  const ring = tone === 'light' ? 'rgba(251,249,246,0.25)' : 'transparent'

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
      <rect width="64" height="64" rx="14" fill={plate} />
      {tone === 'light' && <rect x="1.5" y="1.5" width="61" height="61" rx="12.5" stroke={ring} strokeWidth="1" />}
      {/* T stem + bar — optical center */}
      <rect x="18" y="18" width="28" height="7" rx="1" fill={ink} />
      <rect x="28" y="18" width="8" height="28" rx="1" fill={ink} />
      {/* Citron basting stitch under bar */}
      <rect x="20" y="28.5" width="5" height="2" fill={ink} opacity="0.35" />
      <rect x="27" y="28.5" width="5" height="2" fill={ink} opacity="0.35" />
      <rect x="34" y="28.5" width="5" height="2" fill={ink} opacity="0.35" />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'lg' ? 46 : 36
  const text = size === 'lg' ? 'text-[1.6rem]' : 'text-[1.15rem]'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'

  const node = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Mark size={mark} tone={tone} />
      <span className="flex flex-col leading-none">
        <span className={`font-display tracking-[-0.045em] ${ink} ${text}`}>
          <span className="font-semibold">Tech</span>
          <span className="italic font-medium">toil</span>
        </span>
        <span
          className={`mt-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.26em] ${
            tone === 'light' ? 'text-accent-bright' : 'text-mute'
          }`}
        >
          Infosol
        </span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil"
      className="outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
    >
      {node}
    </Link>
  )
}
