import React, { useState, useEffect } from 'react';

interface DelayedLoaderProps {
  children: React.ReactNode;
  delay: number;
}

const DelayedLoader: React.FC<DelayedLoaderProps> = ({ children, delay }) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Defer rendering to avoid blocking the main thread during initial load
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!shouldRender) return null;

  return <>{children}</>;
};

export default DelayedLoader;