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

export const LUMINA_AGENCY_IMAGE = './images/lumina.png';
export const  TrendyMartColApp = './images/TrendyMartColApp.png';
export const  GATORMIX = './images/GATORMIX.png';
export const  eshop = './images/eshop.png';
export const  chiess = './images/chiess.png';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Lumina Agency',
    description: 'An agency landing page is a focused web page designed to showcase an agency’s services and convert visitors into leads through a clear message, proof of credibility, and a strong call to action.',
    tags: ['React', "Taliwind CSS", 'TypeScript'],
    imageUrl: LUMINA_AGENCY_IMAGE,
    category: 'Frontend',
    githubUrl: 'https://github.com/mamudulislam/Lumina_agency',
    demoUrl: 'https://lumina-agency.vercel.app/',
  },
  {
    id: '2',
    title: 'TrendyMartColApp',
    description: 'TrendyMartColApp is a modern e-commerce mobile application built with React Native, designed for store owners and customers to connect seamlessly.',
    tags: ['React Native', 'TypeScript'],
    imageUrl: TrendyMartColApp,
    category: 'Mobile',
    githubUrl: 'https://github.com/mamudulislam/trendymartcolapp',
    demoUrl:'https://expo.dev/accounts/mamudul/projects/my-app/builds/73d647e5-960a-4d2a-81a9-75553bedc75b'
  },
  {
    id: '3',
    title: 'Gatromixonsite',
    description: 'GatorMix is a concrete mixing service in Southwest Florida. Instead of delivering pre-mixed concrete, they bring volumetric mixer trucks that mix fresh concrete right on-site, tailored to your project’s exact needs.',
    tags: ['React','Talwind CSS','TS','NestJS','Redux','Docker'],
    imageUrl: GATORMIX,
    category: 'Full Stack',
    githubUrl: 'https://github.com/mamudulislam/mrsofofrontend',
    demoUrl: 'https://gatormix.com/',
  },
  {
    id: '4',
    title: 'cheesuschrustyy',
    description: 'Enterprise-grade team communication platform supporting channels, direct messages, and file sharing with end-to-end encryption.',
    tags: ['React','TS','TailwindCSS','NestJS',],
    imageUrl: chiess,
    category: 'Full Stack',
    githubUrl: 'https://github.com',
    demoUrl: 'https://cheesuschrustyy.netlify.app/',
  },
  {
    id: '5',
    title: 'E-Shop',
    description: 'E-Shop is a modern, scalable, and user-friendly e-commerce platform designed to help businesses of any size sell products online. Built with best practices in mind, E-Shop offers a robust set of features including product management, secure checkout, and user authentication.',
    tags: ['React','Tailwind CSS'],
    imageUrl: eshop,
    category: 'Frontend',
    githubUrl: 'https://github.com/mamudulislam/E-Shop',
    demoUrl: 'https://e-shop-mu-five.vercel.app/',
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