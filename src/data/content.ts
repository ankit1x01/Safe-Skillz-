export const siteContent = {
  brand: {
    name: 'SafeSkillz Limited',
    tagline: 'Cyber Security Training | Education',
    description: 'UK-based cybersecurity training provider specialising in both offensive and defensive cyber security education',
  },

  company: {
    name: 'SafeSkillz Limited',
    registrationNumber: '16967710', // Add company registration number when available
    jurisdiction: 'England and Wales',
    registeredOffice: '71-75, Shelton Street, Covent Garden, London, WC2H 9JQ',
    vatNumber: '', // Add VAT number if applicable
  },

  about: `SafeSkillz Limited is a UK-based cybersecurity training provider specialising in both offensive and defensive cyber security education for organisations across public-sector, corporate and academic clients. Our programmes are developed by experienced industry professionals and designed in line with recognised industry frameworks and best practices. We offer a portfolio of hands-on training courses (public and bespoke) covering technical and managerial topics, informed by publicly available UK cybersecurity guidance, including material from the National Cyber Security Centre (NCSC). Our expert-led sessions focus on practical skills and real-world scenarios to help organisations strengthen their cyber resilience.`,

  hero: {
    headline: 'Cyber Security Training | Education',
    subtext: 'Professional cybersecurity education designed by industry experts. Strengthen your cyber resilience with hands-on training in line with UK cybersecurity standards.',
    primaryCta: 'Book a Training',
    secondaryCta: 'Explore Trainings',
  },

  trustBadges: [
    'UK Aligned',
    'Industry Best Practice',
    'Expert-Led Training',
    'Hands-On Learning',
  ],

  stats: [
    { value: '500+', label: 'Professionals Trained' },
    { value: '50+', label: 'Organizations Served' },
    { value: '10+', label: 'Years Experience' },
    { value: '95%', label: 'Satisfaction Rate' },
  ],

  highlights: [
    {
      title: 'Defensive Security',
      description: 'Master incident response, threat detection, and security operations to protect your organization.',
      icon: 'Shield',
    },
    {
      title: 'Offensive Security',
      description: 'Learn ethical hacking and penetration testing to identify vulnerabilities before attackers do.',
      icon: 'Target',
    },
    {
      title: 'Cloud & Network',
      description: 'Secure cloud environments and network infrastructure with industry best practices.',
      icon: 'Cloud',
    },
  ],

  trainings: {
    sections: [
      {
        id: 'defensive',
        title: 'Defensive Security & Incident Response',
        icon: 'Shield',
        courses: [
          'Security Operations Center (SOC) Fundamentals',
          'Incident Response and Digital Forensics',
          'Threat Hunting and Detection',
          'Security Information and Event Management (SIEM)',
          'Malware Analysis and Reverse Engineering',
          'Network Security Monitoring',
        ],
      },
      {
        id: 'offensive',
        title: 'Offensive Security & Ethical Hacking',
        icon: 'Target',
        courses: [
          'Ethical Hacking and Penetration Testing',
          'Web Application Security Testing',
          'Mobile Application Security',
          'Wireless Network Security Assessment',
          'Social Engineering and Physical Security',
          'Red Team Operations',
        ],
      },
      {
        id: 'secure-development',
        title: 'Secure Software & DevOps',
        icon: 'Code',
        courses: [
          'Secure Coding Practices',
          'DevSecOps Implementation',
          'Application Security Testing',
          'Container and Kubernetes Security',
          'CI/CD Pipeline Security',
          'Software Supply Chain Security',
        ],
      },
      {
        id: 'cloud-network',
        title: 'Cloud & Network Security',
        icon: 'Cloud',
        courses: [
          'AWS Security Best Practices',
          'Azure Security Implementation',
          'Google Cloud Platform Security',
          'Network Security Architecture',
          'Zero Trust Network Design',
          'Infrastructure as Code Security',
        ],
      },
      {
        id: 'cyber-hygiene',
        title: 'Cyber Hygiene',
        icon: 'Users',
        courses: [
          'Cybersecurity Awareness Training',
          'Phishing Prevention and Detection',
          'Password Security and Management',
          'Safe Internet Practices',
          'Mobile Device Security',
          'Home Working Security',
        ],
      },
      {
        id: 'governance',
        title: 'Governance, Risk & Compliance',
        icon: 'FileText',
        courses: [
          'ISO 27001 Implementation',
          'GDPR Compliance and Data Protection',
          'Risk Assessment and Management',
          'Security Policy Development',
          'Business Continuity Planning',
          'Cyber Insurance and Legal Aspects',
        ],
      },
      {
        id: 'forensics',
        title: 'Digital Forensics & Awareness',
        icon: 'Search',
        courses: [
          'Computer Forensics Fundamentals',
          'Mobile Device Forensics',
          'Network Forensics',
          'Memory Analysis',
          'Cloud Forensics',
          'Legal Aspects of Digital Evidence',
        ],
      },
      {
        id: 'accredited',
        title: 'Certification-Focused Training',
        icon: 'Award',
        courses: [
          'Certified Ethical Hacker (CEH)',
          'Certified Information Systems Security Professional (CISSP)',
          'CompTIA Security+',
          'SANS Training Courses',
          'Certified Information Security Manager (CISM)',
          'Certified in Risk and Information Systems Control (CRISC)',
        ],
        note: 'Courses trusted by 500+ professionals, Fortune 500 companies, government agencies, and universities worldwide.',
      },
    ],
    note: 'Public and bespoke training options available. All courses can be customized to meet your organization\'s specific requirements.',
  },

  alliances: [
    {
      name: 'Cyber Secured India (CSI)',
      description: 'Collaborative initiative to enhance cybersecurity capabilities and training programs in the Indian subcontinent.',
      logo: 'partner/cybersecuredindia_logo.jpg',
    },
    {
      name: 'Cyber Secured Africa (CSA)',
      description: 'Strategic partnership focused on advancing cybersecurity education and awareness across African nations.',
      logo: 'partner/cybersecuredindia_africajpg.jpg',
    },
    {
      name: 'OPSWAT Academy',
      description: 'Authorized training partner delivering cutting-edge cybersecurity solutions and critical infrastructure protection.',
      logo: 'partner/1654773205477.jpg',
    },
    {
      name: 'CloudSeals',
      description: 'Partnership in cloud security excellence, providing specialized training in cloud-native security practices.',
      logo: 'partner/cloudseals.svg',
    },
  ],


  work: {
    title: 'Our Work in Action',
    description: 'Delivering hands-on cybersecurity training through workshops, conferences, and practical sessions.',
    gallery: [
      {
        title: 'Cybersecurity Event in UK',
        description: 'Hands-on cybersecurity training session',
        image: 'uk photos/1766836026547.jpg',
      },
      {
        title: 'Professional Training Europe',
        description: 'Expert-led cybersecurity workshop',
        image: 'uk photos/1770725993218.jpg',
      },
      {
        title: 'Corporate Session UK',
        description: 'Advanced threat detection training overview',
        image: 'uk photos/1772468080027.jpg',
      },
      {
        title: 'Information Security Workshop',
        description: 'Practical exercises on network defence',
        image: 'uk photos/1772468080712.jpg',
      },
      {
        title: 'Executive Briefing',
        description: 'Strategic cybersecurity alignment for businesses',
        image: 'uk photos/1772468084109.jpg',
      },
      {
        title: 'Security Operations Training',
        description: 'Real-world simulation and incident response',
        image: 'uk photos/1772468086577.jpg',
      },
      {
        title: 'Interactive Cybersecurity Session',
        description: 'Engagement and learning with industry experts',
        image: 'uk photos/1772982472641.jpg',
      },
      {
        title: 'Defensive Security Training',
        description: 'In-depth focus on cloud security architecture',
        image: 'uk photos/WhatsApp Image 2026-03-22 at 8.57.02 PM (1).jpeg',
      },
      {
        title: 'Cyber Awareness Program',
        description: 'Promoting best practices across the organisation',
        image: 'uk photos/WhatsApp Image 2026-03-22 at 8.57.02 PM.jpeg',
      },
      {
        title: 'Leadership in Cyber Resilience',
        description: 'Empowering teams for better data protection',
        image: 'uk photos/WhatsApp Image 2026-03-22 at 8.58.34 PM (1).jpeg',
      },
      {
        title: 'Hands-on Pentesting Course',
        description: 'Practical ethical hacking techniques context',
        image: 'uk photos/WhatsApp Image 2026-03-22 at 8.58.34 PM.jpeg',
      },
      {
        title: 'Security Compliance Event',
        description: 'Navigating regulations and industry standards',
        image: 'uk photos/WhatsApp Image 2026-03-22 at 8.59.41 PM.jpeg',
      },
    ],
  },

  team: [
    {
      name: 'Shinja N',
      role: 'Director',
      linkedinUrl: '#',
      image: 'shinja-n.jpg',
    },
    {
      name: 'Hemant Patkar',
      role: 'Advisor',
      linkedinUrl: '#',
      image: 'hemant-patkar.jpg',
    },
    {
      name: 'Prathmesh Rane',
      role: 'Advisor',
      linkedinUrl: '#',
      image: 'prathmesh-rane.jpg',
    },
    {
      name: 'Nikhil M',
      role: 'Founder',
      linkedinUrl: '#',
      image: 'nikhil-m.jpg',
    },
  ],

  contact: {
    address: '71-75, Shelton Street, Covent Garden, London, WC2H 9JQ',
    phone: '16784302',
    email: 'info@safeskillz.co.uk',
    socialLinks: [
      { platform: 'LinkedIn', url: '#', icon: 'Linkedin' },
      { platform: 'Twitter', url: '#', icon: 'Twitter' },
      { platform: 'YouTube', url: '#', icon: 'Youtube' },
    ],
  },

  footer: {
    copyright: '© 2025 SafeSkillz Limited. All rights reserved.',
    subtitle: 'Content and training accredited in line with UK cybersecurity standards.',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Learner Terms', href: '/learner-terms' },
    ],
  },

  ctaStrip: {
    headline: 'Strengthen your cyber resilience today',
    description: 'Ready to enhance your organization\'s cybersecurity capabilities?',
    buttonText: 'Get Started',
  },
}