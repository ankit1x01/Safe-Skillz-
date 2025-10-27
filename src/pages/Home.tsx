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
          <SectionHeading
            subtitle="Our Impact"
            title="Global Cybersecurity Presence"
            description="Delivering world-class training at international conferences and leading institutions"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/infosecurity-europe/1719051294651.jpg"
                alt="Infosecurity Europe Excel London"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-lg font-semibold mb-1">Infosecurity Europe</h3>
                  <p className="text-sm text-gray-200">Excel London</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/gisec-global/1746566582497.jpg"
                alt="GISEC GLOBAL Conference"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-lg font-semibold mb-1">GISEC GLOBAL</h3>
                  <p className="text-sm text-gray-200">International Cybersecurity Conference</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/british-high-commission/1708053095091.jpg"
                alt="British High Commission in India"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-lg font-semibold mb-1">British High Commission</h3>
                  <p className="text-sm text-gray-200">Cybersecurity Collaboration</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/ctf-event/1746345968636.jpg"
                alt="CTF Event Highlight"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-lg font-semibold mb-1">CTF Competition</h3>
                  <p className="text-sm text-gray-200">Capture The Flag Event</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/dy-patil-mou/1752987705486.jpg"
                alt="MOU with DY Patil Institute"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-lg font-semibold mb-1">DY Patil Institute MOU</h3>
                  <p className="text-sm text-gray-200">Training Partnership</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/armiet-college-aicte/1732100762340.jpg"
                alt="Digital Forensics at ARMIET College"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-lg font-semibold mb-1">ARMIET College Session</h3>
                  <p className="text-sm text-gray-200">Digital Forensics Training</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-surface dark:bg-dark-surface">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose SafeSkillz?
              </h2>
              <p className="text-lg text-muted max-w-4xl mx-auto">{siteContent.about}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6">
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
              </div>

              <div className="relative">
                <img
                  src="/power-sector-cea/1711095109428.jpg"
                  alt="Cybersecurity Training Session"
                  className="rounded-lg shadow-xl w-full h-80 object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <img
                  src="/1717415910887.jpg"
                  alt="Hands-on Training Workshop"
                  className="rounded-lg shadow-xl w-full h-80 object-cover"
                />
              </div>

              <div className="space-y-6 order-1 lg:order-2">
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
          </div>
        </Container>
      </section>

      <CTAStrip />
    </div>
  )
}