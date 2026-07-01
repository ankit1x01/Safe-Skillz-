import { useState } from 'react'
import { Container } from '../components/ui/Container'
import { CTAStrip } from '../components/home/CTAStrip'
import { SEO } from '../components/seo/SEO'
import { ArrowLeft, Calendar, Clock, MapPin, ExternalLink, Users, Gift, Award } from 'lucide-react'

const REGISTER_LONDON = 'https://www.eventbrite.co.uk/e/opswat-academy-cyber-challenge-uk-2026-london-tickets-1991764393919'
const REGISTER_NEWPORT = 'https://www.eventbrite.co.uk/e/opswat-academy-cyber-challenge-uk-2026-newport-wales-tickets-1991711496702'

interface EventItem {
  id: string
  badge: string
  title: string
  tagline: string
  cover: string
  shortDesc: string
  fullDesc: string[]
  agenda: { time: string; title: string; detail?: string }[]
  highlights: string[]
}

const events: EventItem[] = [
  {
    id: 'movie-screening',
    badge: '🎬 Experience One',
    title: 'Into the Breach Movie Screening',
    tagline: 'A real-world look at cyber threats and critical infrastructure',
    cover: '/gisec-global/1746733553586.jpg',
    shortDesc: 'Watch the acclaimed cybersecurity documentary produced by Benny Czarny, exploring real-world cyber threats and modern defence strategies.',
    fullDesc: [
      'Kick off Cyber Challenge UK 2026 with a screening of "Into the Breach," the acclaimed cybersecurity documentary produced by Benny Czarny, CEO of OPSWAT.',
      'The film explores real-world cyber threats, critical infrastructure protection, industrial firewalls, data diodes, and the modern cyber defence strategies organisations rely on to stay secure.',
      'This session sets the stage for the day giving attendees a grounded, real-world understanding of why cybersecurity matters before diving into expert talks and the live CTF challenge.',
    ],
    agenda: [
      { time: '10:00 AM', title: 'Registration', detail: 'Check-in and welcome refreshments' },
      { time: '10:15 AM', title: 'Welcome Note' },
      { time: '10:25 AM', title: 'Into the Breach Screening', detail: 'Full documentary screening with introduction' },
    ],
    highlights: [
      'Printed hardcover copy of "Cybersecurity Upside Down" by Benny Czarny',
      'Real-world insight into critical infrastructure security',
      'Certificate of Participation',
    ],
  },
  {
    id: 'expert-talks',
    badge: '🎤 Experience Two',
    title: 'Expert Talk Sessions',
    tagline: 'Meet the experts shaping the future of cybersecurity',
    cover: '/infosecurity-europe/1719051294651.jpg',
    shortDesc: 'Learn from cybersecurity professionals including Irfan Shakeel, Jayson E. Street, and Serhii Kocherhan on emerging threats and career paths.',
    fullDesc: [
      'Hear directly from leading cybersecurity professionals as they discuss emerging threats, attack trends, defensive technologies, and career opportunities in the industry.',
      'Confirmed speakers include Irfan Shakeel, Jayson E. Street, and Serhii Kocherhan each bringing a distinct perspective from offensive security, awareness training, and threat research.',
      'This session is designed for students, IT professionals, and cybersecurity practitioners looking to deepen their understanding of where the industry is heading and how to build a career in it.',
    ],
    agenda: [
      { time: '10:25 AM', title: 'Keynote Speaker', detail: 'Irfan Shakeel' },
      { time: '11:00 AM', title: 'Industry Insights Panel', detail: 'Jayson E. Street & Serhii Kocherhan' },
      { time: '11:45 AM', title: 'Open Q&A', detail: 'Audience networking and questions' },
    ],
    highlights: [
      'Direct access to renowned cybersecurity speakers',
      'Bundle of 9 OPSWAT Academy certifications (worth $239) with ISC2 CPE Credits',
      'Networking opportunities with professionals',
    ],
  },
  {
    id: 'ctf-challenge',
    badge: '🏴 Experience Three',
    title: 'Capture The Flag (CTF) Challenge',
    tagline: 'Live system defense : turn curiosity into skill',
    cover: '/ctf-event/1746345968636.jpg',
    shortDesc: 'A hands-on, jeopardy-style CTF challenge for students, professionals, and enthusiasts — compete and win exciting prizes.',
    fullDesc: [
      'Put your skills to the test in an exciting hands-on, jeopardy-style Capture The Flag challenge designed for students, professionals, and cybersecurity enthusiasts of all levels.',
      'Compete against fellow participants in live system defense scenarios, applying everything from network fundamentals to exploitation techniques in a safe, controlled environment.',
      'No prior cybersecurity experience is required, this is the perfect place to take your first step into cybersecurity, learn, compete, and grow through real challenges.',
    ],
    agenda: [
      { time: '1:00 PM', title: 'CTF Briefing', detail: 'Rules, scoring, and team formation' },
      { time: '1:30 PM', title: 'Capture The Flag — Live', detail: 'Jeopardy-style challenges across multiple categories' },
      { time: '4:30 PM', title: 'Prize Giving & Closing', detail: 'Winners announced, certificates distributed' },
    ],
    highlights: [
      'Exciting prizes for challenge winners',
      'Certificate of Participation for all entrants',
      'Goodies and swag for every participant',
    ],
  },
]

export const Events = () => {
  const [selected, setSelected] = useState<EventItem | null>(null)

  // ── EVENT DETAIL VIEW ──
  if (selected) {
    return (
      <div>
        <SEO
          title={`${selected.title} | Cyber Challenge UK 2026 | SafeSkillz Limited`}
          description={selected.shortDesc}
          keywords="cyber challenge 2026, OPSWAT academy, cybersecurity event London, CTF challenge"
          url="https://safeskillz.co.uk/events"
        />

        {/* Hero */}
        <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-accent">
          <Container className="relative z-10">
            <button
              onClick={() => setSelected(null)}
              className="flex items-center gap-2 text-white/90 font-semibold mb-6 hover:gap-3 transition-all duration-200 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to All Events
            </button>
            <div className="text-white max-w-4xl">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 animate-fade-in">
                {selected.badge}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
                {selected.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 animate-slide-up">
                {selected.tagline}
              </p>
            </div>
          </Container>
        </section>

        {/* Content */}
        <section className="section-padding bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Main content */}
              <div className="lg:col-span-2">
                
                {/* Description */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Experience</h2>
                <div className="space-y-4 mb-10">
                  {selected.fullDesc.map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed text-base">{para}</p>
                  ))}
                </div>

                {/* Agenda */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Agenda</h2>
                <div className="space-y-3 mb-10">
                  {selected.agenda.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-gray-100">
                      <div className="flex-shrink-0 px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-full whitespace-nowrap">
                        {item.time}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        {item.detail && <p className="text-sm text-gray-500 mt-0.5">{item.detail}</p>}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Location Registration — only for event 1 */}
{selected.id === 'movie-screening' && (
  <div className="mb-10">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Location</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-6 rounded-2xl border-2 border-primary bg-primary/5 hover:bg-primary/10 transition-colors">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">🏙️</span>
          <div>
            <h3 className="text-lg font-bold text-gray-900">London</h3>
            <p className="text-sm text-gray-600">School of Mathematical Sciences, Queen Mary University of London, Mile End Rd, London E1 4NS</p>
            <p className="text-sm font-semibold text-primary mt-1">📅 04th July 2026 — 10:00 AM – 5:00 PM</p>
          </div>
        </div>
        <a
          href={REGISTER_LONDON}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white font-semibold px-4 py-3 rounded-xl transition-colors duration-200 shadow"
        >
          Register for London
          <ExternalLink size={16} />
        </a>
      </div>

      <div className="p-6 rounded-2xl border-2 border-accent bg-accent/5 hover:bg-accent/10 transition-colors">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">🏴󠁧󠁢󠁷󠁬󠁳󠁿</span>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Newport, Wales</h3>
            <p className="text-sm text-gray-600">Newport, Wales — venue details on registration page</p>
            <p className="text-sm font-semibold text-primary mt-1">📅 Date on registration page</p>
          </div>
        </div>
        <a
          href={REGISTER_NEWPORT}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-primary text-white font-semibold px-4 py-3 rounded-xl transition-colors duration-200 shadow"
        >
          Register for Newport
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  </div>
)}

                {/* Highlights */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Get</h2>
                <div className="space-y-3">
                  {selected.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-primary/10 bg-primary/5">
                      <Gift className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 p-6 rounded-2xl border-2 border-primary bg-blue-50 space-y-5">
                  <h3 className="text-lg font-bold text-gray-900">Event Details</h3>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="font-semibold text-primary">04th July 2026</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Time</p>
                      <p className="font-semibold text-gray-900">10:00 AM – 5:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Venue</p>
                      <p className="font-semibold text-gray-900">School of Mathematical Sciences, Queen Mary University of London, Mile End Rd, London E1 4NS</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Co-hosted by</p>
                      <p className="font-semibold text-gray-900">SafeSkillz, supported by Cyberscene</p>
                    </div>
                  </div>

                  {selected.id === 'movie-screening' ? (
  <div className="space-y-3 mt-2">
    <a
      href={REGISTER_LONDON}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 shadow"
    >
      🏙️ Register — London
      <ExternalLink size={16} />
    </a>
    <a
      href={REGISTER_NEWPORT}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-primary text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 shadow"
    >
      🏴󠁧󠁢󠁷󠁬󠁳󠁿 Register — Newport
      <ExternalLink size={16} />
    </a>
    <p className="text-xs text-gray-500 text-center">Seats are limited — secure your spot today.</p>
  </div>
) : (
  <>
    <a
      href={REGISTER_LONDON}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-4 rounded-xl transition-colors duration-200 shadow-lg mt-2"
    >
      Register Now
      <ExternalLink size={18} />
    </a>
    <p className="text-xs text-gray-500 text-center">Seats are limited — secure your spot today.</p>
  </>
)}

                </div>
              </div>
            </div>

            {/* Back button bottom */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <button
                onClick={() => setSelected(null)}
                className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200 group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Back to All Events
              </button>
            </div>
          </Container>
        </section>

        <CTAStrip />
      </div>
    )
  }

  // ── EVENTS GRID VIEW ──
  return (
    <div>
      <SEO
        title="Cyber Challenge UK 2026 | SafeSkillz Limited"
        description="Join Cyber Challenge UK 2026 — a full-day cybersecurity event featuring a movie screening, expert talks, and a live Capture The Flag challenge. Co-hosted by SafeSkillz."
        keywords="cyber challenge 2026, OPSWAT academy, cybersecurity event London, CTF, capture the flag"
        url="https://safeskillz.co.uk/events"
      />

      {/* Hero */}
      <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-accent">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <Container className="relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 animate-fade-in">
              04th July 2026 — London
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
              Cyber Challenge UK 2026
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 animate-slide-up">
              Watch, Learn & Hack. A full day of movie screening, expert insights, and live CTF — co-hosted by SafeSkillz.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { icon: Calendar, label: 'Date', value: '04 Jul 2026' },
                { icon: Clock, label: 'Time', value: '10AM – 5PM' },
                { icon: MapPin, label: 'Venue', value: 'Queen Mary, London' },
                { icon: Award, label: 'Format', value: 'In Person' },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <item.icon className="w-6 h-6 mx-auto mb-2 text-white/80" />
                  <div className="text-sm font-bold text-white">{item.value}</div>
                  <div className="text-xs text-gray-200">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3 Event Cards */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Three Experiences, One Day
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore the Event</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click any card below to see the full agenda, details, and registration link for that experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                onClick={() => setSelected(event)}
                className="group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30 hover:-translate-y-1 bg-white"
              >

                <div className="p-5">
                    <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                        {event.badge}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-primary text-sm font-medium mb-2">{event.tagline}</p>
                    <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed mb-4">
                    {event.shortDesc}
                  </p>
                  <div className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                    <span>View Details</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Register CTA */}
          <div className="text-center mt-16">
            <div className="inline-block p-8 bg-surface rounded-2xl border-2 border-primary shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Seats Are Limited</h3>
              <p className="text-gray-600 mb-6">Register now and be part of Cyber Challenge UK 2026.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a
    href={REGISTER_LONDON}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg"
  >
    🏙️ Register — London
    <ExternalLink size={18} />
  </a>
  <a
    href={REGISTER_NEWPORT}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-accent hover:bg-primary text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg"
  >
    🏴󠁧󠁢󠁷󠁬󠁳󠁿 Register — Newport
    <ExternalLink size={18} />
  </a>
</div>


            </div>
          </div>
        </Container>
      </section>

      <CTAStrip />
    </div>
  )
}