import { Link } from 'react-router-dom'

type Props = {
  tone?: 'light' | 'dark'
  to?: string | null
  size?: 'sm' | 'lg'
  className?: string
}

export function Logo({ tone = 'dark', to = '/', size = 'sm', className = '' }: Props) {
  const markSize = size === 'lg' ? 48 : 32
  const text = size === 'lg' ? 'text-[2.05rem]' : 'text-[1.25rem]'

  const node = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width={markSize} height={markSize} viewBox="0 0 64 64" fill="none" aria-hidden>
        <rect width="64" height="64" rx="12" fill={tone === 'light' ? 'rgba(255,255,255,0.12)' : '#071A32'} />
        <path d="M11 29 32 15.5 53 29v6.2L32 22.4 11 35.2V29Z" fill="#128F9E" />
        <path d="M43 27.5 53 34v15.5L32 61.5V54.8l15-9.5V27.5Z" fill="#8A93A0" />
        <path d="M21 27.5v17.8L32 54.8v6.7L11 49.5V34l10-6.5Z" fill="#0B6D79" />
      </svg>
      <span
        className={`font-display font-extrabold tracking-[-0.04em] leading-none ${text} ${
          tone === 'light' ? 'text-white' : 'text-ink'
        }`}
      >
        Tech<span className="text-sea">toil</span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil"
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-sea/40"
    >
      {node}
    </Link>
  )
}
