import { Hero } from '../components/home/Hero'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { CTAStrip } from '../components/home/CTAStrip'
import { CourseCard } from '../components/cards/CourseCard'
import { SEO } from '../components/seo/SEO'
import { siteContent } from '../data/content'
import { Shield, Target, Cloud, Award, Users, TrendingUp } from 'lucide-react'
import { InteractiveCyberGame } from '../components/home/InteractiveCyberGame'

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

      {/* Stats Section */}
      <section className="py-16 -mt-20 relative z-20">
        <Container>
          <div className="bg-white dark:bg-dark-surface rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {siteContent.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-fade-in">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gradient-to-b from-background to-surface dark:from-dark-background dark:to-dark-surface">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, text: 'NCSC Aligned' },
              { icon: Award, text: 'Industry Accredited' },
              { icon: Users, text: 'Expert-Led Training' },
              { icon: TrendingUp, text: 'Proven Results' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 rounded-xl bg-white/50 dark:bg-dark-surface/50 backdrop-blur-sm transition-transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.text}</span>
              </div>
            ))}
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
            {[
              { src: "/infosecurity-europe/1719051294651.jpg", title: "Infosecurity Europe", desc: "Excel London" },
              { src: "/gisec-global/1746566582497.jpg", title: "GISEC GLOBAL", desc: "International Conference" },
              { src: "/british-high-commission/1708053095091.jpg", title: "British High Commission", desc: "Cybersecurity Collaboration" },
              { src: "/ctf-event/1746345968636.jpg", title: "CTF Competition", desc: "Capture The Flag Event" },
              { src: "/dy-patil-mou/1752987705486.jpg", title: "DY Patil Institute MOU", desc: "Training Partnership" },
              { src: "/armiet-college-aicte/1732100762340.jpg", title: "ARMIET College Session", desc: "Digital Forensics Training" },
            ].map((item, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-100 opacity-90">{item.desc}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xl">→</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>



      {/* Why Choose Us Section */}
      <section className="section-padding bg-white dark:bg-dark-background">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Why SafeSkillz
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Excellence in Cybersecurity Education
              </h2>
              <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">{siteContent.about}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-8">
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      NCSC Aligned Training
                    </h3>
                    <p className="text-muted leading-relaxed">
                      All our courses are designed and delivered in alignment with the UK's National Cyber Security Centre guidelines, ensuring you receive training that meets the highest standards.
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
                    <p className="text-muted leading-relaxed">
                      Learn from seasoned professionals with real-world experience in government, corporate, and academic cybersecurity environments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
                <img
                  src="/power-sector-cea/1711095109428.jpg"
                  alt="Cybersecurity Training Session"
                  className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-2xl"></div>
                <img
                  src="/1717415910887.jpg"
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
                    <p className="text-muted leading-relaxed">
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
                    <p className="text-muted leading-relaxed">
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