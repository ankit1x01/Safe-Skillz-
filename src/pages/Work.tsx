import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Gallery } from '../components/common/Gallery'
import { CTAStrip } from '../components/home/CTAStrip'
import { SEO } from '../components/seo/SEO'
import { siteContent } from '../data/content'

export const Work = () => {
  const { work } = siteContent

  return (
    <div>
      <SEO
        title="Our Work & Case Studies | SafeSkillz Limited"
        description="Explore SafeSkillz cybersecurity training delivered to Fortune 500 companies, government agencies, and universities worldwide."
        keywords="cybersecurity case studies, training portfolio, corporate training, government cybersecurity training"
        url="https://safeskillz.co.uk/work"
      />
      <section className="py-16 bg-gray-50 dark:bg-dark-surface">
        <Container>
          <SectionHeading
            title={work.title}
            description={work.description}
            centered
          />
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <Gallery items={work.gallery} />

          <div className="mt-16 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Delivering Excellence Across Sectors
              </h3>
              <p className="text-lg text-muted mb-8">
                From Fortune 500 companies to government agencies and leading universities, SafeSkillz has delivered impactful cybersecurity training across diverse sectors. Our experienced team brings real-world insights and practical expertise to every engagement.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Corporate</div>
                  <div className="text-sm text-muted">Fortune 500 Companies</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Government</div>
                  <div className="text-sm text-muted">Public Sector Agencies</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Academic</div>
                  <div className="text-sm text-muted">Universities & Colleges</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Conferences</div>
                  <div className="text-sm text-muted">Industry Events</div>
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