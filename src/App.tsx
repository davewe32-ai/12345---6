import React, { useState, useEffect } from 'react';
import { ArrowUp, Star, ShieldCheck, X, Sparkles, BookOpen, Quote } from 'lucide-react';

// Static Data and Types
import { SERVICES, PRODUCTS, BLOGS, TESTIMONIALS } from './data';
import { Product, BlogPost, Service, CartItem } from './types';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Store from './components/Store';
import Membership from './components/Membership';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Cart from './components/Cart';
import WhatsAppButton from './components/WhatsAppButton';
import Logo from './components/Logo';

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  
  // Selection states for lightbox / spec views
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [inquiryServiceName, setInquiryServiceName] = useState<string>('');

  // Floating controls
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Legal modals
  const [showPrivacy, setShowPrivacy] = useState<boolean>(false);
  const [showTerms, setShowTerms] = useState<boolean>(false);

  // Handle dark mode class assignment
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Handle loading splash screen timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart Helper functions
  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.product.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleBuyNow = (product: Product) => {
    // Add product to cart if not present
    const inCart = cartItems.some(item => item.product.id === product.id);
    if (!inCart) {
      handleAddToCart(product);
    }
    // Toggle cart slide open and trigger checkout automatically
    setCartOpen(true);
  };

  // Nav helpers
  const handleInquireService = (serviceName: string) => {
    setInquiryServiceName(serviceName);
    setSelectedService(null);
    setCurrentTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToAbout = () => {
    const aboutEl = document.getElementById('about-us');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-blue-900 transition-all duration-500" id="splash-loader">
        <div className="relative flex flex-col items-center">
          {/* Pulsing golden aura background */}
          <div className="absolute w-48 h-48 rounded-full bg-brand-gold-500/10 blur-3xl animate-pulse" />
          
          {/* Center Logo with animation */}
          <div className="animate-pulse relative z-10">
            <Logo size={200} className="filter drop-shadow-[0_15px_45px_rgba(212,175,55,0.4)]" />
          </div>
          
          {/* Brand Name with smooth styling */}
          <div className="mt-8 text-center space-y-2 relative z-10">
            <h1 className="font-display font-extrabold text-2xl tracking-[0.25em] text-white uppercase">
              IPVPA
            </h1>
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-brand-gold-400 font-semibold max-w-xs leading-relaxed">
              International Pyramid Vaastu
            </p>
          </div>
          
          {/* Circular progress loader dots */}
          <div className="mt-12 flex space-x-2 relative z-10">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-gold-400 animate-bounce" style={{ animationDelay: '-0.3s' }} />
            <span className="w-2.5 h-2.5 rounded-full bg-brand-gold-400 animate-bounce" style={{ animationDelay: '-0.15s' }} />
            <span className="w-2.5 h-2.5 rounded-full bg-brand-gold-400 animate-bounce" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-brand-blue-900 transition-colors duration-300 flex flex-col justify-between" id="app-root-container">
      
      {/* Dynamic Nav Header */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenProduct={(p) => setSelectedProduct(p)}
        onOpenBlog={(b) => setSelectedBlog(b)}
        onOpenService={(s) => setSelectedService(s)}
      />

      {/* Main Page Render Pipeline */}
      <main className="flex-grow">
        {currentTab === 'home' && (
          <div className="animate-fade-in space-y-0">
            {/* Hero module */}
            <Hero 
              onNavigate={(tab) => { setCurrentTab(tab); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              onScrollToAbout={handleScrollToAbout}
            />

            {/* Vision & Foundation */}
            <About />

            {/* Services highlights previews */}
            <section className="py-24 bg-white dark:bg-brand-blue-900/60 transition-colors">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="font-display font-bold text-xs sm:text-sm uppercase tracking-widest text-brand-gold-600 dark:text-brand-gold-400 mb-3">Featured Science</h2>
                  <h3 className="font-display font-bold text-3xl text-brand-blue-900 dark:text-white leading-tight">Elite Specialized Audits</h3>
                  <div className="w-16 h-1 bg-brand-gold-500 mx-auto mt-4 rounded-full" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {SERVICES.slice(0, 4).map((s) => (
                    <div 
                      key={s.id} 
                      onClick={() => { setSelectedService(s); setCurrentTab('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="p-6 rounded-2xl bg-gray-50 dark:bg-brand-blue-800/20 border border-gray-100 dark:border-brand-blue-800/40 hover:border-brand-gold-500 transition-all duration-300 cursor-pointer"
                    >
                      <span className="font-mono text-brand-gold-500 font-bold text-sm block mb-3">0{SERVICES.indexOf(s) + 1}.</span>
                      <h4 className="font-display font-bold text-base text-brand-blue-900 dark:text-white mb-2">{s.title}</h4>
                      <p className="font-sans text-xs text-gray-400 dark:text-gray-400 leading-relaxed line-clamp-3">{s.description}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <button 
                    onClick={() => { setCurrentTab('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="px-6 py-3 rounded-xl bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-blue-900 font-sans font-bold text-xs uppercase tracking-wider transition"
                  >
                    View All 20 Services
                  </button>
                </div>
              </div>
            </section>

            {/* Testimonials Segment */}
            <section className="py-24 bg-gray-50 dark:bg-brand-blue-950/20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="font-display font-bold text-xs sm:text-sm uppercase tracking-widest text-brand-gold-600 dark:text-brand-gold-400 mb-3">Client Feedback</h2>
                  <h3 className="font-display font-bold text-3xl text-brand-blue-900 dark:text-white leading-tight">Endorsed by Top Corporate Directors</h3>
                  <div className="w-16 h-1 bg-brand-gold-500 mx-auto mt-4 rounded-full" />
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {TESTIMONIALS.map((t) => (
                    <div 
                      key={t.id}
                      className="p-8 rounded-3xl bg-white dark:bg-brand-blue-900 border border-gray-100 dark:border-brand-blue-800 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        {/* Rating stars */}
                        <div className="flex items-center space-x-1 text-brand-gold-500 mb-4">
                          {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                        </div>
                        
                        <Quote className="text-brand-gold-500/10 mb-2 h-10 w-10 flex-shrink-0" />
                        
                        <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-300 leading-relaxed italic mb-6">
                          "{t.text}"
                        </p>
                      </div>

                      <div className="flex items-center space-x-3.5 pt-4 border-t border-gray-50 dark:border-brand-blue-800/60">
                        <img 
                          src={t.image} 
                          alt={t.name} 
                          className="w-10 h-10 rounded-full object-cover" 
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <p className="font-display font-bold text-xs sm:text-sm text-brand-blue-900 dark:text-white leading-tight">{t.name}</p>
                          <p className="font-sans text-[10px] text-gray-400 leading-none mt-0.5">{t.role} • <span className="font-semibold">{t.company}</span></p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Accordion FAQs */}
            <FAQ />
          </div>
        )}

        {currentTab === 'services' && (
          <Services
            onSelectService={(s) => setSelectedService(s)}
            selectedService={selectedService}
            onCloseService={() => setSelectedService(null)}
            onInquireService={handleInquireService}
          />
        )}

        {currentTab === 'store' && (
          <Store
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            selectedProduct={selectedProduct}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onCloseProduct={() => setSelectedProduct(null)}
          />
        )}

        {currentTab === 'membership' && (
          <Membership onRegisterSuccess={() => {}} />
        )}

        {currentTab === 'team' && (
          <Team />
        )}

        {currentTab === 'gallery' && (
          <Gallery />
        )}

        {currentTab === 'blog' && (
          <Blog
            onOpenBlog={(b) => setSelectedBlog(b)}
            selectedBlog={selectedBlog}
            onCloseBlog={() => setSelectedBlog(null)}
          />
        )}

        {currentTab === 'contact' && (
          <Contact
            initialServiceName={inquiryServiceName}
            onBookingSuccess={() => setInquiryServiceName('')}
          />
        )}
      </main>

      {/* Persistent Footer with navigation handlers */}
      <Footer
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onOpenPrivacy={() => setShowPrivacy(true)}
        onOpenTerms={() => setShowTerms(true)}
      />

      {/* Floating Interactive elements */}
      <WhatsAppButton />

      {/* Sliding shopping cart drawer */}
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-brand-blue-900 hover:bg-brand-blue-800 text-white dark:bg-white dark:text-brand-blue-900 flex items-center justify-center shadow-lg hover:scale-105 transition cursor-pointer border border-white/10"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Legal Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-brand-blue-900 border border-gray-100 dark:border-brand-blue-800 p-8 sm:p-10 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setShowPrivacy(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-gray-50 dark:bg-brand-blue-800/50 hover:bg-gray-100 text-gray-400 transition"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="text-brand-gold-500" size={24} />
              <h3 className="font-display font-extrabold text-xl text-brand-blue-900 dark:text-white">IPVPA Privacy Directives</h3>
            </div>
            <div className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-300 leading-relaxed space-y-4">
              <p>The International Pyramid Vaastu Professionals' Association (IPVPA) is committed to protecting the privacy of our global practitioners, candidates, and client homeowners. This privacy document defines our policies regarding the collection, transmission, and processing of personal registration details, booking schedules, and laboratory research reports.</p>
              <h4 className="font-bold text-brand-blue-900 dark:text-white uppercase tracking-wider text-[11px] pt-2">1. Information Transmission</h4>
              <p>We log names, emails, telefon numbers, and blueprints only for the purpose of scheduling spatial calibration audits or issuing membership certification invoices. We never sell, distribute, or share personal spatial parameters or business layouts with third-party advertising companies.</p>
              <h4 className="font-bold text-brand-blue-900 dark:text-white uppercase tracking-wider text-[11px] pt-2">2. Geopathic and Telluric Confidentiality</h4>
              <p>The coordinates, magnetic stress maps, and geopathic fault-line reports calculated during scientific on-site or online remote inspections are treated as highly confidential. These reports are stored on encrypted servers and are accessible only by the head structural engineer, project manager, and principal client.</p>
            </div>
            <button
              onClick={() => setShowPrivacy(false)}
              className="mt-8 w-full py-3 rounded-xl bg-brand-gold-500 text-brand-blue-900 font-sans font-bold text-xs uppercase tracking-wider hover:bg-brand-gold-600 transition"
            >
              Acknowledge Policy
            </button>
          </div>
        </div>
      )}

      {/* Legal Terms Modal */}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-brand-blue-900 border border-gray-100 dark:border-brand-blue-800 p-8 sm:p-10 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setShowTerms(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-gray-50 dark:bg-brand-blue-800/50 hover:bg-gray-100 text-gray-400 transition"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-brand-gold-500" size={24} />
              <h3 className="font-display font-extrabold text-xl text-brand-blue-900 dark:text-white">Terms of Professional Conduct</h3>
            </div>
            <div className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-300 leading-relaxed space-y-4">
              <p>These terms govern the use of the IPVPA official portal, instrument store purchases, candidate certifications, and consulting schedules. By accessing this web interface or purchasing items, you agree to these terms.</p>
              <h4 className="font-bold text-brand-blue-900 dark:text-white uppercase tracking-wider text-[11px] pt-2">1. Scientific Integrity Agreement</h4>
              <p>Practitioners purchasing from our Store or registering for Professional Accreditation agree to use our copper and brass instruments solely within scientifically validated frameworks inspired by the Giza geometry (51.8° angle). Practicing superstitious, destructive, or intentionally deceitful rituals under our name is strictly forbidden and constitutes a breach of professional ethics leading to immediate directory removal.</p>
              <h4 className="font-bold text-brand-blue-900 dark:text-white uppercase tracking-wider text-[11px] pt-2">2. Liability Exclusions</h4>
              <p>While our instruments are calculated to absorb static electromagnetic lines and geopathic stresses to provide physiological and mental support, IPVPA audits do not replace professional medical treatments, legal advice, or official structural integrity engineering certifications.</p>
            </div>
            <button
              onClick={() => setShowTerms(false)}
              className="mt-8 w-full py-3 rounded-xl bg-brand-gold-500 text-brand-blue-900 font-sans font-bold text-xs uppercase tracking-wider hover:bg-brand-gold-600 transition"
            >
              Accept Professional Ethics
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
