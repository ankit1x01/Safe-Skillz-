import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
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
        description="Meet the cybersecurity professionals behind SafeSkillz: industry experts with experience in banking, bug bounty hunting, and security strategy."
        keywords="cybersecurity experts, training team, security professionals, industry advisors"
        url="https://safeskillz.co.uk/team"
      />
      <section className="py-16 bg-gray-50 dark:bg-dark-surface">
        <Container>
          <SectionHeading
            title="Our Expert Team"
            description="Meet the cybersecurity professionals behind SafeSkillz training excellence"
            centered
          />
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {team.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                location={member.location}
              />
            ))}
          </div>

          <div className="text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Industry Recognition & Expertise
              </h3>
              <p className="text-lg text-muted mb-8">
                Our team combines decades of hands-on experience with academic excellence and industry recognition. From banking sector strategy to bug bounty hunting featured by international media, our experts bring diverse, real-world perspectives to cybersecurity training.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-muted">Years Combined Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-muted">Training Sessions Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted">Industry Certifications</div>
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