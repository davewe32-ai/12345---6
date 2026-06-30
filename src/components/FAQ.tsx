import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'General', 'Science', 'Store', 'Membership'];

  const filteredFaqs = FAQS.filter((faq) => {
    return activeTab === 'All' || faq.category === activeTab;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-brand-blue-900/30 transition-colors duration-300" id="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-xs sm:text-sm uppercase tracking-widest text-brand-gold-600 dark:text-brand-gold-400 mb-3">
            Inquiry Support
          </h2>
          <p className="font-display font-bold text-3xl sm:text-4xl text-brand-blue-900 dark:text-white leading-tight">
            Frequently Asked Questions
          </p>
          <div className="w-16 h-1 bg-brand-gold-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Tab selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveTab(cat); setOpenId(null); }}
              className={`px-4 py-2 rounded-xl font-sans text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === cat
                  ? 'text-brand-blue-900 bg-brand-gold-500 shadow-sm border border-brand-gold-500'
                  : 'text-gray-600 dark:text-gray-300 bg-white dark:bg-brand-blue-900 hover:bg-gray-100 dark:hover:bg-brand-blue-800 border border-gray-200 dark:border-brand-blue-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion container */}
        <div className="space-y-4">
          <AnimatePresence initial={false}>
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  layout
                  className="rounded-2xl border border-gray-150 dark:border-brand-blue-800 bg-white dark:bg-brand-blue-900/60 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {/* Header click bar */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-brand-blue-900 dark:text-white hover:text-brand-gold-600 dark:hover:text-brand-gold-400 transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle size={18} className="text-brand-gold-500 flex-shrink-0" />
                      {faq.question}
                    </span>
                    {isOpen ? <ChevronUp size={18} className="text-brand-gold-500 flex-shrink-0" /> : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />}
                  </button>

                  {/* Body expanded text */}
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-300 font-sans leading-relaxed border-t border-gray-50 dark:border-brand-blue-800/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
