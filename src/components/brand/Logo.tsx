import { Link } from 'react-router-dom'

type Props = {
  tone?: 'light' | 'dark'
  to?: string | null
  size?: 'sm' | 'lg'
  className?: string
}

export function Logo({ tone = 'dark', to = '/', size = 'sm', className = '' }: Props) {
  const markSize = size === 'lg' ? 44 : 32
  const textSize = size === 'lg' ? 'text-[1.85rem]' : 'text-[1.25rem]'

  const mark = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width={markSize} height={markSize} viewBox="0 0 64 64" fill="none" aria-hidden>
        <rect
          width="64"
          height="64"
          rx="12"
          fill={tone === 'light' ? 'rgba(255,255,255,0.12)' : '#0F1318'}
        />
        <path d="M11 29 32 15.5 53 29v6.2L32 22.4 11 35.2V29Z" fill="#1A6BFF" />
        <path d="M43 27.5 53 34v15.5L32 61.5V54.8l15-9.5V27.5Z" fill="#8B949E" />
        <path d="M21 27.5v17.8L32 54.8v6.7L11 49.5V34l10-6.5Z" fill="#0D4ED1" />
      </svg>
      <span
        className={`font-display font-bold tracking-[-0.05em] leading-none ${textSize} ${
          tone === 'light' ? 'text-white' : 'text-ink'
        }`}
      >
        Tech<span className="text-accent">toil</span>
      </span>
    </span>
  )

  if (to === null) return mark
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil"
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
    >
      {mark}
    </Link>
  )
}
