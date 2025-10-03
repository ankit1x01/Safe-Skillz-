import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Youtube, Shield } from 'lucide-react'
import { Container } from '../ui/Container'
import { siteContent } from '../../data/content'

export const Footer = () => {
  const { contact, footer, company } = siteContent

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/logo.png"
                  alt="SafeSkillz Limited"
                  className="h-8 w-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
                <span className="text-xl font-bold text-accent">SafeSkillz</span>
              </div>
              <p className="text-gray-400 mb-4">{siteContent.brand.description}</p>
              <div className="flex items-center space-x-2 text-sm text-accent">
                <Shield size={16} />
                <span>{footer.badge}</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link
                  to="/trainings"
                  className="block text-gray-400 hover:text-accent transition-colors focus-visible"
                >
                  Courses
                </Link>
                <Link
                  to="/alliances"
                  className="block text-gray-400 hover:text-accent transition-colors focus-visible"
                >
                  Partners
                </Link>
                <Link
                  to="/team"
                  className="block text-gray-400 hover:text-accent transition-colors focus-visible"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="block text-gray-400 hover:text-accent transition-colors focus-visible"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Legal & Compliance */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal & Compliance</h3>
              <div className="space-y-2">
                {footer.links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block text-gray-400 hover:text-accent transition-colors focus-visible"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-400 mb-4">
                <p className="text-sm">{contact.address}</p>
                <p className="text-sm">{contact.phone}</p>
                <p className="text-sm">{contact.email}</p>
              </div>
              <div className="flex space-x-4">
                {contact.socialLinks.map((social) => {
                  const Icon = {
                    Linkedin,
                    Twitter,
                    Youtube,
                  }[social.icon as keyof typeof import('lucide-react')] || Linkedin

                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      className="text-gray-400 hover:text-accent transition-colors focus-visible"
                      aria-label={social.platform}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={24} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Bottom Section - Company Details & Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-400 mb-2">
                <strong className="text-gray-300">{company.name}</strong>
                {company.registrationNumber && (
                  <>
                    {' '}
                    | Registered in {company.jurisdiction}
                    {' '}| Company No: {company.registrationNumber}
                  </>
                )}
              </p>
              <p className="text-xs text-gray-500">
                Registered Office: {company.registeredOffice}
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 mb-2">{footer.copyright}</p>
              <p className="text-sm text-gray-500">{footer.subtitle}</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}