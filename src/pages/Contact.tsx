import { MapPin, Phone, Mail } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ContactForm } from '../components/forms/ContactForm'
import { SEO } from '../components/seo/SEO'
import { siteContent } from '../data/content'

export const Contact = () => {
  const { contact } = siteContent

  return (
    <div>
      <SEO
        title="Contact Us | SafeSkillz Limited"
        description="Get in touch with SafeSkillz for cybersecurity training inquiries. Located in London, UK. Contact us for bespoke or public training programs."
        keywords="contact SafeSkillz, cybersecurity training inquiry, London cybersecurity training, book training session"
        url="https://safeskillz.co.uk/contact"
      />
      <section className="py-16 bg-gray-50 dark:bg-dark-surface">
        <Container>
          <SectionHeading
            title="Get In Touch"
            description="Ready to enhance your organization's cybersecurity capabilities? Contact us to discuss your training needs."
            centered
          />
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h4>
                    <p className="text-muted">{contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-muted hover:text-primary transition-colors focus-visible"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-muted hover:text-primary transition-colors focus-visible"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-accent/10 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Training Inquiry
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Looking to book a training session or need a custom program for your organization?
                  Use the contact form to tell us about your specific requirements, and we'll get back
                  to you with a tailored proposal.
                </p>
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send us a Message
              </h3>
              <ContactForm />
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Training Options Available
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="p-4 bg-surface dark:bg-dark-surface rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Public Courses</h4>
                  <p className="text-sm text-muted">
                    Join scheduled training sessions with professionals from various organizations.
                  </p>
                </div>
                <div className="p-4 bg-surface dark:bg-dark-surface rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Bespoke Training</h4>
                  <p className="text-sm text-muted">
                    Custom-designed programs tailored to your organization's specific needs and challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}