interface AllianceCardProps {
  name: string
  description: string
  logo: string
}

const partnerColors: Record<string, { bg: string; text: string }> = {
  'csi-logo.png': { bg: '#1e3a5f', text: '#ffffff' },
  'csa-logo.png': { bg: '#14532d', text: '#ffffff' },
  'opswat-logo.png': { bg: '#1d4ed8', text: '#ffffff' },
  'cloudseals-logo.png': { bg: '#4f46e5', text: '#ffffff' },
}

export const AllianceCard = ({ name, description, logo }: AllianceCardProps) => {
  const colors = partnerColors[logo] || { bg: '#1e3a8a', text: '#ffffff' }
  const initials = name
    .split(/[\s(]/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div className="card p-8 text-center h-full flex flex-col items-center gap-5 hover:shadow-xl transition-shadow duration-300">
      {/* Logo area */}
      <div
        className="w-40 h-20 mx-auto rounded-xl flex items-center justify-center overflow-hidden shadow-md"
        style={{ backgroundColor: colors.bg }}
      >
        <img
          src={`/${logo}`}
          alt={name}
          className="w-full h-full object-contain p-2"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            const parent = target.parentElement
            if (parent) {
              parent.innerHTML = `<span style="color:${colors.text};font-size:2rem;font-weight:800;letter-spacing:0.05em;">${initials}</span>`
            }
          }}
        />
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
    </div>
  )
}