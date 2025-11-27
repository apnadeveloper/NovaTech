import React from 'react';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface AboutPreviewProps {
  onNavigate: (page: string) => void;
}

const AboutPreview: React.FC<AboutPreviewProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 px-6 relative z-10 bg-gradient-to-b from-slate-950 to-black/50">
      <div className="max-w-7xl mx-auto text-center">
        <RevealOnScroll>
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">Who We Are</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3 mb-6">Architects of the Digital Future</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-10 leading-relaxed">
            Nova Tech isn't just an agency; we are your strategic growth partner. Born from a passion for technology and design, we help businesses navigate the complexities of the modern web. From startups to Fortune 500s, we deliver tailored solutions that drive real impact.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-y border-white/10 py-10">
             {[
               { number: "150+", label: "Projects Launched" },
               { number: "98%", label: "Client Retention" },
               { number: "500%", label: "Avg. ROI Growth" },
               { number: "24/7", label: "Support System" },
             ].map((stat, idx) => (
               <div key={idx} className="flex flex-col items-center">
                 <span className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</span>
                 <span className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</span>
               </div>
             ))}
          </div>

          <button 
            onClick={() => onNavigate('about')}
            className="group inline-flex items-center gap-2 bg-transparent border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Read Our Story
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default AboutPreview;