import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { Trainings } from './pages/Trainings'
import { Alliances } from './pages/Alliances'
import { Work } from './pages/Work'
import { Team } from './pages/Team'
import { Contact } from './pages/Contact'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-background text-text transition-colors">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trainings" element={<Trainings />} />
              <Route path="/alliances" element={<Alliances />} />
              <Route path="/work" element={<Work />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App