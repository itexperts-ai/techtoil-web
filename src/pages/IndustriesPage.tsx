import { industries } from '../data/services'

export function IndustriesPage() {
  return (
    <div className="px-4 py-14 md:px-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display text-4xl font-bold">Industries</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Entry points for teams across sectors. We do not claim industry-specific client
          experience without evidence.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <div key={i} className="rounded-xl border border-line bg-surface/40 px-4 py-5 font-semibold">
              {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
