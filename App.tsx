import React, { useState, Suspense, lazy } from 'react';
import { Github, Twitter, Instagram, Linkedin, Mail, ArrowRight, Loader2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TeaserChat from './components/TeaserChat';
import Background from './components/Background';
import WhatsAppBtn from './components/WhatsAppBtn';
import RevealOnScroll from './components/RevealOnScroll';

// Lazy load heavy components
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Team = lazy(() => import('./components/Team'));
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
            <Hero />
            <WhyChooseUs />
            <WorkProcess />
            <Services isPreview={true} onNavigate={handleNavigate} />
            <Portfolio isPreview={true} onNavigate={handleNavigate} />
            <AboutPreview onNavigate={handleNavigate} />
            <Team isPreview={true} onNavigate={handleNavigate} />
            
            <section className="py-24 px-6 relative z-10">
              <RevealOnScroll>
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                   <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 relative z-10">Ready to Scale Your Brand?</h2>
                   <p className="text-gray-300 max-w-2xl mx-auto mb-8 relative z-10 text-lg">
                     Join hundreds of successful businesses who have transformed their digital presence with Nova Tech.
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
        {currentPage === 'team' && <div className="pt-20"><Team isPreview={false} onNavigate={handleNavigate} /></div>}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'about' && <About />}
      </Suspense>
    );
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 text-white font-sans selection:bg-blue-500/30">
      <Background />
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <WhatsAppBtn />

      <main className="flex-1 transition-opacity duration-300 ease-in-out">
        {renderPage()}
      </main>

      <footer className="relative z-10 w-full p-8 border-t border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-bold text-lg text-white">Nova Tech</span>
            <p className="text-sm text-gray-500">Accelerating digital growth.</p>
          </div>
          
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Nova Tech Agency. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-blue-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-pink-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:info@apnadeveloper.com" aria-label="Email" className="text-gray-500 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      <TeaserChat />
    </div>
  );
};

export default App;