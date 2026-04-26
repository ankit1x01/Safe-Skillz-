import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '../ui/Button'

interface FormData {
  name: string
  email: string
  organisation: string
  message: string
}

const generateCaptcha = () => {
  const a = Math.floor(Math.random() * 10) + 1
  const b = Math.floor(Math.random() * 10) + 1
  return { a, b, answer: a + b }
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
  const [captcha, setCaptcha] = useState(generateCaptcha)
  const [captchaInput, setCaptchaInput] = useState('')
  const [captchaError, setCaptchaError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate captcha
    if (parseInt(captchaInput) !== captcha.answer) {
      setCaptchaError(true)
      setCaptcha(generateCaptcha())
      setCaptchaInput('')
      return
    }

    setCaptchaError(false)
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
      setCaptchaInput('')
      setCaptcha(generateCaptcha())
      setTimeout(() => setShowSuccess(false), 5000)
    }, 1000)
  }

  if (showSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
          <Send className="w-8 h-8 text-success" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-gray-600">
          Your email client should have opened with your message. We'll get back to you soon!
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="organisation" className="block text-sm font-medium text-gray-700 mb-2">
          Organisation
        </label>
        <input
          type="text"
          id="organisation"
          name="organisation"
          value={formData.organisation}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical"
          placeholder="Tell us about your training requirements..."
        ></textarea>
      </div>

      {/* Captcha */}
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Security Check *
        </label>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-white border-2 border-primary rounded-lg text-gray-900 font-bold text-lg select-none min-w-fit">
            {captcha.a} + {captcha.b} = ?
          </div>
          <input
            type="number"
            value={captchaInput}
            onChange={(e) => {
              setCaptchaInput(e.target.value)
              setCaptchaError(false)
            }}
            placeholder="Answer"
            required
            className="w-28 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
          />
          <button
            type="button"
            onClick={() => {
              setCaptcha(generateCaptcha())
              setCaptchaInput('')
              setCaptchaError(false)
            }}
            className="text-sm text-primary hover:underline"
          >
            Refresh
          </button>
        </div>
        {captchaError && (
          <p className="mt-2 text-sm text-red-600">
            Incorrect answer. Please try again.
          </p>
        )}
      </div>

      <Button type="submit" size="lg" loading={isSubmitting} className="w-full">
        <Send size={20} className="mr-2" />
        Send Message
      </Button>
    </form>
  )
}