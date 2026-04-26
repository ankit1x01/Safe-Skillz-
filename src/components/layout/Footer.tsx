import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Shield, Instagram } from 'lucide-react'
import { Container } from '../ui/Container'
import { siteContent } from '../../data/content'

export const Footer = () => {
  const { contact, footer, company } = siteContent

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Brand & Description */}
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="/logo.png"
                  alt="SafeSkillz Limited"
                  className="h-24 w-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
              <p className="text-gray-600 mb-4">{siteContent.brand.description}</p>
              {footer.badge && (
                <div className="flex items-center space-x-2 text-sm text-primary">
                  <Shield size={16} />
                  <span>{footer.badge}</span>
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/trainings" className="block text-gray-600 hover:text-primary transition-colors">Courses</Link>
                <Link to="/alliances" className="block text-gray-600 hover:text-primary transition-colors">Partners</Link>
                <a href="#" className="block text-gray-600 hover:text-primary transition-colors">LMS</a>
                <Link to="/team" className="block text-gray-600 hover:text-primary transition-colors">About Us</Link>
                <Link to="/contact" className="block text-gray-600 hover:text-primary transition-colors">Contact</Link>
              </div>
            </div>

            {/* Legal & Compliance */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Legal & Compliance</h3>
              <div className="space-y-2">
                {footer.links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Us</h3>
              <div className="space-y-2 text-gray-600 mb-4">
                <p className="text-sm">{contact.address}</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="block text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  {contact.email}
                </a>
              </div>
              <div className="flex space-x-4">
                {contact.socialLinks
                  .filter((s) => s.icon !== 'Youtube')
                  .map((social) => {
                    const Icon = { Linkedin, Twitter, Instagram }[
                      social.icon as 'Linkedin' | 'Twitter' | 'Instagram'
                    ] || Linkedin
                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        className="text-gray-500 hover:text-primary transition-colors"
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

          {/* Bottom Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600 mb-2">
                <strong className="text-gray-800">{company.name}</strong>
                {company.registrationNumber && (
                  <>
                    {' '}| Registered in {company.jurisdiction}
                    {' '}| Company No: {company.registrationNumber}
                  </>
                )}
              </p>
              <p className="text-xs text-gray-500">
                Registered Office: {company.registeredOffice}
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-2">{footer.copyright}</p>
              <p className="text-sm text-gray-500">{footer.subtitle}</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
