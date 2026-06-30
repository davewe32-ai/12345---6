import React, { useState, useRef, useEffect } from 'react';
import { Search, ShoppingCart, Sun, Moon, Menu, X, Compass, ArrowRight } from 'lucide-react';
import { SERVICES, PRODUCTS, BLOGS } from '../data';
import { Service, Product, BlogPost } from '../types';
import Logo from './Logo';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenProduct: (product: Product) => void;
  onOpenBlog: (blog: BlogPost) => void;
  onOpenService: (service: Service) => void;
}

export default function Navbar({
  currentTab,
  setCurrentTab,
  darkMode,
  setDarkMode,
  cartCount,
  onOpenCart,
  onOpenProduct,
  onOpenBlog,
  onOpenService,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{
    services: Service[];
    products: Product[];
    blogs: BlogPost[];
  }>({ services: [], products: [], blogs: [] });

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults({ services: [], products: [], blogs: [] });
      return;
    }

    const query = searchQuery.toLowerCase();
    
    const filteredServices = SERVICES.filter(
      s => s.title.toLowerCase().includes(query) || s.description.toLowerCase().includes(query)
    ).slice(0, 3);

    const filteredProducts = PRODUCTS.filter(
      p => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)
    ).slice(0, 3);

    const filteredBlogs = BLOGS.filter(
      b => b.title.toLowerCase().includes(query) || b.excerpt.toLowerCase().includes(query)
    ).slice(0, 3);

    setSearchResults({
      services: filteredServices,
      products: filteredProducts,
      blogs: filteredBlogs
    });
  }, [searchQuery]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'store', label: 'Store' },
    { id: 'membership', label: 'Membership' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleSearchResultClick = (type: 'service' | 'product' | 'blog', item: any) => {
    setSearchOpen(false);
    setSearchQuery('');
    
    if (type === 'service') {
      setCurrentTab('services');
      onOpenService(item);
    } else if (type === 'product') {
      setCurrentTab('store');
      onOpenProduct(item);
    } else if (type === 'blog') {
      setCurrentTab('blog');
      onOpenBlog(item);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 glass border-b border-white/10 shadow-lg" id="app-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Identity */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => { setCurrentTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            {/* Official IPVPA Logo Brand Identity */}
            <Logo size={46} className="group-hover:scale-105 transition-transform duration-300 drop-shadow-md" />
            
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight tracking-wider text-brand-blue-900 dark:text-white group-hover:text-brand-gold-500 dark:group-hover:text-brand-gold-400 transition-colors duration-300">
                IPVPA
              </span>
              <span className="font-sans text-[10px] uppercase tracking-widest text-brand-gold-600 dark:text-brand-gold-400 font-semibold leading-none">
                Pyramid Vaastu
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setCurrentTab(item.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`px-4 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-300 relative ${
                  currentTab === item.id
                    ? 'text-brand-gold-600 dark:text-brand-gold-400 bg-brand-gold-500/10'
                    : 'text-gray-700 dark:text-gray-300 hover:text-brand-gold-600 dark:hover:text-brand-gold-400 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {item.label}
                {currentTab === item.id && (
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-gold-500 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Controls: Search, Theme, Cart */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            
            {/* Interactive Search Bar */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300 transition-all duration-200"
                aria-label="Search site"
              >
                <Search size={20} />
              </button>

              {searchOpen && (
                <div className="absolute right-0 mt-3 w-80 sm:w-96 rounded-2xl bg-white dark:bg-brand-blue-900 border border-gray-100 dark:border-brand-blue-800 shadow-2xl p-4 transition-all duration-300 z-50">
                  <div className="relative flex items-center mb-3">
                    <Search className="absolute left-3 text-gray-400" size={18} />
                    <input
                      type="text"
                      placeholder="Search services, products, blogs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-brand-blue-800 bg-gray-50 dark:bg-brand-blue-800/50 text-gray-800 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold-500 focus:border-transparent transition-all"
                      autoFocus
                    />
                    {searchQuery && (
                      <button onClick={() => setSearchQuery('')} className="absolute right-3 text-gray-400 hover:text-gray-600">
                        <X size={16} />
                      </button>
                    )}
                  </div>

                  {/* Search Results Display */}
                  {searchQuery.trim() ? (
                    <div className="max-h-80 overflow-y-auto space-y-4 pr-1">
                      {searchResults.services.length === 0 && 
                       searchResults.products.length === 0 && 
                       searchResults.blogs.length === 0 ? (
                        <div className="text-center py-6 text-sm text-gray-400">
                          No results found for "{searchQuery}"
                        </div>
                      ) : (
                        <>
                          {searchResults.services.length > 0 && (
                            <div>
                              <h4 className="text-[11px] font-bold text-brand-gold-600 dark:text-brand-gold-400 uppercase tracking-widest mb-1.5">Services</h4>
                              <div className="space-y-1">
                                {searchResults.services.map(s => (
                                  <button
                                    key={s.id}
                                    onClick={() => handleSearchResultClick('service', s)}
                                    className="w-full text-left p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition flex items-center justify-between group"
                                  >
                                    <div className="truncate pr-2">
                                      <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 group-hover:text-brand-gold-600 dark:group-hover:text-brand-gold-400 transition-colors truncate">{s.title}</p>
                                      <p className="text-[10px] text-gray-400 truncate">{s.description}</p>
                                    </div>
                                    <ArrowRight size={12} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-1" />
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}

                          {searchResults.products.length > 0 && (
                            <div>
                              <h4 className="text-[11px] font-bold text-brand-gold-600 dark:text-brand-gold-400 uppercase tracking-widest mb-1.5">Products</h4>
                              <div className="space-y-1">
                                {searchResults.products.map(p => (
                                  <button
                                    key={p.id}
                                    onClick={() => handleSearchResultClick('product', p)}
                                    className="w-full text-left p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition flex items-center justify-between group"
                                  >
                                    <div className="truncate pr-2">
                                      <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 group-hover:text-brand-gold-600 dark:group-hover:text-brand-gold-400 transition-colors truncate">{p.name}</p>
                                      <p className="text-[10px] text-brand-gold-600 dark:text-brand-gold-400 font-medium">${p.price}</p>
                                    </div>
                                    <ArrowRight size={12} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-1" />
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}

                          {searchResults.blogs.length > 0 && (
                            <div>
                              <h4 className="text-[11px] font-bold text-brand-gold-600 dark:text-brand-gold-400 uppercase tracking-widest mb-1.5">Blog Articles</h4>
                              <div className="space-y-1">
                                {searchResults.blogs.map(b => (
                                  <button
                                    key={b.id}
                                    onClick={() => handleSearchResultClick('blog', b)}
                                    className="w-full text-left p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition flex items-center justify-between group"
                                  >
                                    <div className="truncate pr-2">
                                      <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 group-hover:text-brand-gold-600 dark:group-hover:text-brand-gold-400 transition-colors truncate">{b.title}</p>
                                      <p className="text-[10px] text-gray-400 truncate">{b.excerpt}</p>
                                    </div>
                                    <ArrowRight size={12} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-1" />
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="py-4 text-center">
                      <div className="flex justify-center mb-2 text-brand-gold-500">
                        <Compass className="animate-spin-slow" size={24} />
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Discover services, copper pyramids, and research journals instantly.</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300 transition-all duration-200"
              aria-label="Toggle visual theme"
            >
              {darkMode ? <Sun size={20} className="text-brand-gold-400" /> : <Moon size={20} />}
            </button>

            {/* Shopping Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300 relative transition-all duration-200"
              aria-label="View shopping cart"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-brand-gold-500 text-[10px] font-bold text-brand-blue-900 flex items-center justify-center border border-white dark:border-brand-blue-900 animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300 lg:hidden transition-all duration-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass border-t border-white/10 px-4 py-4 space-y-2 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentTab(item.id);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full text-left px-4 py-3 rounded-xl font-sans text-sm font-semibold transition-all ${
                currentTab === item.id
                  ? 'text-brand-gold-500 bg-brand-blue-900/40 dark:bg-white/5 border-l-4 border-brand-gold-500'
                  : 'text-gray-800 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
