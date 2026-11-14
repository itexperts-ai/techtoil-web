import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { HomePage } from './pages/HomePage'
import { SolutionsPage } from './pages/SolutionsPage'
import { ServicePage } from './pages/ServicePage'
import { AboutPage } from './pages/AboutPage'
import { HowWeWorkPage } from './pages/HowWeWorkPage'
import { IndustriesPage } from './pages/IndustriesPage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage, PrivacyPage, TermsPage } from './pages/LegalPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="solutions/:slug" element={<ServicePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="how-we-work" element={<HowWeWorkPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
