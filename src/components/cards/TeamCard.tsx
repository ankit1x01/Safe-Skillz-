interface TeamCardProps {
  name: string
  role: string
  bio: string
  image: string
  location?: string
}

export const TeamCard = ({ name, role, bio, image, location }: TeamCardProps) => {
  return (
    <div className="card p-6 text-center h-full flex flex-col">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={`/${image}`}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            const parent = target.parentElement
            if (parent) {
              parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-2xl font-bold text-primary">${name.charAt(0)}</div>`
            }
          }}
        />
      </div>

      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{name}</h3>
        <p className="text-primary font-medium mb-1">
          {role}
          {location && <span className="text-muted ml-1">• {location}</span>}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{bio}</p>
      </div>
    </div>
  )
}