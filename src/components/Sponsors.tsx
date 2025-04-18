import React from 'react';
import sponsorsData from '../../data/sponsors.json';

const Sponsors = () => {
  const { sponsors, becomeASponsorLink } = sponsorsData;

  return (
    <section className="py-16 bg-gradient-to-r from-[#E3F2FD] to-[#FFFDE7] relative overflow-hidden">
      {/* Flutter pattern background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <img src="/flutter-pattern.svg" className="w-full h-full object-cover" alt="Flutter pattern background" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-8">
          <img src="/flutter-logo.svg" alt="Flutter Logo" className="w-12 h-12 mb-2" />
          <span className="text-[#42A5F5] font-semibold uppercase tracking-wider text-sm mb-2">Supported By</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-[#02569B] drop-shadow">Our Sponsors</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <a
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white/80 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#B3E5FC] hover:scale-105 group"
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="h-14 w-auto object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-[#42A5F5] font-medium text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{sponsor.name}</span>
            </a>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={becomeASponsorLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#42A5F5] via-[#039BE5] to-[#00C6FB] text-white px-9 py-3 rounded-full font-semibold shadow-xl hover:shadow-blue-200 hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#42A5F5] group relative overflow-hidden"
            style={{ boxShadow: '0 4px 24px 0 rgba(66,165,245,0.25)' }}
          >
            <span className="absolute -inset-px rounded-full animate-gradient-move bg-gradient-to-r from-[#42A5F5] via-[#039BE5] to-[#00C6FB] opacity-40 group-hover:opacity-60 blur-sm z-0" aria-hidden="true"></span>
            <span className="relative z-10 flex items-center">
              <svg className="w-7 h-7 mr-2 animate-bounce-slow drop-shadow-md" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="sponsorGradient" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="#FFF" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#42A5F5" stopOpacity="0.8" />
                  </radialGradient>
                </defs>
                <circle cx="16" cy="16" r="14" fill="url(#sponsorGradient)" />
                <path d="M10 18.5L16 24L22 18.5" stroke="#02569B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 8V24" stroke="#039BE5" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 14L16 18L20 14" stroke="#42A5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-base font-bold tracking-wide bg-gradient-to-r from-white via-[#B3E5FC] to-white bg-clip-text text-transparent">Become a Sponsor</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;