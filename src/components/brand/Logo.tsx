import { Link } from 'react-router-dom'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg'
  tone?: 'dark' | 'light'
  className?: string
}

/** Sheared cloth T — citron crossbar + ink stem + voltage nick */
function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
      {/* Citron sheared crossbar */}
      <path d="M8 16H46L42 24H8V16Z" fill="#D6F34C" />
      {/* Ink stem */}
      <path d="M26 16H34L30 52H22L26 16Z" fill="#0E0D0C" />
      {/* Voltage nick */}
      <path d="M34 16L42 10L45 16H34Z" fill="#D6F34C" />
      {/* Basting stitches */}
      <rect x="10" y="56" width="6" height="2" fill="#D6F34C" />
      <rect x="20" y="56" width="6" height="2" fill="#D6F34C" />
      <rect x="30" y="56" width="6" height="2" fill="#D6F34C" />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'lg' ? 48 : 38
  const text = size === 'lg' ? 'text-[1.6rem]' : 'text-[1.15rem]'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'

  const node = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Mark size={mark} />
      <span className="flex flex-col leading-none">
        <span className={`font-display tracking-[-0.045em] ${ink} ${text}`}>
          <span className="font-semibold">Tech</span>
          <span className="relative italic font-medium">
            toil
            <span
              className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent-bright"
              aria-hidden
            />
          </span>
        </span>
        <span
          className={`mt-2 text-[0.55rem] font-semibold uppercase tracking-[0.26em] ${
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
