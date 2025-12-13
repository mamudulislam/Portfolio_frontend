import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  category: 'Full Stack' | 'Mobile' | 'Frontend' | 'Backend';
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Mobile';
  level: number; // 0-100
  icon?: React.ReactNode;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}