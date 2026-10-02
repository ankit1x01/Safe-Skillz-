import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Binary,
  Calendar,
  CheckCircle2,
  Clock,
  Cloud,
  Container,
  Cpu,
  ExternalLink,
  Factory,
  Flag,
  Globe,
  Gift,
  HeartPulse,
  Landmark,
  Laptop,
  Lock,
  MapPin,
  Mic,
  Network,
  Search,
  Server,
  ShieldCheck,
  Swords,
  TrainFront,
  Trophy,
  Users,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container as ContainerLayout } from '../components/ui/Container'
import { CTAStrip } from '../components/home/CTAStrip'
import { SEO } from '../components/seo/SEO'
import {
  CIDX_START,
  cidxAgenda,
  cidxEvent,
  cidxOverview,
  cidxPillars,
  cidxSectors,
  cidxSpeakersTBA,
  cidxWhoShouldAttend,
  ctfCategories,
  ctfEligibility,
  ctfOfflineKit,
  ctfOverview,
  ctfRounds,
} from '../data/cidx'

const sectorIcons: Record<string, LucideIcon> = {
  Zap,
  Factory,
  TrainFront,
  Container,
  Cloud,
  HeartPulse,
  Landmark,
}

const ctfRoundIcons: Record<string, LucideIcon> = {
  Laptop,
  Users,
}

const ctfCategoryIcons: Record<string, LucideIcon> = {
  Cpu,
  Globe,
  Network,
  Search,
  Lock,
  Server,
  Binary,
  Flag,
}

const isUpcoming = new Date(CIDX_START).getTime() > Date.now()

const Countdown = () => {
  const target = useMemo(() => new Date(CIDX_START).getTime(), [])
  const [now, setNow] = useState(() => Date.now())
  const [done, setDone] = useState(() => target <= Date.now())

  useEffect(() => {
    if (target <= Date.now()) return
    const id = window.setInterval(() => {
      const current = Date.now()
      setNow(current)
      if (current >= target) {
        setDone(true)
        window.clearInterval(id)
      }
    }, 1000)
    return () => window.clearInterval(id)
  }, [target])

  if (done) {
    return (
      <div className="text-center">
        <p className="text-white/90 text-lg font-semibold">
          CIDX 2026 is live — the programme is running now.
        </p>
      </div>
    )
  }

  const diff = Math.max(0, target - now)
  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)
  const seconds = Math.floor((diff % 60000) / 1000)

  const units = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ]

  return (
    <div>
      <p className="text-center text-white/80 text-sm font-semibold uppercase tracking-wider mb-4">
        Starts in
      </p>
      <div className="grid grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="bg-white/10 backdrop-blur-sm rounded-xl py-4 text-center border border-white/20"
          >
            <div className="text-3xl md:text-4xl font-bold text-white tabular-nums">
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-xs text-white/70 mt-1 uppercase tracking-wide">{unit.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const Cidx = () => {
  return (
    <div>
      <SEO
        title="OPSWAT CIDX — Critical Infra Defense Experience | SafeSkillz Limited"
        description="CIDX 2026 on Saturday 7 November — a full day of expert keynotes, a live Capture the Flag, the Arsenal zone and panel discussions on critical infrastructure defence. Co-hosted by SafeSkillz, supported by Cyber Secured India."
        keywords="CIDX 2026, critical infrastructure defence, OT security, ICS security, CTF London, capture the flag, OPSWAT CIDX, critical infra defense experience, cyber security event UK"
        image={cidxEvent.ogImage}
        url="https://safeskillz.co.uk/events/cidx"
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-accent">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <ContainerLayout className="relative z-10 py-16 lg:py-20">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-white/90 font-semibold mb-8 hover:gap-3 transition-all duration-200 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Events
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="text-white">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-5 animate-fade-in">
                {isUpcoming ? cidxEvent.eyebrow : 'Event in progress'}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-slide-up">
                {cidxEvent.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-5 font-medium tracking-wide animate-slide-up">
                {cidxEvent.tagline}
              </p>
              <p className="text-base text-gray-100 mb-8 leading-relaxed">{cidxEvent.summary}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={cidxEvent.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                >
                  Register Free on Eventbrite
                  <ExternalLink size={18} />
                </a>
                <a
                  href="#agenda"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
                >
                  View Full Agenda
                </a>
              </div>

              <p className="mt-5 text-sm text-gray-200">
                {cidxEvent.coHostedBy} · Supported by {cidxEvent.supportedBy}
              </p>
            </div>

            {/* Clean image — no overlay so the artwork stays fully visible */}
            <div className="animate-fade-in">
              <img
                src={cidxEvent.heroImage}
                alt="OPSWAT CIDX — Critical Infra Defense Experience"
                className="w-full h-auto rounded-2xl shadow-2xl ring-1 ring-white/20 bg-white"
                loading="eager"
              />
            </div>
          </div>
        </ContainerLayout>
      </section>

      {/* KEY DETAIL STRIP */}
      <section className="py-10 -mt-8 relative z-20">
        <ContainerLayout>
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border-2 border-primary">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm text-gray-500">Date</div>
                <div className="font-bold text-gray-900">{cidxEvent.dateLabel}</div>
              </div>
              <div>
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm text-gray-500">Time</div>
                <div className="font-bold text-gray-900">{cidxEvent.timeLabel}</div>
                <div className="text-xs text-gray-500 mt-1">{cidxEvent.duration}</div>
              </div>
              <div>
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm text-gray-500">Venue</div>
                <div className="font-bold text-gray-900">{cidxEvent.venue}</div>
                <div className="text-xs text-gray-500 mt-1">{cidxEvent.venueNote}</div>
              </div>
              <div>
                <Gift className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm text-gray-500">Entry</div>
                <div className="font-bold text-primary">{cidxEvent.fee}</div>
              </div>
            </div>
          </div>
        </ContainerLayout>
      </section>

      {/* COUNTDOWN */}
      <section className="py-12 bg-gradient-to-br from-primary-dark via-primary to-accent">
        <ContainerLayout>
          <Countdown />
        </ContainerLayout>
      </section>

      {/* MAIN CONTENT + SIDEBAR */}
      <section className="section-padding bg-white">
        <ContainerLayout>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Overview */}
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About CIDX</h2>
              <div className="space-y-4 mb-12">
                {cidxOverview.map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Pillars */}
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Learn, Experience, Compete, Connect, Recognise</h2>
              <p className="text-gray-600 mb-6">
                Five pillars run through the whole day.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {cidxPillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-xl border border-primary/15 bg-primary/5 hover:border-primary/40 transition-colors"
                  >
                    <h3 className="text-lg font-bold text-primary mb-1.5">{pillar.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>

              {/* Sectors */}
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Critical Sectors Covered</h2>
              <p className="text-gray-600 mb-6">
                CIDX focuses on the systems that keep the world running.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {cidxSectors.map((sector) => {
                  const Icon = sectorIcons[sector.icon] ?? ShieldCheck
                  return (
                    <div
                      key={sector.title}
                      className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-gray-100"
                    >
                      <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-gray-800">{sector.title}</span>
                    </div>
                  )
                })}
              </div>

              {/* AGENDA */}
              <div id="agenda" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Full Agenda</h2>
                <p className="text-gray-600 mb-6">
                  {cidxEvent.timeNote}
                </p>
                <div className="space-y-3 mb-4">
                  {cidxAgenda.map((item, i) => (
                    <div
                      key={`${item.time}-${item.title}-${i}`}
                      className={`flex items-start gap-4 p-4 rounded-xl border ${
                        item.parallel
                          ? 'bg-accent/5 border-accent/25'
                          : 'bg-surface border-gray-100'
                      }`}
                    >
                      <div className="flex-shrink-0 px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-full whitespace-nowrap">
                        {item.time}
                        {item.endTime ? ` – ${item.endTime}` : ''}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {item.title}
                          {item.parallel && (
                            <span className="ml-2 text-[10px] font-bold uppercase tracking-wide text-accent bg-accent/10 px-2 py-0.5 rounded-full align-middle">
                              Parallel track
                            </span>
                          )}
                        </p>
                        {item.detail && (
                          <p className="text-sm text-gray-500 mt-0.5">{item.detail}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mb-12">
                  Agenda timings and speakers are subject to change. CTF and Arsenal run concurrently
                  between 01:00 PM and 03:30 PM — you choose your track.
                </p>
              </div>

              {/* ── CTF COMPETITION ── */}
              <div id="ctf" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  The CIDX Capture the Flag
                </h2>
                <p className="text-lg text-muted mb-6">{ctfOverview[0]}</p>
                <p className="text-gray-600 mb-8">{ctfOverview[1]}</p>

                {/* Rounds */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {ctfRounds.map((round) => {
                    const Icon = ctfRoundIcons[round.icon] ?? Swords
                    return (
                      <div
                        key={round.id}
                        className="flex flex-col rounded-2xl border-2 border-primary bg-white overflow-hidden"
                      >
                        <div className="bg-gradient-to-br from-primary-dark to-primary px-6 py-5 text-white">
                          <div className="flex items-center gap-3 mb-2">
                            <Icon className="w-6 h-6" />
                            <span className="text-xs font-bold uppercase tracking-wider opacity-90">
                              {round.round}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-1">{round.name}</h3>
                          <p className="text-white/90 text-sm font-medium">{round.date}</p>
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                          <span className="self-start px-3 py-1 mb-4 text-xs font-bold rounded-full bg-primary/10 text-primary">
                            {round.status}
                          </span>
                          <p className="text-gray-600 leading-relaxed mb-5">{round.description}</p>
                          <ul className="space-y-2.5 mt-auto">
                            {round.bullets.map((bullet) => (
                              <li key={bullet} className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                                <span className="text-sm text-gray-700">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <a
                  href={cidxEvent.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow mb-12"
                >
                  Register for CIDX &amp; qualify for the Final <ExternalLink size={18} />
                </a>

                {/* Categories */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Challenge categories</h3>
                <p className="text-gray-600 mb-6">
                  Both rounds draw on the same category set, so Round 1 is a fair preview of the final.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {ctfCategories.map((category) => {
                    const Icon = ctfCategoryIcons[category.icon] ?? Swords
                    return (
                      <div
                        key={category.title}
                        className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-gray-100"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{category.title}</p>
                          <p className="text-sm text-gray-500 leading-relaxed">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Eligibility + offline kit */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl border border-primary/15 bg-primary/5">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Who can enter</h3>
                    <ul className="space-y-2.5">
                      {ctfEligibility.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl border border-gray-200 bg-white">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Preparing for the offline final
                    </h3>
                    <ul className="space-y-2.5">
                      {ctfOfflineKit.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* WHO SHOULD ATTEND */}
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Who Should Attend</h2>
              <p className="text-gray-600 mb-6">
                Whether you are a seasoned security professional or just starting to explore critical
                infrastructure protection, CIDX has something for you.
              </p>
              <div className="space-y-3 mb-12">
                {cidxWhoShouldAttend.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-4 rounded-xl border border-primary/10 bg-primary/5"
                  >
                    <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* SPEAKERS TBA */}
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Speakers &amp; Panellists</h2>
              <p className="text-gray-600 mb-6">
                Confirmed speakers and panellists will be announced closer to the event.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cidxSpeakersTBA.map((slot) => (
                  <div
                    key={`${slot.role}-${slot.slot}`}
                    className="flex items-center gap-4 p-5 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center">
                      <Mic className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{slot.role}</p>
                      <p className="text-sm text-gray-500">{slot.slot}</p>
                      <p className="text-xs font-semibold text-primary mt-0.5">To be announced</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-1">
              <div id="register" className="scroll-mt-24 sticky top-24 space-y-5">
                <div className="p-6 rounded-2xl border-2 border-primary bg-blue-50 space-y-5">
                  <h3 className="text-lg font-bold text-gray-900">Event Details</h3>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="font-semibold text-primary">{cidxEvent.dateLabel}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Time</p>
                      <p className="font-semibold text-gray-900">{cidxEvent.timeLabel}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{cidxEvent.timeNote}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Venue</p>
                      <p className="font-semibold text-gray-900">{cidxEvent.venue}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{cidxEvent.venueNote}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Gift className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Entry</p>
                      <p className="font-semibold text-gray-900">{cidxEvent.fee}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Co-hosted by</p>
                      <p className="font-semibold text-gray-900">{cidxEvent.coHostedBy}</p>
                      <p className="text-xs text-gray-500 mt-0.5">Supported by {cidxEvent.supportedBy}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Recognition</p>
                      <p className="font-semibold text-gray-900">Cyber Security Awards — Cyber &amp; OT</p>
                    </div>
                  </div>

                  <a
                    href={cidxEvent.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-4 rounded-xl transition-colors duration-200 shadow-lg mt-2"
                  >
                    Register Free <ExternalLink size={18} />
                  </a>
                  <p className="text-xs text-gray-500 text-center">
                    Seats are limited — secure your spot today.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-surface border border-gray-100">
                  <h3 className="text-base font-bold text-gray-900 mb-3">Also on our events page</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/events" className="text-primary font-semibold hover:underline">
                        Cyber Challenge UK 2026 — event recap
                      </Link>
                    </li>
                    <li>
                      <Link to="/work" className="text-primary font-semibold hover:underline">
                        Our event coverage worldwide
                      </Link>
                    </li>
                    <li>
                      <Link to="/trainings" className="text-primary font-semibold hover:underline">
                        OT &amp; ICS security training
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ContainerLayout>
      </section>

      {/* CLOSING REGISTER CTA */}
      <section className="py-16 gradient-bg">
        <ContainerLayout>
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join us at CIDX 2026</h2>
            <p className="text-lg text-gray-100 mb-8">
              {cidxEvent.dateLabel} · {cidxEvent.timeLabel} · {cidxEvent.venue} · Free entry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={cidxEvent.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary font-bold px-8 py-4 rounded-xl transition-colors duration-200 shadow-xl"
              >
                Register Free on Eventbrite <ExternalLink size={18} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white text-white hover:bg-white hover:text-primary font-semibold transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </ContainerLayout>
      </section>

      <CTAStrip />
    </div>
  )
}