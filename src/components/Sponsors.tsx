import React from 'react';
import sponsorsData from '../../data/sponsors.json';

const Sponsors = () => {
  const { sponsors, becomeASponsorLink } = sponsorsData;

  return (
    <section className="py-16 relative overflow-hidden">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {sponsors.map((sponsor, index) => (
            <a
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 bg-white/80 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#B3E5FC] hover:scale-105 group w-full min-w-0"
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="h-10 sm:h-12 md:h-14 w-auto object-contain mb-2 group-hover:scale-110 transition-transform duration-300 max-w-[120px] md:max-w-[140px]"
              />
              <span className="text-[#42A5F5] font-medium text-xs sm:text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center break-words max-w-[90px] sm:max-w-[110px] md:max-w-[130px]">{sponsor.name}</span>
            </a>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={becomeASponsorLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#02569B] text-white px-9 py-3 rounded-full font-semibold shadow-xl hover:bg-[#039BE5] hover:shadow-blue-200 hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#42A5F5] group relative overflow-hidden"
            style={{ boxShadow: '0 4px 24px 0 rgba(66,165,245,0.25)' }}
          >
            <span className="relative z-10 flex items-center">
              <span className="text-base font-bold tracking-wide text-white">Become a Sponsor</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;