interface AllianceCardProps {
  name: string
  description: string
  logo: string
  website?: string
}

export const AllianceCard = ({ name, description, logo, website }: AllianceCardProps) => {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">

      {/* Logo */}
      <div className="w-64 h-44 flex items-center justify-center mb-6">
        <img
          src={`/${logo}`}
          alt={name}
          className="max-w-full max-h-full object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            const parent = target.parentElement
            if (parent) {
              parent.innerHTML = `
                <div class="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-3xl font-bold text-blue-600">
                  ${name.charAt(0)}
                </div>
              `
            }
          }}
        />
      </div>

      {/* Name — clickable if website exists */}
      {website ? (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-bold text-primary hover:underline mb-2"
        >
          {name}
        </a>
      ) : (
        <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>
      )}

      {/* Description */}
      <p className="text-gray-500 leading-relaxed text-sm mb-4">{description}</p>

      {/* Visit Website button */}
      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Visit Website
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}

    </div>
  )
}