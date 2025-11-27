import React, { useState } from 'react';
import { Send, Check, Loader2, AlertCircle, Phone, MapPin, Mail as MailIcon } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'SEO',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@apnadeveloper.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 
          ...formData,
          _subject: `New Lead: ${formData.service} - ${formData.name}`,
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: 'SEO', message: '' });
      } else {
        setStatus('error');
        setErrorMessage('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Network error. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10 bg-slate-950">
      <div className="max-w-6xl mx-auto pt-16">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to start your digital transformation? Contact us today for a free consultation.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Contact Info Sidebar */}
          <RevealOnScroll className="md:col-span-1 space-y-8">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">WhatsApp / Phone</h3>
                  <a href="https://wa.me/447848893414" className="text-gray-400 hover:text-white transition-colors block">
                    +44 7848 893414
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/20 p-3 rounded-lg text-purple-400">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                  <a href="mailto:info@apnadeveloper.com" className="text-gray-400 hover:text-white transition-colors block break-all">
                    info@novatech.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="flex items-start gap-4">
                <div className="bg-green-500/20 p-3 rounded-lg text-green-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Headquarters</h3>
                  <p className="text-gray-400">
                    71-75 Shelton Street,<br />
                    Covent Garden, London,<br />
                    WC2H 9JQ, United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Contact Form */}
          <RevealOnScroll delay={0.2} className="md:col-span-2">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Service Interest</label>
                  <select
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors appearance-none"
                  >
                    <option value="SEO">SEO Optimization</option>
                    <option value="PPC">PPC Advertising</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {status === 'success' ? (
                  <div className="flex items-center justify-center gap-2 bg-green-500/20 text-green-400 px-4 py-3 rounded-lg border border-green-500/50">
                    <Check className="w-5 h-5" />
                    <span className="font-semibold">Request Received! We'll be in touch.</span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 text-lg"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Get Free Audit <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                )}
              </form>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

export default Contact;