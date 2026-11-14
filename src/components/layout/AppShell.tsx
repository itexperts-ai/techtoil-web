import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { TopNav } from './TopNav'

export function AppShell() {
  return (
    <div className="min-h-screen bg-mist text-ink">
      <TopNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
