type LogoProps = {
  className?: string
  markOnly?: boolean
  size?: number
}

/** Refined Techtoil mark — interlocking triad inspired by the brand cube. */
export function Logo({ className = '', markOnly = false, size = 36 }: LogoProps) {
  return (
    <span className={`tt-logo ${className}`} style={{ ['--mark' as string]: `${size}px` }}>
      <svg
        className="tt-logo__mark"
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M12 20.5L32 8l20 12.5v7.2L32 15.4 12 27.7v-7.2z"
          fill="currentColor"
          className="tt-logo__seg tt-logo__seg--a"
        />
        <path
          d="M44 22.8L52 27.8V48L32 60.5v-7.2L44 40.8V22.8z"
          fill="currentColor"
          className="tt-logo__seg tt-logo__seg--b"
        />
        <path
          d="M20 22.8v18L32 53.3v7.2L12 48V27.8l8-5z"
          fill="currentColor"
          className="tt-logo__seg tt-logo__seg--c"
        />
        <path
          d="M32 24.2l10 6.2v12.4L32 49l-10-6.2V30.4l10-6.2z"
          fill="currentColor"
          className="tt-logo__seg tt-logo__seg--core"
          opacity="0.35"
        />
      </svg>
      {!markOnly && (
        <span className="tt-logo__word">
          Tech<span>toil</span>
        </span>
      )}
    </span>
  )
}
