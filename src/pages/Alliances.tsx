import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { AllianceCard } from '../components/cards/AllianceCard'
import { CTAStrip } from '../components/home/CTAStrip'
import { SEO } from '../components/seo/SEO'
import { siteContent } from '../data/content'

export const Alliances = () => {
  const { alliances } = siteContent

  return (
    <div>
      <SEO
        title="Strategic Alliances | SafeSkillz Limited"
        description="Global partnerships with leading cybersecurity organizations including Cyber Secured Africa, Cyber Secured India, OPSWAT Academy, and CloudSeals."
        keywords="cybersecurity partnerships, global alliances, training partners, international cybersecurity education"
        url="https://safeskillz.co.uk/alliances"
      />
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/infosecurity-europe/1719051294651.jpg)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary-dark/90 to-primary/95"></div>
        <Container className="relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 animate-fade-in">
              Global Network
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              Strategic Alliances
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 animate-slide-up">
              Partnering with leading organizations to deliver world-class cybersecurity training
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">4</div>
                <div className="text-sm text-gray-200">Strategic Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-sm text-gray-200">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-sm text-gray-200">Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm text-gray-200">Commitment</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {alliances.map((alliance, index) => (
              <AllianceCard
                key={index}
                name={alliance.name}
                description={alliance.description}
                logo={alliance.logo}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Global Reach, Local Expertise
              </h3>
              <p className="text-lg text-muted mb-8">
                Through our strategic partnerships, SafeSkillz extends its reach globally while maintaining the high standards of training excellence. Our alliances enable us to deliver culturally relevant, locally adapted cybersecurity education that meets international standards.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">4</div>
                  <div className="text-muted">Strategic Partners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-muted">Countries Reached</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-muted">Professionals Trained</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTAStrip />
    </div>
  )
}