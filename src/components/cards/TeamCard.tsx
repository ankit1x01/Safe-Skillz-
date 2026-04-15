import { Linkedin } from 'lucide-react'

interface TeamCardProps {
  name: string
  role: string
  image: string
  linkedinUrl: string
  bio?: string
}

export const TeamCard = ({ name, role, image, linkedinUrl, bio }: TeamCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 text-center flex flex-col items-center transition-all hover:shadow-md">
      <div className="w-28 h-28 mb-4 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 shadow-sm">
        <img
          src={`/${image}`}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            const parent = target.parentElement
            if (parent) {
              parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-3xl font-bold text-primary">${name.charAt(0)}</div>`
            }
          }}
        />
      </div>

      <div className="flex flex-col items-center justify-between flex-1 w-full">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{name}</h3>
          <p className="text-primary font-medium text-sm mb-3">{role}</p>
          {bio && (
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
              {bio}
            </p>
          )}
        </div>
        
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 bg-[#0077b5] text-white rounded-lg hover:bg-[#006097] transition-colors mt-auto"
          aria-label={`${name}'s LinkedIn`}
        >
          <Linkedin size={20} fill="currentColor" strokeWidth={0} />
        </a>
      </div>
    </div>
  )
}