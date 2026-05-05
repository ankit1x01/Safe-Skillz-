import { Container } from '../components/ui/Container'
import { CTAStrip } from '../components/home/CTAStrip'
import { SEO } from '../components/seo/SEO'
import { CheckCircle, Calendar, Clock, Monitor, Users, Award, BookOpen, Briefcase, Target, ChevronRight } from 'lucide-react'

const phases = [
  {
    phase: 'Phase 1',
    title: 'Foundations & Awareness',
    color: 'bg-blue-50 border-blue-200',
    accent: 'text-blue-600',
    sessions: [
      { topic: 'Introduction to Cybersecurity', trainer: 'Hemant Sir', date: '16th May' },
      { topic: 'Network Fundamentals for Cybersecurity', trainer: 'Sheetal G', date: '17th May' },
      { topic: 'Emerging Threats & Trends', trainer: 'Yash G', date: '23rd May' },
      { topic: 'Cloud Security Fundamentals', trainer: 'Tushar V', date: '24th May' },
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Core Security & Recon',
    color: 'bg-indigo-50 border-indigo-200',
    accent: 'text-indigo-600',
    sessions: [
      { topic: 'Network Reconnaissance', trainer: 'Mahadev', date: '30th May' },
      { topic: 'Web Application Security', trainer: 'Nikhil Rane', date: '31st May' },
      { topic: 'Mobile App Pentesting (Android Focus)', trainer: 'Kirankumar Subuddi', date: '6th June' },
      { topic: 'Exploiting Systems using Metasploit', trainer: 'Shinja Nagvekar', date: '7th June' },
    ],
  },
  {
    phase: 'Phase 3',
    title: 'System Security & Privilege Escalation',
    color: 'bg-sky-50 border-sky-200',
    accent: 'text-sky-600',
    sessions: [
      { topic: 'Linux Privilege Escalation', trainer: 'Rakesh', date: '13th June' },
      { topic: 'Windows Privilege Escalation', trainer: 'TBA', date: '14th June' },
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Digital Forensics & Incident Response',
    color: 'bg-cyan-50 border-cyan-200',
    accent: 'text-cyan-600',
    sessions: [
      { topic: 'Introduction to Digital Forensics', trainer: 'Nikhil M', date: '20th June' },
    ],
  },
  {
    phase: 'Phase 5',
    title: 'Governance & Risk',
    color: 'bg-blue-50 border-blue-200',
    accent: 'text-blue-600',
    sessions: [
      { topic: 'Data Privacy & UK Regulations (GDPR)', trainer: 'Mathew Caplan', date: '21st June' },
    ],
  },
  {
    phase: 'Phase 6',
    title: 'Future Tech & Capstone',
    color: 'bg-indigo-50 border-indigo-200',
    accent: 'text-indigo-600',
    sessions: [
      { topic: 'AI in Cybersecurity', trainer: 'Dr. Poorna Shankar', date: '27th June' },
      { topic: 'Final Assessment + Capstone Challenge', trainer: 'All Trainers', date: '28th June' },
    ],
  },
]

const careerOutcomes = [
  'SOC Analyst (L1)',
  'Cybersecurity Analyst',
  'Incident Response Analyst',
  'Junior Pentester',
  'Digital Forensics Analyst',
]

const problemStatements = [
  {
    title: 'Banking Phishing Attack Simulation',
    scenario: 'UK bank customers receive phishing emails mimicking HSBC/Barclays',
    tasks: ['Identify phishing indicators', 'Trace attacker infrastructure', 'Recommend mitigation strategy'],
  },
  {
    title: 'NHS Ransomware Incident',
    scenario: 'Hospital systems locked due to ransomware',
    tasks: ['Perform initial incident response', 'Identify entry point', 'Suggest containment & recovery plan'],
  },
  {
    title: 'E-Commerce Web App Vulnerability',
    scenario: 'UK-based online store vulnerable to SQL Injection',
    tasks: ['Exploit vulnerability (lab environment)', 'Extract sample data', 'Suggest secure coding fixes'],
  },
  {
    title: 'Malicious APK Investigation',
    scenario: 'Fake UK government app spreading malware',
    tasks: ['Reverse APK', 'Identify permissions misuse', 'Detect C2 communication'],
  },
  {
    title: 'Misconfigured Cloud Storage (AWS S3)',
    scenario: 'Publicly exposed sensitive data',
    tasks: ['Identify misconfiguration', 'Assess data exposure risk', 'Recommend remediation'],
  },
  {
    title: 'Insider Threat Case Study',
    scenario: 'Employee leaking sensitive data',
    tasks: ['Analyse logs', 'Identify suspicious behaviour', 'Suggest preventive controls'],
  },
  {
    title: 'OSINT Investigation (Fraud Case)',
    scenario: 'Fake charity scam in the UK',
    tasks: ['Track digital footprint', 'Identify social engineering tactics', 'Build investigation report'],
  },
  {
    title: 'AI-based Deepfake Fraud',
    scenario: 'CEO voice deepfake used for financial fraud',
    tasks: ['Identify indicators of deepfake', 'Suggest detection mechanisms', 'Recommend organisational controls'],
  },
]

export const Internship = () => {
  return (
    <div>
      <SEO
        title="Cybersecurity Sponsored Training & Internship | SafeSkillz Limited"
        description="2-month sponsored cybersecurity training and internship program by SafeSkillz Ltd. Live online sessions, hands-on labs, and career preparation for UK residents."
        keywords="cybersecurity internship, sponsored training, SOC analyst, cybersecurity program, UK cybersecurity"
        url="https://safeskillz.co.uk/internship"
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
              Limited Seats — UK Residents Only
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
              Cybersecurity Sponsored Training & Internship
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 animate-slide-up">
              A 2-month intensive program designed to build job-ready cybersecurity skills through live sessions, hands-on labs, and real-world simulations.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { icon: Calendar, label: 'Duration', value: '2 Months' },
                { icon: Clock, label: 'Schedule', value: 'Weekends' },
                { icon: Monitor, label: 'Mode', value: 'Live Online' },
                { icon: Users, label: 'Sessions', value: '14 Days' },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <item.icon className="w-6 h-6 mx-auto mb-2 text-white/80" />
                  <div className="text-lg font-bold text-white">{item.value}</div>
                  <div className="text-xs text-gray-200">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Program Overview */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">Program Overview</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What You'll Gain</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Designed for students, graduates, early professionals, and career switchers based in the UK.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Target, title: 'Job-Ready Skills', desc: 'Build practical cybersecurity skills aligned with UK regulatory and industry frameworks.' },
              { icon: Monitor, title: 'Hands-On Labs', desc: 'Work on real environments via Cydena Labs, CyberScene, and OPSWAT Academy platforms.' },
              { icon: Briefcase, title: 'Internship Component', desc: 'Build a professional portfolio including pentest reports, IR plans, and SOC workflows.' },
              { icon: Award, title: 'Certification', desc: 'Earn Certificate of Participation and Achievement. Top 3 performers win special rewards.' },
              { icon: Users, title: 'Expert Trainers', desc: 'Learn from industry professionals with real-world experience across multiple security domains.' },
              { icon: BookOpen, title: 'Career Preparation', desc: 'Prepare for roles like SOC Analyst, Junior Pentester, and Digital Forensics Analyst.' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-surface">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">Curriculum</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Program Structure</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">6 structured phases covering the full spectrum of cybersecurity from fundamentals to advanced topics.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phases.map((phase, i) => (
              <div key={i} className={`rounded-2xl border-2 p-6 ${phase.color}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full bg-white ${phase.accent}`}>
                    {phase.phase}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">{phase.title}</h3>
                </div>
                <div className="space-y-3">
                  {phase.sessions.map((session, j) => (
                    <div key={j} className="flex items-start gap-3 bg-white rounded-xl p-3 shadow-sm">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-bold text-xs">{j + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-sm">{session.topic}</p>
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          <span className="text-xs text-gray-500">👤 {session.trainer}</span>
                          <span className="text-xs text-primary font-medium">📅 {session.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Assessment + Labs */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Assessment */}
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">Assessment</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How You'll Be Evaluated</h2>
              <div className="space-y-4">
                {[
                  'Pre & Post Quiz (each session)',
                  'Weekly Assignments (review + feedback)',
                  'Hands-on Lab Completion',
                  'Final Capstone Challenge (Vulnerable Machine)',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Labs */}
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">Labs & Platforms</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hands-On Environments</h2>
              <div className="space-y-4">
                {[
                  { name: 'Cydena Labs', desc: 'Advanced cybersecurity simulation environment' },
                  { name: 'CyberScene', desc: 'Real-world scenario-based training platform' },
                  { name: 'OPSWAT Academy', desc: 'Critical infrastructure protection training' },
                ].map((lab, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{lab.name}</h4>
                      <p className="text-gray-600 text-sm">{lab.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Real World Problem Statements */}
      <section className="section-padding bg-surface">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">Real-World Challenges</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">UK-Focused Problem Statements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Work on realistic scenarios based on actual cybersecurity incidents and challenges faced by UK organisations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problemStatements.map((ps, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{ps.title}</h3>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-gray-700"><span className="font-semibold text-primary">Scenario: </span>{ps.scenario}</p>
                </div>
                <div className="space-y-2">
                  {ps.tasks.map((task, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Career Outcomes + Certification */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Career Outcomes */}
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">Career Outcomes</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Roles You Can Target</h2>
              <div className="space-y-3">
                {careerOutcomes.map((role, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-semibold text-gray-800">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">Certification & Rewards</span>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Receive</h2>
              </div>
              {[
                { title: 'Certificate of Participation', desc: 'Awarded to all participants who complete the program sessions.', icon: '📜' },
                { title: 'Certificate of Achievement', desc: 'Awarded based on assessment performance and lab completion.', icon: '🏆' },
                { title: 'Special Recognition — Top 3', desc: 'Top 3 performers receive special recognition certificate and sponsored rewards.', icon: '⭐' },
              ].map((cert, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border-2 border-primary/10 bg-primary/5 hover:border-primary/30 transition-colors">
                  <span className="text-3xl">{cert.icon}</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{cert.title}</h4>
                    <p className="text-gray-600 text-sm">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* How to Join */}
      <section className="section-padding bg-surface">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">Program Operations</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Join</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Register', desc: 'Fill out the Google Form registration — rolling out immediately.' },
              { step: '2', title: 'Email Verification', desc: 'Verify your email address to confirm your spot.' },
              { step: '3', title: 'WhatsApp Group', desc: 'Get added to the WhatsApp group for updates and Zoom links.' },
              { step: '4', title: 'Start Learning', desc: 'Attend live sessions, submit assignments, and complete labs.' },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{s.step}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Register CTA */}
          <div className="text-center mt-12">
            <div className="inline-block p-8 bg-white rounded-2xl border-2 border-primary shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Apply?</h3>
              <p className="text-gray-600 mb-6">Open to UK residents only. Limited seats available.</p>
              <a 
                href="https://us06web.zoom.us/meeting/register/Sro32WMhQv65BOf-fvLAbA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg"
              >
                Register Your Interest
                <ChevronRight className="w-5 h-5" />
              </a>
                
            </div>
          </div>
        </Container>
      </section>

      <CTAStrip />
    </div>
  )
}