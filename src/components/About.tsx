import React from 'react';
import { motion } from 'motion/react';
import { Eye, ShieldCheck, Cpu, HeartPulse, Activity, Zap, Compass, Flame, User } from 'lucide-react';
import Logo from './Logo';

export default function About() {
  const foundationPrinciples = [
    { text: 'Correct Vaastu defects', icon: ShieldCheck, desc: 'Neutralize structural skewness and bad cardinal entries virtually.' },
    { text: 'Balance energy fields', icon: Activity, desc: 'Align the geomagnetic grids (Jaivik Urja) with your personal bio-frequency.' },
    { text: 'Improve positive vibrations', icon: Zap, desc: 'Saturate the atmosphere with clean cosmic frequencies using dual-chamber accumulators.' },
    { text: 'Enhance harmony & focus', icon: Compass, desc: 'Optimize space layouts to foster collaboration, clarity, and peace.' },
    { text: 'Support overall wellbeing', icon: HeartPulse, desc: 'Mitigate the physiological strain of geopathic stress and EMF smog.' },
    { text: 'Increase energy where required', icon: Flame, desc: 'Boost solar Northwest/Northeast power flows using Pure Copper instruments.' }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-brand-blue-900/30 transition-colors duration-300" id="about-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <Logo size={100} className="mb-6 filter drop-shadow-[0_4px_16px_rgba(212,175,55,0.2)]" />
          <h2 className="font-display font-bold text-xs sm:text-sm uppercase tracking-widest text-brand-gold-600 dark:text-brand-gold-400 mb-3">
            About IPVPA
          </h2>
          <p className="font-display font-bold text-3xl sm:text-4xl text-brand-blue-900 dark:text-white leading-tight">
            Advancing the Science of Harmonious Living Spaces
          </p>
          <div className="w-16 h-1 bg-brand-gold-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Vision & Leadership Module */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-brand-gold-500/20 shadow-2xl z-10 bg-brand-blue-950/80 aspect-square flex flex-col items-center justify-center text-brand-gold-400 p-8">
              <div className="w-36 h-36 rounded-full bg-brand-blue-900/60 border border-brand-gold-500/30 flex items-center justify-center shadow-2xl mb-4">
                <User size={80} className="stroke-[1.5]" />
              </div>
              <span className="font-sans text-xs text-gray-400 uppercase tracking-widest">IPVPA Leadership</span>
              
              {/* Image Floating Captions */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass border border-white/10 text-center">
                <p className="font-display font-extrabold text-base text-white mb-0.5">Meril Peiris</p>
                <p className="font-sans text-[10px] text-brand-gold-400 uppercase tracking-widest font-semibold">
                  Chairman & Architectural Designer
                </p>
              </div>
            </div>
            
            {/* Background design elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-gold-500/10 rounded-full blur-2xl -z-10 animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-blue-700/20 rounded-full blur-3xl -z-10" />
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-blue-900/5 dark:bg-white/5 border border-black/5 dark:border-white/10 w-fit mb-6">
              <Eye size={16} className="text-brand-gold-600 dark:text-brand-gold-400" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-blue-900 dark:text-white">Our Vision & Mission</span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-brand-blue-900 dark:text-white tracking-tight mb-6">
              Established Under the Vision of Meril Peiris
            </h3>

            <p className="font-sans text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              The International Pyramid Vaastu Professionals' Association was established under the visionary leadership of 
              <strong className="text-brand-blue-900 dark:text-white font-semibold"> Meril Peiris</strong>, a preeminent Architectural Designer, 
              Pyramid Vaastu Science Specialist, Chairman of Glorious Homes, and Chairman of the Association itself.
            </p>

            <p className="font-sans text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              The Association acts as an elite planetary forum, uniting top professionals from architecture, 
              civil & structural engineering, building construction, luxury interior design, quantity surveying, 
              large-scale project management, corporate property development, and scientific Pyramid Vaastu consultancy to promote 
              academic and professional excellence.
            </p>

            <div className="p-6 rounded-2xl bg-brand-blue-900/[0.02] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05] border-l-4 border-l-brand-gold-500 mb-6">
              <p className="font-sans italic text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                "Our mission is to educate modern engineering and design professionals, improve global living and industrial environments, 
                and introduce scientifically proven, non-destructive Pyramid Vaastu instruments that bring immense positive energy, harmony, 
                and balance to every space."
              </p>
            </div>
          </div>
        </div>

        {/* Foundation & Scientific Principles Module */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-blue-900/5 dark:bg-white/5 border border-black/5 dark:border-white/10 w-fit mb-6">
              <Cpu size={16} className="text-brand-gold-600 dark:text-brand-gold-400" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-blue-900 dark:text-white">Scientific Foundation</span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-brand-blue-900 dark:text-white tracking-tight mb-6">
              Inspired by the Pioneer Research of Prof. Dr. Jiten Bhatt
            </h3>

            <p className="font-sans text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Our principles are deeply rooted in the pioneering research and scientific Pyramid Vaastu concepts developed by the renowned 
              <strong className="text-brand-blue-900 dark:text-white font-semibold"> Prof. Dr. Jiten Bhatt</strong>. IPVPA strictly follows 
              this rigorous, research-validated philosophy, avoiding superstition and treating spatial alignment purely as a bio-resonance science.
            </p>

            <p className="font-sans text-xs font-bold uppercase tracking-widest text-brand-gold-600 dark:text-brand-gold-400 mb-6">
              Guiding Methodologies of the Association
            </p>

            {/* List of 6 objectives with beautiful grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {foundationPrinciples.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex space-x-3.5">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-gold-500/10 flex items-center justify-center text-brand-gold-500 dark:text-brand-gold-400">
                      <IconComponent size={18} />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-sm text-brand-blue-900 dark:text-white mb-1">
                        {item.text}
                      </h4>
                      <p className="font-sans text-xs text-gray-500 dark:text-gray-400 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden border border-brand-gold-500/20 shadow-2xl">
              <img
                src="https://glorioushomeslk.com/wp-content/uploads/2025/09/House-in-Ja-Ela-13.webp"
                alt="Sacred Geometry Research and Architecture"
                className="w-full h-[520px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/85 via-brand-blue-850/10 to-transparent" />
              
              <div className="absolute top-6 right-6 p-4 rounded-2xl glass border border-white/10 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-brand-gold-500/20 flex items-center justify-center text-brand-gold-400 font-bold font-display text-lg">
                  Φ
                </div>
                <div>
                  <p className="font-display font-extrabold text-xs text-white uppercase tracking-wider">Golden Ratio</p>
                  <p className="font-mono text-[10px] text-brand-gold-400">1:1.618 Proportion</p>
                </div>
              </div>
            </div>
            
            {/* Background design elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-gold-500/10 rounded-full blur-2xl -z-10 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-blue-700/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>

      </div>
    </section>
  );
}
