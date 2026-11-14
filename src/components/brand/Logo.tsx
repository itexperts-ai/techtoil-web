import { Link } from 'react-router-dom'

type Props = { to?: string | null; size?: 'sm' | 'lg'; invert?: boolean; className?: string }

export function Logo({ to = '/', size = 'sm', invert = false, className = '' }: Props) {
  const mark = size === 'lg' ? 42 : 28
  const text = size === 'lg' ? 'text-4xl md:text-5xl' : 'text-xl'

  const node = (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width={mark} height={mark} viewBox="0 0 64 64" fill="none" aria-hidden>
        <rect width="64" height="64" rx="8" fill={invert ? '#fff' : '#111'} />
        <path d="M12 28.5 32 16l20 12.5v6L32 22.8 12 34.5v-6Z" fill="#FF4D00" />
        <path d="M42 27 52 33.2V48L32 60.2V53.5l14-9V27Z" fill={invert ? '#bbb' : '#777'} />
        <path d="M22 27v18.5L32 53.5v6.7L12 48V33.2L22 27Z" fill="#D93F00" />
      </svg>
      <span
        className={`font-display font-extrabold uppercase tracking-[-0.03em] leading-none ${text} ${
          invert ? 'text-white' : 'text-ink'
        }`}
      >
        Tech<span className="text-ember">toil</span>
      </span>
    </span>
  )

  if (to === null) return node
  return (
    <Link to={to ?? '/'} aria-label="Techtoil" className="outline-none focus-visible:ring-2 focus-visible:ring-ember/40">
      {node}
    </Link>
  )
}
