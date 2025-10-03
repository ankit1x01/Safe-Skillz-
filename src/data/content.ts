export const siteContent = {
  brand: {
    name: 'SafeSkillz Limited',
    tagline: 'Cyber Security Training | Education',
    description: 'UK-based cybersecurity training provider specialising in both offensive and defensive cyber security education',
  },

  company: {
    name: 'SafeSkillz Limited',
    registrationNumber: '', // Add company registration number when available
    jurisdiction: 'England and Wales',
    registeredOffice: 'London, United Kingdom',
    vatNumber: '', // Add VAT number if applicable
  },

  about: `SafeSkillz Limited is a UK-based cybersecurity training provider specialising in both offensive and defensive cyber security education for government, corporate and academic clients. Our programmes are designed by experienced industry professionals and accredited against recognised standards. We offer a full portfolio of hands-on training courses (both public and bespoke) that cover technical and managerial topics, all aligned with the UK's National Cyber Security Centre (NCSC) guidelines. Our expert-led sessions emphasise real-world skills and practical exercises to help organisations strengthen their cyber resilience.`,

  hero: {
    headline: 'Cyber Security Training | Education',
    subtext: 'Professional cybersecurity education designed by industry experts. Strengthen your cyber resilience with hands-on training aligned with NCSC guidelines.',
    primaryCta: 'Book a Training',
    secondaryCta: 'Explore Trainings',
  },

  trustBadges: [
    'NCSC Aligned',
    'Industry Accredited',
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
        title: 'Accredited Courses',
        icon: 'Award',
        courses: [
          'Certified Ethical Hacker (CEH)',
          'Certified Information Systems Security Professional (CISSP)',
          'CompTIA Security+',
          'SANS Training Courses',
          'Certified Information Security Manager (CISM)',
          'Certified in Risk and Information Systems Control (CRISC)',
        ],
        note: 'NCSC-aligned courses trusted by Fortune 500 companies, government agencies, and universities worldwide.',
      },
    ],
    note: 'Public and bespoke training options available. All courses can be customized to meet your organization\'s specific requirements.',
  },

  alliances: [
    {
      name: 'Cyber Secured Africa (CSA)',
      description: 'Strategic partnership focused on advancing cybersecurity education and awareness across African nations.',
      logo: 'csa-logo.png',
    },
    {
      name: 'Cyber Secured India (CSI)',
      description: 'Collaborative initiative to enhance cybersecurity capabilities and training programs in the Indian subcontinent.',
      logo: 'csi-logo.png',
    },
    {
      name: 'OPSWAT Academy',
      description: 'Authorized training partner delivering cutting-edge cybersecurity solutions and critical infrastructure protection.',
      logo: 'opswat-logo.png',
    },
    {
      name: 'CloudSeals',
      description: 'Partnership in cloud security excellence, providing specialized training in cloud-native security practices.',
      logo: 'cloudseals-logo.png',
    },
  ],

  work: {
    title: 'Our Work in Action',
    description: 'Delivering hands-on cybersecurity training through workshops, conferences, and practical sessions.',
    gallery: [
      {
        title: 'Corporate Security Workshop',
        description: 'Hands-on incident response training for Fortune 500 company',
        image: 'workshop-1.jpg',
      },
      {
        title: 'University Cybersecurity Conference',
        description: 'Keynote presentation on emerging threats and defense strategies',
        image: 'conference-1.jpg',
      },
      {
        title: 'Government Training Session',
        description: 'Specialized training for public sector cybersecurity teams',
        image: 'training-1.jpg',
      },
      {
        title: 'Industry Certification Program',
        description: 'NCSC-aligned certification training for industry professionals',
        image: 'certification-1.jpg',
      },
      {
        title: 'Penetration Testing Workshop',
        description: 'Practical ethical hacking training for security professionals',
        image: 'pentest-1.jpg',
      },
      {
        title: 'Cloud Security Bootcamp',
        description: 'Intensive hands-on training for cloud security best practices',
        image: 'cloud-1.jpg',
      },
    ],
  },

  team: [
    {
      name: 'Shinja N',
      role: 'Director',
      bio: 'Strategic leader specializing in cybersecurity strategy and course development. Expert in designing comprehensive training programs that align with industry standards and regulatory requirements.',
      image: 'shinja-n.jpg',
    },
    {
      name: 'Hemant Patkar',
      role: 'Advisor',
      location: 'UK',
      bio: 'Banking sector strategist with extensive experience in financial services cybersecurity. Provides strategic guidance on regulatory compliance and risk management in the banking industry.',
      image: 'hemant-patkar.jpg',
    },
    {
      name: 'Nikhil Rane',
      role: 'Advisor',
      bio: 'Renowned bug bounty hunter featured by BBC and international media. Brings real-world offensive security expertise and cutting-edge vulnerability research to our training programs.',
      image: 'nikhil-rane.jpg',
    },
  ],

  contact: {
    address: 'London, UK',
    phone: '+44 (0)7946630285',
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
    badge: 'Aligned with NCSC guidelines',
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