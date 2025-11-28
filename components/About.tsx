import React from 'react';
import { Calendar, Globe2 } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import SEO from './SEO';

const About: React.FC = () => {
  return (
    <div className="bg-slate-950">
      <SEO 
        title="About Us | Our Story & Mission - Apna Developer"
        description="Learn about Apna Developer's mission to democratize enterprise-grade digital strategies for businesses worldwide."
      />
      <div className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <RevealOnScroll>
            <span className="text-purple-500 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
            <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6">
              We Are Apna Developer
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Founded in 2023, Apna Developer emerged from a simple belief: Digital marketing shouldn't be a black box. We combine creative artistry with data science to build brands that don't just survive, but thrive in the digital age.
            </p>
          </RevealOnScroll>
        </div>

        {/* Vision & Mission */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
          <RevealOnScroll delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=50&w=500&fm=webp&fit=crop" 
                alt="Team working together" 
                loading="lazy"
                decoding="async"
                width="600"
                height="450"
                className="w-full h-full object-cover opacity-80 hover:scale-105 transition duration-700"
              />
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.4}>
            <div className="space-y-8">
              <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                  To empower businesses of all sizes with enterprise-grade digital strategies. We believe in transparency, agility, and results that speak for themselves. We aim to democratize access to high-end SEO and development tools.
                  </p>
              </div>
              
              <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Technology First</h3>
                  <p className="text-gray-300 leading-relaxed">
                  We are not just marketers; we are technologists. We utilize cutting-edge AI for predictive analytics, automated reporting, and personalized content generation. This ensures your campaigns are always ahead of the curve.
                  </p>
              </div>
              
              <h3 className="text-2xl font-bold text-white">Why Choose Us?</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                  <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                  Data-Driven Decision Making
                </li>
                <li className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                  <span className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                  Full-Stack Digital Expertise
                </li>
                <li className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                  <span className="w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]"></span>
                  Dedicated Support Teams & 24/7 Monitoring
                </li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>

        {/* Stats Section */}
        <RevealOnScroll>
            <div className="max-w-7xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-12 mb-24">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                   <div>
                       <div className="text-4xl font-bold text-white mb-2">500+</div>
                       <div className="text-sm text-gray-500 uppercase tracking-widest">Clients Served</div>
                   </div>
                   <div>
                       <div className="text-4xl font-bold text-white mb-2">1k+</div>
                       <div className="text-sm text-gray-500 uppercase tracking-widest">Keywords Ranked</div>
                   </div>
                   <div>
                       <div className="text-4xl font-bold text-white mb-2">1k</div>
                       <div className="text-sm text-gray-500 uppercase tracking-widest">Satisfied Clients</div>
                   </div>
                   <div>
                       <div className="text-4xl font-bold text-white mb-2">15</div>
                       <div className="text-sm text-gray-500 uppercase tracking-widest">Industry Awards</div>
                   </div>
               </div>
            </div>
        </RevealOnScroll>

        {/* Timeline Section */}
        <section className="mb-24">
           <div className="max-w-4xl mx-auto">
             <RevealOnScroll>
               <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
             </RevealOnScroll>
             <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
               
               <RevealOnScroll>
                 <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-purple-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-4 rounded-xl border border-white/10">
                       <div className="flex items-center justify-between space-x-2 mb-1">
                          <div className="font-bold text-white">Inception</div>
                          <time className="font-caveat font-medium text-purple-400">2023</time>
                       </div>
                       <div className="text-gray-400">Founded with a vision to revolutionize the agency model using AI.</div>
                    </div>
                 </div>
               </RevealOnScroll>

               <RevealOnScroll delay={0.1}>
                 <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-4 rounded-xl border border-white/10">
                       <div className="flex items-center justify-between space-x-2 mb-1">
                          <div className="font-bold text-white">Global Expansion</div>
                          <time className="font-caveat font-medium text-blue-400">2024</time>
                       </div>
                       <div className="text-gray-400">Opened new virtual offices in London and New York. Reached 100+ clients.</div>
                    </div>
                 </div>
               </RevealOnScroll>

               <RevealOnScroll delay={0.2}>
                 <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-green-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-4 rounded-xl border border-white/10">
                       <div className="flex items-center justify-between space-x-2 mb-1">
                          <div className="font-bold text-white">The Future</div>
                          <time className="font-caveat font-medium text-green-400">2025+</time>
                       </div>
                       <div className="text-gray-400">Developing proprietary SaaS tools for automated SEO and content generation.</div>
                    </div>
                 </div>
               </RevealOnScroll>

             </div>
           </div>
        </section>

        {/* Global Reach */}
        <section className="mb-24">
           <RevealOnScroll>
              <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-3xl p-8 md:p-12 border border-white/10 text-center">
                 <Globe2 className="w-12 h-12 text-white mx-auto mb-6" />
                 <h2 className="text-3xl font-bold text-white mb-6">Global Reach, Local Impact</h2>
                 <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                    While we are a digital-first agency, our impact is felt worldwide. We work with clients across 4 continents, bringing global best practices to local markets.
                 </p>
                 <div className="flex flex-wrap justify-center gap-4">
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white">United Kingdom</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white">USA</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white">Canada</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white">UAE</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white">Australia</span>
                 </div>
              </div>
           </RevealOnScroll>
        </section>
      </div>
    </div>
  );
};

export default About;