import React from 'react';
import { Quote } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const testimonials = [
  {
    quote: "Apna Developer didn't just rebuild our website; they completely revitalized our brand. Our leads have doubled since the launch.",
    author: "Sarah Jenkins",
    role: "CMO, FinTech Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "The ROI on our PPC campaigns has been incredible. Their team is data-driven, transparent, and proactive.",
    author: "Michael Chang",
    role: "Founder, Urban Gear",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "Finally, an agency that understands both design and technical SEO. We rank #1 for our main keywords now.",
    author: "Elena Rodriguez",
    role: "Marketing Director, LuxHomes",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 relative z-10 bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
              Client Stories
            </h2>
            <p className="text-gray-400">Trusted by innovative companies worldwide.</p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 0.15}>
              <div 
                className="bg-black/20 p-8 rounded-2xl border border-white/10 relative hover:bg-black/40 transition-colors h-full"
              >
                <Quote className="w-8 h-8 text-purple-500/50 mb-6" />
                <p className="text-lg text-gray-300 mb-8 italic leading-relaxed">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={item.image} 
                    alt={item.author} 
                    loading="lazy"
                    width="48"
                    height="48"
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/20" 
                  />
                  <div>
                    <h4 className="text-white font-semibold">{item.author}</h4>
                    <span className="text-sm text-gray-500">{item.role}</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        {/* Logos/Brands Bar */}
        <RevealOnScroll delay={0.4}>
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 sm:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholder for Client Logos using text for simplicity */}
             {['Google', 'Spotify', 'Stripe', 'Airbnb', 'Netflix'].map((brand) => (
               <span key={brand} className="text-xl font-bold text-white/40 hover:text-white transition-colors cursor-default">{brand}</span>
             ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Testimonials;