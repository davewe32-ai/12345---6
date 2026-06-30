import React from 'react';
import { motion } from 'motion/react';
import { Award, Globe2, Building, Users } from 'lucide-react';
import Logo from './Logo';

interface HeroProps {
  onNavigate: (tab: string) => void;
  onScrollToAbout: () => void;
}

export default function Hero({ onNavigate, onScrollToAbout }: HeroProps) {
  const stats = [
    { value: '500+', label: 'Projects Completed', icon: Building, desc: 'Luxury homes, commercial towers & factories' },
    { value: '150+', label: 'Global Members', icon: Users, desc: 'Architects, engineers & consultants' },
    { value: '20+', label: 'Certified Experts', icon: Award, desc: 'Highly trained scientific consultants' },
    { value: '10+', label: 'Countries Represented', icon: Globe2, desc: 'Uniting practitioners globally' }
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden blue-gradient-bg" id="hero-section">
      {/* Background Image Overlay with sacred geometry parallax grid and rich particles */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Architecture and Sacred Geometry"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay scale-105 transform transition-transform duration-10000"
          referrerPolicy="no-referrer"
        />
        {/* Subtle geometric grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,215,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,215,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        {/* Smooth radial gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900 via-transparent to-brand-blue-900/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(245,197,24,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col items-center text-center">
        
        {/* Glowing Central Logo Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mb-6 flex justify-center items-center group"
        >
          <div className="absolute inset-0 rounded-full bg-brand-gold-500/10 blur-3xl group-hover:bg-brand-gold-500/20 transition-all duration-1000 scale-125" />
          <Logo size={170} className="relative z-10 filter drop-shadow-[0_12px_36px_rgba(212,175,55,0.3)] hover:scale-105 transition-all duration-500 ease-out" />
        </motion.div>

        {/* Elite Association Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-gold-500/10 border border-brand-gold-500/30 mb-8 backdrop-blur-sm shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-brand-gold-400 animate-pulse" />
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-gold-400">
            International Professional Association
          </span>
        </motion.div>

        {/* Master Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl font-display font-bold text-4xl sm:text-5xl lg:text-7xl leading-tight text-white tracking-tight mb-6"
        >
          Building Better Spaces Through{' '}
          <span className="gold-gradient-text block sm:inline font-extrabold">
            Scientific Pyramid Vaastu
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl font-sans text-lg sm:text-xl text-gray-300 leading-relaxed font-light mb-12"
        >
          The International Pyramid Vaastu Professionals' Association unites experts in
          architecture, engineering, construction, design, and Pyramid Vaastu to create
          balanced, prosperous, and energy-efficient living and working environments.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-20"
        >
          <button
            onClick={() => onNavigate('membership')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-sans font-bold text-sm uppercase tracking-wider text-brand-blue-900 bg-gradient-to-r from-brand-gold-400 to-brand-gold-500 hover:from-brand-gold-500 hover:to-brand-gold-600 border border-brand-gold-400 shadow-[0_4px_20px_rgba(245,197,24,0.3)] hover:shadow-[0_4px_25px_rgba(245,197,24,0.5)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
          >
            Become a Member
          </button>
          
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-sans font-bold text-sm uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-brand-gold-500/50 backdrop-blur-sm transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
          >
            Book a Consultation
          </button>

          <button
            onClick={onScrollToAbout}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-sans font-bold text-sm uppercase tracking-wider text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer"
          >
            Learn More
          </button>
        </motion.div>

        {/* Stats Segment with Staggered Fade In */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl"
        >
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="glass p-6 rounded-2xl border border-white/5 text-center flex flex-col items-center group hover:border-brand-gold-500/30 transition-all duration-300 shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-gold-500/10 flex items-center justify-center text-brand-gold-400 mb-4 group-hover:bg-brand-gold-500/20 transition-all duration-300">
                  <IconComponent size={24} />
                </div>
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-white block mb-1">
                  {stat.value}
                </span>
                <span className="font-sans font-semibold text-xs sm:text-sm text-brand-gold-400 tracking-wider uppercase mb-1.5">
                  {stat.label}
                </span>
                <span className="font-sans text-[11px] text-gray-400 leading-normal max-w-[180px]">
                  {stat.desc}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Elegant Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold-500/40 to-transparent" />
    </section>
  );
}
