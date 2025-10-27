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
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/gisec-global/1746566582497.jpg)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-accent/95 via-primary/90 to-primary-dark/95"></div>
        <Container className="relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 animate-fade-in">
              Showcase
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              {work.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-12 animate-slide-up">
              {work.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">12+</div>
                <div className="text-sm text-gray-200">Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Global</div>
                <div className="text-sm text-gray-200">Presence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Expert</div>
                <div className="text-sm text-gray-200">Sessions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Impact</div>
                <div className="text-sm text-gray-200">Driven</div>
              </div>
            </div>
          </div>
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