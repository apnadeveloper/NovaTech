import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=60&w=1200&auto=format&fit=crop', // Default OG image
  url 
}) => {
  useEffect(() => {
    // Update Document Title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMeta = (selector: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        
        if (selector.includes('[name="')) {
          const name = selector.split('name="')[1].split('"')[0];
          element.setAttribute('name', name);
        } else if (selector.includes('[property="')) {
          const property = selector.split('property="')[1].split('"')[0];
          element.setAttribute('property', property);
        }
        
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard SEO
    updateMeta('meta[name="description"]', description);

    // Open Graph / Facebook
    updateMeta('meta[property="og:title"]', title);
    updateMeta('meta[property="og:description"]', description);
    updateMeta('meta[property="og:image"]', image);
    updateMeta('meta[property="og:type"]', 'website');
    updateMeta('meta[property="og:url"]', url || window.location.href);

    // Twitter
    updateMeta('meta[name="twitter:card"]', 'summary_large_image');
    updateMeta('meta[name="twitter:title"]', title);
    updateMeta('meta[name="twitter:description"]', description);
    updateMeta('meta[name="twitter:image"]', image);

  }, [title, description, image, url]);

  return null;
};

export default SEO;