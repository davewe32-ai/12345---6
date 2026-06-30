import React, { useState } from 'react';
import { Mail, Facebook, Youtube, Linkedin, Instagram, MapPin, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export default function Footer({ currentTab, setCurrentTab, onOpenPrivacy, onOpenTerms }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Email address is required.');
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please provide a valid email.');
      return;
    }
    
    setError('');
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  const footerLinks = {
    services: [
      { id: 'pyramid-vaastu-consultation', label: 'Pyramid Consultation' },
      { id: 'residential-vaastu-analysis', label: 'Residential Analysis' },
      { id: 'commercial-building-consultation', label: 'Commercial Audit' },
      { id: 'architectural-design', label: 'Architectural Blueprint' },
      { id: 'energy-balancing', label: 'Energy Balancing' }
    ],
    association: [
      { id: 'home', label: 'Association Vision' },
      { id: 'membership', label: 'Membership Plans' },
      { id: 'gallery', label: 'Project Portfolio' },
      { id: 'blog', label: 'Research Journals' },
      { id: 'contact', label: 'Contact Us' }
    ]
  };

  return (
    <footer className="bg-brand-blue-900 border-t border-white/10 text-white transition-all duration-300" id="app-footer">
      
      {/* Top Banner section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10">
        
        {/* Brand details */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center space-x-3 group">
            <Logo size={48} className="drop-shadow-md group-hover:scale-105 transition-transform duration-300" />
            <div>
              <p className="font-display font-extrabold text-base tracking-wider leading-none">IPVPA</p>
              <p className="font-sans text-[10px] text-brand-gold-400 uppercase tracking-widest font-semibold mt-0.5">Pyramid Vaastu Science</p>
            </div>
          </div>
          
          <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
            The leading global accreditation forum for architects, structural engineers, and practitioners committing to non-destructive energetic spatial alignments.
          </p>

          {/* Socials */}
          <div className="flex items-center space-x-3 pt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-gold-500 hover:text-brand-blue-900 border border-white/10 hover:border-brand-gold-400 flex items-center justify-center transition" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-gold-500 hover:text-brand-blue-900 border border-white/10 hover:border-brand-gold-400 flex items-center justify-center transition" aria-label="Youtube">
              <Youtube size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-gold-500 hover:text-brand-blue-900 border border-white/10 hover:border-brand-gold-400 flex items-center justify-center transition" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-gold-500 hover:text-brand-blue-900 border border-white/10 hover:border-brand-gold-400 flex items-center justify-center transition" aria-label="Instagram">
              <Instagram size={16} />
            </a>
          </div>
        </div>

        {/* Association Links */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-gold-400">Quick Navigation</h4>
          <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-gray-400">
            {footerLinks.association.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => { setCurrentTab(item.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition flex items-center gap-1 group text-left"
                >
                  <span className="w-1 h-1 rounded-full bg-brand-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Links */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-gold-400">Key Services</h4>
          <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-gray-400">
            {footerLinks.services.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => { setCurrentTab('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition flex items-center gap-1 group text-left"
                >
                  <span className="w-1 h-1 rounded-full bg-brand-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-gold-400">Newsletter Subscription</h4>
          <p className="font-sans text-xs text-gray-400 leading-relaxed">
            Subscribe to receive academic research papers, calibration logs, and event summons directly.
          </p>

          <form onSubmit={handleSubscribeSubmit} className="space-y-2">
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand-gold-500 focus:border-transparent transition"
              />
              <button
                type="submit"
                className="absolute right-1.5 px-3.5 py-1.5 rounded-lg bg-brand-gold-500 text-brand-blue-900 font-sans font-bold text-[10px] uppercase tracking-wider hover:bg-brand-gold-600 transition cursor-pointer"
              >
                Join
              </button>
            </div>
            {error && <p className="text-red-400 text-[10px] font-medium pl-1">{error}</p>}
            {subscribed && (
              <div className="p-2 bg-green-500/10 border border-green-500/20 text-green-400 text-[11px] rounded-lg flex items-center gap-1.5">
                <CheckCircle2 size={12} /> Successfully registered. Welcome to IPVPA.
              </div>
            )}
          </form>
        </div>

      </div>

      {/* Bottom Legal bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-sans gap-4">
        <p>© 2026 International Pyramid Vaastu Professionals' Association. All Rights Reserved.</p>
        
        <div className="flex items-center space-x-6">
          <button onClick={onOpenPrivacy} className="hover:text-white transition">Privacy Policy</button>
          <button onClick={onOpenTerms} className="hover:text-white transition">Terms & Conditions</button>
          <span className="flex items-center gap-1 text-[10px] text-gray-600"><Sparkles size={10} className="text-brand-gold-500" /> Grounded in Science</span>
        </div>
      </div>

    </footer>
  );
}
