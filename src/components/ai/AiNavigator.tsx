import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, X, Sparkles } from 'lucide-react'
import { services } from '../../data/services'

type Msg = { role: 'bot' | 'user'; text: string }

const prompts = [
  'I want to start a business',
  'I want to build an app or website',
  'I need more customers',
  'I need funding guidance',
  'I want to automate my operations',
  'I need to hire employees',
  'I want to scale my business',
]

function recommend(input: string) {
  const t = input.toLowerCase()
  const ids: string[] = []
  if (/idea|start|found|consult|business model|gtm/.test(t)) ids.push('startup-consultancy')
  if (/design|ux|ui|prototype|wireframe/.test(t)) ids.push('product-design')
  if (/app|website|develop|build|saas|software|mvp/.test(t)) ids.push('product-development')
  if (/customer|lead|seo|market|social|smo/.test(t)) ids.push('marketing')
  if (/fund|investor|pitch|raise|capital/.test(t)) ids.push('funding-support')
  if (/automat|ai|ops|workflow|chatbot/.test(t)) ids.push('ai-automation')
  if (/hire|talent|hr|recruit|staff|onrole|off.?role/.test(t)) ids.push('hr-hiring')
  if (/scale/.test(t)) ids.push('marketing', 'ai-automation', 'hr-hiring')
  const unique = [...new Set(ids)]
  if (!unique.length) return services.slice(0, 3)
  return unique.map((id) => services.find((s) => s.id === id)!).filter(Boolean)
}

/** Demo rule-based assistant — clearly not a live LLM. */
export function AiNavigator() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: 'bot',
      text: "Hello! I'm your Business Navigator (demo mode). Tell me what you're planning to build, improve, or grow — I'll map the right Techtoil capabilities.",
    },
  ])

  const lastRecs = useMemo(() => {
    const lastUser = [...msgs].reverse().find((m) => m.role === 'user')
    return lastUser ? recommend(lastUser.text) : []
  }, [msgs])

  function send(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return
    const recs = recommend(trimmed)
    const reply =
      recs.length > 0
        ? `Based on that, I'd start with: ${recs.map((r) => r.short).join(', ')}. Explore those pillars in the left menu, or book a consultation to build a full roadmap.`
        : 'Share a bit more about your stage — idea, product, growth, funding, ops, or hiring — and I’ll route you to the right pillars.'
    setMsgs((m) => [...m, { role: 'user', text: trimmed }, { role: 'bot', text: reply }])
    setInput('')
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-electric px-4 py-3 text-sm font-bold text-white shadow-lg shadow-electric/30 hover:bg-electric/90"
      >
        <Sparkles className="h-4 w-4" />
        Business Navigator
      </button>

      {open && (
        <div className="fixed bottom-5 right-5 z-50 w-[min(100vw-1.5rem,380px)] glass rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between border-b border-line px-4 py-3 bg-surface">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-cyan" />
              <div>
                <p className="text-sm font-bold">Business Navigator</p>
                <p className="text-[10px] text-muted">Demo · rule-based (not a live LLM)</p>
              </div>
            </div>
            <button type="button" aria-label="Close" onClick={() => setOpen(false)}>
              <X className="h-4 w-4 text-muted" />
            </button>
          </div>

          <div className="h-72 overflow-y-auto px-4 py-3 space-y-3 bg-midnight/80">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`max-w-[90%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                  m.role === 'bot'
                    ? 'bg-surface text-white/90'
                    : 'ml-auto bg-electric/20 text-white'
                }`}
              >
                {m.text}
              </div>
            ))}
            {lastRecs.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {lastRecs.map((s) => (
                  <Link
                    key={s.id}
                    to={s.path}
                    className="rounded-full border border-line px-2.5 py-1 text-[11px] font-semibold text-cyan hover:border-cyan/50"
                    onClick={() => setOpen(false)}
                  >
                    {s.num} {s.short}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-line p-3 space-y-2 bg-surface">
            <div className="flex flex-wrap gap-1.5">
              {prompts.slice(0, 4).map((p) => (
                <button
                  key={p}
                  type="button"
                  className="rounded-full border border-line px-2 py-1 text-[10px] text-muted hover:text-white"
                  onClick={() => send(p)}
                >
                  {p}
                </button>
              ))}
            </div>
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your goal…"
                className="flex-1 rounded-md border border-line bg-midnight px-3 py-2 text-sm outline-none focus:border-electric"
              />
              <button
                type="submit"
                className="rounded-md bg-electric px-3 py-2 text-sm font-bold"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
