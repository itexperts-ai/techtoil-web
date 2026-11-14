import { Link } from 'react-router-dom'

type Props = { size?: 'sm' | 'md' | 'lg'; to?: string | null; className?: string }

const mark = { sm: 28, md: 36, lg: 52 }
const text = { sm: 'text-lg', md: 'text-xl', lg: 'text-[1.75rem]' }

export function Logo({ size = 'md', to = '/', className = '' }: Props) {
  const content = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={mark[size]}
        height={mark[size]}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden
      >
        <rect width="64" height="64" rx="12" fill="#101418" />
        <path d="M12 28 32 15l20 13v6.5L32 22.2 12 34.5V28Z" fill="#0C5EF0" />
        <path d="M42 27 52 33.2V48L32 60.5V54l14-8.8V27Z" fill="#6B7582" />
        <path d="M22 27v19.2L32 54v6.5L12 48V33.2L22 27Z" fill="#0846B5" />
        <path d="M32 31 40.5 36v10.5L32 51.5 23.5 46.5V36L32 31Z" fill="#0C5EF0" opacity=".35" />
      </svg>
      <span className={`font-display font-extrabold tracking-tight leading-none ${text[size]}`}>
        Tech<span className="text-signal">toil</span>
      </span>
    </span>
  )
  if (to === null) return content
  return (
    <Link
      to={to ?? '/'}
      aria-label="Techtoil home"
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-signal/40"
    >
      {content}
    </Link>
  )
}
