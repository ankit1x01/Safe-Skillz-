import { Link } from 'react-router-dom'
import { Award, ExternalLink, Mic, Users, Video } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container } from '../ui/Container'
import { siteContent } from '../../data/content'

const benefitIcons: Record<string, LucideIcon> = {
  Mic,
  Video,
  Users,
  Award,
}

export const SpeakerSection = () => {
  const { speakAtSafeskillz } = siteContent

  return (
    <section id="speak" className="section-padding bg-white dark:bg-dark-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
              {speakAtSafeskillz.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {speakAtSafeskillz.headline}
            </h2>
            <p className="text-lg text-muted dark:text-gray-300 leading-relaxed mb-8">
              {speakAtSafeskillz.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={speakAtSafeskillz.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow"
              >
                {speakAtSafeskillz.buttonText}
                <ExternalLink size={18} />
              </a>
              <Link
                to={speakAtSafeskillz.secondaryButtonHref}
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
              >
                {speakAtSafeskillz.secondaryButtonText}
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Why speak with us
            </h3>
            <ul className="space-y-5">
              {speakAtSafeskillz.benefits.map((benefit) => {
                const Icon = benefitIcons[benefit.icon] ?? Mic
                return (
                  <li key={benefit.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{benefit.title}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}