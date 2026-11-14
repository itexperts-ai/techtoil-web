import { AiBand } from './components/AiBand'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Process } from './components/Process'
import { Services } from './components/Services'

export default function App() {
  return (
    <div className="site">
      <Nav />
      <main>
        <Hero />
        <Services />
        <AiBand />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
