import { Link } from 'react-router-dom'

type LogoProps = {
  to?: string
  size?: 'sm' | 'md' | 'lg'
  markOnly?: boolean
  className?: string
}

const sizes = {
  sm: { mark: 28, text: 'text-lg' },
  md: { mark: 36, text: 'text-xl' },
  lg: { mark: 48, text: 'text-3xl' },
}

/** Crafted SVG lockup — geometric triad mark + wordmark typography. */
export function Logo({ to = '/', size = 'md', markOnly = false, className = '' }: LogoProps) {
  const s = sizes[size]
  const content = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={s.mark}
        height={s.mark}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect width="64" height="64" rx="14" fill="#111A2E" />
        <path d="M12 28 32 15l20 13v7L32 23 12 35v-7Z" fill="#356DFF" />
        <path d="M42 27.5 52 34v16L32 62.5V55l14-9V27.5Z" fill="#6B7785" />
        <path d="M22 27.5v18.5L32 55v7.5L12 50V34l10-6.5Z" fill="#1E4FD6" />
        <path
          d="M32 30.5 41 36v11.5L32 53l-9-5.5V36l9-5.5Z"
          fill="#38D9F5"
          opacity="0.4"
        />
      </svg>
      {!markOnly && (
        <span className={`font-display font-bold tracking-tight leading-none ${s.text}`}>
          <span className="text-white">Tech</span>
          <span className="text-electric">toil</span>
        </span>
      )}
    </span>
  )

  if (!to) return content
  return (
    <Link
      to={to}
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-cyan/60"
      aria-label="Techtoil home"
    >
      {content}
    </Link>
  )
}
