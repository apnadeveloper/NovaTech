import React, { useState, useEffect, useRef } from 'react';
import { Quote, Star } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const testimonialsData = [
  {
    name: "Sarah Jenkins",
    role: "CMO, FinTech Solutions",
    content: "Apna Developer didn't just rebuild our website; they completely revitalized our brand. Our leads have doubled since the launch.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=50&w=150&fm=webp&fit=crop"
  },
  {
    name: "Michael Chang",
    role: "Founder, Urban Gear",
    content: "The ROI on our PPC campaigns has been incredible. Their team is data-driven, transparent, and proactive.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=50&w=150&fm=webp&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director, LuxHomes",
    content: "Finally, an agency that understands both design and technical SEO. We rank #1 for our main keywords now.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=50&w=150&fm=webp&fit=crop"
  },
  {
    name: "David Park",
    role: "CEO, TechFlow",
    content: "Their development team is top-notch. They delivered a complex React application ahead of schedule and bug-free.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=50&w=150&fm=webp&fit=crop"
  },
  {
    name: "Jennifer Wu",
    role: "Owner, Bloom & Wild",
    content: "The e-commerce solution they built for us increased our conversion rate by 150%. Highly recommended!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=50&w=150&fm=webp&fit=crop"
  },
  {
    name: "Robert Fox",
    role: "CTO, SecureNet",
    content: "Outstanding attention to security and performance. Our site speed score went from 45 to 98.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=50&w=150&fm=webp&fit=crop"
  },
  {
    name: "Amanda Lowery",
    role: "Director, ArtVibe",
    content: "The creative direction was exactly what we needed. They captured our brand essence perfectly.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=50&w=150&fm=webp&fit=crop"
  },
  {
    name: "James Wilson",
    role: "Manager, FitLife Gym",
    content: "Our membership signups skyrocketed after the new landing page launch. Great work!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=50&w=150&fm=webp&fit=crop"
  },
  {
    name: "Lisa Thompson",
    role: "Founder, EcoStyle",
    content: "Professional, responsive, and incredibly talented. They guided us through every step of the digital transformation.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=50&w=150&fm=webp&fit=crop"
  },
  {
    name: "Marcus Johnson",
    role: "VP Sales, CloudScale",
    content: "The automated lead generation scripts they wrote for us saved our sales team 20 hours a week.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=50&w=150&fm=webp&fit=crop"
  },
  {
    name: "Sophie Chen",
    role: "Marketing Lead, Foodie app",
    content: "Social media engagement is up 300%. The content they create is viral-ready and on-brand.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=50&w=150&fm=webp&fit=crop"
  },
  {
    name: "Thomas Wright",
    role: "Director, LegalEase",
    content: "They made a boring legal website look modern and approachable without losing professionalism.",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488058?q=50&w=150&fm=webp&fit=crop"
  },
  {
    name: "Rachel Green",
    role: "Owner, Green Spaces",
    content: "SEO results were faster than expected. We are now fully booked for the season.",
    image: "https://images.unsplash.com/photo-1515020528571-4892c9b6890d?q=50&w=150&fm=webp&fit=crop"
  },
  {
    name: "Daniel Lee",
    role: "Founder, CryptoWatch",
    content: "Complex data visualization handled with ease. The dashboard they built is world-class.",
    image: "https://images.unsplash.com/photo-1492562080023-affea1c7dd90?q=50&w=150&fm=webp&fit=crop"
  },
  {
    name: "Emma Davis",
    role: "CEO, StartUp Hub",
    content: "From logo design to full web app, Apna Developer has been the perfect partner for our launch.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=50&w=150&fm=webp&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  const [itemsPerView, setItemsPerView] = useState(4);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const totalItems = testimonialsData.length;

  // We append the first 4 items to the end to create a seamless loop effect
  const displayItems = [...testimonialsData, ...testimonialsData.slice(0, 4)];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerView(4);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Handle the loop reset
  useEffect(() => {
    if (activeIndex === totalItems) {
      // We are at the cloned start. Wait for transition to finish, then snap back to 0.
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(0);
        // Force reflow/re-enable transition in next tick
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, 500); // Match CSS duration
      return () => clearTimeout(timeout);
    }
  }, [activeIndex, totalItems]);

  return (
    <section id="testimonials" className="py-24 px-6 relative z-10 bg-black/20 border-y border-white/5 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
              Client Success Stories
            </h2>
            <p className="text-gray-400">Trusted by over 500+ innovative companies worldwide.</p>
          </div>
        </RevealOnScroll>

        <div className="relative overflow-hidden w-full">
            <div 
              className="flex"
              style={{
                transform: `translateX(-${activeIndex * (100 / itemsPerView)}%)`,
                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
              }}
            >
              {displayItems.map((item, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 px-3 w-full md:w-1/2 lg:w-1/4 box-border"
                >
                  <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 h-full flex flex-col hover:bg-slate-800/80 transition-colors">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed flex-grow">
                      "{item.content}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          loading="lazy"
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">{item.name}</h4>
                        <span className="text-xs text-blue-400 font-medium">{item.role}</span>
                      </div>
                      <Quote className="w-6 h-6 text-white/10 ml-auto transform rotate-180" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>

        {/* Brands Ticker */}
        <RevealOnScroll delay={0.4}>
          <div className="mt-20 pt-8 border-t border-white/5">
            <p className="text-center text-sm text-gray-500 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
               {['Google', 'Spotify', 'Stripe', 'Airbnb', 'Netflix', 'Shopify', 'Slack'].map((brand) => (
                 <span key={brand} className="text-xl md:text-2xl font-bold text-white hover:text-white transition-colors cursor-default select-none">{brand}</span>
               ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Testimonials;