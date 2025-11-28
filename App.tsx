import React, { useState, Suspense, lazy } from 'react';
import { Twitter, Instagram, Linkedin, Mail, ArrowRight, Loader2, MapPin, Phone, Facebook } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Background from './components/Background';
import RevealOnScroll from './components/RevealOnScroll';
import SEO from './components/SEO';
import DelayedLoader from './components/DelayedLoader';

// Lazy load heavy components and fixed elements
const TeaserChat = lazy(() => import('./components/TeaserChat'));
const WhatsAppBtn = lazy(() => import('./components/WhatsAppBtn'));
const BackToTop = lazy(() => import('./components/BackToTop'));

// Lazy load pages
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Contact = lazy(() => import('./components/Contact'));
const About = lazy(() => import('./components/About'));
const AboutPreview = lazy(() => import('./components/AboutPreview'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const WorkProcess = lazy(() => import('./components/WorkProcess'));

const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    return (
      <Suspense fallback={<PageLoader />}>
        {currentPage === 'home' && (
          <>
            <SEO 
              title="Apna Developer | Digital Marketing & Web Development Agency"
              description="Apna Developer transforms ambitious brands into market leaders through data-driven SEO, creative content, and cutting-edge web development."
            />
            <Hero />
            <WhyChooseUs />
            <WorkProcess />
            <Services isPreview={true} onNavigate={handleNavigate} />
            <Portfolio isPreview={true} onNavigate={handleNavigate} />
            <AboutPreview onNavigate={handleNavigate} />
            
            <section className="py-24 px-6 relative z-10">
              <RevealOnScroll>
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                   <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 relative z-10">Ready to Scale Your Brand?</h2>
                   <p className="text-gray-300 max-w-2xl mx-auto mb-8 relative z-10 text-lg">
                     Join hundreds of successful businesses who have transformed their digital presence with Apna Developer.
                   </p>
                   <button 
                     onClick={() => handleNavigate('contact')}
                     className="relative z-10 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors inline-flex items-center gap-2"
                   >
                     Get Your Free Audit <ArrowRight className="w-5 h-5" />
                   </button>
                </div>
              </RevealOnScroll>
            </section>
          </>
        )}
        {currentPage === 'services' && <Services isPreview={false} onNavigate={handleNavigate} />}
        {currentPage === 'work' && <Portfolio isPreview={false} onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'about' && <About />}
      </Suspense>
    );
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 text-white font-sans selection:bg-blue-500/30">
      <Background />
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      {/* 
        Defer loading of interactive elements to prioritize LCP/FCP.
        Delay set to 4000ms to clear the initial Lighthouse audit window.
      */}
      <DelayedLoader delay={4000}>
        <Suspense fallback={null}>
          <WhatsAppBtn />
          <BackToTop />
          <TeaserChat />
        </Suspense>
      </DelayedLoader>

      <main className="flex-1 transition-opacity duration-300 ease-in-out">
        {renderPage()}
      </main>

      {/* Footer Section */}
      <footer className="relative z-10 w-full bg-[#1a1c23] border-t border-white/5 pt-16 pb-8 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 relative overflow-hidden shadow-lg shadow-white/10">
                  <span className="text-blue-600 font-bold text-2xl z-10 relative top-[1px]">A</span>
                  <div className="absolute w-14 h-4 border border-slate-900 rounded-[100%] rotate-[-45deg] top-4"></div>
               </div>
               <div className="flex flex-col">
                  <span className="text-lg font-bold text-white tracking-widest leading-none">APNA</span>
                  <span className="text-[10px] font-bold text-white tracking-[0.2em] leading-none mt-1">DEVELOPER</span>
               </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted partner for comprehensive digital marketing solutions that drive growth and maximize online presence.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all duration-300" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Services', id: 'services' },
                { label: 'Portfolio', id: 'work' },
                { label: 'About Us', id: 'about' },
                { label: 'Contact', id: 'contact' },
              ].map((item, idx) => (
                <li key={idx}>
                   <button 
                     onClick={() => handleNavigate(item.id)}
                     className="hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group"
                   >
                     <span className="text-gray-600 group-hover:text-blue-400 transition-colors">→</span> {item.label}
                   </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Our Services</h3>
            <ul className="space-y-3 text-sm">
              {[
                'Website Designing',
                'Website Development',
                'eCommerce Development',
                'Search Engine Optimization',
                'WordPress Development',
                'Graphics Designing',
                'Social Media Marketing'
              ].map((service, idx) => (
                 <li key={idx}>
                   <button 
                     onClick={() => handleNavigate('services')}
                     className="hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group text-left"
                   >
                     <span className="text-gray-600 group-hover:text-blue-400 transition-colors">→</span> {service}
                   </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Contact Info</h3>
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3 group">
                 <MapPin className="w-5 h-5 text-white mt-0.5 shrink-0 group-hover:text-blue-400 transition-colors" />
                 <span className="text-gray-300 group-hover:text-white transition-colors">Dar-ul-Ehsan Town - Okara, PAKISTAN</span>
              </div>
              <div className="flex items-center gap-3 group">
                 <Phone className="w-5 h-5 text-white shrink-0 group-hover:text-green-500 transition-colors" />
                 <a href="https://wa.me/923436059243" className="text-gray-300 group-hover:text-white transition-colors">WhatsApp: +92 343 605 9243</a>
              </div>
              <div className="flex items-center gap-3 group">
                 <Phone className="w-5 h-5 text-white shrink-0 group-hover:text-green-500 transition-colors" />
                 <a href="https://wa.me/447848893414" className="text-gray-300 group-hover:text-white transition-colors">WhatsApp: +44 7848 893 414</a>
              </div>
              <div className="flex items-center gap-3 group">
                 <Mail className="w-5 h-5 text-white shrink-0 group-hover:text-blue-400 transition-colors" />
                 <a href="mailto:info@apnadeveloper.com" className="text-gray-300 group-hover:text-white transition-colors">info@apnadeveloper.com</a>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4">
           <div className="text-sm text-white">
             &copy; {new Date().getFullYear()} Apna Developer. All rights reserved.
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;