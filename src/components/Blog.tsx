import React, { useState } from 'react';
import { Search, Clock, User, X, ArrowLeft, BookOpen, Share2, Facebook, Twitter, Linkedin, Copy } from 'lucide-react';
import { BLOGS } from '../data';
import { BlogPost } from '../types';
import Logo from './Logo';

interface BlogProps {
  onOpenBlog: (blog: BlogPost) => void;
  selectedBlog: BlogPost | null;
  onCloseBlog: () => void;
}

export default function Blog({
  onOpenBlog,
  selectedBlog,
  onCloseBlog,
}: BlogProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const categories = ['All', 'Scientific Vaastu', 'Energy Research', 'Residential Tips', 'Engineering & Science', 'Design Trends', 'Business Success'];

  const filteredBlogs = BLOGS.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleShareCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-brand-blue-900/30 transition-colors duration-300" id="blog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Blog Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <Logo size={100} className="mb-6 filter drop-shadow-[0_4px_16px_rgba(212,175,55,0.2)]" />
          <h2 className="font-display font-bold text-xs sm:text-sm uppercase tracking-widest text-brand-gold-600 dark:text-brand-gold-400 mb-3">
            IPVPA Journal
          </h2>
          <p className="font-display font-bold text-3xl sm:text-4xl text-brand-blue-900 dark:text-white leading-tight">
            Research, Insights & Spatial Science
          </p>
          <div className="w-16 h-1 bg-brand-gold-500 mx-auto mt-4 rounded-full" />
          <p className="font-sans text-sm text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
            Stay up to date with the latest scientific research, guidelines, and home layouts formulated by our academic researchers and engineers.
          </p>
        </div>

        {/* Filter Toolbar Controls */}
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
              placeholder="Search journals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-brand-blue-800 bg-gray-50 dark:bg-brand-blue-800/50 text-gray-800 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Blog Cards Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">No articles found matching your query.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} 
              className="mt-4 px-6 py-2.5 rounded-xl bg-brand-gold-500 text-brand-blue-900 font-semibold hover:bg-brand-gold-600 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredBlogs.map((post) => (
              <div
                key={post.id}
                onClick={() => onOpenBlog(post)}
                className="group rounded-2xl bg-white dark:bg-brand-blue-900 border border-gray-100 dark:border-brand-blue-800/50 hover:border-brand-gold-500/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Header Image */}
                <div className="h-56 relative bg-gray-200 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Tag overlay */}
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-lg bg-brand-blue-900/90 text-white font-sans text-[9px] font-bold uppercase tracking-widest border border-white/10">
                    {post.category}
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Metadata */}
                    <div className="flex items-center space-x-4 mb-3 text-[11px] text-gray-400 font-sans">
                      <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    </div>

                    <h3 className="font-display font-bold text-base sm:text-lg text-brand-blue-900 dark:text-white group-hover:text-brand-gold-600 dark:group-hover:text-brand-gold-400 transition-colors mb-2 line-clamp-2 leading-snug">
                      {post.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-50 dark:border-brand-blue-800/50 pt-4 mt-auto">
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-blue-900 dark:text-brand-gold-400 group-hover:text-brand-gold-500 transition-colors">
                      Read Full Article
                    </span>
                    <span className="text-xs text-gray-400 font-sans">{post.date}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Detailed Full Article Reader overlay */}
        {selectedBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-brand-blue-900 border border-gray-100 dark:border-brand-blue-800 shadow-2xl p-8 sm:p-12 max-h-[92vh] overflow-y-auto">
              
              {/* Back / Close button */}
              <button
                onClick={onCloseBlog}
                className="absolute top-6 right-6 p-2 rounded-xl bg-gray-50 dark:bg-brand-blue-800/50 hover:bg-gray-100 text-gray-400 transition-colors border border-gray-100 dark:border-brand-blue-800"
                aria-label="Back"
              >
                <X size={18} />
              </button>

              {/* Reader Header info */}
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-brand-gold-500/10 text-brand-gold-600 dark:text-brand-gold-400 font-sans text-[9px] font-bold uppercase tracking-widest border border-brand-gold-500/20">
                  {selectedBlog.category} Journal
                </span>
                <span className="text-xs text-gray-400 font-sans">{selectedBlog.date}</span>
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-brand-blue-900 dark:text-white leading-tight mb-4">
                {selectedBlog.title}
              </h2>

              <div className="flex items-center justify-between py-4 border-y border-gray-150 dark:border-brand-blue-800 mb-8 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-sans">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center gap-1.5"><User size={14} className="text-brand-gold-500" /> Authored by <strong>{selectedBlog.author}</strong></span>
                  <span className="flex items-center gap-1.5"><Clock size={14} className="text-brand-gold-500" /> {selectedBlog.readTime}</span>
                </div>

                {/* Share bar */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleShareCopy}
                    className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-gray-400 hover:text-brand-gold-500 transition-colors flex items-center gap-1 text-xs"
                    title="Copy Article Link"
                  >
                    <Copy size={14} /> {copiedLink ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Banner visual */}
              <div className="h-80 sm:h-96 rounded-2xl overflow-hidden mb-8 border border-gray-100 dark:border-brand-blue-800">
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Reading text with beautiful styling */}
              <div className="prose max-w-none dark:prose-invert prose-p:leading-relaxed prose-p:font-sans prose-strong:text-brand-blue-900 dark:prose-strong:text-brand-gold-400 text-gray-600 dark:text-gray-300 font-sans text-sm sm:text-base leading-relaxed space-y-6">
                {/* Parse basic markdown bolding/lists manually to prevent dependencies issues */}
                {selectedBlog.content.split('\n\n').map((para, i) => {
                  if (para.startsWith('- ')) {
                    const bullets = para.split('\n');
                    return (
                      <ul key={i} className="list-disc pl-6 space-y-2 text-xs sm:text-sm my-4 text-gray-600 dark:text-gray-300">
                        {bullets.map((b, idx) => (
                          <li key={idx}>{b.replace('- ', '')}</li>
                        ))}
                      </ul>
                    );
                  }

                  // Super simple inline markdown renderer for bolding "**"
                  const parts = para.split('**');
                  const renderedText = parts.map((text, idx) => {
                    if (idx % 2 === 1) {
                      return <strong key={idx} className="font-extrabold text-brand-blue-900 dark:text-brand-gold-400">{text}</strong>;
                    }
                    return text;
                  });

                  return (
                    <p key={i} className="leading-relaxed">
                      {renderedText}
                    </p>
                  );
                })}
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 dark:border-brand-blue-800 mt-10 pt-6">
                <button
                  onClick={onCloseBlog}
                  className="px-5 py-2.5 rounded-xl bg-gray-50 dark:bg-brand-blue-800 text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-brand-blue-700 transition flex items-center gap-2 font-semibold text-xs sm:text-sm"
                >
                  <ArrowLeft size={14} /> Back to Journals
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
