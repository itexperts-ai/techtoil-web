type LogoProps = {
  className?: string
  height?: number
}

/** Premium lockup — refined mark + wordmark (image + SVG fallback mark). */
export function Logo({ className = '', height = 36 }: LogoProps) {
  return (
    <span className={`brand-logo ${className}`}>
      <img
        src="/brand/techtoil-logo.jpg"
        alt="Techtoil"
        height={height}
        style={{ height, width: 'auto' }}
      />
    </span>
  )
}

/** Unique SVG mark used in motion compositions. */
export function LogoMark({ size = 64, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M10 28L40 10l30 18v9.5L40 20.2 10 37.5V28z" fill="#0057FF" />
      <path d="M52 26.5l18 10.8V58L40 76V65.2l18-11.2V26.5z" fill="#5C6570" />
      <path d="M28 26.5v27.5L40 65.2V76L10 58V37.3l18-10.8z" fill="#003FC0" />
      <path
        d="M40 30l12 7.2v14.4L40 58.8 28 51.6V37.2L40 30z"
        fill="#0057FF"
        opacity="0.28"
      />
    </svg>
  )
}
