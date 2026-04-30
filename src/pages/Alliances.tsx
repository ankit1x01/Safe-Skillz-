import { Container } from '../components/ui/Container'
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
        description="Global partnerships with leading cybersecurity organizations."
        keywords="cybersecurity partnerships, global alliances, training partners"
        url="https://safeskillz.co.uk/alliances"
      />

      {/* Hero — no background image */}
      <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-r from-primary via-primary-dark to-primary">
        <Container className="relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 animate-fade-in">
              Global Network
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
              Strategic Alliances
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 animate-slide-up">
              Partnering with leading organizations to deliver world-class cybersecurity training
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
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
          {/* Alliance cards only — no logo card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {alliances.map((alliance, index) => (
              <AllianceCard
                key={index}
                name={alliance.name}
                description={alliance.description}
                logo={alliance.logo}
                website={alliance.website}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTAStrip />
    </div>
  )
}