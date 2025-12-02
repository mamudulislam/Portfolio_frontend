import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown, Cpu, Globe, Database, Layout } from 'lucide-react';
import Hero3D from '../components/Hero3D';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const featuredProjects = PROJECTS.slice(0, 2);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <Hero3D />
        
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left pt-20 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-3/4 lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/30 border border-muted/20 backdrop-blur-sm mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-mono text-primary uppercase tracking-wider">Available for Hire</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight text-slate-900 dark:text-white">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Digital</span> Experiences
            </h1>
            
            <p className="text-base sm:text-lg text-muted mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              I'm a Full Stack Engineer specializing in the MERN stack and cross-platform mobile development. I build scalable, performance-obsessed applications for the modern web.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/projects"
                className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-background font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity rounded-sm flex items-center justify-center gap-2 group shadow-lg"
              >
                View Work 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted animate-bounce hidden md:block"
        >
            <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* Services/Tech Stacks */}
      <section className="py-24 bg-surface/30 border-y border-muted/10 backdrop-blur-sm">
         <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { icon: <Layout />, label: 'Frontend Architecture', desc: 'React, Next.js, Tailwind' },
                    { icon: <Database />, label: 'Backend Systems', desc: 'Node, Express, MongoDB' },
                    { icon: <Cpu />, label: 'App Development', desc: 'React Native, Expo' },
                    { icon: <Globe />, label: 'DevOps & Cloud', desc: 'CI/CD' },
                ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-6 border border-muted/10 bg-surface/40 hover:bg-surface/60 transition-colors rounded-xl group shadow-sm text-center md:text-left"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                            {item.icon}
                        </div>
                        <h3 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">{item.label}</h3>
                        <p className="text-sm text-muted">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
         </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 relative">
         <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Featured <span className="text-primary">Projects</span></h2>
                    <p className="text-muted max-w-lg">Selected works demonstrating scalable architecture and immersive UI.</p>
                </div>
                <Link to="/projects" className="hidden md:flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary uppercase tracking-widest transition-colors">
                    View All <ArrowRight size={16} />
                </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {featuredProjects.map((project, idx) => (
                    <ProjectCard key={project.id} project={project} index={idx} />
                ))}
            </div>

            <div className="mt-12 text-center md:hidden">
                <Link to="/projects" className="inline-block px-6 py-3 border border-muted/20 text-sm font-bold uppercase tracking-widest hover:bg-surface/50 text-slate-900 dark:text-white">
                    View All Projects
                </Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;