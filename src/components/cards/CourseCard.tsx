import { Shield, Target, Code, Cloud, Users, FileText, Search, Award } from 'lucide-react'

const iconMap = {
  Shield,
  Target,
  Code,
  Cloud,
  Users,
  FileText,
  Search,
  Award,
}

interface CourseCardProps {
  title: string
  courses: string[]
  icon: string
  note?: string
}

export const CourseCard = ({ title, courses, icon, note }: CourseCardProps) => {
  const Icon = iconMap[icon as keyof typeof iconMap] || Shield

  return (
    <div className="card p-6 h-full">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>

      <ul className="space-y-2 mb-4">
        {courses.map((course, index) => (
          <li key={index} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span>{course}</span>
          </li>
        ))}
      </ul>

      {note && (
        <div className="mt-4 p-3 bg-accent/10 rounded-lg">
          <p className="text-sm text-gray-700 dark:text-gray-300">{note}</p>
        </div>
      )}
    </div>
  )
}