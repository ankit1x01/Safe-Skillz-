import { Award, Shield, Target, TrendingUp, Users } from 'lucide-react'
import { CourseCard } from '../components/cards/CourseCard'
import { CTAStrip } from '../components/home/CTAStrip'
import { Hero } from '../components/home/Hero'
import { SEO } from '../components/seo/SEO'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { siteContent } from '../data/content'
import { Link } from 'react-router-dom'
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
        description="UK-based cybersecurity training provider specialising in defensive and offensive security education. Informed by UK cybersecurity guidance, serving government, corporate and academic clients."
        keywords="cybersecurity training, ethical hacking, security operations, incident response, penetration testing, UK cybersecurity, SafeSkillz"
        url="https://safeskillz.co.uk/"
      />
      <Hero />

      {/* Stats Section */}
      <section className="py-16 -mt-20 relative z-20">
        <Container>
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-primary">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {siteContent.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-fade-in">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted dark:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-white dark:bg-dark-background">
        <Container>
          <SectionHeading
            subtitle="Our Expertise"
            title="Comprehensive Cybersecurity Training"
            description="Build robust cyber defense capabilities with our expert-led training programs"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {highlights.map((highlight, index) => (
              <div key={index} className="group">
                <CourseCard
                  title={highlight.title}
                  courses={highlight.courses}
                  icon={highlight.icon}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-gradient-to-b from-surface to-white dark:from-dark-surface dark:to-dark-background">
        <Container>
          <SectionHeading
            subtitle="Our Impact"
            title="Global Cybersecurity Presence"
            description="Delivering world-class training at international conferences and leading institutions"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {siteContent.work.events.map((event) => (
              <Link
                key={event.id}
                to="/work"
                className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer block"
              >
                <img
                  src={`/${event.coverImage}`}
                  alt={event.title}
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-100 opacity-90">{event.tagline}</p>  
                </div>
              </Link>
            ))}
          </div>

        </Container>
      </section>



      {/* Why Choose Us Section */}
      <section className="pt-8 pb-16 lg:pb-24 bg-white dark:bg-dark-background">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Why SafeSkillz
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Excellence in Cybersecurity Education
              </h2>
              <p className="text-lg text-muted dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">{siteContent.about}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-8">
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Training informed by UK cybersecurity guidance
                    </h3>
                    <p className="text-muted dark:text-gray-300 leading-relaxed">
                      Our courses are designed using recognised industry best practices and publicly available guidance from organisations such as the UK National Cyber Security Centre (NCSC), ensuring practical, relevant, and up-to-date learning.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Industry Experts
                    </h3>
                    <p className="text-muted dark:text-gray-300 leading-relaxed">
                      Learn from seasoned professionals with real-world experience in government, corporate, and academic cybersecurity environments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
                <img
                  src="/uk photos/whatsapp-3.jpeg"
                  alt="Cybersecurity Training Session"
                  className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-2xl"></div>
                <img
                  src="/uk photos/glassglow(cover page).jpg"
                  alt="Hands-on Training Workshop"
                  className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>

              <div className="space-y-8 order-1 lg:order-2">
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Flexible Delivery
                    </h3>
                    <p className="text-muted dark:text-gray-300 leading-relaxed">
                      Choose from public courses or bespoke training tailored specifically to your organization's unique requirements and challenges.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Practical Focus
                    </h3>
                    <p className="text-muted dark:text-gray-300 leading-relaxed">
                      Our hands-on approach ensures you gain practical skills that can be immediately applied in your professional environment.
                    </p>
                  </div>
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