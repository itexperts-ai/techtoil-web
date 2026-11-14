import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { ArrowRight } from 'lucide-react'

export function SolutionsPage() {
  return (
    <div className="px-4 py-14 md:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-cyan">
          Solutions
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold">
          One ecosystem. Seven capabilities.
        </h1>
        <p className="mt-3 max-w-2xl text-muted">
          Use the left menu to jump between pillars — or open any solution below.
        </p>
        <div className="mt-10 grid gap-4">
          {services.map((s) => (
            <Link
              key={s.id}
              to={s.path}
              className="group flex flex-col gap-3 rounded-2xl border border-line bg-surface/40 p-5 sm:flex-row sm:items-center sm:justify-between hover:border-electric/40"
            >
              <div className="flex gap-4">
                <span className="font-display text-2xl font-bold text-electric">{s.num}</span>
                <div>
                  <h2 className="font-display text-xl font-bold">{s.title}</h2>
                  <p className="text-sm text-muted">{s.tagline}</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-cyan">
                Open <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
