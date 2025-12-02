import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import axios from 'axios';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Project Inquiry',
        message: ''
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [responseMessage, setResponseMessage] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setResponseMessage('');

        try {
            const response = await axios.post('https://portfolio-backend-sigma-taupe.vercel.app/contact', formData);

            setStatus('success');
            setResponseMessage(response.data.message || 'Message sent successfully!');
            setFormData({ name: '', email: '', subject: 'Project Inquiry', message: '' });
        } catch (error: any) {
            setStatus('error');
            setResponseMessage(error.response?.data?.message || 'An error occurred.');
        }
    };
  return (
    <div className="pt-28 md:pt-32 pb-20 min-h-screen flex flex-col justify-center">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
            {/* Info Side */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Let's build something <br /><span className="text-primary">extraordinary.</span></h1>
                <p className="text-muted text-lg mb-12 leading-relaxed">
                    I'm currently available for freelance projects and full-time roles. If you're looking for a developer who cares about performance, accessibility, and clean code, let's talk.
                </p>

                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center text-primary border border-muted/20 shadow-sm">
                            <Mail />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Email Me</h3>
                            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-muted hover:text-primary transition-colors break-all">{PERSONAL_INFO.email}</a>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center text-secondary border border-muted/20 shadow-sm">
                            <MapPin />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Location</h3>
                            <p className="text-muted">{PERSONAL_INFO.location}</p>
                            <p className="text-xs text-muted/80 mt-1 uppercase tracking-widest">Remote Available</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-12 border-t border-muted/20">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-muted mb-4">Connect</h4>
                    <div className="flex gap-4">
                        {[
                            { icon: <Github />, url: PERSONAL_INFO.socials.github },
                            { icon: <Linkedin />, url: PERSONAL_INFO.socials.linkedin },
                            { icon: <Twitter />, url: PERSONAL_INFO.socials.twitter },
                        ].map((social, idx) => (
                            <a 
                                key={idx} 
                                href={social.url} 
                                className="w-10 h-10 rounded-full bg-surface border border-muted/10 flex items-center justify-center text-muted hover:bg-primary hover:text-white hover:-translate-y-1 transition-all shadow-sm"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-panel p-6 md:p-8 rounded-2xl border border-muted/20 relative shadow-xl shadow-black/5 dark:shadow-none"
            >
                {/* Decorative gradients */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -z-10 pointer-events-none" />
                
                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send a Message</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-muted">Name</label>
                            <input 
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-background/50 border border-muted/20 rounded-lg p-3 text-slate-900 dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-muted/50"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-muted">Email</label>
                            <input 
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-background/50 border border-muted/20 rounded-lg p-3 text-slate-900 dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-muted/50"
                                placeholder="john@company.com"
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted">Subject</label>
                        <select 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-background/50 border border-muted/20 rounded-lg p-3 text-slate-900 dark:text-slate-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all appearance-none"
                        >
                            <option>Project Inquiry</option>
                            <option>Job Opportunity</option>
                            <option>General Question</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted">Message</label>
                        <textarea 
                            rows={4}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-background/50 border border-muted/20 rounded-lg p-3 text-slate-900 dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none placeholder:text-muted/50"
                            placeholder="Tell me about your project..."
                            required
                        ></textarea>
                    </div>

                    <div className="h-12">
                        {status === 'idle' && (
                            <button 
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold uppercase tracking-widest rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg"
                            >
                                Send Message <Send size={16} />
                            </button>
                        )}
                        {status === 'loading' && (
                            <div className="flex items-center justify-center w-full h-full">
                                <Loader2 className="animate-spin text-primary" />
                            </div>
                        )}
                        {status === 'success' && (
                             <div className="flex items-center justify-center w-full h-full text-green-500 bg-green-500/10 rounded-lg">
                                <CheckCircle className="mr-2" /> {responseMessage}
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="flex items-center justify-center w-full h-full text-red-500 bg-red-500/10 rounded-lg">
                                <XCircle className="mr-2" /> {responseMessage}
                            </div>
                        )}
                    </div>
                </form>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;