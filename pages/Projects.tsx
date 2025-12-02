import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Full Stack', 'Mobile', 'Frontend'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-28 md:pt-32 pb-20 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Scale</span></h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">
                A collection of industrial-grade applications, ranging from enterprise dashboards to consumer mobile apps.
            </p>
        </motion.div>

        {/* Filter */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4 md:pb-0">
            <div className="inline-flex p-1 bg-surface/50 rounded-lg border border-muted/10 backdrop-blur-sm shadow-sm whitespace-nowrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                            filter === cat 
                            ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                            : 'text-muted hover:text-slate-900 dark:hover:text-white hover:bg-surface'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;