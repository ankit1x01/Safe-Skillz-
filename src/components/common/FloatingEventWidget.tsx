import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Clock, ExternalLink, X, ChevronUp } from 'lucide-react'
import { CIDX_START, cidxEvent } from '../../data/cidx'

export const FloatingEventWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const location = useLocation()
  const widgetRef = useRef<HTMLDivElement>(null)

  // Live countdown timer calculation
  const target = useMemo(() => new Date(CIDX_START).getTime(), [])
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    if (target <= Date.now()) return
    const interval = window.setInterval(() => {
      setNow(Date.now())
    }, 1000)
    return () => window.clearInterval(interval)
  }, [target])

  const diff = Math.max(0, target - now)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / 1000 / 60) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  // Handle outside click & escape key to collapse
  useEffect(() => {
    if (!isExpanded) return

    const handleClickOutside = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsExpanded(false)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsExpanded(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isExpanded])

  // Hide widget if user is already on the dedicated CIDX event page or event page
  if (location.pathname === '/events/cidx' || location.pathname === '/events') {
    return null
  }

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 select-none font-sans flex flex-col items-end"
    >
      {!isExpanded ? (
        /* Collapsed Floating Pill Icon - Opens on hover or click */
        <button
          onMouseEnter={() => setIsExpanded(true)}
          onClick={() => setIsExpanded(true)}
          className="group relative flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-full bg-slate-950/90 hover:bg-slate-900 text-white backdrop-blur-xl border border-blue-500/40 hover:border-blue-400 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.7),0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-expanded="false"
          aria-label="Open upcoming event preview"
          title="Hover or click to view upcoming event banner & details"
        >
          {/* Subtle Ambient Radial Glow */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-25 group-hover:opacity-50 blur transition-opacity duration-300 -z-10" />

          {/* Glowing Green Live Pulse Dot */}
          <span className="flex h-2.5 w-2.5 relative flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>

          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wide">
            <span className="text-white font-bold">Upcoming</span>
          </div>

          <span className="text-blue-400/80 group-hover:text-blue-300 group-hover:-translate-y-0.5 transition-all duration-200">
            <ChevronUp className="w-3.5 h-3.5" />
          </span>
        </button>
      ) : (
        /* Expanded Floating Event Card */
        <div className="w-[calc(100vw-2rem)] max-w-[340px] sm:max-w-[390px] rounded-2xl overflow-hidden bg-slate-950/95 border border-slate-700/80 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(37,99,235,0.25)] backdrop-blur-2xl transition-all duration-300 animate-slide-up flex flex-col">
          {/* Card Header with Live Status & Close */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900/90 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-bold tracking-wider uppercase text-blue-400">
                Upcoming Event
              </span>
              <span className="text-slate-600 text-xs">•</span>
              <span className="text-[11px] text-slate-300 font-medium">7 Nov 2026</span>
            </div>

            <button
              onClick={() => setIsExpanded(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Minimize event preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Poster Banner Image - Clickable */}
          <Link
            to="/events/cidx"
            onClick={() => setIsExpanded(false)}
            className="relative w-full block bg-slate-950 overflow-hidden group cursor-pointer"
            title="Click to view CIDX event details"
          >
            <img
              src={cidxEvent.heroImage}
              alt="OPSWAT CIDX Europe 2026 - Critical Infrastructure Defense Experience"
              className="w-full h-auto object-cover block select-none transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors pointer-events-none" />
          </Link>

          {/* Countdown Timer Strip */}
          <div className="px-3.5 py-2 bg-slate-900/70 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
              <Clock className="w-3 h-3 text-blue-400" />
              <span>Starts in:</span>
            </div>

            <div className="flex items-center gap-1 text-xs font-bold text-white tabular-nums">
              <span className="bg-slate-800/90 border border-slate-700/60 px-1.5 py-0.5 rounded text-[11px] text-slate-200">
                {String(days).padStart(2, '0')}d
              </span>
              <span className="text-slate-600">:</span>
              <span className="bg-slate-800/90 border border-slate-700/60 px-1.5 py-0.5 rounded text-[11px] text-slate-200">
                {String(hours).padStart(2, '0')}h
              </span>
              <span className="text-slate-600">:</span>
              <span className="bg-slate-800/90 border border-slate-700/60 px-1.5 py-0.5 rounded text-[11px] text-slate-200">
                {String(minutes).padStart(2, '0')}m
              </span>
              <span className="text-slate-600">:</span>
              <span className="bg-slate-800/90 border border-slate-700/60 px-1.5 py-0.5 rounded text-[11px] text-cyan-400 font-bold">
                {String(seconds).padStart(2, '0')}s
              </span>
            </div>
          </div>

          {/* Action CTA Buttons */}
          <div className="p-3 bg-gradient-to-b from-slate-900/95 to-slate-950 border-t border-slate-800/80 flex items-center gap-2">
            <Link
              to="/events/cidx"
              onClick={() => setIsExpanded(false)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-md shadow-blue-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Event Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href={cidxEvent.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsExpanded(false)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white border border-slate-700 font-semibold text-xs transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Register Free</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
