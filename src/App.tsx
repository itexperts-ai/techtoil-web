import { CloseCTA } from './components/CloseCTA'
import { Hero } from './components/Hero'
import { Pillars } from './components/Pillars'
import { ServiceChapters } from './components/ServiceChapters'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { useActiveService } from './hooks/useActiveService'

export default function App() {
  const activeId = useActiveService()

  return (
    <div className="shell">
      <SiteHeader activeId={activeId} />
      <main>
        <Hero />
        <Pillars />
        <ServiceChapters activeId={activeId} />
        <CloseCTA />
      </main>
      <SiteFooter />
    </div>
  )
}
