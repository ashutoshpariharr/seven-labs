import React, { useState, useEffect } from 'react';
import { Box } from 'lucide-react';

const LogoMarquee = () => {
  // Sample company logos - replace these with your actual client logos
  const logos = [
    { name: 'Company A', color: '#3B82F6' },
    { name: 'Company B', color: '#EF4444' },
    { name: 'Company C', color: '#10B981' },
    { name: 'Company D', color: '#F59E0B' },
    { name: 'Company E', color: '#8B5CF6' },
    { name: 'Company F', color: '#EC4899' },
    { name: 'Company G', color: '#06B6D4' },
    { name: 'Company H', color: '#F97316' },
  ];

  // Duplicate logos to create seamless loop
  const duplicatedLogos = [...logos, ...logos];
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-12 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8">Trusted By Leading Companies</h2>
      
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-gray-100 to-transparent z-10"></div>
        
        {/* Marquee container */}
        <div 
          className="flex items-center overflow-hidden" 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="flex animate-marquee whitespace-nowrap"
            style={{ 
              animationPlayState: isHovered ? 'paused' : 'running',
              animationDuration: '25s'
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={`${logo.name}-${index}`} 
                className="flex flex-col items-center justify-center mx-8 transition-transform hover:scale-110"
              >
                <Box 
                  size={64} 
                  color={logo.color} 
                  className="mb-2"
                />
                <span className="font-medium text-gray-700">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee;