import React from 'react';
import { Award, GraduationCap, ArrowUpRight } from 'lucide-react';
import { TEAM } from '../data';

export default function Team() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-brand-blue-900/30 transition-colors duration-300" id="team-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Team Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display font-bold text-xs sm:text-sm uppercase tracking-widest text-brand-gold-600 dark:text-brand-gold-400 mb-3">
            Our Team
          </h2>
          <p className="font-display font-bold text-3xl sm:text-4xl text-brand-blue-900 dark:text-white leading-tight">
            Leading Experts in Spatial Harmony
          </p>
          <div className="w-16 h-1 bg-brand-gold-500 mx-auto mt-4 rounded-full" />
          <p className="font-sans text-sm text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
            Uniting credentialed structural engineers, visionary architects, luxury designers, and academic researchers to spearhead scientific Pyramid Vaastu.
          </p>
        </div>

        {/* Chairman Dedicated Layout Card (Meril Peiris) */}
        <div className="max-w-5xl mx-auto mb-16">
          {TEAM.filter(member => member.id === 'meril-peiris').map((chairman) => (
            <div 
              key={chairman.id}
              className="rounded-3xl bg-white dark:bg-brand-blue-900 border border-gray-100 dark:border-brand-blue-800 shadow-xl overflow-hidden grid md:grid-cols-12 gap-0 group hover:border-brand-gold-500/30 transition-all duration-300"
            >
              {/* Chairman Photo */}
              <div className="md:col-span-5 h-[380px] md:h-full min-h-[380px] relative overflow-hidden bg-brand-blue-950 flex items-center justify-center p-6">
                <img
                  src={chairman.image}
                  alt={chairman.name}
                  className="w-full h-full object-contain rounded-2xl group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Chairman stamp */}
                <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-xl glass border border-white/20">
                  <span className="font-sans text-[10px] font-bold text-white uppercase tracking-widest">
                    IPVPA Chairman
                  </span>
                </div>
              </div>

              {/* Chairman details */}
              <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
                <span className="font-sans text-xs font-bold text-brand-gold-600 dark:text-brand-gold-400 uppercase tracking-widest mb-2 block">
                  Founding Leadership
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-blue-900 dark:text-white mb-2 leading-none">
                  {chairman.name}
                </h3>
                <p className="font-sans text-sm font-semibold text-gray-600 dark:text-gray-300 mb-6 italic">
                  {chairman.designation}
                </p>

                <div className="w-12 h-0.5 bg-brand-gold-500 mb-6" />

                <div className="space-y-4">
                  <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-blue-900 dark:text-white flex items-center gap-2">
                    <GraduationCap size={16} className="text-brand-gold-500" /> Academic & Corporate Record
                  </h4>
                  <ul className="space-y-2.5">
                    {chairman.qualifications.map((q, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        <span className="text-brand-gold-500 font-extrabold mr-2 flex-shrink-0">✓</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Members Grid (6 members) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TEAM.filter(member => member.id !== 'meril-peiris').map((member) => (
            <div
              key={member.id}
              className="group rounded-2xl bg-white dark:bg-brand-blue-900 border border-gray-100 dark:border-brand-blue-800 shadow-sm hover:shadow-xl hover:border-brand-gold-500/20 transition-all duration-350 overflow-hidden flex flex-col"
            >
              {/* Member Photo */}
              <div className="h-72 relative bg-gray-100 dark:bg-brand-blue-850 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Role Overlay Tag */}
                <span className="absolute bottom-4 left-4 px-2.5 py-1 rounded-lg bg-brand-blue-900/90 text-white font-sans text-[9px] font-bold uppercase tracking-wider border border-white/10">
                  {member.role}
                </span>
              </div>

              {/* Member Description */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-brand-blue-900 dark:text-white group-hover:text-brand-gold-600 dark:group-hover:text-brand-gold-400 transition-colors mb-1 leading-tight">
                    {member.name}
                  </h3>
                  <p className="font-sans text-xs text-brand-gold-600 dark:text-brand-gold-400 font-semibold mb-4 uppercase tracking-widest leading-none">
                    {member.designation}
                  </p>
                  
                  <div className="w-8 h-0.5 bg-brand-gold-500/40 mb-4" />

                  {/* Qualifications list */}
                  <ul className="space-y-2 mb-6">
                    {member.qualifications.map((q, idx) => (
                      <li key={idx} className="flex items-start text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 leading-normal">
                        <span className="text-brand-gold-500 font-extrabold mr-1.5 flex-shrink-0">✓</span>
                        <span className="line-clamp-2">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center space-x-1 font-sans text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-brand-gold-500 transition-colors mt-auto">
                  <span>Verify Credentials</span>
                  <ArrowUpRight size={12} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
