import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2, AlertCircle } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, SKILLS, EXPERIENCE, PROJECTS } from '../constants';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string; isError?: boolean }[]>([
    { role: 'model', text: `Hi! I'm ${PERSONAL_INFO.name}'s AI Assistant. Ask me anything about his experience, skills, or projects!` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      // Use process.env.API_KEY directly as per guidelines.
      // Assume the environment variable is pre-configured and available.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // System Instruction: Defines the AI's persona and knowledge base
      const systemInstruction = `
        You are an AI assistant for a developer portfolio.
        
        **Developer Profile:**
        - Name: ${PERSONAL_INFO.name}
        - Title: ${PERSONAL_INFO.title}
        - Contact: ${PERSONAL_INFO.email}
        - Location: ${PERSONAL_INFO.location}
        
        **Technical Skills:**
        ${JSON.stringify(SKILLS)}
        
        **Work Experience:**
        ${JSON.stringify(EXPERIENCE)}
        
        **Projects:**
        ${JSON.stringify(PROJECTS)}
        
        **Directives:**
        1. Be professional, concise (under 100 words), and enthusiastic.
        2. Act as if you are the developer's personal recruiter agent.
        3. Prioritize highlighting the "Industrial Grade" and "Scalability" aspects of the projects.
        4. If asked about hiring/contact, provide the email address clearly.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userMessage,
        config: {
          systemInstruction: systemInstruction,
        }
      });

      const text = response.text;
      setMessages(prev => [...prev, { role: 'model', text: text || "I'm having trouble thinking right now." }]);

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "Sorry, I can't connect to the AI brain right now. Please check your network or API key configuration.",
        isError: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 md:w-96 h-[500px] glass-panel rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 border border-primary/20 animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-4 border-b border-muted/10 flex justify-between items-center backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                <Bot size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">AI Recruiter Assistant</h3>
                <p className="text-[10px] text-primary flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-muted hover:text-primary transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-surface/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                    msg.isError ? 'bg-red-500/20 text-red-500' :
                    msg.role === 'model' ? 'bg-primary/20 text-primary' : 'bg-slate-700 text-slate-300'
                }`}>
                   {msg.isError ? <AlertCircle size={14} /> : (msg.role === 'model' ? <Bot size={14} /> : <User size={14} />)}
                </div>
                <div className={`p-3 rounded-2xl text-sm max-w-[80%] leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none font-medium' 
                    : msg.isError
                        ? 'bg-red-500/10 border border-red-500/20 text-red-500 rounded-tl-none'
                        : 'bg-surface border border-muted/10 text-muted rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                 <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Bot size={14} className="text-primary" />
                 </div>
                 <div className="bg-surface border border-muted/10 p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-muted" />
                    <span className="text-xs text-muted">Thinking...</span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-surface/80 border-t border-muted/10">
             <div className="relative">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about my projects..."
                    className="w-full bg-background/50 border border-muted/20 rounded-full py-2.5 pl-4 pr-10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted/70"
                />
                <button 
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="absolute right-1 top-1 p-1.5 bg-primary text-white rounded-full hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    <Send size={14} />
                </button>
             </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center text-white hover:scale-110 transition-transform active:scale-95 z-50"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default GeminiChat;