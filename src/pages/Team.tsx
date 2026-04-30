import { Container } from '../components/ui/Container'
import { TeamCard } from '../components/cards/TeamCard'
import { CTAStrip } from '../components/home/CTAStrip'
import { SEO } from '../components/seo/SEO'
import { siteContent } from '../data/content'

export const Team = () => {
  const { team } = siteContent

  return (
    <div>
      <SEO
        title="Expert Team | SafeSkillz Limited"
        description="Meet the cybersecurity professionals behind SafeSkillz."
        keywords="cybersecurity experts, training team, security professionals"
        url="https://safeskillz.co.uk/team"
      />

      {/* Hero — no background image */}
      <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-tr from-primary-dark via-primary to-accent">
        <Container className="relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 animate-fade-in">
              Leadership
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
              Our Expert Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 animate-slide-up">
              Meet the cybersecurity professionals behind SafeSkillz training excellence
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">40+</div>
                <div className="text-sm text-gray-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-sm text-gray-200">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-sm text-gray-200">Sessions Delivered</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {team.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                linkedinUrl={member.linkedinUrl || '#'}
              />
            ))}
          </div>

          <div className="text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Industry Recognition & Expertise
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Our team combines decades of hands-on experience with academic excellence and industry recognition. From banking sector strategy to bug bounty hunting featured by international media, our experts bring diverse perspectives to cybersecurity training.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">40+</div>
                  <div className="text-gray-600">Years Combined Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-gray-600">Training Sessions Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-gray-600">Industry Certifications</div>
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