import React from 'react';
import { 
  Palette, Code2, ShoppingBag, Store, FileCode, Megaphone, Search, 
  ShieldCheck, PenTool, Video, Share2, Terminal, ArrowRight, 
  Stethoscope, Landmark, Briefcase, GraduationCap, Building2, Plus, Minus 
} from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import SEO from './SEO';

interface ServicesProps {
  isPreview?: boolean;
  onNavigate?: (page: string) => void;
}

const services = [
  {
    icon: <Palette className="w-6 h-6 text-pink-400" />,
    title: "Website Design",
    description: "Stunning, user-centric designs that captivate your audience and reflect your brand identity."
  },
  {
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    title: "Website Development",
    description: "Robust, scalable, and high-performance websites built with modern technologies like React and Next.js."
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-purple-400" />,
    title: "eCommerce Development",
    description: "Custom online stores optimized for conversions, seamless checkout experiences, and inventory management."
  },
  {
    icon: <Store className="w-6 h-6 text-green-400" />,
    title: "Shopify Development",
    description: "Expert Shopify setup, theme customization, and app integration to power your dropshipping or retail business."
  },
  {
    icon: <FileCode className="w-6 h-6 text-orange-400" />,
    title: "WordPress Development",
    description: "Flexible and easy-to-manage WordPress sites, from custom themes to plugin development."
  },
  {
    icon: <Megaphone className="w-6 h-6 text-red-400" />,
    title: "Digital Marketing",
    description: "Comprehensive strategies including PPC, email marketing, and content campaigns to drive traffic and sales."
  },
  {
    icon: <Search className="w-6 h-6 text-cyan-400" />,
    title: "SEO Optimization",
    description: "Boost your organic visibility with technical SEO, keyword research, and on-page optimization."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    title: "Speed & Web Security",
    description: "Lightning-fast load times and ironclad security protocols to protect your data and improve user experience."
  },
  {
    icon: <PenTool className="w-6 h-6 text-yellow-400" />,
    title: "Graphic Design",
    description: "Eye-catching visuals for logos, branding materials, social media posts, and marketing collateral."
  },
  {
    icon: <Video className="w-6 h-6 text-indigo-400" />,
    title: "Video Editing",
    description: "Professional video editing for commercials, social media reels, and corporate presentations."
  },
  {
    icon: <Share2 className="w-6 h-6 text-rose-400" />,
    title: "Social Media Marketing",
    description: "Engage your audience on Instagram, LinkedIn, and TikTok with viral content strategies."
  },
  {
    icon: <Terminal className="w-6 h-6 text-slate-400" />,
    title: "Python Script Development",
    description: "Custom automation scripts, data scraping, and backend logic to streamline your business operations."
  }
];

const industries = [
  { icon: <ShoppingBag />, name: "E-Commerce" },
  { icon: <Stethoscope />, name: "Healthcare" },
  { icon: <Landmark />, name: "FinTech" },
  { icon: <Briefcase />, name: "Corporate" },
  { icon: <GraduationCap />, name: "Education" },
  { icon: <Building2 />, name: "Real Estate" },
];

const faqs = [
  {
    question: "How long does it take to see results from SEO?",
    answer: "SEO is a long-term strategy. Typically, you can expect to see noticeable improvements in ranking and traffic within 3 to 6 months, depending on the competitiveness of your industry."
  },
  {
    question: "Do you offer custom packages?",
    answer: "Absolutely. We understand that every business is unique. We tailor our digital marketing and development packages to align specifically with your goals and budget."
  },
  {
    question: "What technology stack do you use for web development?",
    answer: "We specialize in modern technologies like React, Next.js, Node.js, and TypeScript, ensuring your website is fast, secure, and scalable."
  },
  {
    question: "How do you report on campaign performance?",
    answer: "We provide comprehensive monthly reports and have a real-time dashboard where you can track key metrics like traffic, conversions, and ROI."
  }
];

const Services: React.FC<ServicesProps> = ({ isPreview = false, onNavigate }) => {
  const displayServices = isPreview ? services.slice(0, 3) : services;
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={isPreview ? "" : "bg-slate-950"}>
      {!isPreview && (
        <SEO 
          title="Our Services | Web Design, SEO, Digital Marketing - Apna Developer"
          description="Comprehensive digital solutions including Website Development, eCommerce, SEO Optimization, Graphic Design, and Video Editing."
        />
      )}
      {/* Main Services Grid */}
      <section id="services" className={`py-24 px-6 relative z-10 ${isPreview ? '' : 'pt-32'}`}>
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                {isPreview ? "Our Core Services" : "Comprehensive Digital Solutions"}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                From traffic generation to conversion optimization, we cover every aspect of your digital journey.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayServices.map((service, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div 
                  className="group h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10 flex flex-col"
                >
                  <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit group-hover:bg-white/10 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm mb-4 flex-grow">
                    {service.description}
                  </p>
                  {!isPreview && (
                     <div className="flex items-center text-blue-400 text-sm font-medium mt-auto group-hover:text-white transition-colors">
                       Learn more <ArrowRight className="w-4 h-4 ml-2" />
                     </div>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {isPreview && onNavigate && (
            <RevealOnScroll delay={0.3}>
              <div className="flex justify-center mt-12">
                <button 
                  onClick={() => onNavigate('services')}
                  className="group flex items-center gap-2 text-white border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                >
                  View All Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </RevealOnScroll>
          )}
        </div>
      </section>

      {/* Additional Sections for Full Page */}
      {!isPreview && (
        <>
          {/* Industries Section */}
          <section className="py-24 px-6 bg-gradient-to-b from-transparent to-black/30 border-y border-white/5">
            <div className="max-w-7xl mx-auto">
              <RevealOnScroll>
                <h2 className="text-3xl font-bold text-center text-white mb-16">Industries We Empower</h2>
              </RevealOnScroll>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {industries.map((industry, idx) => (
                  <RevealOnScroll key={idx} delay={idx * 0.1}>
                    <div className="flex flex-col items-center gap-4 group p-4 rounded-xl hover:bg-white/5 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300">
                        {React.cloneElement(industry.icon as React.ReactElement<any>, { size: 32 })}
                      </div>
                      <span className="text-gray-300 font-medium">{industry.name}</span>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-24 px-6">
            <div className="max-w-3xl mx-auto">
              <RevealOnScroll>
                <div className="text-center mb-16">
                   <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                   <p className="text-gray-400">Everything you need to know about working with Apna Developer.</p>
                </div>
              </RevealOnScroll>
              
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <RevealOnScroll key={idx} delay={idx * 0.1}>
                    <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
                      <button 
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                      >
                        <span className="text-lg font-medium text-white">{faq.question}</span>
                        {openFaq === idx ? <Minus className="w-5 h-5 text-blue-400" /> : <Plus className="w-5 h-5 text-gray-400" />}
                      </button>
                      <div 
                        className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <p className="p-6 pt-0 text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Services;