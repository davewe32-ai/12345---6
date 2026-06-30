import React, { useState } from 'react';
import { Search, ShoppingBag, Eye, Check, X, ShieldCheck, Heart, Sparkles, ShoppingCart, CreditCard } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import InstrumentImage from './InstrumentImages';
import Logo from './Logo';

interface StoreProps {
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
  selectedProduct: Product | null;
  onSelectProduct: (product: Product) => void;
  onCloseProduct: () => void;
}

export default function Store({
  onAddToCart,
  onBuyNow,
  selectedProduct,
  onSelectProduct,
  onCloseProduct,
}: StoreProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [addFeedback, setAddFeedback] = useState<string | null>(null);

  const categories = ['All', 'Energy Instruments', 'Boundary Tools', 'Personal Wellness', 'Correction Tools', 'Prosperity', 'Industrial Tools'];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (productId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  const handleAddToCartWithFeedback = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddFeedback(product.id);
    setTimeout(() => {
      setAddFeedback(null);
    }, 2000);
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-brand-blue-900/30 transition-colors duration-300" id="store-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Store Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <Logo size={100} className="mb-6 filter drop-shadow-[0_4px_16px_rgba(212,175,55,0.2)]" />
          <h2 className="font-display font-bold text-xs sm:text-sm uppercase tracking-widest text-brand-gold-600 dark:text-brand-gold-400 mb-3">
            IPVPA Instrument Store
          </h2>
          <p className="font-display font-bold text-3xl sm:text-4xl text-brand-blue-900 dark:text-white leading-tight">
            Certified Scientific Pyramid Instruments
          </p>
          <div className="w-16 h-1 bg-brand-gold-500 mx-auto mt-4 rounded-full" />
          <p className="font-sans text-sm text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
            All instruments are hand-crafted, mathematically calibrated to 51.8° pyramid geometry, and activated in our physical laboratories.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-12 p-6 rounded-2xl bg-white dark:bg-brand-blue-900 border border-gray-100 dark:border-brand-blue-800 shadow-sm">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-xl font-sans text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'text-brand-blue-900 bg-brand-gold-500 border border-brand-gold-500 shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-brand-blue-800/40 hover:bg-gray-100 dark:hover:bg-brand-blue-800 border border-gray-200/60 dark:border-brand-blue-800/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search instruments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-brand-blue-800 bg-gray-50 dark:bg-brand-blue-800/50 text-gray-800 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Catalog Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">No instruments found matching your search.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} 
              className="mt-4 px-6 py-2.5 rounded-xl bg-brand-gold-500 text-brand-blue-900 font-semibold hover:bg-brand-gold-600 transition"
            >
              Show All Products
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const isFav = favorites.includes(product.id);
              const isAdded = addFeedback === product.id;
              
              return (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="group rounded-2xl bg-white dark:bg-brand-blue-900 border border-gray-100 dark:border-brand-blue-800/50 hover:border-brand-gold-500/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden cursor-pointer relative"
                >
                  {/* Image Block */}
                  <div className="relative h-64 bg-gray-100 dark:bg-brand-blue-850 overflow-hidden">
                    {product.image.startsWith('instrument-svg-') ? (
                      <div className="w-full h-full p-6 flex items-center justify-center bg-gray-50 dark:bg-brand-blue-850 group-hover:scale-105 transition-transform duration-500">
                        <InstrumentImage id={product.image} />
                      </div>
                    ) : (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-xs font-semibold flex items-center gap-1">
                        <Eye size={14} /> Tap to expand specifications
                      </span>
                    </div>

                    {/* Category Overlay Tag */}
                    <span className="absolute top-4 left-4 px-2.5 py-1 rounded-lg bg-brand-blue-900/90 text-white font-sans text-[9px] font-bold uppercase tracking-wider border border-white/10">
                      {product.category}
                    </span>

                    {/* Favorite Button */}
                    <button
                      onClick={(e) => toggleFavorite(product.id, e)}
                      className="absolute top-4 right-4 p-2 rounded-xl bg-white/95 dark:bg-brand-blue-900/95 shadow hover:scale-110 text-gray-500 hover:text-red-500 transition-all"
                      aria-label="Add to favorites"
                    >
                      <Heart size={16} fill={isFav ? '#ef4444' : 'none'} className={isFav ? 'text-red-500' : ''} />
                    </button>
                  </div>

                  {/* Content Block */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-display font-bold text-lg text-brand-blue-900 dark:text-white leading-snug group-hover:text-brand-gold-600 dark:group-hover:text-brand-gold-400 transition-colors">
                          {product.name}
                        </h3>
                        <span className="font-mono font-bold text-lg text-brand-blue-900 dark:text-brand-gold-400">
                          ${product.price}
                        </span>
                      </div>

                      <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Benefits Preview */}
                      <ul className="space-y-1.5 mb-6">
                        {product.benefits.slice(0, 2).map((benefit, i) => (
                          <li key={i} className="flex items-start text-[11px] sm:text-xs text-gray-600 dark:text-gray-300 font-sans leading-normal">
                            <span className="text-brand-gold-500 font-bold mr-1.5 flex-shrink-0">✓</span>
                            <span className="line-clamp-1">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Row */}
                    <div className="grid grid-cols-2 gap-3 mt-auto">
                      <button
                        onClick={(e) => handleAddToCartWithFeedback(product, e)}
                        className={`py-2.5 rounded-xl font-sans font-bold text-[11px] uppercase tracking-wider border flex items-center justify-center gap-1.5 transition-all ${
                          isAdded
                            ? 'bg-green-500 border-green-500 text-white shadow-lg'
                            : 'bg-transparent border-gray-200 dark:border-brand-blue-800 text-gray-700 dark:text-gray-200 hover:border-brand-gold-500 dark:hover:border-brand-gold-500 hover:bg-brand-gold-500/5'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check size={13} strokeWidth={3} /> Added
                          </>
                        ) : (
                          <>
                            <ShoppingCart size={13} /> Add to Cart
                          </>
                        )}
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); onBuyNow(product); }}
                        className="py-2.5 rounded-xl font-sans font-bold text-[11px] uppercase tracking-wider text-brand-blue-900 bg-brand-gold-500 hover:bg-brand-gold-600 border border-brand-gold-500 hover:border-brand-gold-600 shadow-md shadow-brand-gold-500/5 flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]"
                      >
                        <CreditCard size={13} /> Buy Now
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Detailed Product Specification Lightbox Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-4xl rounded-3xl bg-white dark:bg-brand-blue-900 border border-gray-100 dark:border-brand-blue-800 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={onCloseProduct}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/80 dark:bg-brand-blue-800/80 hover:bg-gray-100 dark:hover:bg-brand-blue-700 text-gray-600 dark:text-gray-300 transition-colors z-10 border border-gray-200 dark:border-brand-blue-700 shadow-sm"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="grid md:grid-cols-12 gap-0">
                {/* Left Side: Large image display */}
                <div className="md:col-span-6 relative h-80 md:h-full min-h-[380px] bg-gray-50 dark:bg-brand-blue-850">
                  {selectedProduct.image.startsWith('instrument-svg-') ? (
                    <div className="w-full h-full p-12 flex items-center justify-center bg-gray-50 dark:bg-brand-blue-850">
                      <InstrumentImage id={selectedProduct.image} />
                    </div>
                  ) : (
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                  
                  {/* Quality Emblem Overlay */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass border border-white/20">
                    <ShieldCheck size={16} className="text-brand-gold-400" />
                    <span className="font-sans text-[10px] font-bold text-white uppercase tracking-widest">
                      IPVPA Laboratory Certified
                    </span>
                  </div>
                </div>

                {/* Right Side: Specifications and descriptions */}
                <div className="md:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    {/* Header tags */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2.5 py-1 rounded-lg bg-brand-gold-500/10 text-brand-gold-600 dark:text-brand-gold-400 font-sans text-[9px] font-bold uppercase tracking-widest border border-brand-gold-500/20">
                        {selectedProduct.category}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-gray-400 font-sans">
                        <Sparkles size={11} className="text-brand-gold-500 animate-spin-slow" /> 51.8° Calibration
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-blue-900 dark:text-white leading-tight mb-2">
                      {selectedProduct.name}
                    </h3>

                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="font-mono font-bold text-2xl text-brand-gold-600 dark:text-brand-gold-400">
                        ${selectedProduct.price}
                      </span>
                      <span className="text-xs text-gray-400 font-sans">Includes global priority shipping & activation package</span>
                    </div>

                    <div className="space-y-6 font-sans text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      <p className="font-normal text-gray-700 dark:text-gray-200">{selectedProduct.description}</p>
                      
                      {/* Detailed Bullet Benefits */}
                      <div>
                        <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-gold-600 dark:text-brand-gold-400 mb-3">
                          Verified Energetic Benefits
                        </h4>
                        <ul className="space-y-2.5">
                          {selectedProduct.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                              <span className="text-brand-gold-500 font-extrabold mr-2 flex-shrink-0">✓</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Trigger buttons inside modal */}
                  <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-gray-100 dark:border-brand-blue-800">
                    <button
                      onClick={(e) => handleAddToCartWithFeedback(selectedProduct, e)}
                      className="w-full py-4 rounded-xl font-sans font-bold text-xs uppercase tracking-widest text-gray-700 dark:text-white bg-transparent border border-gray-200 dark:border-brand-blue-800 hover:border-brand-gold-500 hover:bg-brand-gold-500/5 transition-all flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={14} /> Add to Cart Tray
                    </button>
                    <button
                      onClick={() => onBuyNow(selectedProduct)}
                      className="w-full py-4 rounded-xl font-sans font-bold text-xs uppercase tracking-widest text-brand-blue-900 bg-brand-gold-500 hover:bg-brand-gold-600 border border-brand-gold-500 shadow-lg shadow-brand-gold-500/10 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                    >
                      <ShoppingBag size={14} /> Initiate Buy Now
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
