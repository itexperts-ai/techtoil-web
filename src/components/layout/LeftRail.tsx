import { NavLink } from 'react-router-dom'
import { services } from '../../data/services'

/** Persistent left menu — all 7 service pillars always visible. */
export function LeftRail() {
  return (
    <aside className="hidden lg:flex w-[272px] shrink-0 flex-col border-r border-line bg-midnight/95">
      <div className="px-5 pt-6 pb-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
          Growth Ecosystem
        </p>
        <p className="mt-1 text-sm text-white/80 font-semibold">All 7 capabilities</p>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 pb-6" aria-label="Service pillars">
        <ul className="space-y-1">
          {services.map((s) => (
            <li key={s.id}>
              <NavLink
                to={s.path}
                className={({ isActive }) =>
                  [
                    'group flex gap-3 rounded-md px-3 py-3 transition-colors',
                    isActive
                      ? 'bg-electric/15 text-white ring-1 ring-electric/40'
                      : 'text-muted hover:bg-white/5 hover:text-white',
                  ].join(' ')
                }
              >
                <span
                  className="mt-0.5 font-display text-xs font-bold"
                  style={{ color: s.accent }}
                >
                  {s.num}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold leading-snug text-inherit">
                    {s.title}
                  </span>
                  <span className="mt-0.5 block text-[11px] leading-snug text-muted group-hover:text-muted">
                    {s.category}
                  </span>
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-line p-4">
        <NavLink
          to="/contact"
          className="flex w-full items-center justify-center rounded-md bg-electric px-3 py-2.5 text-sm font-bold text-white hover:bg-electric/90 transition"
        >
          Book a Consultation
        </NavLink>
      </div>
    </aside>
  )
}
