const steps = [
  { title: 'Understand', body: 'Clarify goals, constraints, stage, and the outcome that matters.' },
  { title: 'Strategize', body: 'Build a roadmap across the right Techtoil capabilities.' },
  { title: 'Design', body: 'Shape experiences, architecture, and operating models.' },
  { title: 'Execute', body: 'Ship product, campaigns, automations, or hiring motions.' },
  { title: 'Optimize & Scale', body: 'Measure, refine, and expand what is already working.' },
]

export function HowWeWorkPage() {
  return (
    <div className="px-4 py-14 md:px-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display text-4xl font-bold">How We Work</h1>
        <p className="mt-3 max-w-2xl text-muted">
          A clear five-step loop — sophisticated enough for complex work, light enough to keep momentum.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-xl border border-line bg-surface/40 p-5">
              <p className="font-display text-xs text-electric">0{i + 1}</p>
              <h2 className="mt-2 font-display text-lg font-bold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
