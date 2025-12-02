import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, EXPERIENCE, PERSONAL_INFO } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import mamudul from './img/mamudul.jpg'

const About: React.FC = () => {
  return (
    <div className="pt-28 md:pt-32 pb-20 min-h-screen">
       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Section with Image */}
          <div className="max-w-6xl mx-auto mb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">More than just <br /><span className="text-primary">code.</span></h1>
                      <div className="text-muted text-lg space-y-6 leading-relaxed">
                          <p>
                             I began my career as a self-taught developer driven by a strong curiosity to understand how systems work. Over the past year, I have evolved into an engineer capable of architecting enterprise-level solutions, developing mobile applications used by thousands of users, and contributing to the growth and effectiveness of engineering teams.
                          </p>
                          <p>
                              My philosophy is simple: <strong>User experience first, clean code always.</strong> I believe that technical complexity should never compromise usability. Whether it's optimization for low-end devices or implementing complex state management, every decision is made with the end-user in mind.
                          </p>
                      </div>
                  </motion.div>
                  
                  {/* Profile Image with Glow Effect */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative flex justify-center"
                  >
                      <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                          {/* Animated Glow Background */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-[40px] opacity-40 group-hover:opacity-60 transition-opacity duration-700 animate-pulse-slow"></div>
                          
                          {/* Rotating Border Ring */}
                          <div className="absolute -inset-1 rounded-full border border-primary/30 border-dashed animate-[spin_20s_linear_infinite]"></div>
                          
                          {/* Image */}
                          <img 
                            src={mamudul} 
                            alt={PERSONAL_INFO.name} 
                            className="relative w-full h-full object-cover rounded-full border-2 border-white/10 shadow-2xl z-10"
                          />
                          
                          {/* Floating Badge */}
                          <div className="absolute bottom-4 -right-2 bg-surface/80 backdrop-blur-md border border-muted/20 px-4 py-2 rounded-lg shadow-lg z-20">
                              <span className="text-xs font-bold text-primary uppercase tracking-wider">MERN Stack developer</span>
                          </div>
                      </div>
                  </motion.div>
              </div>
          </div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-2xl font-bold mb-10 flex items-center gap-2 text-slate-900 dark:text-white">
                  <span className="w-8 h-1 bg-secondary rounded-full"></span>
                  Experience
              </h2>
              <div className="space-y-12 border-l border-muted/20 ml-4 pl-8 md:pl-12 relative">
                  {EXPERIENCE.map((exp, idx) => (
                      <motion.div 
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                          <span className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full bg-background border-4 border-secondary"></span>
                          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                             <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                             <span className="font-mono text-sm text-primary">{exp.period}</span>
                          </div>
                          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">{exp.company}</p>
                          <ul className="space-y-2">
                             {exp.description.map((item, i) => (
                                 <li key={i} className="text-muted text-sm flex items-start gap-2">
                                     <CheckCircle2 size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                                     {item}
                                 </li>
                             ))}
                          </ul>
                      </motion.div>
                  ))}
              </div>
          </div>

          {/* Skills Grid */}
          <div className="max-w-4xl mx-auto">
             <h2 className="text-2xl font-bold mb-10 flex items-center gap-2 text-slate-900 dark:text-white">
                  <span className="w-8 h-1 bg-primary rounded-full"></span>
                  Technical Arsenal
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                  {['Frontend', 'Backend', 'DevOps'].map((cat) => (
                      <div key={cat} className="glass-panel p-6 rounded-xl border border-muted/20 shadow-sm">
                          <h3 className="font-bold text-lg mb-6 text-slate-900 dark:text-white">{cat}</h3>
                          <div className="space-y-4">
                              {SKILLS.filter(s => s.category === cat).map((skill) => (
                                  <div key={skill.name}>
                                      <div className="flex justify-between text-sm mb-1">
                                          <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                                          <span className="text-muted font-mono">{skill.level}%</span>
                                      </div>
                                      <div className="h-1.5 bg-muted/10 rounded-full overflow-hidden">
                                          <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                                          />
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
       </div>
    </div>
  );
};

export default About;