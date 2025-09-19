interface AllianceCardProps {
  name: string
  description: string
  logo: string
}

export const AllianceCard = ({ name, description, logo }: AllianceCardProps) => {
  return (
    <div className="card p-6 text-center h-full flex flex-col">
      <div className="flex-1">
        <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <img
            src={`/${logo}`}
            alt={name}
            className="w-16 h-16 object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              const parent = target.parentElement
              if (parent) {
                parent.innerHTML = `<span class="text-2xl font-bold text-primary">${name.charAt(0)}</span>`
              }
            }}
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )
}