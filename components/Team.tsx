import React from 'react';
import { Linkedin, Twitter, Mail, ArrowRight, Heart, Users, Coffee } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import SEO from './SEO';

interface TeamProps {
  isPreview?: boolean;
  onNavigate?: (page: string) => void;
}

const team = [
  {
    name: "Alex Carter",
    role: "Founder & CEO",
    bio: "Visionary leader with 10+ years in digital strategy. Formerly led growth at major tech startups.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=50&w=250&fm=webp&fit=crop"
  },
  {
    name: "Sofia Davis",
    role: "Creative Director",
    bio: "Award-winning designer obsessed with UX/UI. Brings a blend of art and functionality to every project.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=50&w=250&fm=webp&fit=crop"
  },
  {
    name: "James Wilson",
    role: "Head of SEO",
    bio: "Data analyst turned growth hacker. Master of technical SEO and algorithmic patterns.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=50&w=250&fm=webp&fit=crop"
  },
  {
    name: "Maya Patel",
    role: "Lead Developer",
    bio: "Full-stack wizard specializing in React & Node. Ensures our solutions are as robust as they are beautiful.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=50&w=250&fm=webp&fit=crop"
  }
];

const Team: React.FC<TeamProps> = ({ isPreview = false, onNavigate }) => {
  return (
    <div className={isPreview ? "" : "bg-slate-950"}>
      {!isPreview && (
        <SEO 
          title="Our Team | Meet the Experts - Apna Developer"
          description="Meet the visionary strategists, creative designers, and expert developers behind Apna Developer's success."
        />
      )}
      <section id="team" className={`py-24 px-6 relative z-10 ${isPreview ? '' : 'pt-32'}`}>
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                {isPreview ? "Meet the Leadership" : "The Team Behind the Magic"}
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                A diverse team of strategists, creatives, and engineers passionate about your success. 
                We are not just a service provider; we are an extension of your team.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="group text-center">
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-purple-500/50 transition-colors">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      loading="lazy"
                      decoding="async"
                      width="200"
                      height="200"
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-purple-400 text-sm mb-3 font-medium">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{member.bio}</p>
                  <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-white"><Linkedin className="w-4 h-4" /></a>
                    <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-white"><Twitter className="w-4 h-4" /></a>
                    <a href="#" aria-label="Email" className="text-gray-500 hover:text-white"><Mail className="w-4 h-4" /></a>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {isPreview && onNavigate && (
            <RevealOnScroll delay={0.3}>
               <div className="flex justify-center mt-12">
                 <button 
                   onClick={() => onNavigate('team')}
                   className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all"
                 >
                   Meet Everyone <ArrowRight className="w-4 h-4" />
                 </button>
               </div>
            </RevealOnScroll>
          )}
        </div>
      </section>

      {!isPreview && (
        <>
          {/* Company Culture */}
          <section className="py-24 px-6 bg-white/5">
             <div className="max-w-7xl mx-auto">
                <RevealOnScroll>
                   <div className="text-center mb-16">
                     <h2 className="text-3xl font-bold text-white mb-4">Our Culture</h2>
                     <p className="text-gray-300 max-w-2xl mx-auto">We believe that happy people make the best products. Our culture is built on trust, continuous learning, and a healthy work-life balance.</p>
                   </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <RevealOnScroll delay={0.1}>
                      <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/10">
                         <Heart className="w-10 h-10 text-red-400 mb-4" />
                         <h3 className="text-xl font-bold text-white mb-2">Passion First</h3>
                         <p className="text-gray-400">We love what we do. That enthusiasm reflects in the quality of our work and the results we deliver.</p>
                      </div>
                   </RevealOnScroll>
                   <RevealOnScroll delay={0.2}>
                      <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/10">
                         <Users className="w-10 h-10 text-blue-400 mb-4" />
                         <h3 className="text-xl font-bold text-white mb-2">Collaborative Spirit</h3>
                         <p className="text-gray-400">No silos. We work together across disciplines to solve complex problems and share knowledge.</p>
                      </div>
                   </RevealOnScroll>
                   <RevealOnScroll delay={0.3}>
                      <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/10">
                         <Coffee className="w-10 h-10 text-yellow-400 mb-4" />
                         <h3 className="text-xl font-bold text-white mb-2">Work-Life Balance</h3>
                         <p className="text-gray-400">Burnout is not a badge of honor. We prioritize mental health and sustainable working paces.</p>
                      </div>
                   </RevealOnScroll>
                </div>
             </div>
          </section>

          {/* Careers / Join Us */}
          <section className="py-24 px-6">
            <RevealOnScroll>
              <div className="max-w-4xl mx-auto text-center">
                 <h2 className="text-3xl font-bold text-white mb-6">Join Our Mission</h2>
                 <p className="text-lg text-gray-400 mb-8">
                   We are always looking for talented individuals to join our growing team. 
                   If you are passionate about digital innovation, we want to hear from you.
                 </p>
                 <a href="mailto:info@apnadeveloper.com" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                   View Open Positions
                 </a>
              </div>
            </RevealOnScroll>
          </section>
        </>
      )}
    </div>
  );
};

export default Team;