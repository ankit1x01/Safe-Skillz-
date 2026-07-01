import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { CookieConsent } from './components/common/CookieConsent'
import { ScrollToTop } from './components/common/ScrollToTop'
import { Home } from './pages/Home'
import { Trainings } from './pages/Trainings'
import { Alliances } from './pages/Alliances'
import { Work } from './pages/Work'
import { Team } from './pages/Team'
import { Contact } from './pages/Contact'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { CookiePolicy } from './pages/CookiePolicy'
import { Terms } from './pages/Terms'
import { LearnerTerms } from './pages/LearnerTerms'
import { Internship } from './pages/Internship'
import { Events } from './pages/Events'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-background text-text transition-colors">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/internship" element={<Internship />} />
              <Route path="/trainings" element={<Trainings />} />
              <Route path="/alliances" element={<Alliances />} />
              <Route path="/work" element={<Work />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/learner-terms" element={<LearnerTerms />} />
            </Routes>
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App