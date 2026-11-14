import { Link } from 'react-router-dom'

export function AboutPage() {
  return (
    <div className="bg-bg px-5 pb-24 pt-32 md:px-6 md:pt-40">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-signal">About</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] md:text-5xl">
          A studio for teams who want one clear path.
        </h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-soft">
          <p>
            Techtoil helps founders and operators move from vision to a business
            that runs — through design, product, growth, guidance, intelligent
            operations, and talent.
          </p>
          <p>
            We do not treat those as separate shops. We keep them in one
            conversation so strategy and execution stay connected.
          </p>
        </div>
        <Link
          to="/contact"
          className="mt-10 inline-flex rounded-md bg-ink px-6 py-3.5 text-sm font-bold text-white hover:bg-signal"
        >
          Work with us
        </Link>
      </div>
    </div>
  )
}
