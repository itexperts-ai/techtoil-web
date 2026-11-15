import { Link } from 'react-router-dom'

type Props = { to?: string | null; size?: 'sm' | 'lg'; light?: boolean; className?: string }

export function Logo({ to = '/', size = 'sm', light = false, className = '' }: Props) {
  const mark = size === 'lg' ? 44 : 30
  const text = size === 'lg' ? 'text-[1.9rem]' : 'text-[1.2rem]'

  const node = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width={mark} height={mark} viewBox="0 0 64 64" fill="none" aria-hidden>
        <rect width="64" height="64" rx="12" fill={light ? 'rgba(255,255,255,0.12)' : '#0E1420'} />
        <path d="M11 29 32 15.5 53 29v6.2L32 22.4 11 35.2V29Z" fill="#2F6BFF" />
        <path d="M43 27.5 53 34v15.5L32 61.5V54.8l15-9.5V27.5Z" fill="#8B95A8" />
        <path d="M21 27.5v17.8L32 54.8v6.7L11 49.5V34l10-6.5Z" fill="#1A4FD6" />
      </svg>
      <span
        className={`font-display font-extrabold tracking-[-0.04em] leading-none ${text} ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        Tech<span className="text-blue">toil</span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link to={to ?? '/'} aria-label="Techtoil" className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-blue/40">
      {node}
    </Link>
  )
}
