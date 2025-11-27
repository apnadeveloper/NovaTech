import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '4s' }}></div>
      
      {/* Animated Shapes */}
      <div className="absolute inset-0 opacity-20">
        {/* Rotating Squares */}
        <div className="absolute top-[15%] left-[10%] w-24 h-24 border border-blue-500/30 rounded-xl animate-spin-slow"></div>
        <div className="absolute bottom-[20%] right-[10%] w-32 h-32 border border-purple-500/30 rounded-xl animate-spin-reverse-slow"></div>
        
        {/* Floating Triangles (using CSS borders) */}
        <div 
          className="absolute top-[40%] right-[20%] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[26px] border-b-cyan-500/30 animate-float"
          style={{ transform: 'rotate(15deg)' }}
        ></div>
        <div 
          className="absolute bottom-[30%] left-[15%] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[17px] border-b-pink-500/30 animate-float-delayed"
          style={{ transform: 'rotate(-15deg)' }}
        ></div>

        {/* Pulsing Circles */}
        <div className="absolute top-[10%] right-[30%] w-4 h-4 bg-white/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[40%] left-[5%] w-6 h-6 bg-blue-400/20 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-10 animate-float"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDuration: Math.random() * 10 + 15 + 's',
              animationDelay: Math.random() * 5 + 's',
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={`l-${i}`}
            className="absolute bg-blue-400 rounded-full opacity-10 animate-float-delayed"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDuration: Math.random() * 10 + 20 + 's',
              animationDelay: Math.random() * 5 + 's',
            }}
          />
        ))}
      </div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
    </div>
  );
};

export default Background;