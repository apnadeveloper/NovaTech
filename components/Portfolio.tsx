import React from 'react';
import { ExternalLink, ArrowUpRight, ArrowRight, Layers, Eye, Zap } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface PortfolioProps {
  isPreview?: boolean;
  onNavigate?: (page: string) => void;
}

const projects = [
  {
    title: "Neon FinTech",
    category: "Web Design & UI/UX",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    description: "High-performance interface for a next-gen banking platform."
  },
  {
    title: "RankBoost Pro",
    category: "SEO Optimization",
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=600&auto=format&fit=crop",
    description: "Achieved #1 rankings for high-volume keywords in 3 months."
  },
  {
    title: "ClickFlow Ads",
    category: "PPC Advertising",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    description: "Reduced CPA by 40% while doubling conversion volume."
  },
  {
    title: "ViralStream",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop",
    description: "Cross-platform campaign reaching 5M+ organic impressions."
  },
  {
    title: "CodeCraft SaaS",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=600&auto=format&fit=crop",
    description: "Full-stack React application with real-time data analytics."
  },
  {
    title: "StoryBrand Blog",
    category: "Content Strategy",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop",
    description: "Content hub implementation increasing retention by 200%."
  },
  {
    title: "MarketPulse",
    category: "Data Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    description: "Custom dashboarding for enterprise marketing teams."
  },
  {
    title: "MailScale",
    category: "Email Marketing",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=600&auto=format&fit=crop",
    description: "Automated drip campaigns generating $50k monthly revenue."
  }
];

const Portfolio: React.FC<PortfolioProps> = ({ isPreview = false, onNavigate }) => {
  const displayProjects = isPreview ? projects.slice(0, 4) : projects;

  return (
    <div className={isPreview ? "" : "bg-slate-950"}>
      <section className={`py-24 px-6 relative z-10 ${isPreview ? '' : 'pt-32'}`}>
        <div className="max-w-[1400px] mx-auto">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {isPreview ? "Featured Projects" : "Our Work Portfolio"}
                </h2>
                <p className="text-gray-300 max-w-xl">
                  We engineer digital experiences that drive measurable growth across all channels.
                  From technical SEO audits to full-scale web applications.
                </p>
              </div>
              {isPreview && onNavigate && (
                <button 
                  onClick={() => onNavigate('work')}
                  className="hidden md:flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-white transition-colors"
                >
                  View All Projects <ArrowUpRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayProjects.map((project, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div 
                  className="group relative h-80 overflow-hidden rounded-2xl bg-white/5 border border-white/10 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className="absolute inset-0">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      loading="lazy"
                      width="600"
                      height="800"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                  </div>
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-2 block">{project.category}</span>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-white/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {isPreview && onNavigate && (
            <RevealOnScroll delay={0.2}>
              <div className="flex md:hidden justify-center mt-8">
                <button 
                  onClick={() => onNavigate('work')}
                  className="flex items-center gap-2 text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white/10"
                >
                  View All Projects <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </RevealOnScroll>
          )}
        </div>
      </section>

      {!isPreview && (
        <>
          {/* Design Philosophy Section */}
          <section className="py-24 px-6 bg-white/5 border-y border-white/5">
            <div className="max-w-7xl mx-auto">
              <RevealOnScroll>
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-white mb-4">Our Design Philosophy</h2>
                  <p className="text-gray-300 max-w-2xl mx-auto">We don't just create pretty interfaces. We build functional systems rooted in user behavior and business logic.</p>
                </div>
              </RevealOnScroll>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <RevealOnScroll delay={0.1}>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <Eye className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white">User-Centric</h3>
                    <p className="text-gray-400">Every pixel is placed with the user in mind. We prioritize accessibility, intuitive navigation, and seamless interactions.</p>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={0.2}>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                      <Layers className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Scalable Architecture</h3>
                    <p className="text-gray-400">We build systems that grow with you. Our modular codebases ensure easy maintenance and future expandability.</p>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={0.3}>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400">
                      <Zap className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Performance First</h3>
                    <p className="text-gray-400">Speed is a feature. We optimize assets, code splitting, and caching to ensure lightning-fast load times.</p>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-32 px-6">
            <RevealOnScroll>
              <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-12 border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                <h2 className="text-4xl font-bold text-white mb-6 relative z-10">Have a project in mind?</h2>
                <p className="text-xl text-gray-300 mb-8 relative z-10">Let's turn your vision into a reality. Our team is ready to onboard new challenges.</p>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="relative z-10 bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105"
                >
                  Start Your Project
                </button>
              </div>
            </RevealOnScroll>
          </section>
        </>
      )}
    </div>
  );
};

export default Portfolio;