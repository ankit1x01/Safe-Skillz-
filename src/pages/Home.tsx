import { Hero } from '../components/home/Hero'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { CTAStrip } from '../components/home/CTAStrip'
import { CourseCard } from '../components/cards/CourseCard'
import { SEO } from '../components/seo/SEO'
import { siteContent } from '../data/content'

export const Home = () => {
  const highlights = siteContent.highlights.map(highlight => ({
    ...highlight,
    courses: [
      `Professional ${highlight.title.toLowerCase()} training`,
      'Hands-on practical exercises',
      'Industry-recognized certifications',
      'Expert instructor guidance',
      'Real-world case studies',
    ]
  }))

  return (
    <div>
      <SEO
        title="SafeSkillz Limited - Cybersecurity Training & Education"
        description="UK-based cybersecurity training provider specialising in defensive and offensive security education. NCSC-aligned courses for government, corporate and academic clients."
        keywords="cybersecurity training, ethical hacking, security operations, incident response, penetration testing, NCSC aligned, SafeSkillz"
        url="https://safeskillz.co.uk/"
      />
      <Hero />

      <section className="section-padding bg-surface dark:bg-dark-surface">
        <Container>
          <SectionHeading
            subtitle="Our Expertise"
            title="Comprehensive Cybersecurity Training"
            description="Build robust cyber defense capabilities with our expert-led training programs"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <CourseCard
                key={index}
                title={highlight.title}
                courses={highlight.courses}
                icon={highlight.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose SafeSkillz?
            </h2>
            <p className="text-lg text-muted mb-12">{siteContent.about}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  NCSC Aligned Training
                </h3>
                <p className="text-muted">
                  All our courses are designed and delivered in alignment with the UK's National Cyber Security Centre guidelines, ensuring you receive training that meets the highest standards.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Industry Experts
                </h3>
                <p className="text-muted">
                  Learn from seasoned professionals with real-world experience in government, corporate, and academic cybersecurity environments.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Flexible Delivery
                </h3>
                <p className="text-muted">
                  Choose from public courses or bespoke training tailored specifically to your organization's unique requirements and challenges.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Practical Focus
                </h3>
                <p className="text-muted">
                  Our hands-on approach ensures you gain practical skills that can be immediately applied in your professional environment.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTAStrip />
    </div>
  )
}