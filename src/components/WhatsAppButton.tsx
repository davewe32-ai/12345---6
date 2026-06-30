import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, ShieldCheck } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'm1',
      sender: 'agent',
      text: "Namaste! Welcome to the International Pyramid Vaastu Professionals' Association (IPVPA) Virtual Helpdesk. How may we guide your spatial alignment goals today?",
      time: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: inputValue,
      time: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    const inputCleaned = inputValue.toLowerCase();
    setInputValue('');
    setIsTyping(true);

    // Dynamic phrase-matching assistant responder
    setTimeout(() => {
      let replyText = "Thank you for contacting IPVPA. Our chief secretariat officer or local certified consultant will reach out to you shortly. For immediate response, please feel free to submit an online booking via our Contact section or register directly in our Membership portal.";
      
      if (inputCleaned.includes('membership') || inputCleaned.includes('join') || inputCleaned.includes('register')) {
        replyText = "We offer five membership classifications (Student, Professional, Corporate, International, and Lifetime). Registered members are accredited, added to our global directory, and receive 20%-30% store discounts! You can submit your candidate form directly under our 'Membership' tab.";
      } else if (inputCleaned.includes('store') || inputCleaned.includes('pyramid') || inputCleaned.includes('price') || inputCleaned.includes('buy') || inputCleaned.includes('copper')) {
        replyText = "Our professional catalog of certified Copper and Brass pyramid instruments is available under our 'Store' tab! All instruments are custom Giza-calibrated (51.8° angle), activated in our physical energy laboratory, and shipped with priority courier dispatch.";
      } else if (inputCleaned.includes('services') || inputCleaned.includes('consultation') || inputCleaned.includes('book') || inputCleaned.includes('analyze')) {
        replyText = "We offer 20 specialized scientific services, including Residential Vaastu Auditing, Commercial Energy Mapping, Industrial Plant planning, and unbuilt land plot evaluations. You can schedule a virtual/on-site consultation instantly under our 'Contact' section.";
      } else if (inputCleaned.includes('address') || inputCleaned.includes('location') || inputCleaned.includes('colombo') || inputCleaned.includes('sri lanka')) {
        replyText = "Our primary association secretariat office is located at: No. 125, Galle Road, Colombo 03, Sri Lanka. Our doors are open Monday–Saturday, 8.30 AM to 6.00 PM. Please visit our 'Contact' section to launch directions on Google Maps.";
      } else if (inputCleaned.includes('chairman') || inputCleaned.includes('meril') || inputCleaned.includes('glorious')) {
        replyText = "Our Chairman Meril Peiris is a pioneering Architectural Designer and Pyramid Vaastu specialist, also heading Glorious Homes. He coordinates key custom villa blueprints from scratch combining premium luxury with energy-efficient mathematics.";
      } else if (inputCleaned.includes('hello') || inputCleaned.includes('hi') || inputCleaned.includes('namaste')) {
        replyText = "Greetings of spatial harmony! I am your IPVPA Virtual Assistant. How can I help you today? Please ask about our membership plans, instrument store, scientific consultation services, or office location!";
      }

      const agentMsg = {
        id: 'agent-' + Date.now(),
        sender: 'agent',
        text: replyText,
        time: 'Just now'
      };

      setMessages((prev) => [...prev, agentMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Small Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 h-[480px] rounded-3xl bg-white dark:bg-brand-blue-900 border border-gray-150 dark:border-brand-blue-800 shadow-2xl flex flex-col overflow-hidden mb-4 animate-fade-in">
          
          {/* Header */}
          <div className="p-4 bg-brand-blue-900 text-white flex items-center justify-between border-b border-white/5">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-gold-500">
                <svg viewBox="0 0 100 100" className="w-6 h-6">
                  <polygon points="50,15 90,85 10,85" fill="none" stroke="currentColor" strokeWidth="6" />
                  <circle cx="50" cy="55" r="8" fill="currentColor" />
                </svg>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border border-brand-blue-900 animate-pulse" />
              </div>
              <div>
                <p className="font-display font-bold text-sm leading-none flex items-center gap-1">
                  IPVPA Helpdesk <ShieldCheck size={12} className="text-brand-gold-400" />
                </p>
                <span className="font-sans text-[10px] text-gray-400 leading-none">Virtual Advisor • Active</span>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition"
              aria-label="Minimize Support"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages Body Scroll Area */}
          <div
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-brand-blue-850/20"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col max-w-[80%] ${
                  m.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
                }`}
              >
                <div
                  className={`p-3.5 rounded-2xl font-sans text-xs sm:text-sm leading-relaxed shadow-sm ${
                    m.sender === 'user'
                      ? 'bg-brand-gold-500 text-brand-blue-900 rounded-tr-none font-semibold'
                      : 'bg-white dark:bg-brand-blue-800 text-gray-700 dark:text-gray-250 rounded-tl-none border border-gray-150 dark:border-brand-blue-750'
                  }`}
                >
                  <p>{m.text}</p>
                </div>
                <span className="font-sans text-[9px] text-gray-450 mt-1 pl-1">{m.time}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex flex-col items-start mr-auto max-w-[80%] animate-pulse">
                <div className="p-3 bg-white dark:bg-brand-blue-800 text-gray-400 rounded-2xl rounded-tl-none border border-gray-150 dark:border-brand-blue-750 text-[11px] font-sans flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-500 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-500 animate-bounce delay-100" />
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-500 animate-bounce delay-200" />
                  <span>IPVPA is drafting response...</span>
                </div>
              </div>
            )}
          </div>

          {/* Chat Form Footer */}
          <form
            onSubmit={handleMessageSubmit}
            className="p-3 border-t border-gray-150 dark:border-brand-blue-800 bg-white dark:bg-brand-blue-900 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about membership, store, etc..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-grow px-4 py-2 text-xs sm:text-sm rounded-xl border border-gray-250 dark:border-brand-blue-800 bg-gray-50 dark:bg-brand-blue-850 text-gray-850 dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-gold-500 focus:border-transparent transition"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-blue-900 flex items-center justify-center transition cursor-pointer"
              aria-label="Send Message"
            >
              <Send size={14} />
            </button>
          </form>

        </div>
      )}

      {/* Floating Green WhatsApp Circle Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-white dark:border-brand-blue-900 relative group"
        aria-label="Open support chat desk"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-[9px] font-bold text-white flex items-center justify-center border border-white animate-bounce">
          1
        </span>
        <MessageSquare size={24} />
      </button>

    </div>
  );
}
