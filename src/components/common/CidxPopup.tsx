import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, X } from 'lucide-react'
import { CIDX_START, cidxEvent } from '../../data/cidx'

const STORAGE_KEY = 'safeskillz:cidx-popup-seen'
const DELAY_MS = 1000

const alreadySeen = () => {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return true
  }
}

const markSeen = () => {
  try {
    sessionStorage.setItem(STORAGE_KEY, '1')
  } catch {
    /* sessionStorage unavailable */
  }
}

export const CidxPopup = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Countdown timer logic
  const target = useMemo(() => new Date(CIDX_START).getTime(), [])
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    if (target <= Date.now()) return
    const id = window.setInterval(() => {
      setNow(Date.now())
    }, 1000)
    return () => window.clearInterval(id)
  }, [target])

  const diff = Math.max(0, target - now)
  const isLive = diff === 0
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / 1000 / 60) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  const close = () => {
    markSeen()
    setIsOpen(false)
  }

  useEffect(() => {
    if (alreadySeen()) return
    const timer = window.setTimeout(() => setIsOpen(true), DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cidx-popup-title"
    >
      {/* Backdrop with subtle blur */}
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300"
        onClick={close}
        aria-hidden="true"
      />

      {/* Ambient soft glow behind poster */}
      <div
        className="absolute w-[500px] h-[350px] sm:w-[680px] sm:h-[450px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Poster Modal Container - Zero scrolling */}
      <div className="relative w-full max-w-2xl lg:max-w-3xl rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-slate-700/60 shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_50px_rgba(37,99,235,0.22)] transition-all animate-fade-in flex flex-col">
        <h2 id="cidx-popup-title" className="sr-only">
          {cidxEvent.title}
        </h2>

        {/* Close Button - Frosted Glass floating top right */}
        <button
          onClick={close}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 p-2 sm:p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-900 text-white/90 hover:text-white border border-white/20 backdrop-blur-md shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
          aria-label="Close event announcement"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Poster Image - Clean, uncropped and crisp */}
        <Link
          to="/events/cidx"
          onClick={close}
          className="relative w-full block bg-slate-950 overflow-hidden cursor-pointer group"
          title="Click to view CIDX event details"
        >
          <img
            src={cidxEvent.heroImage}
            alt="OPSWAT CIDX Europe 2026 - Critical Infrastructure Defense Experience"
            className="w-full h-auto block select-none transition-transform duration-300 group-hover:scale-[1.01]"
          />
          <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-300 pointer-events-none" />
        </Link>

        {/* Action Bar / Countdown & CTA Footer */}
        <div className="p-3 sm:p-4 md:p-4.5 bg-gradient-to-b from-slate-900/98 via-slate-900 to-slate-950 border-t border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Live Countdown Timer */}
          <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase mb-1">
              <span className="flex h-2 w-2 relative flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-white font-bold">Free Entry</span>
              <span className="text-slate-600">•</span>
              <span className="text-blue-400 font-medium">
                {isLive ? 'Event is Live' : 'Starts In'}
              </span>
            </div>

            {isLive ? (
              <div className="text-emerald-400 font-bold text-sm tracking-wide">
                Happening Today!
              </div>
            ) : (
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="flex flex-col items-center bg-slate-800/90 border border-slate-700/80 rounded-lg px-2 sm:px-2.5 py-1 min-w-[38px] sm:min-w-[44px] shadow-inner">
                  <span className="text-sm sm:text-base font-bold text-white tabular-nums leading-none">
                    {String(days).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] text-slate-400 uppercase tracking-wider mt-0.5">Days</span>
                </div>
                <span className="text-slate-600 font-bold text-xs">:</span>
                <div className="flex flex-col items-center bg-slate-800/90 border border-slate-700/80 rounded-lg px-2 sm:px-2.5 py-1 min-w-[38px] sm:min-w-[44px] shadow-inner">
                  <span className="text-sm sm:text-base font-bold text-white tabular-nums leading-none">
                    {String(hours).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] text-slate-400 uppercase tracking-wider mt-0.5">Hours</span>
                </div>
                <span className="text-slate-600 font-bold text-xs">:</span>
                <div className="flex flex-col items-center bg-slate-800/90 border border-slate-700/80 rounded-lg px-2 sm:px-2.5 py-1 min-w-[38px] sm:min-w-[44px] shadow-inner">
                  <span className="text-sm sm:text-base font-bold text-white tabular-nums leading-none">
                    {String(minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] text-slate-400 uppercase tracking-wider mt-0.5">Mins</span>
                </div>
                <span className="text-slate-600 font-bold text-xs">:</span>
                <div className="flex flex-col items-center bg-slate-800/90 border border-slate-700/80 rounded-lg px-2 sm:px-2.5 py-1 min-w-[38px] sm:min-w-[44px] shadow-inner">
                  <span className="text-sm sm:text-base font-bold text-cyan-400 tabular-nums leading-none">
                    {String(seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] text-cyan-400/80 uppercase tracking-wider mt-0.5">Secs</span>
                </div>
              </div>
            )}
          </div>

          {/* Two CTA Buttons: Register for Free & Event Details */}
          <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <a
              href={cidxEvent.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 whitespace-nowrap"
            >
              <span>Register for Free</span>
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            <Link
              to="/events/cidx"
              onClick={close}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-600 font-semibold text-xs sm:text-sm backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 whitespace-nowrap"
            >
              <span>Event Details</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}