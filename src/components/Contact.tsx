import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Calendar, CheckCircle, Info, Star, X } from 'lucide-react';
import Logo from './Logo';

interface ContactProps {
  initialServiceName?: string;
  onBookingSuccess: (bookingData: any) => void;
}

export default function Contact({ initialServiceName = '', onBookingSuccess }: ContactProps) {
  // Contact Us Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [contactErrors, setContactErrors] = useState<Record<string, string>>({});
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactSubmitting, setContactSubmitting] = useState(false);

  // Consultation Booking Form State
  const [bookingForm, setBookingForm] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    propertyType: 'Residential Villa',
    preferredDate: '',
    preferredTime: 'Morning (09:00 - 12:00)',
    siteName: initialServiceName || 'Pyramid Vaastu Consultation',
    comments: ''
  });
  const [bookingErrors, setBookingErrors] = useState<Record<string, string>>({});
  const [bookingSuccessState, setBookingSuccessState] = useState(false);
  const [bookingSubmitting, setBookingSubmitting] = useState(false);
  const [bookingReceipt, setBookingReceipt] = useState<any>(null);

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
    if (contactErrors[name]) {
      setContactErrors({ ...contactErrors, [name]: '' });
    }
  };

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingForm({ ...bookingForm, [name]: value });
    if (bookingErrors[name]) {
      setBookingErrors({ ...bookingErrors, [name]: '' });
    }
  };

  const validateContact = () => {
    const errors: Record<string, string> = {};
    if (!contactForm.name.trim()) errors.name = 'Your name is required.';
    if (!contactForm.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
      errors.email = 'Please provide a valid email.';
    }
    if (!contactForm.subject.trim()) errors.subject = 'Subject is required.';
    if (!contactForm.message.trim()) errors.message = 'Message content cannot be empty.';
    setContactErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateBooking = () => {
    const errors: Record<string, string> = {};
    if (!bookingForm.clientName.trim()) errors.clientName = 'Full name is required.';
    if (!bookingForm.clientEmail.trim()) {
      errors.clientEmail = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(bookingForm.clientEmail)) {
      errors.clientEmail = 'Please provide a valid email.';
    }
    if (!bookingForm.clientPhone.trim()) errors.clientPhone = 'Phone number is required.';
    if (!bookingForm.preferredDate) errors.preferredDate = 'Please select a date.';
    setBookingErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateContact()) return;

    setContactSubmitting(true);
    setTimeout(() => {
      setContactSubmitting(false);
      setContactSuccess(true);
      setContactForm({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setContactSuccess(false), 5000);
    }, 1200);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateBooking()) return;

    setBookingSubmitting(true);
    setTimeout(() => {
      const randomTicket = 'TCK-' + Math.floor(100000 + Math.random() * 900000);
      const receipt = {
        ticketNo: randomTicket,
        name: bookingForm.clientName,
        email: bookingForm.clientEmail,
        phone: bookingForm.clientPhone,
        service: bookingForm.siteName,
        date: bookingForm.preferredDate,
        time: bookingForm.preferredTime,
        property: bookingForm.propertyType
      };

      setBookingReceipt(receipt);
      setBookingSubmitting(false);
      setBookingSuccessState(true);
      onBookingSuccess(receipt);
    }, 1500);
  };

  return (
    <section className="py-24 bg-white dark:bg-brand-blue-900 transition-colors duration-300" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display font-bold text-xs sm:text-sm uppercase tracking-widest text-brand-gold-600 dark:text-brand-gold-400 mb-3">
            Inquiries & Bookings
          </h2>
          <p className="font-display font-bold text-3xl sm:text-4xl text-brand-blue-900 dark:text-white leading-tight">
            Connect with Our Global Advisory Board
          </p>
          <div className="w-16 h-1 bg-brand-gold-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto mb-20 items-start">
          
          {/* Column Left: Corporate Coordinates & Placeholder Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              {/* Premium Brand Logo Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 border border-brand-gold-500/20 flex flex-col items-center text-center shadow-xl mb-4 group hover:border-brand-gold-500/40 transition-all duration-300">
                <Logo size={120} className="filter drop-shadow-[0_8px_24px_rgba(212,175,55,0.25)] group-hover:scale-105 transition-transform duration-300" />
                <h4 className="font-display font-bold text-base text-white mt-4 tracking-wider uppercase">IPVPA Global Headquarters</h4>
                <p className="font-sans text-xs text-brand-gold-400 font-semibold mt-1">Accreditation & Research Board</p>
              </div>

              <h3 className="font-display font-extrabold text-xl text-brand-blue-900 dark:text-white">
                IPVPA Secretariat
              </h3>
              
              <div className="space-y-4 font-sans text-sm text-gray-500 dark:text-gray-300">
                
                {/* Address */}
                <div className="flex items-start space-x-3.5">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-brand-gold-500/10 text-brand-gold-600 dark:text-brand-gold-400 flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-brand-blue-900 dark:text-white text-xs uppercase tracking-wider mb-1">Office Address</p>
                    <p className="leading-relaxed">
                      International Pyramid Vaastu Professionals' Association<br />
                      No. 125, Galle Road,<br />
                      Colombo 03, Sri Lanka
                    </p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start space-x-3.5">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-brand-gold-500/10 text-brand-gold-600 dark:text-brand-gold-400 flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-brand-blue-900 dark:text-white text-xs uppercase tracking-wider mb-1">Direct Telephones</p>
                    <p className="leading-relaxed font-mono text-xs">
                      +94 77 456 7890<br />
                      +94 11 345 6789
                    </p>
                  </div>
                </div>

                {/* Emails */}
                <div className="flex items-start space-x-3.5">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-brand-gold-500/10 text-brand-gold-600 dark:text-brand-gold-400 flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-brand-blue-900 dark:text-white text-xs uppercase tracking-wider mb-1">Electronic Mail</p>
                    <p className="leading-relaxed font-mono text-xs text-brand-blue-900 dark:text-brand-gold-400 font-semibold">
                      info@ipvpa.org<br />
                      support@ipvpa.org<br />
                      membership@ipvpa.org
                    </p>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start space-x-3.5">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-brand-gold-500/10 text-brand-gold-600 dark:text-brand-gold-400 flex items-center justify-center">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-brand-blue-900 dark:text-white text-xs uppercase tracking-wider mb-1">Secretariat Hours</p>
                    <p className="leading-relaxed">
                      Monday–Saturday<br />
                      8.30 AM – 6.00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Map Integration with a beautiful styled placeholder */}
            <div className="relative rounded-3xl overflow-hidden border border-gray-150 dark:border-brand-blue-800 shadow-sm bg-gray-100 h-64 flex items-center justify-center group">
              {/* Geometric Grid Overlay representing our map area */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,25,49,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,25,49,0.02)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] z-0" />
              <div className="absolute inset-0 bg-brand-blue-900/10 mix-blend-multiply" />
              
              {/* Map Illustration Elements */}
              <div className="relative z-10 flex flex-col items-center text-center px-6">
                <div className="w-12 h-12 rounded-full bg-brand-blue-900 dark:bg-white text-brand-gold-500 flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <p className="font-display font-bold text-sm text-brand-blue-900 dark:text-white">Galle Road, Colombo 03, Sri Lanka</p>
                <p className="font-sans text-[11px] text-gray-500 dark:text-gray-400 mt-1">Latitude: 6.9144° N, Longitude: 79.8490° E</p>
                
                {/* Virtual Interactive anchor */}
                <a 
                  href="https://maps.google.com/?q=No.+125,+Galle+Road,+Colombo+03,+Sri+Lanka"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-2 rounded-xl bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-blue-900 font-sans font-bold text-[10px] uppercase tracking-wider transition shadow"
                >
                  Launch Live Navigation
                </a>
              </div>
            </div>
          </div>

          {/* Column Right: Forms Tab Container (General Contact vs Online Consultation) */}
          <div className="lg:col-span-7 bg-gray-50 dark:bg-brand-blue-900/40 border border-gray-100 dark:border-brand-blue-800/50 rounded-3xl p-8 sm:p-10 shadow-sm">
            
            {/* Form Selection tab handles */}
            <div className="flex border-b border-gray-150 dark:border-brand-blue-800 pb-6 mb-8 gap-4">
              <h3 className="font-display font-bold text-lg sm:text-xl text-brand-blue-900 dark:text-white leading-none">
                Submit Booking / Inquiry
              </h3>
            </div>

            {/* Render 2 separate sections in grid/vertical view to satisfy both: contact form and online consultation booking form! */}
            <div className="space-y-12">
              
              {/* Sub-form 1: Online Consultation Booking Form */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={18} className="text-brand-gold-500" />
                  <h4 className="font-display font-bold text-sm text-brand-blue-900 dark:text-white uppercase tracking-wider">Online Consultation Scheduler</h4>
                </div>
                
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="clientName"
                        placeholder="Your Name"
                        value={bookingForm.clientName}
                        onChange={handleBookingChange}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-brand-blue-900 text-gray-850 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold-500 transition-all ${
                          bookingErrors.clientName ? 'border-red-400' : 'border-gray-200 dark:border-brand-blue-800'
                        }`}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="clientEmail"
                        placeholder="Your Email"
                        value={bookingForm.clientEmail}
                        onChange={handleBookingChange}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-brand-blue-900 text-gray-850 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold-500 transition-all ${
                          bookingErrors.clientEmail ? 'border-red-400' : 'border-gray-200 dark:border-brand-blue-800'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="tel"
                        name="clientPhone"
                        placeholder="Contact Number"
                        value={bookingForm.clientPhone}
                        onChange={handleBookingChange}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-brand-blue-900 text-gray-850 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold-500 transition-all ${
                          bookingErrors.clientPhone ? 'border-red-400' : 'border-gray-200 dark:border-brand-blue-800'
                        }`}
                      />
                    </div>
                    <div>
                      <select
                        name="propertyType"
                        value={bookingForm.propertyType}
                        onChange={handleBookingChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-brand-blue-800 bg-white dark:bg-brand-blue-900 text-gray-850 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold-500 transition-all"
                      >
                        <option value="Residential Villa">Residential Villa</option>
                        <option value="Commercial Office">Commercial Office</option>
                        <option value="Industrial Factory">Industrial Factory / Plant</option>
                        <option value="Hotel / Resort">Hotel / Spa / Resort</option>
                        <option value="Apartment Building">Apartment Project</option>
                        <option value="Land Plot Purchase">Unbuilt Land Plot</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="date"
                        name="preferredDate"
                        value={bookingForm.preferredDate}
                        onChange={handleBookingChange}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-brand-blue-900 text-gray-850 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold-500 transition-all ${
                          bookingErrors.preferredDate ? 'border-red-400' : 'border-gray-200 dark:border-brand-blue-800'
                        }`}
                      />
                    </div>
                    <div>
                      <select
                        name="preferredTime"
                        value={bookingForm.preferredTime}
                        onChange={handleBookingChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-brand-blue-800 bg-white dark:bg-brand-blue-900 text-gray-850 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold-500 transition-all"
                      >
                        <option value="Morning (09:00 - 12:00)">Morning (09:00 - 12:00)</option>
                        <option value="Afternoon (13:00 - 15:00)">Afternoon (13:00 - 15:00)</option>
                        <option value="Late Evening (16:00 - 18:00)">Late Evening (16:00 - 18:00)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      name="siteName"
                      placeholder="Service Required"
                      value={bookingForm.siteName}
                      onChange={handleBookingChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-brand-blue-800 bg-white dark:bg-brand-blue-900 text-gray-850 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold-500 transition-all"
                    />
                  </div>

                  <div>
                    <textarea
                      name="comments"
                      rows={2}
                      placeholder="Describe any specific Vaastu concerns (e.g. sleep disorders, business slowdown, factory machinery issues)..."
                      value={bookingForm.comments}
                      onChange={handleBookingChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-brand-blue-800 bg-white dark:bg-brand-blue-900 text-gray-850 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold-500 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={bookingSubmitting}
                    className="px-6 py-3 rounded-xl bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-blue-900 font-sans font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {bookingSubmitting ? 'Scheduling...' : 'Book Scientific Consultation'}
                  </button>
                </form>
              </div>

              {/* Sub-form 2: General Contact Form with full validation */}
              <div className="pt-8 border-t border-gray-150 dark:border-brand-blue-800">
                <div className="flex items-center gap-2 mb-4">
                  <Mail size={18} className="text-brand-gold-500" />
                  <h4 className="font-display font-bold text-sm text-brand-blue-900 dark:text-white uppercase tracking-wider">General Secretarial Correspondence</h4>
                </div>
                
                {contactSuccess ? (
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 text-xs sm:text-sm font-semibold flex items-center gap-2">
                    <CheckCircle size={18} /> Correspondence logged successfully. Our administrative secretariat will reply within 24 hours.
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={contactForm.name}
                          onChange={handleContactChange}
                          className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-brand-blue-900 text-gray-850 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold-500 transition-all ${
                            contactErrors.name ? 'border-red-400' : 'border-gray-200 dark:border-brand-blue-800'
                          }`}
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={contactForm.email}
                          onChange={handleContactChange}
                          className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-brand-blue-900 text-gray-850 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold-500 transition-all ${
                            contactErrors.email ? 'border-red-400' : 'border-gray-200 dark:border-brand-blue-800'
                          }`}
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="phone"
                          placeholder="Telephone (Optional)"
                          value={contactForm.phone}
                          onChange={handleContactChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-brand-blue-800 bg-white dark:bg-brand-blue-900 text-gray-850 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold-500 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Inquiry Subject"
                        value={contactForm.subject}
                        onChange={handleContactChange}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-brand-blue-900 text-gray-850 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold-500 transition-all ${
                          contactErrors.subject ? 'border-red-400' : 'border-gray-200 dark:border-brand-blue-800'
                        }`}
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Compose your inquiry message..."
                        value={contactForm.message}
                        onChange={handleContactChange}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-brand-blue-900 text-gray-850 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold-500 transition-all ${
                          contactErrors.message ? 'border-red-400' : 'border-gray-200 dark:border-brand-blue-800'
                        }`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={contactSubmitting}
                      className="px-6 py-3 rounded-xl bg-brand-blue-900 dark:bg-white text-white dark:text-brand-blue-900 font-sans font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      {contactSubmitting ? 'Transmitting...' : 'Dispatch Inquiry'}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* Booking Receipt Lightbox Modal overlay */}
        {bookingSuccessState && bookingReceipt && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-brand-blue-900 border border-gray-100 dark:border-brand-blue-800 shadow-2xl p-8 sm:p-10 text-center">
              
              <button
                onClick={() => setBookingSuccessState(false)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-gray-50 dark:bg-brand-blue-800/50 hover:bg-gray-100 text-gray-400 transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mx-auto mb-6">
                <CheckCircle size={36} />
              </div>

              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-brand-blue-900 dark:text-white mb-2">
                Consultation Appointed
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6">
                Your online/on-site consultation booking ticket has been successfully scheduled.
              </p>

              {/* Receipt Body */}
              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-brand-blue-800/10 border border-gray-100 dark:border-brand-blue-800/30 text-left space-y-3 font-sans text-xs mb-8">
                <div className="flex justify-between border-b border-gray-100 dark:border-brand-blue-800 pb-2">
                  <span className="text-gray-400 font-semibold">Appointment Ticket:</span>
                  <span className="font-mono font-bold text-gray-800 dark:text-white">{bookingReceipt.ticketNo}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 dark:border-brand-blue-800 pb-2">
                  <span className="text-gray-400 font-semibold">Client Name:</span>
                  <span className="text-gray-800 dark:text-white font-semibold">{bookingReceipt.name}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 dark:border-brand-blue-800 pb-2">
                  <span className="text-gray-400 font-semibold">Property Scope:</span>
                  <span className="text-gray-800 dark:text-white">{bookingReceipt.property}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 dark:border-brand-blue-800 pb-2">
                  <span className="text-gray-400 font-semibold">Consultation:</span>
                  <span className="text-gray-800 dark:text-white">{bookingReceipt.service}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 dark:border-brand-blue-800 pb-2">
                  <span className="text-gray-400 font-semibold">Scheduled Date:</span>
                  <span className="text-gray-800 dark:text-white font-semibold">{bookingReceipt.date}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-gray-400 font-semibold">Time Slot:</span>
                  <span className="text-brand-gold-600 dark:text-brand-gold-400 font-bold">{bookingReceipt.time}</span>
                </div>
              </div>

              {/* Next Steps */}
              <div className="p-4 rounded-xl bg-brand-gold-500/10 border border-brand-gold-500/20 text-left text-[11px] text-gray-600 dark:text-gray-300 leading-normal mb-8 flex gap-2.5">
                <Info size={16} className="text-brand-gold-500 mt-0.5 flex-shrink-0" />
                <p>
                  <strong>Next Step:</strong> Senior consultant Dr. Isuru Jayasinghe or site director Lakshan Fernando will reach you at <strong>{bookingReceipt.phone}</strong> or email <strong>{bookingReceipt.email}</strong> to coordinate floorplan drafts.
                </p>
              </div>

              <button
                onClick={() => setBookingSuccessState(false)}
                className="w-full py-3.5 rounded-xl font-sans font-bold text-xs uppercase tracking-wider text-brand-blue-900 bg-brand-gold-50 hover:bg-brand-gold-100 dark:bg-brand-gold-500 dark:hover:bg-brand-gold-600 transition"
              >
                Close Receipt Window
              </button>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
