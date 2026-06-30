import React, { useState } from 'react';
import { Check, Info, FileCheck, Shield, Award, Users2, Calendar, FileText, Send, Sparkles, X } from 'lucide-react';
import Logo from './Logo';

interface MembershipProps {
  onRegisterSuccess: (receiptData: any) => void;
}

export default function Membership({ onRegisterSuccess }: MembershipProps) {
  const [selectedPlan, setSelectedPlan] = useState<string>('Professional Member');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: 'Architect',
    country: 'Sri Lanka',
    experience: '',
    agreed: false
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptDetails, setReceiptDetails] = useState<any>(null);

  const plans = [
    {
      name: 'Student Member',
      price: '$49',
      period: 'per year',
      badge: 'Academic',
      description: 'Specifically tailored for students enrolled in accredited architectural, engineering, or design curricula.',
      benefits: [
        'Electronic copy of quarterly IPVPA Journals',
        'Student-tier entry passes to annual summits',
        'Access to standard Research Archives',
        'General networking with registered experts'
      ],
      popular: false
    },
    {
      name: 'Professional Member',
      price: '$149',
      period: 'per year',
      badge: 'Certified Practitioner',
      description: 'Designed for independent architects, designers, structural engineers, and active Vaastu consultants.',
      benefits: [
        'Official Professional Accredited Certification',
        'Searchable listing on the global IPVPA Member Directory',
        '20% discount on all store instruments',
        'Exclusive invitations to monthly Workshops',
        'Use of IPVPA Member Logo on corporate materials'
      ],
      popular: true
    },
    {
      name: 'Corporate Member',
      price: '$499',
      period: 'per year',
      badge: 'Enterprise Hub',
      description: 'Ideal for construction firms, architectural studios, real estate conglomerates, and factories.',
      benefits: [
        'Register up to 5 individual structural practitioners',
        'Priority access to corporate site audits with Meril Peiris',
        '30% corporate discount on instrument store',
        'Collaborative research sponsorship opportunities',
        'Featured placement on directory header page'
      ],
      popular: false
    },
    {
      name: 'International Member',
      price: '$299',
      period: 'per year',
      badge: 'Global Union',
      description: 'Tailored for practitioners living and operating outside of Sri Lanka with global delivery goals.',
      benefits: [
        'Dedicated international logistical support for orders',
        'Direct remote project peer-review with senior engineering panel',
        'Bi-annual global remote video briefings',
        'VIP access at international seminars and congresses'
      ],
      popular: false
    },
    {
      name: 'Lifetime Member',
      price: '$1,499',
      period: 'one-time payment',
      badge: 'Distinguished Fellow',
      description: 'The highest professional tier, celebrating lifetime commitment to architectural harmony.',
      benefits: [
        'Lifetime accredited fellowship with physical seal',
        'Permanent premium directory profile',
        'Uncapped priority support across all consultations',
        'Permanent 30% store discount',
        'Direct seat on the annual IPVPA Advisory Council'
      ],
      popular: false
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) tempErrors.phone = 'Contact number is required.';
    if (!formData.experience.trim()) tempErrors.experience = 'Please write a brief summary of your spatial experience.';
    if (!formData.agreed) tempErrors.agreed = 'You must accept the terms of professional ethics.';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API registration lag
    setTimeout(() => {
      const randomInvoice = 'INV-' + Math.floor(100000 + Math.random() * 900000);
      const invoiceDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      const receipt = {
        invoiceNo: randomInvoice,
        date: invoiceDate,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        profession: formData.profession,
        plan: selectedPlan,
        price: plans.find(p => p.name === selectedPlan)?.price || '$149',
        country: formData.country,
      };

      setReceiptDetails(receipt);
      setIsSubmitting(false);
      setShowReceipt(true);
      onRegisterSuccess(receipt);
    }, 1500);
  };

  return (
    <section className="py-24 bg-white dark:bg-brand-blue-900 transition-colors duration-300" id="membership-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Membership Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <Logo size={100} className="mb-6 filter drop-shadow-[0_4px_16px_rgba(212,175,55,0.2)] animate-pulse" />
          <h2 className="font-display font-bold text-xs sm:text-sm uppercase tracking-widest text-brand-gold-600 dark:text-brand-gold-400 mb-3">
            Accreditation & Union
          </h2>
          <p className="font-display font-bold text-3xl sm:text-4xl text-brand-blue-900 dark:text-white leading-tight">
            Elevate Your Practice to International Standards
          </p>
          <div className="w-16 h-1 bg-brand-gold-500 mx-auto mt-4 rounded-full" />
          <p className="font-sans text-sm text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
            By joining IPVPA, you gain global professional recognition, scientific validation, and access to an elite directory of architects, engineers, and master consultants.
          </p>
        </div>

        {/* Benefits Breakdown Row */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-brand-blue-800/10 border border-gray-100 dark:border-brand-blue-800/20">
            <Award className="text-brand-gold-500 mb-4" size={32} />
            <h3 className="font-display font-bold text-base text-brand-blue-900 dark:text-white mb-2">Professional Accreditation</h3>
            <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Earn the credential of a registered Pyramid Vaastu specialist, backed by our academic and physical engineering oversight.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-brand-blue-800/10 border border-gray-100 dark:border-brand-blue-800/20">
            <Users2 className="text-brand-gold-500 mb-4" size={32} />
            <h3 className="font-display font-bold text-base text-brand-blue-900 dark:text-white mb-2">Global Networking Hub</h3>
            <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Connect directly with leading structural designers, civil engineers, and developers across 10+ countries to sponsor or scale projects.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-brand-blue-800/10 border border-gray-100 dark:border-brand-blue-800/20">
            <Calendar className="text-brand-gold-500 mb-4" size={32} />
            <h3 className="font-display font-bold text-base text-brand-blue-900 dark:text-white mb-2">Exclusive Seminars</h3>
            <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Unlock priority seating at our yearly summits, webinars, monthly laboratories experiments, and custom certification programs.
            </p>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4 max-w-7xl mx-auto mb-24">
          {plans.map((plan) => (
            <div
              key={plan.name}
              onClick={() => setSelectedPlan(plan.name)}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 border cursor-pointer ${
                plan.popular 
                  ? 'border-brand-gold-500 dark:border-brand-gold-400 bg-brand-blue-900 text-white shadow-xl scale-105 lg:scale-100 lg:-translate-y-2' 
                  : selectedPlan === plan.name
                    ? 'border-brand-gold-500 dark:border-brand-gold-400 bg-brand-gold-500/10 text-gray-800 dark:text-white shadow-md'
                    : 'border-gray-200 dark:border-brand-blue-800 bg-white dark:bg-brand-blue-900/60 text-gray-800 dark:text-gray-200'
              }`}
            >
              <div>
                <div className="flex justify-between items-start gap-1 mb-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                    plan.popular 
                      ? 'bg-brand-gold-500 text-brand-blue-900' 
                      : 'bg-gray-100 dark:bg-brand-blue-800 text-gray-500 dark:text-brand-gold-400'
                  }`}>
                    {plan.badge}
                  </span>
                  {plan.popular && <span className="text-[9px] font-bold uppercase text-brand-gold-400 tracking-widest">Most Popular</span>}
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg mb-1">{plan.name}</h3>
                <p className={`font-sans text-xs mb-6 ${plan.popular ? 'text-gray-400' : 'text-gray-400'}`}>{plan.description}</p>
                
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-display font-extrabold text-3xl">{plan.price}</span>
                  <span className="font-sans text-xs text-gray-400">{plan.period}</span>
                </div>

                {/* Benefits checklist */}
                <ul className="space-y-3 mb-8">
                  {plan.benefits.map((b, i) => (
                    <li key={i} className="flex items-start text-[11px] sm:text-xs">
                      <Check className={`w-3.5 h-3.5 mr-2 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-brand-gold-400' : 'text-brand-gold-500'}`} />
                      <span className="leading-normal">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setSelectedPlan(plan.name); }}
                className={`w-full py-3 rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition-all ${
                  selectedPlan === plan.name
                    ? plan.popular
                      ? 'bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-blue-900 border border-brand-gold-500'
                      : 'bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-blue-900 border border-brand-gold-500'
                    : plan.popular
                      ? 'bg-transparent hover:bg-white/5 border border-white/20 text-white'
                      : 'bg-transparent hover:bg-gray-50 dark:hover:bg-brand-blue-800 border border-gray-200 dark:border-brand-blue-800'
                }`}
              >
                {selectedPlan === plan.name ? 'Plan Selected' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>

        {/* Dynamic Registration Form Grid */}
        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Registration instructions */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-bold text-2xl text-brand-blue-900 dark:text-white leading-tight">
              Begin Your Candidate Registration
            </h3>
            <p className="font-sans text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              Complete this application to register as a registered candidate of the IPVPA. Upon submission, a digital invoice will be issued. 
            </p>
            
            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-brand-blue-800/10 border border-gray-100 dark:border-brand-blue-800/30 space-y-4">
              <div className="flex items-start space-x-3">
                <Shield className="text-brand-gold-500 mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-brand-blue-900 dark:text-white">Professional Ethics Bond</h4>
                  <p className="font-sans text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 leading-normal">
                    Members pledge to utilize scientifically proven Pyramid instruments of true copper/brass grade, and avoid fraudulent non-scientific superstitious practices.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FileCheck className="text-brand-gold-500 mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-brand-blue-900 dark:text-white">Validation Audits</h4>
                  <p className="font-sans text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 leading-normal">
                    Registration candidates are entitled to participate in our ongoing spatial laboratory tests, research updates, and calibration reports.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form container */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-gray-50 dark:bg-brand-blue-900/40 border border-gray-100 dark:border-brand-blue-800/50 shadow-sm">
            <form onSubmit={handleRegisterSubmit} className="space-y-6">
              
              <div className="flex items-center gap-2 pb-4 border-b border-gray-100 dark:border-brand-blue-800">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-gold-500" />
                <h4 className="font-display font-bold text-sm text-brand-blue-900 dark:text-white">Selected Plan: <span className="text-brand-gold-600 dark:text-brand-gold-400">{selectedPlan}</span></h4>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter full legal name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-brand-blue-900 text-gray-850 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold-500 focus:border-transparent transition-all ${
                      errors.name ? 'border-red-400' : 'border-gray-200 dark:border-brand-blue-800'
                    }`}
                  />
                  {errors.name && <p className="text-red-400 text-[11px] font-medium mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-brand-blue-900 text-gray-850 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold-500 focus:border-transparent transition-all ${
                      errors.email ? 'border-red-400' : 'border-gray-200 dark:border-brand-blue-800'
                    }`}
                  />
                  {errors.email && <p className="text-red-400 text-[11px] font-medium mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-2">Contact Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+94 77 123 4567"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-brand-blue-900 text-gray-850 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold-500 focus:border-transparent transition-all ${
                      errors.phone ? 'border-red-400' : 'border-gray-200 dark:border-brand-blue-800'
                    }`}
                  />
                  {errors.phone && <p className="text-red-400 text-[11px] font-medium mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-2">Profession / Specialty</label>
                  <select
                    name="profession"
                    value={formData.profession}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-brand-blue-800 bg-white dark:bg-brand-blue-900 text-gray-850 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold-500 focus:border-transparent transition-all"
                  >
                    <option value="Architect">Architectural Designer</option>
                    <option value="Structural Engineer">Structural / Civil Engineer</option>
                    <option value="Interior Designer">Interior Spatial Designer</option>
                    <option value="Project Manager">Construction Project Manager</option>
                    <option value="Vaastu Consultant">Vaastu Practitioner</option>
                    <option value="Student">Enrolled Academic Student</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-2">Brief Experience / Practice Summary</label>
                <textarea
                  name="experience"
                  rows={3}
                  placeholder="Tell us about your professional background, your interest in sacred geometry, or your business location plans..."
                  value={formData.experience}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-brand-blue-900 text-gray-850 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold-500 focus:border-transparent transition-all ${
                    errors.experience ? 'border-red-400' : 'border-gray-200 dark:border-brand-blue-800'
                  }`}
                />
                {errors.experience && <p className="text-red-400 text-[11px] font-medium mt-1">{errors.experience}</p>}
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="agreed"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleInputChange}
                  className="w-4 h-4 mt-0.5 text-brand-gold-500 border-gray-300 rounded focus:ring-brand-gold-500 cursor-pointer"
                />
                <label htmlFor="agreed" className="font-sans text-xs text-gray-500 dark:text-gray-400 leading-normal cursor-pointer select-none">
                  I pledge to uphold the scientific ethics of the IPVPA, promoting non-destructive spatial solutions and laboratory-verified geometric principles.
                </label>
              </div>
              {errors.agreed && <p className="text-red-400 text-[11px] font-medium mt-1">{errors.agreed}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-sans font-bold text-xs uppercase tracking-widest text-brand-blue-900 bg-brand-gold-500 hover:bg-brand-gold-600 border border-brand-gold-500 flex items-center justify-center gap-2 shadow-lg shadow-brand-gold-500/10 cursor-pointer active:scale-98 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-brand-blue-900 border-t-transparent rounded-full animate-spin" />
                    Validating Candidacy...
                  </>
                ) : (
                  <>
                    <Send size={14} /> Submit Membership Registration
                  </>
                )}
              </button>

            </form>
          </div>
        </div>

        {/* Membership Receipt Lightbox Modal overlay */}
        {showReceipt && receiptDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-brand-blue-900 border border-gray-100 dark:border-brand-blue-800 shadow-2xl overflow-hidden p-8 sm:p-10 text-center">
              
              <button
                onClick={() => setShowReceipt(false)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-gray-50 dark:bg-brand-blue-800/50 hover:bg-gray-100 text-gray-400 transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mx-auto mb-6">
                <FileCheck size={36} />
              </div>

              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-brand-blue-900 dark:text-white mb-2">
                Candidacy Accepted
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6">
                Thank you for joining the IPVPA. Your provisional candidacy registration has been registered successfully.
              </p>

              {/* Receipt Body */}
              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-brand-blue-800/10 border border-gray-100 dark:border-brand-blue-800/30 text-left space-y-3 font-sans text-xs mb-8">
                <div className="flex justify-between border-b border-gray-100 dark:border-brand-blue-800 pb-2">
                  <span className="text-gray-400 font-semibold">Invoice Number:</span>
                  <span className="font-mono font-bold text-gray-800 dark:text-white">{receiptDetails.invoiceNo}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 dark:border-brand-blue-800 pb-2">
                  <span className="text-gray-400 font-semibold">Date of Issuance:</span>
                  <span className="text-gray-800 dark:text-white">{receiptDetails.date}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 dark:border-brand-blue-800 pb-2">
                  <span className="text-gray-400 font-semibold">Candidate:</span>
                  <span className="text-gray-800 dark:text-white font-semibold">{receiptDetails.name}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 dark:border-brand-blue-800 pb-2">
                  <span className="text-gray-400 font-semibold">Classification:</span>
                  <span className="text-gray-800 dark:text-white">{receiptDetails.profession}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 dark:border-brand-blue-800 pb-2">
                  <span className="text-gray-400 font-semibold">Accreditation Tier:</span>
                  <span className="text-brand-gold-600 dark:text-brand-gold-400 font-bold">{receiptDetails.plan}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-gray-400 font-semibold">Amount Due:</span>
                  <span className="font-mono text-base font-bold text-gray-800 dark:text-white">{receiptDetails.price}</span>
                </div>
              </div>

              {/* Next Steps */}
              <div className="p-4 rounded-xl bg-brand-gold-500/10 border border-brand-gold-500/20 text-left text-[11px] text-gray-600 dark:text-gray-300 leading-normal mb-8 flex gap-2.5">
                <Info size={16} className="text-brand-gold-500 mt-0.5 flex-shrink-0" />
                <p>
                  <strong>Next Step:</strong> An email containing your digital welcome kit, exam curriculum guidelines, and local chapter coordinates has been dispatched to <strong>{receiptDetails.email}</strong>.
                </p>
              </div>

              <button
                onClick={() => setShowReceipt(false)}
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
