import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { Container } from '../ui/Container'
import { siteContent } from '../../data/content'

interface NextBatchNoticeProps {
  note?: string
  secondary?: { label: string; to: string }
}

export const NextBatchNotice = ({ note, secondary }: NextBatchNoticeProps) => {
  const { nextBatch } = siteContent

  return (
    <section className="pb-16 lg:pb-24 bg-white dark:bg-dark-background">
      <Container>
        <div className="max-w-4xl mx-auto p-8 md:p-10 rounded-2xl border-2 border-primary bg-blue-50 text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-5">
            {nextBatch.badge}
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Clock className="w-7 h-7 text-primary flex-shrink-0" />
            {nextBatch.headline}
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">{nextBatch.description}</p>

          {note && (
            <p className="text-sm font-semibold text-primary mb-8">{note}</p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg"
            >
              {nextBatch.buttonText}
            </Link>
            {secondary && (
              <Link
                to={secondary.to}
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
              >
                {secondary.label}
              </Link>
            )}
          </div>

          <p className="text-xs text-gray-500 mt-6">
            We will email you as soon as the next batch dates are confirmed.
          </p>
        </div>
      </Container>
    </section>
  )
}