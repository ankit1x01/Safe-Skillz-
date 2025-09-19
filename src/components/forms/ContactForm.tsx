import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '../ui/Button'

interface FormData {
  name: string
  email: string
  organisation: string
  message: string
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organisation: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const subject = encodeURIComponent(`Training Inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganisation: ${formData.organisation}\n\nMessage:\n${formData.message}`
    )
    const mailtoUrl = `mailto:info@safeskillz.co.uk?subject=${subject}&body=${body}`

    window.location.href = mailtoUrl

    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)
      setFormData({ name: '', email: '', organisation: '', message: '' })

      setTimeout(() => setShowSuccess(false), 5000)
    }, 1000)
  }

  if (showSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
          <Send className="w-8 h-8 text-success" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Message Sent!
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Your email client should have opened with your message. We'll get back to you soon!
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark-surface dark:text-white transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark-surface dark:text-white transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="organisation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Organisation
        </label>
        <input
          type="text"
          id="organisation"
          name="organisation"
          value={formData.organisation}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark-surface dark:text-white transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark-surface dark:text-white transition-colors resize-vertical"
          placeholder="Tell us about your training requirements..."
        ></textarea>
      </div>

      <Button type="submit" size="lg" loading={isSubmitting} className="w-full">
        <Send size={20} className="mr-2" />
        Send Message
      </Button>
    </form>
  )
}