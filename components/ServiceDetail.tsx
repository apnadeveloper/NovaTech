import React from 'react';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceItem } from './ServiceData';
import RevealOnScroll from './RevealOnScroll';

interface ServiceDetailProps {
  service: ServiceItem;
  onBack: () => void;
  onNavigate: (page: string) => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack, onNavigate }) => {
  return (
    <div className="bg-slate-950 pt-24 min-h-screen">
      <div className="px-6 py-8">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>

        <div className="max-w-7xl mx-auto">
          {/* Hero Section of Detail */}
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row gap-12 items-start mb-24">
              <div className="flex-1 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 mb-6">
                   {React.cloneElement(service.icon as React.ReactElement, { className: "w-8 h-8 text-white" })}
                </div>
                <h1 className="text-4xl sm:text-6xl font-bold text-white">{service.title}</h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  {service.longDescription}
                </p>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors mt-4"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              {/* Abstract Visual representation */}
              <div className="flex-1 w-full relative">
                <div className="aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 relative">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>
                    <div className="w-48 h-48 rounded-full bg-purple-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-white/5 rounded-xl rotate-3"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-white/5 rounded-xl -rotate-3"></div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-24">
             <RevealOnScroll delay={0.2}>
               <h3 className="text-2xl font-bold text-white mb-6">What We Offer</h3>
               <div className="space-y-4">
                 {service.features.map((feature, idx) => (
                   <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                     <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                       <CheckCircle2 className="w-4 h-4 text-blue-400" />
                     </div>
                     <span className="text-gray-200 font-medium">{feature}</span>
                   </div>
                 ))}
               </div>
             </RevealOnScroll>

             <RevealOnScroll delay={0.4}>
               <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
               <div className="space-y-4">
                 {service.benefits.map((benefit, idx) => (
                   <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-900/10 to-blue-900/10 border border-white/5">
                     <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                     <span className="text-gray-200 font-medium">{benefit}</span>
                   </div>
                 ))}
               </div>
             </RevealOnScroll>
          </div>

          {/* CTA Area */}
          <RevealOnScroll>
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
              
              <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Ready to transform your {service.title}?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8 relative z-10">
                Let's discuss how we can implement these solutions to drive growth for your business.
              </p>
              <button 
                onClick={() => onNavigate('contact')}
                className="relative z-10 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
              >
                Schedule Consultation
              </button>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;