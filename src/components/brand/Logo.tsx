import { Link } from 'react-router-dom'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg'
  tone?: 'dark' | 'light'
  className?: string
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const text = size === 'lg' ? 'text-[1.65rem]' : 'text-[1.15rem]'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'
  const sub = tone === 'light' ? 'text-white/45' : 'text-mute'

  const node = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="stitch" aria-hidden>
        <span />
        <span />
        <span />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display italic font-semibold tracking-[-0.03em] ${ink} ${text}`}>
          Techtoil
        </span>
        <span className={`mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.28em] ${sub}`}>
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
      className="outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
    >
      {node}
    </Link>
  )
}
