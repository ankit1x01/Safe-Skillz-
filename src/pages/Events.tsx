import { useState } from 'react'
import { Container } from '../components/ui/Container'
import { CTAStrip } from '../components/home/CTAStrip'
import { SEO } from '../components/seo/SEO'
import { ArrowLeft, ExternalLink, Users, Gift, MapPin, Calendar, Clock } from 'lucide-react'

const REGISTER_LONDON = 'https://www.eventbrite.co.uk/e/opswat-academy-cyber-challenge-uk-2026-london-tickets-1991764393919'
const REGISTER_NEWPORT = 'https://www.eventbrite.co.uk/e/opswat-academy-cyber-challenge-uk-2026-newport-wales-tickets-1991711496702'

// ── SPEAKER DATA ──
const speakers = [
  {
    id: 'irfan',
    name: 'Irfan Shakeel',
    role: 'Vice President, OPSWAT Academy',
    photos: ['/events/irfan-1.jpeg', '/events/irfan-2.jpeg'],
    headline: 'Transforming Cybersecurity Education in the UK: Building the Next Generation of Critical Infrastructure Defenders',
    pullQuote: 'This shortage is not simply a recruitment challenge — it is becoming a national security concern.',
    sections: [
      {
        heading: 'The UK Cybersecurity Skills Crisis Demands Immediate Action',
        body: 'Cybersecurity has evolved far beyond protecting office networks and personal devices. Today, cyber attacks have the potential to disrupt power grids, healthcare systems, transportation networks, financial institutions, water treatment facilities, and government services. These sectors collectively form a nation\'s Critical Infrastructure — the backbone of modern society.',
        bold: 'Unfortunately, while cyber threats continue to grow in sophistication, the cybersecurity workforce is struggling to keep pace. Organisations across the United Kingdom and Europe face a significant shortage of qualified professionals, particularly those skilled in Operational Technology (OT), Industrial Control Systems (ICS), and Critical Infrastructure Protection (CIP).',
      },
      {
        heading: 'Why Critical Infrastructure Needs Specialised Cybersecurity Professionals',
        body: 'Traditional IT security focuses primarily on protecting business information systems. Critical Infrastructure, however, operates differently. Industrial environments rely on programmable logic controllers (PLCs), SCADA systems, sensors, industrial networks, and operational technologies that manage essential services.',
        bold: 'Unlike conventional IT systems, industrial environments cannot simply be rebooted or patched during business hours. They require cybersecurity professionals who understand both operational continuity and cyber defence.',
      },
      {
        heading: 'The Gap Between Certifications and Real-World Skills',
        body: 'The cybersecurity industry offers hundreds of certifications covering networking, cloud security, penetration testing, governance, digital forensics, and incident response. However, many professionals entering the workforce discover that certifications alone do not adequately prepare them for securing industrial environments.',
        bold: 'Organisations increasingly seek candidates who understand Operational Technology (OT), can protect Industrial Control Systems (ICS), and can respond to attacks affecting operational environments — a skillset that remains rare.',
      },
      {
        heading: 'A New Approach to Cybersecurity Education',
        body: 'Modern cybersecurity education must evolve beyond traditional classroom teaching. Future cybersecurity professionals need opportunities to learn from industry practitioners, work on realistic attack scenarios, participate in Capture The Flag (CTF) competitions, and understand real-world operational environments.',
        bold: 'Hands-on learning bridges the gap between academic knowledge and industry expectations.',
      },
      {
        heading: 'Creating an Ecosystem Rather Than Just Training',
        body: 'One of the biggest challenges facing the cybersecurity industry is that education often ends when the course finishes. Successful cybersecurity communities continue learning through professional networking, community events, technical workshops, mentorship, and industry collaboration.',
        bold: 'Building strong professional networks helps students transition into careers while encouraging continuous professional development.',
      },
      {
        heading: 'Conclusion',
        body: 'Cybersecurity is no longer solely an IT discipline — it is an essential pillar of national resilience. Bridging the growing cybersecurity skills gap requires more than additional courses. It demands practical learning, industry collaboration, accessible education, continuous professional development, and strong cybersecurity communities.',
        bold: 'The future of cybersecurity depends not only on better technology but also on better-trained people. Building that workforce starts today.',
      },
    ],
  },
  {
    id: 'manali',
    name: 'Manali Ahirrao',
    role: 'Vice President, Med-Tech Society, University of Nottingham',
    photos: ['/events/manali-1.jpeg'],
    headline: 'Preparing for Q-Day: Why Hybrid Post-Quantum Cryptography Transition Is the Need of the Hour',
    pullQuote: 'The question is no longer whether quantum computing will influence cybersecurity — it is when.',
    sections: [
      {
        heading: 'The Quantum Computing Revolution',
        body: 'For decades, modern cryptography has been the invisible foundation of our digital world. Every online banking transaction, confidential email, software update, digital signature, VPN connection, and HTTPS-secured website relies on mathematical problems that today\'s computers cannot solve efficiently.',
        bold: 'The emergence of quantum computing presents one of the most significant cybersecurity challenges ever faced. The organisations that begin preparing today will be far better positioned than those that wait for the technology to mature.',
      },
      {
        heading: 'Why Current Cryptography Is at Risk',
        body: 'The internet\'s trust model depends heavily on public-key algorithms such as RSA, Elliptic Curve Cryptography (ECC), Diffie-Hellman, and Public Key Infrastructure (PKI). These technologies protect secure communications across sectors including banking, healthcare, government, defence, cloud computing, and e-commerce.',
        bold: 'Sufficiently powerful quantum computers could execute algorithms capable of solving the mathematical problems that make RSA and ECC secure. Once those assumptions fail, encrypted communications, digital certificates, and authentication systems become vulnerable.',
      },
      {
        heading: 'The Threat Is Already Here: Harvest Now, Decrypt Later',
        body: 'One of the biggest misconceptions about quantum computing is that organisations only need to act after quantum computers become available. In reality, many threat actors have already adopted a strategy known as Harvest Now, Decrypt Later (HNDL).',
        bold: 'Sensitive encrypted data is intercepted and stored today. When cryptographically relevant quantum computers become available, the stored data can be decrypted retrospectively. For organisations responsible for long-lived sensitive information, the quantum threat has already begun.',
      },
      {
        heading: 'Why Hybrid Cryptography Is the Practical Approach',
        body: 'Replacing every cryptographic system overnight is unrealistic. This is why many cybersecurity experts recommend Hybrid Post-Quantum Cryptography. Rather than abandoning existing algorithms immediately, hybrid cryptography combines classical and post-quantum algorithms within the same cryptographic operation.',
        bold: 'Hybrid cryptography allows organisations to strengthen their security today while remaining compatible with existing technologies and preparing for the quantum future.',
      },
      {
        heading: 'What Organisations Should Do Today',
        body: 'Preparation does not require replacing every system immediately. Organisations should create a complete inventory of cryptographic assets, identify long-lived sensitive data, assess systems that depend on quantum-vulnerable cryptography, and develop a phased Post-Quantum Cryptography migration strategy aligned with business priorities.',
        bold: 'These practical steps help reduce future disruption while building long-term resilience.',
      },
      {
        heading: 'Conclusion',
        body: 'Every organisation that relies on digital trust must prepare for a future in which today\'s cryptographic assumptions can no longer be taken for granted. The transition to Post-Quantum Cryptography is a strategic transformation involving governance, architecture, compliance, vendor management, and business continuity.',
        bold: 'Organisations that begin planning now will have the flexibility to migrate methodically, minimise operational risk, and protect long-lived sensitive information before the arrival of Q-Day.',
      },
    ],
  },
  {
    id: 'jayson',
    name: 'Jayson E. Street',
    role: 'Swarm Fellow, Covert Swarm',
    photos: ['/events/jayson-1.jpeg'],
    headline: 'Stop Gatekeeping Yourself: The Biggest Obstacle to Your Cybersecurity Career Is You',
    pullQuote: 'The only meaningful comparison is between who you are today and who you were yesterday.',
    sections: [
      {
        heading: 'The Race Is Against Yesterday\'s You',
        body: 'One of the biggest mistakes professionals make is comparing themselves to others. We compare our first certification to someone else\'s tenth. We compare our first conference talk to a keynote speaker with decades of experience.',
        bold: 'Careers are not races against other people. Every certification earned, every lab completed, every failed interview contributes to personal growth. Progress is measured by how much you\'ve improved since you started.',
      },
      {
        heading: 'The Most Dangerous Gatekeeper Is Yourself',
        body: 'Cybersecurity professionals often talk about gatekeeping within the industry. However, external gatekeepers are rarely the biggest obstacle. The biggest gatekeeper is usually ourselves — waiting until we feel "ready" is a waiting game with no finish line.',
        bold: 'Many opportunities are lost before applications are even submitted — not because someone else rejected us, but because we rejected ourselves first.',
      },
      {
        heading: 'Everyone Experiences Self-Doubt',
        body: 'One of the most surprising realities about successful cybersecurity professionals is that many still experience imposter syndrome — before every presentation, before every engagement, before every major project.',
        bold: 'Confidence is not the absence of fear. Confidence is continuing anyway.',
      },
      {
        heading: 'Failure Is the Best Teacher',
        body: 'Success stories dominate social media. What rarely gets shared are the failures behind those achievements — failed interviews, rejected conference talks, unsuccessful penetration tests, projects that never launched.',
        bold: 'Every cybersecurity professional has experienced setbacks. The difference is that successful individuals refuse to let failure become their identity. Failure is feedback.',
      },
      {
        heading: 'Passion Matters More Than Perfection',
        body: 'Many aspiring professionals believe they need every certification before applying for a job. Technology evolves faster than anyone can keep up with. No one knows everything.',
        bold: 'The most valuable professionals are not those who memorise every technology — they are the ones who continuously learn, adapt, and solve problems. Cybersecurity rewards curiosity far more than perfection.',
      },
      {
        heading: 'Final Thoughts',
        body: 'The cybersecurity community needs more people who encourage others instead of discouraging them. It needs professionals willing to share knowledge rather than guard it. It needs individuals who measure success by the people they help, not the titles they hold.',
        bold: 'Don\'t let yourself become your own gatekeeper. The world doesn\'t need another perfect cybersecurity professional. It needs one more person willing to keep learning, keep failing, keep improving, and keep helping others.',
      },
    ],
  },
]

// ── EVENT DATA ──
interface EventItem {
  id: string
  badge: string
  title: string
  tagline: string
  shortDesc: string
  fullDesc: string[]
  agenda: { time: string; title: string; detail?: string }[]
  highlights: string[]
}

const events: EventItem[] = [
  {
    id: 'movie-screening',
    badge: '🎬 Experience One',
    title: 'Into the Breach — Movie Screening',
    tagline: 'A real-world look at cyber threats and critical infrastructure',
    shortDesc: 'Watch the acclaimed cybersecurity documentary produced by Benny Czarny, exploring real-world cyber threats and modern defence strategies.',
    fullDesc: [
      'Kick off Cyber Challenge UK 2026 with a screening of "Into the Breach," the acclaimed cybersecurity documentary produced by Benny Czarny, CEO of OPSWAT.',
      'The film explores real-world cyber threats, critical infrastructure protection, industrial firewalls, data diodes, and the modern cyber defence strategies organisations rely on to stay secure.',
      'This session sets the stage for the day — giving attendees a grounded, real-world understanding of why cybersecurity matters before diving into expert talks and the live CTF challenge.',
    ],
    agenda: [
      { time: '10:00 AM', title: 'Registration', detail: 'Check-in and welcome refreshments' },
      { time: '10:15 AM', title: 'Welcome Note' },
      { time: '10:25 AM', title: 'Into the Breach — Screening', detail: 'Full documentary screening with introduction' },
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
    shortDesc: 'Learn from cybersecurity professionals including Irfan Shakeel, Jayson E. Street, and Manali Ahirrao on emerging threats and career paths.',
    fullDesc: [
      'Hear directly from leading cybersecurity professionals as they discuss emerging threats, attack trends, defensive technologies, and career opportunities in the industry.',
      'Confirmed speakers include Irfan Shakeel, Jayson E. Street, and Manali Ahirrao — each bringing a distinct perspective from offensive security, awareness training, and quantum cryptography.',
      'This session is designed for students, IT professionals, and cybersecurity practitioners looking to deepen their understanding of where the industry is heading and how to build a career in it.',
    ],
    agenda: [
      { time: '10:25 AM', title: 'Keynote Speaker', detail: 'Irfan Shakeel — OPSWAT Academy' },
      { time: '11:00 AM', title: 'Industry Insights', detail: 'Jayson E. Street & Manali Ahirrao' },
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
    tagline: 'Live system defense — turn curiosity into skill',
    shortDesc: 'A hands-on, jeopardy-style CTF challenge for students, professionals, and enthusiasts — compete and win exciting prizes.',
    fullDesc: [
      'Put your skills to the test in an exciting hands-on, jeopardy-style Capture The Flag challenge designed for students, professionals, and cybersecurity enthusiasts of all levels.',
      'Compete against fellow participants in live system defense scenarios, applying everything from network fundamentals to exploitation techniques in a safe, controlled environment.',
      'No prior cybersecurity experience is required — this is the perfect place to take your first step into cybersecurity, learn, compete, and grow through real challenges.',
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

// ── LONDON RECAP PAGE ──
const LondonRecap = ({ onBack }: { onBack: () => void }) => (
  <div>
    <SEO
      title="London Event Recap | Cyber Challenge UK 2026 | SafeSkillz"
      description="Recap of the Cyber Challenge UK 2026 London event — speakers, insights, and highlights."
      keywords="cyber challenge 2026 london recap, OPSWAT academy, cybersecurity speakers"
      url="https://safeskillz.co.uk/events"
    />

    {/* Hero */}
    <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-accent">
      <Container className="relative z-10">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white/90 font-semibold mb-6 hover:gap-3 transition-all duration-200 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Event
        </button>
        <div className="text-white max-w-4xl">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            🏙️ London — Event Recap
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Cyber Challenge UK 2026 — London
          </h1>
          <p className="text-xl text-gray-100 animate-slide-up">
            An inside look at the speakers, insights, and highlights from the London event.
          </p>
        </div>
      </Container>
    </section>

    {/* Speaker Articles */}
    <section className="section-padding bg-white">
      <Container>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">Our Speakers</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What the Experts Shared</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Read the key insights and perspectives shared by our expert speakers at the London event.</p>
        </div>

        <div className="space-y-24">
          {speakers.map((speaker, si) => (
            <article key={speaker.id} className="border-b border-gray-100 pb-24 last:border-0 last:pb-0">
              
              {/* Speaker header — images first, large and horizontal */}
<div className="mb-10">

  {/* Two images side by side, large */}
  <div className="grid grid-cols-2 gap-4 mb-8">
    {speaker.photos.map((photo, pi) => (
      <div key={pi} className="rounded-2xl overflow-hidden shadow-lg w-full h-80">
        <img
          src={photo}
          alt={`${speaker.name} ${pi + 1}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            const parent = target.parentElement
            if (parent) {
              parent.style.background = '#EFF6FF'
              parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-4xl font-bold text-blue-600">${speaker.name.charAt(0)}</div>`
            }
          }}
        />
      </div>
    ))}
  </div>

  {/* Speaker info below images */}
  <p className="text-primary font-semibold text-sm mb-1">{speaker.role}</p>
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{speaker.name}</h2>
  <h3 className="text-lg text-gray-700 font-medium leading-snug">{speaker.headline}</h3>
</div>

              
              {/* Pull quote */}
              <blockquote className="border-l-4 border-primary pl-6 py-2 mb-10 bg-primary/5 rounded-r-xl">
                <p className="text-xl font-semibold text-primary leading-relaxed italic">"{speaker.pullQuote}"</p>
                <footer className="text-sm text-gray-500 mt-2">— {speaker.name}</footer>
              </blockquote>

              {/* Content sections — alternating image placement */}
              <div className="space-y-10">
                {speaker.sections.map((section, idx) => (
                  <div key={idx}>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{section.heading}</h4>
                    <p className="text-gray-600 leading-relaxed mb-3">{section.body}</p>
                    <p className="font-semibold text-gray-800 leading-relaxed bg-blue-50 border-l-4 border-primary px-4 py-3 rounded-r-lg">
                      {section.bold}
                    </p>
                  </div>
                ))}
              </div>

            </article>
          ))}
        </div>

        {/* Back button */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Event
          </button>
        </div>
      </Container>
    </section>

    <CTAStrip />
  </div>
)

// ── MAIN COMPONENT ──
export const Events = () => {
  const [selected, setSelected] = useState<EventItem | null>(null)
  const [showLondon, setShowLondon] = useState(false)

  // London recap
  if (showLondon) {
    return <LondonRecap onBack={() => setShowLondon(false)} />
  }

  // Event detail view
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

              {/* Main */}
              <div className="lg:col-span-2">

                {/* Description */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Experience</h2>
                <div className="space-y-4 mb-10">
                  {selected.fullDesc.map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
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

                {/* Location sections — Event 1 only */}
                {selected.id === 'movie-screening' && (
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Location</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                      {/* London */}
                      <div className="p-6 rounded-2xl border-2 border-primary bg-primary/5">
                        <div className="flex items-start gap-3 mb-4">
                          <span className="text-2xl">🏙️</span>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">London</h3>
                            <p className="text-sm text-gray-600">Queen Mary University of London, Mile End Rd, London E1 4NS</p>
                            <p className="text-sm font-semibold text-primary mt-1">Event Concluded</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setShowLondon(true)}
                          className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white font-semibold px-4 py-3 rounded-xl transition-colors duration-200 shadow mb-2"
                        >
                          View London Recap
                          <span>→</span>
                        </button>
                        <a
                          href={REGISTER_LONDON}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-4 py-2 rounded-xl transition-colors duration-200 text-sm"
                        >
                          Register on Eventbrite
                          <ExternalLink size={14} />
                        </a>
                      </div>

                      {/* Newport */}
                      <div className="p-6 rounded-2xl border-2 border-gray-200 bg-gray-50">
                        <div className="flex items-start gap-3 mb-4">
                          <span className="text-2xl">🏴󠁧󠁢󠁷󠁬󠁳󠁿</span>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">Newport, Wales</h3>
                            <p className="text-sm text-gray-600">Newport, Wales — venue details on registration page</p>
                            <p className="text-sm font-semibold text-gray-500 mt-1">Upcoming</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-center gap-2 w-full bg-gray-200 text-gray-500 font-semibold px-4 py-3 rounded-xl mb-2 text-sm">
                          Recap Coming Soon
                        </div>
                        <a
                          href={REGISTER_NEWPORT}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full border-2 border-gray-300 text-gray-600 hover:border-primary hover:text-primary font-semibold px-4 py-2 rounded-xl transition-colors duration-200 text-sm"
                        >
                          Register on Eventbrite
                          <ExternalLink size={14} />
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
                      <p className="font-semibold text-gray-900">Queen Mary University of London, Mile End Rd, London E1 4NS</p>
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
                    <div className="space-y-3 pt-2">
                      <a href={REGISTER_LONDON} target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 shadow">
                        🏙️ Register — London <ExternalLink size={16} />
                      </a>
                      <a href={REGISTER_NEWPORT} target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-primary text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 shadow">
                        🏴󠁧󠁢󠁷󠁬󠁳󠁿 Register — Newport <ExternalLink size={16} />
                      </a>
                    </div>
                  ) : (
                    <a href={REGISTER_LONDON} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-4 rounded-xl transition-colors duration-200 shadow-lg mt-2">
                      Register Now <ExternalLink size={18} />
                    </a>
                  )}
                  <p className="text-xs text-gray-500 text-center">Seats are limited — secure your spot today.</p>
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

  // ── EVENTS GRID ──
  return (
    <div>
      <SEO
        title="Cyber Challenge UK 2026 | SafeSkillz Limited"
        description="Join Cyber Challenge UK 2026 — a full-day cybersecurity event featuring a movie screening, expert talks, and a live Capture The Flag challenge. Co-hosted by SafeSkillz."
        keywords="cyber challenge 2026, OPSWAT academy, cybersecurity event London, CTF, capture the flag"
        url="https://safeskillz.co.uk/events"
      />

      {/* Hero — generic, no specific dates */}
      <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-accent">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <Container className="relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 animate-fade-in">
              Co-hosted by SafeSkillz & OPSWAT Academy
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
              Cyber Challenge UK 2026
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 animate-slide-up">
              Watch, Learn & Hack. A full-day immersive cybersecurity event combining movie screening, expert insights, and a live Capture The Flag challenge across multiple UK locations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-2xl mx-auto">
              {[
                { label: 'Format', value: 'In Person' },
                { label: 'Locations', value: 'London & Newport' },
                { label: 'Organised by', value: 'SafeSkillz Ltd' },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-sm font-bold text-white">{item.value}</div>
                  <div className="text-xs text-gray-200 mt-1">{item.label}</div>
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
              Click any card to see the full agenda, details, and registration link for that experience.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Secure Your Spot</h3>
              <p className="text-gray-600 mb-6">Register now and be part of Cyber Challenge UK 2026.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={REGISTER_LONDON} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg">
                  🏙️ Register — London <ExternalLink size={18} />
                </a>
                <a href={REGISTER_NEWPORT} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-primary text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg">
                  🏴󠁧󠁢󠁷󠁬󠁳󠁿 Register — Newport <ExternalLink size={18} />
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