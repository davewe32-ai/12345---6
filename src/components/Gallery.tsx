import React, { useState } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { GALLERY } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'All', label: 'All Projects' },
    { id: 'Residential', label: 'Residential' },
    { id: 'Commercial', label: 'Commercial' },
    { id: 'Factories', label: 'Factories' },
    { id: 'Hotels', label: 'Hotels' },
    { id: 'Interior', label: 'Interior Design' },
    { id: 'Installations', label: 'Installations' },
    { id: 'Education', label: 'Training' },
    { id: 'Events', label: 'Events' },
    { id: 'Construction', label: 'Construction Sites' }
  ];

  const filteredItems = GALLERY.filter((item) => {
    return activeCategory === 'All' || item.category === activeCategory;
  });

  const openLightbox = (item: GalleryItem) => {
    const globalIndex = GALLERY.findIndex(g => g.id === item.id);
    setLightboxIndex(globalIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const prevIndex = lightboxIndex === 0 ? GALLERY.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const nextIndex = lightboxIndex === GALLERY.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(nextIndex);
  };

  const currentLightboxItem = lightboxIndex !== null ? GALLERY[lightboxIndex] : null;

  return (
    <section className="py-24 bg-white dark:bg-brand-blue-900 transition-colors duration-300" id="gallery-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-xs sm:text-sm uppercase tracking-widest text-brand-gold-600 dark:text-brand-gold-400 mb-3">
            IPVPA Portfolio
          </h2>
          <p className="font-display font-bold text-3xl sm:text-4xl text-brand-blue-900 dark:text-white leading-tight">
            Excellence Executed in Solid Geometry
          </p>
          <div className="w-16 h-1 bg-brand-gold-500 mx-auto mt-4 rounded-full" />
          <p className="font-sans text-sm text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
            Explore authentic images of our high-end custom villas, hotel installations, industrial sites, and global educational seminars.
          </p>
        </div>

        {/* Filter Navigation Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'text-brand-blue-900 bg-brand-gold-500 border border-brand-gold-500 shadow-md'
                  : 'text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-brand-blue-800/40 hover:bg-gray-100 dark:hover:bg-brand-blue-800 border border-gray-200/60 dark:border-brand-blue-800/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid Portfolio Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group rounded-2xl overflow-hidden bg-gray-50 dark:bg-brand-blue-850 border border-gray-100 dark:border-brand-blue-800 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image box with overlays */}
              <div className="h-64 relative overflow-hidden bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Visual hovering card effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/80 via-brand-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-brand-gold-500 text-brand-blue-900 flex items-center justify-center shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye size={20} />
                  </div>
                </div>

                {/* Left Category Label overlay */}
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-lg bg-brand-blue-900/90 text-white font-sans text-[9px] font-bold uppercase tracking-widest border border-white/10">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Text footer specifications */}
              <div className="p-5 flex-grow">
                <h3 className="font-display font-bold text-sm sm:text-base text-brand-blue-900 dark:text-white group-hover:text-brand-gold-600 dark:group-hover:text-brand-gold-400 transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-gray-400 dark:text-gray-400 leading-normal line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Global Lightbox Component Modal */}
        {lightboxIndex !== null && currentLightboxItem && (
          <div className="fixed inset-0 z-50 flex flex-col justify-center bg-black/95 backdrop-blur-md animate-fade-in">
            {/* Top Row: Count & Controls */}
            <div className="absolute top-0 left-0 right-0 h-20 px-6 sm:px-12 flex items-center justify-between text-white z-10">
              <span className="font-mono text-xs sm:text-sm tracking-wider text-gray-400">
                IMAGE {lightboxIndex + 1} OF {GALLERY.length} — <span className="text-brand-gold-400 font-sans uppercase font-bold">{currentLightboxItem.categoryLabel}</span>
              </span>
              <button
                onClick={closeLightbox}
                className="p-3 rounded-full hover:bg-white/10 text-white transition-colors border border-white/10"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Middle Row: Content & Navigation buttons */}
            <div className="flex items-center justify-between w-full h-full px-4 sm:px-10">
              
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="p-3 rounded-full hover:bg-white/10 text-white transition-all border border-white/10 flex-shrink-0 z-10"
                aria-label="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Main Medium Container */}
              <div className="relative max-w-5xl max-h-[65vh] w-full h-full flex items-center justify-center p-4">
                <img
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.title}
                  className="max-w-full max-h-full object-contain rounded-xl border border-white/5 shadow-2xl animate-scale-up"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="p-3 rounded-full hover:bg-white/10 text-white transition-all border border-white/10 flex-shrink-0 z-10"
                aria-label="Next Image"
              >
                <ChevronRight size={24} />
              </button>

            </div>

            {/* Bottom Row: Details and descriptions */}
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 text-center text-white bg-gradient-to-t from-black via-black/80 to-transparent">
              <div className="max-w-3xl mx-auto space-y-2">
                <h3 className="font-display font-extrabold text-lg sm:text-2xl text-brand-gold-400 tracking-wide">
                  {currentLightboxItem.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  {currentLightboxItem.description}
                </p>
                <div className="flex justify-center gap-2 pt-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-gold-500/10 border border-brand-gold-500/30 text-brand-gold-400 font-sans text-[10px] font-semibold uppercase tracking-wider">
                    <Sparkles size={11} /> Mathematical Calibration Confirmed
                  </span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
