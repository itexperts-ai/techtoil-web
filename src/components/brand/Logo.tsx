import { Link } from 'react-router-dom'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg'
  tone?: 'dark' | 'light'
  className?: string
}

/** North Light — pine square with a column of light */
function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
      <rect width="64" height="64" rx="10" fill="#3E6B58" />
      <rect x="28" y="12" width="8" height="40" rx="1" fill="#F6F4F0" />
    </svg>
  )
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'lg' ? 40 : 30
  const text = size === 'lg' ? 'text-[1.45rem]' : 'text-[1.08rem]'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'
  const sub = tone === 'light' ? 'text-white/50' : 'text-mute'

  const node = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark size={mark} />
      <span className="flex flex-col leading-none">
        <span className={`font-semibold tracking-[-0.03em] ${ink} ${text}`}>Techtoil</span>
        <span className={`mt-1 font-display text-[0.65rem] italic tracking-[0.14em] ${sub}`}>
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
      className="outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
    >
      {node}
    </Link>
  )
}
