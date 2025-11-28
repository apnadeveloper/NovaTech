import React, { useState } from 'react';
import { ArrowRight, Check, Loader2, AlertCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    // Reset status if it was error before to clear visual cues while validating
    if (status === 'error') setStatus('idle');

    if (!email) {
      setStatus('error');
      setErrorMessage('Email address is required.');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    
    try {
      // Use FormSubmit.co to send the email to noorblch@gmail.com
      // This service works for static sites without a backend
      const response = await fetch("https://formsubmit.co/ajax/noorblch@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 
          email: email,
          _subject: "New Apna Developer Newsletter Signup",
          message: `New newsletter signup from: ${email}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setErrorMessage('');
      } else {
        // FormSubmit might return success even if there are issues, but if it returns non-200, it's an error
        setStatus('error');
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
      setErrorMessage('Network error. Please try again later.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <form onSubmit={handleSubmit} className="relative group flex flex-col gap-2">
        <div className="relative">
          <div className={`absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 ${status === 'error' ? 'from-red-500 to-red-500 opacity-80' : ''}`}></div>
          <div className="relative flex items-center bg-black rounded-lg p-1">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') {
                  setStatus('idle');
                  setErrorMessage('');
                }
              }}
              disabled={status === 'success' || status === 'loading'}
              placeholder="Enter your email address"
              className="flex-1 bg-transparent text-white px-4 py-3 outline-none placeholder-gray-500 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'success' || status === 'loading'}
              className={`
                flex items-center justify-center px-6 py-2.5 rounded-md font-medium transition-all duration-200
                ${status === 'success' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-white text-black hover:bg-gray-100'
                }
              `}
            >
              {status === 'loading' ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : status === 'success' ? (
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Joined</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span>Notify Me</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Error Message */}
        {status === 'error' && errorMessage && (
          <div className="flex items-center gap-2 text-red-400 text-sm px-2 animate-fade-in">
            <AlertCircle className="w-4 h-4" />
            <span>{errorMessage}</span>
          </div>
        )}
      </form>
      <p className="mt-4 text-sm text-center text-gray-500">
        Be the first to know when we launch. No spam, ever.
      </p>
    </div>
  );
};

export default Newsletter;