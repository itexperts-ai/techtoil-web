import { Outlet } from 'react-router-dom'
import { LeftRail } from './LeftRail'
import { TopNav } from './TopNav'
import { Footer } from './Footer'
import { AiNavigator } from '../ai/AiNavigator'

export function AppShell() {
  return (
    <div className="min-h-screen bg-midnight text-white">
      <TopNav />
      <div className="flex min-h-[calc(100vh-4rem)]">
        <LeftRail />
        <div className="min-w-0 flex-1 flex flex-col">
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
      <AiNavigator />
    </div>
  )
}
