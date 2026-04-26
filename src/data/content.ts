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
  events: [
    {
      id: 'uk-events',
      title: 'BlackHat',
      tagline: 'BlackHat Europe Global Representation',
      description: 'Cyber Secured India core team member Shinja Nagvekar represented Cyber Secured India at BlackHat Europe which took place in London in December 2025.Cyber Secured India is a global cyber security community and have more than 38,000 community members across 130 countries.',
      coverImage: 'uk photos/1766836026547.jpg',
      images: [
        
        'uk photos/blackhat(3).jpg',
        'uk photos/blackhat(4).jpg',
        'uk photos/blackhat(5).jpg',
        'uk photos/blackhat(6).jpg',



      ],
    },
    {
      id: 'infosecurity-europe',
      title: 'Virgin Money',
      tagline: 'Global Cyber Community Momentum',
      description: ' March marked a series of meaningful engagements across OPSWAT Academy and Cyber Secured India global community. From participating in the recent hashtag#CWG2026 conference lead by Shinja Nagvekar, to celebrating International Women’s Day with CyberWomen@Warwick in collaboration with the Warwick Cyber Security Society, Hemant Patkar, CISSP® connected with professionals at the OMPEG UK Winter Showcase 2026 in London, and most recently meeting the Virgin Money Cyber Security team in Scotland, the momentum has been strong. These initiatives were organized in coordination with SafeSkillz UK and Cyber Secured India, whose commitment continues to drive impact.We were glad to see strong interest in .Benny .Czarny’s new book - Cybersecurity Upside Down, and that it sparked thoughtful discussions among students, young professionals, and industry leaders, reflecting a community actively shaping the future of cybersecurity.',
      coverImage: 'uk photos/virginmoney(1).jpg',
      images: [
        
        'uk photos/virginmoney(2).jpg',
        'uk photos/virginmoney(3).jpg',
        'uk photos/virginmoney(4).jpg',

      ],
    },
    {
      id: 'gisec-global',
      title: 'London Tech Week',
      tagline: 'London Tech Week Global Expansion',
      description: 'Sudden plans can lead to great outcomes, and life surprises can bring exciting opportunities. Cyber Secured India recently had the honor of participating in London Tech Week with the Department for Business and Trade at the British High Commission in India. During this event, our team explored the various initiatives offered by the UK Cyber Ecosystem, establishing valuable connections. We are grateful and express our gratitude towards Sijoy Thomas and Neha Nigadikar for this enriching experience. hashtag#LondonTechWeek hashtag#UKCyberEcosystem.Reflecting on the past year, our companies, Cyber Security and Digital Forensics Limited, and Imperative Business Ventures UK Limited, were launched in London. Collaborating with Dr. Sachin Paithankar and Aman Gujar from Imperative Business Ventures Limited we achieved significant milestones in our entrepreneurial journey. This time Keir Starmer, Prime Minister of the UK and Jensen Huang, CEO of NVIDIA were at the opening state.',
      coverImage: 'uk photos/techweek(5).jpg',
      images: [
        
        'uk photos/techweek(1).jpg',
        'uk photos/techweek(2).jpg',
        'uk photos/techweek(4).jpg',
        'uk photos/techweek(3).jpg',
       
      ],
    },
    {
      id: 'british-high-commission',
      title: 'Warwick Cyber Secured Society',
      tagline: 'Empowering Women in Cybersecurity',
      description: "Shinja Nagvekar, a core team member of Cyber Secured India, celebrated International Women's Day at an event hosted by CyberWomen@Warwick in collaboration with the Warwick Cyber Security Society. Attendees received a copy of the book Cybersecurity Upside Down: Rethink Your Cybersecurity Strategy, authored by .Benny .Czarny, CEO of OPSWAT. Special thanks to OPSWAT Academy for their support.",
      coverImage: 'uk photos/warwick(1).jpg',
      images: [
        
        'uk photos/warwick(2).jpg',
        'uk photos/1772468080712.jpg',
        'uk photos/1772468084109.jpg',
      ],
    },
    {
      id: 'ctf-competition',
      title: 'India AI Summit 2026',
      tagline: 'AI Summit Leadership & Collaboration',
      description: 'We are delight to share that our CEO Prathamesh Rane was grateful to have attended the India AI Impact Summit 2026 at Bharat Mandapam, New Delhi an incredible experience filled with learning, networking, and meaningful discussions around the future of AI and cybersecurity.During the summit, He had the opportunity to visit several exhibitor stalls including National Payments Corporation Of India (NPCI), Innefu Labs, i2k2 INTRACIS, FIA Global, BHASHINI - (Digital India BHASHINI Division), JAN AI and many more, exploring innovative solutions shaping the AI ecosystem.He also visited the Bharat Pavilion and UK Pavilion, where I had insightful discussions with Sijoy Thomas sir about collaboration opportunities between our UK initiatives - SafeSkillz and CSDFUK.He was also honoured to participate in The Open Source Leaders Roundtable – an AI Impact Summit Fringe Event hosted by OpenUK at IIC. A special thank you to Professor Amanda Brock and Hiren Parekh  karan saini for giving us the opportunity to participate and as a community partner. It was equally inspiring us to meet ACP Vivek Tyagi Bhajanpura, Delhi, where potential collaboration initiatives between Cyber Secured India (CSI) and Delhi Police were discussed.He also had the opportunity to attend the Bharat AI Conclave at IIT Delhi Research & Innovation Park, hosted by Bharat AI and the World AI Governance (WAIG Foundation) Grateful to Dr. Umang Mehta Founder WAIG for the invitation and for facilitating connections with inspiring leaders including Dr. Pavan Duggal. sir Prabhat Kumar Founder - AIforAll Global, and Dr. Gundala Nagaraju - Raju Sir President - WAIG.',
      coverImage: 'uk photos/summit(6).jpg',
      images: [
        'uk photos/summit(1).jpg',
        'uk photos/summit(2).jpg',
        'uk photos/summit(3).jpg',
        'uk photos/summit(4).jpg',
        'uk photos/summit(5).jpg',
        'uk photos/summit(7).jpg',
      ],
    },
  ],
},

  team: [

    {
      name: 'Hemant Patkar',
      role: 'Non Executive Director',
      bio: 'Cybersecurity Lead Designer / Architect - Banking & Regulated Environments | Zero Trust | Cloud & Identity Security | Risk & Resilience | Speaker | NED',
      linkedinUrl: 'https://www.linkedin.com/in/hemantpatkar/',
      image: 'hemant-patkar.jpg',
    },

    {
      name: 'Nikhil M',
      role: 'Director',
      bio: 'Renowned cybersecurity expert and technology-based innovator with more than a decade of experience in the industry.',
      linkedinUrl: 'https://www.linkedin.com/in/nikhilmahadeshwar/',
      image: 'nikhil-m.jpg',
    },    
        
    {
      name: 'Shinja N',
      role: 'Director',
      bio: 'Cybersecurity Consultant | Penetration Tester | ISCP | eCPPT | CRTP',
      linkedinUrl: 'https://www.linkedin.com/in/shinja-nagvekar/',
      image: 'shinja-n.jpg',
    },

    {
      name: 'Prathmesh Rane',
      role: 'Advisor',
      bio: 'Expert in Global Cybersecurity Training and Digital Forensic Services',
      linkedinUrl: 'https://www.linkedin.com/in/raneprathamesh/',
      image: 'prathmesh-rane.jpg',
    },

  ],

  contact: {
      address: "71-75, Shelton Street, Covent Garden, London, WC2H 9JQ",
      email: "info@safeskillz.co.uk",
    socialLinks: [
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/safeskillz-ltd', icon: 'Linkedin' },
      { platform: 'Twitter', url: 'https://x.com/SafeskillzUk', icon: 'Twitter' },
      { platform: 'Instagram', url: 'https://www.instagram.com/safeskillz1.uk/', icon: 'Instagram' },
    ],
  },
  footer: {
  copyright: '© 2026 SafeSkillz Limited. All rights reserved.',
  subtitle: 'Content and training in line with UK cybersecurity standards.',
  badge: 'UK Aligned Cybersecurity Training',
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