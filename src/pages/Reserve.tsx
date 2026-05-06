import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, Mail, Phone, User, Check, ChevronRight } from 'lucide-react';

const Reserve = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: 'casual',
    space: 'lounge',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setStep(1);
      setFormData({
        name: '', email: '', phone: '', date: '', time: '', guests: '2', occasion: 'casual', space: 'lounge', notes: ''
      });
    }, 3000);
  };

  const occasions = [
    { id: 'casual', label: 'Casual Coffee' },
    { id: 'business', label: 'Business Meeting' },
    { id: 'date', label: 'Date' },
    { id: 'celebration', label: 'Celebration' },
    { id: 'tasting', label: 'Tasting Experience' }
  ];

  const spaces = [
    { id: 'lounge', label: 'Main Lounge', capacity: 'Up to 50' },
    { id: 'tasting', label: 'Tasting Room', capacity: 'Up to 12' },
    { id: 'rooftop', label: 'Rooftop Terrace', capacity: 'Up to 80' },
    { id: 'library', label: 'The Library', capacity: 'Up to 20' }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2020/02/27/32679-395576114_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
        
        <div className="relative h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-light mb-4">Reserve a Tasting</h1>
            <p className="text-xl text-primary/60 max-w-2xl mx-auto">
              Secure your seat for an unforgettable coffee experience
            </p>
          </motion.div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between relative">
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-white/10" />
            <div 
              className="absolute top-5 left-0 h-0.5 bg-accent transition-all duration-500"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            />
            {[1, 2, 3].map((num) => (
              <div key={num} className="relative z-10 flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                  step >= num ? 'bg-accent text-black' : 'bg-white/10 text-white/40'
                }`}>
                  {step > num ? <Check size={20} /> : num}
                </div>
                <span className="text-xs mt-2 text-primary/50">
                  {num === 1 ? 'Details' : num === 2 ? 'Preferences' : 'Confirm'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="bg-[#0a0a0a] rounded-2xl p-8 border border-white/5"
            >
              {/* Step 1: Basic Info */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-light mb-6">Tell us about yourself</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-primary/60 mb-2">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-black border border-white/10 rounded-lg pl-10 pr-4 py-3 text-primary focus:border-accent focus:outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-primary/60 mb-2">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-black border border-white/10 rounded-lg pl-10 pr-4 py-3 text-primary focus:border-accent focus:outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-primary/60 mb-2">Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full bg-black border border-white/10 rounded-lg pl-10 pr-4 py-3 text-primary focus:border-accent focus:outline-none transition-colors"
                          placeholder="(212) 555-0123"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-primary/60 mb-2">Number of Guests</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" />
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full bg-black border border-white/10 rounded-lg pl-10 pr-4 py-3 text-primary focus:border-accent focus:outline-none transition-colors"
                        >
                          {[1,2,3,4,5,6,7,8].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full py-3 bg-accent text-black rounded-full hover:scale-105 transition-transform"
                  >
                    Continue
                  </button>
                </motion.div>
              )}

              {/* Step 2: Preferences */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-light mb-6">Choose your experience</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-primary/60 mb-2">Select Space</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" />
                        <select
                          name="space"
                          value={formData.space}
                          onChange={handleChange}
                          className="w-full bg-black border border-white/10 rounded-lg pl-10 pr-4 py-3 text-primary focus:border-accent focus:outline-none"
                        >
                          {spaces.map(space => (
                            <option key={space.id} value={space.id}>{space.label} ({space.capacity})</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-primary/60 mb-2">Occasion</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" />
                        <select
                          name="occasion"
                          value={formData.occasion}
                          onChange={handleChange}
                          className="w-full bg-black border border-white/10 rounded-lg pl-10 pr-4 py-3 text-primary focus:border-accent focus:outline-none"
                        >
                          {occasions.map(occ => (
                            <option key={occ.id} value={occ.id}>{occ.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-primary/60 mb-2">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full bg-black border border-white/10 rounded-lg pl-10 pr-4 py-3 text-primary focus:border-accent focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-primary/60 mb-2">Preferred Time</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" />
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full bg-black border border-white/10 rounded-lg pl-10 pr-4 py-3 text-primary focus:border-accent focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm text-primary/60 mb-2">Special Requests (Optional)</label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={3}
                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-primary focus:border-accent focus:outline-none"
                        placeholder="Dietary restrictions, accessibility needs, or special accommodations..."
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 py-3 border border-white/20 text-primary rounded-full hover:bg-white/5 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex-1 py-3 bg-accent text-black rounded-full hover:scale-105 transition-transform"
                    >
                      Review Booking
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Confirm */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-light mb-6">Confirm Your Reservation</h2>

                  <div className="bg-black rounded-xl p-6 space-y-4">
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-primary/60">Name</span>
                      <span>{formData.name}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-primary/60">Email</span>
                      <span>{formData.email}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-primary/60">Phone</span>
                      <span>{formData.phone}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-primary/60">Date & Time</span>
                      <span>{formData.date} at {formData.time}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-primary/60">Guests</span>
                      <span>{formData.guests}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-primary/60">Space</span>
                      <span>{spaces.find(s => s.id === formData.space)?.label}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-primary/60">Occasion</span>
                      <span>{occasions.find(o => o.id === formData.occasion)?.label}</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 py-3 border border-white/20 text-primary rounded-full hover:bg-white/5 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-accent text-black rounded-full hover:scale-105 transition-transform"
                    >
                      Confirm Reservation
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#0a0a0a] rounded-2xl p-12 text-center border border-accent/20"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-light mb-2">Reservation Confirmed!</h2>
              <p className="text-primary/60 mb-6">
                Thank you for choosing Noir Brew. We'll send a confirmation email shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2 bg-accent text-black rounded-full hover:scale-105 transition-transform"
              >
                Make Another Reservation
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info Note */}
        <div className="mt-8 text-center text-primary/40 text-sm">
          <p>We'll send a confirmation email within 2 hours during business hours.</p>
          <p className="mt-1">For immediate assistance, call us at (212) 555-0247</p>
        </div>
      </div>
    </div>
  );
};

export default Reserve;