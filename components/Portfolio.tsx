import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, ArrowRight, Layers, Eye, Zap, X } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import SEO from './SEO';

interface PortfolioProps {
  isPreview?: boolean;
  onNavigate?: (page: string) => void;
}

interface ProjectItem {
  title: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  link: string;
}

const projects: ProjectItem[] = [
  {
    title: "A1 VPS Hosting",
    category: "Web Hosting",
    image: "https://res.cloudinary.com/dmkmiztl9/image/upload/v1764320673/nybi0yzjpbn8ol7ne3om.webp", 
    description: "High-performance VPS hosting platform with automated provisioning.",
    fullDescription: "A comprehensive VPS hosting solution designed for speed and reliability. Features include automated instance provisioning, real-time resource monitoring, and a custom control panel for easy management. Built with high-availability architecture to ensure 99.9% uptime.",
    link: "#"
  },
  {
    title: "Aspect Zone Properties",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=50&w=400&fm=webp&fit=crop",
    description: "Luxury property portal with virtual tours and lead management.",
    fullDescription: "A premium real estate portal connecting buyers with luxury properties. The platform features 360-degree virtual tours, advanced search filtering, and a robust CRM backend for agents to manage leads and listings efficiently.",
    link: "#"
  },
  {
    title: "Champion Gym",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=50&w=400&fm=webp&fit=crop",
    description: "Dynamic fitness membership site with class scheduling integration.",
    fullDescription: "An energetic website for a modern gym franchise. It includes member portals, class booking systems integrated with calendars, trainer profiles, and an e-commerce section for merchandise.",
    link: "#"
  },
  {
    title: "Elite Graphix",
    category: "Creative Agency",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=50&w=400&fm=webp&fit=crop",
    description: "Portfolio showcase for a premier creative design and branding agency.",
    fullDescription: "A visually immersive portfolio site for a creative agency. It utilizes heavy animations and high-resolution imagery to showcase branding projects, with a focus on storytelling and visual impact.",
    link: "#"
  },
  {
    title: "Fashion Store",
    category: "Shopify",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=50&w=400&fm=webp&fit=crop",
    description: "Modern fashion e-commerce store built on Shopify.",
    fullDescription: "A chic and modern Shopify store optimized for fashion retail. Features include advanced product filtering, lookbook integrations, sizing guides, and a streamlined mobile-first checkout process.",
    link: "#"
  },
  {
    title: "Georgia Green Energy",
    category: "Sustainable Energy",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=50&w=400&fm=webp&fit=crop",
    description: "Corporate website for a sustainable energy solutions provider.",
    fullDescription: "A professional corporate presence for a renewable energy company. The site highlights sustainability impact reports, service details, and includes a calculator for potential energy savings.",
    link: "#"
  },
  {
    title: "XCross Services",
    category: "Home Services",
    image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=50&w=400&fm=webp&fit=crop",
    description: "Service booking platform for home maintenance and repairs.",
    fullDescription: "An on-demand service booking platform connecting homeowners with trusted professionals. Features real-time availability, secure payments, and a review system for service providers.",
    link: "#"
  },
  {
    title: "Hostma",
    category: "Web Hosting",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=50&w=400&fm=webp&fit=crop",
    description: "Secure and scalable web hosting services provider.",
    fullDescription: "A sleek interface for a web hosting company offering shared, VPS, and dedicated hosting. The site focuses on clear pricing tables, feature comparisons, and a seamless onboarding flow.",
    link: "#"
  },
  {
    title: "Trecobox",
    category: "Streaming",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=50&w=400&fm=webp&fit=crop",
    description: "Movie and TV show streaming entertainment hub.",
    fullDescription: "A content-rich entertainment hub for streaming movies and TV shows. The UI mimics top-tier streaming platforms with dark mode aesthetics, personalized recommendations, and smooth playback interfaces.",
    link: "#"
  },
  {
    title: "Kinza Designer",
    category: "Digital Portfolio",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=50&w=400&fm=webp&fit=crop",
    description: "Personal portfolio for a digital designer and marketer.",
    fullDescription: "A minimalist yet bold portfolio for a freelance designer. It showcases project case studies, skill sets, and includes a blog section for design thought leadership.",
    link: "#"
  },
  {
    title: "Korlexo",
    category: "eCommerce",
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=50&w=400&fm=webp&fit=crop",
    description: "Premium smartwatch and accessories online store.",
    fullDescription: "An e-commerce destination for tech wearables. The site emphasizes product features with high-quality close-ups, comparison tools, and customer reviews to drive conversions.",
    link: "#"
  },
  {
    title: "L'Odeur Perfumes",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?q=50&w=400&fm=webp&fit=crop",
    description: "Elegant e-commerce experience for an exclusive fragrance brand.",
    fullDescription: "A luxury e-commerce experience designed to evoke the senses. It features sophisticated typography, atmospheric photography, and a scent profile guide to help customers choose their perfect fragrance.",
    link: "#"
  },
  {
    title: "Fast Restaurant",
    category: "Food & Beverage",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=50&w=400&fm=webp&fit=crop",
    description: "Online ordering system for a fast-food restaurant chain.",
    fullDescription: "A vibrant and appetizing online ordering platform. It supports complex menu customizations, location-based delivery tracking, and loyalty program integration.",
    link: "#"
  },
  {
    title: "RM Gadgets",
    category: "Tech Accessories",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=50&w=400&fm=webp&fit=crop",
    description: "Gadgets and tech accessories online retail store.",
    fullDescription: "A tech-focused retail store with a clean, grid-based layout. It features 'Deal of the Day' countdowns, bundled product offers, and a robust search with instant suggestions.",
    link: "#"
  },
  {
    title: "SK Digital Creator",
    category: "Digital Agency",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=50&w=400&fm=webp&fit=crop",
    description: "Digital marketing agency focused on brand growth.",
    fullDescription: "A corporate website for a digital marketing agency. It outlines services, presents case studies with data visualizations, and offers lead magnets to capture potential client information.",
    link: "#"
  },
  {
    title: "Smaart Cleaning",
    category: "Cleaning",
    image: "https://images.unsplash.com/photo-1585421514738-01798e1e7f3b?q=50&w=400&fm=webp&fit=crop",
    description: "Eco-friendly cleaning services for smart buildings.",
    fullDescription: "A clean and fresh website for a professional cleaning service. It includes an instant quote calculator, before/after galleries, and easy booking forms for residential and commercial clients.",
    link: "#"
  },
  {
    title: "Swanley Phone Repair",
    category: "Repair Services",
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=50&w=400&fm=webp&fit=crop",
    description: "Mobile phone and electronics repair service booking.",
    fullDescription: "A local business website focused on trust and speed. It allows customers to book repair slots, check estimated repair costs, and track the status of their device repair.",
    link: "#"
  },
  {
    title: "Synapse",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=50&w=400&fm=webp&fit=crop",
    description: "Strategic marketing agency for digital transformation.",
    fullDescription: "A forward-thinking agency site using abstract 3D elements to represent innovation. It communicates complex marketing strategies through simple, interactive diagrams.",
    link: "#"
  },
  {
    title: "Velvet Bean",
    category: "Coffee Shop",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=50&w=400&fm=webp&fit=crop",
    description: "Artisan coffee shop website with online menu and reservations.",
    fullDescription: "A cozy and inviting website for a specialty coffee shop. It features a digital menu, table reservation system, and an online shop for coffee beans and brewing equipment.",
    link: "#"
  }
];

const Portfolio: React.FC<PortfolioProps> = ({ isPreview = false, onNavigate }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const displayProjects = isPreview ? projects.slice(0, 4) : projects;

  return (
    <div className={isPreview ? "" : "bg-slate-950"}>
      {!isPreview && (
        <SEO 
          title="Our Portfolio | Case Studies & Success Stories - Apna Developer"
          description="Explore our portfolio of high-performance websites and successful digital marketing campaigns across various industries."
        />
      )}
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
                  onClick={() => setSelectedProject(project)}
                  className="group relative h-72 overflow-hidden rounded-2xl bg-slate-900 border border-white/10 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
                >
                  <div className="absolute inset-0">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      width="400"
                      height="640"
                      loading="lazy"
                      decoding="async"
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

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" 
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-5xl bg-slate-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]" 
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white text-white hover:text-black rounded-full transition-colors backdrop-blur-md"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative shrink-0">
               <img 
                 src={selectedProject.image} 
                 alt={selectedProject.title} 
                 className="w-full h-full object-cover" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent md:hidden"></div>
            </div>
            
            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
              <span className="text-blue-400 font-bold uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                {selectedProject.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{selectedProject.title}</h3>
              
              <div className="prose prose-invert prose-sm text-gray-300 leading-relaxed mb-8 grow">
                <p className="text-lg mb-4 text-white/90">{selectedProject.description}</p>
                <p>{selectedProject.fullDescription}</p>
              </div>
              
              <div className="mt-auto pt-6 border-t border-white/10">
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-gray-200 transition-colors w-full md:w-auto justify-center"
                >
                  Visit Live Site <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;