import { Link } from 'react-router-dom'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg' | 'hero'
  tone?: 'dark' | 'light'
  className?: string
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'hero' ? 56 : size === 'lg' ? 44 : 30
  const text =
    size === 'hero'
      ? 'text-[clamp(2.75rem,8vw,5.5rem)]'
      : size === 'lg'
        ? 'text-[1.85rem]'
        : 'text-[1.2rem]'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'
  const accent = tone === 'light' ? 'text-[#7dd3fc]' : 'text-blue'

  const node = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg width={mark} height={mark} viewBox="0 0 64 64" fill="none" aria-hidden>
        <rect width="64" height="64" rx="12" fill={tone === 'light' ? '#ffffff' : '#111827'} />
        <path
          d="M11 29 32 15.5 53 29v6.2L32 22.4 11 35.2V29Z"
          fill={tone === 'light' ? '#1a56db' : '#1a56db'}
        />
        <path
          d="M43 27.5 53 34v15.5L32 61.5V54.8l15-9.5V27.5Z"
          fill={tone === 'light' ? '#94a3b8' : '#64748b'}
        />
        <path
          d="M21 27.5v17.8L32 54.8v6.7L11 49.5V34l10-6.5Z"
          fill={tone === 'light' ? '#0f766e' : '#1341b0'}
        />
      </svg>
      <span className={`font-display font-extrabold tracking-[-0.05em] leading-none ${ink} ${text}`}>
        Tech<span className={accent}>toil</span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil"
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-blue/40"
    >
      {node}
    </Link>
  )
}
