import React, { useState } from 'react';
import { Search, ArrowRight, BookOpen, Layers, PhoneCall, CheckCircle } from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';
import LucideIcon from './LucideIcon';
import Logo from './Logo';

interface ServicesProps {
  onSelectService: (service: Service) => void;
  selectedService: Service | null;
  onCloseService: () => void;
  onInquireService: (serviceName: string) => void;
}

export default function Services({
  onSelectService,
  selectedService,
  onCloseService,
  onInquireService,
}: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Consultation', 'Design', 'Management', 'Education'];

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-white dark:bg-brand-blue-900 transition-colors duration-300" id="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <Logo size={100} className="mb-6 filter drop-shadow-[0_4px_16px_rgba(212,175,55,0.2)]" />
          <h2 className="font-display font-bold text-xs sm:text-sm uppercase tracking-widest text-brand-gold-600 dark:text-brand-gold-400 mb-3">
            Our Services
          </h2>
          <p className="font-display font-bold text-3xl sm:text-4xl text-brand-blue-900 dark:text-white leading-tight">
            Scientific Spatial Engineering & Consultancy
          </p>
          <div className="w-16 h-1 bg-brand-gold-500 mx-auto mt-4 rounded-full" />
          <p className="font-sans text-sm text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
            Discover our comprehensive suite of 20 scientific auditing, architectural planning, and structural energy balancing services.
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 p-6 rounded-2xl bg-gray-50 dark:bg-brand-blue-800/20 border border-gray-100 dark:border-brand-blue-800/30">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'text-brand-blue-900 bg-brand-gold-500 hover:bg-brand-gold-600 border border-brand-gold-500 shadow-md'
                    : 'text-gray-600 dark:text-gray-300 bg-white dark:bg-brand-blue-900 hover:bg-gray-100 dark:hover:bg-brand-blue-850 border border-gray-200 dark:border-brand-blue-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-brand-blue-800 bg-white dark:bg-brand-blue-900 text-gray-800 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Services Grid (20 items max) */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">No services found matching your query.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} 
              className="mt-4 px-6 py-2 rounded-xl bg-brand-gold-500 text-brand-blue-900 font-semibold hover:bg-brand-gold-600 transition"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="group p-8 rounded-2xl bg-white dark:bg-brand-blue-900 border border-gray-100 dark:border-brand-blue-800 hover:border-brand-gold-500 dark:hover:border-brand-gold-500/50 shadow-sm hover:shadow-xl transform hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Category Label */}
                  <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-brand-gold-600 dark:text-brand-gold-400 mb-4 block">
                    {service.category}
                  </span>
                  
                  {/* Dynamic Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue-900/5 dark:bg-brand-gold-500/10 flex items-center justify-center text-brand-blue-900 dark:text-brand-gold-400 group-hover:bg-brand-gold-500 group-hover:text-brand-blue-900 transition-all duration-300 mb-6">
                    <LucideIcon name={service.icon} size={24} />
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-brand-blue-900 dark:text-white group-hover:text-brand-gold-600 dark:group-hover:text-brand-gold-400 transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center space-x-2 font-sans text-xs font-bold uppercase tracking-wider text-brand-blue-900 dark:text-brand-gold-400 group-hover:text-brand-gold-500 transition-colors mt-auto">
                  <span>Explore Science & Details</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Detailed Service Modal/Drawer overlay */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-brand-blue-900 border border-gray-100 dark:border-brand-blue-800 shadow-2xl p-8 sm:p-10 max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={onCloseService}
                className="absolute top-6 right-6 p-2 rounded-xl bg-gray-50 dark:bg-brand-blue-800/50 hover:bg-gray-100 dark:hover:bg-brand-blue-800 text-gray-500 dark:text-gray-400 transition-colors border border-gray-100 dark:border-brand-blue-800"
                aria-label="Close modal"
              >
                <LucideIcon name="X" size={18} />
              </button>

              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-gold-500/10 flex items-center justify-center text-brand-gold-500">
                  <LucideIcon name={selectedService.icon} size={28} />
                </div>
                <div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-brand-gold-500">
                    {selectedService.category} Service
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-blue-900 dark:text-white leading-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-6 text-gray-600 dark:text-gray-300 font-sans text-sm sm:text-base leading-relaxed">
                <p className="font-semibold text-gray-800 dark:text-white">{selectedService.description}</p>
                
                <div className="p-5 rounded-2xl bg-gray-50 dark:bg-brand-blue-800/20 border border-gray-100 dark:border-brand-blue-800/40">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-gold-600 dark:text-brand-gold-400 mb-3 flex items-center gap-2">
                    <BookOpen size={14} /> Scientific Methodology & Scope
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedService.details}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle className="text-brand-gold-500 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-xs text-gray-500 dark:text-gray-400">Practiced under the expert oversight of registered structural engineers and architects.</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle className="text-brand-gold-500 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-xs text-gray-500 dark:text-gray-400">Includes post-implementation energy diagnostics report and calibration checks.</span>
                  </div>
                </div>
              </div>

              {/* Inquire Action Row */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 pt-6 border-t border-gray-100 dark:border-brand-blue-800">
                <button
                  onClick={() => onInquireService(selectedService.title)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-sans font-bold text-xs uppercase tracking-wider text-brand-blue-900 bg-brand-gold-500 hover:bg-brand-gold-600 border border-brand-gold-500 flex items-center justify-center gap-2.5 shadow-md shadow-brand-gold-500/10 transition-all cursor-pointer"
                >
                  <PhoneCall size={14} /> Inquire About Service
                </button>
                <button
                  onClick={onCloseService}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-sans font-semibold text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 border border-gray-200 dark:border-brand-blue-800 text-center transition"
                >
                  Return to List
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
