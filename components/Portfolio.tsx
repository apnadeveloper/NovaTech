import React from 'react';
import { ExternalLink, ArrowUpRight, ArrowRight, Layers, Eye, Zap } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface PortfolioProps {
  isPreview?: boolean;
  onNavigate?: (page: string) => void;
}

const projects = [
  {
    title: "A1 VPS Hosting",
    category: "Web Hosting",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=800&auto=format&fit=crop", // Updated Server Image
    description: "High-performance VPS hosting platform with automated provisioning."
  },
  {
    title: "Aspect Zone Properties",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    description: "Luxury property portal with virtual tours and lead management."
  },
  {
    title: "Champion Gym",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
    description: "Dynamic fitness membership site with class scheduling integration."
  },
  {
    title: "Elite Graphix",
    category: "Creative Agency",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
    description: "Portfolio showcase for a premier creative design and branding agency."
  },
  {
    title: "Fashion Store",
    category: "Shopify",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
    description: "Modern fashion e-commerce store built on Shopify."
  },
  {
    title: "Georgia Green Energy",
    category: "Sustainable Energy",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
    description: "Corporate website for a sustainable energy solutions provider."
  },
  {
    title: "XCross Services",
    category: "Home Services",
    image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=800&auto=format&fit=crop", // Updated Home Service Image
    description: "Service booking platform for home maintenance and repairs."
  },
  {
    title: "Hostma",
    category: "Web Hosting",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    description: "Secure and scalable web hosting services provider."
  },
  {
    title: "Trecobox",
    category: "Streaming",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=800&auto=format&fit=crop",
    description: "Movie and TV show streaming entertainment hub."
  },
  {
    title: "Kinza Designer",
    category: "Digital Portfolio",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=800&auto=format&fit=crop",
    description: "Personal portfolio for a digital designer and marketer."
  },
  {
    title: "Korlexo",
    category: "eCommerce",
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=800&auto=format&fit=crop",
    description: "Premium smartwatch and accessories online store."
  },
  {
    title: "L'Odeur Perfumes",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?q=80&w=800&auto=format&fit=crop",
    description: "Elegant e-commerce experience for an exclusive fragrance brand."
  },
  {
    title: "Fast Restaurant",
    category: "Food & Beverage",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
    description: "Online ordering system for a fast-food restaurant chain."
  },
  {
    title: "RM Gadgets",
    category: "Tech Accessories",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=800&auto=format&fit=crop",
    description: "Gadgets and tech accessories online retail store."
  },
  {
    title: "SK Digital Creator",
    category: "Digital Agency",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop",
    description: "Digital marketing agency focused on brand growth."
  },
  {
    title: "Smaart Cleaning",
    category: "Cleaning",
    image: "https://images.unsplash.com/photo-1585421514738-01798e1e7f3b?q=80&w=800&auto=format&fit=crop", // Updated Cleaning Image
    description: "Eco-friendly cleaning services for smart buildings."
  },
  {
    title: "Swanley Phone Repair",
    category: "Repair Services",
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=800&auto=format&fit=crop", // Updated Repair Image
    description: "Mobile phone and electronics repair service booking."
  },
  {
    title: "Synapse",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    description: "Strategic marketing agency for digital transformation."
  },
  {
    title: "Velvet Bean",
    category: "Coffee Shop",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop",
    description: "Artisan coffee shop website with online menu and reservations."
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
              <RevealOnScroll key={index} delay={index * 0.05}>
                <div 
                  className="group relative h-72 overflow-hidden rounded-2xl bg-slate-900 border border-white/10 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className="absolute inset-0">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      width="600"
                      height="800"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-100" 
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 block">{project.category}</span>
                      <h3 className="text-xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                      <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 border border-white/10">
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