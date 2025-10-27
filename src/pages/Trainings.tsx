import { useState } from 'react'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { CourseCard } from '../components/cards/CourseCard'
import { CTAStrip } from '../components/home/CTAStrip'
import { SEO } from '../components/seo/SEO'
import { siteContent } from '../data/content'

export const Trainings = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const { sections, note } = siteContent.trainings

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'defensive', label: 'Defensive Security' },
    { id: 'offensive', label: 'Offensive Security' },
    { id: 'secure-development', label: 'Secure Development' },
    { id: 'cloud-network', label: 'Cloud & Network' },
    { id: 'governance', label: 'Governance & Risk' },
    { id: 'cyber-hygiene', label: 'Cyber Hygiene' },
    { id: 'forensics', label: 'Digital Forensics' },
    { id: 'accredited', label: 'Accredited Courses' },
  ]

  const filteredSections = selectedCategory === 'all'
    ? sections
    : sections.filter(section => section.id === selectedCategory)

  return (
    <div>
      <SEO
        title="Cybersecurity Training Programs | SafeSkillz Limited"
        description="Comprehensive cybersecurity training covering defensive security, ethical hacking, cloud security, and more. NCSC-aligned courses for professionals."
        keywords="cybersecurity courses, ethical hacking training, security operations, incident response training, penetration testing course"
        url="https://safeskillz.co.uk/trainings"
      />
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/armiet-college-aicte/1732100762340.jpg)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/95"></div>
        <Container className="relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              Professional Development
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Cybersecurity Training Programs
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Comprehensive training portfolio covering all aspects of cybersecurity
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span>✓</span>
                <span>NCSC Aligned</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span>✓</span>
                <span>Hands-On Training</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span>✓</span>
                <span>Expert Instructors</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-64 flex-shrink-0">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Categories
                </h3>
                <nav className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors focus-visible ${
                        selectedCategory === category.id
                          ? 'bg-primary text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            <main className="flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredSections.map((section) => (
                  <CourseCard
                    key={section.id}
                    title={section.title}
                    courses={section.courses}
                    icon={section.icon}
                    note={section.note}
                  />
                ))}
              </div>

              <div className="mt-12 p-6 bg-accent/10 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Training Options
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{note}</p>
              </div>
            </main>
          </div>
        </Container>
      </section>

      <CTAStrip />
    </div>
  )
}