import React, { useState } from 'react';
import { Github, Twitter, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import About from './components/About';
import AboutPreview from './components/AboutPreview';
import WhyChooseUs from './components/WhyChooseUs';
import WorkProcess from './components/WorkProcess';
import TeaserChat from './components/TeaserChat';
import Background from './components/Background';
import WhatsAppBtn from './components/WhatsAppBtn';
import RevealOnScroll from './components/RevealOnScroll';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            
            <WhyChooseUs />

            <WorkProcess />
            
            <Services isPreview={true} onNavigate={handleNavigate} />
            
            <Portfolio isPreview={true} onNavigate={handleNavigate} />
            
            <AboutPreview onNavigate={handleNavigate} />

            <Team isPreview={true} onNavigate={handleNavigate} />
            
            {/* Call to Action for Contact */}
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
        );
      case 'services':
        return <Services isPreview={false} onNavigate={handleNavigate} />;
      case 'work':
        return <Portfolio isPreview={false} onNavigate={handleNavigate} />;
      case 'team':
        return <div className="pt-20"><Team isPreview={false} onNavigate={handleNavigate} /></div>;
      case 'contact':
        return <Contact />;
      case 'about':
        return <About />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 text-white font-sans selection:bg-blue-500/30">
      <Background />
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <WhatsAppBtn />

      <main className="flex-1 transition-opacity duration-300 ease-in-out">
        {renderPage()}
      </main>

      {/* Footer */}
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
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:info@apnadeveloper.com" className="text-gray-500 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <TeaserChat />
    </div>
  );
};

export default App;