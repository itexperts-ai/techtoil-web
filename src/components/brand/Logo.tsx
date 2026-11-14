import { Link } from 'react-router-dom'

type Props = {
  tone?: 'light' | 'dark'
  to?: string | null
  className?: string
}

export function Logo({ tone = 'dark', to = '/', className = '' }: Props) {
  const mark = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 64 64" fill="none" aria-hidden>
        <rect
          width="64"
          height="64"
          rx="11"
          fill={tone === 'light' ? 'rgba(255,255,255,0.12)' : '#12151A'}
        />
        <path d="M11 29 32 15.5 53 29v6.2L32 22.4 11 35.2V29Z" fill="#155EEF" />
        <path d="M43 27.5 53 34v15.5L32 61.5V54.8l15-9.5V27.5Z" fill="#7A8490" />
        <path d="M21 27.5v17.8L32 54.8v6.7L11 49.5V34l10-6.5Z" fill="#0B3DB8" />
      </svg>
      <span
        className={`font-display text-[1.35rem] font-extrabold tracking-[-0.04em] leading-none ${
          tone === 'light' ? 'text-white' : 'text-ink'
        }`}
      >
        Tech<span className="text-accent">toil</span>
      </span>
    </span>
  )

  if (to === null) return mark
  return (
    <Link to={to ?? '/'} aria-label="Techtoil" className="outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-sm">
      {mark}
    </Link>
  )
}
