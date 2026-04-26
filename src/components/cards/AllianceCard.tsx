interface AllianceCardProps {
  name: string
  description: string
  logo: string
}

export const AllianceCard = ({ name, description, logo }: AllianceCardProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">

      {/* Logo — no background, transparent */}
      <div className="w-64 h-44 flex items-center justify-center mb-4">
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
                <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                  ${name.charAt(0)}
                </div>
              `
            }
          }}
        />
      </div>

      {/* Name */}
      <h3 className="text-base font-bold text-gray-900 mb-2">{name}</h3>

      {/* Description */}
      <p className="text-gray-500 leading-relaxed text-sm">{description}</p>

    </div>
  )
}