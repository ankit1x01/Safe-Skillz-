export const CIDX_REGISTRATION_URL =
  'https://www.eventbrite.co.uk/e/opswat-cidx-critical-infra-defense-experience-tickets-1998434327871'

export const CIDX_START = '2026-11-07T08:30:00'

export interface CidxAgendaItem {
  time: string
  endTime?: string
  title: string
  detail?: string
  parallel?: boolean
}

export const cidxEvent = {
  id: 'cidx',
  eyebrow: 'Upcoming Event',
  title: 'OPSWAT CIDX — Critical Infra Defense Experience',
  shortTitle: 'CIDX 2026',
  tagline: 'Learn | Experience | Compete | Connect | Recognize',
  summary:
    'A full day dedicated to building resilient critical infrastructure — expert keynotes, a live Capture the Flag, the Arsenal zone, panel discussions and networking with the people who defend the systems that power our world.',
  dateLabel: 'Saturday 7 November 2026',
  timeLabel: '08:30 AM – 5:00 PM',
  timeNote: 'Registration from 08:30 · Programme 09:30 – 17:00 · Free entry, no fees',
  duration: '8 hours 30 minutes',
  venue: 'To be announced',
  venueNote: 'Venue details will be shared with registered attendees.',
  fee: 'Free — no registration fee',
  coHostedBy: 'SafeSkillz Ltd',
  supportedBy: 'Cyber Secured India',
  registrationUrl: CIDX_REGISTRATION_URL,
  heroImage: '/cidx.webp',
  ogImage: '/cidx.webp',
}

export const cidxOverview = [
  'Welcome to CIDX — Critical Infra Defense Experience! CIDX brings together cybersecurity professionals, OT/ICS specialists, and industry leaders for a full day dedicated to building resilient infrastructure for a safer tomorrow.',
  'Learn from expert keynotes, get hands-on with a live Capture the Flag (CTF), explore the Arsenal zone, and connect with a community focused on defending the systems that power our world.',
  'Whether you are a seasoned security professional or just starting to explore critical infrastructure protection, CIDX offers something for you — technical talks, live demonstrations, panel discussions, and networking with peers who are as passionate about security as you are.',
]

export const cidxPillars = [
  {
    title: 'Learn',
    description:
      'Expert keynotes and technical talks from practitioners defending OT, ICS and enterprise environments.',
  },
  {
    title: 'Experience',
    description:
      'Live demonstrations and a real Capture the Flag, plus the Arsenal zone to get hands-on with security tooling.',
  },
  {
    title: 'Compete',
    description:
      'Put your skills to the test in jeopardy-style challenges — no prior CTF experience required.',
  },
  {
    title: 'Connect',
    description:
      'Panel discussions and networking with OT/ICS specialists, industry leaders and peers across critical sectors.',
  },
  {
    title: 'Recognise',
    description:
      'Cyber Security Awards for the Cyber and OT categories, plus CTF and quiz winner recognition.',
  },
]

export const cidxSectors = [
  { title: 'Energy & Utilities', icon: 'Zap' },
  { title: 'Manufacturing & Industrial (OT)', icon: 'Factory' },
  { title: 'Transport & Smart Mobility', icon: 'TrainFront' },
  { title: 'Ports, Airports & Logistics', icon: 'Container' },
  { title: 'ICT & Cloud Infrastructure', icon: 'Cloud' },
  { title: 'Healthcare & Life Sciences', icon: 'HeartPulse' },
  { title: 'Government & Public Services', icon: 'Landmark' },
]

export const cidxAgenda: CidxAgendaItem[] = [
  { time: '08:30 AM', endTime: '09:30 AM', title: 'Registration' },
  { time: '09:30 AM', endTime: '09:40 AM', title: 'Introduction of CIDX' },
  {
    time: '09:40 AM',
    endTime: '09:50 AM',
    title: 'Felicitation of Invitees and Speakers',
  },
  {
    time: '09:50 AM',
    endTime: '10:15 AM',
    title: 'Keynote',
    detail: 'Speaker to be announced',
  },
  { time: '10:15 AM', endTime: '11:00 AM', title: 'Movie Screening' },
  { time: '11:00 AM', endTime: '11:15 AM', title: 'Networking Break' },
  {
    time: '11:15 AM',
    endTime: '12:00 PM',
    title: 'Technical Talk',
    detail: 'Speaker to be announced',
  },
  {
    time: '12:00 PM',
    endTime: '12:30 PM',
    title: 'Panel Discussion',
    detail: 'Panellists to be announced',
  },
  { time: '12:30 PM', endTime: '01:00 PM', title: 'Lunch Break' },
  {
    time: '01:00 PM',
    endTime: '03:30 PM',
    title: 'Capture the Flag — Offline Final',
    detail: 'Round 2 of the CIDX CTF. Qualifiers from the 18 October online round compete live.',
  },
  {
    time: '01:00 PM',
    endTime: '03:30 PM',
    title: 'Arsenal',
    detail: 'Hands-on zone — explore the latest security tooling',
    parallel: true,
  },
  {
    time: '03:30 PM',
    endTime: '04:00 PM',
    title: 'Panel Discussion',
    detail: 'Panellists to be announced',
  },
  {
    time: '04:00 PM',
    endTime: '04:30 PM',
    title: 'Cyber Security Awards',
    detail: 'Category: Cyber and OT',
  },
  {
    time: '04:00 PM',
    endTime: '04:30 PM',
    title: 'CTF and Quiz Winners Awards',
    parallel: true,
  },
  { time: '04:30 PM', endTime: '05:00 PM', title: 'Thank You Note' },
]

export const cidxWhoShouldAttend = [
  'Cybersecurity professionals moving into OT, ICS or critical infrastructure protection',
  'OT/ICS engineers and operational technology specialists securing industrial environments',
  'SOC, incident response and infrastructure security teams',
  'IT and security leaders responsible for resilience in critical sector organisations',
  'Students and early-career professionals exploring hands-on cybersecurity',
  'Anyone starting to explore critical infrastructure protection — no prior CTF experience needed',
]

export const cidxSpeakersTBA = [
  { role: 'Keynote', slot: '09:50 AM – 10:15 AM' },
  { role: 'Technical Talk', slot: '11:15 AM – 12:00 PM' },
  { role: 'Panel Discussion', slot: '12:00 PM – 12:30 PM' },
  { role: 'Panel Discussion', slot: '03:30 PM – 04:00 PM' },
]

export const ctfRounds = [
  {
    id: 'round-1',
    round: 'Round 1',
    name: 'Online Qualifier',
    date: 'Sunday 18 October 2026',
    format: 'Online — open to everyone',
    icon: 'Laptop',
    status: 'Registration open',
    description:
      'The opening round runs remotely, so you can take part from wherever you are. It is where the field is set — your score here decides who advances to the offline final at CIDX.',
    bullets: [
      'Jeopardy-style challenges across multiple categories',
      'Run online — no travel required',
      'Open to students, professionals and enthusiasts',
      'No prior CTF experience needed',
    ],
  },
  {
    id: 'round-2',
    round: 'Round 2',
    name: 'Offline Final — at CIDX',
    date: 'Saturday 7 November 2026',
    format: 'In person · 01:00 PM – 03:30 PM',
    icon: 'Users',
    status: 'Qualifiers only',
    description:
      'The strongest performers from Round 1 go head to head in person at CIDX. The final runs inside the main CIDX programme, in the same room as the OT/ICS specialists, engineers and security leaders attending the day.',
    bullets: [
      'Invitational — advance from the Round 1 standings',
      'Live, on-network, in person at the CIDX venue',
      'Runs alongside the Arsenal zone',
      'Winners recognised in the 04:00 PM awards session',
    ],
  },
]

export const ctfOverview = [
  'The CIDX Capture the Flag is a two-round competition. Round 1 is an open online qualifier on 18 October 2026. Round 2 is an offline final held at CIDX on 7 November 2026.',
  'Both rounds run jeopardy-style across the same categories, so the format stays familiar — what changes is that the final is live, on-network, and played in the same room as the practitioners defending critical infrastructure.',
]

export const ctfCategories = [
  { title: 'OT / ICS', icon: 'Cpu', description: 'Industrial protocols, PLCs and control logic.' },
  { title: 'Web', icon: 'Globe', description: 'Injection, authentication and access control flaws.' },
  { title: 'Network', icon: 'Network', description: 'Traffic analysis, reconnaissance and misconfiguration.' },
  { title: 'Forensics', icon: 'Search', description: 'Memory, disk and log analysis under time pressure.' },
  { title: 'Cryptography', icon: 'Lock', description: 'Encoding, ciphers and broken assumptions.' },
  { title: 'Cloud', icon: 'Server', description: 'S3, IAM and cloud control-plane misconfiguration.' },
  { title: 'Reverse Engineering', icon: 'Binary', description: 'Binaries, patching and malware triage.' },
  { title: 'Quiz', icon: 'Flag', description: 'Rapid-fire security trivia for the whole room.' },
]

export const ctfEligibility = [
  'Open to students, working professionals and security enthusiasts',
  'No prior CTF experience required — Round 1 is where you learn the format',
  'Individual and team entries welcome',
  'Round 2 attendance is by invitation from the Round 1 standings',
]

export const ctfOfflineKit = [
  'Bring your own laptop, charger and a network adapter',
  'A wired connection is provided at the venue for the live final',
  'Lunch is served before the final begins at 01:00 PM',
  'Challenge walkthrough and prize handover in the 04:00 PM awards session',
]