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
      <section className="py-16 bg-gray-50 dark:bg-dark-surface">
        <Container>
          <SectionHeading
            title="Strategic Alliances"
            description="Partnering with leading organizations to deliver world-class cybersecurity training"
            centered
          />
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