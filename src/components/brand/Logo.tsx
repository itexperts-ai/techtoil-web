import { Link } from 'react-router-dom'

type Props = {
  to?: string | null
  size?: 'sm' | 'lg' | 'hero'
  tone?: 'dark' | 'light'
  className?: string
}

export function Logo({ to = '/', size = 'sm', tone = 'dark', className = '' }: Props) {
  const mark = size === 'hero' ? 52 : size === 'lg' ? 40 : 28
  const text =
    size === 'hero'
      ? 'text-[clamp(2.4rem,6.5vw,4.25rem)]'
      : size === 'lg'
        ? 'text-[1.65rem]'
        : 'text-[1.05rem]'
  const tracking = size === 'hero' ? 'tracking-[-0.04em]' : 'tracking-[-0.03em]'
  const ink = tone === 'light' ? 'text-white' : 'text-ink'
  const accent = tone === 'light' ? 'text-white/55' : 'text-soft'

  const node = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={mark}
        height={mark}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        {/* Simple premium mark: precision T in rounded square */}
        <rect
          width="64"
          height="64"
          rx="14"
          fill={tone === 'light' ? '#ffffff' : '#111827'}
        />
        <path
          d="M18 20h28v6.5H35.2V44h-6.4V26.5H18V20Z"
          fill={tone === 'light' ? '#1a56db' : '#1a56db'}
        />
        <rect
          x="18"
          y="46"
          width="28"
          height="3.5"
          rx="1.75"
          fill={tone === 'light' ? '#0f766e' : '#0f766e'}
        />
      </svg>
      <span
        className={`font-sans font-semibold leading-none ${tracking} ${ink} ${text}`}
      >
        Tech<span className={`font-medium ${accent}`}>toil</span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil"
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-blue/35"
    >
      {node}
    </Link>
  )
}
