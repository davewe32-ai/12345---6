import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus, CreditCard, Info, FileCheck } from 'lucide-react';
import { CartItem, Product } from '../types';
import InstrumentImage from './InstrumentImages';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function Cart({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartProps) {
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    paymentMethod: 'Bank Transfer'
  });
  const [checkoutErrors, setCheckoutErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);
  const [invoiceDetails, setInvoiceDetails] = useState<any>(null);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 35; // Free shipping above $500
  const total = subtotal + shipping;

  const handleCheckoutChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCheckoutForm({ ...checkoutForm, [name]: value });
    if (checkoutErrors[name]) {
      setCheckoutErrors({ ...checkoutErrors, [name]: '' });
    }
  };

  const validateCheckout = () => {
    const errors: Record<string, string> = {};
    if (!checkoutForm.name.trim()) errors.name = 'Your name is required.';
    if (!checkoutForm.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(checkoutForm.email)) {
      errors.email = 'Please provide a valid email.';
    }
    if (!checkoutForm.phone.trim()) errors.phone = 'Phone number is required.';
    if (!checkoutForm.address.trim()) errors.address = 'Shipping address is required.';
    if (!checkoutForm.city.trim()) errors.city = 'City is required.';
    setCheckoutErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateCheckout()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const invoiceNo = 'TRD-' + Math.floor(100000 + Math.random() * 900000);
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 7); // 7 days transit
      const dateString = deliveryDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      const invoice = {
        invoiceNo,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        deliveryDate: dateString,
        name: checkoutForm.name,
        email: checkoutForm.email,
        phone: checkoutForm.phone,
        address: `${checkoutForm.address}, ${checkoutForm.city}, ${checkoutForm.zip || ''}`,
        paymentMethod: checkoutForm.paymentMethod,
        items: [...cartItems],
        subtotal,
        shipping,
        total
      };

      setInvoiceDetails(invoice);
      setIsSubmitting(false);
      setShowInvoice(true);
      onClearCart();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fade-in flex justify-end">
      
      {/* Sliding panel */}
      <div className="w-full max-w-lg bg-white dark:bg-brand-blue-900 h-full shadow-2xl flex flex-col justify-between relative border-l border-white/10">
        
        {/* Header bar */}
        <div className="p-6 border-b border-gray-150 dark:border-brand-blue-800 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <ShoppingBag className="text-brand-gold-500" size={22} />
            <h3 className="font-display font-extrabold text-base sm:text-lg text-brand-blue-900 dark:text-white">
              Your Instrument Cart
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-gray-50 dark:bg-brand-blue-800 hover:bg-gray-100 text-gray-400 transition"
            aria-label="Close cart drawer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Dynamic Cart Body */}
        {showInvoice && invoiceDetails ? (
          /* Invoice panel view */
          <div className="p-8 overflow-y-auto flex-grow text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mx-auto mb-4">
              <FileCheck size={36} />
            </div>
            
            <h3 className="font-display font-extrabold text-xl text-brand-blue-900 dark:text-white">Order Scheduled</h3>
            <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Your scientific instruments are being mathematically aligned and calibrated in our Colombo laboratory.
            </p>

            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-brand-blue-800/10 border border-gray-100 dark:border-brand-blue-800/30 text-left space-y-3 font-sans text-xs">
              <div className="flex justify-between border-b border-gray-100 dark:border-brand-blue-800 pb-2">
                <span className="text-gray-400 font-semibold">Receipt Number:</span>
                <span className="font-mono font-bold text-gray-800 dark:text-white">{invoiceDetails.invoiceNo}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 dark:border-brand-blue-800 pb-2">
                <span className="text-gray-400 font-semibold">Client Name:</span>
                <span className="text-gray-800 dark:text-white font-semibold">{invoiceDetails.name}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 dark:border-brand-blue-800 pb-2">
                <span className="text-gray-400 font-semibold">Dispatch Transit:</span>
                <span className="text-gray-800 dark:text-white">{invoiceDetails.paymentMethod}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 dark:border-brand-blue-800 pb-2">
                <span className="text-gray-400 font-semibold">Shipping Address:</span>
                <span className="text-gray-850 dark:text-white truncate max-w-[200px]" title={invoiceDetails.address}>{invoiceDetails.address}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 dark:border-brand-blue-800 pb-2">
                <span className="text-gray-400 font-semibold">Delivery Est:</span>
                <span className="text-brand-gold-600 dark:text-brand-gold-400 font-bold">{invoiceDetails.deliveryDate}</span>
              </div>
              <div className="flex justify-between pt-1 font-bold text-sm">
                <span className="text-gray-800 dark:text-white">Grand Total:</span>
                <span className="font-mono text-brand-gold-600 dark:text-brand-gold-400">${invoiceDetails.total}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-brand-gold-500/10 border border-brand-gold-500/20 text-left text-[11px] text-gray-600 dark:text-gray-300 leading-normal flex gap-2">
              <Info size={16} className="text-brand-gold-500 mt-0.5 flex-shrink-0" />
              <p>
                An email carrying bank transfer account numbers, transaction proofs, and alignment instructions has been dispatched to <strong>{invoiceDetails.email}</strong>.
              </p>
            </div>

            <button
              onClick={() => { setShowInvoice(false); setShowCheckout(false); onClose(); }}
              className="w-full py-3.5 rounded-xl font-sans font-bold text-xs uppercase tracking-wider text-brand-blue-900 bg-brand-gold-500 hover:bg-brand-gold-600 transition"
            >
              Close Receipt Drawer
            </button>
          </div>
        ) : showCheckout ? (
          /* Checkout info form view */
          <div className="p-6 overflow-y-auto flex-grow">
            <h4 className="font-display font-bold text-sm text-brand-blue-900 dark:text-white uppercase tracking-wider mb-6 flex items-center gap-1.5 pb-3 border-b border-gray-100 dark:border-brand-blue-800">
              <CreditCard size={18} className="text-brand-gold-500" /> Secure Shipping Particulars
            </h4>

            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              <div>
                <label className="block font-sans text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={checkoutForm.name}
                  onChange={handleCheckoutChange}
                  className={`w-full px-4 py-2.5 rounded-xl border bg-gray-50 dark:bg-brand-blue-800/40 text-gray-850 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold-500 transition ${
                    checkoutErrors.name ? 'border-red-400' : 'border-gray-250 dark:border-brand-blue-800'
                  }`}
                  placeholder="Enter full legal name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={checkoutForm.email}
                    onChange={handleCheckoutChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-gray-50 dark:bg-brand-blue-800/40 text-gray-850 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold-500 transition ${
                      checkoutErrors.email ? 'border-red-400' : 'border-gray-250 dark:border-brand-blue-800'
                    }`}
                    placeholder="example@gmail.com"
                  />
                </div>
                <div>
                  <label className="block font-sans text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Contact Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={checkoutForm.phone}
                    onChange={handleCheckoutChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-gray-50 dark:bg-brand-blue-800/40 text-gray-850 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold-500 transition ${
                      checkoutErrors.phone ? 'border-red-400' : 'border-gray-250 dark:border-brand-blue-800'
                    }`}
                    placeholder="+94 77 123 4567"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Delivery Address</label>
                <input
                  type="text"
                  name="address"
                  value={checkoutForm.address}
                  onChange={handleCheckoutChange}
                  className={`w-full px-4 py-2.5 rounded-xl border bg-gray-50 dark:bg-brand-blue-800/40 text-gray-850 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold-500 transition ${
                    checkoutErrors.address ? 'border-red-400' : 'border-gray-250 dark:border-brand-blue-800'
                  }`}
                  placeholder="Street and number"
                />
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block font-sans text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">City / Region</label>
                  <input
                    type="text"
                    name="city"
                    value={checkoutForm.city}
                    onChange={handleCheckoutChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-gray-50 dark:bg-brand-blue-800/40 text-gray-850 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold-500 transition ${
                      checkoutErrors.city ? 'border-red-400' : 'border-gray-250 dark:border-brand-blue-800'
                    }`}
                    placeholder="Colombo 03"
                  />
                </div>
                <div>
                  <label className="block font-sans text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Postal Zip</label>
                  <input
                    type="text"
                    name="zip"
                    value={checkoutForm.zip}
                    onChange={handleCheckoutChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-brand-blue-800 bg-gray-50 dark:bg-brand-blue-800/40 text-gray-850 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold-500 transition"
                    placeholder="00300"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Payment Channel</label>
                <select
                  name="paymentMethod"
                  value={checkoutForm.paymentMethod}
                  onChange={handleCheckoutChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-250 dark:border-brand-blue-800 bg-gray-50 dark:bg-brand-blue-800/40 text-gray-850 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold-500 transition"
                >
                  <option value="Bank Transfer">Telegraphic Bank Transfer (Colombo Secretariat Office)</option>
                  <option value="Visa Card">Visa / Master Card Payment</option>
                  <option value="Cash on Delivery">Cash / Cheque on Site Delivery (Sri Lanka only)</option>
                </select>
              </div>

              {/* Pricing breakdown summary inside checkout */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-brand-blue-850 border border-gray-150 dark:border-brand-blue-800 text-xs text-gray-500 dark:text-gray-300 space-y-2 mt-6">
                <div className="flex justify-between">
                  <span>Cart Items Subtotal:</span>
                  <span className="font-mono font-bold text-gray-800 dark:text-white">${subtotal}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-100 dark:border-brand-blue-800">
                  <span>Priority Courier Service:</span>
                  <span className="font-mono font-bold text-gray-800 dark:text-white">{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between pt-1 font-bold text-sm">
                  <span>Grand Total Due:</span>
                  <span className="font-mono text-brand-gold-600 dark:text-brand-gold-400">${total}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCheckout(false)}
                  className="py-3 rounded-xl border border-gray-250 dark:border-brand-blue-800 font-sans font-semibold text-xs text-gray-500 dark:text-gray-300 hover:bg-black/5"
                >
                  Back to Cart
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="py-3 rounded-xl bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-blue-900 font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer"
                >
                  {isSubmitting ? 'Transmitting...' : 'Confirm Order'}
                </button>
              </div>
            </form>
          </div>
        ) : cartItems.length === 0 ? (
          /* Empty cart view */
          <div className="flex-grow flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-brand-gold-500/10 flex items-center justify-center text-brand-gold-500 mb-4 animate-pulse">
              <ShoppingBag size={28} />
            </div>
            <p className="font-display font-bold text-gray-800 dark:text-white mb-1">Your Cart is Empty</p>
            <p className="font-sans text-xs text-gray-400 max-w-[240px] leading-normal mb-6">
              Browse our catalog of pure copper and brass sacred geometry instruments to get started.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-blue-900 font-sans font-bold text-xs uppercase tracking-wider transition"
            >
              Continue Browsing
            </button>
          </div>
        ) : (
          /* Standard listing cart view */
          <div className="flex-grow overflow-y-auto p-6 space-y-6">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-brand-blue-850 border border-gray-150 dark:border-brand-blue-800/80 group"
                >
                  {/* Thumbnail */}
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200 dark:border-brand-blue-800">
                    {item.product.image.startsWith('instrument-svg-') ? (
                      <div className="w-full h-full p-2 flex items-center justify-center bg-gray-50 dark:bg-brand-blue-900">
                        <InstrumentImage id={item.product.image} />
                      </div>
                    ) : (
                      <div className="w-full h-full p-1.5 flex items-center justify-center bg-white dark:bg-brand-blue-900">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="max-w-full max-h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                  </div>

                  {/* Title & Price details */}
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-start">
                      <h4 className="font-display font-bold text-sm text-brand-blue-900 dark:text-white truncate pr-2 leading-tight">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-gray-400 hover:text-red-500 p-1 rounded-lg transition"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    
                    <span className="font-mono text-xs text-brand-gold-600 dark:text-brand-gold-400 font-bold block mt-1">
                      ${item.product.price}
                    </span>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-gray-200 dark:border-brand-blue-800 rounded-lg bg-white dark:bg-brand-blue-900 px-2 py-1 space-x-2">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="text-gray-450 hover:text-brand-gold-500 transition"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-mono text-xs text-gray-800 dark:text-white font-bold w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="text-gray-450 hover:text-brand-gold-500 transition"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      
                      <span className="font-mono text-xs text-gray-400">
                        Item total: <strong className="text-gray-800 dark:text-white">${item.product.price * item.quantity}</strong>
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Pricing details panel */}
            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-brand-blue-850 border border-gray-150 dark:border-brand-blue-800 space-y-3 font-sans text-xs">
              <div className="flex justify-between text-gray-500">
                <span>Basket Subtotal:</span>
                <span className="font-mono font-bold text-gray-800 dark:text-white">${subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-500 pb-3 border-b border-gray-100 dark:border-brand-blue-800">
                <span>Priority Courier Service:</span>
                <span className="font-mono font-bold text-gray-850 dark:text-white">{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
              </div>
              <div className="flex justify-between pt-1 font-bold text-sm">
                <span className="text-gray-800 dark:text-white">Estimated Grand Total:</span>
                <span className="font-mono text-brand-gold-600 dark:text-brand-gold-400">${total}</span>
              </div>
              
              {shipping > 0 && (
                <p className="text-[10px] text-brand-gold-600 dark:text-brand-gold-400 leading-none pt-1">
                  💡 Hint: Enjoy FREE priority express courier delivery by spending ${500 - subtotal} more!
                </p>
              )}
            </div>

            {/* Action Checkout triggers */}
            <div className="pt-4 pb-8 space-y-3">
              <button
                onClick={() => setShowCheckout(true)}
                className="w-full py-4 rounded-xl font-sans font-bold text-xs uppercase tracking-widest text-brand-blue-900 bg-brand-gold-500 hover:bg-brand-gold-600 shadow-lg shadow-brand-gold-500/15 flex items-center justify-center gap-2 cursor-pointer transition active:scale-95"
              >
                <CreditCard size={14} /> Proceed to Secure Checkout
              </button>
              <button
                onClick={onClearCart}
                className="w-full py-3.5 rounded-xl font-sans font-semibold text-xs uppercase tracking-wider text-gray-400 hover:text-red-500 hover:bg-red-500/5 transition border border-dashed border-gray-250 dark:border-brand-blue-800 text-center"
              >
                Clear Cart Items
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
