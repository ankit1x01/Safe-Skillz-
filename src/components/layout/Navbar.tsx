import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Container } from '../ui/Container'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Events', href: '/events' },
  { label: 'Training & Internship', href: '/internship' },
  { label: 'Courses', href: '/trainings' },
  { label: 'Partners', href: '/alliances' },
  { label: 'Gallery', href: '/work' },
  { label: 'About Us', href: '/team' },
  { label: 'Contact', href: '/contact' },
]

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActiveLink = (href: string) => {
    return location.pathname === href
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="SafeSkillz Limited - Cybersecurity Training"
              className="h-24 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative py-2 text-sm font-medium transition-colors hover:text-primary focus-visible ${
                  isActiveLink(link.href)
                    ? 'text-primary'
                    : 'text-gray-700'
                }`}
              >
                {link.label}
                {isActiveLink(link.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors focus-visible"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <Container>
            <div className="py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 text-base font-medium transition-colors hover:text-primary focus-visible ${
                    isActiveLink(link.href)
                      ? 'text-primary'
                      : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Container>
        </div>
      )}
    </nav>
  )
}