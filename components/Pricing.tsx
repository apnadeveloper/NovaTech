import React, { useState } from 'react';
import { Check, X, ArrowRight, HelpCircle, Star, Zap } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import SEO from './SEO';

type PlanType = 'Starter' | 'Professional' | 'Enterprise';

interface PlanFeature {
  name: string;
  starter: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

interface ServiceCategory {
  id: string;
  title: string;
  plans: PricingPlan[];
  comparison: PlanFeature[];
}

const pricingData: Record<string, ServiceCategory> = {
  'web-design': {
    id: 'web-design',
    title: 'Website Design',
    plans: [
      {
        name: 'Starter',
        price: '$500',
        description: 'Perfect for small businesses and personal portfolios.',
        features: [
          'Custom UI/UX Design',
          '5 Pages',
          'Mobile Responsive',
          'Basic SEO Setup',
          'Stock Photos',
          'Contact Form Integration'
        ]
      },
      {
        name: 'Professional',
        price: '$1,200',
        description: 'Best for growing businesses needing a strong brand identity.',
        isPopular: true,
        features: [
          'Premium Custom Design',
          '10 Pages',
          'Advanced Animations',
          'CMS Integration',
          'Social Media Integration',
          'Speed Optimization',
          '1 Month Support'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For large organizations requiring complex design systems.',
        features: [
          'Design System Creation',
          'Unlimited Pages',
          'User Journey Mapping',
          'Interactive Prototypes',
          'A/B Testing Support',
          'Priority Support',
          'Dedicated Designer'
        ]
      }
    ],
    comparison: [
      { name: 'Pages', starter: '5', professional: '10', enterprise: 'Unlimited' },
      { name: 'Mobile Responsive', starter: true, professional: true, enterprise: true },
      { name: 'Custom Assets', starter: false, professional: true, enterprise: true },
      { name: 'Animations', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom 3D/WebGL' },
      { name: 'Source Files', starter: false, professional: true, enterprise: true },
      { name: 'Revisions', starter: '2 Rounds', professional: 'Unlimited', enterprise: 'Unlimited' }
    ]
  },
  'web-dev': {
    id: 'web-dev',
    title: 'Website Development',
    plans: [
      {
        name: 'Starter',
        price: '$800',
        description: 'Solid foundation for informational websites.',
        features: [
          'React / Next.js Build',
          'Fast Loading Speed',
          'Secure Architecture',
          'Basic Admin Panel',
          'Google Analytics Setup',
          'Deployment'
        ]
      },
      {
        name: 'Professional',
        price: '$2,500',
        description: 'Full-featured web applications for scaling businesses.',
        isPopular: true,
        features: [
          'Full Stack Development',
          'Database Integration',
          'API Development',
          'User Authentication',
          'Payment Gateway',
          'Advanced Security',
          '3 Months Support'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Scalable, high-performance enterprise solutions.',
        features: [
          'Microservices Architecture',
          'Cloud Infrastructure (AWS)',
          'Load Balancing',
          'Automated Testing',
          'CI/CD Pipelines',
          'SLA Guarantee',
          '24/7 Monitoring'
        ]
      }
    ],
    comparison: [
      { name: 'Tech Stack', starter: 'React/Static', professional: 'Next.js/Node', enterprise: 'Custom Stack' },
      { name: 'CMS', starter: 'Headless Basic', professional: 'Custom Dashboard', enterprise: 'Enterprise CMS' },
      { name: 'Database', starter: false, professional: true, enterprise: true },
      { name: 'API Integration', starter: 'Basic', professional: 'Advanced', enterprise: 'Unlimited' },
      { name: 'Support', starter: 'Email', professional: 'Priority Email', enterprise: '24/7 Phone' },
    ]
  },
  'ecommerce': {
    id: 'ecommerce',
    title: 'eCommerce',
    plans: [
      {
        name: 'Starter',
        price: '$1,500',
        description: 'Launch your store quickly and start selling.',
        features: [
          'Shopify/WooCommerce Setup',
          'Standard Theme Customization',
          'Up to 50 Products',
          'Payment Gateway Setup',
          'Basic Shipping Config',
          'Mobile Optimized'
        ]
      },
      {
        name: 'Professional',
        price: '$3,500',
        description: 'Growth-focused store with advanced features.',
        isPopular: true,
        features: [
          'Custom Theme Development',
          'Unlimited Products',
          'Abandoned Cart Recovery',
          'Advanced Filtering',
          'Inventory Management',
          'SEO Optimization',
          'Email Marketing Integration'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Headless commerce for high-volume retailers.',
        features: [
          'Headless Architecture',
          'Custom Checkout Flow',
          'ERP/CRM Integration',
          'Multi-Currency/Language',
          'Advanced Analytics',
          'DDoS Protection',
          'Dedicated Success Manager'
        ]
      }
    ],
    comparison: [
      { name: 'Products', starter: '50', professional: 'Unlimited', enterprise: 'Unlimited' },
      { name: 'Platform', starter: 'Template', professional: 'Custom Theme', enterprise: 'Headless' },
      { name: 'Payment Gateways', starter: 'Standard', professional: 'Multiple', enterprise: 'Custom Logic' },
      { name: 'Integrations', starter: '3', professional: '10+', enterprise: 'Unlimited' },
    ]
  },
  'seo': {
    id: 'seo',
    title: 'SEO Packages',
    plans: [
      {
        name: 'Starter',
        price: '$500/mo',
        description: 'Local SEO to get you on the map.',
        features: [
          'Keyword Research (20)',
          'On-Page Optimization',
          'Google My Business Setup',
          'Monthly Reporting',
          'Basic Backlinking',
          'Content Suggestions'
        ]
      },
      {
        name: 'Professional',
        price: '$1,200/mo',
        description: 'Aggressive growth strategy for national ranking.',
        isPopular: true,
        features: [
          'Keyword Research (50+)',
          'Technical SEO Audit',
          'Content Writing (4 Blogs/mo)',
          'High DA Backlinks',
          'Competitor Analysis',
          'Conversion Optimization',
          'Bi-Weekly Reporting'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Dominance in highly competitive markets.',
        features: [
          'Global SEO Strategy',
          'Unlimited Keywords',
          'PR & Outreach Campaigns',
          'Technical Architecture Consulting',
          'Video SEO',
          'Daily Rank Tracking',
          'Dedicated SEO Team'
        ]
      }
    ],
    comparison: [
      { name: 'Keywords', starter: '20', professional: '50+', enterprise: 'Unlimited' },
      { name: 'Content', starter: 'Guidance', professional: '4 Articles/mo', enterprise: 'Custom Strategy' },
      { name: 'Backlinks', starter: 'Basic', professional: 'High Authority', enterprise: 'Premium PR' },
      { name: 'Reporting', starter: 'Monthly', professional: 'Bi-Weekly', enterprise: 'Real-time Dashboard' },
    ]
  }
};

const faqs = [
  {
    question: "How does billing work?",
    answer: "For project-based work (Design, Dev), we typically require a 50% deposit to start, with the remaining 50% due upon completion. For monthly services (SEO, Marketing), billing is recurring at the start of each cycle."
  },
  {
    question: "Do you offer refunds?",
    answer: "We strive for satisfaction. Deposits are generally non-refundable once work has commenced, as resources are allocated. However, we have a milestone-based approval process to ensure you are happy at every step."
  },
  {
    question: "What is the delivery time?",
    answer: "Timelines vary by project. A standard website takes 2-4 weeks, while complex applications can take 8-12 weeks. We provide a detailed timeline during the proposal phase."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely. You can scale your SEO or maintenance packages at any time. For development projects, we can scope out additional phases as your needs grow."
  },
  {
    question: "Is support included?",
    answer: "Yes! All development projects come with a warranty period (typically 30 days) to fix any bugs. We also offer dedicated ongoing maintenance packages for peace of mind."
  }
];

const testimonials = [
  {
    name: "Jonathan Doe",
    role: "CEO, TechStart",
    text: "The 'Professional' web dev package was exactly what we needed. They delivered a scalable React app that investors loved.",
    stars: 5
  },
  {
    name: "Sarah Miller",
    role: "Marketing Dir., Bloom",
    text: "Switched to their SEO Pro plan and saw a 200% traffic increase in 3 months. The reporting is crystal clear.",
    stars: 5
  },
  {
    name: "Mike Ross",
    role: "Founder, LuxeWear",
    text: "Fair pricing for enterprise-level quality. The eCommerce build was smooth, and the design is stunning.",
    stars: 5
  }
];

interface PricingProps {
  onNavigate: (page: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('web-design');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const category = pricingData[activeCategory];

  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-12">
      <SEO 
        title="Pricing Plans | Web Design & SEO Packages - Apna Developer"
        description="Transparent pricing for website development, eCommerce, and digital marketing. Choose the plan that fits your growth goals."
      />

      {/* Hero Section */}
      <section className="px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 mb-6">
              <Zap className="w-4 h-4" />
              <span>Investment in Growth</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Transparent Pricing. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Real Value.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Choose a plan that fits your goals. No hidden fees — only measurable results and enterprise-grade quality.
            </p>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-gray-200 transition-all hover:scale-105"
            >
              Get Free Audit
            </button>
          </RevealOnScroll>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="px-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4 border-b border-white/10 pb-6">
              {Object.values(pricingData).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {category.plans.map((plan, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className={`relative h-full flex flex-col p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${
                plan.isPopular 
                  ? 'bg-gradient-to-b from-blue-900/20 to-slate-900/50 border-blue-500/50 shadow-2xl shadow-blue-900/20 z-10 scale-105 md:-mt-4' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}>
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm h-10">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-500 ml-2">/project</span>}
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                      <div className={`mt-0.5 rounded-full p-0.5 ${plan.isPopular ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-gray-400'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-3.5 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 ${
                    plan.isPopular 
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Book Consultation' : `Choose ${plan.name}`}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 mb-24">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-2xl font-bold text-white text-center mb-12">Compare Features</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-6 px-4 text-gray-400 font-medium min-w-[200px]">Features</th>
                    <th className="py-6 px-4 text-white font-bold text-center min-w-[150px]">Starter</th>
                    <th className="py-6 px-4 text-blue-400 font-bold text-center min-w-[150px]">Professional</th>
                    <th className="py-6 px-4 text-white font-bold text-center min-w-[150px]">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {category.comparison.map((row, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 text-gray-300 font-medium">{row.name}</td>
                      <td className="py-4 px-4 text-center text-gray-400">
                        {typeof row.starter === 'boolean' ? (
                          row.starter ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-600 mx-auto" />
                        ) : row.starter}
                      </td>
                      <td className="py-4 px-4 text-center text-gray-300 font-semibold bg-white/5">
                        {typeof row.professional === 'boolean' ? (
                          row.professional ? <Check className="w-5 h-5 text-blue-400 mx-auto" /> : <X className="w-5 h-5 text-gray-600 mx-auto" />
                        ) : row.professional}
                      </td>
                      <td className="py-4 px-4 text-center text-gray-400">
                        {typeof row.enterprise === 'boolean' ? (
                          row.enterprise ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-600 mx-auto" />
                        ) : row.enterprise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Testimonials (Mini) */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">"{t.text}"</p>
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-blue-400 text-xs">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 mb-24">
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <HelpCircle className="w-5 h-5 text-blue-500" />
                      <span className="text-lg font-medium text-white">{faq.question}</span>
                    </div>
                    <div className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>
                      <ArrowRight className="w-5 h-5 text-gray-500" />
                    </div>
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="p-6 pt-0 text-gray-400 leading-relaxed pl-15 ml-9">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 to-purple-900 border border-white/10 p-12 text-center">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 relative z-10">Ready to Scale Your Growth?</h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto relative z-10">
                Stop guessing and start growing. Our team is ready to build the digital infrastructure you need to succeed.
              </p>
              <button 
                onClick={() => onNavigate('contact')}
                className="relative z-10 bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Pricing;