import { ReactNode } from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  children?: ReactNode
}

export const SectionHeading = ({
  title,
  subtitle,
  description,
  centered = false,
  children,
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted max-w-3xl mx-auto">{description}</p>
      )}
      {children}
    </div>
  )
}