import React, { useState, useEffect } from 'react';
import { X, Mail, ArrowRight, Loader2, Check, Zap, Tag } from 'lucide-react';

const NewsletterPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Check if the user has already seen the popup in this session
    const hasSeen = sessionStorage.getItem('newsletter_shown');
    
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('newsletter_shown', 'true');
      }, 2000); // 2 seconds delay
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');

    try {
       // Using the same form handler as the contact form
       const response = await fetch("https://formsubmit.co/ajax/info@apnadeveloper.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 
          email: email,
          _subject: "Discount Offer Signup (Popup)",
          message: `New signup for Limited Time Offer (40% OFF New / 30% OFF Existing). Email: ${email}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        // Close popup after success message
        setTimeout(() => {
            setIsVisible(false);
        }, 2500);
      } else {
        setStatus('error');
      }
    } catch (e) {
      console.error(e);
      setStatus('error');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-white/10 animate-reveal"
      >
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all z-20"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-10 relative z-10">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 text-xs font-bold text-red-400 mb-6 uppercase tracking-wider">
                <Zap className="w-3 h-3 fill-current" /> Limited Time Offer
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-3">
              Unlock Exclusive <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Agency Discounts</span>
            </h2>
            
            <div className="space-y-4 mb-8">
                <p className="text-gray-300">
                    Transform your digital presence today. Enter your email to claim your voucher.
                </p>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <div className="bg-green-500/20 p-2 rounded-lg">
                               <Tag className="w-4 h-4 text-green-400" />
                           </div>
                           <span className="text-white font-medium">New Clients</span>
                        </div>
                        <span className="text-xl font-bold text-green-400">40% OFF</span>
                    </div>
                    <div className="w-full h-px bg-white/10"></div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <div className="bg-blue-500/20 p-2 rounded-lg">
                               <Tag className="w-4 h-4 text-blue-400" />
                           </div>
                           <span className="text-white font-medium">Existing Clients</span>
                        </div>
                        <span className="text-xl font-bold text-blue-400">30% OFF</span>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="relative">
                <div className="relative mb-4">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                        type="email" 
                        placeholder="Enter your work email" 
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === 'error') setStatus('idle');
                        }}
                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        required
                    />
                </div>
                
                {status === 'error' && (
                    <p className="text-red-400 text-sm mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span> 
                        Something went wrong. Please try again.
                    </p>
                )}

                <button 
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className={`
                        w-full font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300
                        ${status === 'success' 
                           ? 'bg-green-600 text-white cursor-default' 
                           : 'bg-white text-black hover:bg-gray-200 hover:scale-[1.02]'
                        }
                    `}
                >
                    {status === 'loading' ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : status === 'success' ? (
                        <>Discount Code Sent! <Check className="w-5 h-5" /></>
                    ) : (
                        <>Claim My Discount <ArrowRight className="w-5 h-5" /></>
                    )}
                </button>
            </form>
            
            <p className="text-[10px] text-gray-500 text-center mt-5">
                We respect your privacy. Unsubscribe at any time.
            </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;