import { Link } from 'react-router-dom'

type Props = {
  to?: string | null
  size?: 'sm' | 'md' | 'xl'
  className?: string
  invert?: boolean
}

const sizes = {
  sm: { mark: 28, text: 'text-[1.15rem]' },
  md: { mark: 36, text: 'text-[1.45rem]' },
  xl: { mark: 56, text: 'text-[2.4rem] md:text-[3rem]' },
}

export function Logo({ to = '/', size = 'sm', className = '', invert = false }: Props) {
  const s = sizes[size]
  const ink = invert ? '#fff' : '#0A0A0A'

  const node = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width={s.mark} height={s.mark} viewBox="0 0 64 64" fill="none" aria-hidden>
        <rect width="64" height="64" rx="10" fill={invert ? 'rgba(255,255,255,0.12)' : '#0A0A0A'} />
        <path d="M12 28.5 32 16l20 12.5v6L32 22.8 12 34.5v-6Z" fill="#0055FF" />
        <path d="M42 27 52 33.2V48L32 60.2V53.5l14-9V27Z" fill="#8B8B8B" />
        <path d="M22 27v18.5L32 53.5v6.7L12 48V33.2L22 27Z" fill="#003FCC" />
      </svg>
      <span
        className={`font-display font-bold tracking-[-0.05em] leading-none ${s.text}`}
        style={{ color: ink }}
      >
        Tech<span className="text-signal">toil</span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link to={to ?? '/'} aria-label="Techtoil" className="outline-none focus-visible:ring-2 focus-visible:ring-signal/40 rounded-sm">
      {node}
    </Link>
  )
}
