import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Youtube, Shield } from 'lucide-react'
import { Container } from '../ui/Container'
import { siteContent } from '../../data/content'

export const Footer = () => {
  const { contact, footer } = siteContent

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-400">
                <p>{contact.address}</p>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4 mb-4">
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
                    >
                      <Icon size={24} />
                    </a>
                  )
                })}
              </div>
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
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 mb-2">{footer.copyright}</p>
            <p className="text-sm text-gray-500">{footer.subtitle}</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}