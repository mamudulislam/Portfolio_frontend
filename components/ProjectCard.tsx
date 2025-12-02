import React from 'react';
import { Github, ExternalLink, Activity } from 'lucide-react';
import { Project } from '../types';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Card Container */}
      <div className="glass-panel rounded-xl overflow-hidden h-full flex flex-col hover:border-primary/50 transition-colors duration-300 shadow-xl shadow-black/5 dark:shadow-none">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
          
          <div className="absolute bottom-4 left-4">
             <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary border border-primary/30 rounded-full backdrop-blur-md shadow-sm">
                {project.category}
             </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-slate-800 dark:text-white">
            {project.title}
          </h3>
          <p className="text-muted text-sm mb-4 line-clamp-3 flex-1">
            {project.description}
          </p>

          {/* Metrics */}
          {project.metrics && (
             <div className="flex gap-4 mb-4 py-3 border-y border-muted/10">
                {project.metrics.map((metric, idx) => (
                   <div key={idx}>
                      <p className="text-[10px] uppercase text-muted/70 font-bold tracking-wider">{metric.label}</p>
                      <p className="text-sm font-mono text-secondary font-semibold">{metric.value}</p>
                   </div>
                ))}
             </div>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs text-muted bg-surface/50 border border-muted/10 px-2 py-1 rounded">
                #{tag}
              </span>
            ))}
            {project.tags.length > 3 && (
                <span className="text-xs text-muted/70 py-1">+ {project.tags.length - 3} more</span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-muted/10">
             <div className="flex gap-4">
                <a href={project.githubUrl || '#'} className="text-muted hover:text-primary transition-colors" title="View Code">
                    <Github size={18} />
                </a>
                <a href={project.demoUrl || '#'} className="text-muted hover:text-primary transition-colors" title="Live Demo">
                    <ExternalLink size={18} />
                </a>
             </div>
             <a href="#" className="flex items-center gap-1 text-xs font-bold text-primary hover:text-secondary transition-colors uppercase tracking-wider">
                Case Study <Activity size={14} />
             </a>
          </div>
        </div>
      </div>
      
      {/* Neon Glow on Hover (Dark mode only usually, but subtle in light) */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-500 -z-10" />
    </motion.div>
  );
};

export default ProjectCard;