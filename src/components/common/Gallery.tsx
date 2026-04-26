import { useState } from 'react'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'

interface GalleryEvent {
  id: string
  title: string
  tagline: string
  description: string
  coverImage: string
  images: string[]
}

interface GalleryProps {
  events: GalleryEvent[]
}

const ImageWithFallback = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <img
    src={`/${src}`}
    alt={alt}
    className={className}
    onError={(e) => {
      const target = e.target as HTMLImageElement
      target.src = ''
      target.style.display = 'none'
      const parent = target.parentElement
      if (parent) {
        parent.innerHTML = `
          <div class="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400 gap-2">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span class="text-xs">Image coming soon</span>
          </div>
        `
      }
    }}
  />
)

export const Gallery = ({ events }: GalleryProps) => {
  const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

// ── EVENT DETAIL VIEW ──
  if (selectedEvent) {
    return (
      <div className="animate-fade-in">

        {/* Back Button */}
        <button
          onClick={() => setSelectedEvent(null)}
          className="flex items-center gap-2 text-primary font-semibold mb-8 hover:gap-3 transition-all duration-200 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to All Events
        </button>

        {/* Event Header */}
        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3">
            Event
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {selectedEvent.title}
          </h2>
          <p className="text-lg text-primary font-medium mb-4">{selectedEvent.tagline}</p>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        {/* Cover image + description side by side */}
        <div className="flex flex-col lg:flex-row gap-8 items-start mb-12">

          {/* Cover image */}
          <div
            className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => setLightboxIndex(0)}
          >
            <div className="aspect-video overflow-hidden">
              <ImageWithFallback
                src={selectedEvent.coverImage}
                alt={selectedEvent.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Description */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">About this Event</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              {selectedEvent.description}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm text-gray-500">
                {selectedEvent.images.length} photo{selectedEvent.images.length > 1 ? 's' : ''} from this event
              </span>
            </div>
          </div>
        </div>

        {/* All images — 2 per row, no tagline */}
        {selectedEvent.images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedEvent.images.map((image, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300 relative"
                onClick={() => setLightboxIndex(index)}
              >
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={image}
                    alt={`${selectedEvent.title} photo ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Number badge */}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shadow-md">
                   {index + 1}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Back button at bottom */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <button
            onClick={() => setSelectedEvent(null)}
            className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to All Events
          </button>
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setLightboxIndex(null)}
            >
              <X size={32} />
            </button>

            {lightboxIndex > 0 && (
              <button
                className="absolute left-4 text-white hover:text-gray-300 transition-colors text-4xl font-bold"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex(lightboxIndex - 1)
                }}
              >
                ‹
              </button>
            )}

            <img
              src={`/${selectedEvent.images[lightboxIndex]}`}
              alt={`${selectedEvent.title} ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {lightboxIndex < selectedEvent.images.length - 1 && (
              <button
                className="absolute right-4 text-white hover:text-gray-300 transition-colors text-4xl font-bold"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex(lightboxIndex + 1)
                }}
              >
                ›
              </button>
            )}

            <div className="absolute bottom-4 text-white/70 text-sm">
              {lightboxIndex + 1} / {selectedEvent.images.length}
            </div>
          </div>
        )}
      </div>
    )
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => (
        <div
          key={event.id}
          onClick={() => setSelectedEvent(event)}
          className="group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30 hover:-translate-y-1"
        >
          {/* Cover Image */}
          <div className="aspect-video overflow-hidden relative bg-gray-100">
            <ImageWithFallback
              src={event.coverImage}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />

            {/* Image count badge */}
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-2.5 py-1 rounded-full shadow">
              {event.images.length} photo{event.images.length > 1 ? 's' : ''}
            </div>

            {/* Title overlay on image */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-bold text-lg leading-tight drop-shadow-lg">
                {event.title}
              </h3>
            </div>
          </div>

          {/* Card body */}
          <div className="p-4 bg-white">
            <p className="text-primary text-sm font-medium mb-1">{event.tagline}</p>
            <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
              {event.description}
            </p>
            <div className="mt-3 flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all duration-200">
              <span>View Event</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}