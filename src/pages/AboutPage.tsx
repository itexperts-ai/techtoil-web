import { Link } from 'react-router-dom'

export function AboutPage() {
  return (
    <div className="px-4 pb-24 pt-32 md:px-6 md:pt-40">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">About</p>
        <h1 className="mt-4 font-display text-5xl font-extrabold uppercase leading-none tracking-[-0.02em] md:text-6xl">
          We keep the thread intact.
        </h1>
        <div className="mt-8 space-y-5 text-lg text-soft">
          <p>
            Techtoil helps teams move from idea to a business that runs — through
            design, product, growth, guidance, intelligent operations, and hiring.
          </p>
          <p>
            We organize around your chapter and outcome first. Craft comes second —
            always in service of where you need to go.
          </p>
        </div>
        <Link
          to="/contact"
          className="mt-10 inline-flex bg-ink px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-ember"
        >
          Work with us
        </Link>
      </div>
    </div>
  )
}
