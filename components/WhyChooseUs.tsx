import React from 'react';
import { CheckCircle2, Zap, Shield, Rocket } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <RevealOnScroll>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=50&w=500&fm=webp&fit=crop" 
                  alt="Team analyzing data on screens" 
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="450"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
                    <Zap className="w-5 h-5 fill-current" />
                    <span>Next-Gen Technology</span>
                  </div>
                  <p className="text-white text-lg font-medium">Powered by AI-driven analytics and real-time market insights.</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6">
                  Why Apna Developer?
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We don't just follow trends; we set them. At Apna Developer, we fuse creative brilliance with engineering precision to build digital ecosystems that scale. Our proprietary SEO algorithms and performance marketing frameworks ensure your brand doesn't just compete—it dominates.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Data-First Strategy", desc: "Every decision is backed by millions of data points." },
                  { title: "Full-Stack Agility", desc: "From backend dev to frontend UX, we handle it all." },
                  { title: "ROI Guaranteed", desc: "We focus on metrics that matter: Revenue, Retention, and ROAS." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="mt-1 bg-blue-500/20 p-2 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;