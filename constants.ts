import { Project, Skill, Experience } from './types';

export const PERSONAL_INFO = {
  name: "Alex Dev",
  title: "MERN Stack + App Developer",
  email: "mamuduli153@gmail.com",
  location: "Dhanmondi, Dhaka",
  profilePic: "https://bewildered-azure-zo9in2oo2x-1rwgq6749o.edgeone.dev/Gemini_Generated_Image_ohf1dgohf1dgohf1.png", 
  socials: {
    github: "https://github.com/mamudulislam",
    linkedin: "https://www.linkedin.com/in/syedmamudulislam/",
    twitter: "https://x.com/mamudulislam153"
  }
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus E-Commerce Dashboard',
    description: 'A comprehensive admin dashboard for high-volume e-commerce stores featuring real-time analytics, inventory management, and WebSocket-based order tracking.',
    tags: ['React', 'Redux Toolkit', 'Node.js', 'Socket.io', 'MongoDB'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    category: 'Full Stack',
    metrics: [
      { label: 'Performance', value: '98/100' },
      { label: 'Data', value: '1M+ Rows' }
    ]
  },
  {
    id: '2',
    title: 'FitTrack Pro Mobile',
    description: 'A cross-platform React Native mobile application for fitness tracking with geolocation mapping, offline mode, and Apple HealthKit integration.',
    tags: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    category: 'Mobile',
    metrics: [
      { label: 'Downloads', value: '10k+' },
      { label: 'Rating', value: '4.8★' }
    ]
  },
  {
    id: '3',
    title: 'Aether Cloud SaaS',
    description: 'Cloud file management SaaS with drag-and-drop uploads, sharable links, and stripe subscription integration. Built with a microservices architecture.',
    tags: ['Next.js', 'AWS S3', 'Stripe', 'PostgreSQL', 'Docker'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    category: 'Full Stack',
    metrics: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'MRR', value: '$5k' }
    ]
  },
  {
    id: '4',
    title: 'ChatStream Realtime',
    description: 'Enterprise-grade team communication platform supporting channels, direct messages, and file sharing with end-to-end encryption.',
    tags: ['React', 'GraphQL', 'Apollo', 'Redis', 'WebRTC'],
    imageUrl: 'https://picsum.photos/800/600?random=4',
    category: 'Full Stack',
    metrics: [
      { label: 'Latency', value: '<50ms' }
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'React & React Native', category: 'Frontend', level: 95 },
  { name: 'TypeScript', category: 'Frontend', level: 90 },
  { name: 'Node.js & Express', category: 'Backend', level: 88 },
  { name: 'MongoDB & SQL', category: 'Backend', level: 85 },
  { name: 'Docker & Kubernetes', category: 'DevOps', level: 75 },
  { name: 'AWS Services', category: 'DevOps', level: 80 },
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Front-end Developer',
    company: 'One Year Academy',
    period: '2024',
    description: [
      'Led the migration of a legacy monolith to microservices using Node.js and Express.',
      'Improved mobile app performance by 40% using React Native Reanimated.',
      'Mentored one junior developer and established code review standards'
    ]
  },
  {
    id: '2',
    role: 'MERN Stack Developer',
    company: 'Softvence Agency',
    period: '2025 - Present',
    description: [
      'Built high-converting landing pages for Fortune 12 clients.',
      'Implemented complex 3D animations using Three.js and WebGL.',
      'Collaborated with UI/UX designers to deliver pixel-perfect interfaces.'
    ]
  }
];