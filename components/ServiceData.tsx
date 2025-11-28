import React from 'react';
import { 
  Palette, Code2, ShoppingBag, Store, FileCode, Megaphone, Search, 
  ShieldCheck, PenTool, Video, Share2, Terminal 
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
}

export const services: ServiceItem[] = [
  {
    id: "website-design",
    icon: <Palette className="w-6 h-6 text-pink-400" />,
    title: "Website Design",
    description: "Stunning, user-centric designs that captivate your audience and reflect your brand identity.",
    longDescription: "Your website is your digital storefront. We craft visually stunning, highly intuitive designs that not only look good but guide your visitors toward conversion. Our design process starts with understanding your brand archetypes and user personas.",
    features: ["UI/UX Research", "Wireframing & Prototyping", "Mobile-First Design", "Interaction Design"],
    benefits: ["Increased User Engagement", "Lower Bounce Rates", "Stronger Brand Identity"]
  },
  {
    id: "website-development",
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    title: "Website Development",
    description: "Robust, scalable, and high-performance websites built with modern technologies like React and Next.js.",
    longDescription: "We build websites that work as hard as you do. Using cutting-edge technologies like React, Next.js, and Node.js, we develop scalable, secure, and lightning-fast web applications tailored to your business needs.",
    features: ["Custom Front-end Development", "API Integration", "CMS Development", "PWA Implementation"],
    benefits: ["Scalable Architecture", "SEO-Friendly Structure", "Lightning Fast Performance"]
  },
  {
    id: "ecommerce-development",
    icon: <ShoppingBag className="w-6 h-6 text-purple-400" />,
    title: "eCommerce Development",
    description: "Custom online stores optimized for conversions, seamless checkout experiences, and inventory management.",
    longDescription: "Transform visitors into loyal customers with our custom eCommerce solutions. We specialize in building secure, user-friendly, and high-converting online stores that streamline your operations and boost sales.",
    features: ["Custom Cart Functionality", "Payment Gateway Integration", "Inventory Management Systems", "Wishlist & User Profiles"],
    benefits: ["Higher Conversion Rates", "Seamless Checkout Experience", "Automated Sales Processes"]
  },
  {
    id: "shopify-development",
    icon: <Store className="w-6 h-6 text-green-400" />,
    title: "Shopify Development",
    description: "Expert Shopify setup, theme customization, and app integration to power your dropshipping or retail business.",
    longDescription: "Leverage the power of the world's leading eCommerce platform. Whether you need a fresh store setup, custom theme development, or complex app integrations, our Shopify experts have you covered.",
    features: ["Store Setup & Configuration", "Custom Theme Development", "App Integration", "Migration to Shopify"],
    benefits: ["Quick Time to Market", "Reliable Hosting", "Easy Store Management"]
  },
  {
    id: "wordpress-development",
    icon: <FileCode className="w-6 h-6 text-orange-400" />,
    title: "WordPress Development",
    description: "Flexible and easy-to-manage WordPress sites, from custom themes to plugin development.",
    longDescription: "Powering over 40% of the web, WordPress is the go-to for manageability. We create custom WordPress themes and plugins that give you full control over your content without compromising on speed or security.",
    features: ["Custom Theme Design", "Plugin Development", "Speed Optimization", "Security Hardening"],
    benefits: ["Easy Content Updates", "Huge Plugin Ecosystem", "SEO Friendly"]
  },
  {
    id: "digital-marketing",
    icon: <Megaphone className="w-6 h-6 text-red-400" />,
    title: "Digital Marketing",
    description: "Comprehensive strategies including PPC, email marketing, and content campaigns to drive traffic and sales.",
    longDescription: "Don't just build it; make them come. Our data-driven digital marketing strategies cover everything from PPC and Email Marketing to Content Strategy, ensuring you reach your target audience effectively.",
    features: ["PPC Campaign Management", "Email Marketing Automation", "Content Strategy", "Conversion Rate Optimization"],
    benefits: ["Targeted Traffic", "Measurable ROI", "Increased Brand Awareness"]
  },
  {
    id: "seo-optimization",
    icon: <Search className="w-6 h-6 text-cyan-400" />,
    title: "SEO Optimization",
    description: "Boost your organic visibility with technical SEO, keyword research, and on-page optimization.",
    longDescription: "Dominate search results with our comprehensive SEO services. We go beyond basic keywords, diving into technical SEO, backlinks, and content optimization to ensure sustainable, long-term organic growth.",
    features: ["Technical SEO Audits", "Keyword Research & Strategy", "On-Page Optimization", "Link Building"],
    benefits: ["Sustainable Organic Traffic", "Higher Search Rankings", "Increased Authority"]
  },
  {
    id: "speed-security",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    title: "Speed & Web Security",
    description: "Lightning-fast load times and ironclad security protocols to protect your data and improve user experience.",
    longDescription: "In the digital age, speed is money and security is trust. We optimize your site for core web vitals and implement military-grade security protocols to protect your business and your customers.",
    features: ["Core Web Vitals Optimization", "SSL & Firewall Setup", "Malware Scanning & Removal", "CDN Implementation"],
    benefits: ["Better User Experience", "Improved SEO Rankings", "Data Protection"]
  },
  {
    id: "graphic-design",
    icon: <PenTool className="w-6 h-6 text-yellow-400" />,
    title: "Graphic Design",
    description: "Eye-catching visuals for logos, branding materials, social media posts, and marketing collateral.",
    longDescription: "Visuals speak louder than words. Our creative team designs compelling logos, branding kits, and marketing collateral that leave a lasting impression and communicate your brand's value instantly.",
    features: ["Logo & Identity Design", "Marketing Collateral", "Social Media Assets", "Infographics"],
    benefits: ["Professional Brand Image", "Consistent Visual Language", "Higher Engagement"]
  },
  {
    id: "video-editing",
    icon: <Video className="w-6 h-6 text-indigo-400" />,
    title: "Video Editing",
    description: "Professional video editing for commercials, social media reels, and corporate presentations.",
    longDescription: "Capture attention in the scrolling economy. We produce high-quality video content for social media, ads, and corporate storytelling that engages viewers and drives action.",
    features: ["Commercial Editing", "Social Media Reels/Shorts", "Motion Graphics", "Color Grading"],
    benefits: ["Higher Retention Rates", "Viral Potential", "Clearer Messaging"]
  },
  {
    id: "social-media-marketing",
    icon: <Share2 className="w-6 h-6 text-rose-400" />,
    title: "Social Media Marketing",
    description: "Engage your audience on Instagram, LinkedIn, and TikTok with viral content strategies.",
    longDescription: "Build a community around your brand. We manage your social presence across platforms like Instagram, LinkedIn, and TikTok, creating content that sparks conversation and builds loyalty.",
    features: ["Community Management", "Content Calendar Creation", "Influencer Collaboration", "Social Analytics"],
    benefits: ["Loyal Community", "Direct Customer Feedback", "Viral Reach"]
  },
  {
    id: "python-development",
    icon: <Terminal className="w-6 h-6 text-slate-400" />,
    title: "Python Script Development",
    description: "Custom automation scripts, data scraping, and backend logic to streamline your business operations.",
    longDescription: "Automate the boring stuff. We develop custom Python scripts for web scraping, data analysis, and process automation, saving you hundreds of hours of manual work.",
    features: ["Web Scraping & Crawling", "Process Automation", "Data Analysis Scripts", "API Development"],
    benefits: ["Operational Efficiency", "Data-Driven Insights", "Cost Reduction"]
  }
];