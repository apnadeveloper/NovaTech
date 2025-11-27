import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface RevealTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const RevealText: React.FC<RevealTextProps> = ({ text, delay = 0, className = "" }) => {
  return (
    <span className={`inline-flex flex-wrap justify-center gap-x-[0.2em] ${className}`}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-flex whitespace-nowrap">
          {word.split("").map((char, j) => (
            <span
              key={j}
              className="animate-reveal inline-block"
              style={{
                animationDelay: `${delay + i * 0.1 + j * 0.03}s`,
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 text-center z-10">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="animate-fade-in" style={{ animationDuration: '0.6s' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-blue-300 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Accepting New Clients</span>
          </div>
        </div>

        {/* Removed RevealOnScroll wrapper for LCP Optimization */}
        <div className="flex flex-col items-center justify-center gap-2">
           <h1 className="sr-only">Digital Excellence Redefined.</h1>
           <div className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-400 pb-2">
             <RevealText text="Digital Excellence" delay={0.1} />
           </div>
           <div className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-purple-400 via-purple-300 to-blue-500 pb-2">
             <RevealText text="Redefined." delay={0.4} />
           </div>
        </div>

        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Nova Tech transforms ambitious brands into market leaders through data-driven SEO, creative content, and cutting-edge web development.
          </p>
        </div>

        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105"
            >
              Free Website Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
               onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
               className="px-8 py-3.5 rounded-full font-semibold border border-white/10 hover:bg-white/5 transition-all text-white"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-gray-500 hidden sm:block">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;