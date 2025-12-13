import React from 'react';
import { Github, Link } from 'lucide-react';
import { Project } from '../types';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardStyle = {
    backgroundImage: `url(${project.imageUrl})`,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-xl overflow-hidden shadow-xl shadow-black/10 dark:shadow-purple-900/20 h-96 bg-cover bg-center"
      style={cardStyle}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-all duration-500 group-hover:from-black/95 group-hover:via-black/70" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        <div className="flex-1" />

        {/* Category */}
        <span className="absolute top-6 right-6 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20 rounded-full backdrop-blur-md">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-2 text-shadow" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-300 line-clamp-2 mb-4" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="text-xs bg-white/10 px-2 py-1 rounded">
              #{tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-2 pt-4 border-t border-white/20">
          <div className="flex gap-4">
            <a
              href={project.githubUrl || '#'}
              className="text-slate-300 hover:text-primary transition-colors"
              title="View Code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a
              href={project.demoUrl || '#'}
              className="text-slate-300 hover:text-primary transition-colors"
              title="Live Demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link size={20} />
            </a>
          </div>
          <a href="#" className="text-sm font-semibold hover:text-primary transition-colors">
            Read More &rarr;
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
